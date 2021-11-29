import React, { useState, useEffect } from "react";
import { InfoCard } from "./components/InfoCard";
import axios from "axios";
import Container from "@material-ui/core/Container";
import { Paper,MenuItem, Grid,InputLabel } from "@material-ui/core";
import Select from 'react-select'
import { ContactSupportOutlined } from "@material-ui/icons";

const options = [
  { value: 'ar', label: 'Argentina' },
  { value: 'us', label: 'Estados Unidos' },
  { value: 'mx', label: 'Mexico' }
]
export default function Home() {

  const [articles, setArticles] = useState([]);
  const [getCountry, upcountry] = useState(options[0].value);
  const[isFetched,fetch]=useState(false)
 


  useEffect(() => {
    handleSubmit((options[0].value))
  }, []);

  const handleSubmit =(value)=>{
    axios
    .get("https://localhost:5001/news",{params:{country:value}})
    .then((result) => {
      // result.data.articles.length>0?( setArticles( { articles: result.data.articles}),fetch(true)) :fetch(false)
     setArticles( result.data.articles)

    })
    .catch((error) => {
      console.log("somethig was wrong");
    });
  }

  const handleSelectChange=(e)=>{
     
   upcountry(e.value)
   setTimeout(() => {
    handleSubmit(e.value)
  }, 500)
   
}
  
  const listCardInfo = articles.map((article) => (
    <InfoCard
      title={article.title}
      description={article.description}
      urlToImage={article.urlToImage}
      date={article.publishedAt}
    />
  ));



  return (
    <div>
      <Container maxWidth="lg">
       
        <Grid item xs={6} justifyContent="space-around">
        <InputLabel id="demo-simple-select-label" style={{marginTop:10,marginBlockEnd:10}}>Pais</InputLabel>
        <Select options={options} onChange={handleSelectChange} isSearchable={true}  defaultValue={options[0]}/>
        
        </Grid>
         
        {articles.length > 0 &&
          listCardInfo
        }
      </Container>
    </div>
  );
}
