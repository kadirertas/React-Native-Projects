import  {useState} from "react";
import axios from "axios";

function usePost () 
{
    const [data , SetData] = useState(null); 
    const [loading , SetLoading]= useState(false); 
    const [error, SetError] = useState(null); 
     
    const post = async (url , apiData) => {
          try {
            SetLoading(true); 
            const {data: responsedata} = await axios.post(url ,apiData);
            SetData(responsedata);
            SetLoading(false);
          } catch (err) {
            SetLoading(false);
            SetError(err); 
            SetData(null);
          }

    }

     return {data , loading ,error ,post}; 



}

export default usePost; 





