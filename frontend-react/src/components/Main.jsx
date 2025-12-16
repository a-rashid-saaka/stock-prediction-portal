import Button from "./Button";
import Header from "./Header";
import Footer from "./Footer";

function Main() {
  return (
    <>
      <div className="container">
        <div className="p-5 text-center bg-light-dark rounded">
          <h1 className="text-light">Stock Prediction Portal</h1>
          <p className="text-light lead">
            Stay ahead of the market with real-time insights, intelligent
            analytics, and data-driven stock predictions. Our platform helps you
            understand trends, monitor performance, and make smarter investment
            decisions with confidence.
          </p>

          <Button text="Explore Now" className="btn-info" url="/dashboard" />
        </div>
      </div>
    </>
  );
}

export default Main;
