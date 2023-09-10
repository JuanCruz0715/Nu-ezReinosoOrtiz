import { useEffect, useState } from "react";
import { getGuns } from "../../Api";
import CardGuns from "./CardGuns/CardGuns";
import "./CardGuns/CardGuns.css";
export const GunsContainer = () => {
  const [guns, setGuns] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const data = await getGuns();
        console.log(data);
        setGuns(data);
      } catch (error) {
        console.error("No se extrajeron las armas", error);
      }
    };
    fetchApi();
  }, []);

  return (
    <div className="Container-fondo">
      <h2>Weapons</h2>
      <div className="Container">
        
        {guns
          .filter((guns) => {
            return (
              guns.uuid != "44d4e95c-4157-0037-81b2-17841bf2e8e3" &&
              guns.uuid != "29a0cfab-485b-f5d5-779a-b59f85e204a8"
            );
          })
          .map((guns) => (
            <CardGuns key={guns.uuid} data={guns} />
          ))}
      </div>
    </div>
  );
};
