import React, { useState, useEffect } from 'react';

interface TerminalLogProps {
  logs: string[];
  isVisible: boolean;
}

export default function TerminalLog({ logs, isVisible }: TerminalLogProps) {
  const [displayedLogs, setDisplayedLogs] = useState<string[]>([]);
  const [currentLogIndex, setCurrentLogIndex] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setDisplayedLogs([]);
      setCurrentLogIndex(0);
      return;
    }

    const interval = setInterval(() => {
      if (currentLogIndex < logs.length) {
        setDisplayedLogs(prev => [...prev, logs[currentLogIndex]]);
        setCurrentLogIndex(prev => prev + 1);
      } else {
        clearInterval(interval);
      }
    }, 800);

    return () => clearInterval(interval);
  }, [logs, isVisible, currentLogIndex]);

  return (
    <div className="bg-black/70 rounded-lg p-4 font-mono text-sm border border-gray-700 shadow-lg">
      <div className="flex items-center space-x-2 mb-3">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="text-gray-400 ml-2">jenkins-pipeline-console</span>
      </div>
      <div className="space-y-1">
        {displayedLogs.map((log, index) => (
          <div key={index} className="text-green-400 animate-fadeIn">
            <span className="text-gray-500">[{new Date().toLocaleTimeString()}]</span> {log}
          </div>
        ))}
        {isVisible && (
          <div className="flex items-center animate-pulse">
            <span className="text-green-400">$</span>
            <div className="w-2 h-4 bg-green-400 ml-1 animate-blink"></div>
          </div>
        )}
      </div>
    </div>
  );
}