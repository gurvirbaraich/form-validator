# FormValidator.js

A simple javascript library, that allows seamless validation of the forms on the website.

## Examples

```typescript
// Creating an instance ofn the FormValidator class.
const formValidator: typeof FormValidator = new FormValidator(form);

// Whenever the form is submitted
form.addEventListener("submit", (e) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Checking the terms and conditions are checked.
    const isAbove = formValidator.validateValue("age").isGrater(12);
    const isTermsChecked = formValidator.validateValue("terms").isEqual(true);

    if (isTermsChecked) {
      // Do something...
      return alert("Please check the terms and conditions to continue.");
    }

    if (!isAbove) {
      return alert("You must be 12+ to continue");
    }

    alert("Form Submitted");
  });
});
```

## Methods

- getValue
- validateValue
- - isEqual
- - isLower
- - isGrater
- - isLowerOrEqual
- - isGraterOrEqual
