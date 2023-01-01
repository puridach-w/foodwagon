import './App.css';
import React from 'react';
import Page from './Page';
import { BrowserRouter, Routes , Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com"/> 
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap" rel="stylesheet"></link>
      <BrowserRouter>
				<Routes>
					<Route path="/" element={<Page/>}/>
				</Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;
