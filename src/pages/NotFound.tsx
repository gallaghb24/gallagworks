import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <span className="font-mono text-sm text-muted-foreground mb-4">[404]</span>
      <h1 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-6">
        Page not found.
      </h1>
      <Link
        to="/diagnostic"
        className="text-primary font-medium hover:underline underline-offset-4 transition-colors"
      >
        Back to the diagnostic
      </Link>
    </div>
  );
};

export default NotFound;
