export default function Button({
  children,
  onClick,
  disabled,
  isLoading,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  isLoading?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`
        relative overflow-hidden
        px-8 py-4 md:px-12 md:py-6 
        text-white text-xl md:text-2xl font-semibold shadow-md
        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50
        transition-colors duration-200
        ${
          disabled
            ? "bg-purple-600/50 cursor-not-allowed opacity-50"
            : "bg-purple-600 hover:bg-purple-700"
        }
        ${isLoading && "animate-pulse"}
        before:absolute before:content-[''] before:top-0 before:left-[-100%] before:w-[120%] before:h-full
        before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
        before:animate-shine before:skew-x-[-25deg]
      `}
    >
      {isLoading ? (
        <div className="flex items-center justify-center gap-2">
          <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin" />
          <span>Loading...</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
}
