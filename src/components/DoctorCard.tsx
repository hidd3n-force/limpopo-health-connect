
import { MapPin, Clock, Heart } from 'lucide-react';
import { useState } from 'react';

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  reviewCount: number;
  distance: string;
  price: string;
  nextAvailable: string;
  imageUrl: string;
  verified: boolean;
}

interface DoctorCardProps {
  doctor: Doctor;
  onBook: (doctorId: string) => void;
}

export const DoctorCard = ({ doctor, onBook }: DoctorCardProps) => {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <div className="healthcare-card space-y-4">
      <div className="flex items-start space-x-4">
        <div className="relative">
          <img
            src={doctor.imageUrl}
            alt={doctor.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          {doctor.verified && (
            <div className="absolute -top-1 -right-1 bg-success rounded-full w-5 h-5 flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-healthcare-h3 text-text-primary font-semibold truncate">
                Dr. {doctor.name}
              </h3>
              <div className="flex items-center space-x-1 mt-1">
                <span className="text-warning">⭐</span>
                <span className="text-healthcare-small text-text-primary font-medium">
                  {doctor.rating}
                </span>
                <span className="text-healthcare-small text-text-secondary">
                  ({doctor.reviewCount} reviews)
                </span>
              </div>
            </div>
            
            <button
              onClick={() => setIsFavorited(!isFavorited)}
              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Heart 
                className={`w-5 h-5 ${
                  isFavorited ? 'fill-red-500 text-red-500' : 'text-text-secondary'
                }`} 
              />
            </button>
          </div>
          
          <div className="mt-2 space-y-1">
            <p className="text-healthcare-small text-text-secondary">
              {doctor.specialty} | {doctor.experience}
            </p>
            
            <div className="flex items-center space-x-4 text-healthcare-small text-text-secondary">
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>{doctor.distance} km</span>
              </div>
              
              <div className="flex items-center space-x-1">
                <span className="text-success font-medium">R{doctor.price}</span>
                <span>consultation</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-1 text-healthcare-small text-text-secondary">
              <Clock className="w-4 h-4" />
              <span>Next: {doctor.nextAvailable}</span>
            </div>
          </div>
        </div>
      </div>
      
      <button
        onClick={() => onBook(doctor.id)}
        className="healthcare-button-primary w-full"
      >
        Book Now
      </button>
    </div>
  );
};
