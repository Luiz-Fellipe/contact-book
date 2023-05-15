import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

// SERVICES
import {
  addContact,
  editContact,
  deleteContact,
} from 'services/endpoints/contacts';

export function useContactsMutations() {
  const queryClient = useQueryClient();

  const addContactMutation = useMutation({
    mutationFn: addContact,
    onError: (error) => {
      toast.error('Erro ao adicionar um contato.');
      console.error(error);
    },
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['contacts'], type: 'active' });
      toast.success('Contato adicionado !');
    },
  });

  const editContactMutation = useMutation({
    mutationFn: editContact,
    onError: (error) => {
      toast.error('Erro ao editar o contato.');
      console.error(error);
    },
    onSuccess: async (response) => {
      await queryClient.refetchQueries({
        queryKey: ['contacts'],
        type: 'active',
      });

      await queryClient.refetchQueries({
        queryKey: ['contact', { contactId: response?.data?.id }],
        exact: true,
      });

      toast.success('Contato editado !');
    },
  });

  const deleteContactMutation = useMutation({
    mutationFn: deleteContact,
    onError: (error) => {
      toast.error('Erro ao adicionar um contato.');
      console.error(error);
    },
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['contacts'], type: 'active' });
      toast.success('Contato removido !');
    },
  });

  return { addContactMutation, editContactMutation, deleteContactMutation };
}
