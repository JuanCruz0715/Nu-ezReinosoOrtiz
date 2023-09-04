import { useEffect,useState } from "react";
import { getGuns } from "../../Api";
import CardGuns from "./CardGuns/CardGuns";

export const GunsContainer = ()  => {

 const [guns, setGuns] = useState([]);
 useEffect(() => {
  const fetchApi = async () => {
  try {
    const data = await getGuns()
    console.log (data)
    setGuns(data)
  } catch (error) {
    console.error ("No se extrajeron las armas",error)

  }


  }
  fetchApi()
 }, [])
 
  return (
    <div>

     {guns.map((guns)=>(<CardGuns key={guns.uuid} data={guns} />))}


    </div>
  )
}

