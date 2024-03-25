import { getTranslations } from 'next-intl/server';

import { Sponsors } from '@/components/Sponsors';
import Hero from '@/components/ui/Hero';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Index() {
  return (
    <>
      <Hero />

      <Sponsors />
    </>
  );
}
