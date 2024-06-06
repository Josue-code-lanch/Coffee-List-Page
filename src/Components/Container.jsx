import "../Styles/Container.css";

export default function Container() {
  const title = "Our Collection";
  const paragraph =
    "Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.";
  return (
    <div className="background">
      <Text title={title} paragraph={paragraph} />
      <div className="buttons">
        <Button styleType="button1">All Products</Button>
        <Button styleType="button2">Available Now</Button>
      </div>
    </div>
  );
}

function Text({ title, paragraph }) {
  return (
    <div className="text">
      <h2>{title}</h2>
      <p>{paragraph}</p>
    </div>
  );
}

function Button({ styleType, children }) {
  return (
    <div>
      <a
        className={`button ${styleType}`}
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </div>
  );
}
