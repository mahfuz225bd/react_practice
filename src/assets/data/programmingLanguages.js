const PROGRAMMING_LANGUAGES = [
  'C',
  'C++',
  'C#',
  'Python',
  'Go',
  'Java',
  'Javascript',
  'PHP',
  'Swift',
  'Kotlin',
];

const data = [
  {
    label: '(Select a Programming Language)',
    value: '',
  },
];

for (let i = 0; i < PROGRAMMING_LANGUAGES.length; i++) {
  const element = PROGRAMMING_LANGUAGES[i];
  data.push({
    label: element,
    value: element,
  });
}

export default data;
