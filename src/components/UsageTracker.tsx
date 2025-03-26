
import React from 'react';
import { Clock } from 'lucide-react';

interface UsageTrackerProps {
  minutesUsed: number;
  minutesRemaining: number;
  resetsInDays: number;
}

export function UsageTracker({ 
  minutesUsed = 2, 
  minutesRemaining = 28, 
  resetsInDays = 2 
}: Partial<UsageTrackerProps>) {
  const totalMinutes = minutesUsed + minutesRemaining;
  const progressPercentage = (minutesUsed / totalMinutes) * 100;
  
  return (
    <div className="usage-card w-full max-w-3xl mx-auto mt-16 animate-fade-in-delay-2 opacity-0">
      <div className="flex items-center gap-2 mb-4">
        <Clock className="h-5 w-5 text-black/70 dark:text-white/70" />
        <span className="text-black dark:text-white text-sm font-medium">Your Weekly Usage</span>
      </div>
      
      <div className="progress-bar mb-2">
        <div className="progress-value animate-pulse-subtle" style={{ width: `${progressPercentage}%` }} />
      </div>
      
      <div className="flex justify-between text-xs">
        <span className="text-black/70 dark:text-white/70">{minutesUsed} minutes used</span>
        <span className="text-black/70 dark:text-white/70">{minutesRemaining} minutes remaining</span>
      </div>
      
      <div className="flex items-center gap-2 mt-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black/60 dark:text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        <span className="text-black/60 dark:text-white/60 text-xs">Resets in {resetsInDays} days</span>
      </div>
    </div>
  );
}
