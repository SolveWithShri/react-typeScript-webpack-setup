import { type NameFormProps } from '../types/NameFormProps.types';

export const NameForm = ({ defaultName, onInput, onSubmit }: NameFormProps) => {
  return (
    <>
      <div>
        <input
          placeholder='Add Name'
          value={defaultName}
          onChange={(event) => onInput(event)}
        />
        <button onClick={(event) => onSubmit(event)}>Submit</button>
      </div>
    </>
  );
};
