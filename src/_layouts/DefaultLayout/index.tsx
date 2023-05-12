import { Outlet } from 'react-router-dom';

// COMPONENTS
import { Header } from '../../components/Header';

// STYLES
import { Wrapper, Content } from './styles';

export function DefaultLayout() {
  return (
    <Wrapper>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </Wrapper>
  );
}
