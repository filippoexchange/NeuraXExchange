import { useEffect, useState } from 'react';
import TradeForm from './components/TradeForm';
import Leaderboard from './components/Leaderboard';
import WhitehatSubmit from './components/WhitehatSubmit';
import { SpeedInsights } from '@vercel/speed-insights';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

// Funzione per ottenere i deployment da Vercel
async function fetchVercelDeployments() {
  const res = await fetch(`https://api.vercel.com/v6/deployments?projectId=${process.env.VERCEL_PROJECT_ID}`, {
    headers: {
      Authorization: `Bearer ${process.env.VERCEL_API_TOKEN}`,
    },
  });
  const data = await res.json();
  return data.deployments;
}

function App() {
  const [deployments, setDeployments] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await fetchVercelDeployments();
      setDeployments(data);
    }
    getData();
  }, []);

  const performanceData = {
    labels: ['09:00', '10:00', '11:00', '12:00', '13:00'],
    datasets: [
      {
        label: 'CLS (Layout Shift)',
        data: [0.1, 0.2, 0.15, 0.3, 0.25],
        borderColor: 'rgba(255,99,132,1)',
        backgroundColor: 'rgba(255,99,132,0.2)',
        tension: 0.4,
      },
      {
        label: 'LCP (Load Time)',
        data: [1.8, 2.1, 1.6, 2.4, 1.9],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      tooltip: { mode: 'index', intersect: false },
    },
  };

  return (
    <>
      <SpeedInsights />
      <h1>NeuraX Exchange ⚡</h1>
      <TradeForm />
      <Leaderboard />
      <WhitehatSubmit />

      <div style={{ marginTop: '2rem', padding: '1rem', background: '#fff', borderRadius: '8px' }}>
        <h2 style={{ marginBottom: '1rem' }}>📊 Performance Dashboard</h2>
        <Line data={performanceData} options={chartOptions} />
        <ul>
          {deployments.map((d) => (
            <li key={d.uid}>
              {d.name} - {new Date(d.created).toLocaleString()} - {d.state}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
