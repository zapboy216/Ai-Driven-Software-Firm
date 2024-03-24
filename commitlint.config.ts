import type { UserConfig } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-empty': [0, 'never'],
    'subject-full-stop': [0, 'never', ''],
    'type-empty': [0, 'never'],
  },
};

export default Configuration;
