import { createContext, useState } from 'react';

type CounterContextType = {
  count: number | null;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

export const CounterContext = createContext<CounterContextType | null>(null);

type CounterContextProviderProps = {
  children: React.ReactNode;
};

export const CounterContextProvider = ({
  children,
}: CounterContextProviderProps) => {
  const [count, setCount] = useState<number>(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};
