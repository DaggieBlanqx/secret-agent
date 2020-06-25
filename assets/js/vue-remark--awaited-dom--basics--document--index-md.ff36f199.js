(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{695:function(e,t,n){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},954:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(695),o=n(0);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}o.a.config.optionMergeStrategies;var i={VueRemarkRoot:a.a},c=function(e){var t=e.options.components=e.options.components||{},n=e.options.computed=e.options.computed||{};Object.keys(i).forEach((function(e){"object"===s(i[e])&&"function"==typeof i[e].render?t[e]=i[e]:n[e]=function(){return i[e]}}))},d=o.a.config.optionMergeStrategies,l="__vueRemarkFrontMatter",v={excerpt:null,title:"Document"};var h=function(e){e.options[l]&&(e.options[l]=v),o.a.util.defineReactive(e.options,l,v),e.options.computed=d.computed({$frontmatter:function(){return e.options[l]}},e.options.computed)},f=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("VueRemarkRoot",[n("h1",{attrs:{id:"document"}},[n("a",{attrs:{href:"#document","aria-hidden":"true"}},[e._v("#")]),e._v("Document")]),n("div",{staticClass:"overview"},[n("span",{staticClass:"seoSummary"},[e._v("The "),n("strong",[n("code",[e._v("Document")])]),e._v(" interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the "),n("a",{attrs:{href:"/en-US/docs/Using_the_W3C_DOM_Level_1_Core"}},[e._v("DOM tree")]),e._v(".")]),e._v(" The DOM tree includes elements such as "),n("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/body",title:"The HTML <body> Element represents the content of an HTML&nbsp;document. There can be only one <body> element in a document."}},[n("code",[e._v("<body>")])]),e._v(" and "),n("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/table",title:"The HTML <table> element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data."}},[n("code",[e._v("<table>")])]),e._v(", among "),n("a",{attrs:{href:"/en-US/docs/Web/HTML/Element"}},[e._v("many others")]),e._v(". It provides functionality globally to the document, like how to obtain the page's URL and create new elements in the document.")]),n("h2",{attrs:{id:"properties"}},[n("a",{attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v("Properties")]),n("ul",{staticClass:"items properties"},[n("li",[n("a",{attrs:{href:""}},[e._v("anchors")]),n("div",[e._v("Returns a list of all of the anchors in the document.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("body")]),n("div",[e._v("Returns the "),n("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/body",title:"The HTML <body> Element represents the content of an HTML&nbsp;document. There can be only one <body> element in a document."}},[n("code",[e._v("<body>")])]),e._v(" or "),n("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/frameset",title:"The HTML <frameset> element is used to contain <frame> elements."}},[n("code",[e._v("<frameset>")])]),e._v(" node of the current document.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("characterSet")]),n("div",[e._v("Returns the character set being used by the document.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("compatMode")]),n("div",[e._v("Indicates whether the document is rendered in "),n("em",[e._v("quirks")]),e._v(" or "),n("em",[e._v("strict")]),e._v(" mode.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("contentType")]),n("div",[e._v("Returns the Content-Type from the MIME Header of the current document.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("cookie")]),n("div",[e._v("Returns a semicolon-separated list of the cookies for that document or sets a single cookie.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("defaultView")]),n("div",[e._v("Returns a reference to the window object.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("designMode")]),n("div",[e._v("Gets/sets the ability to edit the whole document.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("dir")]),n("div",[e._v("Gets/sets directionality (rtl/ltr) of the document.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("doctype")]),n("div",[e._v("Returns the Document Type Definition (DTD) of the current document.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("documentElement")]),n("div",[e._v("Returns the "),n("a",{attrs:{href:"/en-US/docs/Web/API/Element",title:"Element is the most general base class from which all element objects (i.e. objects that represent elements) in a Document inherit. It only has methods and properties common to all kinds of elements. More specific classes inherit from Element."}},[n("code",[e._v("Element")])]),e._v(" that is a direct child of the document. For HTML documents, this is normally the "),n("a",{attrs:{href:"/en-US/docs/Web/API/HTMLHtmlElement",title:"The HTMLHtmlElement interface serves as the root node for a given HTML document. This object inherits the properties and methods described in the HTMLElement interface."}},[n("code",[e._v("HTMLHtmlElement")])]),e._v(" object representing the document's "),n("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/html",title:"The HTML <html> element represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element."}},[n("code",[e._v("<html>")])]),e._v(" element.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("documentURI")]),n("div",[e._v("Returns the document location as a string.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("domain")]),n("div",[e._v("Gets/sets the domain of the current document.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("embeds")]),n("div",[e._v("Returns a list of the embedded "),n("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/embed",title:"The HTML <embed> element embeds external content at the specified point in the document. This content is provided by an external application or other source of interactive content such as a browser plug-in."}},[n("code",[e._v("<embed>")])]),e._v(" elements within the current document.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("featurePolicy")]),n("div",[e._v("Returns the "),n("a",{attrs:{href:"/en-US/docs/Web/API/FeaturePolicy",title:"The FeaturePolicy&nbsp;interface of the Feature Policy API represents the set of policies applied to the current execution context."}},[n("code",[e._v("FeaturePolicy")])]),e._v(" interface which provides a simple API for introspecting the feature policies applied to a specific document.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("fonts")]),n("div",[e._v("Returns the "),n("a",{attrs:{href:"/en-US/docs/Web/API/FontFaceSet",title:"The FontFaceSet interface of the CSS Font Loading API&nbsp;manages the loading of font-faces&nbsp;and querying of&nbsp;their download&nbsp;status."}},[n("code",[e._v("FontFaceSet")])]),e._v(" interface of the current document.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("forms")]),n("div",[e._v("Returns a list of the "),n("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/form",title:"The HTML <form> element represents a document section containing interactive controls for submitting information."}},[n("code",[e._v("<form>")])]),e._v(" elements within the current document.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("fullscreenEnabled")]),n("div",[e._v("Indicates whether or not full-screen mode is available.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("head")]),n("div",[e._v("Returns the "),n("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/head",title:"The HTML <head> element contains machine-readable information (metadata) about the document, like its title, scripts, and style sheets."}},[n("code",[e._v("<head>")])]),e._v(" element of the current document.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("hidden")]),n("div",[e._v("Returns a Boolean value indicating if the page is considered hidden or not.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("images")]),n("div",[e._v("Returns a list of the images in the current document.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("implementation")]),n("div",[e._v("Returns the DOM implementation associated with the current document.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("lastModified")]),n("div",[e._v("Returns the date on which the document was last modified.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("links")]),n("div",[e._v("Returns a list of all the hyperlinks in the document.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("location")]),n("div",[e._v("Returns the URI of the current document.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("onfullscreenchange")]),n("div",[e._v("Is an "),n("a",{attrs:{href:"/en-US/docs/Web/API/EventHandler",title:"REDIRECT DOM event handlers"}},[n("code",[e._v("EventHandler")])]),e._v(" representing the code to be called when the "),n("code",[n("a",{attrs:{href:"/en-US/docs/Web/Events/fullscreenchange",title:"/en-US/docs/Web/Events/fullscreenchange"}},[e._v("fullscreenchange")])]),e._v(" event is raised.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("onfullscreenerror")]),n("div",[e._v("Is an "),n("a",{attrs:{href:"/en-US/docs/Web/API/EventHandler",title:"REDIRECT DOM event handlers"}},[n("code",[e._v("EventHandler")])]),e._v(" representing the code to be called when the "),n("code",[n("a",{attrs:{href:"/en-US/docs/Web/Events/fullscreenerror",title:"/en-US/docs/Web/Events/fullscreenerror"}},[e._v("fullscreenerror")])]),e._v(" event is raised.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("onpointerlockchange")]),n("div",[e._v("Is an "),n("a",{attrs:{href:"/en-US/docs/Web/API/EventHandler",title:"REDIRECT DOM event handlers"}},[n("code",[e._v("EventHandler")])]),e._v(" representing the code to be called when the "),n("code",[n("a",{attrs:{href:"/en-US/docs/Web/Events/pointerlockchange",title:"/en-US/docs/Web/Events/pointerlockchange"}},[e._v("pointerlockchange")])]),e._v(" event is raised.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("onpointerlockerror")]),n("div",[e._v("Is an "),n("a",{attrs:{href:"/en-US/docs/Web/API/EventHandler",title:"REDIRECT DOM event handlers"}},[n("code",[e._v("EventHandler")])]),e._v(" representing the code to be called when the "),n("code",[n("a",{attrs:{href:"/en-US/docs/Web/Events/pointerlockerror",title:"/en-US/docs/Web/Events/pointerlockerror"}},[e._v("pointerlockerror")])]),e._v(" event is raised.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("onreadystatechange")]),n("div",[e._v("Represents the event handling code for the "),n("code",[n("a",{attrs:{href:"/en-US/docs/Web/Events/readystatechange",title:"/en-US/docs/Web/Events/readystatechange"}},[e._v("readystatechange")])]),e._v(" event.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("onvisibilitychange")]),n("div",[e._v("Is an "),n("a",{attrs:{href:"/en-US/docs/Web/API/EventHandler",title:"REDIRECT DOM event handlers"}},[n("code",[e._v("EventHandler")])]),e._v(" representing the code to be called when the "),n("code",[n("a",{attrs:{href:"/en-US/docs/Web/Events/visibilitychange",title:"/en-US/docs/Web/Events/visibilitychange"}},[e._v("visibilitychange")])]),e._v(" event is raised.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("plugins")]),n("div",[e._v("Returns a list of the available plugins.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("readyState")]),n("div",[e._v("Returns loading status of the document.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("referrer")]),n("div",[e._v("Returns the URI of the page that linked to this page.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("scripts")]),n("div",[e._v("Returns all the "),n("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/script",title:"The HTML <script> element is used to embed or reference executable code; this is typically used to embed or refer to JavaScript code."}},[n("code",[e._v("<script>")])]),e._v(" elements on the document.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("scrollingElement")]),n("div",[e._v("Returns a reference to the "),n("a",{attrs:{href:"/en-US/docs/Web/API/Element",title:"Element is the most general base class from which all element objects (i.e. objects that represent elements) in a Document inherit. It only has methods and properties common to all kinds of elements. More specific classes inherit from Element."}},[n("code",[e._v("Element")])]),e._v(" that scrolls the document.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("title")]),n("div",[e._v("Sets or gets the title of the current document.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("URL")]),n("div",[e._v("Returns the document location as a string.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("visibilityState")]),n("div",[e._v("Returns a "),n("code",[e._v("string")]),e._v(" denoting the visibility state of the document. Possible values are "),n("code",[e._v("visible")]),e._v(", "),n("code",[e._v("hidden")]),e._v(", "),n("code",[e._v("prerender")]),e._v(", and "),n("code",[e._v("unloaded")]),e._v(".")])])]),n("h2",{attrs:{id:"methods"}},[n("a",{attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v("Methods")]),n("ul",{staticClass:"items methods"},[n("li",[n("a",{attrs:{href:""}},[e._v("adoptNode()")]),n("div",[e._v("Adopt node from an external document.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("captureEvents()")]),n("div",[e._v("See "),n("a",{attrs:{href:"/en-US/docs/Web/API/Window/captureEvents",title:"The Window.captureEvents() method registers the window to capture all events of the specified type."}},[n("code",[e._v("Window.captureEvents")])]),e._v(".")])]),n("li",[n("a",{attrs:{href:""}},[e._v("close()")]),n("div",[e._v("Closes a document stream for writing.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("createAttribute()")]),n("div",[e._v("Creates a new "),n("a",{attrs:{href:"/en-US/docs/Web/API/Attr",title:"The Attr interface represents one of a DOM element's attributes as an object. In most DOM methods, you will directly retrieve the attribute as a string (e.g., Element.getAttribute()), but certain functions (e.g., Element.getAttributeNode()) or means of iterating return Attr types."}},[n("code",[e._v("Attr")])]),e._v(" object and returns it.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("createAttributeNS()")]),n("div",[e._v("Creates a new attribute node in a given namespace and returns it.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("createCDATASection()")]),n("div",[e._v("Creates a new CDATA node and returns it.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("createComment()")]),n("div",[e._v("Creates a new comment node and returns it.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("createDocumentFragment()")]),n("div",[e._v("Creates a new document fragment.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("createElement()")]),n("div",[e._v("Creates a new element with the given tag name.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("createElementNS()")]),n("div",[e._v("Creates a new element with the given tag name and namespace URI.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("createEvent()")]),n("div",[e._v("Creates an event object.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("createNodeIterator()")]),n("div",[e._v("Creates a "),n("a",{attrs:{href:"/en-US/docs/Web/API/NodeIterator",title:"The NodeIterator interface represents an iterator over the members of a list of the nodes in a subtree of the DOM. The nodes will be returned in document order."}},[n("code",[e._v("NodeIterator")])]),e._v(" object.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("createProcessingInstruction()")]),n("div",[e._v("Creates a new "),n("a",{attrs:{href:"/en-US/docs/Web/API/ProcessingInstruction",title:"The ProcessingInstruction interface represents a processing instruction; that is, a Node which embeds an instruction targeting a specific application but that can be ignored by any other applications which don't recognize the instruction."}},[n("code",[e._v("ProcessingInstruction")])]),e._v(" object.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("createRange()")]),n("div",[e._v("Creates a "),n("a",{attrs:{href:"/en-US/docs/Web/API/Range",title:"The Range interface represents a fragment of a document that can contain nodes and parts of text nodes."}},[n("code",[e._v("Range")])]),e._v(" object.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("createTextNode()")]),n("div",[e._v("Creates a text node.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("createTreeWalker()")]),n("div",[e._v("Creates a "),n("a",{attrs:{href:"/en-US/docs/Web/API/TreeWalker",title:"The TreeWalker object represents the nodes of a document subtree and a position within them."}},[n("code",[e._v("TreeWalker")])]),e._v(" object.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("exitFullscreen()")]),n("div",[e._v("Requests that the element on this document which is currently being presented in full-screen mode be taken out of full-screen mode, restoring the previous state of the screen.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("exitPointerLock()")]),n("div",[e._v("Release the pointer lock.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("getElementsByClassName()")]),n("div",[e._v("Returns a list of elements with the given class name.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("getElementsByName()")]),n("div",[e._v("Returns a list of elements with the given name.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("getElementsByTagName()")]),n("div",[e._v("Returns a list of elements with the given tag name.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("getElementsByTagNameNS()")]),n("div",[e._v("Returns a list of elements with the given tag name and namespace.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("getSelection()")]),n("div",[e._v("Returns a "),n("a",{attrs:{href:"/en-US/docs/Web/API/Selection",title:"A Selection object represents the range of text selected by the user or the current position of the caret. To obtain a Selection object for examination or manipulation, call window.getSelection()."}},[n("code",[e._v("Selection")])]),e._v(" object representing the range of text selected by the user, or the current position of the caret.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("hasFocus()")]),n("div",[e._v("Returns "),n("code",[e._v("true")]),e._v(" if the focus is currently located anywhere inside the specified document.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("importNode()")]),n("div",[e._v("Returns a clone of a node from an external document.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("open()")]),n("div",[e._v("Opens a document stream for writing.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("releaseEvents()")]),n("div",[e._v("See "),n("a",{attrs:{href:"/en-US/docs/Web/API/Window/releaseEvents",title:"Releases the window from trapping events of a specific type."}},[n("code",[e._v("Window.releaseEvents()")])]),e._v(".")])]),n("li",[n("a",{attrs:{href:""}},[e._v("write()")]),n("div",[e._v("Writes text in a document.")])]),n("li",[n("a",{attrs:{href:""}},[e._v("writeln()")]),n("div",[e._v("Writes a line of text in a document.")])])]),n("h2",{attrs:{id:"events"}},[n("a",{attrs:{href:"#events","aria-hidden":"true"}},[e._v("#")]),e._v("Events")])])}),[],!1,null,null,null);"function"==typeof c&&c(f),"function"==typeof h&&h(f);t.default=f.exports}}]);