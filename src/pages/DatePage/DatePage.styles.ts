import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Data = styled.div`
  display: flex;
  padding: 1em;
`;
export const Span = styled.span`
  padding: 0.5em;
  font-size: 3em;
`;

export const Button = styled.button<{ color: string }>`
  margin: 1em;
  border-radius: 10px;
  padding: 1em 2em;
  background-color: white;
  box-shadow: ${({ color }) => `2px 2px 2px ${color}`};
  font-size: 1em;

  &:active {
    filter: brightness(85%);
  }
`;
