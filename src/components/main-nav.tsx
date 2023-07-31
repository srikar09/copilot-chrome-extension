import { Link } from "react-router-dom";
import { routes } from "src/constant/routes";
import { cn } from "src/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        to={routes.FINANCIALPORTAL}
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Overview
      </Link>
      <Link
        to={routes.INSIGHTSPORTAL}
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Actionable Insights
      </Link>
    </nav>
  );
}
