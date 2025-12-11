function Button({ text, className }) {
  return (
    <>
      <a className={`btn ${className}`} href="">
        {text}
      </a>
    </>
  );
}

export default Button;
