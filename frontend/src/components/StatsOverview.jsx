import React, { useEffect, useState } from "react";

const StatsOverview = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/datasets/stats");
        const data = await res.json();
        setStats([
          {
            label: "Total Samples",
            value: data.total_samples,
            sub: "",
            color: "from-blue-600 to-blue-400",
          },
          {
            label: "Safe Samples",
            value: data.safe,
            sub: `${((data.safe / data.total_samples) * 100).toFixed(1)}% of total`,
            color: "from-green-600 to-green-400",
          },
          {
            label: "At Risk Samples",
            value: data.risky,
            sub: `${((data.risky / data.total_samples) * 100).toFixed(1)}% risky`,
            color: "from-orange-500 to-yellow-400",
          },
          {
            label: "Average HPI",
            value: data.avg_hpi.toFixed(2),
            sub: "",
            color: "from-purple-500 to-purple-400",
          },
        ]);
      } catch (err) {
        console.error("❌ Failed to fetch stats", err);
      }
    };

    fetchStats();
  }, []);

  if (!stats) return <p className="text-center">Loading stats...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-9">
      {stats.map((stat, i) => (
        <div
          key={i}
          className={`rounded-xl p-6 shadow bg-gradient-to-br ${stat.color} flex flex-col justify-between`}
        >
          <div className="flex items-center justify-between mb-2 text-white">
            <span className="font-semibold">{stat.label}</span>
          </div>
          <div className="text-3xl font-extrabold text-white">{stat.value}</div>
          <div className="mt-2 text-sm text-white/90">{stat.sub}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;
