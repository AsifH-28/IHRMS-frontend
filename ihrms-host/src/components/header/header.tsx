import React from "react";
import { Badge, Layout } from "antd";
import "./header.scss"
import { NotificationIcon, SearchIcon } from "../../assets/icons/icons";
import { useAntdToken } from "../../customhooks/useAntdToken";

import {
  StyledHeader,
  StyledInput,
  StyledFlex,
  StyledDiv,
  StyledDivAvatarContainer,
  StyledAvatar,
} from "./styledcomponents";

const AppHeader: React.FC = () => {
  const token = useAntdToken();
  console.log(token, "token");
  return (
    <StyledHeader token={token}>
      <StyledInput placeholder="Search" suffix={<SearchIcon />} token={token} />
      <StyledFlex justify="center" align="center" gap={37}>
        <StyledDiv token={token}>
          <Badge count={4} offset={[-3, 3]}>
            <NotificationIcon />
          </Badge>
        </StyledDiv>
        <StyledDivAvatarContainer token={token}>
          <StyledAvatar size="large" src="https://i.pravatar.cc/300" />
        </StyledDivAvatarContainer>
      </StyledFlex>
    </StyledHeader>
  );
};

export default AppHeader;
