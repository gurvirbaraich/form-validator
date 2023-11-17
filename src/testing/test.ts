// @ts-ignore
export const form: HTMLFormElement = document.querySelector("form");

export const executeTests = function (FormValidator: any) {
  const formValidator: typeof FormValidator = new FormValidator(form);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const isTermsChecked = formValidator.validateValue("terms").isEqual(true);

    if (isTermsChecked) {
      // Do something...
      alert("Form Submitted");
    } else {
      // Failed validation...
      alert("Please check the terms and conditions to continue.");
    }
  });
};