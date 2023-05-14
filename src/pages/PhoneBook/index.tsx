import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

// COMPONENTS
import { Text } from 'components/texts';
import { InputSVG } from 'components/inputs/InputSVG';
import { Button } from 'components/buttons';
import ContactList from './components/ContactList';
import { ModalAddContact } from './components/ModalAddContact';

// HOOKS
import { usePhoneBook } from './hooks/usePhoneBook';

// STYLES
import { Wrapper, Header, Content } from './styles';

const PhoneBook = () => {
  const { isOpenModal, setOpenModal } = usePhoneBook();

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
          <InputSVG placeholder="Buscar um contato" />
          <Button
            text="Adicionar"
            $fontSize="sm"
            icon={faUserPlus}
            variant="secondary"
            onClick={() => setOpenModal(true)}
          />
        </div>
      </Header>
      <Content>
        <ContactList />
      </Content>

      <ModalAddContact
        isOpen={isOpenModal}
        onClose={() => setOpenModal(false)}
      />
    </Wrapper>
  );
};

export default PhoneBook;
