import './styles.css';

import IMAGE from '../assets/React.png';
import IMAGE_SVG from '../assets/React.svg';
import { ClickCounter } from './components/Counter';
import { Person, PersonProps } from './components/Person';
import { NameForm } from './components/NameForm';
import { useState } from 'react';
import { CounterWithUseReducer } from './components/CounterWithUseReducer';
import { CounterContextProvider } from './components/CounterWithContext/CounterContextProvider';
import { CounterWithUseContext } from './components/CounterWithContext/CounterUseContext';
import DomRef from './components/Ref/DomRef';
import MutableRef from './components/Ref/MutableRef';

export const App = () => {
  const person: PersonProps = {
    name: {
      firstName: 'Shrikant',
      lastName: 'Adhav',
    },
  };

  const submitButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('submitButtonHandler - event - ', event);
  };

  const [defaultName, setDefaultName] = useState('Shri');
  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('inputChangeHandler - event - ', event.target.value);
    setDefaultName(event.target.value);
  };

  return (
    <>
      <h1>HI -- </h1>
      <img src={IMAGE} alt='React Logo' width={100} height={100} />
      <br />
      <hr />
      <img src={IMAGE_SVG} alt='React Logo' width={100} height={100} />

      <br />
      <hr />
      <h3>Environment variables example:</h3>
      <div>
        <h1>process.env.name: {process.env.name}</h1>
        <h1>process.env.NODE_ENV: {process.env.NODE_ENV}</h1>
      </div>

      <br />
      <hr />
      <h3>ClickCounter example:</h3>
      <ClickCounter count={150} styles={{ color: 'red' }} />

      <br />
      <hr />
      <h3>Person example: (Typescript)</h3>
      <Person {...person} />

      <br />
      <hr />
      <h3>NameForm example: (Typescript)</h3>
      <NameForm
        defaultName={defaultName}
        onSubmit={submitButtonHandler}
        onInput={inputChangeHandler}
      />

      <br />
      <hr />
      <h3>CounterWithUseReducer example:</h3>
      <CounterWithUseReducer />

      <br />
      <hr />
      <h3>CounterContextProvider example:</h3>
      <CounterContextProvider>
        <CounterWithUseContext showActions={false} />
        <br />
        <CounterWithUseContext showActions={true} />
      </CounterContextProvider>

      <br />
      <hr />
      <h3>DomRef example:</h3>
      <DomRef />

      <br />
      <hr />
      <h3>MutableRef example:</h3>
      <MutableRef />
    </>
  );
};
