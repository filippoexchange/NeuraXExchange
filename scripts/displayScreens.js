#!/usr/bin/env node
const cityScreens = ['New York', 'Tokyo', 'Berlin', 'Dubai', 'São Paulo', 'Milano'];

function sendToCityScreens(city, message) {
  console.log(`📺 Displaying in ${city}:\n${message}`);
  // Se usi provider DOOH come Vistar, Broadsign, JCDecaux:
  // qui colleghi endpoint API per pubblicazione contenuto
}

cityScreens.forEach(city => sendToCityScreens(city, viralMessage));
