import './App.css';

// Router and Pages
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Outcomes from './pages/Outcomes';
import October from './pages/October';
import Teams from './pages/Teams';
import Topics from './pages/Topics';
import ScheduleOctober from './pages/ScheduleOctober';
import ScheduleNovember from './pages/ScheduleNovember';
import ScheduleDecember from './pages/ScheduleDecember';



// Components
// import Header from './components/Header/Header';
// import GreenArticle from './components/GreenArticle/GreenArticle';
// import Article from './components/Article/Article';
// import Testimonials from './components/Testimonials/Testimonials';
// import CourseSchedule from './components/CourseSchedule/CourseSchedule';
// import JaredSpool from './components/JaredSpool/JaredSpool';
// import Pricing from './components/Pricing/Pricing';
// import VideoSeries from './components/VideoSeries/VideoSeries';
// import Footer from './components/Footer/Footer';


// function App() {
//   return (
//     <div className="App">

//       <Header />
//       < GreenArticle />
//       <Article />
//       <Testimonials />
//       <CourseSchedule />
//       {/* <Calendar /> */}
//       <JaredSpool />
//       <Pricing />
//       <VideoSeries />
//       <Footer />
//       {/*<FloatingComponent /> */}
//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the routes for each page */}
        <Route path="/" element={<Home />} />
        <Route path="/outcomes" element={<Outcomes />} />
        <Route path="/october" element={<October />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/topics" element={<Topics />} />


        <Route path="/octoberschedule" element={<ScheduleOctober />} />
        <Route path="/novemberschedule" element={<ScheduleNovember />} />
        <Route path="/decemberschedule" element={<ScheduleDecember />} />


      </Routes>
    </Router>
  );
}

export default App;


// Max test text because of reasons