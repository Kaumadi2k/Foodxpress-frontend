import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route, MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import Category from './pages/Category';

const RootComponent = () => {
  return (
    <MemoryRouter>
      <ThemeProvider theme={theme}>
        <div>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/category/:categoryId/:categoryName' element={<Category/>}></Route>
          </Routes>
        </div>
      </ThemeProvider>
    </MemoryRouter>
  )
}

export default RootComponent;