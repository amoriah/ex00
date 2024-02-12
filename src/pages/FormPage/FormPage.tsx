import { useContext, useState } from 'react';
import {
  Button,
  ButtonBox,
  Container,
  Field,
  Form,
  Input,
  Label,
} from './FormPage.styles';
import { IFormData } from '../../types/types';
import { Card } from '../../components/Cards/Card';
import { ContextType, ThemeContext } from '../../App';

export const FormPage = () => {
  const { color } = useContext<ContextType>(ThemeContext);
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [data, setData] = useState<IFormData>({
    address: '',
    companyName: '',
    email: '',
    fullName: '',
    phone: '',
    position: '',
    website: '',
  });

  const submit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const { address, companyName, email, fullName, phone, position, website } =
      Object.fromEntries(formData.entries());

    setData({
      address: address as string,
      companyName: companyName as string,
      email: email as string,
      fullName: fullName as string,
      phone: phone as string,
      position: position as string,
      website: website as string,
    });
    if (Object.keys(data).length !== 0) setIsFormFilled(!isFormFilled);
  };

  const clear = () => {
    setIsFormFilled(false);
    setData({
      address: '',
      companyName: '',
      email: '',
      fullName: '',
      phone: '',
      position: '',
      website: '',
    });
  };

  return (
    <Container>
      {isFormFilled ? (
        <Card data={data} handle={clear} />
      ) : (
        <Form onSubmit={submit} color={color}>
          <h2> Create your business card </h2>
          <Field>
            <Label htmlFor='companyName'>Company name</Label>
            <Input type='text' id='companyName' name='companyName' />
          </Field>
          <Field>
            <Label htmlFor='fullName'>Full name</Label>
            <Input type='text' id='fullName' name='fullName' />
          </Field>
          <Field>
            <Label htmlFor='position'>Position</Label>
            <Input type='text' id='position' name='position' />
          </Field>
          <Field>
            <Label htmlFor='address'>Address</Label>
            <Input type='text' id='address' name='address' />
          </Field>
          <Field>
            <Label htmlFor='email'>Email</Label>
            <Input type='email' id='email' name='email' />
          </Field>
          <Field>
            <Label htmlFor='phone'>Phone</Label>
            <Input type='tel' id='phone' name='phone' />
          </Field>
          <Field>
            <Label htmlFor='website'>Website</Label>
            <Input type='url' id='website' name='website' />
          </Field>
          <ButtonBox>
            <Button type='submit' color={color}>submit</Button>
          </ButtonBox>
        </Form>
      )}
    </Container>
  );
};
