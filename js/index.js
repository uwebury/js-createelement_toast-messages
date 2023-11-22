console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');
const toastContainerMessage = document.querySelector(
  '[data-js="toast-container__message"]'
);

addButton.addEventListener("click", () => {
  const toastMessage = document.createElement("li");
  toastMessage.textContent = toastContainerMessage.innerHTML;
  toastMessage.classList.add("toast-container__message");
  toastContainer.append(toastMessage);
});

clearButton.addEventListener("click", () => {
  const toastContainer = document.querySelector('[data-js="toast-container"]');
  toastContainer.innerHTML = "";
});
