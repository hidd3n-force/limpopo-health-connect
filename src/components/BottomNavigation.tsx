
import { Home, Search, FileText, Calendar, User } from 'lucide-react';
import { useState } from 'react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'search', label: 'Search', icon: Search },
  { id: 'health', label: 'My Health', icon: FileText },
  { id: 'bookings', label: 'Bookings', icon: Calendar },
  { id: 'profile', label: 'Profile', icon: User },
];

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const BottomNavigation = ({ activeTab, onTabChange }: BottomNavigationProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border-color px-2 py-2 safe-area-inset-bottom">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-200 min-h-[48px] ${
                isActive 
                  ? 'text-primary bg-primary/10' 
                  : 'text-text-secondary hover:text-primary'
              }`}
            >
              <Icon className={`w-5 h-5 mb-1 ${isActive ? 'fill-current' : ''}`} />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
