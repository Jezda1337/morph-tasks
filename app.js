const progressBorder = document.querySelector("#progressBorder");
const steps = document.querySelectorAll("#steps");
const progress = document.querySelector("#progress");

(() => {
  const firstName = document.querySelector("#firstName");
  firstName.addEventListener("change", (e) => {
    console.log(e.target.value);
    firstName.value
      ? ((steps[0].innerHTML = "&#10004;"), (progress.innerHTML = `25%`))
      : (steps[0].innerHTML = "1");
    progressBorder.style.borderTop = "2px solid red";
    progressBorder.style.transition = "border .5s ease";
  });
})();

(() => {
  const lastName = document.querySelector("#lastName");
  lastName.addEventListener("change", (e) => {
    console.log(e.target.value);

    lastName.value
      ? ((steps[1].innerHTML = "&#10004;"), (progress.innerHTML = `50%`))
      : (steps[1].innerHTML = "2");
    progressBorder.style.borderRight = "2px solid red";
    progressBorder.style.transition = "border .5s ease";
  });
})();

(() => {
  const email = document.querySelector("#email");
  email.addEventListener("change", (e) => {
    console.log(e.target.value);
    progressBorder.style.borderBottom = "2px solid red";
    progressBorder.style.transition = "border .5s ease";
    email.value
      ? ((steps[2].innerHTML = "&#10004;"), (progress.innerHTML = `75%`))
      : (steps[2].innerHTML = "3");
  });
})();
