

import React, {useState, useEffect} from "react";
import axios from "axios";



function Hooks (url ) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        console.log(url);
        const timer = setTimeout(() => {
          setLoading(false);
        }, 1000);
        setData(response.data);
      } catch (error) {
        setLoading(false); 
        setError(true); 
        console.error("Error fetching data: ", error);
      }
    };
    
    useEffect(() => {
      fetchData();
    }, []);

    return {loading , data ,error}; 
}


export default Hooks ; 