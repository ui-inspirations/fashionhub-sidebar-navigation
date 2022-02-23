/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
|
| ...
|
*/

interface SvgIconProps {
  name: string;
  color?: string;
  prefix?: string;
  [key: string]: any;
}

export default function SvgIcon({
  name,
  color = 'currentColor',
  prefix = 'icon',
  ...props
}: SvgIconProps) {
  const symbolId = `#${prefix}-${name}`;

  return (
    <svg {...props} height="100%" width="100%" aria-hidden="true">
      <use href={symbolId} fill={color} />
    </svg>
  );
}