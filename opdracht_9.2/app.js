const open = document.querySelector(".open");

const closed = document.querySelector(".closed");



function openFace() {
  if (closed.classList.contains("closed")) {
    closed.classList.add("active");
    open.classList.remove("active");
  }
}

function closedFace() {
  if (open.classList.contains("open")) {
    open.classList.add("active");
    closed.classList.remove("active");
  }
}

