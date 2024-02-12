import styled from 'styled-components';

export const StyleNavigation = styled.ul`
  display: flex;
  list-style: none;
  padding: 1.5em;

  li {
    padding: 0 1.5em;
    font-size: 1.5em;
    letter-spacing: 0.2rem;
    color: grey;

    a {
      text-decoration: none;
    }

    a:visited {
      color: inherit;
    }
  }
`;
