
import React from 'react';
import { Clock, RefreshCw } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

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
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const totalMinutes = minutesUsed + minutesRemaining;
  const progressPercentage = (minutesUsed / totalMinutes) * 100;
  
  return (
    <div className="w-full max-w-3xl mx-auto mt-16 mb-12 px-6">
      <div className={`border ${isDark ? 'border-white/20 bg-black/20' : 'border-gray-200 bg-gray-50'} rounded-lg p-8`}>
        <div className="flex items-center gap-2 mb-4">
          <Clock className={`h-5 w-5 ${isDark ? 'text-white/80' : 'text-gray-700'}`} />
          <span className={`${isDark ? 'text-white' : 'text-gray-900'} font-medium`}>Your Weekly Usage</span>
        </div>
        
        <div className={`h-2 ${isDark ? 'bg-white/10' : 'bg-gray-200'} rounded-full mb-4 overflow-hidden`}>
          <div 
            className={`h-full ${isDark ? 'bg-white' : 'bg-gray-800'}`} 
            style={{ width: `${progressPercentage}%` }} 
          />
        </div>
        
        <div className="flex justify-between text-sm">
          <span className={`${isDark ? 'text-white/80' : 'text-gray-600'}`}>{minutesUsed} minutes used</span>
          <span className={`${isDark ? 'text-white/80' : 'text-gray-600'}`}>{minutesRemaining} minutes remaining</span>
        </div>
        
        <div className="flex items-center gap-2 mt-6 text-xs text-white/60">
          <RefreshCw className={`h-3 w-3 ${isDark ? 'text-white/60' : 'text-gray-500'}`} />
          <span className={`${isDark ? 'text-white/60' : 'text-gray-500'}`}>Resets in {resetsInDays} days</span>
        </div>
      </div>
    </div>
  );
}
