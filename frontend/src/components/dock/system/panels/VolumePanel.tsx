import { useState } from "react";

function VolumePanel() {
    const [volume, setVolume] = useState(75);
    const [muted, setMuted] = useState(false);

    const getVolumeIcon = () => {
        if (muted || volume === 0) return "🔇";
        if (volume < 30) return "🔈";
        if (volume < 70) return "🔉";
        return "🔊";
    };

    return (
        <div className="p-4 space-y-4">
            <h2 className="text-lg font-semibold text-white">Volume</h2>

            <div className="flex items-center gap-3">
                <button
                    onClick={() => setMuted(!muted)}
                    className="text-2xl hover:scale-110 transition"
                >
                    {getVolumeIcon()}
                </button>
                <input
                    type="range"
                    min={0}
                    max={100}
                    value={muted ? 0 : volume}
                    onChange={(e) => {
                        setVolume(Number(e.target.value));
                        if (muted) setMuted(false);
                    }}
                    className="flex-1 accent-blue-500"
                />
                <span className="text-sm text-zinc-400 w-10 text-right">
                    {muted ? 0 : volume}%
                </span>
            </div>

            <div className="flex gap-2">
                <button
                    onClick={() => setVolume(Math.max(0, volume - 10))}
                    className="flex-1 rounded-lg bg-zinc-800 py-2 text-sm text-zinc-300 hover:bg-zinc-700 transition"
                >
                    −10
                </button>
                <button
                    onClick={() => setVolume(Math.min(100, volume + 10))}
                    className="flex-1 rounded-lg bg-zinc-800 py-2 text-sm text-zinc-300 hover:bg-zinc-700 transition"
                >
                    +10
                </button>
            </div>
        </div>
    );
}

export default VolumePanel;

