import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AdmissionForm from './components/AdmissionForm';
function App() {
  const router = createBrowserRouter([      
    {
      path:'/',
      element:<>
        <AdmissionForm/>       
      </>
    },    
  ])
  return (
    <>
        <RouterProvider router={router}/>
        </>
  );  
}
export default App;
