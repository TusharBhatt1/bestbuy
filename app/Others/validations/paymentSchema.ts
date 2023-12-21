import * as Yup from 'yup';

export const paymentSchema = Yup.object().shape({
  paymentMode: Yup.string().required('Please select a payment mode'),
  holderName: Yup.string().min(5).max(30).required(),
  //@ts-ignore
  upiAddress: Yup.string().when('paymentMode', {
    is: (paymentMode) => paymentMode === 'UPI',
    then: Yup.string()
      .matches(/^[\w.-]+@[\w.-]+$/, 'Invalid, ex : xyz@sbi')
      .required('Required'),
  }),
  //@ts-ignore
  cvvNum: Yup.string().when('paymentMode', {
    is: (paymentMode) => paymentMode === 'CARDS',
    then: Yup.string().matches(/^\d{3}$/, 'Card number length is 3 ').required("Required")
  }),
  //@ts-ignore
  cardNumber: Yup.string().when('paymentMode', {
    is: (paymentMode) => paymentMode === 'CARDS',
    then: Yup.string()
      .matches(/^\d{16}$/, 'Card number length is 16 ')
      .required('Required'),
  }),
});

export type PaymentSchemaType = Yup.InferType<typeof paymentSchema>;
