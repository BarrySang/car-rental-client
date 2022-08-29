import { Route, Routes} from 'react-router-dom';
import './App.css';
import LoginForm from './components/forms/LoginForm';
import SignupForm from './components/forms/SignupForm';
import Main from './components/Main';

function App() {
  return (
    <main>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/auth/signup' element={<SignupForm />} />
          <Route path='/auth/login' element={<LoginForm />} />
        </Routes>
      </div>
      
    </main>
  );
}

export default App;
