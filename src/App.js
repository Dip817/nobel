import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AboutComponent from './components/AboutComponent';
function App() {
  const router = createBrowserRouter([
    {path:'/',
      element:<>
        <AboutComponent/>       
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
