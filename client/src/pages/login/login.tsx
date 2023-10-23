import React from "react";
import { Layout } from "../../components/layout/layout";
import { Card, Form, Input, Row, Space, Typography } from "antd";
import { CustomInput } from "../../components/custom-input/input";
import { PasswordInput } from "../../components/custom-password-input/passwordInput";
import { CustomButton } from "../../components/custom-button/button";
import { Link } from "react-router-dom";
import { Paths } from "../../paths";

export const Login = () => {
  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title="Войдите" style={{ width: "30rem" }}>
          <Form onFinish={() => null}>
            <CustomInput type="email" name="emal" placeholder="Email" />
            <PasswordInput name="password" placeholder="password" />
            <CustomButton type="primary" htmlType="submit">
              Войти
            </CustomButton>
          </Form>
          <Space direction="vertical" size="large" />
          <Typography.Text>
            Нет аккаунта? <Link to={Paths.register}>Зарегистрируйтесь</Link>
          </Typography.Text>
        </Card>
      </Row>
    </Layout>
  );
};
