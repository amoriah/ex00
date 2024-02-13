import { useContext, useEffect, useState } from 'react';
import { Button, Container, Data, Span } from './DatePage.styles';
import { ContextType, TimeData } from '../../types/types';
import {  ThemeContext } from '../../App';

export const DatePage = () => {
  const { color } = useContext<ContextType>(ThemeContext);
  const [time, setTime] = useState<TimeData>({
    year: '',
    month: '',
    day: '',
    hour: '',
    minuts: '',
    seconds: '',
    ms: '',
  });

  useEffect(() => {
    setTime(getData());
  }, []);

  const updateClick = () => {
    setTime(getData());
  };

  function getData(): TimeData {
    const date = new Date();

    return {
      year: `${date.getFullYear()}`,
      month: `${date.getMonth() + 1}`.padStart(2, '0'),
      day: `${date.getDate()}`.padStart(2, '0'),
      hour: `${date.getHours()}`.padStart(2, '0'),
      minuts: `${date.getMinutes()}`.padStart(2, '0'),
      seconds: `${date.getSeconds()}`.padStart(2, '0'),
      ms: `${date.getMilliseconds()}`.padStart(3, '0'),
    };
  }

  const dataView = `${time.year}/${time.month}/${time.day}`;
  const timeView = `${time.hour}:${time.minuts}:${time.seconds}:${time.ms}`;

  return (
    <Container>
      <Data>
        <Span>{dataView}</Span>
        <Span>{timeView}</Span>
      </Data>
      <Button onClick={updateClick} color={color}>
        Update
      </Button>
    </Container>
  );
};
