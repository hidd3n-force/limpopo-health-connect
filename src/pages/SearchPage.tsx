
import { useState } from 'react';
import { SearchBar } from '../components/SearchBar';
import { FilterChips } from '../components/FilterChips';
import { DoctorCard } from '../components/DoctorCard';
import { MapPin, SlidersHorizontal } from 'lucide-react';

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
  },
  {
    id: '3',
    name: 'Mary Ndou',
    specialty: 'Dermatologist',
    experience: '12 years exp',
    rating: 4.9,
    reviewCount: 203,
    distance: '3.1',
    price: '400',
    nextAvailable: 'Today 16:30',
    imageUrl: '/placeholder.svg',
    verified: true,
  },
  {
    id: '4',
    name: 'Peter Mthembu',
    specialty: 'Pediatrician',
    experience: '10 years exp',
    rating: 4.7,
    reviewCount: 156,
    distance: '2.8',
    price: '380',
    nextAvailable: 'Monday 10:00',
    imageUrl: '/placeholder.svg',
    verified: true,
  }
];

const initialFilters = [
  { id: 'available-today', label: 'Available Today', active: false },
  { id: 'nearby', label: 'Nearby', active: true },
  { id: 'top-rated', label: 'Top Rated', active: false },
  { id: 'low-price', label: 'Low Price', active: false },
  { id: 'verified', label: 'Verified', active: false },
];

export const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState(initialFilters);
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');

  const handleFilterChange = (filterId: string) => {
    setFilters(filters.map(filter => 
      filter.id === filterId 
        ? { ...filter, active: !filter.active }
        : filter
    ));
  };

  const handleBookDoctor = (doctorId: string) => {
    console.log('Booking doctor:', doctorId);
  };

  return (
    <div className="min-h-screen bg-bg-primary pb-20">
      {/* Header */}
      <div className="bg-white px-4 pt-12 pb-4">
        <h1 className="text-healthcare-h1 text-text-primary mb-4">Find a Doctor</h1>
        
        {/* Search Bar */}
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search doctors, specialists, hospitals..."
        />
        
        {/* Filter Chips */}
        <FilterChips filters={filters} onFilterChange={handleFilterChange} />
        
        {/* View Toggle and Filters */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-lg text-healthcare-small font-medium transition-all duration-200 ${
                viewMode === 'list'
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-text-secondary'
              }`}
            >
              List
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`px-4 py-2 rounded-lg text-healthcare-small font-medium transition-all duration-200 ${
                viewMode === 'map'
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-text-secondary'
              }`}
            >
              Map
            </button>
          </div>
          
          <button className="flex items-center space-x-2 px-4 py-2 border border-border-color rounded-lg text-text-secondary hover:text-primary transition-colors">
            <SlidersHorizontal className="w-4 h-4" />
            <span className="text-healthcare-small font-medium">Filters</span>
          </button>
        </div>
      </div>

      {/* Results */}
      <div className="px-4 pt-4">
        {viewMode === 'list' ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-healthcare-small text-text-secondary">
                {mockDoctors.length} doctors found
              </p>
              <button className="flex items-center space-x-1 text-healthcare-small text-primary">
                <MapPin className="w-4 h-4" />
                <span>Polokwane</span>
              </button>
            </div>
            
            {mockDoctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                onBook={handleBookDoctor}
              />
            ))}
          </div>
        ) : (
          <div className="healthcare-card p-8 text-center">
            <MapPin className="w-16 h-16 text-text-secondary mx-auto mb-4" />
            <h3 className="text-healthcare-h3 text-text-primary mb-2">
              Map View Coming Soon
            </h3>
            <p className="text-healthcare-body text-text-secondary">
              Interactive map with doctor locations will be available soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
