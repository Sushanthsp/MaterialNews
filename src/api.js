
// const onScroll = () =>
// {
//   const winScroll = document.documentElement.scrollTop;
//   const height = document.documentElement.scrollHeight - document.documentElement.elementHeight;
//   const scrolled = (winScroll / height) * 100 
//   setScroll(scrolled)
// }

// useEffect(() => {
//   window.addEventListener("scroll", onScroll);

//   return () => window.removeEventListener("scroll", onScroll)
// }, []);
  

fetch('https://api.newscatcherapi.com/v2/search?q=India', {
    method: 'GET',
    headers: {
        'x-api-key': '6qtrPvTieVCrRVr_62zMz5qqPSDfGsCfDY6VrM4kEhc',
    }
})