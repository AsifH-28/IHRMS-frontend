import { theme } from "antd";

export const useAntdToken = () => {
  const { token } = theme.useToken();
  return token;
};
