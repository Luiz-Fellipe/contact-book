// COMPONENTS
import { Modal, ModalProps } from 'components/modals';
import ContactForm from '../ContactForm';

interface IModalAddContactProps extends Omit<ModalProps, 'onRequestClose'> {
  onClose: () => void;
}

export const ModalAddContact = ({
  isOpen,
  onClose,
  ...rest
}: IModalAddContactProps) => (
  <Modal.Root
    isOpen={isOpen}
    onRequestClose={onClose}
    {...rest}
    $maxWidth="940px"
    $maxHeight="640px"
  >
    <Modal.Header
      title="Adicionar Contato"
      description="Preencha o formulário abaixo para adicionar um novo contato"
      onClose={onClose}
    />
    <Modal.Content>
      <ContactForm
        onSubmitForm={(data) => console.log('onSubmit', data)}
        onCancel={onClose}
      />
    </Modal.Content>
  </Modal.Root>
);
