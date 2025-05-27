
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
      className={`modern-card flex items-center justify-center flex-col p-6 text-center transition-all duration-200 hover:scale-105 active:scale-95 ${
        variant === 'primary' 
          ? 'bg-blue-600 text-white' 
          : 'bg-white text-slate-900 border border-slate-200'
      }`}
    >
      <div className="mb-3 text-2xl">
        {icon}
      </div>
      <span className="text-sm font-medium">{title}</span>
    </button>
  );
};
