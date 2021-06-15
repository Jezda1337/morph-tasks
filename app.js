const lowerCaseLetters = /[a-z]/g;
const upperCaseLetters = /[A-Z]/g;
const numbers = /[0-9]/g;

const validatePassword = (password) => {
  if (
    password.match(lowerCaseLetters) &&
    password.match(upperCaseLetters) &&
    password.match(numbers) &&
    password.length >= 8
  ) {
    console.log(`Your password is strong. :)`);
  } else if (
    password.match(lowerCaseLetters) &&
    password.match(upperCaseLetters) &&
    password.length >= 6
  ) {
    console.log(`Your password is a medium-strength. :)`);
  } else if (password.length >= 3) {
    console.log(
      `Your password is weak strength! Please try another one but stronger. :)`
    );
  }
};

//enter your password here :)
validatePassword("aleksandar1");
