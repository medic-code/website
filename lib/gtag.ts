export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID;

export const pageview = (url: string) => {
  window.gtag('config', process.env.NEXT_PUBLIC_ANALYTICS_ID, {
    page_path: url,
  });
};

// log specific events happening.
export const event = (action: string, params: string) => {
  window.gtag('event', action, params);
};
