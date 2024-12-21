import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Principles from './components/Principles';
function App() {
  const router = createBrowserRouter([
    {path:'/',
      element:<>
        <Principles/>       
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
