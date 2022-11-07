const Stylist = ({ children }) => {
  if (!children) {
    return;
  }

  return <span style={{ color: "red" }}>{children.toUpperCase()}</span>;
};
export default Stylist;
