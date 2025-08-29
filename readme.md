## ( সহজ সরল সিম্পল ) ASSIGNMENT-005

---

# Project: Emergency Hotline

---

### Answers the following questions :

## 1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

### getElementById()

- getElementById() method selects only one html element by its 'id' and returns a single element.

```bash
document.getElementById('myId'); // one element
```

### getElementsByClassName()

- getElementsByClassName() method selects all elements with the given class name and returns HTMLCollectionlike an array, but not exactly.

```bash
document.getElementsByClassName('myClass'); // one element
```

### querySelector()

- querySelector() selects the first element matching any CSS selector and returns a single HTML element.

```bash
document.querySelector('.myClass'); // first element with class
```

### querySelectorAll()

- querySelectorAll() selects all elements matching a CSS selector and returns NodeList which can be loop through with forEach or for..of.

```bash
document.querySelectorAll('.myClass'); // all elements with class
```

## 2. How do you **create and insert a new element into the DOM**?

### Steps:

- Create a new element with document.createElement.

- Add content/text with textContent or innerHTML.

- Insert it into the DOM with appendChild or insertBefore.

```bash
const p = document.createElement('p'); // 1. Create a new paragraph

p.textContent = "Hello, I am new here!"; // 2. Add text

document.body.appendChild(p); // 3. Insert into the body
```

## 3. What is **Event Bubbling** and how does it work?

### Event Bubbling

- Event Bubbling means when you click an element, the event first runs on that element, then moves upward to its parent, grandparent, all the way to document.

### How it works:

- You click a 'button' inside a 'div' inside the 'body'.

- The click event fires first on the 'button' (the target).

- Then it fires on the 'div'.

- Then it fires on the 'body'.

And so on, all the way up to the document object. It's the reason why an event listener on a parent element can detect events that happened on its children.

## 4. What is **Event Delegation** in JavaScript? Why is it useful?

### Event Delegation

- Event Delegation means instead of adding a click handler to each child, you add it to the parent use event bubbling to catch clicks.

### How it works:

- Attach the listener to a stable parent element.

- When the event bubbles up to the parent, check the event.target property to see which child element actually triggered the event.

- Perform an action based on which child was clicked.

### Why it's useful:

- Uses only one listener instead of hundreds, saving memory.

- Works automatically for child elements added to the DOM in the future (no need to re-attach listeners).

- Perfect for handling clicks on any item in a long list (ul / li).

```bash
document.getElementById("parent").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    alert("Button clicked: " + e.target.innerText);
  }
});

```

## 5. What is the difference between **preventDefault() and stopPropagation()** methods?

### preventDefault()

- preventDefault() stops the default action of an element like stop a form from submitting.

```bash
form.addEventListener("submit", function(e) {
  e.preventDefault(); // stops form from reloading page
});

```

### stopPropagation()

- stopPropagation() stops the event from bubbling up to parent elements. Only run child’s click, not parent’s.

```bash
child.addEventListener("click", function(e) {
  e.stopPropagation(); // stops event from reaching parent
});

```

In short preventDefault() stop browser’s default behavior and stopPropagation() stop event from going up (bubbling).

---

## ⚙️ Technology Stack

- HTML
- CSS ( Vanilla , Tailwind CSS , DaisyUI)
- JavaScript ( Vanilla only. No Framework / Library Used )
