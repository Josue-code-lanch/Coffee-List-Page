import Star from "./Star";
import StarFill from "./StarFill";
import "../Styles/CoffeeMenu.css";

export default function CoffeMenu() {
  const pop = "Popular";
  return (
    <>
      <div className="row">
        <Card
          popular={pop}
          img={"./src/assets/images/coffee1.jpg"}
          coffee={"Cappuccino"}
          price={"$5.20"}
          votes={"4.7 (65 votes)"}
        />
        <Card
          popular={pop}
          img={"./src/assets/images/coffee2.jpg"}
          coffee={"Hosue Coffee"}
          price={"$3.50"}
          votes={"4.85 (14 votes)"}
        />
        <Card
          img={"./src/assets/images/coffee3.jpg"}
          coffee={"Espresso"}
          price={"$2.50"}
          votes={"4.9 (55 votes)"}
        />
      </div>
      <div className="row">
        <Card
          img={"./src/assets/images/coffee4.jpg"}
          coffee={"Coffee Latte"}
          price={"$4.50"}
          votes={"5.0 (23 votes)"}
        />
        <Card
          img={"./src/assets/images/coffee5.jpg"}
          coffee={"Chocolate Coffee"}
          price={"$4.00"}
          votes={"4.65 (122 votes)"}
          soldOut={"Sold Out"}
        />
        <CardEnd
          img={"./src/assets/images/coffee6.jpg"}
          coffee={"Valentine Special"}
          price={"$5.50"}
          votes={"No ratings"}
        />
      </div>
    </>
  );
}

function Card({ img, coffee, price, votes, soldOut }) {
  return (
    <div className="card">
      <img src={img} alt={coffee}></img>
      <div className="content">
        <div className="details">
          <p className="coffee">{coffee}</p>
          <div className="vots">
            <Star />
            <p className="vote">{votes}</p>
          </div>
        </div>
        <div className="votes">
          <p className="price">{price}</p>
          <p className="soldOut">{soldOut}</p>
        </div>
      </div>
    </div>
  );
}

function CardEnd({ img, coffee, price, votes }) {
  return (
    <>
      <div className="card">
        <img src={img} alt={coffee}></img>
        <div className="content">
          <div className="details">
            <p className="coffee">{coffee}</p>
            <div className="vots">
              <StarFill />
              <p className="vote">{votes}</p>
            </div>
          </div>
          <div className="votes">
            <p className="price">{price}</p>
          </div>
        </div>
      </div>
    </>
  );
}
