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
          <input type="checkbox" id="logical-rational" v-model="isRational"/>
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
          value: ["composes", "content"]
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
            "grid-row-start",
            "grid-template",
            "grid-template-areas",
            "grid-template-columns",
            "grid-template-rows",
            "gap"
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
            "outline-offset"
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
            "padding",
            "padding-top",
            "padding-right",
            "padding-bottom",
            "padding-left"
          ]
        },
        {
          key: "box",
          value: ["box-shadow", "box-decoration-break"]
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
            "unicode-bidi"
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
            "caption-side"
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
            "background-blend-mode"
          ]
        },
        {
          key: "transform",
          value: ["transform", "transform-origin", "transform-style"]
        },
        {
          key: "visibility",
          value: [
            "overflow",
            "overflow-x",
            "overflow-y",
            "backface-visibility",
            "perspective",
            "perspective-origin",
            "visibility",
            "cursor",
            "opacity",
            "filter",
            "backdrop-filter",
            "appearance",
            "clip",
            "clip-path"
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
          key: "svg",
          value: ["fill", "fill-rule", "clip-rule", "stroke"]
        },
        {
          key: "misc",
          value: [
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
            "zoom"
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
