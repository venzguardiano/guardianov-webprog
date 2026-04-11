import { useState } from "react";
import { NavLink } from "react-router-dom";

const Logo = () => (
  <svg width="42" height="42" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="10,10 28,10 55,72 42,72" fill="white" />
    <polygon points="60,10 68,10 58,85 50,72" fill="white" />
    <polygon points="55,72 58,85 50,72 52,65" fill="white" />
  </svg>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{ backgroundColor: "#18181b", padding: "16px 32px", borderBottom: "3px solid #facc15" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{
            backgroundColor: "#facc15",
            borderRadius: "10px",
            width: "48px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <Logo />
          </div>
          <span style={{ color: "white", fontSize: "22px", fontWeight: "bold", letterSpacing: "1px" }}>
            Wire<span style={{ color: "#facc15" }}>Frame</span>
          </span>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger-btn"
          style={{
            display: "none",
            background: "none",
            border: "1px solid #facc15",
            color: "#facc15",
            fontSize: "22px",
            cursor: "pointer",
            borderRadius: "6px",
            padding: "6px 12px",
          }}
        >
          ☰
        </button>

        <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <NavLink
            to="/"
            end
            style={({ isActive }) => ({
              color: isActive ? "#18181b" : "white",
              backgroundColor: isActive ? "#facc15" : "transparent",
              padding: "8px 20px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "15px",
              border: isActive ? "1px solid #facc15" : "1px solid transparent",
              transition: "all 0.2s",
            })}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            style={({ isActive }) => ({
              color: isActive ? "#18181b" : "white",
              backgroundColor: isActive ? "#facc15" : "transparent",
              padding: "8px 20px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "15px",
              border: isActive ? "1px solid #facc15" : "1px solid transparent",
              transition: "all 0.2s",
            })}
          >
            About
          </NavLink>

          <NavLink
            to="/articles"
            style={({ isActive }) => ({
              color: isActive ? "#18181b" : "white",
              backgroundColor: isActive ? "#facc15" : "transparent",
              padding: "8px 20px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "15px",
              border: isActive ? "1px solid #facc15" : "1px solid transparent",
              transition: "all 0.2s",
            })}
          >
            Articles
          </NavLink>

          {/* Sign In Button */}
          <NavLink
            to="/auth/signin"
            style={({ isActive }) => ({
              color: isActive ? "#facc15" : "#18181b",
              backgroundColor: isActive ? "transparent" : "#facc15",
              padding: "8px 20px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "700",
              fontSize: "15px",
              border: isActive ? "1px solid #facc15" : "1px solid #facc15",
              transition: "all 0.2s",
              marginLeft: "8px",
            })}
          >
            Sign In
          </NavLink>
        </div>
      </div>

      {menuOpen && (
        <div style={{ display: "flex", flexDirection: "column", marginTop: "14px", gap: "6px" }}>
          <NavLink
            to="/"
            end
            onClick={() => setMenuOpen(false)}
            style={({ isActive }) => ({
              color: isActive ? "#18181b" : "white",
              backgroundColor: isActive ? "#facc15" : "transparent",
              padding: "10px 14px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "15px",
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            style={({ isActive }) => ({
              color: isActive ? "#18181b" : "white",
              backgroundColor: isActive ? "#facc15" : "transparent",
              padding: "10px 14px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "15px",
            })}
          >
            About
          </NavLink>
          <NavLink
            to="/articles"
            onClick={() => setMenuOpen(false)}
            style={({ isActive }) => ({
              color: isActive ? "#18181b" : "white",
              backgroundColor: isActive ? "#facc15" : "transparent",
              padding: "10px 14px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "15px",
            })}
          >
            Articles
          </NavLink>

          {/* Sign In - Mobile */}
          <NavLink
            to="/auth/signin"
            onClick={() => setMenuOpen(false)}
            style={{
              color: "#18181b",
              backgroundColor: "#facc15",
              padding: "10px 14px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "700",
              fontSize: "15px",
            }}
          >
            Sign In
          </NavLink>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hamburger-btn {
            display: block !important;
          }
          .nav-links {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;