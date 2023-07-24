import type { PlasmoCSConfig } from 'plasmo';
import { setInnerSVG } from '~utility/setInnerSVG';
import { debounce } from 'lodash-es';

export const config: PlasmoCSConfig = {
  matches: [
    '*://twitter.com/*',
    '*://*.twitter.com/*',
    '*://x.com/*',
    '*://*.x.com/*',
  ],
  all_frames: true,
  run_at: 'document_start',
};

const replaceLogo = () => {
  const targetElement = document.querySelector('h1[role=heading] svg');
  targetElement && setInnerSVG(targetElement);
};

const replaceLoadingPage = () => {
  const targetElement = document.querySelector('#placeholder svg');
  targetElement && setInnerSVG(targetElement);
};

(() => {
  let observer = null;
  const process = debounce(() => {
    observer.disconnect();

    replaceLoadingPage();
    replaceLogo();

    observer.observe(document.body, { childList: true, subtree: true });
  }, 100);
  observer = new MutationObserver(process);
  process();
})();
