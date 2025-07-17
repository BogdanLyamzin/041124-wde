import { Form, Input, Select, Button } from "antd";

import Container from "../../shared/components/Container/Container";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";

const { TextArea } = Input;
const { Option } = Select;

const Contacts = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };
  
  return (
    <Container>
      <SectionTitle>Контакты</SectionTitle>
      <Form
        form={form}
        name="contacts-form"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{
          name: "",
          email: "",
          subject: "",
          text: "",
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="subject" label="Subject" rules={[{ required: true }]}>
          <Select placeholder="Select subject" allowClear>
            <Option value="order-problem">Order problem</Option>
            <Option value="product-question">Question about product</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>
        <Form.Item name="text" label="Text" rules={[{ required: true }]}>
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Send message
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default Contacts;
