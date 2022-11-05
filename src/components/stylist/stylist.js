const Stylist = ({ children }) => {
  if (!children) {
    return;
  }

  return <p style={{ color: "red" }}>{children.toUpperCase()}</p>;
};
export default Stylist;
