import { useContext } from 'react';
import * as Style from './FormPage.styles';
import { ContextType } from '../../types/types';
import { Card } from '../../components/Cards/Card';
import { ThemeContext } from '../../App';

export const FormPage = () => {
  const { color, data, setData, isFormFilled, setIsFormFilled } =
    useContext<ContextType>(ThemeContext);

  const submit: React.FormEventHandler<HTMLFormElement> = async event => {
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

  const formFilledHandler = (key: string, value: string) => {
    if (key === 'address' && value.length > 35) {
      alert('Too long string. Try again.');
      clear();
    } else if (key !== 'address' && value.length > 25) {
      alert('Too long string. Try again.');
      clear();
    } else {
      setData({ ...data, [key]: value });
    }
  };

  return (
    <Style.Container>
      {isFormFilled ? (
        <Card handle={clear} />
      ) : (
        <Style.Form onSubmit={submit} color={color}>
          <h2> Create your business card </h2>
          <Style.Field>
            <Style.Label htmlFor="companyName">Company name</Style.Label>
            <Style.Input
              type="text"
              id="companyName"
              name="companyName"
              value={data.companyName}
              placeholder="OOO Oduvanchick"
              required
              onChange={e => formFilledHandler(e.target.name, e.target.value)}
            />
          </Style.Field>
          <Style.Field>
            <Style.Label htmlFor="fullName">Full name</Style.Label>
            <Style.Input
              type="text"
              id="fullName"
              name="fullName"
              value={data.fullName}
              placeholder="Vasily Gubkin"
              required
              onChange={e => formFilledHandler(e.target.name, e.target.value)}
            />
          </Style.Field>
          <Style.Field>
            <Style.Label htmlFor="position">Position</Style.Label>
            <Style.Input
              type="text"
              id="position"
              name="position"
              value={data.position}
              placeholder="Frontend-developer"
              required
              onChange={e => formFilledHandler(e.target.name, e.target.value)}
            />
          </Style.Field>
          <Style.Field>
            <Style.Label htmlFor="address">Address</Style.Label>

            <Style.Textarea
              id="address"
              name="address"
              value={data.address}
              required
              placeholder="Salekhard, Lenin St.6"
              onChange={e => formFilledHandler(e.target.name, e.target.value)}
            />
          </Style.Field>
          <Style.Field>
            <Style.Label htmlFor="email">Email</Style.Label>
            <Style.Input
              type="email"
              id="email"
              name="email"
              value={data.email}
              placeholder="your-email@test.test"
              required
              onChange={e => formFilledHandler(e.target.name, e.target.value)}
            />
          </Style.Field>
          <Style.Field>
            <Style.Label htmlFor="phone">Phone</Style.Label>
            <Style.Input
              type="tel"
              id="phone"
              name="phone"
              value={data.phone}
              placeholder="89990000000"
              required
              onChange={e => formFilledHandler(e.target.name, e.target.value)}
            />
          </Style.Field>
          <Style.Field>
            <Style.Label htmlFor="website">Website</Style.Label>
            <Style.Input
              type="url"
              id="website"
              name="website"
              value={data.website}
              placeholder="https://www.site.com"
              required
              onChange={e => formFilledHandler(e.target.name, e.target.value)}
            />
          </Style.Field>
          <Style.ButtonBox>
            <Style.Button type="submit" color={color}>
              submit
            </Style.Button>
          </Style.ButtonBox>
        </Style.Form>
      )}
    </Style.Container>
  );
};
