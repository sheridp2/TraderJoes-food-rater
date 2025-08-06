import React from 'react'

export default function Login() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
      <h1>Log In</h1>
       <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}
