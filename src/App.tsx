import './App.css'
import Home from './pages/Home';
import {Route, Routes} from 'react-router-dom';
import PolicyPage from './pages/PolicyPage';
import { Header } from './components/header';
import { Footer } from './components/footer';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/privacy-policy" Component={PolicyPage} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
