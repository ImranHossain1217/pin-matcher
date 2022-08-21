function generatePinRandom() {
  const random = Math.round(Math.random() * 10000);
  return random;
}
function getPin() {
  const pin = generatePinRandom();
  const pinString = pin + "";
  if (pinString.length === 4) {
    return pin;
  } else {
    return getPin();
  }
}

document
  .getElementById("generate_pin_btn")
  .addEventListener("click", function () {
    const pin = getPin();
    const showPinField = document.getElementById("show_pin");
    showPinField.value = pin;
  });

document.getElementById("calculator").addEventListener("click", function (e) {
  const number = e.target.innerText;
  const typedNumberField = document.getElementById("typed_number_field");
  const previousTypedNumber = typedNumberField.value;
  if (isNaN(number)) {
    if (number === "C") {
      typedNumberField.value = "";
    } else if (number === "<") {
      const digits = previousTypedNumber.split("");
      digits.pop();
      const remainingDigit = digits.join("");
      typedNumberField.value = remainingDigit;
    }
  } else {
    const newTypedNumber = previousTypedNumber + number;
    typedNumberField.value = newTypedNumber;
  }
});

document.getElementById("verify_btn").addEventListener("click", function () {
  const showPinField = document.getElementById("show_pin");
  const currentPin = showPinField.value;

  const typedNumberField = document.getElementById("typed_number_field");
  const previousTypedNumber = typedNumberField.value;

  const succesPinMesseage = document.getElementById("succes_pin");
  const failPinMesseagr = document.getElementById("fail_pin");
  if (currentPin === previousTypedNumber) {
    succesPinMesseage.style.display = "block";
    failPinMesseagr.style.display = "none";
  } else {
    failPinMesseagr.style.display = "block";
    succesPinMesseage.style.display = "none";
  }
});
