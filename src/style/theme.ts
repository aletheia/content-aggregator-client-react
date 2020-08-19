import {DefaultTheme} from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primaryColor: string;
    secondaryColor: string;
    foregroundColor: string;
    accentColor: string;
    backgroundColor: string;
    textColor: string;
    borderColor: string;
  }
}

export const lightTheme: DefaultTheme = {
  primaryColor: '#3264ff',
  secondaryColor: '#2bacbd',
  foregroundColor: '#d1e1e6',
  accentColor: '#db5d1e',
  backgroundColor: '#151122',
  textColor: '#d1e1e6',
  borderColor: 'rgba(209, 225, 230, 0.1)',
};

export const darkTheme: DefaultTheme = {
  primaryColor: '#3264ff',
  secondaryColor: '#2bacbd',
  foregroundColor: '#d1e1e6',
  accentColor: '#db5d1e',
  textColor: '#d1e1e6',
  backgroundColor: '#333333',
  borderColor: 'rgba(209, 225, 230, 0.1)',
};
