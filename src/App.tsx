import {
  useRoutes,
  BrowserRouter
} from 'react-router-dom'
import { ConfigProvider } from 'antd'
import zh_CN from 'antd/es/locale/zh_CN'
import NotFound from './views/notFound/notFound'
import Layouts from './views/layouts/layouts'
import Home from './views/home'

const Routes = () => {
  let routes = useRoutes([
    {
      path: '/',
      element: <Layouts />,
      children: [
        {
          path: '/',
          element: <Home />
        }
      ]
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])
  return routes
}

const App = () => {
  return (
    <ConfigProvider
      locale={zh_CN}
    >
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App