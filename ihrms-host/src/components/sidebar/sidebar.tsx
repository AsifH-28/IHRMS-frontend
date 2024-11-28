import { useState } from "react";
import { Button, Flex, Layout, Menu, Switch, Typography } from "antd";
import {
  CollapseButtonIcon,
  UncollapseButtonIcon,
  DashboardIcon,
  HRPolicyIcon,
  IvoyantLogoWithText,
  IvoyantLogo,
  LearningHubIcon,
  PayrollInsigtsIcon,
  PerformanceReviewIcon,
  ProjectHubIcon,
  ReportIcon,
  TalentExchangeIcon,
  MoonIcon,
  IvoyantLogoWithTextDarkMode,
  PeopleIcon,
  TimeoffTrackerIcon,
  AssetsIcon,
} from "../../assets/icons/icons";
import "./sidebar.scss";
import {
  ClockCircleOutlined,
  DatabaseOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useThemeContext } from "../themecontext/ThemeContext";
import {
  StyledLogoContainerInLightTheme,
  StyledLogoContainerInDarkTheme,
  StyledDivMenuConatiner,
  StyledButton,
  StyledDivInLightTheme,
  StyledDivInDarkTheme,
  StyledButtonContainer,
  StyledTypography,
} from "./styledcomponents";
import { useAntdToken } from "../../customhooks/useAntdToken";

const { Sider } = Layout;

type Props = {};

export default function sidebar({}: Props) {
  const [collapsed, setCollapsed] = useState(false);
  const { toggleTheme, isDarkMode } = useThemeContext();
  const token = useAntdToken();
  // const { theme, toggleTheme } = useTheme();
  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };
  const MenuItems = [
    {
      key: "1",
      label: collapsed ? null : (
        <Typography className="menu-Item-label">Dashboard</Typography>
      ),
      icon: (
        <span className="menu-icon">
          <DashboardIcon />
        </span>
      ),
      title: "Dashboard",
    },
    {
      key: "2",
      label: collapsed ? null : (
        <Typography className="menu-Item-label">Time Off Tracker</Typography>
      ),
      icon: (
        <span className="menu-icon">
          {/* <TimeoffTrackerIcon /> */}
          <ClockCircleOutlined className="anticon" />
        </span>
      ),
      title: "Time Off Tracker",
    },
    {
      key: "3",
      label: collapsed ? null : (
        <Typography className="menu-Item-label">Assets</Typography>
      ),
      icon: (
        <span className="menu-icon">
          {/* <AssetsIcon /> */}
          <DatabaseOutlined className="anticon" />
        </span>
      ),
      title: "Assets",
    },
    {
      key: "4",
      label: collapsed ? null : (
        <Typography className="menu-Item-label">Performance Review</Typography>
      ),
      icon: (
        <span className="menu-icon">
          <PerformanceReviewIcon />
        </span>
      ),
      title: "Performance Review",
    },
    {
      key: "5",
      label: collapsed ? null : (
        <Typography className="menu-Item-label">Project Hub</Typography>
      ),
      icon: (
        <span className="menu-icon">
          <ProjectHubIcon />
        </span>
      ),
      title: "Project Hub",
    },
    {
      key: "6",
      label: collapsed ? null : (
        <Typography className="menu-Item-label">Talent Exchange</Typography>
      ),
      icon: (
        <span className="menu-icon">
          <TalentExchangeIcon />
        </span>
      ),
      title: "Talent Exchange",
    },
    {
      key: "7",
      label: collapsed ? null : (
        <Typography className="menu-Item-label">People</Typography>
      ),
      icon: (
        <span className="menu-icon">
          {/* <PeopleIcon /> */}
          <UserOutlined className="anticon" />
        </span>
      ),
      title: "People",
    },
    {
      key: "8",
      label: collapsed ? null : (
        <Typography className="menu-Item-label">Learning Hub</Typography>
      ),
      icon: (
        <span className="menu-icon">
          <LearningHubIcon />
        </span>
      ),
      title: "Learning Hub",
    },
    {
      key: "9",
      label: collapsed ? null : (
        <Typography className="menu-Item-label">HR Policies</Typography>
      ),
      icon: (
        <span className="menu-icon">
          <HRPolicyIcon />
        </span>
      ),
      title: "HR Policies",
    },
    {
      key: "10",
      label: collapsed ? null : (
        <Typography className="menu-Item-label">Payroll</Typography>
      ),
      icon: (
        <span className="menu-icon">
          <PayrollInsigtsIcon />
        </span>
      ),
      title: "Payroll",
    },
    {
      key: "11",
      label: collapsed ? null : (
        <Typography className="menu-Item-label">Reports</Typography>
      ),
      icon: (
        <span className="menu-icon">
          <ReportIcon />
        </span>
      ),
      title: "Reports",
    },
  ];

  return (
    <Sider
      width={"16.25rem"}
      trigger={null}
      collapsible
      collapsed={collapsed}
      collapsedWidth={"3rem"}
    >
      {collapsed ? (
        <>
          {isDarkMode ? (
            <>
              {" "}
              <StyledDivInDarkTheme token={token}>
                <IvoyantLogo />
              </StyledDivInDarkTheme>
              <StyledButtonContainer token={token}>
                <StyledButton
                  token={token}
                  icon={<UncollapseButtonIcon />}
                  onClick={handleCollapse}
                ></StyledButton>
              </StyledButtonContainer>
            </>
          ) : (
            <>
              <StyledDivInLightTheme token={token}>
                <IvoyantLogo />
              </StyledDivInLightTheme>
              <StyledButtonContainer token={token}>
                <StyledButton
                  token={token}
                  icon={<UncollapseButtonIcon />}
                  onClick={handleCollapse}
                ></StyledButton>
              </StyledButtonContainer>
            </>
          )}
        </>
      ) : (
        <>
          {isDarkMode ? (
            <StyledLogoContainerInDarkTheme token={token}>
              {isDarkMode ? (
                <IvoyantLogoWithTextDarkMode />
              ) : (
                <IvoyantLogoWithText />
              )}
              <StyledButton
                token={token}
                icon={<CollapseButtonIcon />}
                onClick={handleCollapse}
              ></StyledButton>
            </StyledLogoContainerInDarkTheme>
          ) : (
            <StyledLogoContainerInLightTheme token={token}>
              {isDarkMode ? (
                <IvoyantLogoWithTextDarkMode />
              ) : (
                <IvoyantLogoWithText />
              )}
              <StyledButton
                token={token}
                icon={<CollapseButtonIcon />}
                onClick={handleCollapse}
              ></StyledButton>
            </StyledLogoContainerInLightTheme>
          )}
        </>
      )}
      <StyledDivMenuConatiner
        token={token}
        className={collapsed ? "" : "menu-container"}
      >
        <Menu
          className={collapsed ? "Custom-menu-collapsed" : "Custom-menu"}
          items={MenuItems}
          defaultSelectedKeys={["1"]}
        />
        {!collapsed ? (
          <div className="dark-mode-toggle">
            <MoonIcon />

            <Flex gap={"2px"}>
              <StyledTypography token={token}>
                Dark mode
              </StyledTypography>
              <Typography.Text className="beta-tag">Beta</Typography.Text>
            </Flex>

            <Switch
              defaultChecked={false}
              checked={isDarkMode}
              onChange={toggleTheme}
              className="dark-mode-switch"
            />
          </div>
        ) : null}
      </StyledDivMenuConatiner>
    </Sider>
  );
}
