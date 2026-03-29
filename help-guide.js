// About jQuery
// jQuery is a fast, small, and feature-rich JavaScript library that simplifies HTML document traversal, event handling, animation, and AJAX. Its easy-to-use API works across multiple browsers, making DOM manipulation and event handling much simpler than raw JavaScript. jQuery's motto "write less, do more" reflects its focus on reducing boilerplate code.

// Syntax help
// Selectors
// jQuery uses CSS-style selectors to find and manipulate HTML elements, wrapped in the $() function. You can select by ID, class, element type, attributes, or any combination using the same syntax as CSS selectors. jQuery also provides powerful pseudo-selectors like :first, :last, :even, and :contains() for more specific element targeting. The selection returns a jQuery object that you can chain methods on for further manipulation.

// Basic selectors
$("#myId"); // Select by ID
$(".myClass"); // Select by class
$("div"); // Select all divs
$("div.myClass"); // Select divs with class
$("ul li"); // Descendant selector
$("ul > li"); // Direct child selector

// Attribute selectors
$('input[type="text"]'); // Attribute equals
$('a[href^="https"]'); // Attribute starts with
$('img[src$=".png"]'); // Attribute ends with
$("[data-custom]"); // Has attribute

// Pseudo-selectors
$("li:first"); // First element
$("li:last"); // Last element
$("tr:even"); // Even elements (0-indexed)
$("tr:odd"); // Odd elements
$('p:contains("text")'); // Contains text
$(":input"); // All form inputs
$(":visible"); // Visible elements
$(":hidden"); // Hidden elements

// DOM Manipulation
// jQuery provides intuitive methods for reading and modifying HTML content, text, attributes, and structure. The html() and text() methods get or set inner content, while attr() and prop() handle attributes and properties. Methods like append(), prepend(), before(), and after() let you insert new content at specific positions. These methods are chainable, so you can perform multiple operations in a single statement.

// Get and set content
$("#elem").html(); // Get HTML content
$("#elem").html("<p>New content</p>"); // Set HTML content
$("#elem").text(); // Get text content
$("#elem").text("New text"); // Set text content
$("#elem").val(); // Get input value
$("#elem").val("New value"); // Set input value

// Attributes and properties
$("img").attr("src"); // Get attribute
$("img").attr("src", "new.jpg"); // Set attribute
$("img").attr({ src: "new.jpg", alt: "Image" }); // Set multiple
$("input").prop("checked"); // Get property
$("input").prop("checked", true); // Set property
$("#elem").removeAttr("disabled"); // Remove attribute

// Insert content
$("#elem").append("<p>Appended</p>"); // Add inside at end
$("#elem").prepend("<p>Prepended</p>"); // Add inside at start
$("#elem").after("<p>After</p>"); // Add after element
$("#elem").before("<p>Before</p>"); // Add before element
$("<p>New</p>").appendTo("#elem"); // Reverse append

// Wrap and replace
$("p").wrap('<div class="wrapper"></div>'); // Wrap each element
$("p").wrapAll("<div></div>"); // Wrap all together
$("#elem").replaceWith("<div>New</div>"); // Replace element

// CSS and Classes
// jQuery simplifies CSS manipulation with methods for adding, removing, and toggling classes, as well as directly modifying styles. The addClass(), removeClass(), and toggleClass() methods handle class manipulation without overwriting existing classes. The css() method reads or sets inline styles, accepting either single properties or objects for multiple styles. These methods automatically handle vendor prefixes and provide consistent behavior across browsers.

// Class manipulation
$("#elem").addClass("active"); // Add class
$("#elem").removeClass("active"); // Remove class
$("#elem").toggleClass("active"); // Toggle class
$("#elem").hasClass("active"); // Check class (returns boolean)
$("#elem").addClass("one two three"); // Add multiple classes

// CSS styles
$("#elem").css("color"); // Get style value
$("#elem").css("color", "red"); // Set single style
$("#elem").css({
  // Set multiple styles
  color: "red",
  fontSize: "16px",
  backgroundColor: "#fff",
});

// Dimensions
$("#elem").width(); // Get width (content only)
$("#elem").width(200); // Set width
$("#elem").height(); // Get height
$("#elem").innerWidth(); // Width + padding
$("#elem").outerWidth(); // Width + padding + border
$("#elem").outerWidth(true); // Width + padding + border + margin

// Position and offset
$("#elem").offset(); // Position relative to document {top, left}
$("#elem").position(); // Position relative to offset parent
$(window).scrollTop(); // Get scroll position
$(window).scrollTop(100); // Set scroll position

// Events
// jQuery provides a consistent event handling system that works across all browsers. The on() method attaches event handlers and supports event delegation for dynamically added elements. You can bind multiple events at once, pass data to handlers, and use namespaced events for better organization. The off() method removes handlers, and trigger() programmatically fires events.

// Basic event binding
$("#btn").click(function () {
  console.log("Clicked!");
});

// Using on() method (preferred)
$("#btn").on("click", function () {
  console.log("Clicked!");
});

// Multiple events
$("#input").on("focus blur", function () {
  $(this).toggleClass("active");
});

// Event with data
$("#btn").on("click", { name: "John" }, function (event) {
  console.log(event.data.name);
});

// Event delegation (for dynamic elements)
$("#list").on("click", "li", function () {
  $(this).toggleClass("selected");
});

// Common events: click, dblclick, mouseenter, mouseleave, hover,
// focus, blur, change, keydown, keyup, keypress, submit, resize, scroll

// Event object
$("#elem").on("click", function (e) {
  e.preventDefault(); // Prevent default behavior
  e.stopPropagation(); // Stop event bubbling
  e.target; // Element that triggered event
  e.currentTarget; // Element handler is attached to
  (e.pageX, e.pageY); // Mouse position
});

// Remove events
$("#btn").off("click"); // Remove all click handlers
$("#btn").off("click", myHandler); // Remove specific handler
$("#btn").off(); // Remove all handlers

// Trigger events
$("#btn").trigger("click");
$("#form").trigger("submit");
$("#input").trigger("focus");

// Effects and Animation
// jQuery includes built-in effects for showing, hiding, fading, and sliding elements with smooth animations. Methods like show(), hide(), fadeIn(), fadeOut(), slideUp(), and slideDown() handle common animation patterns. The animate() method creates custom animations on any numeric CSS property. Animations are queued by default, so you can chain multiple effects that run in sequence.

// Show and hide
$("#elem").show(); // Show element
$("#elem").hide(); // Hide element
$("#elem").toggle(); // Toggle visibility
$("#elem").show(400); // Show with duration (ms)
$("#elem").show("slow"); // 'slow', 'normal', 'fast'

// Fade effects
$("#elem").fadeIn(); // Fade in
$("#elem").fadeOut(); // Fade out
$("#elem").fadeToggle(); // Toggle fade
$("#elem").fadeTo(400, 0.5); // Fade to opacity

// Slide effects
$("#elem").slideDown(); // Slide down to show
$("#elem").slideUp(); // Slide up to hide
$("#elem").slideToggle(); // Toggle slide

// Custom animation
$("#elem").animate(
  {
    opacity: 0.5,
    left: "+=50",
    height: "toggle",
  },
  1000,
); // Duration in ms

// Animation with callback
$("#elem").fadeOut(400, function () {
  $(this).remove(); // Called when animation completes
});

// Animation with easing
$("#elem").animate({ left: 500 }, 1000, "swing");

// Control animation queue
$("#elem").stop(); // Stop current animation
$("#elem").stop(true); // Stop and clear queue
$("#elem").finish(); // Jump to end of all animations
$("#elem").delay(500).fadeIn(); // Delay next animation

// Traversing
// jQuery provides powerful methods for navigating the DOM tree relative to selected elements. Methods like parent(), parents(), children(), and siblings() move up, down, and across the tree. Filter methods like first(), last(), eq(), and filter() narrow down selections. These methods enable precise element targeting without complex selector strings.

// Parent traversal
$("#elem").parent(); // Direct parent
$("#elem").parents(); // All ancestors
$("#elem").parents("div"); // Ancestors matching selector
$("#elem").closest("div"); // Nearest ancestor (including self)
$("#elem").parentsUntil("#container"); // Parents until match

// Child traversal
$("#elem").children(); // Direct children
$("#elem").children("p"); // Direct children matching selector
$("#elem").find("span"); // All descendants matching selector
$("#elem").contents(); // All children including text nodes

// Sibling traversal
$("#elem").next(); // Next sibling
$("#elem").prev(); // Previous sibling
$("#elem").nextAll(); // All following siblings
$("#elem").prevAll(); // All preceding siblings
$("#elem").siblings(); // All siblings
$("#elem").nextUntil(".stop"); // Siblings until match

// Filtering
$("li").first(); // First element
$("li").last(); // Last element
$("li").eq(2); // Element at index
$("li").filter(".active"); // Filter by selector
$("li").not(".disabled"); // Exclude matches
$("li").has("ul"); // Has descendant matching

// Adding to selection
$("p").add("span"); // Add to selection
$("#elem").addBack(); // Add previous selection

// AJAX
// jQuery simplifies AJAX requests with intuitive methods for loading data from servers without page reloads. The $.ajax() method provides full control over requests, while shorthand methods like $.get(), $.post(), and $.getJSON() handle common cases. The load() method fetches HTML and inserts it directly into elements. All AJAX methods return promises, enabling clean handling of success, error, and completion states.

// Load HTML into element
$("#result").load("/api/content");
$("#result").load("/api/content #section"); // Load specific part

// GET request
$.get("/api/data", function (response) {
  console.log(response);
});

// GET with parameters
$.get("/api/search", { q: "query", page: 1 }, function (response) {
  console.log(response);
});

// POST request
$.post(
  "/api/submit",
  { name: "John", email: "john@example.com" },
  function (response) {
    console.log(response);
  },
);

// GET JSON
$.getJSON("/api/data.json", function (data) {
  console.log(data);
});

// Full AJAX configuration
$.ajax({
  url: "/api/data",
  method: "POST", // GET, POST, PUT, DELETE
  data: { name: "John" },
  dataType: "json", // Expected response type
  contentType: "application/json",
  headers: { "X-Custom": "value" },
  timeout: 5000,
  success: function (response) {
    console.log("Success:", response);
  },
  error: function (xhr, status, error) {
    console.log("Error:", error);
  },
  complete: function () {
    console.log("Request finished");
  },
});

// Using promises
$.get("/api/data")
  .done(function (response) {
    console.log(response);
  })
  .fail(function (xhr) {
    console.log("Error");
  })
  .always(function () {
    console.log("Complete");
  });

// Utilities
// jQuery provides utility functions for common JavaScript tasks like iterating arrays, checking types, and manipulating data. The $.each() function iterates over arrays and objects, while $.map() transforms array elements. The $.extend() function merges objects, useful for combining options with defaults. These utilities work consistently across browsers and simplify common programming patterns.

// Iteration
$.each([1, 2, 3], function (index, value) {
  console.log(index, value);
});

$.each({ a: 1, b: 2 }, function (key, value) {
  console.log(key, value);
});

// Map and filter
var doubled = $.map([1, 2, 3], function (val) {
  return val * 2;
});

var filtered = $.grep([1, 2, 3, 4], function (val) {
  return val > 2;
});

// Merge objects
var defaults = { a: 1, b: 2 };
var options = { b: 3, c: 4 };
var merged = $.extend({}, defaults, options); // {a: 1, b: 3, c: 4}

// Deep merge
$.extend(true, target, object1, object2);

// Type checking
$.isArray([]); // true
$.isFunction(fn); // true
$.isNumeric("123"); // true
$.isPlainObject({}); // true
$.isEmptyObject({}); // true

// Data storage on elements
$("#elem").data("key", "value"); // Set data
$("#elem").data("key"); // Get data
$("#elem").removeData("key"); // Remove data

// DOM ready (wait for DOM to load)
$(document).ready(function () {
  // DOM is ready
});

// Shorthand
$(function () {
  // DOM is ready
});
