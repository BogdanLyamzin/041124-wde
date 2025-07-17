import { Typography, Divider } from "antd";

const { Title } = Typography;

const SectionTitle = ({ children }) => {
  return (
    <>
      <Title level={3}>{children}</Title>
      <Divider />
    </>
  );
};

export default SectionTitle;
