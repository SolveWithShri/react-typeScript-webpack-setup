import { useState } from 'react';

// interface ClickCounterProps {
//   count: number;
// }

type ClickCounterProps = {
  count: number;
  styles?: React.CSSProperties;
};

export const ClickCounter = (props: ClickCounterProps) => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        Count: {count}
      </button>
      <div style={props?.styles}>props.count -{props.count}</div>
    </>
  );
};
