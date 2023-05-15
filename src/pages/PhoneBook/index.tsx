import {
  faAnglesDown,
  faSpinner,
  faTriangleExclamation,
  faUserPlus,
  faUsersSlash,
} from '@fortawesome/free-solid-svg-icons';

// COMPONENTS
import { Text } from 'components/texts';
import { InputSVG } from 'components/inputs/InputSVG';
import { Button } from 'components/buttons';
import { ContactList } from './components/ContactList';
import { LoadingBox } from 'components/loadings';
import { FeedbackBox } from 'components/feedbacks';
import { ModalAddContact } from './components/ModalAddContact';
import { ModalEditContact } from './components/ModalEditContact';
import { AlertDeleteContact } from './components/AlertDeleteContact';

// SERVICES
import { useGetContactsInfinityQuery } from 'services/queries/contacts/useGetContactsQuery';

// HOOKS
import { usePhoneBook } from './hooks/usePhoneBook';

// STYLES
import { Wrapper, Header, Content } from './styles';

const PhoneBook = () => {
  const {
    openModalAddContact,
    setOpenModalAddContact,
    openModalEditContact,
    setOpenModalEditContact,
    openAlertDeleteContact,
    setOpenAlertDeleteContact,

    searchValue,
    setSearchValue,
    debouncedSearchValue,
  } = usePhoneBook();

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
            <h3>Lista Telefônica</h3>
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
            onClick={() => setOpenModalAddContact(true)}
          />
        </div>
      </Header>
      <Content>
        {isLoading && <LoadingBox $iconSize="xxxxl" />}

        {isSuccess && <ContactList contacts={contacts} />}

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
        isOpen={openModalAddContact}
        onClose={() => setOpenModalAddContact(false)}
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

export default PhoneBook;
