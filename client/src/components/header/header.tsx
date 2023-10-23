import React from 'react'
import { TeamOutlined } from '@ant-design/icons'
import { Layout, Space, Typography, Button } from 'antd'
import styles from './index.module.css'
import { CustomButton } from '../custom-button/button'

export const Header = () => {
  return (
    <Layout.Header className={ styles.header }>
      <Space>
        <TeamOutlined className={ styles.teamIcon } />
        <CustomButton type="dashed">
          <Typography.Title level={ 1 }></Typography.Title>
        </CustomButton>
      </Space>
    </Layout.Header>
  )
}
