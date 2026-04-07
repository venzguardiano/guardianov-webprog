import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#18181b',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 24px',
      textAlign: 'center',
    }}>
      <div>
        <p style={{
          fontSize: '120px',
          fontWeight: '900',
          color: 'transparent',
          WebkitTextStroke: '2px #facc15',
          lineHeight: 1,
          margin: 0,
        }}>
          404
        </p>

        <div style={{ width: '60px', height: '3px', backgroundColor: '#facc15', margin: '20px auto' }} />

        <h1 style={{ color: '#ffffff', fontSize: '24px', fontWeight: '700', marginBottom: '12px' }}>
          Page Not Found
        </h1>

        <p style={{ color: '#a1a1aa', fontSize: '14px', lineHeight: 1.7, marginBottom: '32px' }}>
          The link you followed may be broken or the page no longer exists.
        </p>

        <Link to="/" style={{
          backgroundColor: '#facc15',
          color: '#18181b',
          padding: '10px 24px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: '700',
          fontSize: '14px',
        }}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;