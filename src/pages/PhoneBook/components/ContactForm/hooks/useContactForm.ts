import { useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ContactFormType, contactSchema } from '../schema';

// TYPES
import { IContactFormProps } from '../types';

export function useContactForm({
  onSubmitForm,
  defaultData,
}: Pick<IContactFormProps, 'defaultData' | 'onSubmitForm'>) {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm<ContactFormType>({
    resolver: yupResolver(contactSchema),
    defaultValues: {
      ...defaultData,
      phoneNumbers: defaultData?.phoneNumbers
        ? defaultData.phoneNumbers
        : [
            {
              id: 1,
              number: '',
            },
          ],
      addresses: defaultData?.addresses
        ? defaultData.addresses
        : [
            {
              id: 1,
              address: '',
            },
          ],
    },
  });

  const {
    fields: phoneFields,
    append: appendPhoneField,
    remove: removePhoneField,
  } = useFieldArray({
    control,
    name: 'phoneNumbers',
    keyName: 'key',
    rules: {
      maxLength: 4,
      minLength: 1,
      required: true,
    },
  });

  function addPhoneField({ number }: { number: string }) {
    const newId = (phoneFields?.at(-1)?.id || 0) + 1;
    appendPhoneField({ id: newId, number });
  }

  function deletePhoneField(index: number) {
    removePhoneField(index);
  }

  const {
    fields: addressFields,
    append: appendAddressField,
    remove: removeAddressField,
  } = useFieldArray({
    control,
    name: 'addresses',
    keyName: 'key',
    rules: {
      maxLength: 4,
      minLength: 1,
      required: true,
    },
  });

  function addAddressField({ address }: { address: string }) {
    const newId = (addressFields?.at(-1)?.id || 0) + 1;
    appendAddressField({ id: newId, address });
  }

  function deleteAddressField(index: number) {
    removeAddressField(index);
  }

  const onSubmit = handleSubmit((data) => {
    onSubmitForm(data);
  });

  return {
    onSubmit,
    register,
    errors,

    phoneFields,
    addPhoneField,
    deletePhoneField,

    addressFields,
    addAddressField,
    deleteAddressField,
  };
}
