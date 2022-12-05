import twclsx from '@/lib/twclsx';

const CustomInput = ({
  className,
  ...rest
}: React.ComponentPropsWithoutRef<'input'>) => (
  <input
    type="text"
    className={twclsx(
      'h-11 rounded-lg bg-cyan-100/5 px-4 transition duration-300 placeholder:text-cyan-100/50 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/70',
      className,
    )}
    {...rest}
  />
);

export default CustomInput;
