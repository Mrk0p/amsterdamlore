import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { StoryGrid } from "./pages/StoryGrid";
import  SubmitForm  from "./pages/SubmitForm";
import { AwardsPanels } from "./components/AwardsPanels";
const Home = () => (
  <main className="max-w-7xl mx-auto p-6 font-serif">
    {/* Example homepage content */}
    <h1 className="font-playfair text-4xl text-[#424242] mb-6">
      Welcome to AmsterdamLore
    </h1>
    <AwardsPanels />
  </main>
);

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<StoryGrid />} />
        <Route path="/submit" element={<SubmitForm />} />
        {/* add other routes like Contact, FAQ if needed */}
      </Routes>
      <Footer />
    </Router>
  );
}
