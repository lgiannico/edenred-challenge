import React ,{useState} from 'react'
import SearchArticleForm from './components/SearchArticleForm'
import { Container } from '@material-ui/core'
import axios from 'axios';
import { InfoCard } from './components/InfoCard';
export default function SearchPage() {

    const [formValues, getFormValues]= useState()
    const [articles, getArticles]= useState([])

    const formatDate = (date)=>{
        let formatted_date = date.getFullYear() + "-" + (date.getMonth() + 1)+ "-" +  date.getDate()
         return formatted_date;
        }

    const handleSubmit=(e)=>{
        console.log(e)
        axios.get('https://localhost:5001/news/GetByParams',{params:{sinceDate :formatDate(e.sinceDate) ,toDate:formatDate(e.toDate),country:e.country,keyword:e.keyword}})
        .then(result=>{
            getArticles(result.data.articles);
        })
        .catch(error=>{
            console.log("somethig was wrong")
        })
        console.log()
    }
    
    const listCardInfo = articles.map((article) =>
    <InfoCard title={article.title} description={article.description} urlToImage={article.urlToImage} date={article.publishedAt}/>
    );

    return (
        <div>
             <Container maxWidth="lg">
            {/* <SearchArticleForm handleFormValues={(value) => handleSubmit(value)}/> */}
            <SearchArticleForm handleFormValues={handleSubmit}/>
            {listCardInfo}
            </Container>

            
        </div>
    )
}
