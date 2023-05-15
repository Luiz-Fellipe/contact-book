import { useNavigate, useParams } from 'react-router-dom';
import {
  faArrowLeft,
  faTriangleExclamation,
  faUserSlash,
} from '@fortawesome/free-solid-svg-icons';

// COMPONENTS
import { Button } from 'components/buttons';
import { LoadingBox } from 'components/loadings';
import { FeedbackBox } from 'components/feedbacks';
import { AvatarInitials } from 'components/avatars';
import { Text } from 'components/texts';

// SERVICES
import { useGetContactByIdQuery } from 'services/queries/contacts/useGetContactByIdQuery';

// STYLES
import { Wrapper, Header, Content, InfoGroup, GridContainer } from './styles';

export const ContactDetail = () => {
  const navigate = useNavigate();
  const { contactId } = useParams();

  const { contact, isSuccess, isLoading, isError } = useGetContactByIdQuery({
    contactId: contactId ? Number(contactId) : null,
    enabled: !!contactId,
  });

  return (
    <Wrapper>
      <Button
        text="Voltar"
        icon={faArrowLeft}
        variant="link"
        onClick={() => navigate('/')}
      />

      {isLoading && <LoadingBox $iconSize="xxxxl" />}

      {isSuccess && contact?.data && (
        <>
          <Header>
            <AvatarInitials
              size="128px"
              $fontSize="xxxxl"
              name={contact?.data.name}
            />

            <div className="header-info">
              <Text $fontSize="xl" $fontWeight="bold">
                <h2>{contact?.data.name}</h2>
              </Text>
              <Text $fontSize="md" $fontWeight="regular" color="gray">
                <a href={`mailto:${contact?.data.email}`}>
                  {contact?.data.email}
                </a>
              </Text>
            </div>
          </Header>
          <Content>
            <GridContainer>
              {contact.data.phones.map((phone, index) => (
                <InfoGroup>
                  <Text $fontSize="lg" $fontWeight="medium">
                    <h5>Telefone {index + 1}:</h5>
                  </Text>
                  <Text
                    $fontSize="md"
                    $fontWeight="regular"
                    color="gray"
                    $withoutTextEllipses
                  >
                    <a href={`tel:${phone.number}`}>{phone.number}</a>
                  </Text>
                </InfoGroup>
              ))}
            </GridContainer>
            <GridContainer>
              {contact.data.addresses.map((address, index) => (
                <InfoGroup>
                  <Text $fontSize="lg" $fontWeight="medium">
                    <h5>Endereço {index + 1}:</h5>
                  </Text>
                  <Text
                    $fontSize="md"
                    $fontWeight="regular"
                    color="gray"
                    $withoutTextEllipses
                  >
                    <span>{address.address}</span>
                  </Text>
                </InfoGroup>
              ))}
            </GridContainer>
          </Content>
        </>
      )}

      {isSuccess && contact?.data && Object.keys(contact.data).length === 0 && (
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
    </Wrapper>
  );
};
