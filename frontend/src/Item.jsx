import { useState } from "react";
import Chip from "@mui/material/Chip";
import Rating from "@mui/material/Rating";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { NavLink, Link } from "react-router";

import { useUserStore } from "../store.ts";

export default function Item({ item }) {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const [value, setValue] = useState(0);
  return (
    <>
      <Card sx={{ maxWidth: 450 }}>
        <Link to={"/product/" + item._id }>
          <CardHeader title={item.name} sx={{ minHeight: 120 }} />
        </Link>
        <CardMedia component="img" image={item.image} alt={item.name} />
        <CardContent>
          {isLoggedIn && (
            <div>
              <p>Your Rating</p>
              <Rating
                name="simple-controlled"
                value={value}
                max={10}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <p>Average User Rating</p>
              <Rating
                name="simple-controlled"
                value={item.rating}
                max={10}
                readOnly
              />
            </div>
            
          )}
          {!isLoggedIn && (
            <div>
              <p>All Users Rating</p>
              <Rating
                name="simple-controlled"
                value={item.rating}
                max={10}
                readOnly
              />
            </div>
          )}
          <div>
            {item.tags.map((tag) => {
              return <Chip label={tag} key={tag}></Chip>;
            })}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
