import { useContext, useState } from "react";
import Chip from "@mui/material/Chip";
import Rating from "@mui/material/Rating";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { NavLink, Link } from "react-router";
import { UserContext } from "../../context/userContext";

export default function Item({ item }) {
  const { user } = useContext(UserContext);
  const [value, setValue] = useState(0);
  return (
    <>
      <Card sx={{ maxWidth: 450 }}>
        <Link to={"/product/" + item._id } style={{ textDecoration: "none", fontSize: "1.2rem" }}>
          <CardHeader title={item.name} sx={{ minHeight: 120, fontSize: "1.2rem" }} />
        </Link>
        <CardMedia component="img" image={item.image} alt={item.name} />
        <CardContent>
          {user && (
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
              <p style={{marginBottom: 5}}>Average User Rating</p>
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
              <p style={{marginBottom: 5}}>All Users Rating</p>
              <Rating
                name="simple-controlled"
                value={item.rating}
                max={10}
                readOnly
              />
            </div>
          )}
          <div style={{ marginTop: 10}}>
            {item.tags.map((tag) => {
              return <Chip label={tag} key={tag}></Chip>;
            })}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
