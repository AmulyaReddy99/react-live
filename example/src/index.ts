/// <amd-module name="example-library"/>

// The above allows the TS compiler to genreate a bundle of types for the library.
// https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-amd-module-

export { default as Widget } from './CodePlayground/Widget';
