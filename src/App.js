import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import FillForm from './component/FillForm';
import ShowForm from './component/ShowForm';
import DataProvider from './context/DataProvider';
import Nav from './component/nav';
import UpdateProduct from './component/edit';
function App() {
  return (
    <>
    <DataProvider>
      <BrowserRouter>
      <Nav/>
        <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/registration' element={<FillForm />} />
          <Route path='/showform' element={<ShowForm/>}/>
          <Route path="/update/:id" element={<UpdateProduct/>}/>
        </Routes>
      </BrowserRouter>
      </DataProvider>
    </>
  );
}

export default App;
