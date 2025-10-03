import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <img
        src="/Logo.jpg"
        alt="Logo"
        className="h-16"
      />
    </Link>
  );
}