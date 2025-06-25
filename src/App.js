import React, { useState, useEffect, useCallback } from 'react';

// Sample time capsule facts. In a real application, these might come from an API or a larger database.
const TIME_CAPSULES = [
  "Did you know a 'jiffy' is an actual unit of time: 1/100th of a second!",
  "The shortest unit of time ever measured is the 'zeptosecond' (10^-21 seconds).",
  "Time dilation, a concept from Einstein's relativity, means time passes differently for observers in relative motion or different gravitational fields.",
  "The 'atomic clock' is the most accurate timekeeping device, losing about 1 second every 100 million years.",
  "Before clocks, ancient civilizations used sundials and water clocks to measure time.",
  "The concept of 'leap seconds' is used to keep atomic time (TAI) in sync with astronomical time (UT1).",
  "The 'arrow of time' refers to time's one-way direction, from past to future.",
  "A 'chronometer' is a specific type of mechanical timepiece of great precision.",
  "The Big Bang theory suggests that time itself began with the universe's origin.",
  "In some philosophical views, time is not a fundamental aspect of reality but an emergent property.",
  "The average human lifespan is roughly 2.5 billion seconds.",
  "The 'Maya calendar' was one of the most sophisticated timekeeping systems in the ancient world.",
  "The Earth's rotation is gradually slowing down, meaning days are getting longer by about 1.7 milliseconds per century.",
  "Future humans might live on a 'Mars time' where a day is 24 hours and 39 minutes long.",
  "The oldest known continuous calendar is the Egyptian calendar, dating back over 5,000 years.",
  "The idea of 'spacetime' combines space and time into a single continuum.",
  "Some physicists explore theories where time could be cyclical, not linear.",
  "A 'nanosecond' is to a second what a second is to about 31.7 years.",
  "The 'Julian calendar' was replaced by the Gregorian calendar because it was slightly too long.",
  "Your perception of time can change based on your emotional state or what you are doing."
];

// Main App component
const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentCapsule, setCurrentCapsule] = useState('');
  const [fade, setFade] = useState(true); // For fade-in/out effect

  // Function to get a random time capsule fact
  const getRandomCapsule = useCallback(() => {
    setFade(false); // Start fade-out
    // Use a short delay before changing content to allow fade-out effect
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * TIME_CAPSULES.length);
      setCurrentCapsule(TIME_CAPSULES[randomIndex]);
      setFade(true); // Start fade-in
    }, 500); // 500ms should match the transition duration in CSS
  }, []);

  // Effect to update current time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second
    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  // Effect to load initial time capsule on component mount
  useEffect(() => {
    getRandomCapsule();
  }, [getRandomCapsule]); // Dependency array ensures it runs once on mount

  // Helper function to format the current time for display
  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true // Use 12-hour format with AM/PM
    });
  };

  // Helper function to format the current date for display
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long', // e.g., "Monday"
      year: 'numeric', // e.g., "2023"
      month: 'long',   // e.g., "October"
      day: 'numeric'   // e.g., "26"
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 text-white font-inter flex flex-col items-center justify-center p-4">
      {/* SEO Optimizations and Viewport meta tag */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Pandora Time Capsule - Unseal Fascinating Time Facts</title>
      <meta name="description" content="Open the Pandora Time Capsule to discover interesting facts about time, history, and perception. A unique real-time experience." />
      <meta name="keywords" content="time, facts, time capsule, history, philosophy, current time, clock, trivia, interesting" />

      {/* Open Graph / Social Media Tags */}
      <meta property="og:title" content="Pandora Time Capsule - Unseal Fascinating Time Facts" />
      <meta property="og:description" content="Discover captivating facts about time with the Pandora Time Capsule. Real-time clock and intriguing insights." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://your-pandora-app-url.com" /> {/* Replace with your deployed URL */}
      <meta property="og:image" content="https://your-pandora-app-url.com/path/to/your/image.png" /> {/* Replace with a relevant image URL */}

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Pandora Time Capsule - Unseal Fascinating Time Facts" />
      <meta name="twitter:description" content="Discover captivating facts about time with the Pandora Time Capsule. Real-time clock and intriguing insights." />
      <meta name="twitter:image" content="https://your-pandora-app-url.com/path/to/your/image.png" /> {/* Replace with a relevant image URL */}

      {/* Link to Google Fonts (Inter) and Tailwind CSS CDN - these should typically be in public/index.html for React apps */}
      {/* Keeping them here for self-contained immersive example, but recommended placement is public/index.html */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet" />
      <script src="https://cdn.tailwindcss.com"></script>

      <div className="bg-white bg-opacity-15 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl w-full text-center space-y-8 border-2 border-white border-opacity-30">
        {/* Main title of the application */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          Pandora Time Capsule
        </h1>

        {/* Display for current date and time */}
        <div className="bg-white bg-opacity-25 rounded-xl p-6 shadow-xl border border-white border-opacity-40">
          <p className="text-2xl md:text-3xl font-semibold text-blue-200">
            {formatDate(currentTime)}
          </p>
          <p className="text-5xl md:text-6xl font-extrabold text-white mt-2 drop-shadow-md">
            {formatTime(currentTime)}
          </p>
        </div>

        {/* Time Capsule content with fade effect */}
        <div className={`bg-white bg-opacity-20 rounded-xl p-6 shadow-lg transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-2xl font-bold mb-3 text-yellow-200">Time Capsule Unsealed:</h2>
          <p className="text-lg md:text-xl italic text-gray-100">
            "{currentCapsule}"
          </p>
        </div>

        {/* Button to open a new time capsule */}
        <button
          onClick={getRandomCapsule}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg transform hover:scale-105 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-75"
        >
          Open New Capsule
        </button>

        {/* Small inspirational text */}
        <p className="text-sm text-gray-300 mt-6">
          Inspired by the flow of discovery.
        </p>

        {/* Monetization Section - Placeholder for future expansion */}
        <div className="mt-8 text-center border-t border-white border-opacity-20 pt-6">
          <h2 className="text-2xl font-bold mb-4">Explore More Time Tools</h2>
          <p className="text-md mb-6">
            Like discovering new insights? Find tools to master your time:
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-5 rounded-lg shadow transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              🌌 Deep Time History
            </a>
            <a
              href="#"
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-5 rounded-lg shadow transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              ⏳ Productivity Boosters
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
