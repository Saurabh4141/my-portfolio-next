import Link from "next/link";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound-page">
      <div className="notfound-content">
        <h1 className="notfound-code">404</h1>
        <h2 className="notfound-title">
          Page <span>Not Found</span>
        </h2>
        <p className="notfound-text">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className="notfound-btn" data-cursor="disable">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
