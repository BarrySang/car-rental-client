import { Route, Routes} from 'react-router-dom';
import './App.css';
import SignupForm from './components/forms/SignupForm';
import Main from './components/Main';

function App() {
  return (
    <main>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/signup' element={<SignupForm />} />
        </Routes>
      </div>
      
    </main>
  );
}

export default App;
