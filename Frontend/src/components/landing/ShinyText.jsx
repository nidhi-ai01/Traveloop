import React from 'react';

export default function ShinyText({ text, className }) {
  return (
    <span className={`text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-white to-gray-400 animate-pulse ${className}`}>
      {text}
    </span>
  );
}
