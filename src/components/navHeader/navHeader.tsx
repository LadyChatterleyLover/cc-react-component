import { Layout } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons'

const { Header } = Layout


interface Props {
  collapsed: boolean,
  toggle: () => void
}

const NavHeader = (props: Props) => {
  const { collapsed, toggle } = props

  return (
    <Header style={{ padding: '0 20px', background: '#fff', display: 'flex', justifyContent: 'space-between' }}>
      <div onClick={toggle}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
    </Header>
  )
}

export default NavHeader
