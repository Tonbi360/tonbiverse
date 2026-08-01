import { useWallpaperStore } from "../../state/wallpaperStore";
import fallbackWallpaper from "../../assets/wallpapers/wallpaper.jpg";
import { useState, useEffect } from "react";

function DesktopWallpaper() {
    const wallpaper = useWallpaperStore((state) => state.wallpaper);

    const [backgroundImage, setBackgroundImage] = useState(
        wallpaper || fallbackWallpaper
    );

    useEffect(() => {
        const img = new Image();
        img.src = wallpaper || fallbackWallpaper;
        img.onload = () => setBackgroundImage(wallpaper || fallbackWallpaper);
    }, [wallpaper]);

    return (
        <div
            className="fixed inset-0 z-0 bg-cover bg-center"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        />
    );
}

export default DesktopWallpaper;
