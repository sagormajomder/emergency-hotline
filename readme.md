## Answer the following questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

#### getElementById()

- It help us to select a specific html element cause It is unique across the html document.
- It returns a single html element.
- To select element, we have to put just `id` name of the element without any prefix like (#).
- If no match element found, it return `null`.

#### getElementsByClassName()

- It help us to select multiple html elements
- It returns a live HTMLCollection which is an array-like object. That's why we can't apply any arroy method on this object. We can just iterate it using traditional `for` loop or `for...of` loop and can access it's items using index number.
- To select elements, we have to put just `class` name of the element without any prefix like (.).
- If no match element found, it return empty HTMLCollection.

#### querySelector()

- It help us to select html element using css selector.
- It return a single html element like `getElementById()`.
- Though css selector like class name could have multiple elements select but it only return the first match of that css selector.
- If no match element found, it return `null`.

#### querySelectorAll()

- It help us to select multiple html elements using css selector.
- It returns multiple matching html elements like `getElementsByClassName()`.
- It return matching html elements as a static `NodeList` which is again an array-like object and we can't apply any array method on this. we can iterate it using traditional `for` loop, a `for...of` loop or a `forEach()` method and can access it's items using index number.
- If no match found, it return empty NodeList.

### 2. How do you create and insert a new element into the DOM?

We can create new element using `document.createElement()` and we have to put the element name into this method like `document.createElement("div")` which creates an `div` html element but it is just store into memory not into the DOM. To insert it into DOM, we have to select an existing html block element and insert newly created element into this using `appendChild()` method.

```js
const newLiEl = document.createElement('li');
const ulEl = document.getElementById('ul-list');
ulEl.appendChild(newLiEl);
```

### 3. What is Event Bubbling and how does it work?

When a event trigger into a html element, the event is propagate through the DOM tree from that element to it's parent, to grandparent, to great grandparent and so on untill the root element reach. This event propagate process is called Event bubbling. It is like climb the top most branch of a tree or water bubbles up to the water surface.

### 4. What is Event Delegation in JavaScript? Why is it useful?

Suppose We have to handle so much different types of event on different html elements. If we add 5 different event on a single html elements and we have to handle these 5 different event on 100 html elements then it could affect the website perfomance. Now as we know that js event are bubbling up through the DOM tree, so we can solve the problem just by delegating these events to the common parent of these html elements and handle these events on the handler function of parent element. This process is called event delegation in JS. In this way, we reduce the event handlers and increase the website performance.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

When we called `preventDefault()` on a handler function, it helps us to prevent the default behevior of the browser generating by the html element corresponding events such as when submiting the form, normally form is reload the webpage. But if we use `preventDefault()`, the webpage is not reload.

By default events are bubbling up through the DOM tree. If we don't want this behevior, we can simply prevent that by calling `stopPropagation()` method into the handler function.

so `preventDefault()` help us to address the default behavior of the browers correspond to a html element's event and `stopPropagation()` help us to address the events propagation through the DOM tree.
