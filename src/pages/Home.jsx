import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../utils/requests";

const Home = () => {
  return (
    <>
      <Main />
      <Row rowId="1" title="Upcoming" fetchURL={requests.requestUpcoming} />
      <Row rowId="2" title="Trending" fetchURL={requests.requestTrending} />
      <Row rowId="3" title="Top rated" fetchURL={requests.requestTopRated} />
      <Row rowId="4" title="Horror" fetchURL={requests.requestHorror} />
      <Row rowId="5" title="Popular" fetchURL={requests.requestPopular} />
    </>
  );
};

export default Home;
