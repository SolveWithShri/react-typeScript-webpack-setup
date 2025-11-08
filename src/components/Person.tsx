export type Name = {
  firstName: string;
  lastName: string;
};
export type PersonProps = {
  name: Name;
};

export const Person = (props: PersonProps) => {
  return (
    <>
      <div>
        {props?.name?.firstName} {props?.name?.lastName}
      </div>
    </>
  );
};
