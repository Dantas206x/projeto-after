import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { url, setHeaders } from "./api";

console.log("Starting authSlice.js...");
const initialState = {
  token: localStorage.getItem("token"),
  name: "",
  email: "",
  _id: "",
  registerStatus: "",
  registerError: "",
  loginStatus: "",
  loginError: "",
  userLoaded: false,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (values, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${url}/register`, {
        name: values.name,
        email: values.email,
        cep: values.cep,
        address: values.address,
        city: values.city,
        neighborhood: values.neighborhood,
        region: values.region,
        number: values.number,
        complement: values.complement,
        password: values.password,
      });

      localStorage.setItem("token", token.data);

      return token.data;
    } catch (error) {
      console.log("Error during registerUser:", error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (values, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${url}/login`, {
        email: values.email,
        password: values.password,
      });

      const token = response.data;

      if (!token) {
        console.log("Received empty token from server.");
        return rejectWithValue("Received empty token from server.");
      }

      localStorage.setItem("token", token);

      return token;
    } catch (error) {
      console.log("Error during loginUser:", error);

      if (error.response) {
        console.log("Error response:", error.response.data);
        return rejectWithValue(error.response.data);
      } else {
        console.log("Unknown error occurred");
        return rejectWithValue("Unknown error occurred");
      }
    }
  }
);

export const getUser = createAsyncThunk(
  "auth/getUser",
  async (id, { rejectWithValue }) => {
    try {
      console.log("Token:", localStorage.getItem("token"));
      const token = await axios.get(`${url}/user/${userId}`, setHeaders());

      localStorage.setItem("token", token.data);

      return token.data;
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUser(state, action) {
      const storedToken = localStorage.getItem("token");
      console.log("Stored Token:", storedToken); // Adiciona esta linha
    
      if (storedToken) {
        try {
          console.log("Type of Stored Token:", typeof storedToken);
          console.log("Decoding Token...");
          const user = jwtDecode(storedToken);
          console.log("Decoded User:", user);
    
          if (!user._id || !user.name || !user.email) {
            console.error("Invalid user data in the decoded token.");
            console.error("Decoded User ID:", user._id);
            console.error("Decoded User Name:", user.name);
            console.error("Decoded User Email:", user.email);
            return { ...state, userLoaded: true }; // Aborta o processo se os dados do usuário forem inválidos
          }
    
          console.log("Decoded Token:", storedToken);
    
          return {
            ...state,
            token: storedToken,
            name: user.name,
            email: user.email,
            _id: user._id,
            userLoaded: true,
          };
        } catch (error) {
          if (error.name === 'InvalidTokenError') {
            console.error("Invalid token error:", error.message);
          } else {
            console.error("Error decoding token:", error);
          }
    
          return { ...state, userLoaded: true };
        }
      } else {
        return { ...state, userLoaded: true };
      }
    },

    logoutUser(state, action) {
      localStorage.removeItem("token");

      return {
        ...state,
        token: "",
        name: "",
        email: "",
        _id: "",
        registerStatus: "",
        registerError: "",
        loginStatus: "",
        loginError: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      return { ...state, registerStatus: "pending" };
    });


    builder.addCase(getUser.rejected, (state, action) => {
      return {
        ...state,
        getUserStatus: "rejected",
        getUserError: action.payload,
      };
    });
  },
});

export const { loadUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
