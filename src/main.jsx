import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import './index.css'

import Layout from "./components/Layout"
import Home from "./components/Home"
import RatePage from "./components/RatePage"
import MoviePage from './components/MoviePage';
import Login from './components/Login';
import EmailLog from './components/EmailLog';
import WatchList from './components/WatchList';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout></Layout>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="/rate" element={<RatePage></RatePage>}></Route>
          <Route path="/get-movie" element={<MoviePage></MoviePage>}></Route>
          <Route path="/watchlist" element={<WatchList></WatchList>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/email-log" element={<EmailLog></EmailLog>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
