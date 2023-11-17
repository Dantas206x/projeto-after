import React from "react";
import { Link } from "react-router-dom";
import { StyledForm } from "../StyledForm";
import { useSelector } from "react-redux";

const RegisterStep1 = ({ user, setUser, onNextStep }) => {
   // Move auth to inside the component

  const handleNextStep = () => {
    onNextStep();
  };
  const auth = useSelector((state) => state.auth);
  return (
    <div className="h-screen flex items-center">
      <StyledForm className="max-w-md mx-auto p-4 gradientecor rounded-lg px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl text-center font-bold mb-4">Register (Step 1)</h2>

        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          className="mb-4 p-2 w-full rounded"
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="mb-4 p-2 w-full rounded"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="mb-4 p-2 w-full rounded"
        />

        <div className="flex justify-between">
          <Link to="/Loja" className="w-1/2 text-center py-2 px-4 text-blue-500 hover:underline">
            Ir para a Loja
          </Link>
          <button>
            {auth.registerStatus === "pending" ? "Submitting..." : "Register"}
          </button>
        </div>
      </StyledForm>
    </div>
  );
}

const RegisterStep2 = ({ user, setUser, onPrevStep }) => {
  const handlePrevStep = () => {
    onPrevStep();
  };

  const handleRegister = () => {
    // Your registration logic here
  };

  return (
    <div className="h-screen flex items-center">
      <StyledForm className="max-w-md mx-auto p-4 gradientecor rounded-lg px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl text-center font-bold mb-4">Register (Step 2)</h2>

        <input
          type="number"
          id="cep"
          placeholder="CEP"
          onChange={(e) => setUser({ ...user, cep: e.target.value })}
          className="mb-4 p-2 w-full rounded"
        />
        {/* Other input fields for address details... */}

        <div className="flex justify-between">
          <button
            type="button"
            onClick={handlePrevStep}
            className="w-1/2 text-center py-2 px-4 text-blue-500 hover:underline"
          >
            Voltar
          </button>
          <button
            type="button"
            onClick={handleRegister}
            className="w-1/2 font-bold py-2 px-4 rounded"
          >
            Registrar
          </button>
        </div>
      </StyledForm>
    </div>
  );
};

export { RegisterStep1, RegisterStep2 };