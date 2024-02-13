export interface TimeData {
  year: string;
  month: string;
  day: string;
  hour: string;
  minuts: string;
  seconds: string;
  ms: string;
}

export interface IFormData {
  address: string;
  companyName: string;
  email: string;
  fullName: string;
  phone: string;
  position: string;
  website: string;
}

export type ContextType = {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  data: IFormData;
  setData: React.Dispatch<React.SetStateAction<IFormData>>;
  isFormFilled: boolean;
  setIsFormFilled: React.Dispatch<React.SetStateAction<boolean>>;
};
