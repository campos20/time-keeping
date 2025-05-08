import { Button, Col, Menu, Row } from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { appRoutes } from "../config/appRoutes";
import { UserDto } from "../model/UserDto";
import { LS_LOGGED_USER, LS_USERS } from "../util/LocalStorageUtil";

export const TopMenu = () => {
  const [loggedUser, setLoggedUser] = useState<UserDto>();

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem(LS_LOGGED_USER);

    navigate(appRoutes.root);
  };

  useEffect(() => {
    const loggedUserName = JSON.parse(
      localStorage.getItem(LS_LOGGED_USER) || ""
    );
    const users: UserDto[] = JSON.parse(localStorage.getItem(LS_USERS) || "[]");

    const loggedUser = users.find(
      (u: UserDto) => u.username === loggedUserName
    );

    if (loggedUser) {
      setLoggedUser(loggedUser);
    }
  }, []);

  return (
    <Row>
      <Col flex={1}>
        <Menu mode="horizontal">
          <Menu.Item key="home">
            <Link to={appRoutes.root}>Home</Link>
          </Menu.Item>
          <Menu.Item key="time-entry">
            <Link to={appRoutes.timeEntry}>Time Entry</Link>
          </Menu.Item>
        </Menu>
      </Col>
      {!!loggedUser && (
        <Menu mode="horizontal" selectedKeys={[]}>
          <Menu.Item key="home">{loggedUser.username}</Menu.Item>
          <Menu.Item key="time-entry">
            <Button type="link" onClick={handleLogout}>
              Logout
            </Button>
          </Menu.Item>
        </Menu>
      )}
    </Row>
  );
};
