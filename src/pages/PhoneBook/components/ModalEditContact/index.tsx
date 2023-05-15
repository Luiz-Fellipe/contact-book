import {
  faTriangleExclamation,
  faUserSlash,
} from '@fortawesome/free-solid-svg-icons';

// COMPONENTS
import { Modal, ModalProps } from 'components/modals';
import ContactForm from '../ContactForm';
import { LoadingBox } from 'components/loadings';
import { FeedbackBox } from 'components/feedbacks';

// SERVICES
import { useGetContactByIdQuery } from 'services/queries/contacts/useGetContactByIdQuery';

// HOOKS
import { useModalEditContact } from './hooks/useEditContact';

// TYPES
import { IContact } from 'types/contacts';

interface IModalEditContactProps extends Omit<ModalProps, 'onRequestClose'> {
  onClose: () => void;
  contactId: IContact['id'] | null;
}

export const ModalEditContact = ({
  isOpen,
  onClose,
  contactId,
  ...rest
}: IModalEditContactProps) => {
  const { editContact, editingContact } = useModalEditContact();

  const { contact, isSuccess, isLoading, isError } = useGetContactByIdQuery({
    contactId,
    enabled: isOpen,
  });

  return (
    <Modal.Root
      isOpen={isOpen}
      onRequestClose={onClose}
      {...rest}
      $maxWidth="940px"
      $maxHeight="640px"
    >
      <Modal.Header
        title="Editar Contato"
        description="Altere o formulário abaixo para editar o contato"
        onClose={onClose}
      />
      <Modal.Content>
        {isLoading && <LoadingBox $iconSize="xxxxl" />}
        {isSuccess && (
          <ContactForm
            onSubmitForm={(data) =>
              editContact({
                ...data,
                id: contactId as IContact['id'],
              })
            }
            onCancel={onClose}
            defaultData={contact?.data}
            $isSaving={editingContact}
          />
        )}

        {isSuccess &&
          contact?.data &&
          Object.keys(contact.data).length === 0 && (
            <FeedbackBox
              icon={faUserSlash}
              message="Não econtramos dados deste contato."
            />
          )}
        {isError && !isLoading && (
          <FeedbackBox
            icon={faTriangleExclamation}
            message="Ops! encontramos um erro ao buscar os dados deste contato"
          />
        )}
      </Modal.Content>
    </Modal.Root>
  );
};
