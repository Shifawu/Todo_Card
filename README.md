# Todo Item Card — Stage 0 Task

A clean, responsive, and accessible Todo Item Card built using **HTML, CSS, and JavaScript**.

This project was created as part of the **Frontend Wizards Stage 0 Assessment**, with a focus on **testability, accessibility, and responsiveness**.

---

## Preview

A modern task card that displays:

* Task title and description
* Priority and status badges
* Due date and time remaining
* Tags/categories
* Interactive checkbox
* Edit & Delete actions

---

## Features

### Testability

All required elements include exact `data-testid` attributes for automated testing:

* `test-todo-card`
* `test-todo-title`
* `test-todo-description`
* `test-todo-priority`
* `test-todo-due-date`
* `test-todo-time-remaining`
* `test-todo-status`
* `test-todo-complete-toggle`
* `test-todo-tags`
* `test-todo-edit-button`
* `test-todo-delete-button`

---

### Accessibility

* Semantic HTML (`<article>`, `<time>`, `<button>`, etc.)
* Accessible checkbox (`input[type="checkbox"]` with label/aria)
* Keyboard navigable (Tab focus)
* Visible focus states
* Proper contrast for readability

---

### Responsiveness

* Fully responsive from **320px to 1200px**
* Mobile-first design
* Flexible layout with wrapping tags
* No horizontal overflow

---

### Dynamic Time Remaining

* Displays:

  * "Due in X days"
  * "Due in X hours"
  * "Due now!"
  * "Overdue by X hours"
* Automatically updates every 60 seconds

---

### Interactive Elements

* Checkbox toggles:

  * Task completion
  * Status ("In Progress" → "Done")
  * Title strike-through
* Edit button → logs action to console
* Delete button → shows alert

---

##  Tech Stack

* **HTML5**
* **CSS3**
* **Vanilla JavaScript (ES6)**

No frameworks or libraries used.

---

##  Project Structure

```
/project
  ├── index.html
  ├── style.css
  └── script.js
```

---

##  Getting Started

1. Clone the repository:

```
git clone https://github.com/your-username/your-repo-name.git
```

2. Open the project folder:

```
cd your-repo-name
```

3. Run the project:

* Open `index.html` in your browser

---

## 🌐 Live Demo


---

## Testing Notes

This project is designed to pass automated tests by:

* Using exact `data-testid` values
* Ensuring all required elements are present and visible
* Implementing proper semantics and accessibility

---


## Author

**Shifawu**
GitHub: https://github.com/your-Shifawu

