import { ContactFormType } from './schema';

export interface IContactFormProps {
  $isSaving?: boolean;
  defaultData?: Partial<Omit<ContactFormType, 'id'>>;
  onSubmitForm: (data: ContactFormType) => void;
  onCancel: () => void;
}
