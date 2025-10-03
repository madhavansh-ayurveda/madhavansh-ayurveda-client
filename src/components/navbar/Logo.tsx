import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-4">
      <img
        src="/Logo.jpg"
        alt="Logo"
        className="h-16"
      />
      <span className="text-xl md:text-2xl font-bold text-foreground">
        Shree Madhavansh Ayurved
      </span>
    </Link>
  );
}