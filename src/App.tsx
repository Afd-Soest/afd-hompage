import MainPage from "./components/Pages/MainPage";
import ProgramPage from "./components/Pages/ProgramPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Constituion from "./components/Constitution/Constitution";
import Donate from "./components/Donate/Donate";
import Impressum from "./components/Impressum/Impressum";
import Layout from "./components/Pages/Layout";
import DataProtection from "./components/DataProtection/DataProtection";
import Contact from "./components/Contact/Contact";
import Vorstand from "./components/BoardOfDirectors/Vorstand";
import PastEventsComplete from "./components/PastEventsComplete/PastEventsComplete";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="event/:id" element={<PastEventsComplete />} />
            <Route path="satzung" element={<Constituion />} />
            <Route path="spenden" element={<Donate />} />
            <Route path="impressum" element={<Impressum />} />
            <Route path="datenschutzerklaerung" element={<DataProtection />} />
            <Route path="kontakt" element={<Contact />} />
            <Route path="vorstand" element={<Vorstand />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
