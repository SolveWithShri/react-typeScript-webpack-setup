import './styles.css';

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { NavBar } from './components/NavBar';

import { Home } from './pages/Home';
import { Demo } from './pages/Demo';
import { OrderSummary } from './pages/OrderSummary';
import NoMatch from './pages/NoMatch';
import Products from './pages/Products';
import FeaturedProducts from './pages/FeaturedProducts';
import NewProducts from './pages/NewProducts';
import Users from './pages/Users';
import UserDetails from './pages/UsersDetails';

// import { About } from './pages/About';
const LazyAbout = React.lazy(() => import('./pages/About'));

// import { createBrowserRouter, RouterProvider } from 'react-router';
// let router = createBrowserRouter([
//   {
//     path: '/',
//     Component: Home,
//     // loader: loadRootData,
//   },
//   {
//     path: 'about',
//     Component: About,
//     // loader: loadRootData,
//   },
//   {
//     path: 'demo',
//     Component: Demo,
//     // loader: loadRootData,
//   },
// ]);

export const App = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path='' element={<Home />} />
        {/* <Route path='about' element={<About />} /> */}
        <Route
          path='about'
          element={
            <React.Suspense fallback={'Loading ...'}>
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path='demo' element={<Demo />} />
        <Route path='order-summary' element={<OrderSummary />} />
        <Route path='Users' element={<Users />}>
          <Route path=':userId' element={<UserDetails />} />
          <Route path='admin' element={<UserDetails />} />
        </Route>
        <Route path='products' element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path='featured' element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />
        </Route>
        <Route path='*' element={<NoMatch />} />
      </Routes>

      {/* <RouterProvider router={router} /> */}
    </>
  );
};
