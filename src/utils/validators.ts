export const requiredField = [
  (value: string): string | boolean => {
    if (value) return true;
    return 'Field is required.';
  },
];
