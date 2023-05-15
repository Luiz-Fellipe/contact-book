import React from 'react';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// COMPONENTS
import { DefaultAlert } from 'components/alerts';
import { Button } from 'components/buttons';
import { Text } from 'components/texts';

// HOOKS
import { useModalDeleteContact } from './hooks/useDeleteContact';

// TYPES
import { IContact } from 'types/contacts';

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
        <DefaultAlert.AlertTitle>
          <Text $fontSize="lg" color="secondary" $fontWeight="medium">
            <h4>Remover Contato</h4>
          </Text>
          <Text $fontSize="lg" color="secondary" $fontWeight="medium">
            <FontAwesomeIcon icon={faTrashCan} />
          </Text>
        </DefaultAlert.AlertTitle>
        <DefaultAlert.AlertDialogDescription>
          <Text
            $fontSize="md"
            color="black"
            $fontWeight="regular"
            $withoutTextEllipses
          >
            <p>
              Você tem certeza que deseja remover esse contato ? essa ação é
              irreversivel.
            </p>
          </Text>
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
