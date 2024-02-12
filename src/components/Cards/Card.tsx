import { useContext } from 'react';
import { ContextType, ThemeContext } from '../../App';
import { IFormData } from '../../types/types';
import {
  FrontSide,
  BackSide,
  Container,
  Info,
  ButtonBox,
  Button,
} from './Cards.styles';

interface CardProps {
  data: IFormData;
  handle: () => void;
}

export const Card: React.FC<CardProps> = ({ data, handle }) => {
  const { color } = useContext<ContextType>(ThemeContext);
  const { address, companyName, email, fullName, phone, position, website } =
    data;
  return (
    <Container>
      <FrontSide color={color }>
        <h3>{companyName}</h3>
        <span>{fullName}</span>
        <span>{position}</span>
      </FrontSide>
      <BackSide color={color }>
        <Info>
          <li>{address}</li>
          <li>{email}</li>
          <li>{phone}</li>
          <li>{website}</li>
        </Info>
      </BackSide>
      <ButtonBox>
        <Button type='button' onClick={() => handle()} color={color }>
          change
        </Button>
      </ButtonBox>
    </Container>
  );
};
