import styled, { css } from 'styled-components';

const Button = styled.button`
  margin: 0;
  padding: 15px 5px;
  min-width: 150px;
  border: 1px solid darkblue;
  color: darkblue;
  background: transparent;
  border-radius: 10px;
  font-size: 18px;

  ${(props) => (props.disabled
    ? css`
      cursor: default;
      opacity: 0.2
    `
    : css`
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    `
  )}
`;


export const ActiveButton = styled(Button)`
  border: none;
  background: lightblue;
`;


export default Button;
