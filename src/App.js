import './App.css';
import React from 'react';
import Page from './Page';
import { BrowserRouter, Routes , Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
				<Routes>
					<Route path="/" element={<Page/>}/>
				</Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;
