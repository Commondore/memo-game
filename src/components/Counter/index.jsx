import { memo } from 'react';

const Counter = ({ count, children }) => {
  return (
    <h4>
      {children} {count}
    </h4>
  );
};

export default memo(Counter);
