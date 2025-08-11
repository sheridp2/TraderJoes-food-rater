import { useContext, useEffect, useState } from "react";
import Chip from "@mui/material/Chip";
import Rating from "@mui/material/Rating";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { NavLink, Link } from "react-router";
import { UserContext } from "../../context/userContext";
import axiosInstance from "../../../utils/axiosInstance";
import { API_PATHS } from "../../../utils/apiPaths";

export default function Item({ item }) {
  const { user } = useContext(UserContext);
  const getItemRating = () => {
    let result = 0;
    if (user) {
      const temp = user?.productRatings.filter(
        (rating) => rating?.itemName === item.name
      );
      result = temp[0]?.rating;
    }
    return result;
  };

  const [updateRating, setUpdateRating] = useState(false);
  const [rating, setRating] = useState(getItemRating());
  const [error, setError] = useState(null);

  const addUserItemRating = async (userId, itemId, itemName, rating) => {
    try {
      await axiosInstance.patch(API_PATHS.AUTH.ADD_USER_ITEM_RATING, {
        userId,
        itemId,
        itemName,
        rating,
      });
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  const updateUserItemRating = async (userId, itemName, rating) => {
    try {
      await axiosInstance.patch(API_PATHS.AUTH.UPDATE_USER_ITEM_RATING, {
        userId,
        itemName,
        rating,
      });
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  useEffect(() => {
    if (user) {
      
      setRating(getItemRating());
      
    }
  }, [user]);

  useEffect(() => {
    const currentItem = user?.productRatings.find((val) => {
      return val.itemName === item.name;
    });

    if (rating > 0) {
      if (currentItem === undefined) {
        addUserItemRating(user._id, item._id, item.name, rating);
      } else {
        updateUserItemRating(user._id, item.name, rating);
      }
    }
  }, [rating]);

  return (
    <>
      <Card sx={{ maxWidth: 450 }}>
        <Link
          to={"/item/" + item._id}
          style={{ textDecoration: "none", fontSize: "1.2rem" }}
        >
          <CardHeader
            title={item.name}
            sx={{ minHeight: 120, fontSize: "1.2rem" }}
          />
        </Link>
        <CardMedia component="img" image={item.image} alt={item.name} />
        <CardContent>
          {user && (
            <div>
              <p>Your Rating</p>
              <Rating
                name="simple-controlled"
                value={rating}
                max={10}
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
              />
              <p style={{ marginBottom: 5 }}>Average User Rating</p>
              <Rating
                name="simple-controlled"
                value={item.rating}
                max={10}
                readOnly
              />
            </div>
          )}
          {!user && (
            <div>
              <p style={{ marginBottom: 5 }}>All Users Rating</p>
              <Rating
                name="simple-controlled"
                value={item.rating}
                max={10}
                readOnly
              />
            </div>
          )}
          <div style={{ marginTop: 10 }}>
            {item.tags.map((tag) => {
              return <Chip label={tag} key={tag}></Chip>;
            })}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
