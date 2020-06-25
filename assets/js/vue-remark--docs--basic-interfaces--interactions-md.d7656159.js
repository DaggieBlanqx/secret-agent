(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{695:function(t,s,e){"use strict";s.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},977:function(t,s,e){"use strict";e.r(s);var a=e(1),n=e(695),r=e(0);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.a.config.optionMergeStrategies;var p={VueRemarkRoot:n.a},c=function(t){var s=t.options.components=t.options.components||{},e=t.options.computed=t.options.computed||{};Object.keys(p).forEach((function(t){"object"===o(p[t])&&"function"==typeof p[t].render?s[t]=p[t]:e[t]=function(){return p[t]}}))},i=r.a.config.optionMergeStrategies,u="__vueRemarkFrontMatter",l={excerpt:null,title:"Interactions"};var v=function(t){t.options[u]&&(t.options[u]=l),r.a.util.defineReactive(t.options,u,l),t.options.computed=i.computed({$frontmatter:function(){return t.options[u]}},t.options.computed)},_=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("VueRemarkRoot",[e("h1",{attrs:{id:"interactions"}},[e("a",{attrs:{href:"#interactions","aria-hidden":"true"}},[t._v("#")]),t._v("Interactions")]),e("p",[t._v("Every User in a BrowserInstance has a "),e("code",{pre:!0},[t._v("interact()")]),t._v(" method, which allow you to control the user's mouse and keyboard. "),e("code",{pre:!0},[t._v("Interactions")]),t._v(" are simple key/value objects you pass into this method:")]),e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",{pre:!0,attrs:{class:"language-js"}},[t._v("user"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("interact")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" move"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("356")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),e("p",[t._v("Multiple Interactions can be passed through as multiple arguments:")]),e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",{pre:!0,attrs:{class:"language-js"}},[t._v("user"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("interact")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" click"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("250")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("356")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello world'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),e("p",[t._v("The timing of Interactions are controlled by an emulation layer, called "),e("a",{attrs:{href:"../advanced-functionality/humanoids"}},[t._v("Huminoids")]),t._v(", which generate realistic-looking, human-like movements on the remote webpage.")]),e("p",[t._v("Interaction Commands fall into three broad categories:")]),e("ul",[e("li",[t._v("Mouse Commands")]),e("li",[t._v("Keyboard Commands")]),e("li",[t._v("WaitFor Commands")])]),e("h2",{attrs:{id:"the-five-mouse-commands"}},[e("a",{attrs:{href:"#the-five-mouse-commands","aria-hidden":"true"}},[t._v("#")]),t._v("The Five Mouse Commands")]),e("ul",[e("li",[t._v("move "),e("code",{pre:!0},[t._v("MousePosition")]),t._v(" Move cursor to the desired position.")]),e("li",[t._v("click "),e("code",{pre:!0},[t._v("MousePosition")]),t._v(" Press and release the mouse button as a single click.")]),e("li",[t._v("clickDown "),e("code",{pre:!0},[t._v("MousePosition")]),t._v(" Press the mouse button.")]),e("li",[t._v("clickUp "),e("code",{pre:!0},[t._v("MousePosition")]),t._v(" Release the mouse button.")]),e("li",[t._v("doubleclick "),e("code",{pre:!0},[t._v("MousePosition")]),t._v(" Press and release the mouse button twice in rapid succession.")])]),e("h4",{attrs:{id:"mouseposition"}},[e("a",{attrs:{href:"#mouseposition","aria-hidden":"true"}},[t._v("#")]),e("strong",[t._v("MousePosition")]),t._v(":")]),e("p",[t._v("Every mouse command include a "),e("code",{pre:!0},[t._v("MousePosition")]),t._v(" value, which specifies where the interaction takes place. It accepts three possible options:")]),e("ul",[e("li",[e("code",{pre:!0},[t._v("[x, y]")]),t._v(" These are pixels relative to the top-left corner of the viewport.")]),e("li",[e("code",{pre:!0},[t._v("SuperElement")]),t._v(" Any element from the AwaitedDOM, which are translated into x/y coordinates.")]),e("li",[e("code",{pre:!0},[t._v("null")]),t._v(" Leave the mouse in its current position.")])]),e("p",[t._v("For example, here's how to hover over a link:")]),e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",{pre:!0,attrs:{class:"language-js"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" aElem "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" browser"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("document")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("querySelector")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a.more-information'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nuser"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("interact")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" move"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" aElem "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),e("p",[t._v("Or double-click on a specific x/y coordinate:")]),e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",{pre:!0,attrs:{class:"language-js"}},[t._v("user"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("interact")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" doubleclick"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("150")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),e("h4",{attrs:{id:"dictating-left-middle-or-right"}},[e("a",{attrs:{href:"#dictating-left-middle-or-right","aria-hidden":"true"}},[t._v("#")]),e("strong",[t._v("Dictating Left, Middle or Right")]),t._v(":")]),e("p",[t._v("All button commands (click, doubleclick, etc) operate on the "),e("code",{pre:!0},[t._v("Left")]),t._v(" button by default. However, you can affix any of these commands with "),e("code",{pre:!0},[t._v("Left")]),t._v(", "),e("code",{pre:!0},[t._v("Middle")]),t._v(" or "),e("code",{pre:!0},[t._v("Right")]),t._v(" to specify a specific button. For example:")]),e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",{pre:!0,attrs:{class:"language-js"}},[t._v("user"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("interact")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" clickRight"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("55")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),e("h2",{attrs:{id:"the-four-keyboard-commands"}},[e("a",{attrs:{href:"#the-four-keyboard-commands","aria-hidden":"true"}},[t._v("#")]),t._v("The Four Keyboard Commands")]),e("ul",[e("li",[t._v("keyPress: "),e("code",{pre:!0},[t._v("KeyboardChar")])]),e("li",[t._v("keyDown: "),e("code",{pre:!0},[t._v("KeyboardChar")])]),e("li",[t._v("keyUp: "),e("code",{pre:!0},[t._v("KeyboardChar")])]),e("li",[t._v("type: "),e("code",{pre:!0},[t._v("(string | KeyboardChar)[]")])])]),e("p",[t._v("Import KeyboardKeys from IKeyboardLayoutUS for all valid KeyboardChar values (e.g. "),e("code",{pre:!0},[t._v("KeyboardKeys['\\n']")]),t._v(", "),e("code",{pre:!0},[t._v("KeyboardKeys.Enter")]),t._v(").")]),e("h2",{attrs:{id:"the-three-waitfor-commands"}},[e("a",{attrs:{href:"#the-three-waitfor-commands","aria-hidden":"true"}},[t._v("#")]),t._v("The Three WaitFor Commands")]),e("ul",[e("li",[t._v("waitForNode: "),e("code",{pre:!0},[t._v("SuperNode")])]),e("li",[t._v("waitForElementVisible: "),e("code",{pre:!0},[t._v("SuperElement")])]),e("li",[t._v("waitForMillis: "),e("code",{pre:!0},[t._v("number")])])]),e("p",[t._v("Read "),e("a",{attrs:{href:"https://stackoverflow.com/questions/9979172/difference-between-node-object-and-element-object",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("this StackOverflow discussion")]),t._v(" on the difference between Nodes and Elements.")]),e("h2",{attrs:{id:"using-shortcuts"}},[e("a",{attrs:{href:"#using-shortcuts","aria-hidden":"true"}},[t._v("#")]),t._v("Using Shortcuts")]),e("p",[t._v("If you have no need to change the position of the mouse between commands (or other complexities, such as "),e("code",{pre:!0},[t._v("waitFor")]),t._v("), you can create Interactions using simple "),e("code",{pre:!0},[t._v("Command")]),t._v(" strings.")]),e("p",[t._v("For example, follow up a move command with click:")]),e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",{pre:!0,attrs:{class:"language-js"}},[t._v("user"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("interact")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" move"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("55")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),e("h2",{attrs:{id:"combining-commands"}},[e("a",{attrs:{href:"#combining-commands","aria-hidden":"true"}},[t._v("#")]),t._v("Combining Commands")]),e("p",[t._v("A single Interaction can include multiple commands. Multiple commands within a single Interaction are executed in rapid succession by the Humanoid.")]),e("p",[t._v("Interactions are similar to paragraphs. The Humanoid adds a longer pause between Interactions then it does between commands within a single Interaction.")]),e("p",[t._v("For example, this allows you to implement simple drag and drop interactions:")]),e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",{pre:!0,attrs:{class:"language-js"}},[t._v("user"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("interact")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" clickDown"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("55")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" move"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("155")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("142")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'clickUp'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),e("p",[t._v("When multiple commands are combined within a single Interaction, their execution takes the following order:")]),e("ol",[e("li",[t._v("waitForNode")]),e("li",[t._v("waitForElementVisible")]),e("li",[t._v("waitForMillis")]),e("li",[t._v("click")]),e("li",[t._v("doubleclick")]),e("li",[t._v("clickDown")]),e("li",[t._v("move")]),e("li",[t._v("clickUp")]),e("li",[t._v("keyPress")]),e("li",[t._v("keyDown")]),e("li",[t._v("type")]),e("li",[t._v("keyUp")])]),e("p",[t._v('Note: Although commands within a single Interaction are sometimes executed at "nearly" the same time, it is never at the same precise moment. Their execution always follows the order listed above.')]),e("h2",{attrs:{id:"when-you-shouldnt-combine-commands"}},[e("a",{attrs:{href:"#when-you-shouldnt-combine-commands","aria-hidden":"true"}},[t._v("#")]),t._v("When You Shouldn't Combine Commands")]),e("p",[t._v("It's important to understand that combining multiple commands into a single Interaction usually produces different effects than splitting across multiple Interactions.")]),e("p",[t._v("For example, there is a subtle but important difference between the following three code blocks:")]),e("label",[t._v("\n  Example #1\n")]),e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",{pre:!0,attrs:{class:"language-js"}},[t._v("user"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("interact")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" clickDown"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("55")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),e("label",[t._v("\n  Example #2\n")]),e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",{pre:!0,attrs:{class:"language-js"}},[t._v("user"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("interact")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" move"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("55")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" clickDown"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),e("label",[t._v("\n  Example #2\n")]),e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",{pre:!0,attrs:{class:"language-js"}},[t._v("user"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("interact")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" move"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("55")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" clickDown"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),e("p",[t._v("The first example moves the cursor to 55x42 before pressing the mouse down.")]),e("p",[t._v("The second example does the opposite. It presses the mouse down at 5x5 before moving the cursor to 55x42 (see Combining Commands section above).")]),e("p",[t._v("The third command moves the mouse to 55x42, pauses, then moves the mouse to 5x5 before clicking down.")]),e("h2",{attrs:{id:"conflicting-commands-will-throw-errors"}},[e("a",{attrs:{href:"#conflicting-commands-will-throw-errors","aria-hidden":"true"}},[t._v("#")]),t._v("Conflicting Commands Will Throw Errors")]),e("p",[t._v("An error will be thrown if you send commands that conflict with each other.")]),e("p",[t._v("For example, the following example blows up when doubleclick is called while the mouse is still down:")]),e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",{pre:!0,attrs:{class:"language-js"}},[t._v("user"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("interact")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" clickDown"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("55")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" doubleclick"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),e("p",[t._v("You can fix this by releasing the down:")]),e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",{pre:!0,attrs:{class:"language-js"}},[t._v("user"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("interact")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" clickDown"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("55")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'up'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" doubleclick"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])}),[],!1,null,null,null);"function"==typeof c&&c(_),"function"==typeof v&&v(_);s.default=_.exports}}]);