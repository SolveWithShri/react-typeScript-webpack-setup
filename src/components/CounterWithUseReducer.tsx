import { useReducer, useState } from 'react';

const enum COUNTER_ACTION_TYPE {
  INCREASE = 'increase',
  DECREASE = 'decrease',
}

type CounterState = {
  count: number;
};

type CounterAction = {
  type: COUNTER_ACTION_TYPE;
  payload: number;
};

const initialState: CounterState = {
  count: 0,
};

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action?.type) {
    case COUNTER_ACTION_TYPE.INCREASE:
      return { count: state?.count + action.payload };
    case COUNTER_ACTION_TYPE.DECREASE:
      return { count: state?.count - action.payload };
    default:
      return state;
  }
};

export const CounterWithUseReducer = () => {
  const [count, setCount] = useState<number>(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  const increase = () => {
    setCount((c) => c + 10);
    dispatch({ type: COUNTER_ACTION_TYPE.INCREASE, payload: 10 });
  };

  const decrease = () => {
    setCount((c) => c - 10);
    dispatch({ type: COUNTER_ACTION_TYPE.DECREASE, payload: 10 });
  };

  return (
    <>
      <div>Count - {count}</div>
      <div>Count with useReducer - {state?.count}</div>
      <div>
        <button onClick={increase}>INC by 10</button>
        <button onClick={decrease}>DEC by 10</button>
      </div>
    </>
  );
};
