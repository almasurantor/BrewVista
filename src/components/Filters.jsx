export const Filters = ({ types, selectedType, setSelectedType }) => {
    return (
      <div className="filters">
        <select 
          value={selectedType} 
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="all">All Types</option>
          {types.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>
    );
  };