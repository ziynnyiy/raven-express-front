import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  th {
    text-align: left;
    color: #ccc;
    font-weight: 500;
    font-size: 0.7rem;
  }
  td {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export default function Table(props) {
  return <StyledTable {...props} />;
}
