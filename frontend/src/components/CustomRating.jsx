import React, { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../features/authSlice";
import axios from "axios";

const fetchAverageRating = async (productId) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/api/getRatings/${productId}`
    );
    const averageRating = response.data.averageRating || 0;
    const totalRatings = response.data.totalRatings || 0;

    return { averageRating, totalRatings };
  } catch (error) {
    console.error("Error fetching average rating:", error);
    throw error;
  }
};

const CustomRating = ({ productId, initialRating }) => {
  const [rating, setRating] = useState(initialRating);
  const [averageRating, setAverageRating] = useState(0);
  const [totalRatings, setTotalRatings] = useState(0);
  const [userHasRated, setUserHasRated] = useState(false);
  const [canRate, setCanRate] = useState(true);

  const user = useSelector((state) => state.auth.user);
  const userId = useSelector((state) => state.auth._id);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { averageRating, totalRatings } = await fetchAverageRating(
          productId
        );
        setAverageRating(averageRating);
        setTotalRatings(totalRatings);
      } catch (error) {
        console.error("Error fetching ratings:", error);
      }
    };

    fetchData();
  }, [productId]);

  useEffect(() => {
    if (userId) {
      dispatch(getUser(userId));
    }
  }, [dispatch, userId]);

  useEffect(() => {
    if (user && user.userLoaded && productId) {
      fetchRatingData();
    }
  }, [productId, user && user.userLoaded]);

  useEffect(() => {
    const fetchAverage = async () => {
      try {
        const { averageRating, totalRatings } = await fetchAverageRating(
          productId
        );
        setAverageRating(averageRating);
        setTotalRatings(totalRatings);
      } catch (error) {
        console.error("Error fetching average rating:", error);
      }
    };

    fetchAverage();
  }, [productId]);

  const fetchRatingData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/getRatings/${productId}`
      );
      setAverageRating(response.data.averageRating || 0);
    } catch (error) {
      console.error("Error fetching average rating:", error);
    }
  };

  useEffect(() => {
    fetchRatingData();
  }, [productId]);

  const checkUserRating = async () => {
    try {
      if (userId) {
        const response = await axios.get(
          `http://localhost:5000/api/checkUserRating/${productId}/${userId}`
        );
        const data = response.data;
        setUserHasRated(data.userHasRated);
        setCanRate(!data.userHasRated);
      }
    } catch (error) {
      console.error("Error checking user rating:", error);
    }
  };

  const handleRatingChange = async (event, newValue) => {
    setRating(newValue);

    try {
      if (!userId || !productId) {
        console.error("User ID or Product ID is undefined.");
        return;
      }

      const response = await axios.post(
        "http://localhost:5000/api/saveRating",
        {
          productId,
          userId,
          rating: newValue,
        }
      );

      console.log("Rating sent successfully:", response.data);
      fetchRatingData();
    } catch (error) {
      console.error("Error sending rating to the backend:", error.message);
    }
  };
  return (
    <div className="flex flex-col items-center">
      <Rating
        name="combined-rating"
        value={userHasRated ? rating : averageRating}
        precision={0.1}
        onChange={handleRatingChange}
        disabled={!canRate}
      />
      <p className="text-neutral-500 ">({totalRatings} avaliações)</p>
    </div>
  );
};

export default CustomRating;
