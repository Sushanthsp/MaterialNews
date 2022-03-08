import React, { useState, useEffect } from "react";
import MediaCard from "./Card";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Circular from "./Progressbar.js";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const articles = [];
  const [news, setNews] = useState(articles);
  const [page, setPage] = useState(0);
  const [firstLoading, setFirstLoading] = useState(false)
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  
  const process = async () => {
    props.progress(0)
    setFirstLoading(true);
    props.progress(20)
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&page=${page + 1}&category=${props.category}&pageSize=${
      props.pageSize
      }&apiKey=${props.api}`;
      props.progress(30)
    let data = await fetch(url);
    props.progress(40)
    let fetchData = await data.json();
    props.progress(50)
    setNews(fetchData.articles);
    setTotalResults(fetchData.totalResults);
    props.progress(60)
    setPage(page + 1);
    props.progress(75)
    setFirstLoading(false);
    props.progress(100)
  };

  const fetchMoreData = async () => {
     setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&page=${page + 1}&category=${props.category}&pageSize=${
      props.pageSize
    }&apiKey=${props.api}`;
    let data = await fetch(url);
    let fetchData = await data.json();
    setNews(news.concat(fetchData.articles));
    setPage(page + 1);
    
    setTotalResults(fetchData.totalResults);
    setLoading(false);
  };

  useEffect(() => {
    process();
  }, []); // eslint-disable-line

  return (
    <>
       <Container >
        {!firstLoading && <Typography component="div" variant="h4" textAlign={"center"}>
          Top Headlines of the day - {props.category}
        </Typography>}
        {firstLoading && <Circular/>}
        <InfiniteScroll
          dataLength={news.length}
          next={fetchMoreData}
          hasMore={news.length !== totalResults}
          loader={loading && <Circular />}
        >
          <Grid container spacing={3} sx={{"display" : "flex" , "justifyContent" : "center"}}>
            {news.map((art) => (
              <MediaCard theme={props.theme}
                sourceName={art.source.name ? art.source.name : "Unknown"}
                sourcelogo={
                  art.urlToImage
                    ? art.urlToImage
                    : "https://img.etimg.com/thumb/msid-89389648,width-1070,height-580,imgsize-45296,overlay-economictimes/photo.jpg"
                }
                key={art.url}
                alt=""
                img={
                  art.urlToImage
                    ? art.urlToImage
                    : "https://img.etimg.com/thumb/msid-89389648,width-1070,height-580,imgsize-45296,overlay-economictimes/photo.jpg"
                }
                headline={art.title}
                content={art.description}
                learnMore={art.url}
                author={art.source.name ? art.source.name : "Unknown"}
                publishedAt={art.publishedAt}
              />
            ))}
          </Grid>
        </InfiniteScroll>
        </Container>
    </>
  );
};

export default News;
