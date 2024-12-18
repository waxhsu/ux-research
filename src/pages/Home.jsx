
// Components
import Header from '../components/Header/Header';
import GreenArticle from '../components/GreenArticle/GreenArticle';
import Testimonials from '../components/Testimonials/Testimonials';
import CourseSchedule from '../components/CourseSchedule/CourseSchedule';
import JaredSpool from '../components/JaredSpool/JaredSpool';
import VideoSeries from '../components/VideoSeries/VideoSeries';
import Footer from '../components/Footer/Footer';
import Modal from "../components/VerticalCohortSelector/VerticalCohortSelector";
import TestComponent from "../components/TestComponent/TestComponent";
import PurchaseBox from "../components/PurchaseBox/PurchaseBox";
import HorizontalCohortSelector from "../components/HorizontalCohortSelector/HorizontalCohortSelector";
import Navbar from '../components/Navbar/Navbar';

export default function Home() {
    return (
        <div className="App">
            <Navbar />
            <Header />

            < GreenArticle >
                <p>Strategic UX Research is changing organizations. Get ready to change yours, too.
                </p>
                <p>Lead your organization to become the foremost expert in your users and customers.
                </p>
            </GreenArticle >

            <TestComponent >
                <div className="article-content">
                    <h2>Strategic UX Research is the Next Big Thing.
                    </h2>
                        <p>Get ready to connect your organization’s long-term direction and strategy directly to your customers’ and users’ deepest needs.
                        </p>
                        <p>Awaken your top executives to the value that great user experiences bring to your organization and the people you serve.
                        </p>
                        <p>Give your senior stakeholders and executives a detailed, shared understanding of your customers’ and users’ experiences. They’ll use your Strategic UX Research to set the business’ direction, determine where to invest, and focus the entire organization’s long-term and short-term objectives on prioritizing improved experiences.
                        </p>
                        <p>Your new Strategic UX Research efforts will change the relationships your senior executives and stakeholders will have with everyone who will benefit from your products and services. It’s a profound transformation that restructures how your organization makes essential decisions.
                        </p>
                    
                    <h3>How Strategic UX Research is different from what’s practiced today.
                    </h3>
                        <p>Most teams today practice Tactical UX Research. Their work rarely affects more than a specific feature or product.
                        </p>
                        <p>Their research results only describe immediate recommendations or changes that will improve the product slightly.
                        </p>
                        <p>Tactical UX Research rarely improves our understanding of users or what they need in the long term. This understanding never reaches the organization’s upper levels. The most critical decisions, like budgets, staffing, and priorities, don’t consider the users’ experiences. Yet these decisions affect whether the team will have what it needs to deliver a great user experience.
                        </p>
                        <p>Conversely, Strategic UX Research is about attaining a deeper understanding of all the different users and their individual experiences. Everyone, including the executive team, learns more about what makes an excellent experience for users, employees, and customers and how to improve their current experiences.
                        </p>
                        <p>These experiences go beyond using the organization’s products or services. They include what happens before, during, and after someone has interacted with the product. Strategic UX Research uncovers the entirety of people's experiences.
                        </p>
                        <p>Research teams orchestrate deep-hanging-out sessions with customers and users. They collect observations and insights that show what a day in the life of users could be like. They combine different experiences with the product or service across the user’s lifetime and connect this all together to show a detailed journey.
                        </p>

                    <h3>Discover the basic principles of Strategic UX Research:
                    </h3>
                        <ul>
                            <li>Build deep expertise about users and their needs.
                            </li>
                            <li>Focus the organization on improving the daily lives of customers, users, and employees.
                            </li>
                            <li>Combine UX and CX practices to collect knowledge from every touch point.
                            </li>
                            <li>Study holistic experiences instead of small slices of a product’s features.
                            </li>
                            <li>Feed the research results into every outcome and decision.
                            </li>
                        </ul>
                        <p>Strategic UX research transforms your organization into an industry leader who delivers, hands down, the most innovative experiences.
                        </p>
                        <p>Your senior executives will champion even more research because they now see how the entire organization treasures it. They'll no longer stop your UX research efforts from being undervalued and the first to be cut.
                        </p>
                        <p><strong>Shape the way your organization makes strategic decisions. Deliver better-designed products and services. Our Advanced Strategic UX Research essentials will guide you every step of the way.
                        </strong></p>
                </div>
                <Modal />
            </TestComponent>

            <Testimonials/>
            <CourseSchedule />
            < HorizontalCohortSelector />
            <JaredSpool />

            <TestComponent>
                <div className="pricing-content">
                    <h2>Sign up for the Adv. Strategic UX Research Course</h2>
                    <p>Ready to dive in deep and absorb everything there is to know about Advanced Strategic UX Research?
                    </p>
                    <ul>
                        <li>Individual price per person <br /> $499</li>
                        <li>Team price per person ($100 off each person)<br /> $399</li>
                        <li>Unemployed UXer per person <br /> $199</li>
                    </ul>
                    <div>
                        <p><b>What’s included:</b></p>
                        <ul>
                            <li><img src="./images/8.png" alt="8" className="pricing-list-image" />Eight 1-hour live coaching sessions with Jared Spool.</li>
                            <li><img src="./images/8.png" alt="8" className="pricing-list-image" />Eight 50-minute recorded lectures (to watch on your own time or together during a scheduled session for each topic).
                            </li>
                            <li><img src="./images/5-2.png" alt="book" className="pricing-list-image" />Access a library of resources for developing your UX metrics strategy.</li>
                            <li><img src="./images/7.png" alt="person with glasses" className="pricing-list-image" />A private community to get your questions answered by Jared and other members.
                            </li>
                            <li><img src="./images/comp.png" alt="computer" className="pricing-list-image" />6 Weeks of access to all session recordings, Q&As, and notes.</li>
                            <li><img src="./images/10.png" alt="certificate" className="pricing-list-image" />A personalized Certificate of Completion for the Outcome-driven UX Metrics program.</li>
                        </ul>
                    </div>
                </div>
                <Modal />
            </TestComponent>
            <div className='bg-grey'>
                <VideoSeries>
                    <div>
                        <h3>Can’t attend the course live? <br />
                        Purchase the Recorded Adv. Strategic UX Research Video Series.</h3>
                        <p>We know that not everyone has the resources to join us live. That’s ok. You can purchase the Adv. Strategic UX Research video series.
                        </p>
                        <p>You can watch all eight sessions of the Adv. Strategic UX Research Course broken up into two parts in our UX Strategy Essentials Library.
                        </p>
                        <span><b>What’s included for $227:</b></span>
                        <ul>
                            <li>The lectures and notes from all eight topics.</li>
                            <li>Catch the lectures on your own schedule.
                            </li>
                        </ul>
                        <span>Access is for 90 days.</span>
                    </div>
                    <PurchaseBox
                        src="./images/laptopResearch.png"
                        text="Adv. Strategic UX Research Video Series"
                        price="$227"
                        buttonText="PURCHASE VIDEO SERIES"
                    />
                </VideoSeries>
            </div>
            <Footer />
            {/*<FloatingComponent /> */}
        </div>
    );
}