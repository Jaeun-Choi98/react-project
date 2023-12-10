import './Book.css';
import { useEffect, useState } from 'react';

function Book(props) {
  return (
    <div className='book-content'>
      <div className='products'>
        <div className='product'>
          <img src={props.img} alt={props.imgalt} />
          <div className='product-details'>
            <h3>{props.productname}</h3>
            <p>{props.desc}</p>
            <p>{props.price}</p>
            <button>
              <a href={props.url}>구매하러가기</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BookContainer(props) {
  const [products, setProducts] = useState([]);
  let items = products.map((product) => <Book key={product.id} {...product} />);
  useEffect(() => {
    fetch(props.location)
      .then((res) => res.json())
      .then((result) => {
        setProducts(result);
      });
  }, []);
  return <div>{items}</div>;
}
