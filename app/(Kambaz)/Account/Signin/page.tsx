import Link from "next/link";
export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <input
        className="wd-username"
        placeholder="username"
        defaultValue="Raptor"
      />{" "}
      <br />
      <input
        className="wd-password"
        placeholder="password"
        type="password"
        defaultValue="123213213"
      />{" "}
      <br />
      <Link id="wd-signin-btn" href="/Dashboard">
        {" "}
        Sign in{" "}
      </Link>{" "}
      <br />
      <Link id="wd-signup-link" href="Signup">
        {" "}
        Sign up{" "}
      </Link>
    </div>
  );
}
