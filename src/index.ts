import { executeTests } from "./testing/test";

namespace FormValidator {
  export interface GetValueOptions {
    attributeName: string;
  }
}

namespace Validator {
  export interface isEqualOptions {
    check: "loose" | "strict";
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
      case "loose": {
        return this.value == expected;
      }

      case "strict": {
        return this.value === expected;
      }
    }
  }
}

// ----------------------------------- //
executeTests(FormValidator);
