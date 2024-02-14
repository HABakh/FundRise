import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email or Username</label>
        <input className="loginInput" type="text" placeholder="Enter email or Username..." />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." />
        <button className="loginButton">Login</button>
      </form>
      <a href="/register">
        <button className="loginRegisterButton" >Register</button>
      </a>
    </div>
  );
}
