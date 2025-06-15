
import React from 'react';
import { Chapter, Topic, SubTopic, Note } from '../types';
import InfoIcon from './icons/InfoIcon';
import WarningIcon from './icons/WarningIcon';
import TipIcon from './icons/TipIcon';
import CodeBracketIcon from './icons/CodeBracketIcon';
import DigitalAlienIcon from './icons/DigitalAlienIcon';

interface ContentDisplayProps {
  chapter: Chapter | null;
  topic: Topic | null;
}

const NoteBlock: React.FC<{ note: Note }> = ({ note }) => {
  let icon: React.ReactNode;
  let borderColorClass = '';
  let bgColorClass = '';
  let textColorClass = '';
  let title = '';

  switch (note.type) {
    case 'info':
      icon = <InfoIcon className="w-5 h-5 text-blue-500" />;
      borderColorClass = 'border-blue-500';
      bgColorClass = 'bg-blue-50 dark:bg-blue-900 dark:bg-opacity-30'; // Removed /90
      textColorClass = 'text-blue-700 dark:text-blue-300';
      title = 'Information';
      break;
    case 'warning':
      icon = <WarningIcon className="w-5 h-5 text-yellow-500" />;
      borderColorClass = 'border-yellow-500';
      bgColorClass = 'bg-yellow-50 dark:bg-yellow-900 dark:bg-opacity-30'; // Removed /90
      textColorClass = 'text-yellow-700 dark:text-yellow-300';
      title = 'Warning';
      break;
    case 'tip':
      icon = <TipIcon className="w-5 h-5 text-green-500" />;
      borderColorClass = 'border-green-500';
      bgColorClass = 'bg-green-50 dark:bg-green-900 dark:bg-opacity-30'; // Removed /90
      textColorClass = 'text-green-700 dark:text-green-300';
      title = 'Tip';
      break;
    case 'code':
        icon = <CodeBracketIcon className="w-5 h-5 text-purple-500" />;
        borderColorClass = 'border-purple-500';
        bgColorClass = 'bg-purple-50 dark:bg-purple-900 dark:bg-opacity-30'; // Removed /90
        textColorClass = 'text-purple-700 dark:text-purple-300';
        title = 'Code Note';
        break;
  }

  return (
    <div className={`mt-4 mb-6 p-4 border-l-4 ${borderColorClass} ${bgColorClass} rounded-r-md shadow-sm`}>
      <div className="flex items-center">
        {icon}
        <strong className={`ml-2 font-semibold ${textColorClass}`}>{title}</strong>
      </div>
      <p className={`mt-2 text-sm ${textColorClass} prose prose-sm max-w-none dark:prose-invert`}
         dangerouslySetInnerHTML={{ __html: note.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
    </div>
  );
};


const CodeExampleBlock: React.FC<{ example: { language: string; code: string; explanation?: string } }> = ({ example }) => {
  return (
    <div className="my-6">
      <div className="bg-slate-800 rounded-md shadow-lg overflow-hidden"> {/* Removed /95 */}
        <div className="px-4 py-2 bg-slate-700 text-slate-300 text-xs font-mono"> {/* Removed /90 */}
          {example.language.toUpperCase()}
        </div>
        <pre className="p-4 text-sm text-slate-100 overflow-x-auto">
          <code>{example.code.trim()}</code>
        </pre>
      </div>
      {example.explanation && (
        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 italic">{example.explanation}</p>
      )}
    </div>
  );
};

const ContentDisplay: React.FC<ContentDisplayProps> = ({ chapter, topic }) => {
  const gradientTextStyle = "bg-gradient-to-r from-brand-accent to-emerald-500 bg-clip-text text-transparent";

  if (!topic || !chapter) {
    return (
      <div className="p-8 md:p-12 text-center h-full flex flex-col justify-center items-center relative overflow-hidden">
        <div className="relative z-10 flex flex-col items-center"> 
          <DigitalAlienIcon className="w-32 h-32 md:w-40 md:h-40 mx-auto text-sky-500 mb-8 animate-alienDanceAndHover" /> {/* Updated animation class */}
          <h2 className={`text-3xl md:text-4xl font-display font-semibold mb-4 uppercase ${gradientTextStyle}`}>Welcome to ZVC SMART CONTRACT MASTERY!</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Select a chapter and topic from the sidebar to begin your learning journey. This guide is designed to provide comprehensive insights into blockchain, Web3, smart contracts, Solidity, and Hardhat.
          </p>
          <div className="mt-10 p-6 bg-sky-50 dark:bg-sky-900 border border-sky-200 dark:border-sky-700 rounded-lg max-w-xl mx-auto backdrop-blur-sm shadow-xl"> {/* Removed /90 */}
              <h3 className="text-xl font-semibold text-sky-700 dark:text-sky-300 mb-2">Getting Started</h3>
              <p className="text-sm text-sky-600 dark:text-sky-400">
                  Navigate through the chapters on the left. Each chapter contains several topics, and each topic is broken down into sub-topics with detailed explanations, notes, and code examples where applicable.
              </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className="p-8 md:p-12 prose prose-slate dark:prose-invert max-w-none">
      <header className="mb-10 pb-6 border-b border-slate-300 dark:border-slate-700">
        <p className={`text-sm font-medium uppercase tracking-wider ${gradientTextStyle}`}>{chapter.title}</p>
        <h1 className={`text-4xl font-display font-bold mt-2 ${gradientTextStyle}`}>{topic.title}</h1> {/* Removed uppercase here */}
        {topic.introduction && topic.introduction.map((paragraph, index) => (
          <p key={`intro-${index}`} className="mt-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
             dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
        ))}
      </header>

      {topic.subTopics.map((subTopic) => (
        <section key={subTopic.id} className="mb-12">
          <h2 className={`text-2xl font-display font-semibold mb-4 pt-4 border-t border-slate-200 dark:border-slate-700 uppercase ${gradientTextStyle}`}>{subTopic.title}</h2>
          {subTopic.content.map((paragraph, index) => (
            <p key={`content-${index}`} className="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed"
               dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          ))}
          
          {subTopic.codeExamples && subTopic.codeExamples.map((example, index) => (
            <CodeExampleBlock key={`code-${subTopic.id}-${index}`} example={example} />
          ))}

          {subTopic.notes && subTopic.notes.map((note) => (
            <NoteBlock key={note.id} note={note} />
          ))}
        </section>
      ))}
    </article>
  );
};

export default ContentDisplay;