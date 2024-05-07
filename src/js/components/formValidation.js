// Functions
import { validateForms } from "../functions/validate-forms";

export const formValidation = () => {
  validateForms(
    ".form__body",
    [
      {
        ruleSelector: ".form__input--name",
        rules: [
          {
            rule: "required",
            errorMessage: "Name is required",
          },
        ],
      },
      {
        ruleSelector: ".form__input--tel",
        rules: [
          {
            rule: "tel",
            value: 2,
            rule: "minLength",
            errorMessage: "Phone is not valid",
          },
          {
            rule: "required",
            errorMessage: "Phone is required",
          },
        ],
      },
      {
        ruleSelector: ".form__input--mail",
        rules: [
          {
            rule: "email",
            errorMessage: "Email is not valid",
          },
          {
            rule: "required",
            errorMessage: "Email is required",
          },
        ],
      },
      {
        ruleSelector: ".form__textarea",
        rules: [
          {
            rule: "required",
            errorMessage: "Enter your message",
          },
        ],
      },
    ],
    null,
    null,
    null,
    [
      {
        key: "Name is required",
        dict: {
          ru: "Enter your name",
        },
      },
      {
        key: "Phone is required",
        dict: {
          ru: "Enter your phone",
        },
      },
      {
        key: "Email is not valid",
        dict: {
          ru: "Email is incorrect",
        },
      },
      {
        key: "Email is required",
        dict: {
          ru: "Введите почту",
        },
      },
    ],
    "ru"
  );
};
