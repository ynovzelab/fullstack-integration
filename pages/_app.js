import '../styles/style.scss'
import Dashboardlayout from '../layouts/DashboardLayout';

function MyApp({ Component, pageProps }) {
  return (
    <Dashboardlayout>
      <Component {...pageProps} />
    </Dashboardlayout>
  )
}

export default MyApp
