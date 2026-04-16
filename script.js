const checkbox = document.getElementById("complete-toggle");
const title = document.getElementById("todo-title");
const status = document.getElementById("status");

const dueDate = new Date(Date.now() + 1000 * 60 * 60 * 26); // 26 hours

const dueDateEl = document.getElementById("due-date");
const timeRemainingEl = document.getElementById("time-remaining");

// Format due date
dueDateEl.textContent = "Due " + dueDate.toDateString();

function updateTimeRemaining() {
  const now = new Date();
  const diff = dueDate - now;

  if (diff <= 0) {
    const hours = Math.floor(Math.abs(diff) / (1000 * 60 * 60));
    timeRemainingEl.textContent =
      hours === 0 ? "Due now!" : `Overdue by ${hours} hour(s)`;
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

  if (days > 0) {
    timeRemainingEl.textContent = `Due in ${days} day(s)`;
  } else if (hours > 0) {
    timeRemainingEl.textContent = `Due in ${hours} hour(s)`;
  } else {
    timeRemainingEl.textContent = "Due now!";
  }
}

// Update every minute
updateTimeRemaining();
setInterval(updateTimeRemaining, 60000);

// Checkbox behavior
checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    title.classList.add("completed");
    status.textContent = "Done";
    status.classList.remove("progress");
    status.classList.add("done");
  } else {
    title.classList.remove("completed");
    status.textContent = "In Progress";
    status.classList.add("progress");
    status.classList.remove("done");
  }
});

// Buttons
document.querySelector('[data-testid=\"test-todo-edit-button\"]')
  .addEventListener("click", () => console.log("edit clicked"));

document.querySelector('[data-testid=\"test-todo-delete-button\"]')
  .addEventListener("click", () => alert("Delete clicked"));