<template>
  <div id="app">
    <link
      rel="stylesheet"
      type="text/css"
      href="https://raw.githubusercontent.com/silvandiepen/base-style/master/dist/app.css"
    />
    <div class="container">
      <div class="content">
        <h1>Css Order Cheatsheet</h1>
        <div class="search">
          <div class="input-search">
            <input
              type="search"
              placeholder="filter"
              v-model="search"
            />
            <button><span class="silicon-search"></span></button>
          </div>
        </div>
        <div class="switch">
          <div class="input-switch">
            <label for="logical-rational">Logical</label>
            <input
              type="checkbox"
              id="logical-rational"
              v-model="isRational"
            />
            <label for="logical-rational">Rational</label>
          </div>
        </div>
        <div
          class="row"
          v-for="(value, index) in filteredCSS"
          :key="index"
        >
          <h4
            class="quoted"
            :class="{ 'is-inactive' : value.value.length < 1}"
          > {{ value.key }}</h4>
          <ol>
            <li
              v-for="(selector, index) in value.value"
              :key="index"
            >{{ selector }}</li>
          </ol>
        </div>
      </div>
    </div>
    <section class="background--dark">
      <div class="container compare">
        <div class="content">
          <h1>side-by-side</h1>
          <hr>
          <div class="row">
            <div class="column small-half">

              <h3>Logical</h3>
              <hr>
              <div
                class="row"
                v-for="(value, index) in logical"
                :key="index"
              >
                <h5
                  class="quoted"
                  :class="{ 'is-inactive' : value.value.length < 1}"
                > {{ value.key }}</h5>
                <ol>
                  <li
                    v-for="(selector, index) in value.value"
                    :key="index"
                  >{{ selector }}</li>
                </ol>
              </div>
            </div>
            <div class="column small-half">
              <h3>Rational</h3>
              <hr>
              <div
                class="row"
                v-for="(value, index) in rational"
                :key="index"
              >
                <h5
                  class="quoted"
                  :class="{ 'is-inactive' : value.value.length < 1}"
                > {{ value.key }}</h5>
                <ol>
                  <li
                    v-for="(selector, index) in value.value"
                    :key="index"
                  >{{ selector }}</li>
                </ol>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      search: "",
      isRational: true,
      rational: [
        { key: "special", value: ["composes"] },
        {
          key: "positioning",
          value: ["position", "top", "right", "bottom", "left", "z-index"]
        },
        {
          key: "boxmodel",
          value: [
            "display",
            "flex",
            "flex-grow",
            "flex-shrink",
            "flex-basis",
            "flex-flow",
            "flex-direction",
            "flex-wrap",
            "justify-content",
            "align-content",
            "align-items",
            "align-self",
            "order",
            "float",
            "clear",
            "box-sizing",
            "width",
            "min-width",
            "max-width",
            "height",
            "min-height",
            "max-height",
            "margin",
            "margin-top",
            "margin-right",
            "margin-bottom",
            "margin-left",
            "padding",
            "padding-top",
            "padding-right",
            "padding-bottom",
            "padding-left",
            "overflow",
            "overflow-x",
            "overflow-y"
          ]
        },
        {
          key: "typography",
          value: [
            "color",
            "font",
            "font-weight",
            "font-size",
            "font-family",
            "font-style",
            "font-variant",
            "font-size-adjust",
            "font-stretch",
            "font-effect",
            "font-emphasize",
            "font-emphasize-position",
            "font-emphasize-style",
            "font-smooth",
            "line-height",
            "direction",
            "letter-spacing",
            "white-space",
            "text-align",
            "text-align-last",
            "text-transform",
            "text-decoration",
            "text-emphasis",
            "text-emphasis-color",
            "text-emphasis-style",
            "text-emphasis-position",
            "text-indent",
            "text-justify",
            "text-outline",
            "text-wrap",
            "text-overflow",
            "text-overflow-ellipsis",
            "text-overflow-mode",
            "text-orientation",
            "text-shadow",
            "vertical-align",
            "word-wrap",
            "word-break",
            "word-spacing",
            "overflow-wrap",
            "tab-size",
            "hyphens",
            "unicode-bidi",
            "columns",
            "column-count",
            "column-fill",
            "column-gap",
            "column-rule",
            "column-rule-color",
            "column-rule-style",
            "column-rule-width",
            "column-span",
            "column-width",
            "page-break-after",
            "page-break-before",
            "page-break-inside",
            "src"
          ]
        },
        {
          key: "visual",
          value: [
            "list-style",
            "list-style-position",
            "list-style-type",
            "list-style-image",
            "table-layout",
            "empty-cells",
            "caption-side",
            "background",
            "background-color",
            "background-image",
            "background-repeat",
            "background-position",
            "background-position-x",
            "background-position-y",
            "background-size",
            "background-clip",
            "background-origin",
            "background-attachment",
            "background-blend-mode",
            "box-decoration-break",
            "border",
            "border-width",
            "border-style",
            "border-color",
            "border-top",
            "border-top-width",
            "border-top-style",
            "border-top-color",
            "border-right",
            "border-right-width",
            "border-right-style",
            "border-right-color",
            "border-bottom",
            "border-bottom-width",
            "border-bottom-style",
            "border-bottom-color",
            "border-left",
            "border-left-width",
            "border-left-style",
            "border-left-color",
            "border-radius",
            "border-top-left-radius",
            "border-top-right-radius",
            "border-bottom-right-radius",
            "border-bottom-left-radius",
            "border-image",
            "border-image-source",
            "border-image-slice",
            "border-image-width",
            "border-image-outset",
            "border-image-repeat",
            "border-collapse",
            "border-spacing",
            "outline",
            "outline-width",
            "outline-style",
            "outline-color",
            "outline-offset",
            "box-shadow",
            "transform",
            "transform-origin",
            "transform-style",
            "backface-visibility",
            "perspective",
            "perspective-origin",
            "visibility",
            "cursor",
            "opacity",
            "filter",
            "backdrop-filter"
          ]
        },
        {
          key: "animation",
          value: [
            "transition",
            "transition-delay",
            "transition-timing-function",
            "transition-duration",
            "transition-property",
            "animation",
            "animation-name",
            "animation-duration",
            "animation-play-state",
            "animation-timing-function",
            "animation-delay",
            "animation-iteration-count",
            "animation-direction",
            "animation-fill-mode"
          ]
        },
        {
          key: "misc",
          value: [
            "appearance",
            "clip",
            "clip-path",
            "counter-reset",
            "counter-increment",
            "resize",
            "user-select",
            "nav-index",
            "nav-up",
            "nav-right",
            "nav-down",
            "nav-left",
            "pointer-events",
            "quotes",
            "touch-action",
            "will-change",
            "zoom",
            "fill",
            "fill-rule",
            "clip-rule",
            "stroke"
          ]
        }
      ],
      logical: [
        {
          key: "special",
          value: [
            "composes",
            "content",
            "all",
            "unset",
            "system",
            "symbols",
            "suffix",
            "pad",
            "additive-symbols",
            "negative"
          ]
        },
        {
          key: "position",
          value: ["position", "top", "right", "bottom", "left", "z-index"]
        },
        {
          key: "boxmodel",
          value: [
            "display",
            "flex",
            "flex-grow",
            "flex-shrink",
            "flex-basis",
            "flex-flow",
            "flex-direction",
            "flex-wrap",
            "justify-content",
            "align-content",
            "align-items",
            "align-self",
            "place-items",
            "place-content",
            "order",
            "float",
            "clear",
            "box-sizing",
            "width",
            "min-width",
            "max-width",
            "height",
            "min-height",
            "max-height",
            "inline-size",
            "min-inline-size",
            "max-inline-size",
            "block-size",
            "min-block-size",
            "max-block-size",
            "grid",
            "grid-area",
            "grid-auto-columns",
            "grid-auto-flow",
            "grid-auto-rows",
            "grid-column",
            "grid-column-end",
            "grid-column-gap",
            "grid-column-start",
            "grid-gap",
            "grid-row",
            "grid-row-end",
            "grid-row-gap",
            "row-gap",
            "grid-row-start",
            "grid-template",
            "grid-template-areas",
            "grid-template-columns",
            "grid-template-rows",
            "gap",
            "box-shadow",
            "box-decoration-break",
            "box-sizing",
            "break-before",
            "break-after",
            "break-inside"
          ]
        },
        {
          key: "spacing",
          value: [
            "margin",
            "margin-top",
            "margin-right",
            "margin-bottom",
            "margin-left",
            "margin-block",
            "margin-block-start",
            "margin-block-end",
            "padding",
            "padding-top",
            "padding-right",
            "padding-bottom",
            "padding-left",
            "padding-block",
            "padding-block-end",
            "padding-block-start",
            "padding-inline",
            "padding-inline-end",
            "padding-inline-start"
          ]
        },
        {
          key: "contentlayout",
          value: [
            "columns",
            "column-count",
            "column-fill",
            "column-gap",
            "column-rule",
            "column-rule-color",
            "column-rule-style",
            "column-rule-width",
            "column-span",
            "column-width",
            "page-break-after",
            "page-break-before",
            "page-break-inside",
            "src",
            "orphans",
            "windows"
          ]
        },
        {
          key: "border",
          value: [
            "border",
            "border-width",
            "border-style",
            "border-color",
            "border-top",
            "border-top-width",
            "border-top-style",
            "border-top-color",
            "border-right",
            "border-right-width",
            "border-right-style",
            "border-right-color",
            "border-bottom",
            "border-bottom-width",
            "border-bottom-style",
            "border-bottom-color",
            "border-left",
            "border-left-width",
            "border-left-style",
            "border-left-color",
            "border-top-left-radius",
            "border-top-right-radius",
            "border-bottom-right-radius",
            "border-bottom-left-radius",
            "border-block",
            "border-block-color",
            "border-block-end",
            "border-block-end-color",
            "border-block-end-style",
            "border-block-end-width",
            "border-block-start",
            "border-block-start-color",
            "border-block-start-style",
            "border-block-start-width",
            "border-block-style",
            "border-block-width",
            "border-end-end-radius",
            "border-end-start-radius",
            "border-start-end-radius",
            "border-start-start-radius",
            "border-radius",
            "border-image",
            "border-image-source",
            "border-image-slice",
            "border-image-width",
            "border-image-outset",
            "border-image-repeat",
            "border-collapse",
            "border-spacing",
            "border-block",
            "border-inline",
            "border-inline-color",
            "border-inline-end",
            "border-inline-end-color",
            "border-inline-end-style",
            "border-inline-end-width",
            "border-inline-start",
            "border-inline-start-color",
            "border-inline-start-style",
            "border-inline-start-width",
            "border-inline-style",
            "border-inline-width",
            "outline",
            "outline-width",
            "outline-style",
            "outline-color",
            "outline-offset"
          ]
        },
        {
          key: "background",
          value: [
            "background",
            "background-color",
            "background-image",
            "background-repeat",
            "background-position",
            "background-position-x",
            "background-position-y",
            "background-size",
            "background-clip",
            "background-origin",
            "background-attachment",
            "background-blend-mode",
            "isolation",
            "shape-image-threshold",
            "shape-margin",
            "shape-outside"
          ]
        },
        {
          key: "visual",
          value: [
            "list-style",
            "list-style-position",
            "list-style-type",
            "list-style-image",
            "table-layout",
            "empty-cells",
            "caption-side"
          ]
        },
        {
          key: "typography",
          value: [
            "color",
            "font",
            "font-weight",
            "font-size",
            "font-family",
            "font-style",
            "font-feature-settings",
            "font-variant",
            "font-variant-alternates",
            "font-variant-caps",
            "font-variant-ease-asian",
            "font-variant-ligatures",
            "font-variant-numeric",
            "font-variant-position",
            "font-variant-settings",
            "font-size-adjust",
            "font-stretch",
            "font-effect",
            "font-emphasize",
            "font-emphasize-position",
            "font-emphasize-style",
            "font-smooth",
            "font-kerning",
            "font-language-override",
            "font-optical-sizing",
            "line-break",
            "line-height",
            "letter-spacing",
            "white-space",
            "direction",
            "text-align",
            "text-align-last",
            "text-transform",
            "text-decoration",
            "text-decoration-color",
            "text-decoration-line",
            "text-decoration-style",
            "text-emphasis",
            "text-emphasis-color",
            "text-emphasis-style",
            "text-emphasis-position",
            "text-indent",
            "text-justify",
            "text-outline",
            "text-wrap",
            "text-overflow",
            "text-overflow-ellipsis",
            "text-overflow-mode",
            "text-orientation",
            "text-shadow",
            "text-combine-upright",
            "vertical-align",
            "word-wrap",
            "word-break",
            "word-spacing",
            "tab-size",
            "hyphens",
            "hanging-punctuation",
            "unicode-bidi",
            "unicode-range",
            "writing-mode"
          ]
        },
        {
          key: "transform",
          value: [
            "backface-visibility",
            "perspective",
            "perspective-origin",
            "translate",
            "rotate",
            "scale",
            "transform",
            "transform-box",
            "transform-origin",
            "transform-style"
          ]
        },
        {
          key: "visibility",
          value: [
            "overflow",
            "overflow-x",
            "overflow-y",
            "overflow-wrap",
            "visibility",
            "opacity",
            "filter",
            "backdrop-filter",
            "appearance",
            "clip",
            "clip-path",
            "mask",
            "mask-clip",
            "mask-composite",
            "mask-image",
            "mask-mode",
            "mask-origin",
            "mask-position",
            "mask-repeat",
            "mask-size",
            "mask-type"
          ]
        },
        {
          key: "animation",
          value: [
            "transition",
            "transition-delay",
            "transition-timing-function",
            "transition-duration",
            "transition-property",
            "animation",
            "animation-name",
            "animation-duration",
            "animation-play-state",
            "animation-timing-function",
            "animation-delay",
            "animation-iteration-count",
            "animation-direction",
            "animation-fill-mode",
            "will-change"
          ]
        },
        {
          key: "media",
          value: [
            "object-fit",
            "object-position",
            "fill",
            "fill-rule",
            "clip-rule",
            "stroke",
            "image-orientation",
            "image-rendering",
            "speak-as"
          ]
        },
        {
          key: "scroll",
          value: [
            "scroll-behavior",
            "scroll-margin",
            "scroll-margin-block",
            "scroll-margin-block-end",
            "scroll-margin-block-start",
            "scroll-margin-bottom",
            "scroll-margin-inline",
            "scroll-margin-inline-end",
            "scroll-margin-inline-start",
            "scroll-margin-left",
            "scroll-margin-right",
            "scroll-margin-top",
            "scroll-padding",
            "scroll-padding-block",
            "scroll-padding-block-end",
            "scroll-padding-block-start",
            "scroll-padding-bottom",
            "scroll-padding-inline",
            "scroll-padding-inline-end",
            "scroll-padding-inline-start",
            "scroll-padding-left",
            "scroll-padding-right",
            "scroll-padding-top",
            "scroll-snap-align",
            "scroll-snap-stop",
            "scroll-snap-type",
            "scrollbar-color",
            "scrollbar-width"
          ]
        },
        {
          key: "misc",
          value: [
            "cursor",
            "caret-color",
            "counter-reset",
            "counter-increment",
            "resize",
            "user-select",
            "nav-index",
            "nav-up",
            "nav-right",
            "nav-down",
            "nav-left",
            "pointer-events",
            "quotes",
            "touch-action",
            "zoom",
            "min-zoom",
            "max-zoom"
          ]
        }
      ]
    };
  },
  computed: {
    filteredCSS: function() {
      if (this.isRational) {
        return this.filterCSS(this.rational);
      } else {
        return this.filterCSS(this.logical);
      }
    }
  },
  methods: {
    filterCSS(values) {
      const newValues = values.map(props => {
        if (this.search.indexOf("+") > -1) {
          let terms = this.search.replace(" ", "").split("+");
          props.value = props.value.filter(function(item) {
            for (var key in terms) {
              if (item[key] === undefined || item[key] != terms[key]) {
                return false;
              }
            }
            return true;
          });

          return {
            key: props.key,
            value: props.value
          };
        } else {
          return {
            key: props.key,
            value: props.value.filter(val => val.indexOf(this.search) > -1)
          };
        }
      });
      return newValues;
    }
  }
};
</script>
<style lang="scss">
@import "~@sil/base-style/src/scss/index.full";

li {
  font-family: $system-fonts-mono;
}
ol {
  width: 100%;
  display: block;
}

h4.quoted {
  font-weight: normal;
  font-family: $system-fonts-mono;
  transition: all 0.3s;
  color: color(Black);
  &:before,
  &:after {
    display: inline-block;
    max-width: 0;
    transition: all 0.3s;
    opacity: 0;
  }
  &:before {
    content: "/* ";
  }
  &:after {
    content: "  */";
  }
  &.is-inactive {
    color: color(Black, 0.25);
    &:before,
    &:after {
      transition: all 0.3s;
      max-width: 50px;
      opacity: 1;
    }
  }
}
</style>
