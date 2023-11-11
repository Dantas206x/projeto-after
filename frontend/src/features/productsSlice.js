import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
  averageRating: 0, // Adicione a média de avaliações ao estado
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    const response = await axios.get("http://localhost:5000/products");
    return response?.data;
  }
);

export const fetchAverageRatingAsync = createAsyncThunk(
    "products/fetchAverageRating",
    async (productId) => {
      try {
        const response = await axios.get(`http://localhost:5000/products/${productId}/average-rating`);
        return response?.data.averageRating;
      } catch (error) {
        console.error("Error fetching average rating:", error);
        throw error;
      }
    }
  );

  const productsSlice = createSlice({
    name: "products",
    initialState,
  

  
    extraReducers: (builder) => {
      builder
        .addCase(productsFetch.pending, (state) => {
          state.status = "pending";
        })
        .addCase(productsFetch.fulfilled, (state, action) => {
          state.items = action.payload;
          state.status = "success";
        })
        .addCase(productsFetch.rejected, (state) => {
          state.status = "rejected";
        })
        .addCase(fetchAverageRatingAsync.pending, (state) => {
          // Pode fazer algo enquanto está pendente, se necessário
        })
        .addCase(fetchAverageRatingAsync.fulfilled, (state, action) => {
          state.averageRating = action.payload; // Atualize o estado com o valor retornado
          state.status = "success";
        })
        .addCase(fetchAverageRatingAsync.rejected, (state, action) => {
          state.status = "rejected";
        });
    },
  });
  
  export default productsSlice.reducer;