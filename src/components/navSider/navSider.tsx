import { Layout } from 'antd'
import CcMenus from '../menus'
import { menuData } from '../../config'

const { Sider } = Layout

interface Props {
  collapsed: boolean
}

const NavSider = (props: Props) => {

  return (
    <Sider style={{ height: '100%', background: '#fff' }} trigger={null} collapsible collapsed={props.collapsed}>
      <CcMenus data={menuData} theme="light" mode="inline"></CcMenus>
    </Sider>
  )
}

export default NavSider
