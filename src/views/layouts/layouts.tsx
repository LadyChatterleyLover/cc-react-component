import { useState } from 'react'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'

import NavHeader from '../../components/navHeader/navHeader'
import NavSider from '../../components/navSider/navSider'


const { Header, Sider, Content } = Layout

const Layouts = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const toggle = () => {
    setCollapsed(!collapsed)
  }
  const find = (data: any[], key: string) => {
    let current: any = null
    data.map(item => {
      if (item.key === key) current = item
      else {
        if (item.children && item.children) {
          if (find(item.children, key)) current = find(item.children, key)
        }
      }
    })
    return current
  }
  return (
    <Layout>
      <NavSider collapsed={collapsed}></NavSider>
      <Layout >
        <Header
          style={{
            padding: '0 20px',
            background: '#fff',
          }}>
          <NavHeader collapsed={collapsed} toggle={toggle}></NavHeader>
        </Header>
        <Content
          style={{
            background: '#fafafa',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default Layouts
