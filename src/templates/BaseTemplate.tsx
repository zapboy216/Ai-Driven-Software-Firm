// BaseTemplate.tsx
import { useTranslations } from 'next-intl';

import { NavBarFour } from '@/components/component/nav-bar-four';

const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations('BaseTemplate');

  return (
    <>
      <NavBarFour />

      <main>{props.children}</main>
    </>
  );
};

export { BaseTemplate };
