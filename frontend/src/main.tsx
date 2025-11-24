import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css'
import App from './App.tsx'
import CheckoutPage from './pages/checkout/checkout/CheckoutPage.tsx';
import OrdersPage from './pages/order/order/OrdersPage.tsx';
import TrackingPage from './pages/tracking/tracking/TrackingPage.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    //index: true,
    element: <App />,
    errorElement: <div>Not found </div>
  },
  {
    path: 'checkout',
    element: <CheckoutPage />
  },
  {
    path: 'orders',
    element: <OrdersPage />
  },
  {
    path: 'tracking',
    element: <TrackingPage />
  },
  {
    path: '**',
    element: <div>Not found </div>
  }
]);



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <BrowserRouter>
     <App />
    </BrowserRouter> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
