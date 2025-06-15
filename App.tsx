
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ContentDisplay from './components/ContentDisplay';
import { BOOK_CONTENT } from './constants';
import { Chapter, Topic } from './types';
import MenuIcon from './components/icons/MenuIcon';

const App: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState<Chapter | null>(null);
  const [activeTopic, setActiveTopic] = useState<Topic | null>(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false); // Start with sidebar hidden

  const handleSelectTopic = (topicId: string, chapterId: string) => {
    const chapter = BOOK_CONTENT.chapters.find(c => c.id === chapterId) || null;
    const topic = chapter?.topics.find(t => t.id === topicId) || null;
    setActiveChapter(chapter);
    setActiveTopic(topic);
    setIsSidebarVisible(false); // Hide sidebar when a topic is selected
    window.scrollTo(0, 0); // Scroll to top when new topic selected
  };

  const handleShowWelcome = () => {
    setActiveChapter(null);
    setActiveTopic(null);
    setIsSidebarVisible(false); // Hide sidebar for the welcome screen
    window.scrollTo(0, 0); // Scroll to top
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(prev => !prev);
  };
  
  // No initial topic loading to ensure welcome screen shows first
  // useEffect(() => {
  // }, []);


  return (
    <div className="flex min-h-screen relative bg-slate-100 dark:bg-slate-900">
      <Sidebar 
        book={BOOK_CONTENT} 
        activeTopicId={activeTopic?.id || null} 
        onSelectTopic={handleSelectTopic}
        onShowWelcome={handleShowWelcome}
        isOpen={isSidebarVisible}
      />

      {/* Menu toggle button - always visible if sidebar is closed */}
      {!isSidebarVisible && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-30 p-2 bg-brand-secondary hover:bg-brand-primary text-white rounded-md shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-accent"
          aria-label="Open navigation menu"
          aria-expanded={isSidebarVisible}
          aria-controls="sidebar"
        >
          <MenuIcon className="w-6 h-6" />
        </button>
      )}

      <main 
        id="main-content"
        className={`flex-1 ${isSidebarVisible ? 'ml-80' : 'ml-0'} p-0 overflow-y-auto transition-all duration-300 ease-in-out`}
      > 
        <ContentDisplay chapter={activeChapter} topic={activeTopic} />
      </main>
    </div>
  );
};

export default App;
