import React from 'react';

const ForecastWeather = ({ weatherData }) => {
    const RenderWeatherData = () => {
        if (!weatherData) {
            console.log('Loading forecast weather data...');
            return <div>Loading forecast weather data...</div>;
        }

        const { forecast } = weatherData;
        const { forecastday } = forecast;

        return (
            <div className='flex text-center justify-between gap-4'>
                {forecastday.map((day, index) => (
                    <div key={index} className='p-4 rounded-lg'>
                        <h2 className='text-lg'>{getDayFromDate(day.date)}</h2>
                        <div className='flex justify-center mb-1'>
                            <img src={day.day.condition.icon} alt="icon" className='scale-125 w-12 h-12' />
                        </div>
                        <p>{day.day.condition.text}</p>
                        <p className='text-sm'>{day.day.maxtemp_c}&deg;C / {day.day.mintemp_c}&deg;C</p>
                    </div>
                ))}
            </div>
        );
    }

    // Function to convert date to day of the week
    const getDayFromDate = (dateString) => {
        const options = { weekday: 'long' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }

    return (
        <div className='font-montserrat bg-white bg-opacity-80 backdrop-blur-md w-full mt-6 rounded-xl px-4 py-2'>
            {RenderWeatherData()}
        </div>
    );
}

export default ForecastWeather;
