import { Link } from "react-router-dom"

function EmailLog () {
  return (
    <section className="login-page">
      <h1>Log In</h1>
      <form>
        <input name="email" id="email" type="email" placeholder="Email"/>
        <input name="password" id="password" type="password" placeholder="Password" />
        <Link className="form-link">Log In</Link>
      </form>
    </section>
  )
}

export default EmailLog