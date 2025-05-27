import { Search, Calendar, FileText, Pill, User, Stethoscope, TestTube, Heart, LogIn } from 'lucide-react';
import { SearchBar } from '../components/SearchBar';
import { QuickActionCard } from '../components/QuickActionCard';
import { DoctorCard } from '../components/DoctorCard';
import { AppointmentCard } from '../components/AppointmentCard';
import { EmergencyButton } from '../components/EmergencyButton';
import { LoginForm } from '../components/LoginForm';
import { WeatherCard } from '../components/WeatherCard';
import { AdvertisementCard } from '../components/AdvertisementCard';
import { useState } from 'react';

const mockDoctors = [
  {
    id: '1',
    name: 'Sarah Molefe',
    specialty: 'Cardiologist',
    experience: '15 years exp',
    rating: 4.8,
    reviewCount: 127,
    distance: '2.3',
    price: '450',
    nextAvailable: 'Today 14:00',
    imageUrl: '/placeholder.svg',
    verified: true,
  },
  {
    id: '2',
    name: 'John Mashego',
    specialty: 'General Practitioner',
    experience: '8 years exp',
    rating: 4.6,
    reviewCount: 89,
    distance: '1.8',
    price: '350',
    nextAvailable: 'Tomorrow 09:00',
    imageUrl: '/placeholder.svg',
    verified: true,
  }
];

const mockUpcomingAppointment = {
  id: '1',
  doctorName: 'Sarah Molefe',
  specialty: 'Cardiologist',
  date: 'Tomorrow, 15 Dec',
  time: '14:00',
  location: 'Polokwane Private Hospital',
  status: 'confirmed' as const,
  type: 'in-person' as const,
};

interface HomePageProps {
  onNavigate: (tab: string) => void;
}

export const HomePage = ({ onNavigate }: HomePageProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleBookDoctor = (doctorId: string) => {
    console.log('Booking doctor:', doctorId);
    // In a real app, navigate to booking flow
  };

  const handleQuickAction = (action: string) => {
    switch (action) {
      case 'find-doctor':
        onNavigate('search');
        break;
      case 'appointments':
        onNavigate('bookings');
        break;
      case 'lab-results':
        onNavigate('health');
        break;
      case 'medication':
        // Navigate to medication ordering
        break;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header */}
      <div className="bg-white px-4 pt-12 pb-6 border-b border-slate-200">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Good morning, <span className="text-blue-600">Thabo</span>
            </h1>
            <p className="text-slate-600 mt-1">
              How can we help you today?
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setShowLoginForm(true)}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              <LogIn className="w-4 h-4" />
              Login
            </button>
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          onSearch={() => onNavigate('search')}
        />
      </div>

      <div className="px-4 space-y-8">
        {/* Weather & Quick Info */}
        <section className="pt-6">
          <div className="flex gap-4 overflow-x-auto pb-4">
            <WeatherCard />
            <div className="modern-card p-6 min-w-[280px]">
              <h3 className="font-bold text-lg text-slate-900 mb-2">Health Alert</h3>
              <p className="text-sm text-slate-600 mb-4">
                Flu season is approaching. Book your vaccination today to stay protected.
              </p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                Book Vaccination
              </button>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <QuickActionCard
              title="Find a Doctor"
              icon={<Stethoscope className="w-6 h-6" />}
              onClick={() => handleQuickAction('find-doctor')}
              variant="primary"
            />
            <QuickActionCard
              title="My Appointments"
              icon={<Calendar className="w-6 h-6" />}
              onClick={() => handleQuickAction('appointments')}
            />
            <QuickActionCard
              title="Lab Results"
              icon={<TestTube className="w-6 h-6" />}
              onClick={() => handleQuickAction('lab-results')}
            />
            <QuickActionCard
              title="Order Medication"
              icon={<Pill className="w-6 h-6" />}
              onClick={() => handleQuickAction('medication')}
            />
          </div>
        </section>

        {/* Advertisements */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">Partner Offers</h2>
          <div className="grid gap-4">
            <AdvertisementCard
              title="Free Health Screening"
              description="Complimentary health check-up for new patients. Book your appointment today."
              sponsor="Polokwane Private Hospital"
              ctaText="Book Now"
              onClick={() => console.log('Ad clicked: Health Screening')}
            />
            <AdvertisementCard
              title="20% Off Pharmacy Orders"
              description="Get discounts on all prescription medications delivered to your door."
              sponsor="Clicks Pharmacy"
              ctaText="Shop Now"
              onClick={() => console.log('Ad clicked: Pharmacy')}
            />
          </div>
        </section>

        {/* Upcoming Appointment */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">Upcoming Appointment</h2>
          <AppointmentCard
            appointment={mockUpcomingAppointment}
            onReschedule={(id) => console.log('Reschedule:', id)}
            onGetDirections={(id) => console.log('Directions:', id)}
          />
        </section>

        {/* Nearby Doctors */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-slate-900">Doctors Near You</h2>
            <button 
              onClick={() => onNavigate('search')}
              className="text-blue-600 text-sm font-medium hover:text-blue-700"
            >
              See all
            </button>
          </div>
          <div className="space-y-4">
            {mockDoctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                onBook={handleBookDoctor}
              />
            ))}
          </div>
        </section>

        {/* Health Tips */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">Health Tips</h2>
          <div className="healthcare-card">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 rounded-full p-2">
                <Heart className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Stay Hydrated
                </h3>
                <p className="text-sm text-slate-600">
                  Drinking enough water is crucial for your health. Aim for 8 glasses of water per day.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Health News */}
        <section className="pb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Health News</h2>
          <div className="space-y-4">
            <div className="healthcare-card">
              <h3 className="font-bold text-slate-900 mb-2">New COVID-19 Variant Update</h3>
              <p className="text-sm text-slate-600 mb-3">
                Health authorities recommend continued vaccination and booster shots for optimal protection.
              </p>
              <span className="text-xs text-slate-500">2 hours ago</span>
            </div>
            <div className="healthcare-card">
              <h3 className="font-bold text-slate-900 mb-2">Mental Health Awareness Week</h3>
              <p className="text-sm text-slate-600 mb-3">
                Free counseling sessions available throughout Limpopo Province this week.
              </p>
              <span className="text-xs text-slate-500">1 day ago</span>
            </div>
          </div>
        </section>
      </div>

      <EmergencyButton />
      
      {showLoginForm && (
        <LoginForm onClose={() => setShowLoginForm(false)} />
      )}
    </div>
  );
};
