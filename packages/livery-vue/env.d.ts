/// <reference types="vite/client" />

declare const __DEV__: boolean

declare module "*.css?inline" {
  const content: string;
  export default content;
}
