const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '../src/components/window/Window.tsx');
let text = fs.readFileSync(file, 'utf8');
const oldBlock = `    useEffect(() => {
        const handleGlobalMouseMove = (event: globalThis.MouseEvent) => {
            if (!dragging.current) return;
            moveWindow(
                id,
                event.clientX - offsetX.current,
                event.clientY - offsetY.current
            );
        };

        const handleGlobalMouseUp = () => {
            dragging.current = false;
        };

        window.addEventListener("mousemove", handleGlobalMouseMove);
        window.addEventListener("mouseup", handleGlobalMouseUp);

        return () => {
            window.removeEventListener("mousemove", handleGlobalMouseMove);
            window.removeEventListener("mouseup", handleGlobalMouseUp);
        };
    }, [id, moveWindow]);\n`;
const newBlock = `    useEffect(() => {
        const handleGlobalMouseMove = (event: globalThis.MouseEvent) => {
            if (dragging.current) {
                moveWindow(
                    id,
                    event.clientX - offsetX.current,
                    event.clientY - offsetY.current
                );
            }

            if (resizing.current) {
                const nextWidth = Math.max(
                    200,
                    startWidth.current + event.clientX - startMouseX.current
                );
                const nextHeight = Math.max(
                    150,
                    startHeight.current + event.clientY - startMouseY.current
                );

                resizeWindow(id, nextWidth, nextHeight);
            }
        };

        const handleGlobalMouseUp = () => {
            dragging.current = false;
            resizing.current = false;
        };

        window.addEventListener("mousemove", handleGlobalMouseMove);
        window.addEventListener("mouseup", handleGlobalMouseUp);

        return () => {
            window.removeEventListener("mousemove", handleGlobalMouseMove);
            window.removeEventListener("mouseup", handleGlobalMouseUp);
        };
    }, [id, moveWindow, resizeWindow]);\n`;
if (!text.includes(oldBlock)) {
  console.error('Old block not found');
  process.exit(1);
}
text = text.replace(oldBlock, newBlock);
fs.writeFileSync(file, text, 'utf8');
console.log('patched Window.tsx');
