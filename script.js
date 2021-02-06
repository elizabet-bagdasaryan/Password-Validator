let input = document.getElementById("input"),
  minLength = document.getElementById("min"),
  maxLength = document.getElementById("max"),
  num = document.getElementById("num"),
  char = document.getElementById("char");

input.addEventListener("input", function () {
  // Checking minLength
  if (input.value.length >= 5) {
    minLength.classList.remove("wrong");
    minLength.classList.add("right");
  } else {
    minLength.classList.remove("right");
    minLength.classList.add("wrong");
  }
  // Checking maxLength
  if (input.value.length > 10) {
    maxLength.classList.remove("right");
    maxLength.classList.add("wrong");
  } else {
    maxLength.classList.remove("wrong");
    maxLength.classList.add("right");
  }
  // Make the password an array
  let arr = input.value.split("");
  // Checking it contains number
  if (
    arr.some(function (item) {
      return item * 1;
    })
  ) {
    num.classList.remove("wrong");
    num.classList.add("right");
  } else {
    num.classList.remove("right");
    num.classList.add("wrong");
  }
  // Checking if there is any special characters
  var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  if (format.test(input.value)) {
    char.classList.remove("wrong");
    char.classList.add("right");
  } else {
    char.classList.remove("right");
    char.classList.add("wrong");
  }

  // Checking if there is space
  if (
    arr.some(function (item) {
      return item === " ";
    })
  ) {
    space.classList.remove("right");
    space.classList.add("wrong");
  } else {
    space.classList.remove("wrong");
    space.classList.add("right");
  }
});
