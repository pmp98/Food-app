import { Link } from "react-router-dom";


const Footer = () => {
  return <div className="bg-pink-50 p-5 mt-4">
    	<p>© 2023 foodvilla</p>
	<p>
    <div className="flex flex-col pt-5">
		<Link to="/about">About</Link>
		<Link to="">Privacy Policy</Link>
		<Link to="/contact">Contact us</Link>
    </div>
	</p>
  </div>;
};

export default Footer;
