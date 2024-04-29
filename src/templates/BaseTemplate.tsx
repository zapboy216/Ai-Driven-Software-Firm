// BaseTemplate.tsx
import { useTranslations } from 'next-intl';

import { Navbar } from '@/components/component/navbar';

const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations('BaseTemplate');

  return (
    <>
      <Navbar />

      <main>{props.children}</main>
    </>
  );
};

export { BaseTemplate };
