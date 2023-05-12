import { Outlet } from 'react-router-dom';

// STYLES
import { Wrapper, Content } from './styles';

export function DefaultLayout() {
  return (
    <Wrapper>
      <Content>
        <Outlet />
      </Content>
    </Wrapper>
  );
}
