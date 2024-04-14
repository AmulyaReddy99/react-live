
import { useState } from 'react';

export default () => {
  const inputRef = React.useRef(null);
  React.useEffect(() => {
    const s = document.createElement('p');
    s.type = 'text/javascript';
    s.async = true;
    s.innerHTML = "This is output by document.write()!";
    inputRef.current.appendChild(s)
  }, []);

  return <div ref={inputRef} />
};