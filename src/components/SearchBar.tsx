
import { Search } from 'lucide-react';

interface SearchBarProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onSearch?: () => void;
}

export const SearchBar = ({ 
  placeholder = "Search doctors, specialists...", 
  value, 
  onChange, 
  onSearch 
}: SearchBarProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="healthcare-search-bar pl-12 pr-4 text-healthcare-body placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>
    </form>
  );
};
