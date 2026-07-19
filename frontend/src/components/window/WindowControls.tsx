type Props = {
  onClose: () => void;
};

function WindowControls({ onClose }: Props) {
  return (
    <div className="flex gap-2">
      <button className="h-3 w-3 rounded-full bg-yellow-400" />

      <button className="h-3 w-3 rounded-full bg-green-400" />

      <button
        onClick={onClose}
        className="h-3 w-3 rounded-full bg-red-500"
      />
    </div>
  );
}

export default WindowControls;