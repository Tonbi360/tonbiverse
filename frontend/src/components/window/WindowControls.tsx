type Props = {
    onClose: () => void;

    onMinimize: () => void;

    onMaximize: () => void;
};

function WindowControls({
    onClose,
    onMinimize,
    onMaximize,
}: Props) {
    return (
        <div className="flex items-center gap-2">
            <button
                aria-label="Minimize Window"
                onClick={(event) => {
                    event.stopPropagation();
                    onMinimize();
                }}
                className="
                    h-3
                    w-3
                    rounded-full
                    bg-yellow-400
                    transition
                    hover:scale-110
                    hover:brightness-110
                    active:scale-90
                "
            />

            <button
                aria-label="Maximize Window"
                onClick={(event) => {
                    event.stopPropagation();
                    onMaximize();
                }}
                className="
                    h-3
                    w-3
                    rounded-full
                    bg-green-400
                    transition
                    hover:scale-110
                    hover:brightness-110
                    active:scale-90
                "
            />

            <button
                aria-label="Close Window"
                onClick={(event) => {
                    event.stopPropagation();
                    onClose();
                }}
                className="
                    h-3
                    w-3
                    rounded-full
                    bg-red-500
                    transition
                    hover:scale-110
                    hover:brightness-110
                    active:scale-90
                "
            />
        </div>
    );
}

export default WindowControls;