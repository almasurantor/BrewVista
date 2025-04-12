import { Link } from 'react-router-dom';

export const BreweryCard = ({ brewery }) => {
  return (
    <Link to={`/brewery/${brewery.id}`} className="brewery-card-link">
      <div className="brewery-card">
        <h3>{brewery.name}</h3>
        <div className="brewery-details">
          <p>
            <span className="detail-label">Type:</span> 
            <span className="detail-value">{brewery.brewery_type || 'Unknown'}</span>
          </p>
          <p>
            <span className="detail-label">Location:</span> 
            <span className="detail-value">
              {brewery.city}, {brewery.state || brewery.state_province}
            </span>
          </p>
          {brewery.country && (
            <p>
              <span className="detail-label">Country:</span> 
              <span className="detail-value">{brewery.country}</span>
            </p>
          )}
        </div>
        {brewery.website_url && (
          <p className="website-link">
            🌐 {brewery.website_url}
          </p>
        )}
      </div>
    </Link>
  );
};
