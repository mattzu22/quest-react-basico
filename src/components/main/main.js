import Stylist from "../stylist/stylist";
import "./main.css";

const Main = () => {
  return (
    <div className="main">
       <Stylist>
            Componente que mudar a cor e fonte do texto 
        </Stylist>
    </div>
  );
};

export default Main;





// let coral = false;
// let color = 'blue';
// let normal = false;
// let uppercase = 'uppercase'
// const changer = () => {
//   coral = !coral;
//   color = coral ? "coral" : "blue";
//   normal = !normal
//   uppercase = normal ? 'normal' : 'uppercase'
//   console.log(color);
// };

// console.log(color);
