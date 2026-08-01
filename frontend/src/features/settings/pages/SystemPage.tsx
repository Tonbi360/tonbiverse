import { useMemo, useState } from "react";

function SystemPage() {
    const [autoUpdate, setAutoUpdate] = useState(true);
    const [sendDiagnostics, setSendDiagnostics] = useState(false);
    const [nightLight, setNightLight] = useState(true);

    const systemInfo = useMemo(() => ({
        deviceName: "Tonbiverse Desktop",
        operatingSystem: "Tonbiverse OS",
        version: "1.0.0",
        build: "2026.07.28",
        platform:
            typeof navigator !== "undefined"
                ? navigator.platform
                : "Unknown",
    }), []);

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold">System</h1>
                <p className="mt-2 text-sm text-white/60">
                    View system information and configure core settings.
                </p>
            </div>

            <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm">
                <h2 className="text-xl font-semibold">Device information</h2>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-white/5 p-4">
                        <p className="text-sm text-white/60">
                            Device name
                        </p>
                        <p className="mt-2 font-medium">
                            {systemInfo.deviceName}
                        </p>
                    </div>

                    <div className="rounded-2xl bg-white/5 p-4">
                        <p className="text-sm text-white/60">
                            Operating system
                        </p>
                        <p className="mt-2 font-medium">
                            {systemInfo.operatingSystem}
                        </p>
                    </div>

                    <div className="rounded-2xl bg-white/5 p-4">
                        <p className="text-sm text-white/60">
                            Version
                        </p>
                        <p className="mt-2 font-medium">
                            {systemInfo.version}
                        </p>
                    </div>

                    <div className="rounded-2xl bg-white/5 p-4">
                        <p className="text-sm text-white/60">
                            Platform
                        </p>
                        <p className="mt-2 font-medium">
                            {systemInfo.platform}
                        </p>
                    </div>
                </div>
            </section>

            <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <h2 className="text-xl font-semibold">
                            System settings
                        </h2>
                        <p className="mt-1 text-sm text-white/60">
                            Enable features that keep your system current and visible.
                        </p>
                    </div>
                </div>

                <div className="mt-6 space-y-4">
                    <label className="flex items-center justify-between gap-4 rounded-2xl bg-white/5 p-4">
                        <div>
                            <p className="font-medium">
                                Automatic updates
                            </p>
                            <p className="text-sm text-white/60">
                                Download and install updates automatically.
                            </p>
                        </div>

                        <input
                            type="checkbox"
                            checked={autoUpdate}
                            onChange={(event) =>
                                setAutoUpdate(event.target.checked)
                            }
                        />
                    </label>

                    <label className="flex items-center justify-between gap-4 rounded-2xl bg-white/5 p-4">
                        <div>
                            <p className="font-medium">
                                Send diagnostics
                            </p>
                            <p className="text-sm text-white/60">
                                Share anonymous usage data to improve Tonbiverse.
                            </p>
                        </div>

                        <input
                            type="checkbox"
                            checked={sendDiagnostics}
                            onChange={(event) =>
                                setSendDiagnostics(event.target.checked)
                            }
                        />
                    </label>

                    <label className="flex items-center justify-between gap-4 rounded-2xl bg-white/5 p-4">
                        <div>
                            <p className="font-medium">Night light</p>
                            <p className="text-sm text-white/60">
                                Reduce blue light during evening hours.
                            </p>
                        </div>

                        <input
                            type="checkbox"
                            checked={nightLight}
                            onChange={(event) =>
                                setNightLight(event.target.checked)
                            }
                        />
                    </label>
                </div>
            </section>
        </div>
    );
}

export default SystemPage;
