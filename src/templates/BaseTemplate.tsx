'use client';

import '@copilotkit/react-ui/styles.css';

import { CopilotKit } from '@copilotkit/react-core';
import { CopilotPopup } from '@copilotkit/react-ui';
import { useTranslations } from 'next-intl';

import { AppConfig } from '@/utils/AppConfig';

const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations('BaseTemplate');

  return (
    <div className="w-full px-20 py-10 text-gray-700 antialiased">
      <CopilotKit url="/api/copilotkit/">
        <div className="mx-auto max-w-screen-md lg:max-w-full">
          <header className="border-b border-gray-300 px-10">
            <div className="pt-8">
              <h1 className="text-3xl font-bold text-gray-900">
                {AppConfig.name}
              </h1>
              <h2 className="text-xl">{t('description')}</h2>
            </div>

            <div className="flex justify-between px-10">
              <nav>
                <ul className="flex flex-wrap gap-x-3 text-xl">
                  {props.leftNav}
                </ul>
              </nav>

              <nav>
                <ul className="flex flex-wrap gap-x-3 text-xl">
                  {props.rightNav}
                </ul>
              </nav>
            </div>
          </header>

          <main>{props.children}</main>
        </div>
        <CopilotPopup
          instructions={
            'Help the user manage a todo list. If the user provides a high level goal, ' +
            'break it down into a few specific tasks and add them to the list'
          }
          defaultOpen
          labels={{
            title: 'AI Copilot',
            initial: 'Hi you! 👋 I can help you manage your life.',
          }}
          clickOutsideToClose={false}
        />
      </CopilotKit>
    </div>
  );
};

export { BaseTemplate };
