function globalLaunch() {
  socialPlatforms.forEach(p => postToSocial(p, viralMessage));
  cityScreens.forEach(city => sendToCityScreens(city, viralMessage));
  console.log("🌍 NeuraXExchange deployed globally. Visible to billions.");
}

globalLaunch();
