import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css'
import App from './App.tsx'
import CheckoutPage from './pages/checkout/CheckoutPage.tsx';
import OrdersPage from './pages/order/order/OrdersPage.tsx';
import TrackingPage from './pages/tracking/TrackingPage.tsx';
import HomePage from './pages/home/HomePage.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,        // Layout wrapper (Navbar, Footer, etc.)
    errorElement: <div>Not found</div>,

    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "checkout",
        element: <CheckoutPage />
      },
      {
        path: "orders",
        element: <OrdersPage />
      },
      {
        path: "tracking",
        element: <TrackingPage />
      },
      {
        path: "*",
        element: <div>Not found</div>
      }
    ]
  }
]);


createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  //   {/* <BrowserRouter>
  //    <App />
  //   </BrowserRouter> */}

  // </StrictMode>,

  <RouterProvider router={router} />

)
