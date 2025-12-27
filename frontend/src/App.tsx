
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
//import { Route , Routes } from 'react-router'

function App() {

  const queryClient = new QueryClient();

  return (
    <>
      {/* <Routes>
        <Route index element={<HomePage/>} />
        <Route path='checkout' element={<Checkout/>} />
      </Routes> */}
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </QueryClientProvider>
    </>
  )
}

export default App
