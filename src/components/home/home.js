import Stylist from "../stylist/stylist";
import "./home.css";
import Alert from "../buttonAlert/buttonalert";

const Home = () => {
  return (
    <div className="main">
      <p>
        Componente que mudar a <Stylist>cor</Stylist> e <Stylist>fonte</Stylist>
      </p>

      <Alert label="Baixar CV" />
    </div>
  );
};

export default Home;

