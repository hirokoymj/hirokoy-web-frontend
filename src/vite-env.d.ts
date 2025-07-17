/// <reference types="vite/client" />
declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_GOOGLE_MAP_API_KEY: string;
  }
}
