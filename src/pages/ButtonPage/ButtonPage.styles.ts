import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button<{ color: string }>`
  margin: 1em;
  border-radius: 10px;
  padding: 1em 2em;
  background-color: white;
  box-shadow: ${({ color }) => `2px 2px 2px ${color}`};
  font-size: 5em;
  color: ${({ color }) => color};

  &:active {
    filter: brightness(85%);
  }
`;

export const Text = styled.div<{ color: string }>`
  font-size: 3em;
  padding: 0.5em 2em;
  text-align: center;
  color: grey;

  span {
    color: ${({ color }) => color};
  }
`;
