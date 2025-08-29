<!-- What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? -->

getElementById -->It selects a single element by its unique id attribute and returns the element object.

getElementsByClassName-->It selects all elements with the same class name and returns an HTMLCollection.

querySelector-->It selects the first element that matches a CSS selector (such as #id, .class, tag, or attribute) and returns the element object.

querySelectorAll-->It selects all elements that match a given CSS selector and returns a NodeList.


<!-- How do you create and insert a new element into the DOM? -->


Create a new element with document.createElement().

Add content using innerText or innerHTML.

Insert the new element into the DOM using parentElement.appendChild(newElement).

<!-- What is Event Bubbling and how does it work?
 -->
 Event bubbling is the default behavior in JavaScript where an event triggered on a specific HTML element propagates upward through the DOM to its parent elements. This means that if you click on a nested element, the event is first handled by that element, then "bubbles up" to its parent, then to the parent's parent, and continues up to the root of the document.

 How it works: If I click a button inside a div, the click event will first be handled by the button, then bubble up to the div, then the body, and so on, up to the document.

 <!-- What is Event Delegation in JavaScript? Why is it useful? -->

 Event delegation in JavaScript is a technique for handling events efficiently, especially when dealing with many similar elements or elements added dynamically. Instead of adding an event listener to each child element, a single event listener is attached to a common parent or ancestor element.

  Event delegation process follows 'Event bubbling' method. When an event occurs on an element, it bubbles up the DOM tree after triggers on the specific element.
 

 <!-- What is the difference between preventDefault() and stopPropagation() methods? -->

 preventDefault() -->Stops browser’s default action. Prevents the default action associated with an event.	

 stopPropagation() --> Stops the event from bubbling up the DOM tree. It prevents the event from reaching parent elements' event listeners. The event still triggers on the element it was originally attached to, but it will not propagate further up.	
