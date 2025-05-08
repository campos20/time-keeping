import { Col, Form, Input, Row } from "antd";
import Alert from "antd/es/alert/Alert";
import Title from "antd/es/typography/Title";
import { useState } from "react";
import { useNavigate } from "react-router";
import { ClearSaveButtons } from "../components/ClearSaveButtons";
import { TopMenu } from "../components/TopMenu";
import { appRoutes } from "../config/appRoutes";
import { UserDto } from "../model/UserDto";
import { REQUIRED_FIELD } from "../util/FormUtil";
import { LS_LOGGED_USER, LS_USERS } from "../util/LocalStorageUtil";

export const UserCreateEditPage = () => {
  const [form] = Form.useForm();

  const [errorMessage, setErrorMessage] = useState<string>();
  const navigate = useNavigate();

  const onFinish = () => {
    const values = form.getFieldsValue();

    const existingUsers = JSON.parse(localStorage.getItem(LS_USERS) || "[]");
    const userExists = existingUsers.some(
      (user: UserDto) => user.username === values.username
    );

    if (userExists) {
      setErrorMessage(
        "User with this username already exists. Please choose a different username."
      );

      return;
    }

    if (existingUsers.length >= 10) {
      setErrorMessage(
        "You can only create 10 users. Please delete an existing user to create a new one."
      );

      return;
    }

    values.hashedPassword = btoa(values.password);

    values.password = undefined;
    values.confirmPassword = undefined;

    existingUsers.push({ ...values });
    localStorage.setItem(LS_USERS, JSON.stringify(existingUsers));
    localStorage.setItem(LS_LOGGED_USER, values.username);

    form.resetFields();

    navigate(appRoutes.timeEntry);
  };

  return (
    <div>
      <TopMenu />
      <div className="px-16">
        <Title className="text-center">Create a new user</Title>

        {!!errorMessage && (
          <div className="my-8">
            <Alert
              type="error"
              message={errorMessage}
              className="text-center"
            />
          </div>
        )}

        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Row gutter={8}>
            <Col span={24} md={8}>
              <Form.Item label="Name" name="name" rules={REQUIRED_FIELD}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={24} md={8}>
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  ...REQUIRED_FIELD,
                  ({}) => ({
                    validator(_, value) {
                      if (
                        !value ||
                        value.match(/^[a-zA-Z]{1,}[a-zA-Z0-9.]{4,}$/)
                      ) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "Username must start with a letter, contain only letters and numbers, and be at least 5 characters long"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24} md={8}>
              <Form.Item label="Email" name="email" rules={REQUIRED_FIELD}>
                <Input type="email" />
              </Form.Item>
            </Col>
            <Col span={24} md={12}>
              <Form.Item
                label="Password"
                name="password"
                rules={REQUIRED_FIELD}
              >
                <Input.Password />
              </Form.Item>
            </Col>
            <Col span={24} md={12}>
              <Form.Item
                label="Confirm password"
                name="confirmPassword"
                rules={[
                  ...REQUIRED_FIELD,
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("Password and confirm password do not match")
                      );
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>
            </Col>
            <Col span={24} className="text-center mt-8">
              <ClearSaveButtons handleClear={() => form.resetFields()} />
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};
