import './buttonalert.css'

const Alert = ({label}) => {
  return <button className="btn" onClick={()=>{alert(`A label desse botão é ${label}`)}}>Alert</button>;
};

export default Alert;
