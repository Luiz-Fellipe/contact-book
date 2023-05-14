import { ContactFormType } from './schema';

export interface IContactFormProps {
  defaultData?: ContactFormType;
  onSubmitForm: (data: ContactFormType) => void;
  onCancel: () => void;
}
