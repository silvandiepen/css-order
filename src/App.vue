<template>
  <div id="app">
    <div class="container content">
        <h1>Css Order Cheatsheet</h1>
        <p>To make sure everyone uses the same order in CSS, we've created a logical order which everyone agreed with.</p>
        <p>All properties are separated by type and grouped by related properties.</p>
        <p>There is also a stylelint plugin to enforce this order and give errors when the erros arent set. <a href="#stylelint">Read more about this</a>.</p>
    </div>
    <section class="background--blue">
      <div class="container">
        <div class="search">
          <div class="input-search">
            <input
              type="search"
              placeholder="filter"
              v-model="search"
            />
            <button @click="search = ''"><span class="silicon-search"></span></button>
          </div>
        </div>
        <!-- <div class="switch">
          <div class="input-switch">
            <label for="logical-rational">Logical</label>
            <input
              type="checkbox"
              id="logical-rational"
              v-model="isRational"
            />
            <label for="logical-rational">Rational</label>
          </div>
        </div> -->
        </div>
      </section>
      <section class="background--white">
        <div class="container content">
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
      </section>
      <section class="background--yellow" id="stylelint">
        <div class="container content">
          <vue-markdown>
### Stylelint

To use the order and get checked on it. You can add stylelint to your project. This enforces the order. 

```bash
npm install stylelint stylelint-order stylelint-logical-order
```

Add the settings to your package.json 
```json
{ "stylelint": {
    "rules": {		
    	"at-rule-no-unknown": [
		true,
		{
			"ignoreAtRules": [
				"if",
				"for",
				"else",
				"each",
				"mixin",
				"extend",
				"include",
				"content",
				"at-root",
				"function"
			]
		}
	],
      "order/order": [
        "custom-properties",
        "dollar-variables",
        "declarations",
        "rules"
      ],
    },
    "extends": [
      "stylelint-logical-order"
    ]
  }
}
```

**OR** create a `.stylelintrc` file

```json
{
	"plugins": ["stylelint-order"],
	"rules": {	
		"at-rule-no-unknown": [
			true,
			{
				"ignoreAtRules": [
					"if",
					"for",
					"else",
					"each",
					"mixin",
					"extend",
					"include",
					"content",
					"at-root",
					"function"
				]
			}
		],
		"order/order": [
			"custom-properties",
			"dollar-variables",
			"declarations",
			"rules"
		],
	},
	"extends": [
    "stylelint-logical-order"
  ]
}
```

And add stylelint to your scripts:
```json
{
  "scripts": {
		"stylelint": "stylelint 'src/scss/**/*.scss'",
		"stylelint:fix": "stylelint 'src/scss/**/*.scss' --fix"
  }
}      
```     
          </vue-markdown>         
        </div>
      </section>
    <sil-footer></sil-footer>
  </div>
</template>

<script>
import vueMarkdown from "vue-markdown";
import silFooter from "./components/footer.vue";
export default {
  name: "app",
  components: {
    vueMarkdown,
    silFooter
  },
  data() {
    return {
      search: "",
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
            "mask-type",
            "mix-blend-mode",
            "opacity"
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
      return this.filterCSS(this.logical);
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
  font-family: $system-fonts;
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
