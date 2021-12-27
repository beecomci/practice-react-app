import { useState, useEffect } from "react";
import Title from "./Title";
import Loading from "./Loading";

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]); // 빈 배열을 초기값으로 정하지 않으면 최초에 코인 갯수를 셀 때 undefined
  const [inputPrice, setInputPrice] = useState(0);
  const [selectedCoinPrice, setSelectedCoinPrice] = useState("default");

  const onSelect = event => {
    setSelectedCoinPrice(event.target.value);
    setInputPrice(0);
  };
  const onPrice = event => {
    setInputPrice(event.target.value);
  };

  // API로부터 coins 정보를 가져오는 이 코드를 1번만 실행하겠다
  // 그때까지 loading UI 노출 (가장 처음 render 되었을 때)
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then(res => res.json())
      .then(json => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Title text={`Coin Tracker ${loading ? "" : "(" + coins.length + ")"}`} />
      <div>
        {loading ? (
          <Loading />
        ) : (
          <select onChange={onSelect}>
            <option value="default">Choose Coin</option>
            {coins.map(coin => (
              <option key={coin.id} value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
        )}
      </div>
      <label htmlFor="price">Input Price (dollar) : </label>
      <input id="price" value={inputPrice} onChange={onPrice} type="number" />
      <div>
        You can get{" "}
        {selectedCoinPrice === "default"
          ? ""
          : Number(inputPrice) / Number(selectedCoinPrice)}
      </div>
    </div>
  );
}

export default CoinTracker;
