// import * as yup from "yup";

// export const paymentSchema = yup.object({
//   method: yup.string().oneOf(["UPI", "Cards"]).required("Select Payment Method"),
//   holdername: yup.string().min(5).max(30),
//   upi: yup
//     .string()
//     .when("method", {
//       is: (method: string) => method === "UPI", // Fix the case here
//       then: yup
//         .string()
//         .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, {
//           message: "Invalid UPI format. Example: tusharbhatt@oksbi",
//         })
//         .required("UPI is required for UPI payments"),
//     }),
// })