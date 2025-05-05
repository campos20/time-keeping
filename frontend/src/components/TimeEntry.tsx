import { Button, Form, Input, InputNumber } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import TextArea from "antd/es/input/TextArea";

export const TimeEntry = () => {
  const [form] = Form.useForm();
  return (
    <Form layout="vertical" form={form}>
      <Form.Item label="Duration" name="duration">
        <InputNumber />
      </Form.Item>
      <Form.Item
        label="Start Time"
        name="description"
        rules={[{ required: true, message: "Please enter a start time" }]}
      >
        <TextArea placeholder="Description" />
      </Form.Item>
      <ButtonGroup>
        <Button>Clear</Button>
        <Button type="primary">Save</Button>
      </ButtonGroup>
    </Form>
  );
};
