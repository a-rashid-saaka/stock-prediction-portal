import { Link } from "react-router";

function Button({ text, className, url }) {
  return (
    <>
      <Link className={`btn ${className}`} to={url}>
        {text}
      </Link>
    </>
  );
}

export default Button;
