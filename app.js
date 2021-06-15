const progressBorder = document.querySelector("#progressBorder");
const steps = document.querySelectorAll("#steps");
const progress = document.querySelector("#progress");
const inputs = document.querySelectorAll("input");

const firstName = document.querySelector("#firstName");
firstName.addEventListener("change", () => {
  if (firstName.value != "") {
    progressBorder.style.borderTop = "2px solid white";
    progressBorder.style.transition = "border .5s ease";
    steps[0].innerHTML = "&#10004";
    progress.textContent = parseInt(progress.textContent) + 25 + "%";
  } else {
    steps[0].innerHTML = "1";
    progressBorder.style.borderTop = "2px solid rgb(158, 183, 215)";
    progress.textContent = parseInt(progress.textContent) - 25 + "%";
  }
});

const lastName = document.querySelector("#lastName");
lastName.addEventListener("change", () => {
  if (lastName.value != "") {
    progressBorder.style.borderRight = "2px solid white";
    progressBorder.style.transition = "border .5s ease";
    steps[1].innerHTML = "&#10004";
    progress.textContent = parseInt(progress.textContent) + 25 + "%";
  } else {
    steps[1].innerHTML = "2";
    progressBorder.style.borderRight = "2px solid rgb(158, 183, 215)";
    progress.textContent = parseInt(progress.textContent) - 25 + "%";
  }
});

const email = document.querySelector("#email");
email.addEventListener("change", () => {
  if (email.value != "") {
    progressBorder.style.borderBottom = "2px solid white";
    progressBorder.style.transition = "border .5s ease";
    steps[2].innerHTML = "&#10004";
    progress.textContent = parseInt(progress.textContent) + 25 + "%";
  } else {
    steps[2].innerHTML = "3";
    progressBorder.style.borderBottom = "2px solid rgb(158, 183, 215)";
    progress.textContent = parseInt(progress.textContent) - 25 + "%";
  }
});

const checkBox = document.getElementsByName("contact");
checkBox.forEach((box) => {
  box.addEventListener("change", () => {
    if (box.checked) {
      steps[3].innerHTML = "&#10004";
      progressBorder.style.borderLeft = "2px solid white";
      progressBorder.style.transition = "border .5s ease";
      progress.textContent = parseInt(progress.textContent) + 25 + "%";
    } else {
      progress.textContent = parseInt(progress.textContent) - 25 + "%";
    }
    if (progress.textContent == "100%") {
      progress.innerHTML = "&#10004";
    } else if (progress.textContent > "100%") {
      progress.innerHTML = "&#10004";
    }
  });
});
