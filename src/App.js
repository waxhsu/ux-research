import './App.css';

// Router and Pages
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Outcomes from './pages/Outcomes';
import October from './pages/October';
import November from './pages/November';
import December from './pages/December';
import January from './pages/January';
import Teams from './pages/Teams';
import Topics from './pages/Topics';
import ScheduleOctober from './pages/ScheduleOctober';
import ScheduleNovember from './pages/ScheduleNovember';
import ScheduleDecember from './pages/ScheduleDecember';
import ScheduleJanuary from './pages/ScheduleJanuary';


function App() {
  return (
    <Router>
      <Routes>
        {/* Define the routes for each page */}
        <Route path="/" element={<Home />} />
        <Route path="/outcomes" element={<Outcomes />} />
        <Route path="/october" element={<October />} />
        <Route path="/november" element={<November />} />
        <Route path="/december" element={<December />} />
        <Route path="/january" element={<January />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/octoberschedule" element={<ScheduleOctober />} />
        <Route path="/novemberschedule" element={<ScheduleNovember />} />
        <Route path="/decemberschedule" element={<ScheduleDecember />} />
        <Route path="/januaryschedule" element={<ScheduleJanuary />} />
      </Routes>
    </Router>
  );
}

export default App;