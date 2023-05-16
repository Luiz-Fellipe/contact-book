import { object, string, InferType, array, number } from 'yup';

/**
 * 
format phone number accepted (is saved without formatting)
333-333-3333
(333) 333-3333
1-333-333-3333
333.333.3333
333-333-3333 x3333
(333) 333-3333 x3333
1-333-333-3333 x3333
333.333.3333 x3333
 */

/**
 * regex explanation
 * ^ asserts the start of the string.
   (?:\+?\d{1,3})? is an optional non-capturing group that matches an optional plus sign followed by 1 to 3 digits.
  \d{10,14} matches 10 to 14 digits.
  $ asserts the end of the string.
 */

const phoneRegExp = /^(?:\+?\d{1,3})?\d{10,14}$/;

export const contactSchema = object({
  id: number(),
  name: string().trim().required('O campo nome é obrigatório'),
  email: string()
    .email('O campo deve ser um e-mail válido')
    .required('O campo email é obrigatório'),

  phones: array()
    .of(
      object().shape({
        id: number().required(),
        number: string()
          .required('O campo de telefone é obrigatório')
          .transform((value) => {
            const digitsOnly = value.replace(/[^+\d]/g, '');
            return digitsOnly;
          })
          .matches(phoneRegExp, 'Número de telefone inválido'),
      })
    )
    .defined(),
  addresses: array()
    .of(
      object().shape({
        id: number().required(),
        address: string().required('O endereço é obrigatório'),
      })
    )
    .defined(),
});

export type ContactFormType = InferType<typeof contactSchema>;
