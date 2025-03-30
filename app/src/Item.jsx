import { useState } from "react"
import Chip from '../node_modules/@mui/material/Chip';
import Rating from '../node_modules/@mui/material/Rating';
import Card from '../node_modules/@mui/material/Card';
import CardHeader from '../node_modules/@mui/material/CardHeader';
import CardMedia from '../node_modules/@mui/material/CardMedia';
import CardContent from '../node_modules/@mui/material/CardContent';

export default function Item({item}) {
  const [value, setValue] = useState(item.rating);
  return (
    <>
    <Card sx={{ maxWidth: 450 }}>
    <CardHeader
        title={item.name}

      />
      <CardMedia
        component="img"
        image={item.image}
        alt={item.name}
      />
      <CardContent>
        <div>
          <Rating
            name="simple-controlled"
            value={value}
            max={10}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </div>
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
