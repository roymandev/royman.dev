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
          'rounded-lg px-3 py-1 capitalize transition-colors disabled:bg-transparent disabled:text-cyan-100/50',
          selectedItems.includes(item)
            ? 'bg-cyan-100/90 text-zinc-900'
            : 'bg-cyan-100/5 hover:bg-cyan-100/10',
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
