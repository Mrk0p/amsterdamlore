import { Link, NavLink } from "react-router-dom";

export const Header = () => (
  <header className="sticky top-0 z-50 bg-white shadow-md">
    <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      <Link to="/" className="text-2xl font-playfair text-[#E91E63] font-bold">
        AmsterdamLore
      </Link>
      <nav className="space-x-6 text-[#424242] font-serif">
        <NavLink 
          to="/" 
          end
          className={({ isActive }) => isActive ? "text-[#E91E63]" : ""}
        >
          Home
        </NavLink>
        <NavLink 
          to="/stories" 
          className={({ isActive }) => isActive ? "text-[#E91E63]" : ""}
        >
          Stories
        </NavLink>
        <NavLink 
          to="/submit" 
          className={({ isActive }) => isActive ? "text-[#E91E63]" : ""}
        >
          Submit
        </NavLink>
      </nav>
    </div>
  </header>
);
