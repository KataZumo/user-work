import React from "react";
import { Layout } from "../../components/layout/layout";
import { Card, Form, Input, Row, Space, Typography } from "antd";
import { CustomInput } from "../../components/custom-input/input";
import { PasswordInput } from "../../components/custom-password-input/passwordInput";
import { CustomButton } from "../../components/custom-button/button";
import { Link } from "react-router-dom";
import { Paths } from "../../paths";

export const Register = () => {
  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title="Зарегистрируйтесь" style={{ width: "30rem" }}>
          <Form onFinish={() => null}>
            <CustomInput name="name" placeholder="Имя" />
            <CustomInput type="email" name="emal" placeholder="Email" />
            <PasswordInput name="password" placeholder="Пароль" />
            <PasswordInput name="confirm" placeholder="Повторите пароль" />
            <CustomButton type="primary" htmlType="submit">
            Зарегистрироваться
            </CustomButton>
          </Form>
          <Space direction="vertical" size="large" />
          <Typography.Text>
            Уже зарегистрированы? <Link to={Paths.login}>Войдите</Link>
          </Typography.Text>
        </Card>
      </Row>
    </Layout>
  );
};
