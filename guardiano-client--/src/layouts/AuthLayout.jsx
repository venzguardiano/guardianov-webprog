import { Outlet } from 'react-router-dom';

const Logo = () => (
  <svg width="42" height="42" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="10,10 28,10 55,72 42,72" fill="white" />
    <polygon points="60,10 68,10 58,85 50,72" fill="white" />
    <polygon points="55,72 58,85 50,72 52,65" fill="white" />
  </svg>
);

const AuthLayout = () => {
  return (
    <div style={{ display: "grid", minHeight: "100vh", gridTemplateColumns: "1fr 1fr" }}>

      {/* Left Panel */}
      <div style={{
        backgroundColor: "#18181b",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Grid background */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(#facc1510 1px, transparent 1px), linear-gradient(90deg, #facc1510 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          pointerEvents: "none",
        }} />

        {/* Center content */}
        <div style={{ position: "relative", textAlign: "center" }}>
          <div style={{
            backgroundColor: "#facc15",
            borderRadius: "16px",
            width: "80px",
            height: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto",
          }}>
            <Logo />
          </div>

          <h2 style={{ color: "white", fontSize: "28px", fontWeight: "800", marginTop: "20px", letterSpacing: "1px" }}>
            Wire<span style={{ color: "#facc15" }}>Frame</span>
          </h2>
          <p style={{ color: "#71717a", fontSize: "13px", marginTop: "10px", lineHeight: "1.7", maxWidth: "260px", margin: "10px auto 0" }}>
            Design smarter. Build faster. Launch with confidence.
          </p>

          {/* Decorative yellow bar */}
          <div style={{ width: "40px", height: "3px", backgroundColor: "#facc15", margin: "24px auto 0", borderRadius: "2px" }} />

          <p style={{ color: "#3f3f46", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.28em", marginTop: "16px" }}>
            Your design hub
          </p>
        </div>
      </div>

      {/* Right Panel */}
      <div style={{
        backgroundColor: "#fafafa",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px",
      }}>
        <div style={{ width: "100%", maxWidth: "400px" }}>
          <Outlet />
        </div>
      </div>

    </div>
  );
};

export default AuthLayout;