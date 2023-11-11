import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../features/authSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cep: "",
    address: "",
    city: "",
    neighborhood: "",
    region: "",
    number: "",
    complement: "",
  });

  useEffect(() => {
    if (auth._id) {
      navigate("/Carrinho");
    }
  }, [auth._id, navigate]);

  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user);
    dispatch(registerUser(user));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-screen h-screen  text-gray-700">
  <h2 className="font-bold text-2xl">Registrar</h2>
  {step === 1 && (
    <div className="flex flex-col bg-neutral-400 rounded-lg shadow-lg p-12 mt-12">

      <input
        type="text"
        placeholder="Nome"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        className="flex items-center text-black  bg-neutral-200 h-12 px-4 w-64 mt-2 rounded focus:outline-none focus:ring-2"
      />
      <input
        type="email"
        placeholder="E-mail"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        className="flex items-center text-black h-12 bg-neutral-200 px-4 w-64  mt-2 rounded focus:outline-none focus:ring-2"
      />
      <input
        type="password"
        placeholder="Senha"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        className="flex items-center text-black h-12 bg-neutral-200 px-4 w-64  mt-2 rounded focus:outline-none focus:ring-2"
      />
      <button onClick={handleNextStep} className="flex items-center text-black justify-center h-12 px-6 w-64 bg-neutral-200 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-neutral-700">
        Próxima Etapa
      </button>
    </div>
  )}
  {step === 2 && (
    <div className="flex flex-col bg-neutral-400 rounded shadow-lg p-12 mt-12">
      <input
        type="number"
        placeholder="CEP"
        value={user.cep}
        onChange={(e) => setUser({ ...user, cep: e.target.value })}
        className="flex items-center text-black h-12 bg-neutral-200 px-4 w-64  mt-2 rounded focus:outline-none focus:ring-2"
      />
      <input
        type="text"
        placeholder="Endereço"
        value={user.address}
        onChange={(e) => setUser({ ...user, address: e.target.value })}
        className="flex items-center text-black h-12 bg-neutral-200 px-4 w-64  mt-2 rounded focus:outline-none focus:ring-2"
      />
      <input
        type="number"
        placeholder="Numero"
        value={user.number}
        onChange={(e) => setUser({ ...user, number: e.target.value })}
        className="flex items-center text-black h-12  bg-neutral-200 px-4 w-64  mt-2 rounded focus:outline-none focus:ring-2"
      />
      <input
        type="text"
        placeholder="Bairro"
        value={user.neighborhood}
        onChange={(e) => setUser({ ...user, neighborhood: e.target.value })}
        className="flex items-center text-black h-12 bg-neutral-200 px-4 w-64  mt-2 rounded focus:outline-none focus:ring-2"
      />
      <input
        type="text"
        placeholder="Cidade"
        value={user.city}
        onChange={(e) => setUser({ ...user, city: e.target.value })}
        className="flex items-center text-black h-12 bg-neutral-200 px-4 w-64  mt-2 rounded focus:outline-none focus:ring-2"
      />
      <input
        type="text"
        placeholder="Complemento"
        value={user.complement}
        onChange={(e) => setUser({ ...user, complement: e.target.value })}
        className="flex items-center text-black h-12 bg-neutral-200 px-4 w-64  mt-2 rounded focus:outline-none focus:ring-2"
      />
      <input
        type="text"
        placeholder="UF"
        value={user.region}
        onChange={(e) => setUser({ ...user, region: e.target.value })}
        className="flex items-center text-black h-12 bg-neutral-200 px-4 w-64  mt-2 rounded focus:outline-none focus:ring-2"
      />
      <button onClick={handlePrevStep} className="flex items-center justify-center  text-black h-12 px-6 w-64 bg-neutral-200 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-neutral-700">
        Etapa Anterior
      </button>
      <button className="flex items-center justify-center h-12 px-6 w-64 bg-neutral-200 text-black mt-2 rounded font-semibold text-sm text-blue-100 hover:bg-neutral-700">
        {auth.registerStatus === "pending" ? "Submitting..." : "Register"}
      </button>
      {auth.registerStatus === "rejected" ? (
        <p>{auth.registerError}</p>
      ) : null}
    </div>
  )}
</form>
  );
};

export default Register;
