import React from "react";

function Login() {
    return (
      <div>
        <form>
          <div>
            <input type="text" name="username" placeholder="Username" />
            <label htmlFor="password">Password</label>
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    )
}

export default Login;