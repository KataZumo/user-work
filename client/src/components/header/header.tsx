import { TeamOutlined } from "@ant-design/icons";
import { Layout, Space, Typography } from "antd";
import { Link } from "react-router-dom";
import { CustomButton } from "../custom-button/button";
import { Paths } from "../../paths";
import styles from "./index.module.css";

export const Header = () => {
  return (
    <Layout.Header className={styles.header}>
      <Space>
        <TeamOutlined className={styles.teamIcon} />
        <Link to={Paths.home}>
          <CustomButton type="text">
            <Typography.Title level={1}>Сотрудники</Typography.Title>
          </CustomButton>
        </Link>
      </Space>
      <Space>
        <Link to={Paths.register}>
          <CustomButton type="text">Зарегестрироваться</CustomButton>
        </Link>
        <Link to={Paths.login}>
          <CustomButton type="text">Войти</CustomButton>
        </Link>
      </Space>
    </Layout.Header>
  );
};
