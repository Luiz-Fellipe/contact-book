import React from 'react';
import {
  faAnglesDown,
  faArrowLeft,
  faSpinner,
  faTriangleExclamation,
  faUsersSlash,
} from '@fortawesome/free-solid-svg-icons';

// HOOKS
import { useGoogleCredentials } from './hooks/useGoogleCredentials';

// SERVICES
import { useGetPeopleGoogleQuery } from 'services/queries/peopleGoogle/useGetPeopleGoogleQuery';

// COMPONENTS
import { Text } from 'components/texts';
import { Button } from 'components/buttons';
import { LoadingBox } from 'components/loadings';
import { FeedbackBox } from 'components/feedbacks';
import { GoogleContactList } from './components/GoogleContactList';

// STYLES
import { Content, Header, Wrapper } from './styles';

export const GoogleContacts: React.FC = () => {
  const { userCredentials, login, logout, navigate } = useGoogleCredentials();

  const {
    contacts,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
    isFetching,
    isSuccess,
  } = useGetPeopleGoogleQuery({
    token: userCredentials?.access_token,
    length: 40,
    enabled: !!userCredentials?.access_token,
  });

  return (
    <Wrapper>
      <Button
        text="Voltar"
        icon={faArrowLeft}
        variant="link"
        onClick={() => navigate('/')}
      />
      <Header>
        <div>
          <Text $fontSize="xl" color="black" $fontWeight="medium">
            <h3>Google Contatos</h3>
          </Text>
          <Text
            $fontSize="sm"
            color="gray"
            $fontWeight="regular"
            $withoutTextEllipses
          >
            <p>
              Visualize e importe os seus contatos do{' '}
              <a href="https://contacts.google.com/" target="_blank">
                Google Contatos
              </a>
            </p>
          </Text>
        </div>

        {userCredentials.access_token && (
          <Button text="Logout" $fontSize="sm" onClick={() => logout()} />
        )}
      </Header>
      <Content>
        {userCredentials?.access_token && isLoading && (
          <LoadingBox $iconSize="xxxxl" />
        )}
        {!userCredentials?.access_token && (
          <Button
            text="Login com sua conta do Google"
            onClick={() => login()}
          />
        )}

        {userCredentials?.access_token && isSuccess && contacts.length > 0 && (
          <GoogleContactList googleContacts={contacts} />
        )}

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
    </Wrapper>
  );
};
