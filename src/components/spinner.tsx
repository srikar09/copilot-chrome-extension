import react from "react";
import { cn } from "src/lib/utils";

const Spinner: React.FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg
      className={cn("animate-spin h-5 w-5 mr-3", className)}
      viewBox="0 0 24 24"
    ></svg>
  );
};

export { Spinner };
