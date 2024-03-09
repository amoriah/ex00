import { useContext } from 'react';
import { ThemeContext } from '../../App';
import { ContextType } from '../../types/types';
import * as Style from './Cards.styles';
interface CardProps {
  handle: () => void;
}

export const Card: React.FC<CardProps> = ({ handle }) => {
  const { color, data } = useContext<ContextType>(ThemeContext);
  const { address, companyName, email, fullName, phone, position, website } =
    data;
  return (
    <Style.Container>
      <Style.FrontSide color={color}>
        <Style.Title>{companyName}</Style.Title>
        <Style.Span>{fullName}</Style.Span>
        <Style.Span>{position}</Style.Span>
      </Style.FrontSide>
      <Style.BackSide color={color}>
        <Style.Info>
          <li>{address}</li>
          <li>{email}</li>
          <li>{phone}</li>
          <li>{website}</li>
        </Style.Info>
      </Style.BackSide>
      <Style.ButtonBox>
        <Style.Button type="button" onClick={() => handle()} color={color}>
          clean
        </Style.Button>
      </Style.ButtonBox>
    </Style.Container>
  );
};
