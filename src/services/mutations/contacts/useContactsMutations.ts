import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

// SERVICES
import { addContact, deleteContact } from 'services/endpoints/contacts';

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

  return { addContactMutation, deleteContactMutation };
}
