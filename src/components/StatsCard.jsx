export const StatsCard = ({ stats }) => {
    return (
      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Breweries</h3>
          <p>{stats.total}</p>
        </div>
        <div className="stat-card">
          <h3>Most Common Type</h3>
          <p>{stats.mostCommonType}</p>
        </div>
        <div className="stat-card">
          <h3>With Website</h3>
          <p>{stats.withWebsitePercent}%</p>
        </div>
      </div>
    );
  };