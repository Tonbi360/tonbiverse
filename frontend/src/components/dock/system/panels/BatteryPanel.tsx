import { useState, useEffect } from "react";

function BatteryPanel() {
    const [percentage, setPercentage] = useState(67);
    const [charging, setCharging] = useState(false);

    useEffect(() => {
        // Simulate battery drain
        const interval = setInterval(() => {
            setPercentage((prev) => {
                if (charging) {
                    return Math.min(100, prev + 1);
                }
                return Math.max(5, prev - 1);
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [charging]);

    const getBatteryIcon = () => {
        if (charging) return "⚡";
        if (percentage <= 15) return "🪫";
        if (percentage <= 35) return "🔋";
        if (percentage <= 65) return "🔋";
        return "🔋";
    };

    const getBatteryColor = () => {
        if (percentage <= 15) return "text-red-400";
        if (percentage <= 35) return "text-yellow-400";
        return "text-green-400";
    };

    const fillWidth = Math.max(percentage, 5);

    return (
        <div className="p-4 space-y-4">
            <h2 className="text-lg font-semibold text-white">Battery</h2>

            <div className="flex items-center gap-4">
                <span className="text-3xl">{getBatteryIcon()}</span>
                <div className="flex-1">
                    {/* Battery visual bar */}
                    <div className="h-6 rounded-full bg-zinc-800 border border-zinc-700 overflow-hidden relative">
                        <div
                            className={`h-full rounded-full transition-all duration-500 ${
                                percentage <= 15
                                    ? "bg-red-500"
                                    : percentage <= 35
                                    ? "bg-yellow-500"
                                    : "bg-green-500"
                            }`}
                            style={{ width: `${fillWidth}%` }}
                        />
                    </div>
                </div>
                <span className={`text-2xl font-bold ${getBatteryColor()}`}>
                    {percentage}%
                </span>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-zinc-800 px-4 py-3">
                <span className="text-zinc-300">Charging</span>
                <button
                    onClick={() => setCharging(!charging)}
                    className={`px-4 py-1 rounded-lg text-sm font-medium transition ${
                        charging
                            ? "bg-green-600 text-white"
                            : "bg-zinc-700 text-zinc-400"
                    }`}
                >
                    {charging ? "ON" : "OFF"}
                </button>
            </div>

            {percentage <= 15 && !charging && (
                <p className="text-sm text-red-400 flex items-center gap-1">
                    ⚠️ Battery low — plug in your charger
                </p>
            )}
        </div>
    );
}

export default BatteryPanel;

