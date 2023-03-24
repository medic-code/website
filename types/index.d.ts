export {};

declare global {
  interface Window {
    gtag: (config, action, params) => void;
  }
}
