import { getTranslations } from 'next-intl/server';

import { Sponsors } from '@/components/Sponsors';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
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
      <Card>
        <CardHeader>
          <CardTitle>I have a card title here</CardTitle>
          <CardDescription>
            and a Card Description should really go here
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content can go here </p>
        </CardContent>
        <CardFooter>
          <p>Card Footer can go here</p>
        </CardFooter>
      </Card>

      <h1>Hello World</h1>
      <Sponsors />
    </>
  );
}
