/// <reference types="react" />
declare module "Button/Button" {
    import * as React from 'react';
    const _default: React.ForwardRefExoticComponent<Omit<React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement> & {
        backgroundColor?: string | undefined;
        children?: React.ReactNode;
    }, "ref"> & React.RefAttributes<HTMLButtonElement>>;
    export default _default;
}
declare module "Input/Input" {
    import * as React from 'react';
    const _default_1: React.ForwardRefExoticComponent<Omit<React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement> & {
        error?: string | undefined;
        label?: string | undefined;
    }, "ref"> & React.RefAttributes<HTMLInputElement>>;
    export default _default_1;
}
/// <amd-module name="example-library" />
declare module "example-library" {
    export { default as Button } from "Button/Button";
    export { default as Input } from "Input/Input";
}
