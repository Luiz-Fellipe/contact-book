// COMPONENTS
import { Modal, ModalProps } from 'components/modals';
import ContactForm from '../ContactForm';

// TYPES
import { IContactFormProps } from '../ContactForm/types';

interface IModalEditContactProps extends Omit<ModalProps, 'onRequestClose'> {
  onClose: () => void;
  defaultData?: IContactFormProps['defaultData'];
}

export const ModalEditContact = ({
  isOpen,
  onClose,
  defaultData,
  ...rest
}: IModalEditContactProps) => (
  <Modal.Root
    isOpen={isOpen}
    onRequestClose={onClose}
    {...rest}
    $maxWidth="940px"
    $maxHeight="640px"
  >
    <Modal.Header
      title="Editar Contato"
      description="Preencha o formulário abaixo para adicionar um novo contato"
      onClose={onClose}
    />
    <Modal.Content>
      <ContactForm
        onSubmitForm={(data) => console.log('onSubmit', data)}
        onCancel={onClose}
        defaultData={defaultData}
      />
    </Modal.Content>
  </Modal.Root>
);
