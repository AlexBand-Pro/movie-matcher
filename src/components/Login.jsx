import { Link } from "react-router-dom"

function Login () {
  return (
    <section className="login-page">
      <h1 className="login-eading">Sign In</h1>
      <form>
        <Link to="/email-log" className="form-link">Log In</Link>
        <Link to="/email-log" className="form-link">Create Account</Link>
        <p>or</p>
        <button>Sign in with Google</button>
      </form>
    </section>
  )
}

export default Login