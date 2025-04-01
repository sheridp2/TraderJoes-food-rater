import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ItemPage() {
  let params = useParams();

  const [item, setItem] = useState();

  useEffect(() => {
    axios.get(`http://localhost:3000/api/getOne/${params.pid}`).then((res) => {
      setItem(res.data);
      console.log(res.data);
    });
  }, [params.pid]);
  //params.pid
  return (
    <div>{item?.name}</div>
  )
}
