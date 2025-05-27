
import { Calendar, Clock, MapPin } from 'lucide-react';

interface Appointment {
  id: string;
  doctorName: string;
  specialty: string;
  date: string;
  time: string;
  location: string;
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled';
  type: 'in-person' | 'telemedicine';
}

interface AppointmentCardProps {
  appointment: Appointment;
  onReschedule?: (appointmentId: string) => void;
  onCancel?: (appointmentId: string) => void;
  onGetDirections?: (appointmentId: string) => void;
}

export const AppointmentCard = ({ 
  appointment, 
  onReschedule, 
  onCancel, 
  onGetDirections 
}: AppointmentCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-success';
      case 'pending': return 'bg-warning';
      case 'completed': return 'bg-primary';
      case 'cancelled': return 'bg-error';
      default: return 'bg-text-secondary';
    }
  };

  const getStatusText = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <div className="healthcare-card space-y-4">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <span className={`px-2 py-1 rounded-full text-xs text-white font-medium ${getStatusColor(appointment.status)}`}>
              {getStatusText(appointment.status)}
            </span>
            {appointment.type === 'telemedicine' && (
              <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-700 font-medium">
                Video Call
              </span>
            )}
          </div>
          
          <h3 className="text-healthcare-h3 text-text-primary font-semibold">
            Dr. {appointment.doctorName}
          </h3>
          <p className="text-healthcare-small text-text-secondary mb-3">
            {appointment.specialty}
          </p>
          
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-healthcare-small text-text-secondary">
              <Calendar className="w-4 h-4" />
              <span>{appointment.date}</span>
            </div>
            
            <div className="flex items-center space-x-2 text-healthcare-small text-text-secondary">
              <Clock className="w-4 h-4" />
              <span>{appointment.time}</span>
            </div>
            
            {appointment.type === 'in-person' && (
              <div className="flex items-center space-x-2 text-healthcare-small text-text-secondary">
                <MapPin className="w-4 h-4" />
                <span>{appointment.location}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {appointment.status === 'confirmed' && (
        <div className="flex space-x-2">
          {onReschedule && (
            <button
              onClick={() => onReschedule(appointment.id)}
              className="healthcare-button-secondary flex-1"
            >
              Reschedule
            </button>
          )}
          
          {appointment.type === 'in-person' && onGetDirections && (
            <button
              onClick={() => onGetDirections(appointment.id)}
              className="healthcare-button-primary flex-1"
            >
              Directions
            </button>
          )}
          
          {appointment.type === 'telemedicine' && (
            <button className="healthcare-button-primary flex-1">
              Join Call
            </button>
          )}
        </div>
      )}
      
      {appointment.status === 'pending' && onCancel && (
        <button
          onClick={() => onCancel(appointment.id)}
          className="healthcare-button-secondary w-full"
        >
          Cancel Appointment
        </button>
      )}
    </div>
  );
};
