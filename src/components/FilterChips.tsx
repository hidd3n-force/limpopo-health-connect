
import { useState } from 'react';

interface Filter {
  id: string;
  label: string;
  active: boolean;
}

interface FilterChipsProps {
  filters: Filter[];
  onFilterChange: (filterId: string) => void;
}

export const FilterChips = ({ filters, onFilterChange }: FilterChipsProps) => {
  return (
    <div className="flex flex-wrap gap-2 py-2">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`px-4 py-2 rounded-full text-healthcare-small font-medium transition-all duration-200 ${
            filter.active
              ? 'bg-primary text-white'
              : 'bg-white text-text-secondary border border-border-color hover:border-primary hover:text-primary'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};
