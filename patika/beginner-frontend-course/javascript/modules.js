const name = 'John';
const surname = 'Doe';
const age = 28;

export const fullname = name + ' ' + surname;

export function sayhi() {
  console.log('Merhaba', name);
}

export default {
  name,
  surname,
  age,
}