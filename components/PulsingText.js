import cn from "classnames";

export default function PulsingText({ children, bolded, color }) {
  const klasses = cn("animate-pulse", {
    "font-semibold": bolded,
  });

  return (
    <>
      <span className={klasses}>{children}</span>
      <style jsx>{`
        color: ${color};
      `}</style>
    </>
  );
}
