import * as yup from "yup";
import { byteToMb } from "./checkImageSize";

export const userSchema = yup
  .object({
    name: yup.string().min(5).max(30).required(),
    email: yup.string().email().required(),
    address: yup.string().min(10).max(50).required(),
    password: yup.string().min(7).max(20).required(),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref("password")], "Password should match"),
    contact: yup
      .string()
      .matches(/^[0-9]+$/, "Contact number must contain only digits")
      .min(10, "Contact number must be 10 digits")
      .max(10, "Contact number must be 10 digits")
      .required("Contact number is required"),

    profile: yup
      .mixed()
      .test("ProfileType", "Profile must be an image", (file: any) => {
        const isValid =
          file?.type === "image/jpeg" ||
          file?.type === "image/jpg" ||
          file?.type === "image/webp" ||
          file?.type === "image/png";
        return isValid;
      })
      .test("ProfileSize", "Size must be less than 2MB", (file: any) => {
        const isValid = byteToMb(file?.size) <= 2;
        return isValid;
      })
      .required(),
  })
  .required();

export type UserSchemaType = yup.InferType<typeof userSchema>;
