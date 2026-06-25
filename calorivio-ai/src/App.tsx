import './App.css'
import BMICalculator from './screens/bmi_calculator'
import Chat from './screens/chat'
import EditProfile from './screens/edit_profile'
import Home from './screens/home'
import MealPlans from './screens/mealplans'
import Nutrichat from './screens/nutrichat'
import Profile from './screens/profile'
import Progress from './screens/progress'
import './Typography.css'
import './variables.css'
import { Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bmi" element={<BMICalculator />} />
        <Route path="/chat" element={<Chat/>} />
        <Route path="/mealplans" element={<MealPlans/>} />
        <Route path="/progress" element={<Progress/>} />
        <Route path="/nutrichat" element={<Nutrichat/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/edit-profile" element={<EditProfile/>} />
      </Routes>
    </>
  )
}

export default App
