function SectionTitle(props) {
  const { id, children } = props;
  //   console.log(children);
  return <h2 id={id}>{children}</h2>;
}

export default SectionTitle;
