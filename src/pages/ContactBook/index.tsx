import {
  faAnglesDown,
  faFileImport,
  faSpinner,
  faTriangleExclamation,
  faUserPlus,
  faUsersSlash,
} from '@fortawesome/free-solid-svg-icons';

// COMPONENTS
import { Text } from 'components/texts';
import { InputSVG } from 'components/inputs/InputSVG';
import { Button } from 'components/buttons';
import { ContactsList } from './components/ContactsList';
import { LoadingBox } from 'components/loadings';
import { FeedbackBox } from 'components/feedbacks';
import { ModalAddContact } from './components/ModalAddContact';
import { ModalEditContact } from './components/ModalEditContact';
import { AlertDeleteContact } from './components/AlertDeleteContact';

// SERVICES
import { useGetContactsInfinityQuery } from 'services/queries/contacts/useGetContactsQuery';

// HOOKS
import { useContactBook } from './hooks/useContactBook';

// STYLES
import { Wrapper, Header, Content } from './styles';

const ContactBook = () => {
  const {
    openModalAddContact,
    setOpenModalAddContact,
    openModalEditContact,
    setOpenModalEditContact,
    openAlertDeleteContact,
    setOpenAlertDeleteContact,

    navigate,
    searchValue,
    setSearchValue,
    debouncedSearchValue,
  } = useContactBook();

  const {
    contacts,
    hasNextPage,
    isSuccess,
    isFetching,
    isError,
    isLoading,
    fetchNextPage,
  } = useGetContactsInfinityQuery({
    length: 20,
    filters: {
      search: debouncedSearchValue,
    },
  });

  return (
    <Wrapper>
      <Header>
        <div className="header-content-left">
          <Text $fontSize="xl" color="black" $fontWeight="medium">
            <h2>Agenda de Contatos</h2>
          </Text>
          <Text $fontSize="sm" color="gray" $fontWeight="regular">
            <p>Listagem de todos os seus contatos</p>
          </Text>
        </div>
        <div className="header-content-right">
          <InputSVG
            placeholder="Buscar um contato"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Button
            text="Adicionar"
            $fontSize="sm"
            icon={faUserPlus}
            variant="secondary"
            onClick={() =>
              setOpenModalAddContact({
                value: true,
                defaultData: undefined,
              })
            }
          />
          <Button
            text="Importar"
            icon={faFileImport}
            $fontSize="sm"
            variant="secondary"
            onClick={() => navigate('/contacts/google')}
          />
        </div>
      </Header>
      <Content>
        {isLoading && <LoadingBox $iconSize="xxxxl" />}

        {isSuccess && <ContactsList contacts={contacts} />}

        {hasNextPage && isSuccess && (
          <Button
            text="Load More Contacts"
            type="button"
            $fontSize="sm"
            variant="link"
            $isLoading={isFetching}
            icon={isFetching ? faSpinner : faAnglesDown}
            iconSpin={isFetching}
            className="button-load-more"
            onClick={() => fetchNextPage()}
          />
        )}

        {isSuccess && contacts.length === 0 && (
          <FeedbackBox
            icon={faUsersSlash}
            message="Nenhum contato encontrado"
          />
        )}

        {isError && !isLoading && (
          <FeedbackBox
            icon={faTriangleExclamation}
            message="Ops! encontramos um erro ao buscar seus contatos"
          />
        )}
      </Content>

      <ModalAddContact
        isOpen={openModalAddContact.value}
        onClose={() =>
          setOpenModalAddContact({
            value: false,
            defaultData: undefined,
          })
        }
      />

      <ModalEditContact
        isOpen={openModalEditContact.value}
        contactId={openModalEditContact.contactId}
        onClose={() =>
          setOpenModalEditContact({
            value: false,
            contactId: null,
          })
        }
      />

      <AlertDeleteContact
        open={openAlertDeleteContact.value}
        contactId={openAlertDeleteContact.contactId}
        onOpenChange={() => {
          setOpenAlertDeleteContact({
            value: false,
            contactId: null,
          });
        }}
      />
    </Wrapper>
  );
};

export default ContactBook;
