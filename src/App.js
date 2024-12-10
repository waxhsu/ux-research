import "./App.css";

// Router and Pages
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page1 from "./pages/Page1";

import Cohort3 from "./pages/Cohort3";
import Cohort3Schedule from "./pages/Cohort3Schedule";
import Cohort4 from "./pages/Cohort4";
import Cohort4Schedule from "./pages/Cohort4Schedule";
import Cohort5 from "./pages/Cohort5";
import Cohort5Schedule from "./pages/Cohort5Schedule";

function App() {
    return (
        <Router>
            <Routes>
                {/* Define the routes for each page */}
                <Route path="/" element={<Home />} />
                <Route path="/page1" element={<Page1 />} />
                <Route path="/page2" element={<Page2 />} />
                <Route path="/page3" element={<Page3 />} />


                <Route path="/cohort3" element={<Cohort3 />} />
                <Route
                    path="/cohort3-schedule"
                    element={<Cohort3Schedule />}
                />

                <Route path="/cohort4" element={<Cohort4 />} />
                <Route 
                    path="/cohort4-schedule" 
                    element={<Cohort4Schedule />} 
                />

                <Route path="/cohort5" element={<Cohort5 />} />
                <Route 
                    path="/cohort5-schedule" 
                    element={<Cohort5Schedule />} 
                />

            </Routes>
        </Router>
    );
}

export default App;
