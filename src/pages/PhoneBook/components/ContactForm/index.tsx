import { faCirclePlus, faXmark } from '@fortawesome/free-solid-svg-icons';

// COMPONENTS
import { Text } from 'components/texts';
import { Input } from 'components/inputs';
import { Button } from 'components/buttons';

// TYPES
import { IContactFormProps } from './types';

// HOOKS
import { useContactForm } from './hooks/useContactForm';

// STYLES
import { Field, FieldGroup, Fields, Footer, Form } from './styles';

const ContactForm = ({
  onSubmitForm,
  onCancel,
  defaultData,
}: IContactFormProps) => {
  const {
    onSubmit,
    register,
    errors,

    phoneFields,
    addPhoneField,
    deletePhoneField,

    addressFields,
    addAddressField,
    deleteAddressField,
  } = useContactForm({
    onSubmitForm,
    defaultData,
  });

  const Label = ({
    children,
    ...rest
  }: React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >) => (
    <Text $fontSize="sm">
      <label {...rest}>{children}</label>
    </Text>
  );

  return (
    <Form onSubmit={onSubmit}>
      <Fields>
        <FieldGroup>
          <Field>
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              placeholder="Insira um nome aqui"
              error={errors.name?.message}
              {...register('name')}
            />
          </Field>
          <Field>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Insira um email aqui"
              error={errors.email?.message}
              {...register('email')}
            />
          </Field>
        </FieldGroup>

        <FieldGroup>
          {phoneFields.map((phone, index) => (
            <Field key={phone.key}>
              <Label htmlFor={`phone-${phone.key}`}>Telefone {index + 1}</Label>
              <div>
                <Input
                  id={`phone-${phone.key}`}
                  type="tel"
                  placeholder="Insira um telefone aqui"
                  error={errors?.phones?.[index]?.number?.message}
                  {...register(`phones.${index}.number`)}
                />
                <Button
                  icon={faXmark}
                  variant="link"
                  $fontSize="lg"
                  disabled={phoneFields.length === 1}
                  onClick={() => deletePhoneField(index)}
                />
              </div>
            </Field>
          ))}
        </FieldGroup>
        <Button
          type="button"
          icon={faCirclePlus}
          text="Adicionar telefone"
          disabled={phoneFields.length === 4}
          onClick={() => addPhoneField({ number: '' })}
          $fontSize="xs"
          variant="link"
        />

        {addressFields.map((field, index) => (
          <Field key={field.key}>
            <Label htmlFor={`address-${field.key}`}>Endereço {index + 1}</Label>
            <div>
              <Input
                id={`address-${field.key}`}
                placeholder="Insira um endereço aqui"
                error={errors?.addresses?.[index]?.address?.message}
                {...register(`addresses.${index}.address`)}
              />
              <Button
                icon={faXmark}
                variant="link"
                $fontSize="lg"
                disabled={addressFields.length === 1}
                onClick={() => deleteAddressField(index)}
              />
            </div>
          </Field>
        ))}

        <Button
          type="button"
          icon={faCirclePlus}
          text="Adicionar endereço"
          disabled={addressFields.length === 4}
          onClick={() => addAddressField({ address: '' })}
          $fontSize="xs"
          variant="link"
        />
      </Fields>

      <Footer>
        <Button
          type="button"
          text="Cancelar"
          onClick={onCancel}
          $fontSize="sm"
          variant="primary"
        />
        <Button
          type="submit"
          text="Salvar"
          $fontSize="sm"
          variant="secondary"
        />
      </Footer>
    </Form>
  );
};

export default ContactForm;
