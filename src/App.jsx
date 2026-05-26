import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Statement from "./components/Statement";
import Problem from "./components/Problem";
import Survey from "./components/Survey";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Values from "./components/Values";
import TechDeepDive from "./components/TechDeepDive";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-bg min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <Statement />
      <Problem />
      <Survey />
      <Features />
      <HowItWorks />
      <Values />
      <TechDeepDive />
      <Contact />
      <Footer />
    </div>
  );
}
