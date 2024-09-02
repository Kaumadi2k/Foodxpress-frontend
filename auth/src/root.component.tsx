import React from 'react'
import Login from './pages/Login';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import { Routes, Route, MemoryRouter } from 'react-router-dom';
import Register from './pages/Register';
import ConfirmRegistration from './pages/ConfirmRegistration';

const RootComponent = () => {
  return (
    <MemoryRouter>
      <ThemeProvider theme = {theme}>
      <div>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/confirmRegistration' element={<ConfirmRegistration/>}></Route>
        </Routes>
      </div>
    </ThemeProvider>
    </MemoryRouter>
  )
}

export default RootComponent;

//By using MemoryRouter, you ensure that each microfrontend handles its own routing without interfering with the global browser history unless necessary. If you need the microfrontend to interact with the browser history, BrowserRouter is the way to go.