
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ContentDisplay from './components/ContentDisplay';
import { BOOK_CONTENT } from './constants';
import { Chapter, Topic } from './types';
import MenuIcon from './components/icons/MenuIcon'; // Import the new MenuIcon

const App: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState<Chapter | null>(null);
  const [activeTopic, setActiveTopic] = useState<Topic | null>(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(true); // State for sidebar visibility

  const handleSelectTopic = (topicId: string, chapterId: string) => {
    const chapter = BOOK_CONTENT.chapters.find(c => c.id === chapterId) || null;
    const topic = chapter?.topics.find(t => t.id === topicId) || null;
    setActiveChapter(chapter);
    setActiveTopic(topic);
    setIsSidebarVisible(false); // Hide sidebar when a topic is selected
  };

  const handleShowWelcome = () => {
    setActiveChapter(null);
    setActiveTopic(null);
    setIsSidebarVisible(true); // Ensure sidebar is visible on welcome screen
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(prev => !prev);
  }
  
   useEffect(() => {
    // Optional: Load a default topic. For instance, the first topic of the first chapter.
    // if (BOOK_CONTENT.chapters.length > 0 && BOOK_CONTENT.chapters[0].topics.length > 0) {
    //   const firstChapter = BOOK_CONTENT.chapters[0];
    //   const firstTopic = firstChapter.topics[0];
    //   // If you enable this, the sidebar will hide on initial load after selecting the first topic.
    //   // handleSelectTopic(firstTopic.id, firstChapter.id); 
    // }
   }, []);


  return (
    <div className="flex min-h-screen relative">
      <Sidebar 
        book={BOOK_CONTENT} 
        activeTopicId={activeTopic?.id || null} 
        onSelectTopic={handleSelectTopic}
        onShowWelcome={handleShowWelcome}
        isOpen={isSidebarVisible} // Pass isOpen state
      />

      {!isSidebarVisible && (
        <button
          onClick={() => setIsSidebarVisible(true)}
          className="fixed top-4 left-4 z-30 p-2 bg-brand-secondary hover:bg-brand-primary text-white rounded-md shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-accent"
          aria-label="Open navigation menu"
        >
          <MenuIcon className="w-6 h-6" />
        </button>
      )}

      <main className={`flex-1 ${isSidebarVisible ? 'ml-80' : 'ml-0'} p-0 overflow-y-auto bg-slate-100 dark:bg-slate-900 transition-all duration-300 ease-in-out`}> 
        <ContentDisplay chapter={activeChapter} topic={activeTopic} />
      </main>
    </div>
  );
};

export default App;
