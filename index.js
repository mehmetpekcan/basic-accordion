const allHeaders = document.querySelectorAll(".header");

const toggleOpen = (event) => {
  const { currentTarget } = event;
  currentTarget.parentElement.classList.toggle("open");
};

const bindClickEvent = (header) => {
  header.addEventListener("click", toggleOpen);
};

allHeaders.forEach(bindClickEvent);
