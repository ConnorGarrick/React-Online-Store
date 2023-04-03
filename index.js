import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

function StorePage() {
  const [products, setProducts] = useState([
    {
      id: 1,
      img: 'https://images.asos-media.com/products/quiksilver-shadow-groove-t-shirt-in-white/203324479-1-white?$n_640w$&wid=513&fit=constrain',
      freeShip: true,
      name: 'Cropped Stay Groovy Off White',
      price: 10.9,
      deal: 9,
      size: 'L',
      quantity: 1,
    },
    {
      id: 2,
      img: 'https://littlenation.com.au/wp-content/uploads/2021/02/Cactus-Off-White-Tshirt-for-boys.jpg',
      freeShip: true,
      name: 'Basic Cactus White T-shirt',
      price: 13.25,
      deal: 3,
      size: 'ML',
      quantity: 1,
    },
    {
      id: 3,
      img: 'https://img.skatewarehouse.com/watermark/rs.php?path=SCCDHS-BK-1.jpg&nw=270',
      freeShip: false,
      name: 'Skater Black Sweatshirt',
      price: 25.9,
      deal: 12,
      size: 'XL',
      quantity: 1,
    },
    {
      id: 4,
      img: 'https://res.cloudinary.com/wolfandbadger/image/upload/f_auto,q_auto:best,c_pad,h_800,w_800/products/zhhcsqtqzzgk7cc1zh0l',
      freeShip: true,
      name: 'Black Tule Oversized',
      price: 29.45,
      deal: 5,
      size: 'M',
      quantity: 1,
    },
    {
      id: 5,
      img: 'https://cdn.shopify.com/s/files/1/0024/9803/5810/products/477251-Product-0-I-637810754174169560_903x.jpg?v=1645439084',
      freeShip: true,
      name: 'Black Batman T-shirt',
      price: 10.9,
      deal: 9,
      size: 'XS',
      quantity: 1,
    },
    {
      id: 6,
      img: 'https://m.media-amazon.com/images/I/51T1rKmwhGL._AC_UF1000,1000_QL80_.jpg',
      freeShip: true,
      name: 'Blue T-Shirt',
      price: 9.0,
      deal: 3,
      size: 'L',
      quantity: 1,
    },
    {
      id: 7,
      img: 'https://travelfashiongirlpostphotos.s3.us-east-2.amazonaws.com/2022/Best+Black+T-Shirts/best-black-t-shirt-womens-15.1.jpeg',
      freeShip: true,
      name: 'Loose Black T-shirt',
      price: 14.0,
      deal: 5,
      size: 'XXL',
      quantity: 1,
    },
    {
      id: 8,
      img: 'https://media.finishline.com/s/finishline/VN0A5LCG_YO7?$Main$&hei=453&wid=453',
      freeShip: true,
      name: 'Ringer Hall Pass',
      price: 10.9,
      deal: 9,
      size: 'XL',
      quantity: 1,
    },
    {
      id: 9,
      img: 'https://littlenation.com.au/wp-content/uploads/2021/02/Plain-Grey-tshirt-for-boys.jpg',
      freeShip: true,
      name: 'Grey T-shirt',
      price: 14.9,
      deal: 7,
      size: 'L',
      quantity: 1,
    },
    {
      id: 10,
      img: 'https://img.ltwebstatic.com/images3_pi/2020/05/07/158883849921561561f6cbe0805d57910b35e0df60_thumbnail_900x.webp',
      freeShip: true,
      name: 'Black T-shirt with White Stripes',
      price: 14.9,
      deal: 7,
      size: 'L',
      quantity: 1,
    },
    {
      id: 11,
      img: 'https://c49d16a6c82563251344-1ab5a5b00ecdd96a368a8d8d17482920.ssl.cf2.rackcdn.com/images/TS_Mens_Classic_Turtles_Green_T_Shirt_19_99_Flat_1.jpg',
      freeShip: false,
      name: 'Turtles Ninja T-shirt',
      price: 10.9,
      deal: 9,
      size: 'L',
      quantity: 1,
    },
    {
      id: 12,
      img: 'https://i8.amplience.net/i/orlebarbrown/ORLEBAR-BROWN-OB-T-BLACK_259492_FRONT/Ob-T?$zoom$&qlt=70&fmt=auto&strip=true',
      freeShip: true,
      name: 'Slim Black T-shirt',
      price: 49.9,
      deal: 0,
      size: 'XXL',
      quantity: 1,
    },
    {
      id: 13,
      img: 'https://img.ltwebstatic.com/images3_pi/2021/07/30/162761266709caf919495529111bd3e2c7c20491af_thumbnail_900x.webp',
      freeShip: true,
      name: 'Blue Sweatshirt',
      price: 22.5,
      deal: 4,
      size: 'S',
      quantity: 1,
    },
    {
      id: 14,
      img: 'https://d3vfig6e0r0snz.cloudfront.net/rcYjnYuenaTH5vyDF/images/products/0134eff44c5bff84afd7e7ce969f7e38.webp',
      freeShip: false,
      name: 'White T-shirt Gucci',
      price: 18.7,
      deal: 4,
      size: 'XL',
      quantity: 1,
    },
    {
      id: 15,
      img: 'https://litb-cgis.rightinthebox.com/images/640x640/202302/bps/product/inc/sroszz1675421487351.jpg',
      freeShip: true,
      name: 'Tropical Wine T-shirt',
      price: 134.9,
      deal: 5,
      size: 'L',
      quantity: 1,
    },
    {
      id: 16,
      img: 'https://cdn11.bigcommerce.com/s-rxzabllq/images/stencil/1280x1280/products/214/7241/premium_plain_tshirt_cotton_ROYAL_BLUE__25811.1619654847.jpg?c=2',
      freeShip: true,
      name: 'Marine Blue T-shirt',
      price: 49.0,
      deal: 9,
      size: 'XL',
      quantity: 1,
    },
  ]);
  const [sizeFilter, setSizeFilter] = useState([
    { id: 1, name: 'XS', selected: false },
    { id: 2, name: 'S', selected: false },
    { id: 3, name: 'M', selected: false },
    { id: 4, name: 'ML', selected: false },
    { id: 5, name: 'L', selected: false },
    { id: 6, name: 'XL', selected: false },
    { id: 7, name: 'XXL', selected: false },
  ]);
  const [savedList, setSavedList] = useState([]);
  const [cart, setCart] = useState([]);
  const [emptyCart, setEmptyCart] = useState('Add some products in the cart');
  const [totalPrice, setTotalPrice] = useState(0.0);
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    setSavedList(products);
  }, []);

  useEffect(() => {
    if (products.length == 0) {
      setProducts(savedList);
    }
  }, [products]);

  useEffect(() => {
    if (cart.length == 0) {
      setEmptyCart('Add some products in the cart');
    } else {
      setEmptyCart('');
    }
  }, [cart]);

  const handleFilter = (event) => {
    let p = 0;
    while (p < sizeFilter.length) {
      if (sizeFilter[p].name == event.target.value) {
        sizeFilter[p].selected = !sizeFilter[p].selected;
      }
      p++;
    }

    let tempFilter = [];
    let h = 0;
    while (h < sizeFilter.length) {
      let y = 0;
      if (sizeFilter[h].selected) {
        while (y < savedList.length) {
          if (savedList[y].size == sizeFilter[h].name) {
            tempFilter.push(savedList[y]);
          }
          y++;
        }
      }
      h++;
    }
    setProducts(tempFilter);
  };

  const handleCart = (event) => {
    document.getElementById('mySidebar').style.width = '450px';
    setTotalProducts(totalProducts + 1);
    let found = false;
    let i = 0;
    let m = 0;
    while (i < savedList.length) {
      if (event.target.value == savedList[i].id) {
        while (m < cart.length) {
          if (cart[m].id == savedList[i].id) {
            cart[m].quantity = cart[m].quantity + 1;
            found = true;
          }
          m++;
        }
        if (!found) {
          setCart([...cart, savedList[i]]);
        }
        setTotalPrice(totalPrice + savedList[i].price);
      }
      i++;
    }
  };

  const handleCheckout = () => {
    if (cart.length > 0) {
      alert(totalProducts + ' items for $' + totalPrice.toFixed(2));
    } else {
      alert('No items in cart!');
    }
  };

  const deleteProd = (event) => {
    let tempFilter = [];
    let k = 0;
    while (k < cart.length) {
      if (cart[k].id != event.target.value) {
        tempFilter.push(cart[k]);
      } else {
        setTotalPrice(-(cart[k].quantity * cart[k].price - totalPrice));
        setTotalProducts(totalProducts - cart[k].quantity);
        cart[k].quantity = 1;
      }
      k++;
    }
    setCart(tempFilter);
  };

  function CheckDeal(props) {
    const item = props.value;
    let dealPrice = (item.price / item.deal).toFixed(2);
    if (item.deal <= 0) {
      return <br />;
    } else {
      return (
        <p class="productInfo" id="dealInfo">
          or {item.deal} for ${dealPrice}
        </p>
      );
    }
  }

  function CheckShip(props) {
    const item = props.value;
    if (item.freeShip == true) {
      return <div class="freeShipping">Free Shipping</div>;
    } else {
      return <p />;
    }
  }

  function openNav() {
    document.getElementById('mySidebar').style.width = '450px';
  }

  function closeNav() {
    document.getElementById('mySidebar').style.width = '0';
  }

  return (
    <>
      <form id="webPage">
        <div class="cartButton">
          <button onClick={openNav} type="button">
            <img src="https://www.citypng.com/public/uploads/small/11640441682j3enmxsqxkzywbh2ojg3uwslf0sm18kpkejhygv7av0ifhqjuf9sk9elom7rk4xg9xykmobez6kfzpf7k2tpkc9tf9sdg6zbhgoq.png" />
            <p class="cartSize">{totalProducts}</p>
          </button>
        </div>

        <div id="mySidebar" class="sidebar">
          <div class="cartDisplay">
            <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>
              ×
            </a>
            <h1>
              <img src="https://www.citypng.com/public/uploads/small/11640441682j3enmxsqxkzywbh2ojg3uwslf0sm18kpkejhygv7av0ifhqjuf9sk9elom7rk4xg9xykmobez6kfzpf7k2tpkc9tf9sdg6zbhgoq.png" />
              CART
            </h1>

            <div class="mapCart">
              {cart.map((item, index) => {
                return (
                  <div class="cart" key={item.id}>
                    <div class="itemBreak"></div>
                    <div>
                      <img src={item.img} />
                    </div>
                    <div class="cartName">
                      <p>{item.name}</p>
                    </div>
                    <div class="deletebtn">
                      <button
                        value={item.id}
                        type="button"
                        onClick={deleteProd}
                      >
                        X
                      </button>
                    </div>
                    <div class="cartInfo">
                      <p>
                        {item.size} | Quantity: {item.quantity}
                      </p>
                    </div>
                    <div class="price">
                      <p>${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <p>{emptyCart}</p>
          </div>
          <div class="checkoutPage">
            <div class="subtotal">
              <p>SUBTOTAL</p>
            </div>
            <div class="subTotalNum">
              <p>${totalPrice.toFixed(2)}</p>
            </div>
            <button
              class="checkoutButton"
              type="button"
              onClick={handleCheckout}
            >
              CHECKOUT
            </button>
          </div>
        </div>

        <div class="filterButtons">
          <p>Sizes:</p>
          {sizeFilter.map((item, index) => {
            return (
              <button
                value={item.name}
                class={item.selected ? 'filterSelected' : 'notSelected'}
                onClick={handleFilter}
                type="button"
              >
                {item.name}
              </button>
            );
          })}
        </div>

        <div class="mapProducts">
          <p>{products.length} Product(s) found</p>
          {products.map((item, index) => {
            return (
              <div class="products" key={item.id}>
                <div class="imageContainer">
                  <img src={item.img} />
                  <CheckShip value={item} />
                </div>
                <div class="productNameBox">
                  <p class="productInfo">{item.name}</p>
                </div>
                <p class="nameDiv">____</p>
                <p class="productInfo">${item.price.toFixed(2)}</p>
                <div class="dealInfo">
                  <CheckDeal value={item} />
                </div>
                <button
                  class="addProduct"
                  value={item.id}
                  onClick={handleCart}
                  type="button"
                >
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      </form>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StorePage />);
