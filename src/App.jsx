import { useState } from 'react'
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Pokedex from './pages/Pokedex'
import Protected from './pages/Protected'



function App() {
 
  
  return (
    <div className="App">
      	<HashRouter>
			<Routes>
				<Route path="/" element={<Login />} />

				<Route element={<Protected />}>
							
					<Route path="/pokedex" element={<Pokedex />} />
						     
				</Route>


			</Routes>
		</HashRouter>
    </div>
  )
}

export default App
