import { colors as brand } from './colors';

export type Palette = {
  background: string;
  surface: string;
  text: string;
  muted: string;
  border: string;
  primary: string;
  accent: string;
  onAccent: string;
  error: string;
};

export const lightColors: Palette = {
  background: brand.white,
  surface: brand.light,
  text: brand.text,
  muted: '#46584F',
  border: '#697B70',
  primary: brand.green,
  accent: brand.accent,
  onAccent: '#222222',
  error: '#B3261E',
};

export const darkColors: Palette = {
  background: '#121815',
  surface: '#23312A',
  text: '#F2F5F3',
  muted: '#B4C4BA',
  border: '#81958A',
  primary: '#8FB3A3',
  accent: brand.accent,
  onAccent: '#222222',
  error: '#FFB4AB',
};
