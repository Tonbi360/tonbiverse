export type Rectangle = {
    left: number;
    top: number;
    width: number;
    height: number;
};

export function rectanglesIntersect(a: Rectangle, b: Rectangle) {
    return (
        a.left < b.left + b.width &&
        a.left + a.width > b.left &&
        a.top < b.top + b.height &&
        a.top + a.height > b.top
    );
}

