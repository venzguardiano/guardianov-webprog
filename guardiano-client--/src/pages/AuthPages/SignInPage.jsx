import { Link } from 'react-router-dom';

const SignInPage = () => {
  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: "32px" }}>
        <span style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.28em", color: "#facc15" }}>
          Welcome Back
        </span>
        <h1 style={{ fontSize: "30px", fontWeight: "800", color: "#18181b", marginTop: "8px", lineHeight: "1.2" }}>
          Log In to WireFrame
        </h1>
        <p style={{ fontSize: "14px", color: "#71717a", marginTop: "8px", lineHeight: "1.6" }}>
          Access your account using the same monochrome wireframe language used across the site.
        </p>
      </div>

      {/* Form */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

        <div>
          <label style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", color: "#18181b" }}>
            Email Address
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            style={{
              marginTop: "6px", width: "100%", padding: "12px 16px",
              border: "2px solid #e4e4e7", borderRadius: "10px",
              backgroundColor: "#fff", fontSize: "14px", color: "#18181b",
              outline: "none", boxSizing: "border-box", transition: "border 0.2s",
            }}
            onFocus={e => e.target.style.borderColor = "#facc15"}
            onBlur={e => e.target.style.borderColor = "#e4e4e7"}
          />
        </div>

        <div>
          <label style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", color: "#18181b" }}>
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            autoComplete="current-password"
            style={{
              marginTop: "6px", width: "100%", padding: "12px 16px",
              border: "2px solid #e4e4e7", borderRadius: "10px",
              backgroundColor: "#fff", fontSize: "14px", color: "#18181b",
              outline: "none", boxSizing: "border-box", transition: "border 0.2s",
            }}
            onFocus={e => e.target.style.borderColor = "#facc15"}
            onBlur={e => e.target.style.borderColor = "#e4e4e7"}
          />
          <p style={{ fontSize: "12px", color: "#a1a1aa", marginTop: "6px" }}>
            Minimum 8 letters, numbers, and symbols.
          </p>
        </div>

        {/* Remember me & Forgot */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <label style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#52525b", cursor: "pointer" }}>
            <input type="checkbox" style={{ accentColor: "#facc15", width: "15px", height: "15px" }} />
            Remember me
          </label>
          <button style={{ fontSize: "13px", fontWeight: "600", color: "#71717a", background: "none", border: "none", cursor: "pointer" }}>
            Forgot Password?
          </button>
        </div>

        {/* Primary Button */}
        <button style={{
          width: "100%", padding: "13px", backgroundColor: "#facc15",
          color: "#18181b", fontWeight: "800", fontSize: "13px",
          textTransform: "uppercase", letterSpacing: "0.15em",
          border: "none", borderRadius: "10px", cursor: "pointer",
          transition: "opacity 0.2s",
        }}
          onMouseEnter={e => e.target.style.opacity = "0.85"}
          onMouseLeave={e => e.target.style.opacity = "1"}
        >
          Log In
        </button>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ flex: 1, height: "1px", backgroundColor: "#e4e4e7" }} />
          <span style={{ fontSize: "12px", color: "#a1a1aa" }}>or continue with</span>
          <div style={{ flex: 1, height: "1px", backgroundColor: "#e4e4e7" }} />
        </div>

        {/* Social Buttons */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          {["Google", "Microsoft"].map((provider) => (
            <button key={provider} style={{
              padding: "11px", border: "2px solid #e4e4e7", borderRadius: "10px",
              backgroundColor: "#fff", fontSize: "13px", fontWeight: "700",
              color: "#18181b", cursor: "pointer", transition: "border-color 0.2s",
            }}
              onMouseEnter={e => e.target.style.borderColor = "#facc15"}
              onMouseLeave={e => e.target.style.borderColor = "#e4e4e7"}
            >
              {provider}
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ marginTop: "28px", paddingTop: "20px", borderTop: "2px solid #e4e4e7", fontSize: "13px", color: "#71717a" }}>
        No account yet?{" "}
        <Link to="/auth/signup" style={{ fontWeight: "700", color: "#18181b", textDecoration: "none" }}
          onMouseEnter={e => e.target.style.color = "#facc15"}
          onMouseLeave={e => e.target.style.color = "#18181b"}
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;