
import React, { useState } from 'react';
import { Book, Chapter, Topic } from '../types';
import ChevronDownIcon from './icons/ChevronDownIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';
import DigitalAlienIcon from './icons/DigitalAlienIcon';

interface SidebarProps {
  book: Book;
  activeTopicId: string | null;
  onSelectTopic: (topicId: string, chapterId: string) => void;
  onShowWelcome: () => void;
  isOpen: boolean; // New prop for controlling visibility
}

const Sidebar: React.FC<SidebarProps> = ({ book, activeTopicId, onSelectTopic, onShowWelcome, isOpen }) => {
  const [openChapters, setOpenChapters] = useState<Record<string, boolean>>({});

  const toggleChapter = (chapterId: string) => {
    setOpenChapters(prev => ({ ...prev, [chapterId]: !prev[chapterId] }));
  };

  const gradientTextStyle = "bg-gradient-to-r from-brand-accent to-emerald-500 bg-clip-text text-transparent";

  return (
    <div 
      className={`w-80 bg-slate-800 text-slate-200 p-6 space-y-6 min-h-screen fixed top-0 left-0 overflow-y-auto shadow-2xl z-10 
                  transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      aria-hidden={!isOpen}
    >
      <div 
        className="flex items-center space-x-3 mb-8 cursor-pointer group"
        onClick={onShowWelcome}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => e.key === 'Enter' && onShowWelcome()}
        aria-label="Show welcome screen and book title"
      >
        <DigitalAlienIcon className="w-8 h-8 text-sky-400 group-hover:text-sky-300 transition-colors" />
        <h1 className={`text-2xl font-display font-semibold uppercase ${gradientTextStyle} group-hover:brightness-110 transition-all`}>{book.title}</h1>
      </div>

      <nav className="space-y-2">
        {book.chapters.map((chapter) => (
          <div key={chapter.id}>
            <button
              onClick={() => toggleChapter(chapter.id)}
              className="w-full flex items-center justify-between text-left px-3 py-2.5 rounded-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors"
              aria-expanded={openChapters[chapter.id] || false}
              aria-controls={`chapter-topics-${chapter.id}`}
            >
              <span className={`font-semibold text-lg uppercase ${gradientTextStyle}`}>{chapter.title}</span>
              {openChapters[chapter.id] ? <ChevronDownIcon className="w-5 h-5 text-slate-400" /> : <ChevronRightIcon className="w-5 h-5 text-slate-400" />}
            </button>
            {openChapters[chapter.id] && (
              <ul id={`chapter-topics-${chapter.id}`} className="mt-1 pl-4 space-y-1 border-l border-slate-700 ml-2">
                {chapter.topics.map((topic) => (
                  <li key={topic.id}>
                    <button
                      onClick={() => onSelectTopic(topic.id, chapter.id)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        activeTopicId === topic.id 
                          ? 'bg-sky-600 text-white font-medium' 
                          : `hover:bg-slate-700 hover:brightness-110` 
                      }`}
                      aria-current={activeTopicId === topic.id ? "page" : undefined}
                    >
                      {activeTopicId === topic.id ? (
                        topic.title 
                       ) : (
                        <span className={`${gradientTextStyle}`}>{topic.title}</span> 
                       )}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
       <div className="pt-8 text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} MITAU ZVC Smart Contract Mastery.</p>
        <p>All rights reserved.</p>
      </div>
    </div>
  );
};

export default Sidebar;
