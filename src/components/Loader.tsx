const Loader = () => {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4 rounded-2xl bg-white/80 p-6 shadow-xl backdrop-blur">
        <div className="h-14 w-14 animate-spin rounded-full border-4 border-gray-200 border-t-black" />

        <p className="text-sm font-medium tracking-wide text-gray-700">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loader;
