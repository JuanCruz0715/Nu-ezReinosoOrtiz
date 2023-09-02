import React, {useEffect, useState} from "react";
import { getAgentes } from "../../Api";
import { CardAgents } from "../CardAgents/CardAgents";

export default function AgentsContainer() { 
    const [agentes, setAgentes] = useState([])

    useEffect(() => {
      const  fetchData = async () => {
        try {
            const data = await getAgentes();
            console.log(data)
        setAgentes(data)
        } catch (error) {
            console.error('Error al obtener los Agentes', error);
        }
      }
      fetchData();
    }, [])
   console.log("agentes",agentes)
    return (
        <div>
            {agentes.map((agentes)=>(<CardAgents key={agentes.uuid} data={agentes} />))}
          
        </div> //aca vamos a crear las tarjetas, con la cantidad de pj que tengamos
      );
}
