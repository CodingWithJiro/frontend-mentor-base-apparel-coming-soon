const Loading = () => {
  const radius = 20;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="absolute -bottom-7 left-0 flex w-full gap-1 px-5.5 text-sm tracking-tight text-(--PINK-300) md:px-8">
      <svg
        width="14"
        height="14"
        viewBox="0 0 50 50"
        className="arc-spinner relative top-px hidden motion-safe:block"
        role="status"
        aria-label="Loading"
      >
        <circle
          cx="25"
          cy="25"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={`${circumference * 0.35} ${circumference}`}
        />
      </svg>
      <span className="motion-safe:transition-colors motion-safe:duration-300 motion-safe:ease-in-out">
        Sending
      </span>
    </div>
  );
};

export default Loading;
