namespace FormValidator {
  export interface GetValueOptions {
    attributeName: string;
  }
}

namespace Validator {
  export interface isEqualOptions {
    check: "loose" | "strict";
  }

  export interface IsBetweenOptions {
    mode: "inclusive" | "exclusive";
  }
}

export class FormValidator {
  private formElement: HTMLFormElement;

  /**
   * When an instace of the FormValidator class is created,
   * the constructor function gets invoked automatically and
   * expects a form element to be passed in.
   *
   * All the methods invoked will run on the form element passed.
   */
  public constructor(formElement: HTMLFormElement) {
    this.formElement = formElement;
  }

  /**
   * Function expects 2 parameters where
   * (required) 1st parameter expects to get the value of the name attribute.
   * (optional) 2nd parameter can be used to set the attribute to look at.
   */
  public getValue(
    inputIdentifier: string,
    options?: FormValidator.GetValueOptions
  ): string | boolean {
    const attribute =
      typeof options?.attributeName == "string"
        ? options.attributeName
        : "name";

    const inputElement:
      | (HTMLElement & { value: string; checked: boolean })
      | null = this.formElement.querySelector(
      `[${attribute}=${inputIdentifier}]`
    );

    if (!inputElement) {
      throw new Error(
        `GetError: No input element found with element[${attribute}] = '${inputIdentifier}'`
      );
    }

    // What if, the input is a chekbox.
    const inputElementType = inputElement.getAttribute("type");

    return inputElementType !== "checkbox"
      ? inputElement.value
      : inputElement.checked;
  }

  /**
   * Returns new object of the validator class
   * with injected value of the given element present inside form.
   */
  public validateValue(
    inputIdentifier: string,
    options?: FormValidator.GetValueOptions
  ) {
    return new Validator(this.getValue(inputIdentifier, options));
  }
}

class Validator {
  private value: any;

  /**
   * The constructor function expects to recieve a value
   * that will be used to run all the validation checks on.
   */
  constructor(value: any) {
    this.value = value;
  }

  /**
   * Checks whether the recived value is equal to expected value.
   */
  isEqual(expected: any, options?: Validator.isEqualOptions): boolean {
    const checkType = options?.check == undefined ? "loose" : options.check;

    switch (checkType) {
      case "loose":
        return this.value == expected;

      case "strict":
        return this.value === expected;

      default:
        throw new Error(`Invalid check: ${checkType}`);
    }
  }

  /**
   * Checks whether the recived value is grater than expected value.
   */
  isGrater(seed: string | number): boolean {
    return this.value > seed;
  }

  /**
   * Checks whether the recived value is grater than or equal to expected value.
   */
  isGraterOrEqual(seed: string | number): boolean {
    return this.value >= seed;
  }

  /**
   * Checks whether the recived value is smaller than expected value.
   */
  isLower(seed: string | number): boolean {
    return this.value < seed;
  }

  /**
   * Checks whether the recieved value is smaller or equal to expected value.
   */
  isLowerOrEqual(seed: string | number): boolean {
    return this.value <= seed;
  }

  /**
   * Checks whether the recieved value is inbetween the range provided.
   */
  isBetween(
    min: string | number,
    max: string | number,
    options?: Validator.IsBetweenOptions
  ): boolean {
    const mode: Validator.IsBetweenOptions["mode"] =
      options?.mode == undefined ? "exclusive" : options.mode;

    switch (mode) {
      case "exclusive":
        return this.isGrater(min) && this.isLower(max);

      case "inclusive":
        return this.isGraterOrEqual(min) && this.isLowerOrEqual(max);

      default:
        throw new Error("Invalid mode: " + mode);
    }
  }
}

// ----------------------------------- //

const executeTests = function () {
  // @ts-ignore
  const form: HTMLFormElement = document.querySelector("form");
  const formValidator = new FormValidator(form);

  formValidator.getValue("terms"); // returns weather the checkbox is checked

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
};

executeTests();
