# Advanced Todo Card — Stage 1A

An enhanced, interactive, and stateful Todo Card built using **HTML, CSS, and Vanilla JavaScript**.

This project extends the **Stage 0 Todo Card** into a more dynamic, user-friendly component with **editing capabilities, state synchronization, improved UI/UX, and richer accessibility patterns**.

---

## Preview

An advanced task card that now supports:

* Editable task content
* Status transitions with synchronization
* Dynamic priority indicators
* Expand / collapse description
* Real-time time tracking with overdue handling
* Improved visual design and micro-interactions

---

## What Changed from Stage 0

Stage 1A introduces **state management and interactivity**, transforming the card from static to dynamic:

*  Edit mode with form inputs (title, description, priority, due date)
*  Status control (dropdown) synced with checkbox
*  Priority visual indicator (left accent bar + badge styles)
*  Expand / collapse long descriptions
*  Granular time updates (minutes, hours, days)
*  Overdue state with visual feedback
*  Improved UI with better spacing, hierarchy, and hover states

---

## Features

### Testability

All **Stage 0 test IDs remain intact**, plus new Stage 1A additions:

**Edit Mode**

* `test-todo-edit-form`
* `test-todo-edit-title-input`
* `test-todo-edit-description-input`
* `test-todo-edit-priority-select`
* `test-todo-edit-due-date-input`
* `test-todo-save-button`
* `test-todo-cancel-button`

**New Controls**

* `test-todo-status-control`
* `test-todo-priority-indicator`
* `test-todo-expand-toggle`
* `test-todo-collapsible-section`
* `test-todo-overdue-indicator`

---

### State Management & Logic

* Checkbox ↔ Status synchronization:

  * Checking → sets status to **Done**
  * Unchecking → reverts to **Pending**
* Status dropdown updates checkbox automatically
* Priority updates reflect visually (badge + left border)
* Editing updates all UI values instantly
* Timer:

  * Updates every 30 seconds
  * Stops when task is **Done** → shows *"Completed"*
  * Shows granular time (minutes / hours / days)

---

### Interactive Behavior

* Edit Mode:

  * Toggle between view and edit states
  * Save updates values
  * Cancel restores previous state

* Expand / Collapse:

  * Toggle long descriptions
  * Accessible with `aria-expanded`

* Delete:

  * Placeholder interaction (alert)

---

### UI / UX Improvements

* Modern card design with:

  * Soft shadows and hover elevation
  * Clear spacing and layout rhythm
  * Pill badges for priority and status
* Visual state feedback:

  * ✔ Done → strike-through + muted colors
  * 🔴 Overdue → red accent + warning state
  * 🔵 In Progress → distinct styling
* Smooth micro-interactions (hover, click feedback)

---

### Accessibility

* Semantic HTML (`<article>`, `<time>`, `<form>`, `<label>`)
* All form inputs properly labeled
* `aria-live="polite"` for time updates
* Expand toggle uses:

  * `aria-expanded`
  * `aria-controls`
* Fully keyboard navigable:

  * Checkbox → Status → Expand → Edit → Delete → Form controls
* Visible focus states

---

### Responsiveness

* Optimized for:

  * **Mobile (320px)**
  * **Tablet (768px)**
  * **Desktop (1024px+)**
* Edit form stacks vertically on mobile
* No layout break with:

  * Long titles
  * Multiple tags
  * Large descriptions

---

## Tech Stack

* **HTML5**
* **CSS3**
* **Vanilla JavaScript (ES6)**

No frameworks or external libraries used.

---

## Project Structure

```
/project
  ├── index.html
  ├── style.css
  └── script.js
```

---

## 🚀 Getting Started

1. Clone the repository:

```
git clone https://github.com/your-username/your-repo-name.git
```

2. Navigate into the project:

```
cd your-repo-name
```

3. Run locally:

* Open `index.html` in your browser

---

## Live Demo


---

## Testing Notes

This project is designed to pass automated tests by:

* Maintaining all required `data-testid` attributes
* Implementing all new Stage 1A test IDs
* Ensuring interactive behaviors match requirements
* Using semantic and accessible HTML

---

## Known Limitations

* No persistent storage (data resets on refresh)
* No backend/API integration
* Edit form does not trap focus (optional enhancement)

---


## Author

**Shifawu Bello**
GitHub: https://github.com/Shifawu
