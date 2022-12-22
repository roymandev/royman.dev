import twclsx from '@/lib/twclsx';

export interface PillsCheckboxProps<ItemType> {
  items: ItemType[];
  selectedItems: ItemType[];
  onChange: (items: ItemType[]) => void;
  className?: string;
  activeItems?: ItemType[];
}

const PillsCheckbox = <ItemType extends string>({
  items,
  selectedItems,
  onChange,
  className,
  activeItems,
}: PillsCheckboxProps<ItemType>) => (
  <div className={twclsx('flex flex-wrap gap-1 text-sm', className)}>
    {items.map((item) => (
      <button
        key={item}
        className={twclsx(
          'rounded-lg bg-slate-400/30 px-3 py-1 capitalize',
          'dark:bg-neutral-700/30 dark:disabled:text-neutral-600',
          'ring-2 ring-transparent focus:outline-none focus-visible:outline-none focus-visible:ring-indigo-500/90',
          'disabled:bg-transparent disabled:text-slate-600 dark:disabled:bg-transparent',
          selectedItems.includes(item)
            ? 'bg-slate-700 text-slate-100 dark:bg-neutral-300 dark:text-neutral-900'
            : 'hover:bg-slate-400 dark:hover:bg-neutral-700',
        )}
        disabled={activeItems && !activeItems.includes(item)}
        onClick={() => {
          if (selectedItems.includes(item)) {
            onChange(
              selectedItems.filter((selectedItem) => selectedItem !== item),
            );
          } else {
            onChange([...selectedItems, item]);
          }
        }}
      >
        {item}
      </button>
    ))}
  </div>
);

export default PillsCheckbox;
