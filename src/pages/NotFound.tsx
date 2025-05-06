
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] py-20 text-center">
      <h1 className="text-7xl font-bold text-study-700">404</h1>
      <p className="text-xl text-muted-foreground mt-4 mb-8">
        Oops! We couldn't find the page you're looking for.
      </p>
      <Link to="/">
        <Button>Return to Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
