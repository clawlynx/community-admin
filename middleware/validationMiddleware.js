import { body, validationResult } from "express-validator";
import { BadRequestError } from "../errors/customErrors.js";
import Admin from "../models/AdminUserModel.js";
import User from "../models/UserModel.js";
import Employer from "../models/jobportal/EmployerModel.js";

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validateRegisterInput = withValidationErrors([
  body("username").notEmpty().withMessage("username is required"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid Email format")
    .custom(async (email, { req }) => {
      const user = await Admin.findOne({ email: email });
      if (user) {
        throw new BadRequestError("Email already exists");
      }
    }),
  body("password").notEmpty().withMessage("Password is required"),
]);

export const validateLoginInput = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid Email format"),
  body("password").notEmpty().withMessage("Password is required"),
]);

export const validateEditUserInput = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid Email format")
    .custom(async (email, { req }) => {
      const user = await User.findOne({ email: email });
      if (user && user._id.toString() !== req.params.id.toString()) {
        throw new BadRequestError("Email already exists");
      }
    }),
]);

export const validateEditEmployerInput = withValidationErrors([
  body("companyEmail")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid Email format")
    .custom(async (companyEmail, { req }) => {
      const user = await Employer.findOne({ companyEmail: companyEmail });
      if (user && user._id.toString() !== req.params.id.toString()) {
        throw new BadRequestError("Email already exists");
      }
    }),
]);
