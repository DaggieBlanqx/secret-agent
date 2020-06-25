(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{695:function(e,t,a){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},812:function(e,t,a){"use strict";a.r(t);var o=a(1),n=a(695),s=a(0);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}s.a.config.optionMergeStrategies;var i={VueRemarkRoot:n.a},l=function(e){var t=e.options.components=e.options.components||{},a=e.options.computed=e.options.computed||{};Object.keys(i).forEach((function(e){"object"===r(i[e])&&"function"==typeof i[e].render?t[e]=i[e]:a[e]=function(){return i[e]}}))},c=s.a.config.optionMergeStrategies,d="__vueRemarkFrontMatter",v={excerpt:null,title:"ValidityState"};var h=function(e){e.options[d]&&(e.options[d]=v),s.a.util.defineReactive(e.options,d,v),e.options.computed=c.computed({$frontmatter:function(){return e.options[d]}},e.options.computed)},u=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("VueRemarkRoot",[a("h1",{attrs:{id:"validitystate"}},[a("a",{attrs:{href:"#validitystate","aria-hidden":"true"}},[e._v("#")]),e._v("ValidityState")]),a("div",{staticClass:"overview"},[e._v("The "),a("strong",[a("code",[e._v("ValidityState")])]),e._v(" interface represents the "),a("em",[e._v("validity states")]),e._v(" that an element can be in, with respect to constraint validation. Together, they help explain why an element's value fails to validate, if it's not valid.")]),a("h2",{attrs:{id:"properties"}},[a("a",{attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v("Properties")]),a("ul",{staticClass:"items properties"},[a("li",[a("a",{attrs:{href:""}},[e._v("badInput")]),a("div",[e._v("A "),a("a",{attrs:{href:"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",title:"The Boolean object is an object wrapper for a boolean value."}},[a("code",[e._v("Boolean")])]),e._v(" that is "),a("code",[e._v("true")]),e._v(" if the user has provided input that the browser is unable to convert.")])]),a("li",[a("a",{attrs:{href:""}},[e._v("customError")]),a("div",[e._v("A "),a("a",{attrs:{href:"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",title:"The Boolean object is an object wrapper for a boolean value."}},[a("code",[e._v("Boolean")])]),e._v(" indicating whether the element's custom validity message has been set to a non-empty string by calling the element's "),a("a",{attrs:{href:"/en-US/docs/Web/API/HTMLObjectElement/setCustomValidity",title:"The setCustomValidity() method of the HTMLObjectElement interface sets a custom validity message for the element."}},[a("code",[e._v("setCustomValidity()")])]),e._v(" method.")])]),a("li",[a("a",{attrs:{href:""}},[e._v("patternMismatch")]),a("div",[e._v("A "),a("a",{attrs:{href:"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",title:"The Boolean object is an object wrapper for a boolean value."}},[a("code",[e._v("Boolean")])]),e._v(" that is "),a("code",[e._v("true")]),e._v(" if the value does not match the specified "),a("code",[a("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/input#attr-pattern"}},[e._v("pattern")])]),e._v(", and "),a("code",[e._v("false")]),e._v(" if it does match. If true, the element matches the "),a("a",{attrs:{href:"/en-US/docs/Web/CSS/:invalid",title:"The :invalid CSS pseudo-class represents any <input> or other <form> element whose contents fail to validate."}},[a("code",[e._v(":invalid")])]),e._v(" CSS pseudo-class.")])]),a("li",[a("a",{attrs:{href:""}},[e._v("rangeOverflow")]),a("div",[e._v("A "),a("a",{attrs:{href:"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",title:"The Boolean object is an object wrapper for a boolean value."}},[a("code",[e._v("Boolean")])]),e._v(" that is true if the value is greater than the maximum specified by the "),a("code",[a("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/input#attr-max"}},[e._v("max")])]),e._v(" attribute, or "),a("code",[e._v("false")]),e._v(" if it is less than or equal to the maximum. If true, the element matches the "),a("a",{attrs:{href:"/en-US/docs/Web/CSS/:invalid",title:"The :invalid CSS pseudo-class represents any <input> or other <form> element whose contents fail to validate."}},[a("code",[e._v(":invalid")])]),e._v(" and "),a("a",{attrs:{href:"/en-US/docs/Web/CSS/:out-of-range",title:"The :out-of-range CSS pseudo-class represents an <input> element whose current value is outside the range limits specified by the min and max attributes."}},[a("code",[e._v(":out-of-range")])]),e._v(" and CSS pseudo-classes.")])]),a("li",[a("a",{attrs:{href:""}},[e._v("rangeUnderflow")]),a("div",[e._v("A "),a("a",{attrs:{href:"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",title:"The Boolean object is an object wrapper for a boolean value."}},[a("code",[e._v("Boolean")])]),e._v(" that is "),a("code",[e._v("true")]),e._v(" if the value is less than the minimum specified by the "),a("code",[a("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/input#attr-min"}},[e._v("min")])]),e._v(" attribute, or "),a("code",[e._v("false")]),e._v(" if it is greater than or equal to the minimum. If true, the element matches the "),a("a",{attrs:{href:"/en-US/docs/Web/CSS/:invalid",title:"The :invalid CSS pseudo-class represents any <input> or other <form> element whose contents fail to validate."}},[a("code",[e._v(":invalid")])]),e._v(" and "),a("a",{attrs:{href:"/en-US/docs/Web/CSS/:out-of-range",title:"The :out-of-range CSS pseudo-class represents an <input> element whose current value is outside the range limits specified by the min and max attributes."}},[a("code",[e._v(":out-of-range")])]),e._v(" CSS pseudo-classes.")])]),a("li",[a("a",{attrs:{href:""}},[e._v("stepMismatch")]),a("div",[e._v("A "),a("a",{attrs:{href:"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",title:"The Boolean object is an object wrapper for a boolean value."}},[a("code",[e._v("Boolean")])]),e._v(" that is "),a("code",[e._v("true")]),e._v(" if the value does not fit the rules determined by the "),a("code",[a("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/input#attr-step"}},[e._v("step")])]),e._v(" attribute (that is, it's not evenly divisible by the step value), or "),a("code",[e._v("false")]),e._v(" if it does fit the step rule. If true, the element matches the "),a("a",{attrs:{href:"/en-US/docs/Web/CSS/:invalid",title:"The :invalid CSS pseudo-class represents any <input> or other <form> element whose contents fail to validate."}},[a("code",[e._v(":invalid")])]),e._v(" and "),a("a",{attrs:{href:"/en-US/docs/Web/CSS/:out-of-range",title:"The :out-of-range CSS pseudo-class represents an <input> element whose current value is outside the range limits specified by the min and max attributes."}},[a("code",[e._v(":out-of-range")])]),e._v(" CSS pseudo-classes.")])]),a("li",[a("a",{attrs:{href:""}},[e._v("tooLong")]),a("div",[e._v("A "),a("a",{attrs:{href:"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",title:"The Boolean object is an object wrapper for a boolean value."}},[a("code",[e._v("Boolean")])]),e._v(" that is "),a("code",[e._v("true")]),e._v(" if the value exceeds the specified "),a("code",[e._v("maxlength")]),e._v(" for "),a("a",{attrs:{href:"/en-US/docs/Web/API/HTMLInputElement",title:"The HTMLInputElement interface provides special properties and methods for manipulating the options, layout, and presentation of <input> elements."}},[a("code",[e._v("HTMLInputElement")])]),e._v(" or "),a("a",{attrs:{href:"/en-US/docs/Web/API/HTMLTextAreaElement",title:"The HTMLTextAreaElement interface provides special properties and methods for manipulating the layout and presentation of <textarea> elements."}},[a("code",[e._v("HTMLTextAreaElement")])]),e._v(" objects, or false if its length is less than or equal to the maximum length. "),a("em",[a("strong",[e._v("Note:")]),e._v(" This property is never "),a("code",[e._v("true")]),e._v(" in Gecko, because elements' values are prevented from being longer than "),a("code",[e._v("maxlength")]),e._v(". ")]),e._v("If true, the element matches the the "),a("a",{attrs:{href:"/en-US/docs/Web/CSS/:invalid",title:"The :invalid CSS pseudo-class represents any <input> or other <form> element whose contents fail to validate."}},[a("code",[e._v(":invalid")])]),e._v(" and "),a("a",{attrs:{href:"/en-US/docs/Web/CSS/:out-of-range",title:"The :out-of-range CSS pseudo-class represents an <input> element whose current value is outside the range limits specified by the min and max attributes."}},[a("code",[e._v(":out-of-range")])]),e._v(" CSS pseudo-classes.")])]),a("li",[a("a",{attrs:{href:""}},[e._v("tooShort")]),a("div",[e._v("A "),a("a",{attrs:{href:"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",title:"The Boolean object is an object wrapper for a boolean value."}},[a("code",[e._v("Boolean")])]),e._v(" that is "),a("code",[e._v("true")]),e._v(" if the value fails to meet the specified "),a("code",[e._v("minlength")]),e._v(" for "),a("a",{attrs:{href:"/en-US/docs/Web/API/HTMLInputElement",title:"The HTMLInputElement interface provides special properties and methods for manipulating the options, layout, and presentation of <input> elements."}},[a("code",[e._v("HTMLInputElement")])]),e._v(" or "),a("a",{attrs:{href:"/en-US/docs/Web/API/HTMLTextAreaElement",title:"The HTMLTextAreaElement interface provides special properties and methods for manipulating the layout and presentation of <textarea> elements."}},[a("code",[e._v("HTMLTextAreaElement")])]),e._v(" objects, or "),a("code",[e._v("false")]),e._v(" if its length is greater than or equal to the minimum length. If true, the element matches the "),a("a",{attrs:{href:"/en-US/docs/Web/CSS/:invalid",title:"The :invalid CSS pseudo-class represents any <input> or other <form> element whose contents fail to validate."}},[a("code",[e._v(":invalid")])]),e._v(" and "),a("a",{attrs:{href:"/en-US/docs/Web/CSS/:out-of-range",title:"The :out-of-range CSS pseudo-class represents an <input> element whose current value is outside the range limits specified by the min and max attributes."}},[a("code",[e._v(":out-of-range")])]),e._v(" CSS pseudo-classes.")])]),a("li",[a("a",{attrs:{href:""}},[e._v("typeMismatch")]),a("div",[e._v("A "),a("a",{attrs:{href:"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",title:"The Boolean object is an object wrapper for a boolean value."}},[a("code",[e._v("Boolean")])]),e._v(" that is "),a("code",[e._v("true")]),e._v(" if the value is not in the required syntax (when "),a("code",[a("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/input#attr-type"}},[e._v("type")])]),e._v(" is "),a("code",[e._v("email")]),e._v(" or "),a("code",[e._v("url")]),e._v("), or "),a("code",[e._v("false")]),e._v(" if the syntax is correct. If true, the element matches the "),a("a",{attrs:{href:"/en-US/docs/Web/CSS/:invalid",title:"The :invalid CSS pseudo-class represents any <input> or other <form> element whose contents fail to validate."}},[a("code",[e._v(":invalid")])]),e._v(" CSS pseudo-class.")])]),a("li",[a("a",{attrs:{href:""}},[e._v("valid")]),a("div",[e._v("A "),a("a",{attrs:{href:"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",title:"The Boolean object is an object wrapper for a boolean value."}},[a("code",[e._v("Boolean")])]),e._v(" that is "),a("code",[e._v("true")]),e._v(" if the element meets all its validation constraints, and is therefore considered to be valid, or "),a("code",[e._v("false")]),e._v(" if it fails any constraint. If true, the element matches the "),a("a",{attrs:{href:"/en-US/docs/Web/CSS/:valid",title:"The :valid CSS pseudo-class represents any <input> or other <form> element whose contents validate successfully. This allows to easily make valid fields adopt an appearance that helps the user confirm that their data is formatted properly."}},[a("code",[e._v(":valid")])]),e._v(" CSS pseudo-class; the "),a("a",{attrs:{href:"/en-US/docs/Web/CSS/:invalid",title:"The :invalid CSS pseudo-class represents any <input> or other <form> element whose contents fail to validate."}},[a("code",[e._v(":invalid")])]),e._v(" CSS pseudo-class otherwise.")])]),a("li",[a("a",{attrs:{href:""}},[e._v("valueMissing")]),a("div",[e._v("A "),a("a",{attrs:{href:"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",title:"The Boolean object is an object wrapper for a boolean value."}},[a("code",[e._v("Boolean")])]),e._v(" that is "),a("code",[e._v("true")]),e._v(" if the element has a "),a("code",[a("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/input#attr-required"}},[e._v("required")])]),e._v(" attribute, but no value, or "),a("code",[e._v("false")]),e._v(" otherwise. If true, the element matches the "),a("a",{attrs:{href:"/en-US/docs/Web/CSS/:invalid",title:"The :invalid CSS pseudo-class represents any <input> or other <form> element whose contents fail to validate."}},[a("code",[e._v(":invalid")])]),e._v(" CSS pseudo-class.")])])]),a("h2",{attrs:{id:"methods"}},[a("a",{attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v("Methods")]),a("ul",{staticClass:"items methods"}),a("h2",{attrs:{id:"events"}},[a("a",{attrs:{href:"#events","aria-hidden":"true"}},[e._v("#")]),e._v("Events")])])}),[],!1,null,null,null);"function"==typeof l&&l(u),"function"==typeof h&&h(u);t.default=u.exports}}]);