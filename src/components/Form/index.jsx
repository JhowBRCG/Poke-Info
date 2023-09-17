import { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <StyledForm action="" onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Search Pokemon"
        onChange={(e) => setSearch(e.target.value.trim())}
        value={search}
      />
      <Button>GO</Button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  position: relative;
  width: fit-content;
`;

const Input = styled.input`
  border: 3px solid ${({ theme }) => theme.colors.secondaryColor};
  border-radius: ${({ theme }) => theme.radius.default};
  color: ${({ theme }) => theme.colors.secondaryColor};
  padding: 20px 35px;
  width: 100%;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.secondaryColor};
  position: absolute;
  top: 3px;
  right: 2px;
  height: 90%;
  width: 15%;
  border-radius: 10px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

export { Form };
