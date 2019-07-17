import React from "react";

import axios from 'axios';


useEffect(() => {

    axios.get('GET https://api.nasa.gov/planetary/apod?api_key=Hu6MRWbnJ9Z6vRKWgagecXYGqfllCpI1jnBHfQZ4&date=2012-03-14 ')
        .then( element => {
        
            const APODtitle = element.title;
            console.log(APODtitle)

            const APODurl = element.hdurl;
            console.log(APODurl)

            const APODblurb = element.explanation;
            console.log(APODblurb)

            const APODdate = element.date;
            console.log(APODdate)
        });
    

    
    
}, []);

