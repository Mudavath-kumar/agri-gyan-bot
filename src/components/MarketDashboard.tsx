import React from 'react';

const MarketDashboard: React.FC = () => {
  const weatherData = [
    { day: 'Mon', temp: 28, rain: 15 },
    { day: 'Tue', temp: 32, rain: 5 },
    { day: 'Wed', temp: 29, rain: 40 },
    { day: 'Thu', temp: 26, rain: 65 },
    { day: 'Fri', temp: 30, rain: 20 },
  ];

  const marketPrices = [
    { crop: 'Wheat', price: 2150, change: 5.2, trending: 'up' },
    { crop: 'Rice', price: 1980, change: -2.1, trending: 'down' },
    { crop: 'Corn', price: 1750, change: 8.7, trending: 'up' },
    { crop: 'Soybean', price: 4200, change: 3.4, trending: 'up' },
  ];

  return (
    <section className="py-20 sky-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Market & Weather 
            <span className="text-primary"> Intelligence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time data streams provide actionable insights for better farming decisions
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Weather Forecast Card */}
          <div className="earth-card p-8 hover-glow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mr-4">
                <span className="text-2xl">🌤️</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground">Weather Forecast</h3>
                <p className="text-muted-foreground">Next 5 days outlook</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {weatherData.map((day, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-card-soft rounded-lg">
                  <span className="font-medium text-foreground">{day.day}</span>
                  <div className="flex items-center space-x-4">
                    <span className="text-lg font-semibold text-foreground">{day.temp}°C</span>
                    <div className="flex items-center text-accent">
                      <span className="text-sm">☔</span>
                      <span className="ml-1 text-sm">{day.rain}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Market Prices Card */}
          <div className="earth-card p-8 hover-glow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-cta flex items-center justify-center mr-4">
                <span className="text-2xl">📊</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground">Market Prices</h3>
                <p className="text-muted-foreground">Today's mandi rates (₹/quintal)</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {marketPrices.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-card-soft rounded-lg">
                  <span className="font-medium text-foreground">{item.crop}</span>
                  <div className="flex items-center space-x-3">
                    <span className="text-lg font-semibold text-foreground">₹{item.price}</span>
                    <div className={`flex items-center text-sm ${
                      item.trending === 'up' ? 'text-success' : 'text-destructive'
                    }`}>
                      <span>{item.trending === 'up' ? '↗' : '↘'}</span>
                      <span className="ml-1">{Math.abs(item.change)}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketDashboard;