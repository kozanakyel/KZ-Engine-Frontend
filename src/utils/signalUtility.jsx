export function signalStickTemplate(str, background) {
  return (
    <>
      <ul>
        <li className={'list-group-item bg-' + background + ' text-light'}>
          {str}
        </li>
      </ul>
    </>
  );
}

export function regexCandleStick(str) {
  if (str.startsWith('NO')) return signalStickTemplate(str, 'info');
  else if (str.endsWith('Bear')) {
    const resulStr = 'Bearish - ' + str.slice(3, -5);
    return signalStickTemplate(resulStr, 'danger');
  } else if (str.endsWith('Bull')) {
    const resulStr = 'Bullish - ' + str.slice(3, -5);
    return signalStickTemplate(resulStr, 'success');
  }
}

export function capitilaze(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
