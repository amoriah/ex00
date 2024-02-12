import { useContext } from 'react';
import { ContextType, ThemeContext } from '../../App';

import { Container, Button, Text } from './ButtonPage.styles';

export const ButtonPage = () => {
  const { color, setColor } = useContext<ContextType>(ThemeContext);

  const randomColor = () => {
    const hexCodes = '0123456789ABCDEF';
    let color = '';
    for (let i = 0; i < 6; i++) {
      color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
    }
    return '#' + color;
  };

  const clickHandle = () => {
    setColor(randomColor());
  };

  return (
    <Container>
      <Button onClick={clickHandle} color={color}>
        color button
      </Button>
      <Text color={color}>
        {'color: '}
        <span>{color}</span>
      </Text>
    </Container>
  );
};
