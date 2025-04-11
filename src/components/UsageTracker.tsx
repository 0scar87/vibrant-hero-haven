
import React from 'react';
import { Clock, RefreshCw } from 'lucide-react';

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
    <div className="w-full max-w-3xl mx-auto mt-16 mb-12 px-6">
      <div className="border border-white/20 rounded-lg p-8 bg-black/20">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="h-5 w-5 text-white/80" />
          <span className="text-white font-medium">Your Weekly Usage</span>
        </div>
        
        <div className="h-2 bg-white/10 rounded-full mb-4 overflow-hidden">
          <div 
            className="h-full bg-white" 
            style={{ width: `${progressPercentage}%` }} 
          />
        </div>
        
        <div className="flex justify-between text-sm">
          <span className="text-white/80">{minutesUsed} minutes used</span>
          <span className="text-white/80">{minutesRemaining} minutes remaining</span>
        </div>
        
        <div className="flex items-center gap-2 mt-6 text-xs text-white/60">
          <RefreshCw className="h-3 w-3" />
          <span>Resets in {resetsInDays} days</span>
        </div>
      </div>
    </div>
  );
}
