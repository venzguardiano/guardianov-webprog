import { Link } from 'react-router-dom';

const SignUpPage = () => {
  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: "32px" }}>
        <span style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.28em", color: "#facc15" }}>
          Get Started
        </span>
        <h1 style={{ fontSize: "30px", fontWeight: "800", color: "#18181b", marginTop: "8px", lineHeight: "1.2" }}>
          Create an Account
        </h1>
        <p style={{ fontSize: "14px", color: "#71717a", marginTop: "8px", lineHeight: "1.6" }}>
          Join WireFrame and start exploring design articles, tips, and resources.
        </p>
      </div>

      {/* Form */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

        {/* First & Last Name */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
          <div>
            <label style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", color: "#18181b" }}>
              First Name
            </label>
            <input
              type="text"
              placeholder="Juan"
              autoComplete="given-name"
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
              Last Name
            </label>
            <input
              type="text"
              placeholder="Dela Cruz"
              autoComplete="family-name"
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
        </div>

        {/* Email */}
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

        {/* Password */}
        <div>
          <label style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", color: "#18181b" }}>
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            autoComplete="new-password"
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
            Use a secure password with letters, numbers, and symbols.
          </p>
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
          Create Account
        </button>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ flex: 1, height: "1px", backgroundColor: "#e4e4e7" }} />
          <span style={{ fontSize: "12px", color: "#a1a1aa" }}>or sign up with</span>
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
        Already have an account?{" "}
        <Link to="/auth/signin" style={{ fontWeight: "700", color: "#18181b", textDecoration: "none" }}
          onMouseEnter={e => e.target.style.color = "#facc15"}
          onMouseLeave={e => e.target.style.color = "#18181b"}
        >
          Log In
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;