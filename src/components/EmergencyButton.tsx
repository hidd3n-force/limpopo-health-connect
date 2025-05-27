
import { AlertTriangle } from 'lucide-react';

export const EmergencyButton = () => {
  const handleEmergency = () => {
    // In a real app, this would show emergency contacts and options
    const userConfirmed = window.confirm(
      "Emergency Services\n\nChoose an option:\n" +
      "1. Call 10177 (Emergency)\n" +
      "2. Call your emergency contact\n" +
      "3. Share location\n\n" +
      "Click OK to proceed with emergency call."
    );
    
    if (userConfirmed) {
      // In a real app, this would dial emergency services
      window.open('tel:10177');
    }
  };

  return (
    <button
      onClick={handleEmergency}
      className="fixed bottom-20 right-4 bg-error text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 active:animate-scale-press z-50"
      aria-label="Emergency Services"
    >
      <AlertTriangle className="w-6 h-6" />
    </button>
  );
};
