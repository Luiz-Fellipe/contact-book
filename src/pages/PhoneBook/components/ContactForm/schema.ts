import { object, string, InferType, array, number } from 'yup';

const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

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
