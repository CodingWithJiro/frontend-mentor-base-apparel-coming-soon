const SubmitButton = ({ status }) => {
  return (
    <button
      className="absolute top-0 right-0 h-full cursor-pointer rounded-full bg-(image:--GRADIENT-BUTTON) px-6.5 shadow-(--BOX-SHADOW-BUTTON) hover:bg-(--PINK-200) hover:bg-none"
      type="submit"
      aria-label="Submit email to subscribe to the latest news on Base Apparel"
    >
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="20"
      >
        <path
          fill="none"
          stroke="#FFF"
          strokeWidth="2"
          d="M1 1l8.836 8.836L1 18.671"
        />
      </svg>

      {status === "error" && (
        <svg
          className="absolute top-0 left-0 translate-x-[-150%] translate-y-[50%]"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
        >
          <g fill="none" fillRule="evenodd">
            <circle cx="12" cy="12" r="12" fill="#F96464" />
            <path
              fill="#FFF"
              fillRule="nonzero"
              d="M13.256 6v9.056h-2V6h2zm-.944 12.464c-.384 0-.699-.104-.944-.312a1.027 1.027 0 0 1-.368-.824c0-.33.125-.608.376-.832.25-.224.563-.336.936-.336.373 0 .68.112.92.336.24.224.36.501.36.832 0 .341-.117.616-.352.824-.235.208-.544.312-.928.312z"
            />
          </g>
        </svg>
      )}
    </button>
  );
};

export default SubmitButton;
