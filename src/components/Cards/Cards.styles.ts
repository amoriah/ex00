import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FrontSide = styled.div<{ color: string }>`
  width: 300px;
  height: 120px;
  margin: 1em;
  padding: 2em;
  border-radius: 8px;
  background-color: white;
  box-shadow: ${({ color }) => `2px 2px 2px ${color}`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const BackSide = styled.div<{ color: string }>`
  width: 300px;
  height: 120px;
  margin: 1em;
  padding: 2em;
  display: flex;
  border-radius: 8px;
  flex-direction: row;
  background-color: white;
  box-shadow: ${({ color }) => `2px 2px 2px ${color}`};
  align-items: center;
  justify-content: space-between;
`;

export const Info = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 1em;
  margin-left: 1em;
  border-left: 1px solid grey;
  color: grey;
  list-style-type: square;

  li {
    margin-left: 1em;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Button = styled.button<{ color: string }>`
  margin-top: 2em;
  border-radius: 10px;
  padding: 1em 2em;
  background-color: white;
  box-shadow: ${({ color }) => `2px 2px 2px ${color}`};
  font-size: 1.1em;

  &:active {
    filter: brightness(85%);
  }
`;
