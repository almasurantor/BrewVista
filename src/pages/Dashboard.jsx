import { useState, useEffect } from 'react';
import { fetchBreweries, calculateStats } from '../services/breweryService';
import { SearchBar } from '../components/SearchBar';
import { Filters } from '../components/Filters';
import { StatsCard } from '../components/StatsCard';
import { BreweryList } from '../components/BreweryList';
import { Charts } from '../components/Charts';

export const Dashboard = () => {
  const [breweries, setBreweries] = useState([]);
  const [filteredBreweries, setFilteredBreweries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [stats, setStats] = useState(calculateStats([]));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchBreweries();
        if (!data.length) {
          setError('No breweries found - API may be unavailable');
        }
        setBreweries(data);
        setFilteredBreweries(data);
        setStats(calculateStats(data));
      } catch (err) {
        setError('Failed to load breweries. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    let results = [...breweries];
    
    if (searchTerm) {
      results = results.filter(brewery =>
        brewery.name?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedType !== 'all') {
      results = results.filter(brewery => 
        brewery.brewery_type === selectedType
      );
    }

    setFilteredBreweries(results);
    setStats(calculateStats(results));
  }, [searchTerm, selectedType, breweries]);

  if (loading) {
    return (
      <div className="status-message loading">
        <p>Loading breweries...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="status-message error">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Brewery Explorer</h1>
        <p>Discover craft breweries across the world</p>
      </header>
      
      <div className="controls">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Filters 
          types={stats.types} 
          selectedType={selectedType} 
          setSelectedType={setSelectedType} 
        />
      </div>
      
      <StatsCard stats={stats} />
      <Charts stats={stats} />
      {filteredBreweries.length === 0 ? (
        <div className="status-message no-results">
          <p>No breweries found matching your criteria</p>
          <p>Try a different search term or filter setting</p>
        </div>
      ) : (
        <BreweryList breweries={filteredBreweries} />
      )}
    </div>
  );
};