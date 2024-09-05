import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { IdolTable } from './pages/IdolTable/IdolTable';
// THE JS FILE THAT DISPLAYS EVERYTHING
function App() {
 return (
   <Router basename={process.env.PUBLIC_URL}>
     <Routes>
       <Route path='/' element={<IdolTable/>}/>
     </Routes>
   </Router>
 );
}


export default App;