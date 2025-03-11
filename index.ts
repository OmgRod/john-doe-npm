import fs from 'fs';
import path from 'path';

const readJsonFile = (fileName: string): any[] => {
  const filePath = path.join(process.cwd(), 'info', 'names', fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent);
};

const maleFirstNames: string[] = readJsonFile('male.json');
const femaleFirstNames: string[] = readJsonFile('female.json');
const unisexFirstNames: string[] = readJsonFile('unisex.json');
const lastNames: string[] = readJsonFile('last.json');

const NameType = {
  Male: 'Male',
  Female: 'Female',
  Unisex: 'Unisex'
} as const;

type NameType = (typeof NameType)[keyof typeof NameType];

class Name {
  static generateRandom(type: NameType, namePart: number): string {
    let firstName: string;
    let lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

    switch (type) {
      case 'Male':
        firstName = maleFirstNames[Math.floor(Math.random() * maleFirstNames.length)];
        break;
      case 'Female':
        firstName = femaleFirstNames[Math.floor(Math.random() * femaleFirstNames.length)];
        break;
      case 'Unisex':
        firstName = unisexFirstNames[Math.floor(Math.random() * unisexFirstNames.length)];
        break;
      default:
        throw new Error('Invalid NameType');
    }

    if (namePart === 0) {
      return firstName;
    } else if (namePart === 1) {
      return lastName;
    } else if (namePart === 2) {
      return `${firstName} ${lastName}`;
    } else {
      throw new Error('Invalid namePart value');
    }
  }
}

export { Name, NameType };
