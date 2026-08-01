import { useState } from "react";

type Network = {
    id: string;
    name: string;
    secured: boolean;
    strength: number; // 0-3
};

const MOCK_NETWORKS: Network[] = [
    { id: "1", name: "Home WiFi", secured: true, strength: 3 },
    { id: "2", name: "Guest Network", secured: true, strength: 2 },
    { id: "3", name: "Neighbor's WiFi", secured: true, strength: 1 },
    { id: "4", name: "Public Hotspot", secured: false, strength: 2 },
    { id: "5", name: "Office Net", secured: true, strength: 3 },
];

function NetworkPanel() {
    const [wifiOn, setWifiOn] = useState(true);
    const [connected, setConnected] = useState<string | null>("1");

    const getStrengthBars = (strength: number) => {
        return Array.from({ length: 3 }, (_, i) => (
            <span
                key={i}
                className={`inline-block w-1 rounded-full transition ${
                    i < strength ? "bg-green-400" : "bg-zinc-700"
                }`}
                style={{ height: `${6 + i * 4}px` }}
            />
        ));
    };

    return (
        <div className="p-4 space-y-4">
            <h2 className="text-lg font-semibold text-white">Network</h2>

            {/* WiFi toggle */}
            <div className="flex items-center justify-between rounded-xl bg-zinc-800 px-4 py-3">
                <div className="flex items-center gap-2">
                    <span className="text-xl">{wifiOn ? "📶" : "📵"}</span>
                    <span className="text-zinc-300">Wi-Fi</span>
                </div>
                <button
                    onClick={() => {
                        setWifiOn(!wifiOn);
                        if (wifiOn) setConnected(null);
                    }}
                    className={`px-4 py-1 rounded-lg text-sm font-medium transition ${
                        wifiOn
                            ? "bg-blue-600 text-white"
                            : "bg-zinc-700 text-zinc-400"
                    }`}
                >
                    {wifiOn ? "ON" : "OFF"}
                </button>
            </div>

            {/* Networks list */}
            {wifiOn && (
                <div className="space-y-1">
                    <span className="text-sm text-zinc-500">
                        Available Networks
                    </span>
                    {MOCK_NETWORKS.map((net) => (
                        <button
                            key={net.id}
                            onClick={() =>
                                setConnected(
                                    connected === net.id ? null : net.id
                                )
                            }
                            className={`w-full flex items-center justify-between rounded-xl px-4 py-3 transition ${
                                connected === net.id
                                    ? "bg-zinc-700 ring-1 ring-blue-500"
                                    : "bg-zinc-800 hover:bg-zinc-700"
                            }`}
                        >
                            <div className="flex items-center gap-2">
                                <span className="text-lg">
                                    {net.secured ? "🔒" : "🔓"}
                                </span>
                                <div className="text-left">
                                    <span className="block text-sm text-white">
                                        {net.name}
                                    </span>
                                    <span className="text-xs text-zinc-500">
                                        {net.secured ? "Secured" : "Open"}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-end gap-0.5 h-5">
                                {getStrengthBars(net.strength)}
                            </div>
                        </button>
                    ))}
                </div>
            )}

            {!wifiOn && (
                <p className="text-sm text-zinc-500 text-center py-4">
                    Wi-Fi is turned off
                </p>
            )}
        </div>
    );
}

export default NetworkPanel;

