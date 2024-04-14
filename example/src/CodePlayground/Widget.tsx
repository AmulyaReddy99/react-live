import * as React from 'react';

type WidgetProps = JSX.IntrinsicElements['widget'] & {
  backgroundColor?: string;
  children?: React.ReactNode;
};

function Widget(
  { backgroundColor, children, ...props }: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  return (<></>);
}

export default React.forwardRef(Widget);
