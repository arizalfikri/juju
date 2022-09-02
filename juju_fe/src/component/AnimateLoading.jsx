export default function AnimateLoading() {
  return (
    <div className="flex gap-3 justify-center">
      <div className="animate-spin w-5 h-5 border-2 rounded-full border-t-2 border-t-blue"></div>
      Loading....
    </div>
  );
}
