import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const PerformanceChart = () => {
  const [metrics, setMetrics] = useState({ cls: [], lcp: [] });

  useEffect(() => {
    const interval = setInterval(() => {
      const newCLS = Math.random().toFixed(2); // Simulazione
      const newLCP = (Math.random() * 2 + 1).toFixed(2);
      setMetrics(prev => ({
        cls: [...prev.cls.slice(-9), parseFloat(newCLS)],
        lcp: [...prev.lcp.slice(-9), parseFloat(newLCP)]
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const data = {
    labels: Array(metrics.cls.length).fill('').map((_, i) => `T${i + 1}`),
    datasets: [
      {
        label: 'CLS',
        data: metrics.cls,
        borderColor: '#f87171',
        fill: false,
      },
      {
        label: 'LCP',
        data: metrics.lcp,
        borderColor: '#34d399',
        fill: false,
      },
    ],
  };

  return <Line data={data} />;
};

export default PerformanceChart;
