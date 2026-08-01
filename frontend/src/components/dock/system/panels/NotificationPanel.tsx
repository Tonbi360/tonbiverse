import { useState } from "react";

type Notification = {
    id: string;
    icon: string;
    title: string;
    message: string;
    time: string;
};

const MOCK_NOTIFICATIONS: Notification[] = [
    {
        id: "1",
        icon: "📧",
        title: "New Email",
        message: "You have 3 unread messages",
        time: "2m ago",
    },
    {
        id: "2",
        icon: "🔔",
        title: "Reminder",
        message: "Team standup at 10:00 AM",
        time: "15m ago",
    },
    {
        id: "3",
        icon: "⬇️",
        title: "Download Complete",
        message: "Tonbiverse update v2.1.0 ready",
        time: "1h ago",
    },
    {
        id: "4",
        icon: "☁️",
        title: "Sync Complete",
        message: "All files are up to date",
        time: "2h ago",
    },
];

function NotificationPanel() {
    const [notifications, setNotifications] =
        useState<Notification[]>(MOCK_NOTIFICATIONS);

    const clearAll = () => setNotifications([]);

    const dismiss = (id: string) => {
        setNotifications((prev) =>
            prev.filter((n) => n.id !== id)
        );
    };

    return (
        <div className="p-4 space-y-3">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white">
                    Notifications
                </h2>
                {notifications.length > 0 && (
                    <button
                        onClick={clearAll}
                        className="text-xs text-zinc-400 hover:text-white transition"
                    >
                        Clear all
                    </button>
                )}
            </div>

            {notifications.length === 0 ? (
                <div className="py-8 text-center">
                    <span className="text-3xl block mb-2">🔕</span>
                    <p className="text-sm text-zinc-500">
                        No notifications
                    </p>
                </div>
            ) : (
                <div className="space-y-2 max-h-60 overflow-y-auto">
                    {notifications.map((n) => (
                        <div
                            key={n.id}
                            className="flex items-start gap-3 rounded-xl bg-zinc-800 px-4 py-3 group"
                        >
                            <span className="text-xl mt-0.5">
                                {n.icon}
                            </span>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-white">
                                    {n.title}
                                </p>
                                <p className="text-xs text-zinc-400 truncate">
                                    {n.message}
                                </p>
                                <p className="text-xs text-zinc-600 mt-0.5">
                                    {n.time}
                                </p>
                            </div>
                            <button
                                onClick={() => dismiss(n.id)}
                                className="text-zinc-600 hover:text-white transition opacity-0 group-hover:opacity-100 text-sm"
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default NotificationPanel;

