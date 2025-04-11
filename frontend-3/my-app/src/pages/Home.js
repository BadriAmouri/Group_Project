import React, { useState, useEffect } from 'react';

// Function to generate random progress data for each week
const generateRandomData = (weeks) => {
  return Array.from({ length: weeks }, (_, index) => ({
    week: index + 1,
    progress: Math.floor(Math.random() * 100), // Random percentage for progress
    status: Math.random() > 0.5 ? 'On track' : 'Delayed', // Random status
  }));
};

function Home() {
  const [progressData, setProgressData] = useState([]);

  useEffect(() => {
    const data = generateRandomData(14); // Generate progress for 14 weeks
    setProgressData(data);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gray-100 font-sans py-8 px-6">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-orange-500 mb-6">Project Progress Report</h1>

        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Progress by Week</h2>
        <p className="text-lg text-gray-600 mb-6">
          This is the progress report for the project spanning over 14 weeks. Current progress is shown per week.
        </p>

        {/* Display each week's progress */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {progressData.map((weekData) => (
            <div
              key={weekData.week}
              className={`bg-white p-6 rounded-lg shadow-md transition-all hover:scale-105 ${
                weekData.week === 7 ? 'border-4 border-orange-500' : ''
              }`} // Highlight Week 7 with a border
            >
              <h3 className="text-xl font-semibold text-orange-600 mb-2">Week {weekData.week}</h3>
              <div className="text-sm text-gray-500 mb-2">Progress: {weekData.progress}%</div>

              {/* Progress Bar */}
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200">
                      {weekData.status}
                    </span>
                  </div>
                </div>
                <div className="flex mb-2 items-center justify-between">
                  <div className="w-full bg-gray-200 rounded-full">
                    <div
                      className="bg-orange-500 text-xs leading-none py-1 text-center text-white"
                      style={{ width: `${weekData.progress}%` }}
                    >
                      {weekData.progress}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Display Week 7 (Current Week) */}
        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold text-gray-700">Week 7 (Current Week)</h3>
          <div className="text-lg text-orange-500">Progress: {progressData[6]?.progress}%</div> {/* Week 7 is index 6 */}
          <div className={`text-lg ${progressData[6]?.status === 'On track' ? 'text-green-500' : 'text-red-500'}`}>
            Status: {progressData[6]?.status}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
