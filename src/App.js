import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ProgrammeComp from './components/ProgrammeComp';
function App() {
  const router = createBrowserRouter([
    {path:'/',
      element:<>
        <ProgrammeComp/>       
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
