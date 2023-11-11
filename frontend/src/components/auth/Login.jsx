import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/authSlice";
import { useNavigate } from "react-router-dom";
import { StyledForm } from "./StyledForm";



const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (auth._id) {
      navigate("/Carrinho");
    }
  }, [auth._id, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user);
    dispatch(loginUser(user));
  };

  return (
    <>
      <StyledForm
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center w-screen h-screen  text-gray-700"
      >
        <h2 className="font-bold text-2xl ">Login</h2>
        <div className="flex flex-col bg-neutral-400 rounded shadow-lg p-12 mt-12">
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="flex items-center text-black h-12 px-4 w-64 bg-neutral-200 mt-2 rounded focus:outline-none focus:ring-2"
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="flex items-center  text-black h-12 px-4 w-64 bg-neutral-200 mt-2 rounded focus:outline-none focus:ring-2"
          />

          <button className="flex items-center justify-center h-12 px-6 w-64 bg-neutral-200 mt-8 rounded font-semibold text-sm text-black hover:bg-neutral-700">
            {auth.loginStatus === "pending" ? "Submitting..." : "Login"}
          </button>
          {auth.loginStatus === "rejected" ? <p>{auth.loginError}</p> : null}
          <div className="flex mt-6 justify-center text-xs">
			<a className="text-blue-800 hover:text-blue-500" href="#">Esqueceu a senha ?</a>
			<span className="mx-2 text-gray-300">/</span>
			<a className="text-blue-800 hover:text-blue-500" href="/Registrar">Registrar-se</a>
		</div>
        </div>
        
      </StyledForm>
    </>
  );
};

export default Login;
