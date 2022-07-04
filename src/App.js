/* eslint-disable */
import {
  Routes,
  Route,
} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from "./pages/Home";
import Play from './pages/Play';
import Games from './pages/Games';
function App() {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path='play/:id' element={<Play />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
