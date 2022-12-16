import twclsx from '@/lib/twclsx';

const CustomInput = ({
  className,
  ...rest
}: React.ComponentPropsWithoutRef<'input'>) => (
  <input
    type="text"
    className={twclsx(
      'h-11 rounded-lg bg-slate-400/30 px-4 transition duration-300 placeholder:text-slate-600',
      'ring-2 ring-transparent focus:outline-none focus-visible:outline-none focus-visible:ring-indigo-500/90',
      'dark:bg-neutral-700/30 dark:placeholder:text-neutral-500',
      className,
    )}
    {...rest}
  />
);

export default CustomInput;
