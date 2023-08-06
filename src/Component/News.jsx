import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../../src/Component/News.css'

const News = () => {
    const[news,setnews]=useState([])
    useEffect(()=>{
        axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=4bffe7b197de47059200a3e19394ae93")
        .then((response)=>{
            console.log(response)
            setnews(response.data.articles)
        })
        .catch((error)=>{
            setnews(error)
            console.log(error)
        })
    },[])
  return (
    <>
     <i><h1 className='text-danger bg-warning'>News.Com</h1></i>
    <div className='container my-5'>
        <div className="row text-center">
            {
                news.map((val)=>{
                    return(
                        <>
                            
                             <div className='col my-3'>
                             <div className="card shadow-lg p-3 mb-5 bg-white rounded bg-image hover-zoom" style={{width: "18rem" ,height:'500px',margin:'0' }}>
                                <img style={{objectFit:'contain'}} src={val.urlToImage} className="card-img-top" alt="..." />
                                <div className="card-body">
                                 <h5 className="card-title">{val.title.substring(0,20)}...</h5>
                                <p className="card-text">
                                    {val.description}
                                </p>
                                </div>
                                </div>
                             </div>
                        </>
                    )
                })
            } 
        </div>
    </div>
    </>
  )
}

export default News