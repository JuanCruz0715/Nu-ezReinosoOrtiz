import React, {useEffect, useState} from "react";
import { getAgentes } from "../../Api";
import { CardAgents } from "../CardAgents/CardAgents";

export const AgentsContainer = () => { 
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
      {agentes.filter((agentes) => {
         return agentes.uuid != "ded3520f-4264-bfed-162d-b080e2abccf9"
        })
        .map((agentes) => (
          <CardAgents key={agentes.uuid} data={agentes} />
        ))}
    </div>
   )

}

