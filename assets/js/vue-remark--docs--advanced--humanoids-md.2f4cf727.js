(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{695:function(t,e,n){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},978:function(t,e,n){"use strict";n.r(e);var a=n(1),s=n(695),r=n(0);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.a.config.optionMergeStrategies;var i={VueRemarkRoot:s.a},u=function(t){var e=t.options.components=t.options.components||{},n=t.options.computed=t.options.computed||{};Object.keys(i).forEach((function(t){"object"===o(i[t])&&"function"==typeof i[t].render?e[t]=i[t]:n[t]=function(){return i[t]}}))},p=r.a.config.optionMergeStrategies,d="__vueRemarkFrontMatter",c={excerpt:null,title:"Humanoids"};var l=function(t){t.options[d]&&(t.options[d]=c),r.a.util.defineReactive(t.options,d,c),t.options.computed=p.computed({$frontmatter:function(){return t.options[d]}},t.options.computed)},v=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VueRemarkRoot",[n("h1",{attrs:{id:"humanoids"}},[n("a",{attrs:{href:"#humanoids","aria-hidden":"true"}},[t._v("#")]),t._v("Humanoids")]),n("blockquote",[n("p",[t._v("Humanoids are plugins that sit between your script and SecretAgent's mouse/keyboard movements. They translate your clicks and moves into randomized human-like patterns that can pass the bot-blocker checks.")])]),n("p",[t._v("This interface helps you load and retrieve humanoid plugins. It in itself is not a plugin, however we have preloaded it with a basic plugin (see below).")]),n("p",[t._v("This class creates no instances. It is a static singleton containing three methods.")]),n("h2",{attrs:{id:"methods"}},[n("a",{attrs:{href:"#methods","aria-hidden":"true"}},[t._v("#")]),t._v("Methods")]),n("h3",{attrs:{id:"humanoidsgetemhumanoididem"}},[n("a",{attrs:{href:"#humanoidsgetemhumanoididem","aria-hidden":"true"}},[t._v("#")]),t._v("Humanoids.get"),n("em",[t._v("(humanoidId)")])]),n("p",[t._v("Retrieve a specific humanoid from the list of plugins already been loaded.")]),n("h4",{attrs:{id:"arguments"}},[n("a",{attrs:{href:"#arguments","aria-hidden":"true"}},[t._v("#")]),n("strong",[t._v("Arguments")]),t._v(":")]),n("ul",[n("li",[t._v("humanoidId "),n("code",{pre:!0},[t._v("string")])])]),n("h4",{attrs:{id:"returns-humanoidplugin"}},[n("a",{attrs:{href:"#returns-humanoidplugin","aria-hidden":"true"}},[t._v("#")]),n("strong",[t._v("Returns")]),n("code",{pre:!0},[t._v("HumanoidPlugin")])]),n("h3",{attrs:{id:"humanoidsgetrandomemem"}},[n("a",{attrs:{href:"#humanoidsgetrandomemem","aria-hidden":"true"}},[t._v("#")]),t._v("Humanoids.getRandom"),n("em",[t._v("()")])]),n("p",[t._v("Retrieve a random humanoid from the list of plugins already loaded.")]),n("h4",{attrs:{id:"returns-humanoidplugin-1"}},[n("a",{attrs:{href:"#returns-humanoidplugin-1","aria-hidden":"true"}},[t._v("#")]),n("strong",[t._v("Returns")]),n("code",{pre:!0},[t._v("HumanoidPlugin")])]),n("h3",{attrs:{id:"humanoidsloademhumanoidem"}},[n("a",{attrs:{href:"#humanoidsloademhumanoidem","aria-hidden":"true"}},[t._v("#")]),t._v("Humanoids.load"),n("em",[t._v("(humanoid)")])]),n("p",[t._v("Load a 3rd party humanoid into your environment.")]),n("h4",{attrs:{id:"arguments-1"}},[n("a",{attrs:{href:"#arguments-1","aria-hidden":"true"}},[t._v("#")]),n("strong",[t._v("Arguments")]),t._v(":")]),n("ul",[n("li",[t._v("humanoid "),n("code",{pre:!0},[t._v("HumanoidPlugin")])])]),n("h4",{attrs:{id:"returns-null"}},[n("a",{attrs:{href:"#returns-null","aria-hidden":"true"}},[t._v("#")]),n("strong",[t._v("Returns")]),n("code",{pre:!0},[t._v("null")])]),n("h2",{attrs:{id:"preloaded-plugins"}},[n("a",{attrs:{href:"#preloaded-plugins","aria-hidden":"true"}},[t._v("#")]),t._v("Preloaded Plugins")]),n("p",[t._v("We've included two very simple humanoid plugins to get you started. They are pre-loaded into the Humanoids interface and are ready to use.")]),n("p",{staticClass:"show-table-header"}),n("table",[n("thead",[n("tr",[n("th",[t._v("ID")]),n("th",[t._v("Description")])])]),n("tbody",[n("tr",[n("td",[t._v("basic")]),n("td",[t._v("It's the most basic of human-like interactions.")])]),n("tr",[n("td",[t._v("skipper")]),n("td",[t._v("It's an anti-humanoid with no delays. It just runs the commands.")])])])]),n("p",[t._v("Note: Use the "),n("code",{pre:!0},[t._v("skipper")]),t._v(" plugin when you want to turn OFF humanoid functionality. It disables all humanoid affects allowing you to run mouse and keyboard commands as if there were no human translation layer.")]),n("p",[t._v("To use a specific emulator, pass your chosen ID into "),n("code",{pre:!0},[t._v("createBrowser")]),t._v(":")]),n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",{pre:!0,attrs:{class:"language-js"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token maybe-class-name"}},[t._v("SecretAgent")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'secret-agent'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token arrow operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" browser "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token maybe-class-name"}},[t._v("SecretAgent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("createBrowser")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" humanoidId"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'basic'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),n("h2",{attrs:{id:"building-your-own-plugins"}},[n("a",{attrs:{href:"#building-your-own-plugins","aria-hidden":"true"}},[t._v("#")]),t._v("Building Your Own Plugins")]),n("p",[t._v("Documentation coming soon.")])])}),[],!1,null,null,null);"function"==typeof u&&u(v),"function"==typeof l&&l(v);e.default=v.exports}}]);