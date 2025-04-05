import { BreweryCard } from './BreweryCard';

export const BreweryList = ({ breweries }) => {
  return (
    <div className="brewery-list">
      {breweries.map(brewery => (
        <BreweryCard key={brewery.id} brewery={brewery} />
      ))}
    </div>
  );
};