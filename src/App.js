import { Route, Routes} from 'react-router-dom';
import './App.css';
import Main from './components/Main';

function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </main>
  );
}

export default App;
