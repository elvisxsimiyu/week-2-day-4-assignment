# week-2-day-4-assignment
An assignment focused on Events and Interactivity

# Task 1 — Modal / Popup System

An interactive modal and popup system built with **HTML, CSS, and JavaScript** as part of a JavaScript DOM and Events assignment.

## Features

- Three "Learn More" buttons
- Each button opens its corresponding modal
- Centered modal content with a dark overlay
- Modal can be closed using:
  - The **Close** button
  - Clicking outside the modal on the overlay
  - The **Escape** key
- Prevents page scrolling while a modal is open
- Fade-in animation using CSS transitions
- Multiple modals handled using JavaScript event listeners

## Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript**

## JavaScript Concepts Practiced

This task focuses on DOM manipulation and event handling.

Concepts practiced include:

- `querySelectorAll()`
- `forEach()`
- Event listeners with `addEventListener()`
- Click events
- Keyboard events
- The `event` object
- `event.target`
- `classList`
- Inline style manipulation
- Conditional statements
- Using array indexes to associate related elements

## How It Works

The three modal elements and their corresponding buttons are selected using `querySelectorAll()`.

When a user clicks a **Learn More** button, JavaScript uses the button's index to identify and display the corresponding modal.

When a modal opens:

1. The modal is displayed.
2. The `show` class is added to trigger the fade-in effect.
3. Page scrolling is disabled.

The modal can be closed in three ways:

- Clicking the **Close** button
- Clicking the dark overlay outside the modal content
- Pressing the **Escape** key

When the modal closes, the `show` class is removed and page scrolling is restored.

## Project Structure

```text
task-1-modal/
│
── index.html
├── modal.css
── modal.js
└── README.md

# Task 2 — Real-Time Form Validation

## Overview

This task focuses on building an interactive registration form with **real-time client-side validation** using JavaScript.

The form provides immediate visual feedback as the user types and prevents submission until all fields satisfy their validation requirements.

---

## Features

### Full Name
- Must contain at least 2 characters.
- Empty fields remain in a neutral state.
- **Valid input** displays:
  - Green border
  - Green `✓` checkmark
- **Invalid input** displays:
  - Red border
  - Red `✗` icon
  - Specific error message

### Email Address
- Must contain an `@` symbol.
- Must contain a dot after the `@`.
- Validation is performed progressively so the user receives a specific error message.
- **Valid input** displays a green border and `✓`.
- **Invalid input** displays a red border, `✗`, and an appropriate error message.

### Phone Number
- Must contain exactly 10 digits.
- Must start with `07` or `01`.
- Validation checks the length and prefix separately.
- Specific error messages are displayed depending on which requirement fails.

### Password
The password must:
- Contain at least 8 characters.
- Contain at least one uppercase letter.
- Contain at least one number.

Each requirement is checked separately and provides specific feedback.

---

## Real-Time Feedback

Validation occurs using the JavaScript `input` event.

As the user types:
- **Valid fields** receive a **green border** and `✓`.
- **Invalid fields** receive a **red border**, `✗`, and an error message.
- **Empty fields** return to a neutral state.

---

## Submit Button State

The submit button is disabled until **all four fields are valid**.

The form maintains separate Boolean validity states:

```js
nameValid
emailValid
phoneValid
passwordValid
```

The `updateSubmitButton()` function uses these states to determine whether the button should be enabled.

---

## Form Submission

When the form is submitted:
1. The browser's default form submission is prevented.
2. The form values are collected.
3. The values are stored in a JavaScript object.
4. The object is displayed using `console.log()`.
5. A successful submission message is displayed.
6. The form is reset.

**Example submission object:**

```js
{
    name: "Elvis Simiyu",
    email: "elvis@example.com",
    phone: "0712345678",
    password: "Example123"
}
```

---

## JavaScript Concepts Practiced

- DOM element selection
- `input` event listeners
- Form submission events
- `preventDefault()`
- Regular expressions
- Boolean state management
- Conditional statements
- Functions and return values
- `classList.add()` / `classList.remove()`
- Dynamic text updates with `textContent`
- `setTimeout()`
- JavaScript objects
- Client-side form validation

---

## Validation Flow

```text
User types
    ↓
input event fires
    ↓
Corresponding validation function runs
    ↓
Field is checked
    ↓
 ┌───────────────┐
 │ Valid?        │
 └───────┬───────┘
         │
    ┌────┴────┐
   YES        NO
    ↓          ↓
 Green       Red
 ✓           ✗
    ↓          ↓
Validity    Error
state       message
    └────┬─────┘
         ↓
updateSubmitButton()
         ↓
Are ALL fields valid?
         ↓
    ┌────┴────┐
   YES        NO
    ↓          ↓
Enable       Disable
button       button
```

---

## Files

```text
task-2/
├── form.html
├── form.css
└── form.js
```

---

## Goal

The goal of this task was to practice creating responsive, user-friendly form validation while separating individual validation responsibilities from the overall submit-button state.

# Task 3 — Drag and Drop Priority List

A reorderable priority list built using HTML, CSS, and JavaScript. Users can drag tasks into different positions, with priority numbers updating automatically after each reorder.

## Features

- Five tasks displayed in a priority list
- Tasks are draggable using the HTML Drag and Drop API
- Tasks can be reordered by dragging and dropping
- Priority numbers update automatically after reordering
- Dragged task becomes semi-transparent while being moved
- Drop indicator shows where the dragged task will be placed
- The dragged task and drop indicator are cleaned up after the drag ends

## Technologies Used

- HTML5
- CSS3
- JavaScript
- HTML Drag and Drop API

## How It Works

### 1. Tracking the Dragged Task

When a task starts being dragged, it is stored in `taskTrack` and given the `.dragging` class.

The `.dragging` class provides visual feedback by making the task semi-transparent and slightly enlarging it.

### 2. Finding the Drop Position

The `getDragAfterElement()` function determines which task the dragged item should be placed before.

It uses:
- `getBoundingClientRect()` to determine each task's position
- `event.clientY` to determine the mouse's vertical position
- The distance between the mouse and the center of each task
- `reduce()` to find the closest suitable task

The dragged task itself is excluded from the calculation.

### 3. Reordering the List

The `dragover` event continuously checks the mouse position while the task is being dragged.

Depending on the result of `getDragAfterElement()`:
- If there is no task below the cursor, the dragged task is moved to the end of the list.
- Otherwise, the dragged task is inserted before the identified task using `insertBefore()`.

### 4. Updating Priorities

After the task is dropped, `updatePriorities()` gets the tasks in their current DOM order.

Each task's `.priority` element is then updated using its index:

```js
index + 1
```

This converts JavaScript's zero-based index into the priority numbers displayed to the user.

### 5. Visual Feedback

Two CSS classes are used to provide feedback during dragging:
- `.dragging` — makes the dragged task semi-transparent and visually lifted.
- `.drop-target` — adds a line above the task where the dragged item will be placed.

## Key JavaScript Concepts Practiced

- `dragstart`
- `dragover`
- `drop`
- `dragend`
- `preventDefault()`
- DOM element selection
- `querySelector()` and `querySelectorAll()`
- `classList`
- `insertBefore()`
- `appendChild()`
- `getBoundingClientRect()`
- `reduce()`
- NodeLists and DOM order
- Functions with single responsibilities
- Event-driven programming

## Expected Result

The page displays a list of five tasks. A task can be dragged to a different position, with visual feedback showing the task being dragged and its intended drop position. After dropping, the priority numbers automatically update to reflect the new order.

## Project Structure

```text
week-2-day-4-assignment/
│
├── drag.html
├── drag.css
└── drag.js
```

## AI Usage

AI assistance was used throughout this assignment as a learning and debugging aid.

AI was primarily used to:

- Explain JavaScript concepts and unfamiliar code.
- Help break down event-handling logic into smaller steps.
- Clarify errors and explain why certain approaches worked or did not work.
- Review and explain code after implementation.
- Assist with documentation and README writing.
- Provide guidance when working with unfamiliar concepts such as drag-and-drop events, `getBoundingClientRect()`, `reduce()`, and validation state management.

Some implementation code was also generated or adapted with AI assistance. The code was then tested, modified, and reviewed to understand how it worked.

The purpose of using AI was to support the learning process rather than replace testing and experimentation. All functionality was implemented and tested in the browser, and the final code was reviewed to ensure that it met the assignment requirements.