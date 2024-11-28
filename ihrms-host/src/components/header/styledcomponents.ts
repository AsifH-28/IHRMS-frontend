import { Avatar, Flex, Input } from "antd";
import { Header } from "antd/es/layout/layout";
import { styled } from "styled-components";

export const StyledHeader = styled(Header)<{ token: any }>`
  width: 100%;
  height: 3.75rem;
  display: inline-flex;
  padding: 0.6875rem 0rem 0.6875rem 1.1925rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid ${({ token }) => token.gray8};
  background: ${({ token }) => token.colorWhite};
`;

export const StyledInput = styled(Input)<{ token: any }>`
  width: 21.8rem;
  border-radius: 0;
  color: ${({ token }) => token.gray8};
  font-family: Inter, sans-serif;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;
  background: ${({ token }) => token.colorWhite};
  border-color: ${({ token }) => token.gray8};

  &:hover {
    background-color: ${({ token }) => token.colorWhite} !important;
  }

  &:focus,
  &:focus-within,
  &.ant-input:focus {
    background-color: ${({ token }) => token.colorWhite} !important;
    border-color: ${({ token }) => token.gray8} !important;
    box-shadow: none !important; /* Remove Ant Design's focus box-shadow */
  }
`;

export const StyledFlex = styled(Flex)`
  margin-right: 1.63rem;
`;
export const StyledDiv = styled.div<{ token: any }>`
  display: flex;
  width: 2.375rem;
  height: 2.375rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  border-radius: 1.3125rem;
  border: 1px solid ${({ token }) => token.colorIcon};
  background: ${({ token }) => token.colorWhite};
  box-shadow: 0px 2px 0px 0px rgba(255, 255, 255, 0.04);
`;
export const StyledDivAvatarContainer = styled.div<{ token: any }>`
  display: flex;
  width: 2.375rem;
  height: 2.375rem;
  margin-right: 1rem;
  padding: 0.18269rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 228.34256rem;
  border: 0.365px solid ${({ token }) => token.uploadBorderColor};
`;
export const StyledAvatar = styled(Avatar)`
  width: 2.00963rem;
  height: 2.00963rem;
  flex-shrink: 0;
  border-radius: 228.34256rem;
`;
