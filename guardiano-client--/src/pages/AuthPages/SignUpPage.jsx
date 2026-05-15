import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { createUser } from '../../services/UserService';

const SignUpPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');
    setSuccess('');

    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.password
    ) {
      setError('All fields are required.');
      return;
    }

    if (form.password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }

    try {
      await createUser({
        firstName: form.firstName,
        lastName: form.lastName,
        age: '18',
        gender: 'other',
        contactNumber: '09123456789',
        email: form.email,
        type: 'viewer',
        username: form.email.split('@')[0],
        password: form.password,
        address: 'N/A',
        isActive: true,
      });

      setSuccess('Account created successfully!');

      setTimeout(() => {
        navigate('/auth/signin');
      }, 1500);

    } catch (err) {
      console.error(err);

      setError(
        err.response?.data?.message ||
        'Failed to create account.'
      );
    }
  };

  return (
    <div>

      {/* Header */}
      <div style={{ marginBottom: "32px" }}>
        <span style={{
          fontSize: "11px",
          fontWeight: "700",
          textTransform: "uppercase",
          letterSpacing: "0.28em",
          color: "#facc15"
        }}>
          Get Started
        </span>

        <h1 style={{
          fontSize: "30px",
          fontWeight: "800",
          color: "#18181b",
          marginTop: "8px",
          lineHeight: "1.2"
        }}>
          Create an Account
        </h1>

        <p style={{
          fontSize: "14px",
          color: "#71717a",
          marginTop: "8px",
          lineHeight: "1.6"
        }}>
          Join WireFrame and start exploring design articles, tips, and resources.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px"
        }}
      >

        {/* First & Last Name */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px"
        }}>

          <div>
            <label style={{
              fontSize: "12px",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#18181b"
            }}>
              First Name
            </label>

            <input
              type="text"
              name="firstName"
              placeholder="Juan"
              value={form.firstName}
              onChange={handleChange}
              style={{
                marginTop: "6px",
                width: "100%",
                padding: "12px 16px",
                border: "2px solid #e4e4e7",
                borderRadius: "10px",
                backgroundColor: "#fff",
                fontSize: "14px",
                color: "#18181b",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div>
            <label style={{
              fontSize: "12px",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#18181b"
            }}>
              Last Name
            </label>

            <input
              type="text"
              name="lastName"
              placeholder="Dela Cruz"
              value={form.lastName}
              onChange={handleChange}
              style={{
                marginTop: "6px",
                width: "100%",
                padding: "12px 16px",
                border: "2px solid #e4e4e7",
                borderRadius: "10px",
                backgroundColor: "#fff",
                fontSize: "14px",
                color: "#18181b",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>

        </div>

        {/* Email */}
        <div>
          <label style={{
            fontSize: "12px",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#18181b"
          }}>
            Email Address
          </label>

          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            style={{
              marginTop: "6px",
              width: "100%",
              padding: "12px 16px",
              border: "2px solid #e4e4e7",
              borderRadius: "10px",
              backgroundColor: "#fff",
              fontSize: "14px",
              color: "#18181b",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        {/* Password */}
        <div>
          <label style={{
            fontSize: "12px",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#18181b"
          }}>
            Password
          </label>

          <input
            type="password"
            name="password"
            placeholder="••••••••"
            value={form.password}
            onChange={handleChange}
            style={{
              marginTop: "6px",
              width: "100%",
              padding: "12px 16px",
              border: "2px solid #e4e4e7",
              borderRadius: "10px",
              backgroundColor: "#fff",
              fontSize: "14px",
              color: "#18181b",
              outline: "none",
              boxSizing: "border-box",
            }}
          />

          <p style={{
            fontSize: "12px",
            color: "#a1a1aa",
            marginTop: "6px"
          }}>
            Use a secure password with letters, numbers, and symbols.
          </p>
        </div>

        {/* Error */}
        {error && (
          <p style={{
            color: "red",
            fontSize: "13px",
            margin: 0
          }}>
            {error}
          </p>
        )}

        {/* Success */}
        {success && (
          <p style={{
            color: "green",
            fontSize: "13px",
            margin: 0
          }}>
            {success}
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "13px",
            backgroundColor: "#facc15",
            color: "#18181b",
            fontWeight: "800",
            fontSize: "13px",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Create Account
        </button>

      </form>

      {/* Footer */}
      <div style={{
        marginTop: "28px",
        paddingTop: "20px",
        borderTop: "2px solid #e4e4e7",
        fontSize: "13px",
        color: "#71717a"
      }}>
        Already have an account?{" "}

        <Link
          to="/auth/signin"
          style={{
            fontWeight: "700",
            color: "#18181b",
            textDecoration: "none"
          }}
        >
          Log In
        </Link>
      </div>

    </div>
  );
};

export default SignUpPage;