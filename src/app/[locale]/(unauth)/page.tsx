import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import Hero from '@/components/Hero';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Profile from '@/components/ui/Profile';

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
  const t = useTranslations('Index');

  return (
    <>
      <Hero
        title="We are Here"
        description="A Software Development Firm"
        imageUrl={t('imageUrl')}
      />

      <div className="container">
        <div className="flex flex-wrap pl-20">
          <div className="mb-1 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
            <Card>
              <CardHeader>
                <CardTitle>{t('cards.card_title_1')}</CardTitle>
                <CardDescription>
                  {t('cards.card_description_1')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{t('cards.card_content_1')}</p>
              </CardContent>
              <CardFooter>
                <p>{t('cards.card_footer_1')}</p>
              </CardFooter>
            </Card>
          </div>
          <div className=" w-full sm:w-1/2 md:w-1/3">
            <Card>
              <CardHeader>
                <CardTitle>{t('cards.card_title_2')}</CardTitle>
                <CardDescription>
                  {t('cards.card_description_2')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{t('cards.card_content_2')}</p>
              </CardContent>
              <CardFooter>
                <p>{t('cards.card_footer_2')}</p>
              </CardFooter>
            </Card>
          </div>
          <div className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
            <Card>
              <CardHeader>
                <CardTitle>{t('cards.card_title_3')}</CardTitle>
                <CardDescription>
                  {t('cards.card_description_3')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{t('cards.card_content_3')}</p>
              </CardContent>
              <CardFooter>
                <p>{t('cards.card_footer_3')}</p>
              </CardFooter>
            </Card>
          </div>
          <div className=" w-full sm:w-1/2 md:w-1/3">
            <Card>
              <CardHeader>
                <CardTitle>{t('cards.card_title_4')}</CardTitle>
                <CardDescription>
                  {t('cards.card_description_4')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{t('cards.card_content_4')}</p>
              </CardContent>
              <CardFooter>
                <p>{t('cards.card_footer_4')}</p>
              </CardFooter>
            </Card>
          </div>
          <div className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6">
            <Card>
              <CardHeader>
                <CardTitle>{t('cards.card_title_5')}</CardTitle>
                <CardDescription>
                  {t('cards.card_description_5')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{t('cards.card_content_5')}</p>
              </CardContent>
              <CardFooter>
                <p>{t('cards.card_footer_5')}</p>
              </CardFooter>
            </Card>
          </div>
          <div className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6">
            <Card>
              <CardHeader>
                <CardTitle>{t('cards.card_title_6')}</CardTitle>
                <CardDescription>
                  {t('cards.card_description_6')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{t('cards.card_content_6')}</p>
              </CardContent>
              <CardFooter>
                <p>{t('cards.card_footer_6')}</p>
              </CardFooter>
            </Card>
          </div>
          <div className=" w-full sm:w-1/2 md:w-1/3">
            <Card>
              <CardHeader>
                <CardTitle>{t('cards.card_title_6')}</CardTitle>
                <CardDescription>
                  {t('cards.card_description_6')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{t('cards.card_content_6')}</p>
              </CardContent>
              <CardFooter>
                <p>{t('cards.card_footer_6')}</p>
              </CardFooter>
            </Card>
          </div>
          <div className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6">
            <Card>
              <CardHeader>
                <CardTitle>{t('cards.card_title_6')}</CardTitle>
                <CardDescription>
                  {t('cards.card_description_6')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{t('cards.card_content_6')}</p>
              </CardContent>
              <CardFooter>
                <p>{t('cards.card_footer_6')}</p>
              </CardFooter>
            </Card>
          </div>
          <div className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6">
            <Card>
              <CardHeader>
                <CardTitle>{t('cards.card_title_6')}</CardTitle>
                <CardDescription>
                  {t('cards.card_description_6')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{t('cards.card_content_6')}</p>
              </CardContent>
              <CardFooter>
                <p>{t('cards.card_footer_6')}</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      <Profile />
    </>
  );
}
