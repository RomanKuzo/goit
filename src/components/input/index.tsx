import styled from "styled-components";

const StyledInput = styled.input`
  border: none;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
    0px 4px 24px rgba(51, 51, 51, 0.24);
  background: white;
  padding: 16px 0 16px 16px;
`;

type IProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const Input = (props: IProps) => {
  return (
    <>
      <StyledInput
        onChange={props.onChange}
        placeholder={props.placeholder ?? "Search"}
      />
    </>
  );
};

export default Input;
