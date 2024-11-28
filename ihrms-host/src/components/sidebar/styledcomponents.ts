import { Button, Menu, Typography } from "antd";
import { styled } from "styled-components";

export const StyledDivInLightTheme = styled.div<{ token: any }>`
  width: 100%;
  height: 3.75rem;
  padding-bottom: 1.5rem;
  display: grid;
  align-content: center;
  border-right: 1px solid var(--Colors-Neutral-Border-colorSplit);
  border-bottom: 1px solid var(--Colors-Neutral-Border-colorSplit);
  background: linear-gradient(90deg, #E8F5FE 0%, #D9E6FB 100%)
`;
export const StyledDivInDarkTheme = styled.div<{ token: any }>`
  width: 100%;
  height: 3.75rem;
  padding-bottom: 1.5rem;
  display: grid;
  align-content: center;
  border-right: 1px solid var(--Colors-Neutral-Border-colorSplit);
  border-bottom: 1px solid var(--Colors-Neutral-Border-colorSplit);
  background: linear-gradient(90deg, #27282E 0%, #27282E 100%)
`;
export const StyledLogoContainerInLightTheme = styled.div<{ token: any }>`
width: 16.25rem;
  display: flex;
  padding-right: 0.625rem;
  align-items: center;
  gap: 4.0625rem;
 background: linear-gradient(90deg, #E8F5FE 0%, #D9E6FB 100%)`

 export const StyledLogoContainerInDarkTheme = styled.div<{ token: any }>`
width: 16.25rem;
  display: flex;
  padding-right: 0.625rem;
  align-items: center;
  gap: 4.0625rem;
 background: linear-gradient(90deg, #27282E 0%, #27282E 100%)`

 export const StyledDivMenuConatiner = styled.div<{ token: any,collapsed?:boolean }>`
  display: flex;
  width: ${({ collapsed })=>collapsed ? 'auto' : '16.25rem'}
  height: 120.3125rem;
  flex-direction: column;
  bottom: 0rem;
  border-right: 1px solid ${({ token }) => token.colorSplit};
  border-radius: 0rem 0rem 0.8125rem 0.8125rem;
  background: ${({ token }) => token.colorBgElevated};
  box-shadow:
    0px 20px 24px -4px rgba(45, 54, 67, 0.04),
    0px 8px 11px -4px rgba(45, 54, 67, 0.04);`

export const StyledButton = styled(Button)<{token: any}>`
  display: flex;
    padding: 0.48388rem;
    justify-content: center;
    align-items: center;
    gap: 0.48388rem;
    border: none !important;
    border-radius: 0.09675rem;
    background: ${({ token }) => token.colorWhite};
`

export const StyledButtonIndarkTheme = styled(Button)<{token: any}>`
  display: flex;
    padding: 0.48388rem;
    justify-content: center;
    align-items: center;
    gap: 0.48388rem;
    border: none !important;
    border-radius: 0.09675rem;
    background: ${({ token }) => token.colorWhite};
`

export const StyledButtonContainer = styled.div<{ token: any }>`
  display: flex;
  padding: 0.48388rem;
  justify-content: center;
  align-items: center;
  gap: 0.48388rem;
  background: ${({ token }) => token.colorBgElevated};
  border-right: 1px solid ${({ token }) => token.colorSplit};
`
export const StyledTypography = styled(Typography.Text)<{ token: any }>`
color: ${({ token }) => token.colorTextHeading};
    font-family: Inter,sans-serif;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`