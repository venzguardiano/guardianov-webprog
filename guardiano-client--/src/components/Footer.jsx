import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#18181b", borderTop: "3px solid #facc15", padding: "40px 32px 24px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "32px" }}>

          {/* Brand */}
          <div style={{ textAlign: "center" }}>
            <span style={{ color: "white", fontSize: "20px", fontWeight: "bold", letterSpacing: "1px" }}>
              Wire<span style={{ color: "#facc15" }}>Frame</span>
            </span>
            <p style={{ color: "#a1a1aa", fontSize: "13px", marginTop: "10px", lineHeight: "1.6", maxWidth: "320px", margin: "10px auto 0" }}>
              WireFrame is a React-powered blog where developers explore components, routing,
              state management, and modern UI patterns built wire by wire.
            </p>
          </div>

          {/* Navigation */}
          <div style={{ textAlign: "center" }}>
            <p style={{ color: "#facc15", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.28em", marginBottom: "12px" }}>
              Navigation
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px", alignItems: "center" }}>
              {[{ label: "Home", to: "/" }, { label: "About", to: "/about" }, { label: "Articles", to: "/articles" }].map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} style={{ color: "#d4d4d8", fontSize: "14px", textDecoration: "none", fontWeight: "600", transition: "color 0.2s" }}
                    onMouseEnter={e => e.target.style.color = "#facc15"}
                    onMouseLeave={e => e.target.style.color = "#d4d4d8"}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Built With */}
          <div style={{ textAlign: "center" }}>
            <p style={{ color: "#facc15", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.28em", marginBottom: "12px" }}>
              Built With
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px", alignItems: "center" }}>
              {["React", "React Router", "Tailwind CSS"].map((tech) => (
                <li key={tech} style={{ color: "#d4d4d8", fontSize: "14px", fontWeight: "600" }}>{tech}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{ marginTop: "36px", paddingTop: "20px", borderTop: "1px solid #3f3f46", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
          <p style={{ color: "#71717a", fontSize: "12px", margin: 0 }}>
            © {new Date().getFullYear()} WireFrame. All rights reserved.
          </p>
          <p style={{ color: "#71717a", fontSize: "12px", margin: 0 }}>
            Made with React & ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;