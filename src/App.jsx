import { useState } from 'react'
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Pokedex from './pages/Pokedex'



function App() {
 
  
  return (
    <div className="App">
      <HashRouter>
			  <Routes>
            <Route path="/" element={<Login />} />
						<Route path="/pokedex" element={<Pokedex />} />

																						
								{/* <Route element={<MainLayout />}>  // Layout diferente

						        <Route path="/" element={<DefaultComponent />} />
						        <Route path="/about" element={<h1>Este componente se mostrará en la página about</h1>}/>
							      <Route path="/about/team" element={<Team />} />
								</Route> */}

			      </Routes>
				</HashRouter>
    </div>
  )
}

export default App
