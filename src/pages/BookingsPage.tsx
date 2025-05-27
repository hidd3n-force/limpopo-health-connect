
import { useState } from 'react';
import { AppointmentCard } from '../components/AppointmentCard';

const mockUpcomingAppointments = [
  {
    id: '1',
    doctorName: 'Sarah Molefe',
    specialty: 'Cardiologist',
    date: 'Tomorrow, 15 Dec',
    time: '14:00',
    location: 'Polokwane Private Hospital',
    status: 'confirmed' as const,
    type: 'in-person' as const,
  },
  {
    id: '2',
    doctorName: 'John Mashego',
    specialty: 'General Practitioner',
    date: 'Monday, 18 Dec',
    time: '09:00',
    location: 'Mediclinic Polokwane',
    status: 'pending' as const,
    type: 'telemedicine' as const,
  }
];

const mockPastAppointments = [
  {
    id: '3',
    doctorName: 'Mary Ndou',
    specialty: 'Dermatologist',
    date: '10 Dec 2024',
    time: '11:00',
    location: 'Skin Care Clinic',
    status: 'completed' as const,
    type: 'in-person' as const,
  },
  {
    id: '4',
    doctorName: 'Peter Mthembu',
    specialty: 'Pediatrician',
    date: '5 Dec 2024',
    time: '15:30',
    location: 'Children\'s Health Centre',
    status: 'completed' as const,
    type: 'in-person' as const,
  }
];

export const BookingsPage = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  const handleReschedule = (appointmentId: string) => {
    console.log('Reschedule appointment:', appointmentId);
  };

  const handleCancel = (appointmentId: string) => {
    console.log('Cancel appointment:', appointmentId);
  };

  const handleGetDirections = (appointmentId: string) => {
    console.log('Get directions for appointment:', appointmentId);
  };

  const appointments = activeTab === 'upcoming' ? mockUpcomingAppointments : mockPastAppointments;

  return (
    <div className="min-h-screen bg-bg-primary pb-20">
      {/* Header */}
      <div className="bg-white px-4 pt-12 pb-4">
        <h1 className="text-healthcare-h1 text-text-primary mb-6">My Appointments</h1>
        
        {/* Tabs */}
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`flex-1 px-4 py-3 rounded-lg text-healthcare-body font-medium transition-all duration-200 ${
              activeTab === 'upcoming'
                ? 'bg-white text-primary shadow-sm'
                : 'text-text-secondary'
            }`}
          >
            Upcoming ({mockUpcomingAppointments.length})
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`flex-1 px-4 py-3 rounded-lg text-healthcare-body font-medium transition-all duration-200 ${
              activeTab === 'past'
                ? 'bg-white text-primary shadow-sm'
                : 'text-text-secondary'
            }`}
          >
            Past ({mockPastAppointments.length})
          </button>
        </div>
      </div>

      {/* Appointments List */}
      <div className="px-4 pt-4 space-y-4">
        {appointments.length > 0 ? (
          appointments.map((appointment) => (
            <AppointmentCard
              key={appointment.id}
              appointment={appointment}
              onReschedule={activeTab === 'upcoming' ? handleReschedule : undefined}
              onCancel={activeTab === 'upcoming' ? handleCancel : undefined}
              onGetDirections={handleGetDirections}
            />
          ))
        ) : (
          <div className="healthcare-card p-8 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📅</span>
            </div>
            <h3 className="text-healthcare-h3 text-text-primary mb-2">
              No {activeTab} appointments
            </h3>
            <p className="text-healthcare-body text-text-secondary mb-6">
              {activeTab === 'upcoming' 
                ? "You don't have any upcoming appointments. Book your next consultation."
                : "Your past appointments will appear here."
              }
            </p>
            {activeTab === 'upcoming' && (
              <button className="healthcare-button-primary">
                Find a Doctor
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
