import { ContactFormType } from './schema';

export interface IContactFormProps {
  $isSaving?: boolean;
  defaultData?: ContactFormType;
  onSubmitForm: (data: ContactFormType) => void;
  onCancel: () => void;
}
