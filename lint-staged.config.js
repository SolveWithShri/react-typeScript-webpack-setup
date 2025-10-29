export default {
  'src/**/*.{js,jsx,ts,tsx,json}': [
    'npm run prettier:fix',
    'npm run eslint:fix',
  ],
  // '*.{css,scss}': 'stylelint --fix',
  // '*.{ts,tsx}': ['prettier --write', 'eslint --fix'],
};
