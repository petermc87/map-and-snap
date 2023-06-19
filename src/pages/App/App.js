import { useState, useEffect } from 'react'
import LandingPage from '../LandingPage/LandingPage'
import NewOrderPage from '../NewOrderPage/NewOrderPage'
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage'
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy'
import { Routes, Route } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import styles from './App.module.scss'

function App () {
  const [state, setState] = useState(null)
  const [user, setUser] = useState(null)

  const fetchState = async () => {
    try {
      const response = await fetch('/api/test')
      const data = await response.json()
      setState(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchState()
  }, [])

  return (
    <main className='App'>
      {user
        ? <>
          <NavBar />
          <Routes>
            <Route path='/orders/new' element={<NewOrderPage />} />
            <Route path='/orders' element={<OrderHistoryPage />} />

          </Routes>
        </>
        : 
        <>
        <Routes>
          <Route path='/' element={<LandingPage setUser={setUser} />} />
          <Route path='/policy' element={<PrivacyPolicy />} />
        </Routes>
        </>}
    </main>
  )
}

export default App
