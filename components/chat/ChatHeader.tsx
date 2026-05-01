'use client';

import { ModelId } from '@/types/chat';
import { ModelSelector } from './ModelSelector';

interface ChatHeaderProps {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
  selectedModel: ModelId;
  onSelectModel: (model: ModelId) => void;
  onNewChat: () => void;
}

export function ChatHeader({
  sidebarOpen,
  onToggleSidebar,
  selectedModel,
  onSelectModel,
  onNewChat,
}: ChatHeaderProps) {
  return (
    <header className={`sticky top-0 z-30 bg-pure-white dark:bg-dark-gray ${
      !sidebarOpen ? 'border-t border-pure-black/25 dark:border-pure-white/20' : ''
    }`}>
      {/* Draggable titlebar area — matches the sidebar titlebar */}
      <div className="app-drag-region h-[58px]" aria-hidden="true" />

      {/* Header content — below the titlebar */}
      <div className="app-drag-region flex justify-between items-center px-4 pb-3 border-b border-pure-black/25 dark:border-pure-white/20 shadow-[0_3px_12px_rgba(0,0,0,0.08)] dark:shadow-[0_3px_12px_rgba(0,0,0,0.3)]">
        <div className="flex items-center gap-3 app-no-drag">
          <button
            onClick={onToggleSidebar}
            className="app-no-drag text-neutral-gray dark:text-neutral-gray hover:text-theme-primary dark:hover:text-theme-primary p-2 rounded-claude-sm hover:bg-pure-black/5 dark:hover:bg-pure-white/5 transition-colors"
            aria-label={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </button>
          <ModelSelector selectedModel={selectedModel} onSelect={onSelectModel} />
        </div>

        <div className="flex items-center gap-2 app-no-drag">
          <button
            onClick={onNewChat}
            className="app-no-drag px-4 py-2 bg-theme-primary hover:bg-theme-primary-hover text-theme-primary-text rounded-claude-sm transition-colors font-medium text-sm hidden sm:block shadow-claude-sm"
          >
            New Chat
          </button>
        </div>
      </div>
    </header>
  );
}
