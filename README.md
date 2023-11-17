# FormValidator.js

A simple javascript library, that allows seamless validation of the forms on the website.

## Examples

```typescript
// Creating an instance ofn the FormValidator class.
const formValidator: typeof FormValidator = new FormValidator(form);

// Whenever the form is submitted
form.addEventListener("submit", (e) => {e.preventDefault();

  // Checking the terms and conditions are checked.
  const isTermsChecked = formValidator.validateValue("terms").isEqual(true);

  if (isTermsChecked) {
    // Do something...
    alert("Form Submitted");
  } else {
    // Failed validation...
    alert("Please check the terms and conditions to continue.");
  }
});
```
