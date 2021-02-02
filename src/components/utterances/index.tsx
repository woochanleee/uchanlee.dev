import React, { useEffect } from 'react';

const src = 'https://utteranc.es/client.js';
const branch = 'main';
const DARK_THEME = 'photon-dark';
const LIGHT_THEME = 'github-light';

interface Props {
  repo: string;
  dark: boolean;
}

export const Utterances: React.FC<Props> = ({ repo, dark }) => {
  const rootElm = React.createRef<HTMLDivElement>();

  useEffect(() => {
    const utterances = document.createElement('script');
    const utterancesConfig = {
      src,
      repo,
      branch,
      theme: dark ? DARK_THEME : LIGHT_THEME,
      label: 'comment',
      async: true,
      'issue-term': 'pathname',
      crossorigin: 'anonymous',
    };

    Object.keys(utterancesConfig).forEach((configKey) => {
      utterances.setAttribute(configKey, utterancesConfig[configKey]);
    });

    if (rootElm.current.childElementCount) {
      setTimeout(() => {
        rootElm.current.removeChild(rootElm.current.childNodes[0]);
      }, 1);
    }

    if (rootElm.current) {
      rootElm.current.appendChild(utterances);
    }
  }, [dark]);

  return <div className="utterances" ref={rootElm} />;
};
