import { cn } from '@/core/utils';
import { forwardRef } from 'react';

const TextFormInput = forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithRef<'input'>
>(function TextFormInput({ className, ...props }, ref) {
  return (
    <input
      {...props}
      ref={ref}
      className={cn(
        className,
        'rounded-md p-2 placeholder:text-slate-400 focus:outline-2 focus:outline-rose-500 bg-white',
      )}
    />
  );
});

export default TextFormInput;
