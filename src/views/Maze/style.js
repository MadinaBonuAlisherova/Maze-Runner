import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
`;
export const Header = styled.div`
  box-shadow: var(--basic-box-shadow);
  width: 100%;
  height: var(--header-height);
  justify-content: center;
  text-align: center;
`;
export const Title = styled.span`
  height: 100px;
  line-height: 40px;
  text-align: center;
  font-size: var(--header-font-size);
`;
export const Body = styled.div`
  display: grid;
  font-size: var(--body-font-size);
`;
export const Footer = styled.div`
  font-size: var(--paragraph-font-size);
`;
