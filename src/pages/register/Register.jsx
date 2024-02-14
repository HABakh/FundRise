import "./register.css"

export default function Register() {
    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username..." />
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Example@example.com" />
        <label>Phone Number</label>
        <input className="registerInput" type="text" placeholder="+212 12 34 56 78 91" />
        <label>Birthday</label>
        <input className="registerInput" type="date"  />
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." />
        <label>Confirm Password</label>
        <input className="registerInput" type="password" placeholder="Confirm your password..." />
        <button className="registerButton">Register</button>
      </form>
      <a href="/login">
        <button className="registerLoginButton">Login</button>
      </a>
    </div>
    )
}
