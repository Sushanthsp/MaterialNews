import React, { useState, useEffect } from "react";
import MediaCard from "./Card";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Circular from "./Progressbar.js"
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const articles = [];
  const [news, setNews] = useState(articles);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  const process =  async () => {
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&page=${page + 1}&category=${props.category}&pageSize=${props.pageSize}&apiKey=${props.api}`;
    let data = await fetch(url);
    let fetchData = await data.json();
    setNews(fetchData.articles);
   
    setPage(page + 1);
    setLoading(false);
    setTotalResults(fetchData.totalResults);
  }

  // const fetchMoreData = async () => {
  //   setLoading(false);
  //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&page=${page + 1}&category=${props.category}&pageSize=${props.pageSize}&apiKey=${props.api}`;
  //   let data = await fetch(url);
  //   let fetchData = await data.json();
  //   setNews(news.concat(fetchData.articles));
  //   setPage(page + 1);
  //   setLoading(false);
  //   setTotalResults(fetchData.totalResults);
  // }


  useEffect(() => {
    process();
  }, [] );

  return ( 
    <>
       
       { loading && <Circular/>} 
      <Container sx={{ marginTop: "2rem" }}>
       <Typography component="div" variant="h4" textAlign={"center"}>
        Top Headlines of the day - {props.category}
        </Typography>
        {/* <InfiniteScroll
          dataLength={news.length}
          next={fetchMoreData}
          hasMore={news.length !== totalResults}
          loader={!loading && <Circular />}
        > */}
      <Grid container spacing={3}>
        {  news.map((art, key) => (
          <MediaCard
            sourceName={ art.source.name ? art.source.name : "Unknown"}
            sourcelogo= {art.urlToImage ?art.urlToImage :"https://img.etimg.com/thumb/msid-89389648,width-1070,height-580,imgsize-45296,overlay-economictimes/photo.jpg"}
              key={key}
              alt=""
              img={ art.urlToImage ? art.urlToImage :"https://img.etimg.com/thumb/msid-89389648,width-1070,height-580,imgsize-45296,overlay-economictimes/photo.jpg"}
              headline={art.title}
              content={art.description}
              learnMore={art.url}
              author={art.source.name ? art.source.name : "Unknown"}
              publishedAt={art.publishedAt}
            />
          ))  
        }
          </Grid>
          {/* </InfiniteScroll> */}
      </Container>    
      </>
  );
};

export default News;
