
import { Search, Calendar, FileText, Pill, User, Stethoscope, TestTube, Heart } from 'lucide-react';
import { SearchBar } from '../components/SearchBar';
import { QuickActionCard } from '../components/QuickActionCard';
import { DoctorCard } from '../components/DoctorCard';
import { AppointmentCard } from '../components/AppointmentCard';
import { EmergencyButton } from '../components/EmergencyButton';
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
    <div className="min-h-screen bg-bg-primary pb-20">
      {/* Header */}
      <div className="bg-white px-4 pt-12 pb-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-healthcare-h1 text-text-primary">
              Good morning, <span className="text-primary">Thabo</span>
            </h1>
            <p className="text-healthcare-body text-text-secondary mt-1">
              How can we help you today?
            </p>
          </div>
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Search Bar */}
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          onSearch={() => onNavigate('search')}
        />
      </div>

      <div className="px-4 space-y-6">
        {/* Quick Actions */}
        <section>
          <h2 className="text-healthcare-h2 text-text-primary mb-4">Quick Actions</h2>
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

        {/* Upcoming Appointment */}
        <section>
          <h2 className="text-healthcare-h2 text-text-primary mb-4">Upcoming Appointment</h2>
          <AppointmentCard
            appointment={mockUpcomingAppointment}
            onReschedule={(id) => console.log('Reschedule:', id)}
            onGetDirections={(id) => console.log('Directions:', id)}
          />
        </section>

        {/* Nearby Doctors */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-healthcare-h2 text-text-primary">Doctors Near You</h2>
            <button 
              onClick={() => onNavigate('search')}
              className="text-primary text-healthcare-small font-medium"
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
          <h2 className="text-healthcare-h2 text-text-primary mb-4">Health Tips</h2>
          <div className="healthcare-card">
            <div className="flex items-start space-x-3">
              <div className="bg-primary/10 rounded-full p-2">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-healthcare-h3 text-text-primary mb-2">
                  Stay Hydrated
                </h3>
                <p className="text-healthcare-small text-text-secondary">
                  Drinking enough water is crucial for your health. Aim for 8 glasses of water per day.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <EmergencyButton />
    </div>
  );
};
