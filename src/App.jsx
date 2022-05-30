import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { AllRoutes } from './Pages/AllRoutes';

function App() {
  
  return (
    <div className="App">
      <AllRoutes/>
    </div>
  )
}

export default App
