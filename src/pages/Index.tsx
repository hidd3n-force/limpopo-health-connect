
import { useState } from 'react';
import { BottomNavigation } from '../components/BottomNavigation';
import { HomePage } from './HomePage';
import { SearchPage } from './SearchPage';
import { BookingsPage } from './BookingsPage';
import { HealthPage } from './HealthPage';
import { ProfilePage } from './ProfilePage';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage onNavigate={setActiveTab} />;
      case 'search':
        return <SearchPage />;
      case 'health':
        return <HealthPage />;
      case 'bookings':
        return <BookingsPage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <HomePage onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-bg-primary">
      {renderActiveTab()}
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
