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
