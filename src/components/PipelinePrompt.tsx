import React, { useState, useEffect } from 'react';
import { Terminal, X } from 'lucide-react';

interface PipelinePromptProps {
  stage: number;
  title: string;
  isVisible: boolean;
  onClose: () => void;
  prompt: string;
  response: string;
}

export default function PipelinePrompt({ stage, title, isVisible, onClose, prompt, response }: PipelinePromptProps) {
  const [displayedResponse, setDisplayedResponse] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!isVisible) {
      setDisplayedResponse('');
      setIsTyping(false);
      return;
    }

    setIsTyping(true);
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < response.length) {
        setDisplayedResponse(response.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [response, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 border border-red-500/50 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl shadow-red-500/20">
        <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-gray-800">
          <div className="flex items-center space-x-3">
            <Terminal className="w-5 h-5 text-red-400" />
            <h3 className="text-lg font-semibold text-white">
              Pipeline Stage {stage}: {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6 space-y-4 overflow-y-auto max-h-[60vh]">
          <div className="space-y-2">
            <div className="text-sm text-gray-400 font-mono">jenkins@pipeline:~$</div>
            <div className="text-green-400 font-mono text-sm bg-black/30 p-3 rounded border-l-4 border-green-400">
              {prompt}
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="text-sm text-gray-400">Output:</div>
            <div className="bg-black/50 p-4 rounded font-mono text-sm text-gray-300 min-h-[100px] border border-gray-700">
              {displayedResponse}
              {isTyping && <span className="animate-pulse text-green-400">|</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}