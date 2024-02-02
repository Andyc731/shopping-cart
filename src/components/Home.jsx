import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex justify-center items-center flex-col">
      <h2>Home</h2>
      <Link
        to={"/products"}
        className="w-36 bg-blue-300 rounded-full h-10 flex justify-center items-center font-bold"
      >
        Shop Now
      </Link>
    </div>
  );
}

export default Home;
