import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ItemPage() {
  let params = useParams();

  const [item, setItem] = useState();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/v1/item/get/${params.id}`).then((res) => {
      setItem(res.data);
    });
  }, [params.id]);
  //params.pid
  return (
    <div>{item?.name}</div>
  )
}
