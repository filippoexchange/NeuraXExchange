#!/usr/bin/env node
const socialPlatforms = ['Twitter', 'LinkedIn', 'Instagram', 'TikTok', 'YouTube'];

const viralMessage = `
🚀 NeuraXExchange è Live 🚀
Decentralizzato, AI-Powered, Etico.

👾 Unisciti alla rivoluzione WhiteHat
🌐 https://neura-x-exchange-w74k.vercel.app
#Web3 #AI #CyberSecurity #NeuraX #WhiteHatHackers
`;

function postToSocial(platform, message) {
  console.log(`📤 Posting to ${platform}:\n${message}`);
  // API reali da integrare:
  // Twitter: Twitter API v2
  // LinkedIn: Marketing Developer Platform
  // Instagram/TikTok: Creator API via Meta
  // YouTube: YouTube Data API
}

socialPlatforms.forEach(p => postToSocial(p, viralMessage));
