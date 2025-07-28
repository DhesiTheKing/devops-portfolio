import React from 'react';
import { CheckCircle, Clock, Play, AlertCircle } from 'lucide-react';

interface PipelineStageProps {
  stage: number;
  title: string;
  status: 'pending' | 'running' | 'success';
  isActive: boolean;
  onClick: () => void;
  onPromptClick?: () => void;
}

export default function PipelineStage({ stage, title, status, isActive, onClick, onPromptClick }: PipelineStageProps) {
  const getStatusIcon = () => {
    switch (status) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'running':
        return <Play className="w-5 h-5 text-blue-400 animate-pulse" />;
      default:
        return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'success':
        return 'border-green-400 bg-green-400/10';
      case 'running':
        return 'border-blue-400 bg-blue-400/10';
      default:
        return 'border-gray-600 bg-gray-800/50';
    }
  };

  return (
    <div
      className={`flex items-center space-x-3 p-3 rounded-lg border cursor-pointer transition-all duration-300 hover:bg-gray-700/50 ${
        isActive ? 'ring-2 ring-red-500 shadow-lg shadow-red-500/20' : ''
      } ${getStatusColor()}`}
      onClick={onClick}
    >
      <div className="flex items-center space-x-2 flex-1">
        <span className="text-sm font-mono text-gray-300">Stage {stage}:</span>
        {getStatusIcon()}
        <span className="text-sm font-medium text-white">{title}</span>
      </div>
      
      {onPromptClick && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPromptClick();
          }}
          className="p-1 text-gray-400 hover:text-red-400 transition-colors"
          title="View pipeline prompt"
        >
          <AlertCircle className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}