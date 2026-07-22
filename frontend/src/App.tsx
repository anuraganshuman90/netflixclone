import HomePage from "./pages/HomePage/HomePage"
import Navbar from "./components/Navbar/Navbar";
import SearchPage from "./pages/SearchPage/SearchPage";
import { useState } from "react";
import type { Content } from "./types/content";
import ContentDetails from "./pages/ContentDetails/ContentDetails";
import type { Page } from "./types/page";

function App() {
  const [selectedContent, setSelectedContent] = useState<Content | null>(null);
  const [currentPage, setCurrentPage] = useState<Page>("home");
  let page;

  function onContentSelect(content: Content) {
    setSelectedContent(content);
  }
  function onClose() {
    setSelectedContent(null);
  }
  function onNavigate(page: Page) {
    setCurrentPage(page);
  }

  if (selectedContent) {
    return (
      page =
      <ContentDetails content={selectedContent} onContentSelect={onContentSelect} onClose={onClose} />
    );
  } else
    switch (currentPage) {
      case "home": page = <HomePage onContentSelect={onContentSelect} />; break;
      case "search": page = <SearchPage onContentSelect={onContentSelect} />; break;
      default: page = <HomePage onContentSelect={onContentSelect} />;
    }
  return (
    <>
      <Navbar onNavigate={onNavigate} />
      {page}
    </>)


}

export default App
