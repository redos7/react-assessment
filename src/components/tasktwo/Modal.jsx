import React from 'react';

import {
  Title,
  Wrapper,
  Content,
  ButtonList
} from '@components/styled-components/Modal';


const Modal = ({
  children,
  buttons = [],
  title,
}) => (
  <Wrapper>
    {title && <Title>{title}</Title>}
    <Content>
      {children}
    </Content>
    <ButtonList>
      {buttons.map(({ id, Component }) => <Component key={id} />)}
    </ButtonList>
  </Wrapper>
);


export default React.memo(Modal);
