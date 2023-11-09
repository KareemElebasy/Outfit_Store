<template>
    <div
      class="products_filter_wrapper"
      :class="{ small_screens_filter: isSmallScreensFilter }"
    >
      <button class="close_btn" @click="$emit('closeFilter')">
        <i class="fa-solid fa-x"></i>
      </button>
      <!-- Start Reset Button -->
      <div class="btn_wrapper2">
        <span>{{ $t('BUTTONS.resetFilter') }}</span>
        <button type="button" @click="resetFiter()">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
      
      <form @submit.prevent="fireFilter">
        <v-expansion-panels multiple v-model="activePanel">
          <v-expansion-panel v-for="option in filterOptions" :key="option.id">
            <!-- Start Header  When Add Currancy-->
            <v-expansion-panel-header v-if="option.id == 'filter_pricesrange'">
              {{ option.title }}
              <strong> ( {{ $t('APP_CURRENCY') }} )</strong>
            </v-expansion-panel-header>
            <!--End  Header  When Add Currancy-->
            <v-expansion-panel-header v-else>
              {{ option.title }}
            </v-expansion-panel-header>
  
            <!-- *************** Start:: Sort Option Filter *************** -->
            <v-expansion-panel-content v-if="option.id == 'filter_categories'">
              <ul class="filter_categories_list">
                <li
                  class="filter_category"
                  v-for="item in option.categories"
                  :key="item.key"
                >
                  <div class="filter_category_view">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="filter_sort_option"
                      :id="`sort-option-${item.key}`"
                      :value="item.key"
                      v-model="OptionsToFireFilter.sortOption"
                    />
                    <label :for="`sort-option-${item.key}`">
                      {{ item.value }}
                    </label>
                  </div>
                </li>
              </ul>
            </v-expansion-panel-content>
            <!-- *************** End:: Sort Option Filter *************** -->
  
            <!-- *************** Start:: Colors Filter *************** -->
            <v-expansion-panel-content v-if="option.id == 'filter_colors'">
              <ul class="filter_colors_list">
                <li
                  class="filter_color"
                  v-for="item in option.colors"
                  :key="item.id"
                >
                  <div class="filter_color_view">
                    <input
                      type="checkbox"
                      name="filter_colors"
                      :id="`color-${item.id}`"
                      :value="item"
                      v-model="OptionsToFireFilter.colors"
                    />
                    <label :for="`color-${item.id}`">
                      <img v-if="item.image" :src="item.image" alt="color" />
                      <span
                        v-else-if="item.hex"
                        :style="{ 'background-color': item.hex }"
                      ></span>
                    </label>
                  </div>
                </li>
              </ul>
            </v-expansion-panel-content>
            <!-- *************** End:: Colors Filter *************** -->
            <!-- *************** Start:: materials Filter *************** -->
            <v-expansion-panel-content v-if="option.id == 'filter_materials'">
              <v-expansion-panels multiple v-model="activePanelInner">
                <v-expansion-panel
                  class="filter_brands_list"
                  v-for="(features, index) in option.materials"
                  :key="index"
                >
                  <v-expansion-panel-header>
                    {{ features.name }}
                  </v-expansion-panel-header>
                  <v-expansion-panel-content class="filter_brand">
                    <div
                      class="filter_brand_view"
                      v-for="feature in features.values"
                      :key="feature.id"
                    >
                      <input
                        type="checkbox"
                        class="form-check-input"
                        name="filter_materials"
                        :id="`material-${feature.id}`"
                        :value="feature"
                        v-model="OptionsToFireFilter.materials"
                      />
                      <label :for="`material-${feature.id}`">
                        <pre>{{ feature.value }}</pre>
                      </label>
                    </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-expansion-panel-content>
  
            <!-- *************** End:: materials Filter *************** -->
  
            <!-- *************** Start:: Sizes Filter *************** -->
            <v-expansion-panel-content v-if="option.id == 'filter_sizes'">
              <ul class="filter_sizes_list">
                <li
                  class="filter_size"
                  v-for="item in option.sizes"
                  :key="item.id"
                >
                  <div class="filter_size_view">
                    <input
                      type="checkbox"
                      name="filter_sizes"
                      :id="`size-${item.id}`"
                      :value="item"
                      v-model="OptionsToFireFilter.sizes"
                    />
                    <label :for="`size-${item.id}`">
                      {{ item.name }}
                    </label>
                  </div>
                </li>
              </ul>
            </v-expansion-panel-content>
            <!-- *************** End:: Sizes Filter *************** -->
  
            <!-- *************** Start:: Price Filter *************** -->
            <v-expansion-panel-content v-if="option.id == 'filter_pricesrange'">
              <v-range-slider
                v-model="OptionsToFireFilter.priceRange"
                :max="option.maxPrice"
                :min="option.minPrice"
                hide-details
                class="align-center"
              >
                <template v-slot:prepend>
                  <div class="value_wrapper">
                    {{ OptionsToFireFilter.priceRange[0] }}
                  </div>
                </template>
                <template v-slot:append>
                  <div
                    class="value_wrapper"
                    v-if="!OptionsToFireFilter.priceRange[1]"
                  >
                    {{ option.maxPrice }}
                  </div>
                  <div
                    class="value_wrapper"
                    v-else-if="OptionsToFireFilter.priceRange[1]"
                  >
                    {{ OptionsToFireFilter.priceRange[1] }}
                  </div>
                </template>
              </v-range-slider>
            </v-expansion-panel-content>
            <!-- *************** End:: Price Filter *************** -->
          </v-expansion-panel>
        </v-expansion-panels>
  
        <base-button class="w-100 py-3 my-3" :btnText="$t('BUTTONS.apply')" />
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TheFilter',
    props: {
      filterOptions: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        parentId: null,
        activePanel: [3, 0],
        activePanelInner: [],
        OptionsToFireFilter: {
          sortOption: null,
          priceRange: [0, 0],
          sizes: [],
          colors: [],
          materials: [],
        },
        // End:: Filter Options,
      }
    },
    computed: {
      isSmallScreensFilter() {
        if (process.client) {
          return window.innerWidth < 1000 ? true : false
        }
      },
    },
    methods: {
      getParentId(id) {
        this.parentId = id
      },
      // Start:: Fire Filter Method To Pass Filter Options To The Parent Component
      fireFilter() {
        this.$emit('onFilter', this.OptionsToFireFilter)
      },
      resetFiter() {
        this.OptionsToFireFilter.sortOption = null
        this.OptionsToFireFilter.priceRange = [0, 0]
        this.OptionsToFireFilter.sizes = []
        this.OptionsToFireFilter.colors = []
        this.OptionsToFireFilter.materials = []
      },
      // End:: Fire Filter Method To Pass Filter Options To The Parent Component
    },
    // created() {
    // this.OptionsToFireFilter.priceRange[1]
    // },
  }
  </script>
  
  <style lang="scss">
  .products_filter_wrapper {
    padding-inline: 15px;
    .close_btn {
      display: none;
      width: 40px;
    }
    &.small_screens_filter {
      position: fixed;
      top: 0;
      left: -100%;
      width: 100% !important;
      min-height: 100vh;
      max-height: 100vh;
      padding: 25px;
      padding-bottom: 220px;
      background: #fff !important;
      z-index: 100 !important;
      transition: all 0.5s linear;
      overflow: auto;
      &::-webkit-scrollbar {
        width: 0;
      }
      &.active {
        left: 0;
      }
    }
    .v-item-group {
      .v-expansion-panel {
        &:not(:last-of-type) {
          margin-bottom: 10px;
        }
        &::before,
        &::after {
          display: none;
        }
        .v-expansion-panel-header {
          color: black;
          font-weight: 600;
          font-size: 16px;
          padding: 0px !important;
          &::before,
          &::after {
            display: none;
          }
          .v-expansion-panel-header__icon {
            i {
              color: var(--main_theme_clr);
            }
          }
        }
        .v-expansion-panel-content {
          .v-expansion-panel-content__wrap {
            padding-inline: 0px;
            .v-input {
              direction: ltr;
              flex-wrap: wrap;
              justify-content: space-between;
              &.v-input--range-slider {
                .v-input__prepend-outer,
                .v-input__append-outer {
                  .value_wrapper {
                    text-align: center;
                    width: auto;
                    padding: 12px 5px 0;
                    background: transparent;
                    color: black;
                    font-size: 13px;
                  }
                }
                .v-input__prepend-outer {
                  order: 1;
                }
                .v-input__append-outer {
                  order: 2;
                }
                .v-input__control {
                  order: 3;
                  .v-input__slot {
                    border: none;
                    padding-inline: 0;
                    .v-slider {
                      .v-slider__track-container {
                        .v-slider__track-background {
                          background-color: var(--main_theme_clr) !important;
                          border-color: var(--main_theme_clr) !important;
                          opacity: 0.4;
                          height: 9px;
                          border-radius: 5px;
                        }
                        .v-slider__track-fill {
                          height: 9px;
                          border-radius: 5px;
                          background-color: var(--main_theme_clr) !important;
                          border-color: var(--main_theme_clr) !important;
                        }
                      }
                      .v-slider__thumb-container {
                        &.primary--text {
                          background-color: var(--main_theme_clr) !important;
                          border-color: var(--main_theme_clr) !important;
                          .v-slider__thumb {
                            &.primary {
                              background-color: var(--white_clr) !important;
                              border-color: var(--main_theme_clr) !important;
                              width: 21px;
                              height: 21px;
                              border-radius: 50%;
                            }
                            &::before {
                              background-color: var(--white_clr) !important;
                              border-color: var(--main_theme_clr) !important;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            .filter_sizes_list {
              padding: 0;
              margin: 0;
              @include flexCenterAlignment;
              row-gap: 10px;
              column-gap: 10px;
              flex-wrap: wrap;
              .filter_size {
                .filter_size_view {
                  input[type='checkbox'] {
                    display: none;
                    &:checked + label {
                      border: 2px solid var(--main_theme_clr) !important;
                      @include midShadow;
                    }
                  }
                  label {
                    display: inline-block;
                    padding: 5px;
                    border: 1px solid var(--border_clr);
                    color: var(--main_theme_clr);
                    border-radius: 4px;
                    font-size: 16px;
                    cursor: pointer;
                    @include flexCenterAlignment;
                  }
                }
              }
            }
            .filter_colors_list {
              padding: 0;
              margin: 0;
              @include flexCenterAlignment;
              column-gap: 10px;
              row-gap: 10px;
              flex-wrap: wrap;
              .filter_color {
                .filter_color_view {
                  input[type='checkbox'] {
                    display: none;
                    &:checked + label {
                      border: 1px solid var(--main_theme_clr);
                      @include midShadow;
                    }
                  }
                  label {
                    display: inline-block;
                    padding: 2px;
                    width: 28px;
                    height: 28px;
                    min-width: 28px;
                    border-radius: 4px;
                    cursor: pointer;
                    span,
                    img {
                      display: inline-block;
                      width: 100%;
                      height: 100%;
                      border-radius: 4px;
                      box-shadow: 1px 1px 8px 1px var(--small_footer_bg_clr);
                    }
                  }
                }
              }
            }
            .filter_brands_list,
            .filter_categories_list {
              padding: 0;
              margin: 0;
              .filter_brand,
              .filter_category {
                &:not(:last-of-type) {
                  margin-bottom: 8px;
                }
                .filter_brand_view,
                .filter_category_view {
                  @include flexStartAlignment;
                  column-gap: 10px;
                  input[type='radio'],
                  input[type='checkbox'] {
                    width: 20px;
                    height: 20px;
                    border-radius: 4px;
                    min-width: 20px;
                    &:checked {
                      background-color: var(--main_theme_clr);
                      border-color: var(--main_theme_clr);
                      box-shadow: none;
                      outline: none;
                    }
                    &:checked + label {
                      color: var(--main_theme_clr);
                    }
                  }
                  input[type='radio'] {
                    border-radius: 50%;
                  }
                  label {
                    color: var(--theme_text_clr);
                    font-size: 15px;
                    cursor: pointer;
                    direction: ltr;
                  }
                }
              }
            }
            .vue-star-rating {
              justify-content: center;
              column-gap: 8px;
            }
          }
        }
      }
    }
  }
  .v-application--is-ltr .v-expansion-panel-header__icon {
    margin-left: unset !important;
    margin-inline-start: auto !important;
  }
  .theme--light.v-expansion-panels .v-expansion-panel {
    background-color: transparent !important;
    color: rgba(0, 0, 0, 0.87);
  }
  .btn_wrapper2 {
    @include flexSpaceBetweenAlignment;
    width: 100%;
    color: var(--light_gray_clr);
    margin-block: 15px;
    button {
      font-size: 17px;
    }
  }
  .submit_buttom {
    text-decoration: none;
    position: relative;
    display: inline-block;
    text-align: center;
    padding: 8px 20px;
    color: var(--white_clr);
    border-radius: 10px;
    background-image: linear-gradient(
      90deg,
      transparent 50%,
      var(--main_theme_clr) 50%
    );
    background-position: 100%;
    background-size: 400%;
    border: 1px solid var(--main_theme_clr);
    @include transitioning(0.6s);
    &:hover {
      background-position: 0;
      color: var(--main_theme_clr);
      background: var(--white_clr);
      .btn_loader {
        border: 3px dotted var(--main_theme_clr);
      }
    }
  }
  @media (max-width: 1024px) {
    .products_filter_wrapper {
      .close_btn {
        display: inline-block !important;
        margin-bottom: 20px;
        font-size: 28px;
        position: relative;
        // right: -93%;
        svg,
        i {
          color: var(--light_red_clr);
        }
      }
      .v-expansion-panel-header {
        padding: 16px 0px !important;
      }
    }
  }
  </style>