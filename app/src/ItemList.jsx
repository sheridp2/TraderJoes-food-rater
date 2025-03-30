import { useEffect, useState } from "react"
import axios from "axios";

import Item from "./Item"

export default function ItemList() {
  const [items, setItems] = useState();


  useEffect(() => {
    axios
      .get('http://localhost:3000/api/getAll')
      .then((res) => {
        console.log(res.data);
        setItems(res.data)
      })
}, []);

  const itemsList = items?.map(
    (item) => {
      return(
        <div key={item._id}>
          <Item item={item}/>
        </div>
      )
    }
  )

  return (
    <div>
      {itemsList}
    </div>
  )
}
