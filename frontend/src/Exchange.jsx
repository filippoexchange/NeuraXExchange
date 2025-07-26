import React, { useState, useEffect } from 'react';
import './Exchange.css';
import PerformanceChart from './PerformanceChart';
import { getLeaderboard } from '../utils/api';

const Exchange = () => {
  const [asset, setAsset] = useState('');
  const [amount, setAmount] = useState('');
  const [leaderboard, setLeaderboard] = useState([]);
  const [whitehat, setWhitehat] = useState('');

  useEffect(() => {
    getLeaderboard().then(data => setLeaderboard(data));
  }, []);

  const handleTrade = () => {
    // Validazione base
    if (!asset || !amount) return alert("Compila tutti i campi");
    // Submit verso backend
    console.log(`Trading ${amount} of ${asset}`);
  };

  const handleWhitehat = () => {
    console.log("Report:", whitehat);
  };

  return (
    <div className="exchange-container">
      <h1>💱 Neura X Exchange</h1>

      <section className="trading-form">
        <h2>Trading Form</h2>
        <input value={asset} onChange={e => setAsset(e.target.value)} placeholder="Asset (ETH, BTC...)" />
        <input value={amount} onChange={e => setAmount(e.target.value)} type="number" placeholder="Amount" />
        <button onClick={handleTrade}>Submit Trade</button>
      </section>

      <section className="leaderboard">
        <h2>🏆 Leaderboard</h2>
        <ul>
          {leaderboard.map((user, i) => (
            <li key={i}>#{i + 1} {user.name} – {user.points}pts</li>
          ))}
        </ul>
      </section>

      <section className="whitehat-report">
        <h2>🛡️ Whitehat Submission</h2>
        <textarea value={whitehat} onChange={e => setWhitehat(e.target.value)} placeholder="Describe your vulnerability..." />
        <button onClick={handleWhitehat}>Send Report</button>
      </section>

      <section className="performance-metrics">
        <h2>📊 Performance</h2>
        <PerformanceChart />
      </section>
    </div>
  );
};

export default Exchange;
