import { Flex } from "antd";
import Sidebar from "../components/sidebar/sidebar";
import AppHeader from "../components/header/header";
import RouterComponent from "remoteApp/app";

import "./Layout.scss";
import styled from "styled-components";
import { useAntdToken } from "../customhooks/useAntdToken";
const StyledFlex = styled(Flex)<{token: any}>`
background-color: ${({ token }) => token.colorBgBase};
`
export default function Layout() {
  const token = useAntdToken();
  return (
    <StyledFlex token={token}>
      <Sidebar />
      <div className="layout">
        <AppHeader />
        <RouterComponent />
      </div>
    </StyledFlex>
  );
}
