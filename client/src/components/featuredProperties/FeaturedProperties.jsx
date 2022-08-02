import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css"

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");
  return (
    <div className="fp">
      <div className="fpItem">
       <img src="https://cf.bstatic.com/xdata/images/xphoto/540x405/156200800.webp?k=9eb7f14183168922cb5236c988205bb130c621c2d24cfc6b23369994c2d4e862&o=" alt="" className="fpImg" />
       <span className="fpName">Aparthotel Stare Miasto</span>
       <span className="fpCity">Madrid</span>
       <span className="fpPrice">Starting from $123</span>
       <div className="fpRating">
         <button>8.9</button>
         <span>Excellent</span>
       </div>
      </div>
      <div className="fpItem">
       <img src="https://cf.bstatic.com/xdata/images/xphoto/540x405/156200800.webp?k=9eb7f14183168922cb5236c988205bb130c621c2d24cfc6b23369994c2d4e862&o=" alt="" className="fpImg" />
       <span className="fpName">Aparthotel Stare Miasto</span>
       <span className="fpCity">Madrid</span>
       <span className="fpPrice">Starting from $123</span>
       <div className="fpRating">
         <button>8.9</button>
         <span>Excellent</span>
       </div>
      </div>
      <div className="fpItem">
       <img src="https://cf.bstatic.com/xdata/images/xphoto/540x405/156200800.webp?k=9eb7f14183168922cb5236c988205bb130c621c2d24cfc6b23369994c2d4e862&o=" alt="" className="fpImg" />
       <span className="fpName">Aparthotel Stare Miasto</span>
       <span className="fpCity">Madrid</span>
       <span className="fpPrice">Starting from $123</span>
       <div className="fpRating">
         <button>8.9</button>
         <span>Excellent</span>
       </div>
      </div>
      <div className="fpItem">
       <img src="https://cf.bstatic.com/xdata/images/xphoto/540x405/156200800.webp?k=9eb7f14183168922cb5236c988205bb130c621c2d24cfc6b23369994c2d4e862&o=" alt="" className="fpImg" />
       <span className="fpName">Aparthotel Stare Miasto</span>
       <span className="fpCity">Madrid</span>
       <span className="fpPrice">Starting from $123</span>
       <div className="fpRating">
         <button>8.9</button>
         <span>Excellent</span>
       </div>
      </div>
    </div>
    
    
  )
}

export default FeaturedProperties