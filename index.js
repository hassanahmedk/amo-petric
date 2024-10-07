// Handling search form submission

const searchForm = document.getElementById("header-search-form");
const searchInput = document.querySelector(".search-input");

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let query = searchInput.value.trim().toLowerCase();
  query = query.replace(/[<>$;#]/g, " ");

  let inputPara = document.querySelector(".search-input-para");
  if (!inputPara) {
    inputPara = document.createElement("p");
    inputPara.classList.add("search-input-para");
    inputPara.innerHTML = `Sanitized Input = <strong> ${query}</strong>`;
    let mainElement = document.querySelector("main");
    mainElement.insertBefore(inputPara, mainElement.children[0]);
  } else {
    inputPara.innerHTML = `Sanitized Input = <strong> ${query}</strong>`;
  }
});

// Handling subscribe form submission
const subscribeForm = document.getElementById("subscribe-form");
const subscribeInput = document.querySelector(".subscribe-input");
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

subscribeForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let email = subscribeInput.value.trim();
  let errorText = document.querySelector(".email-error");
  let successText = document.querySelector(".email-success");

  console.log(emailRegex.test(email));
  if (emailRegex.test(email)) {
    successText.style.display = "block";
    errorText.style.display = "none";
  } else {
    successText.style.display = "none";
    errorText.style.display = "block";
  }
});

// Handling contact modal and contact form submission
const footerButton = document.querySelector(".footer-button");
const contactModal = document.querySelector(".contact-modal");
const modalCloseIcon = document.querySelector(".modal-close-icon");
const contactForm = document.getElementById("modal-form");
const nameInput = document.querySelector(".name-input");
const emailInput = document.querySelector(".email-input");
const messageInput = document.querySelector(".message-input");
const nameError = document.querySelector(".contact-name-error");
const emailError = document.querySelector(".contact-email-error");
const messageError = document.querySelector(".contact-message-error");

footerButton.addEventListener("click", () => {
  contactModal.style.display = "flex";
});

modalCloseIcon.addEventListener("click", () => {
  contactModal.style.display = "none";
});

const showError = (element, message) => {
  element.textContent = message;
  element.style.display = "block";
};

let hideError = (element) => {
  element.style.display = "none";
};

const validateForm = () => {
  let isValid = true;

  if (!nameInput.value.trim()) {
    showError(nameError, "Please enter name.");
    isValid = false;
  } else {
    hideError(nameError);
  }

  if (!emailRegex.test(emailInput.value)) {
    showError(emailError, "Please enter a valid email address.");
    isValid = false;
  } else {
    hideError(emailError);
  }

  if (!messageInput.value.trim()) {
    showError(messageError, "Please enter message.");
    isValid = false;
  } else {
    hideError(messageError);
  }

  return isValid;
};

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (validateForm() === true) {
    alert("Form submitted successfully");
    window.location.reload();
  }
});
