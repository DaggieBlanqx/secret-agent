(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{695:function(t,e,r){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},981:function(t,e,r){"use strict";r.r(e);var a=r(1),n=r(695),s=r(0);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}s.a.config.optionMergeStrategies;var u={VueRemarkRoot:n.a},i=function(t){var e=t.options.components=t.options.components||{},r=t.options.computed=t.options.computed||{};Object.keys(u).forEach((function(t){"object"===o(u[t])&&"function"==typeof u[t].render?e[t]=u[t]:r[t]=function(){return u[t]}}))},l=s.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",c={excerpt:null,title:"Emulators"};var d=function(t){t.options[p]&&(t.options[p]=c),s.a.util.defineReactive(t.options,p,c),t.options.computed=l.computed({$frontmatter:function(){return t.options[p]}},t.options.computed)},v=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("VueRemarkRoot",[r("h1",{attrs:{id:"emulators"}},[r("a",{attrs:{href:"#emulators","aria-hidden":"true"}},[t._v("#")]),t._v("Emulators")]),r("blockquote",[r("p",[t._v("Emulators are plugins that help SecretAgent disguise itself as different browsers. Changing the user-agent header is barely the beginning. Emulators have full control over TCP fingerprinting, header order, audio codexes and thousands of other variables that allow undetectable emulation of any browser you desire.")])]),r("p",[t._v("This interface helps you load and retrieve emulator plugins. It in itself is not a plugin, however we have preloaded it with several plugins (see below).")]),r("p",[t._v("This class creates no instances. It is a static singleton containing three methods.")]),r("h2",{attrs:{id:"methods"}},[r("a",{attrs:{href:"#methods","aria-hidden":"true"}},[t._v("#")]),t._v("Methods")]),r("h3",{attrs:{id:"emulatorsgetememulatoridem"}},[r("a",{attrs:{href:"#emulatorsgetememulatoridem","aria-hidden":"true"}},[t._v("#")]),t._v("Emulators.get"),r("em",[t._v("(emulatorId)")])]),r("p",[t._v("Retrieve a specific emulator from the list of plugins already been loaded.")]),r("h4",{attrs:{id:"arguments"}},[r("a",{attrs:{href:"#arguments","aria-hidden":"true"}},[t._v("#")]),r("strong",[t._v("Arguments")]),t._v(":")]),r("ul",[r("li",[t._v("emulatorId "),r("code",{pre:!0},[t._v("string")])])]),r("h4",{attrs:{id:"returns-emulatorplugin"}},[r("a",{attrs:{href:"#returns-emulatorplugin","aria-hidden":"true"}},[t._v("#")]),r("strong",[t._v("Returns")]),r("code",{pre:!0},[t._v("EmulatorPlugin")])]),r("h3",{attrs:{id:"emulatorsgetrandomemem"}},[r("a",{attrs:{href:"#emulatorsgetrandomemem","aria-hidden":"true"}},[t._v("#")]),t._v("Emulators.getRandom"),r("em",[t._v("()")])]),r("p",[t._v("Retrieve a random emulator from the list of plugins already loaded.")]),r("h4",{attrs:{id:"returns-emulatorplugin-1"}},[r("a",{attrs:{href:"#returns-emulatorplugin-1","aria-hidden":"true"}},[t._v("#")]),r("strong",[t._v("Returns")]),r("code",{pre:!0},[t._v("EmulatorPlugin")])]),r("h3",{attrs:{id:"emulatorsloadememulatorem"}},[r("a",{attrs:{href:"#emulatorsloadememulatorem","aria-hidden":"true"}},[t._v("#")]),t._v("Emulators.load"),r("em",[t._v("(emulator)")])]),r("p",[t._v("Load a 3rd party emulator into your environment.")]),r("h4",{attrs:{id:"arguments-1"}},[r("a",{attrs:{href:"#arguments-1","aria-hidden":"true"}},[t._v("#")]),r("strong",[t._v("Arguments")]),t._v(":")]),r("ul",[r("li",[t._v("emulator "),r("code",{pre:!0},[t._v("EmulatorPlugin")])])]),r("h4",{attrs:{id:"returns-null"}},[r("a",{attrs:{href:"#returns-null","aria-hidden":"true"}},[t._v("#")]),r("strong",[t._v("Returns")]),r("code",{pre:!0},[t._v("null")])]),r("h2",{attrs:{id:"preloaded-plugins"}},[r("a",{attrs:{href:"#preloaded-plugins","aria-hidden":"true"}},[t._v("#")]),t._v("Preloaded Plugins")]),r("p",[t._v("We've included a few emulator plugins to get you started. These plugins are pre-loaded into the Emulators interface, and together they represent 70% of the browser market.")]),r("p",{staticClass:"show-table-header"}),r("table",[r("thead",[r("tr",[r("th",[t._v("Name")]),r("th",[t._v("ID")])])]),r("tbody",[r("tr",[r("td",[t._v("Safari 13 for Mac")]),r("td",[t._v("safari-13-for-mac")])]),r("tr",[r("td",[t._v("Chrome 79 for Windows and Mac")]),r("td",[t._v("chrome-79-for-win-and-mac")])]),r("tr",[r("td",[t._v("Chrome 80 for Windows and Mac")]),r("td",[t._v("chrome-80-for-win-and-mac")])])])]),r("p",[t._v("To use a specific emulator, pass your chosen ID into "),r("code",{pre:!0},[t._v("createBrowser")]),t._v(":")]),r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",{pre:!0,attrs:{class:"language-js"}},[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token maybe-class-name"}},[t._v("SecretAgent")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'secret-agent'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token arrow operator"}},[t._v("=>")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" browser "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token maybe-class-name"}},[t._v("SecretAgent")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("createBrowser")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" emulatorId"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chrome79'")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),r("h2",{attrs:{id:"building-your-own-plugin"}},[r("a",{attrs:{href:"#building-your-own-plugin","aria-hidden":"true"}},[t._v("#")]),t._v("Building Your Own Plugin")]),r("p",[t._v("Documentation coming soon.")])])}),[],!1,null,null,null);"function"==typeof i&&i(v),"function"==typeof d&&d(v);e.default=v.exports}}]);