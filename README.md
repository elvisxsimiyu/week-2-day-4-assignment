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
