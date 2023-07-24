import Icon from '@mdi/react';

export function MdiIcon({
  path,
  color,
}: {
  path: string;
  color?: string;
}): JSX.Element {
  return (
    <span className='icon'>
      <Icon path={path} color={color ? color : ''} />
      &nbsp;
    </span>
  );
}
