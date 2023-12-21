import * as Yup from 'yup';

export const paymentSchema = Yup.object().shape({
  paymentMode: Yup.string().required('Please select a payment mode'),
  holderName: Yup.string().required('Holder name is required'),
  //@ts-ignore
  upiAddress: Yup.string().when('paymentMode', {
    is: (paymentMode) => paymentMode === 'UPI',
    then: Yup.string()
      .matches(/^[\w.-]+@[\w.-]+$/, 'Invalid UPI address')
      .required('UPI address is required'),
  }),
  //@ts-ignore
  bankName: Yup.string().when('paymentMode', {
    is: (paymentMode) => paymentMode === 'CARDS',
    then: Yup.string().required('Bank name is required'),
  }),
  //@ts-ignore
  cardNumber: Yup.string().when('paymentMode', {
    is: (paymentMode) => paymentMode === 'CARD',
    then: Yup.string()
      .matches(/^\d{16}$/, 'Invalid card number')
      .required('Card number is required'),
  }),
});

export type PaymentSchemaType = Yup.InferType<typeof paymentSchema>;
