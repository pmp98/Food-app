import Logo from "../../assets/foodvilla-removebg-preview.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Title = () => (
  <a href="/">
    <img className="h-28 p-2 " alt="logo" src={Logo} />
  </a>
);

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems: ", cartItems);
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <Title />

      <div className="flex">
        <ul className="flex py-10">
          <li className="px-2 text-xl font-bold">
            <Link to="/">Home </Link>
          </li>
          <li className="px-2 text-xl font-bold">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2 text-xl font-bold">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-2 text-xl font-bold">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-2 text-xl font-bold">
            <Link to="/cart">{cartItems.length} items</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
