import { useContext } from 'react';
import { CounterContext } from './CounterContextProvider';

type CounterWithUseContextProps = {
  showActions: boolean;
};

export const CounterWithUseContext = ({
  showActions = true,
}: CounterWithUseContextProps) => {
  const counterContext = useContext(CounterContext);

  const increase = () => {
    counterContext?.setCount((c) => c + 10);
  };

  const decrease = () => {
    counterContext?.setCount((c) => c - 10);
  };

  return (
    <>
      <div>Count from context - {counterContext?.count}</div>
      {showActions && (
        <div>
          <button onClick={increase}>INC by 10</button>
          <button onClick={decrease}>DEC by 10</button>
        </div>
      )}
    </>
  );
};
