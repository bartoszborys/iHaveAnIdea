import { Languages } from './languages.constant';
import { AvailableLanguage } from '../interfaces/available-language.interface';

const availableLanguages: AvailableLanguage[] = [
  {
    description: "English",
    value: Languages.English,
    miniature: Languages.English.toUpperCase(),
  },
  {
    description: "Polski",
    value: Languages.Polish,
    miniature: Languages.Polish.toUpperCase(),
  }
];

export { availableLanguages };