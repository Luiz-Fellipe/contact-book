import React from 'react';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// COMPONENTS
import { DefaultAlert } from 'components/alerts';
import { Button } from 'components/buttons';

// HOOKS
import { useModalDeleteContact } from './hooks/useDeleteContact';

// TYPES
import { IContact } from 'types/contacts';

// STYLES
import { Description, Title } from './styles';

interface IAlertDeleteContactProps
  extends React.ComponentProps<typeof DefaultAlert.AlertDialog> {
  contactId: IContact['id'] | null;
}

export const AlertDeleteContact = ({
  contactId,
  ...rest
}: IAlertDeleteContactProps) => {
  const { deleteContact, buttonCloseRef } = useModalDeleteContact();

  return (
    <DefaultAlert.AlertDialog {...rest}>
      <DefaultAlert.AlertDialogContent $maxWidth="450px">
        <DefaultAlert.AlertTitle asChild>
          <Title>
            <h4>Remover Contato</h4>
            <FontAwesomeIcon icon={faTrashCan} />
          </Title>
        </DefaultAlert.AlertTitle>
        <DefaultAlert.AlertDialogDescription asChild>
          <Description>
            Você tem certeza que deseja remover esse contato ? essa ação é
            irreversivel.
          </Description>
        </DefaultAlert.AlertDialogDescription>

        <DefaultAlert.AlertDialogActionsContainer>
          <DefaultAlert.AlertDialogCancel ref={buttonCloseRef} asChild>
            <Button $fontSize="sm" variant="primary" text="Cancelar" />
          </DefaultAlert.AlertDialogCancel>

          <Button
            variant="danger"
            $fontSize="sm"
            onClick={() => deleteContact(contactId)}
            text="Excluir"
          />
        </DefaultAlert.AlertDialogActionsContainer>
      </DefaultAlert.AlertDialogContent>
    </DefaultAlert.AlertDialog>
  );
};
