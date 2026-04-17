// ------------------ INITIAL STATE ------------------
let dueDate = new Date(Date.now() + 1000 * 60 * 60 * 5); // 5 hours
let interval;

// ------------------ ELEMENTS ------------------
const checkbox = document.getElementById("checkbox");
const statusControl = document.getElementById("status-control");
const statusText = document.getElementById("status");
const title = document.getElementById("title");
const description = document.getElementById("description");

const timeEl = document.getElementById("time-remaining");
const overdueEl = document.getElementById("overdue");
const dueDateEl = document.getElementById("due-date");

const card = document.querySelector(".card");

// Edit mode
const editBtn = document.getElementById("edit-btn");
const deleteBtn = document.getElementById("delete-btn");
const form = document.getElementById("edit-form");
const view = document.getElementById("view-mode");

const saveBtn = document.getElementById("save-btn");
const cancelBtn = document.getElementById("cancel-btn");

const editTitle = document.getElementById("edit-title");
const editDesc = document.getElementById("edit-desc");
const editPriority = document.getElementById("edit-priority");
const editDate = document.getElementById("edit-date");

// Priority
const priorityIndicator = document.getElementById("priority-indicator");
const priorityText = document.getElementById("priority");

// Expand
const expandBtn = document.getElementById("expand-btn");
const collapsible = document.getElementById("collapsible");

// ------------------ INIT ------------------
collapsible.textContent = description.textContent;

// ------------------ HELPERS ------------------
function formatDate(date) {
  return "Due " + date.toDateString();
}

// STATUS UI
function updateStatusUI(status) {
  statusText.className = "";

  if (status === "Done") {
    statusText.classList.add("status-done");
  } else if (status === "In Progress") {
    statusText.classList.add("status-progress");
  } else {
    statusText.classList.add("status-pending");
  }
}

// PRIORITY UI
function updatePriorityUI(priority) {
  priorityText.textContent = priority;
  priorityText.className = priority.toLowerCase() + "-priority";
  priorityIndicator.className = "priority-bar " + priority.toLowerCase();
}

// ------------------ TIME LOGIC ------------------
function updateTime() {
  if (statusText.textContent === "Done") {
    timeEl.textContent = "Completed";
    overdueEl.classList.add("hidden");
    clearInterval(interval);
    return;
  }

  const now = new Date();
  const diff = dueDate - now;

  if (diff <= 0) {
    overdueEl.classList.remove("hidden");
    card.classList.add("overdue-card");

    const hours = Math.floor(Math.abs(diff) / (1000 * 60 * 60));
    timeEl.textContent =
      hours > 0
        ? `Overdue by ${hours} hour(s)`
        : "Overdue by a few minutes";

    return;
  }

  overdueEl.classList.add("hidden");
  card.classList.remove("overdue-card");

  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (days > 0) {
    timeEl.textContent = `Due in ${days} day(s)`;
  } else if (hours > 0) {
    timeEl.textContent = `Due in ${hours} hour(s)`;
  } else {
    timeEl.textContent = `Due in ${minutes} minute(s)`;
  }
}

// ------------------ INIT RUN ------------------
dueDateEl.textContent = formatDate(dueDate);
updateStatusUI(statusControl.value);
updatePriorityUI(priorityText.textContent);

interval = setInterval(updateTime, 30000);
updateTime();

// ------------------ STATUS SYNC ------------------

// Checkbox → Status
checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    statusControl.value = "Done";
  } else {
    statusControl.value = "Pending";
  }

  statusText.textContent = statusControl.value;
  updateStatusUI(statusControl.value);

  title.classList.toggle("completed", checkbox.checked);
});

// Status → Checkbox
statusControl.addEventListener("change", () => {
  const value = statusControl.value;

  statusText.textContent = value;
  updateStatusUI(value);

  checkbox.checked = value === "Done";
  title.classList.toggle("completed", value === "Done");
});

// ------------------ EDIT MODE ------------------

// Open
editBtn.onclick = () => {
  view.classList.add("hidden");
  form.classList.remove("hidden");

  editTitle.value = title.textContent;
  editDesc.value = description.textContent;
  editPriority.value = priorityText.textContent;
  editDate.value = dueDate.toISOString().slice(0, 16);
};

// Cancel
cancelBtn.onclick = () => {
  form.classList.add("hidden");
  view.classList.remove("hidden");
};

// Save
saveBtn.onclick = () => {
  // Update text
  title.textContent = editTitle.value;
  description.textContent = editDesc.value;
  collapsible.textContent = editDesc.value;

  // Priority
  updatePriorityUI(editPriority.value);

  // Due date
  dueDate = new Date(editDate.value);
  dueDateEl.textContent = formatDate(dueDate);

  // Resume timer if needed
  clearInterval(interval);
  interval = setInterval(updateTime, 30000);

  updateTime();

  // Close form
  form.classList.add("hidden");
  view.classList.remove("hidden");
};

// ------------------ EXPAND / COLLAPSE ------------------
expandBtn.onclick = () => {
  const expanded = expandBtn.getAttribute("aria-expanded") === "true";

  expandBtn.setAttribute("aria-expanded", !expanded);
  expandBtn.textContent = expanded ? "Expand" : "Collapse";

  collapsible.classList.toggle("collapsed");
};

// ------------------ DELETE ------------------
deleteBtn.onclick = () => {
  alert("Delete clicked");
};