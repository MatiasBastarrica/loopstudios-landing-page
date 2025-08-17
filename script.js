const navIcon = document.querySelector(".nav-icon");
const dialog = document.querySelector("dialog");

navIcon.addEventListener("click", () => {
  const closeBtn = dialog.querySelector(".close-btn");
  dialog.show();
  closeBtn.addEventListener("click", () => dialog.close());
});
