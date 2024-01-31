import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="grid grid-cols-5 p-10 gap-10 bg-black text-white">
      <aside className="col-span-2">
        <div>logo</div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, cumque
          pariatur! Incidunt, ducimus molestiae. Aperiam blanditiis nisi,
          repellat dolorum, assumenda iste aut nihil sint nulla vel nemo magnam!
          Dolorum, laboriosam.
        </p>
        <a href="">facebook</a>
        <a href="">instagram</a>
        <a href="">github</a>
      </aside>
      <ul>
        <li>
          <h3>Products</h3>
        </li>
        <li>
          <Link>product1</Link>
        </li>
        <li>
          <Link>product2</Link>
        </li>
        <li>
          <Link>product3</Link>
        </li>
        <li>
          <Link>product4</Link>
        </li>
        <li>
          <Link>product5</Link>
        </li>
      </ul>

      <ul>
        <li>
          <h3>Help</h3>
        </li>
        <li>
          <Link>About us</Link>
        </li>
        <li>
          <Link>FAQ</Link>
        </li>
        <li>
          <Link>Privacy Policy</Link>
        </li>
        <li>
          <Link>Payment Policy</Link>
        </li>
      </ul>
      <ul>
        <li>
          <h3>Contact</h3>
        </li>
        <li>andychc731@gmail.com</li>
        <li>123-123-1234</li>
      </ul>
    </footer>
  );
}

export default Footer;
