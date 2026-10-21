import Hero from "./components/Hero";
import Bio from "./components/Bio";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";
import ProgramItems from "./components/ProgramItems";
import Transformations from "./components/Transformations";
import Story from "./components/Story";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <Bio />
      <Story />
      <ProgramItems />
      <Transformations />
      <Certifications />
      <Footer />
    </>
  );
}

export default App;
