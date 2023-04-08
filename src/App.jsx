import { useState } from 'react'
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Pokedex from './pages/Pokedex'
import Protected from './pages/Protected'
import History from './pages/History'
import Search from './pages/Search'
import PokedexId from './pages/PokedexId'

function App() {
  return (
    <div className="App">
      	<HashRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route element={<Protected />}>			
					<Route path="/pokedex" element={<Pokedex />} />
					<Route path="/history" element={<History />} />
					<Route path="/search" element={<Search />} />
					<Route path="/pokemons/:name" element={<PokedexId />} />	     
				</Route>
			</Routes>
		</HashRouter>	
    </div>
  )}
export default App
