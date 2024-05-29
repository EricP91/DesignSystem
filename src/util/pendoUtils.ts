import { loadPendoScript } from '../scripts/pendo';

declare global {
  interface Window {
    pendo: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  }
}

type PendoData = Record<string, unknown>;

const MIN_SCREEN_RESOLUTION = 1920;
const MAX_RETRIES = 30;
const RESOLUTION_GUIDE_NAME = 'ScreenResolution';
const RESOLUTION_GUIDE_FLAG = 'showResolutionGuide';

export async function loadPendo(
  apiKey = 'dc62f0d4-3d0c-4a3d-5e55-90b687ad2334',
  url = 'https://cdn.pendo.io/agent/static/',
  pendoData?: PendoData,
  showScreenResolutionGuide?: boolean,
  minScreenResolution?: number
): Promise<void> {
  if (!window.pendo) {
    loadPendoScript(apiKey, url);
    initPendo(pendoData, showScreenResolutionGuide, minScreenResolution);
  }
}

function initPendo(
  pendoData?: PendoData,
  showScreenResolutionGuide?: boolean,
  minScreenResolution?: number,
  retries = 0
): Promise<unknown> {
  let reason = '';
  if (window.pendo) {
    if (pendoData) {
      window.pendo.initialize({
        ...pendoData,
        events: {
          guidesLoaded: () => {
            const showResolutionGuide = localStorage.getItem(RESOLUTION_GUIDE_FLAG);
            const minScreenResolutionValue = minScreenResolution || MIN_SCREEN_RESOLUTION;
            const shouldShowScreenResolutionGuide =
              showScreenResolutionGuide &&
              window.screen.width < minScreenResolutionValue &&
              showResolutionGuide !== 'false';
            if (shouldShowScreenResolutionGuide) {
              window.pendo.showGuideByName(RESOLUTION_GUIDE_NAME);
              localStorage.setItem(RESOLUTION_GUIDE_FLAG, 'false');
            }
          },
        },
      });
      return Promise.resolve(true);
    }

    let newPendoData: PendoData | undefined;
    try {
      newPendoData = JSON.parse(localStorage.getItem('pendoDetails') as string);
    } catch {
      newPendoData = undefined;
    }

    if (newPendoData) {
      initPendo(newPendoData, showScreenResolutionGuide, minScreenResolution, retries);
      return Promise.resolve();
    }
    reason = 'no data to init pendo with.';
  } else {
    reason = 'pendo not loaded.';
  }

  return new Promise((resolve) => {
    if (retries < MAX_RETRIES) {
      setTimeout(() => {
        resolve(initPendo(pendoData, showScreenResolutionGuide, minScreenResolution, retries + 1));
      }, 300);
    } else {
      console.error(new Error(`Could not initiate Pendo: ${reason}`)); // eslint-disable-line no-console
      resolve(undefined);
    }
  });
}
