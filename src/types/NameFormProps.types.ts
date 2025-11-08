export type NameFormProps = {
  defaultName: string;
  onInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
