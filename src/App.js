import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
function App() {
  const router = createBrowserRouter([
    {path:'/',
      element:<>
        <Navbar/>       
      </>
    }    
  ])
  return (
    <>
        <RouterProvider router={router}/>
        </>
  );  
}
export default App;