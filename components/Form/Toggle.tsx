import clsx from 'clsx';

export function Toggle({ checked, onChange }: {checked: boolean; onChange: (value: boolean) => void}) {
  return (
    <label className="h-5 w-[2.375rem] inline-flex items-center gap-3 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />

      <div
        className={clsx(
          'relative h-5 w-[2.375rem] rounded-full transition-colors duration-300',
          checked ? 'bg-blue-950' : 'bg-gray-300'
        )}
      >
        <span
          className={clsx(
            'absolute top-1 w-3 h-3 rounded-full bg-white transition-transform duration-300',
            checked ? 'translate-x-5' : 'left-1'
          )}
        />
      </div>
    </label>
  );
}