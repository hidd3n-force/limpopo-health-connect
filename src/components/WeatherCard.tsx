
export const WeatherCard = () => {
  return (
    <div className="weather-card">
      <div className="weather-container">
        <div className="cloud front">
          <span className="left-front"></span>
          <span className="right-front"></span>
        </div>
        <span className="sun sunshine"></span>
        <span className="sun"></span>
        <div className="cloud back">
          <span className="left-back"></span>
          <span className="right-back"></span>
        </div>
      </div>

      <div className="card-header">
        <span>Polokwane, Limpopo<br />South Africa</span>
        <span>{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</span>
      </div>

      <span className="temp">24°</span>

      <div className="temp-scale">
        <span>Celsius</span>
      </div>
    </div>
  );
};
