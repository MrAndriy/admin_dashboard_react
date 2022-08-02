import useFetch from "../../hooks/useFetch";
import "./featured.css"

const Featured = () => {

  const {data, loading, error } = useFetch("/hotels/countByCity?cities=Lviv,Rivne,Kyiv")
  return (
    <div className="featured">
      {loading ? (
        "Loadind please wait"
        ) : 
        <>
        <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/square250/653082.webp?k=c161c185c16c0402f72a69272e3757ffa3b45f5a28accb4c07a2c989625132cf&o=" alt="" className="featuredImg"/>
        <div className="featuredTitles">
          <h1>Lviv</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/square250/972536.webp?k=fc90a871db0baae4bd8b649d9624809eaceee5f4ef218f09d158c8fe8d6d6abe&o=" alt="" className="featuredImg"/>
        <div className="featuredTitles">
          <h1>Rivne</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/square250/653109.jpg?k=39834303d6af8adc39cc8218ea8efc5291a013bd3228d53a50cb836833f4777f&o=" alt="" className="featuredImg"/>
        <div className="featuredTitles">
          <h1>Kyiv</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div></>}
    </div>
  );
};

export default Featured