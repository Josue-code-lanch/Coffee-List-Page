import "../Styles/Container.css";

export default function Container() {
  const title = "Our Collection";
  const paragraph =
    "Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.";
  return (
    <div className="background">
      {/* <svg
        width="240"
        height="130"
        viewBox="0 0 257 153"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 71.8885C3.45531 57.3142 23.696 41.7169 33.6244 33.2805C66.0308 5.74397 114.381 -4.23546 155.905 5.8326C246.941 27.9052 154.103 161.746 80.308 136.587C52.5484 127.123 76.0283 89.2122 86.9341 76.2621C113.937 44.1978 164.916 27.0297 204.998 44.5915C239.889 59.8782 266.993 108.858 249.574 146.239C247.754 150.145 240.823 152.29 236.924 150.16C231.733 147.325 239.159 139.456 240.538 137.04"
          stroke="#302522"
          stroke-width="3"
          stroke-linecap="round"
        />
      </svg> */}
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
