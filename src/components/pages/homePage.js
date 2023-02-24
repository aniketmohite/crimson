import { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [apiData, setApiData] = useState([]);
  const [isApiDataLoaded, setApiDataLoaded] = useState(false);
  const [isApiDataLoading, setApiDataLoading] = useState(true);
  const [apiDataErros, setApiDataErros] = useState(null);

  const fetchApiDataHandler = async () => {
    setApiDataLoaded(false);
    setApiDataLoading(true);
    setApiDataErros(null);

    try {
      const response = await axios.get("https://dummyjson.com/products");
      setApiData(
        response.data.products === undefined ||
          response.data.products.length === 0
          ? []
          : response.data.products
      );
      setApiDataLoaded(true);
      setApiDataLoading(false);
      setApiDataErros(null);
    } catch (error) {
      setApiData([]);
      setApiDataLoaded(true);
      setApiDataLoading(false);
      setApiDataErros(error);
    }
  };

  // DEFAULT STATE
  let cardsData = <>Loading ...</>;

  // LOADING STATE
  if (isApiDataLoading) {
    cardsData = <>Loading ...</>;
  }

  // ERROR STATE
  if (apiDataErros) {
    cardsData = <>Something Went Wrong</>;
  }

  // DATA STATE
  if (isApiDataLoaded && !isApiDataLoading) {
    if (apiData.length === 0 || apiData === undefined) {
      cardsData = <>No Data Available</>;
    } else {
      cardsData = apiData.map((card, cardIndex) => (
        <div key={cardIndex} className="card">
          <div className="thumbnail">
            <img className="thumbnail_img" src={card.thumbnail} alt="img" />
          </div>
          <div className="details_wrapper">
            <div className="title">{card.title}</div>
            <div className="description">{card.description}</div>
          </div>
        </div>
      ));
    }
  }

  useEffect(() => {
    fetchApiDataHandler();
  }, []);

  return (
    <div className="section_wrapper">
      <div className="section_title_wrapper">
        <h2 className="section_title">Products</h2>
      </div>
      <div className="card_wrapper">{cardsData}</div>
    </div>
  );
};
export default HomePage;
