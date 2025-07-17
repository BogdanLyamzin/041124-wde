import { Heading, Divider } from "rsuite";

const SectionTitle = ({ children }) => {
  return (
    <>
      <Heading>{children}</Heading>
      <Divider />
    </>
  );
};

export default SectionTitle;
