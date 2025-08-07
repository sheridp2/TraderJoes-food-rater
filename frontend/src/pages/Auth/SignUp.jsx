import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router";

import { validateEmail } from '../../../utils/helpers';

import axiosInstance from "../../../utils/axiosInstance";
import { API_PATHS } from "../../../utils/apiPaths";

import { UserContext } from "../../context/userContext";
import { Input } from "@mui/material";


export default function SignUp() {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {updateUser} = useContext(UserContext)

  const [error, setError] = useState("");

  const navigate = useNavigate();
  
  const handleSignUp = async (e) => {
    e.preventDefault();

    let profileImageUrl = "";

    if (!fullName) {
      setError("Please enter your name");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      return;
    }

    if (!password) {
      setError("Please enter password");
      return;
    }

    setError("");

    try {
      if(profilePic) {
        const imgUploadRes = await uploadImage(profilePic)
        profileImageUrl = imgUploadRes.imageUrl || "";
      }

      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        fullName,
        email,
        password,
        profileImageUrl
      })

      const { token, user } = response.data;

      if(token){
        localStorage.setItem("token", token)
        updateUser(user);
        navigate("/dashboard");
      }

    } catch (error) {
      if( error.response && error.response.data.message) {
        setError(error.response.data.message)
      } else {
        setError(" Something went wrong. Please try again.")
      }
    }
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
      <h1>Sign up</h1>
       <form onSubmit={handleSignUp} style={{ display: "grid"}}>
           <Input
              value={fullName}
              onChange={({ target }) => setFullName(target.value)}
              label="Full Name"
              placeholder="Boo Boo Jefferies"
              type="text"
            />
          
          <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label="Email address"
            placeholder="example@example.com"
            type="text"
          />

          <Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label="Password"
            placeholder="Min 8 characters"
            type="password"
          />

          {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

          <button type="submit" className="btn-primary">
            SIGN UP
          </button>

          <p className="text-[13px] text-slate-800 mt-3">
            Already have an account?{" "}
            <Link className="font-medium text-primary underline" to="/login">
              Login
            </Link>
          </p>
        </form>
    </div>
  )
}
