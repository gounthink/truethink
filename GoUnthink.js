import { useState } from "react";

const themes = [
  "Clarity",
  "Leadership",
  "Resilience",
  "Decision Making",
  "Simplicity",
  "Focus",
  "Discipline",
  "Love",
  "Mental Toughness",
  "Authenticity"
];

const quotes = {
  Clarity: ["Clarity clears the path to progress.", "A clear mind leads to clear actions.", "See through the noise, focus on what matters."],
  Leadership: ["Lead by example, not by words.", "True leaders create more leaders.", "Leadership is the art of making others believe."],
  Resilience: ["Resilience is built one challenge at a time.", "Strong roots survive the harshest storms.", "Bend but never break."],
  "Decision Making": ["Decisiveness shapes your destiny.", "Every choice builds your future.", "Great decisions come from clear intentions."],
  Simplicity: ["Simplicity is the ultimate sophistication.", "Less clutter, more clarity.", "Cut the noise, embrace what matters."],
  Focus: ["What you focus on expands.", "Focus sharpens your vision.", "One step at a time, one goal at a time."],
  Discipline: ["Discipline beats motivation every time.", "Small habits, big results.", "Master yourself, master your world."],
  Love: ["Love is the fuel for a fulfilling life.", "Love freely, live fully.", "What you give, you receive."],
  "Mental Toughness": ["Your mind is your greatest strength.", "Hard times create strong minds.", "Toughness is persistence, not resistance."],
  Authenticity: ["Authenticity attracts the right opportunities.", "Be real, be free.", "Your truth is your greatest power."]
};

const stepsMap = {
  "Clarity": ["Step 1: Clear your mind by removing distractions.", "Step 2: Define what truly matters to you.", "Step 3: Take a small step towards your goal."],
  "Leadership": ["Step 1: Identify one way to lead by example today.", "Step 2: Inspire someone with your actions.", "Step 3: Reflect on how you can improve your leadership."],
  "Resilience": ["Step 1: Embrace setbacks as learning opportunities.", "Step 2: Develop a growth mindset.", "Step 3: Keep pushing forward despite challenges."],
  "Decision Making": ["Step 1: Gather relevant information.", "Step 2: Weigh pros and cons objectively.", "Step 3: Make a confident choice and act."],
  "Simplicity": ["Step 1: Remove one unnecessary task from your day.", "Step 2: Organize your priorities.", "Step 3: Focus on what truly adds value."],
  "Focus": ["Step 1: Eliminate distractions.", "Step 2: Set a clear goal for the day.", "Step 3: Work on it with undivided attention."],
  "Discipline": ["Step 1: Set a daily habit to build consistency.", "Step 2: Stay committed even when unmotivated.", "Step 3: Track progress and celebrate small wins."],
  "Love": ["Step 1: Express gratitude to someone you love.", "Step 2: Show kindness without expecting anything in return.", "Step 3: Strengthen relationships with genuine conversations."],
  "Mental Toughness": ["Step 1: Face challenges with a strong mindset.", "Step 2: Practice resilience daily.", "Step 3: Train yourself to stay calm under pressure."],
  "Authenticity": ["Step 1: Be honest about your true self.", "Step 2: Make decisions aligned with your values.", "Step 3: Surround yourself with people who support your authenticity."]
};

export default function GoUnthink() {
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [quote, setQuote] = useState(null);
  const [steps, setSteps] = useState([]);

  const handleThemeClick = (theme) => {
    setSelectedTheme(theme);
    const randomQuote = quotes[theme][Math.floor(Math.random() * quotes[theme].length)];
    setQuote(randomQuote);
    setSteps(stepsMap[theme]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Tap on what Your heart seeks today!</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-2xl">
        {themes.map((theme) => (
          <button
            key={theme}
            className="border-2 border-gray-500 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
            onClick={() => handleThemeClick(theme)}
          >
            {theme}
          </button>
        ))}
      </div>
      {selectedTheme && (
        <div className="mt-6 bg-white p-4 shadow-lg rounded-lg w-full max-w-lg">
          <h2 className="text-xl font-semibold">{selectedTheme}</h2>
          <p className="mt-2 text-gray-700">{quote}</p>
          <h3 className="mt-4 font-bold">Here's the hack!</h3>
          <ul className="mt-2 list-disc list-inside">
            {steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}