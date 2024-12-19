import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
function App() {
  const router = createBrowserRouter([
    {path:'/',
      element:<>
        <Navbar/>   
        <Banner/>    
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
