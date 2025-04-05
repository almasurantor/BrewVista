export const BreweryCard = ({ brewery }) => {
    return (
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
          <a 
            href={
              brewery.website_url.startsWith('http') 
                ? brewery.website_url 
                : `https://${brewery.website_url}`
            } 
            target="_blank" 
            rel="noopener noreferrer"
            className="website-link"
          >
            🌐 Visit Website
          </a>
        )}
      </div>
    );
  };