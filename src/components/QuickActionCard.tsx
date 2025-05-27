
interface QuickActionCardProps {
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export const QuickActionCard = ({ title, icon, onClick, variant = 'primary' }: QuickActionCardProps) => {
  return (
    <button
      onClick={onClick}
      className={`healthcare-card flex items-center justify-center flex-col p-6 text-center transition-all duration-200 hover:shadow-lg active:animate-scale-press ${
        variant === 'primary' 
          ? 'bg-primary text-white' 
          : 'bg-card-bg text-text-primary hover:bg-gray-50'
      }`}
    >
      <div className="mb-3 text-2xl">
        {icon}
      </div>
      <span className="text-healthcare-body font-medium">{title}</span>
    </button>
  );
};
