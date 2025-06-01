export const formatPhone = (value) => {
  let digits = value.replace(/\D/g, '');
  if (digits.startsWith('0')) {
    digits = '84' + digits.slice(1);
  }
  if (!digits.startsWith('84')) {
    digits = '84' + digits;
  }
  const part1 = digits.slice(2, 5);
  const part2 = digits.slice(5, 8);
  const part3 = digits.slice(8, 11);
  let formatted = '+84';
  if (part1) formatted += ' ' + part1;
  if (part2) formatted += ' ' + part2;
  if (part3) formatted += ' ' + part3;
  return formatted;
};