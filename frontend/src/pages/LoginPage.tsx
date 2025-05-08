import { Alert, Button, Form, Input } from "antd";
import Title from "antd/es/typography/Title";
import { useNavigate } from "react-router";
import { appRoutes } from "../config/appRoutes";
import { UserDto } from "../model/UserDto";
import { REQUIRED_FIELD } from "../util/FormUtil";
import { LS_LOGGED_USER, LS_USERS } from "../util/LocalStorageUtil";
import { useState } from "react";

export const LoginPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  const onFinish = () => {
    const { username, password } = form.getFieldsValue();

    const hashedPassword = btoa(password);
    const users = JSON.parse(localStorage.getItem(LS_USERS) || "[]");

    const user = users.find(
      (user: UserDto) =>
        user.username === username && user.hashedPassword === hashedPassword
    );

    if (user) {
      localStorage.setItem(LS_LOGGED_USER, JSON.stringify(user.username));

      navigate(appRoutes.timeEntry);
    } else {
      setErrorMessage("Username or password is incorrect");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded shadow-md w-full max-w-md">
        <Title level={2} className="text-center mb-4">
          Login
        </Title>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item label="Username" name="username" rules={REQUIRED_FIELD}>
            <Input placeholder="Digite seu usuário" />
          </Form.Item>
          <Form.Item label="Senha" name="password" rules={REQUIRED_FIELD}>
            <Input.Password placeholder="Digite sua senha" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>
          <Form.Item>
            <Button
              type="default"
              block
              onClick={() => navigate(appRoutes.usersNew)}
            >
              Create Account
            </Button>
          </Form.Item>
        </Form>
        {errorMessage && (
          <Alert
            message={errorMessage}
            type="error"
            showIcon
            className="mt-4"
          />
        )}
      </div>
    </div>
  );
};
