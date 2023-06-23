import { useState } from 'react'
import LandingPage from '../LandingPage/LandingPage'
import NewOrderPage from '../NewOrderPage/NewOrderPage'
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage'
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy'
import { Routes, Route } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import styles from './App.module.scss'
import { Helmet } from 'react-helmet'

function App () {
  const [user, setUser] = useState(null)
  return (
    <main className={styles.App}>
      <Helmet>
        <meta charSet='utf-8'></meta>
        <title>Drone Map & Snap</title>
        <link rel='canonical' href='http://mysite.com/example'></link>
        <meta name='description' content='Drone Services Website'></meta>
      </Helmet>
      {user
        ? <>
          <NavBar />
          <Routes>
            <Route path='/orders/new' element={<NewOrderPage />} />
            <Route path='/orders' element={<OrderHistoryPage />} />
          </Routes>
        </>
        : <>
          <Routes>
            <Route path='/' element={<LandingPage setUser={setUser} />} />
            <Route path='/policy' element={<PrivacyPolicy />} />
          </Routes>
        </>}
    </main>
  )
}

export default App
