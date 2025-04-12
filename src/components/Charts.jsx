import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
  } from 'recharts';
  
  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#00bcd4', '#ffbb28', '#ff4b5c'];
  
  export const Charts = ({ stats }) => {
    if (!stats || !stats.total || !stats.types.length) return null;
  
    const typeData = stats.types.map((type, index) => ({
      name: type,
      value: stats.totalTypeCounts?.[type] || 0,
    }));
  
    const websiteData = [
      { name: 'With Website', value: stats.withWebsitePercent },
      { name: 'Without Website', value: 100 - stats.withWebsitePercent },
    ];
  
    return (
      <div className="charts-container" style={{ marginBottom: '3rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Brewery Insights</h2>
  
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
          <div style={{ width: '100%', maxWidth: 500 }}>
            <h3 style={{ textAlign: 'center' }}>Brewery Type Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie dataKey="value" data={typeData} outerRadius={100} label>
                  {typeData.map((_, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
  
          <div style={{ width: '100%', maxWidth: 500 }}>
            <h3 style={{ textAlign: 'center' }}>Website Availability</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={websiteData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#4361ee" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  };
  