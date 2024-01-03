import Award from "./Components/Award";
import CoursesPagination from "./Components/CoursesPagination";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import RecentCourses from "./Components/RecentCourses";
import SignUpprocess from "./Components/SignUpprocess";
import Technologies from "./Components/Technologies";
import Topaddress from "./Components/Topaddress";


function App() {
  return (
    <div className="App">
      <Topaddress/>
      <Header/>
      <HeroSection/>
      <Award/>
      <SignUpprocess/>
      <Technologies/>
      <RecentCourses/>
      <CoursesPagination/>
    </div>
  );
}

export default App;
