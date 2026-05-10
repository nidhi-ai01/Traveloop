import React from 'react';

export const STEPS = [
  { title: "Step 1", description: "First step details" },
  { title: "Step 2", description: "Second step details" },
  { title: "Step 3", description: "Third step details" }
];

export default function StickyStepCard({ step, index }) {
  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 max-w-lg w-full text-center">
        <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
        <p className="text-gray-300">{step.description}</p>
      </div>
    </div>
  );
}
