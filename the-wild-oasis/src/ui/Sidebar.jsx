import styled from "styled-components";

const StyledSidebar = styled.header`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;
`;

function Sidebar() {
  return <StyledSidebar>sidebar</StyledSidebar>;
}

export default Sidebar;
