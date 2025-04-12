import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const BreweryDetail = () => {
  const { id } = useParams();
  const [brewery, setBrewery] = useState(null);

  useEffect(() => {
    fetch(`https://api.openbrewerydb.org/v1/breweries/${id}`)
      .then(res => res.json())
      .then(data => setBrewery(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!brewery) {
    return <div className="status-message loading">Loading details...</div>;
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>{brewery.name}</h1>
        <p>Type: {brewery.brewery_type}</p>
        <p>Location: {brewery.city}, {brewery.state}, {brewery.country}</p>
        {brewery.website_url && (
          <p><a href={brewery.website_url} target="_blank" rel="noreferrer">Visit Website</a></p>
        )}
        <p>Phone: {brewery.phone || 'N/A'}</p>
        <p>Street: {brewery.street || 'N/A'}</p>
      </header>
    </div>
  );
};
