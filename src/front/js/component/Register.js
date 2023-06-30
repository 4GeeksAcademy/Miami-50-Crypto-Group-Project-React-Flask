import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";

export const Register = () => {
  const [names, setNames] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== passwordCheck) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          names: names,
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.status === 201) {
        setSuccess(true);
        navigate("/login"); // Redirect to the login page
      } else {
        setError(data.msg);
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="auth-form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="names">Full Name</label>
        <input
          type="text"
          id="names"
          value={names}
          onChange={(e) => setNames(e.target.value)}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="password-check">Re-enter Password</label>
        <input
          type="password"
          id="password-check"
          value={passwordCheck}
          onChange={(e) => setPasswordCheck(e.target.value)}
          required
        />

        <button type="submit">Register</button>
      </form>

      {error && <p>{error}</p>}
      {success && <p>User registered successfully!</p>}
    </div>
  );
};

// The styling for the former code can be taken from the following, had to remove it due to some weird incompatibility.

// export const Register = () => {
//   const [names, setNames] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [rePassword, setRePassword] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (password !== rePassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     try {
//       // Your API call logic here

//       if (response.status === 201) {
//         setSuccess(true);
//         // Redirect to the login page or perform any other necessary action
//       } else {
//         setError(data.msg);
//       }
//     } catch (error) {
//       setError("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="auth-form-container">
//       <form className="register-form">
//         <label htmlFor="name">Full Name</label>
//         <input
//           value={names}
//           onChange={(e) => setName(e.target.value)}
//           name="name"
//           id="name"
//           placeholder="Full Name"
//         />

//         <label htmlFor="email">
//           <i className="fas fa-envelope" style={{ color: "#6caef4" }}></i> Email
//         </label>
//         <input
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           type="email"
//           placeholder="email@cryptotart.com"
//           id="email"
//           name="email"
//         />

//         <label htmlFor="password">
//           <i className="fas fa-lock" style={{ color: "#6caef4" }}></i> Passie
//         </label>
//         <input
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           type="password"
//           placeholder="*******"
//           id="password"
//           name="password"
//         />

//         <label htmlFor="re-password">
//           <i className="far fa-grin-hearts" style={{ color: "#6caef4" }}></i>{" "}
//           Re-Enter Passie
//         </label>
//         <input
//           value={rePassword}
//           onChange={(e) => setRePassword(e.target.value)}
//           type="password"
//           placeholder="*******"
//           id="password"
//           name="password"
//         />
//       </form>
//       <Link to="/login">
//         <button className="link-button">
//           Already have an account?{" "}
//           <i className="far fa-surprise" style={{ color: "#6caef4" }}></i> Log
//           In Here!!{" "}
//           <i className="far fa-smile-beam" style={{ color: "#6caef4" }}></i>
//         </button>
//       </Link>
//       <button className="reg-button" onClick={handleSubmit}>
//         Register
//       </button>
//     </div>
//   );
// };
