export const fetchBreweries = async () => {
    try {
      const response = await fetch('https://api.openbrewerydb.org/v1/breweries?per_page=50');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      return Array.isArray(data) ? data : []; // Ensure we always return an array
    } catch (error) {
      console.error('Error fetching breweries:', error);
      return []; // Return empty array on error
    }
  };
  
  export const calculateStats = (breweries = []) => {
    const stats = {
      total: 0,
      mostCommonType: 'n/a',
      withWebsitePercent: 0,
      types: []
    };
  
    if (!breweries.length) return stats;
  
    // Count breweries by type
    const typeCounts = {};
    let withWebsite = 0;
  
    breweries.forEach(brewery => {
      typeCounts[brewery.brewery_type] = (typeCounts[brewery.brewery_type] || 0) + 1;
      if (brewery.website_url) withWebsite++;
    });
  
    stats.total = breweries.length;
    stats.mostCommonType = Object.entries(typeCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'n/a';
    stats.withWebsitePercent = Math.round((withWebsite / breweries.length) * 100);
    stats.types = [...new Set(breweries.map(b => b.brewery_type))]; // Unique types
  
    return stats;
  };