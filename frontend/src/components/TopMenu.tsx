import { Link } from "react-router";
import { appRoutes } from "../config/appRoutes";
import { Menu } from "antd";

export const TopMenu = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home">
        <Link to={appRoutes.root}>Home</Link>
      </Menu.Item>
      <Menu.Item key="time-entry">
        <Link to={appRoutes.timeEntry}>Time Entry</Link>
      </Menu.Item>
    </Menu>
  );
};
