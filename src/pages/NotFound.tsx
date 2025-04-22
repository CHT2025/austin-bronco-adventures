import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    document.title = "Page Not Found | Capital Hill Tours – Private Austin Bronco Tours";
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-gray py-16">
      <div className="text-center">
        <h1 className="text-6xl md:text-7xl font-bold mb-4 text-burnt-orange">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Oops! We took a wrong turn</h2>
        <p className="text-xl mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-primary inline-block">
          Back to Home
        </Link>
        <div className="mt-8">
          <p className="text-gray-600">
            Need help? Contact us at{" "}
            <a href="tel:+15122982653" className="text-burnt-orange hover:underline">
              +1 512-298-2653
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
