import { Button, Col, DatePicker, Form, InputNumber, Row, Select } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import TextArea from "antd/es/input/TextArea";
import { PROJECTS_MOCK } from "../mock/Mock";
import { TimeEntryDto } from "../model/TimeEntryDto";
import { useEffect } from "react";

interface Props {
  toEdit?: TimeEntryDto;
  addEntry: (entry: TimeEntryDto) => void;
  updateEntry: (entry: TimeEntryDto) => void;
  clearToEdit: () => void;
}

export const TimeEntry = ({
  toEdit,
  addEntry,
  clearToEdit,
  updateEntry,
}: Props) => {
  const [form] = Form.useForm();

  const onFinish = () => {
    const values = form.getFieldsValue();

    if (toEdit) {
      updateEntry({ ...values, id: toEdit.id });
    } else {
      addEntry(values);
    }

    form.resetFields();
    clearToEdit();
  };

  const handleClear = () => {
    form.resetFields();
    clearToEdit();
  };

  useEffect(() => {
    if (toEdit) {
      form.setFieldsValue({
        date: toEdit.date,
        duration: toEdit.duration,
        project: toEdit.project,
        description: toEdit.description,
      });
    }
  }, [toEdit]);

  return (
    <Form layout="vertical" form={form} onFinish={onFinish}>
      <Row gutter={8}>
        <Col span={8}>
          <Form.Item
            label="Date"
            name="date"
            rules={[{ required: true, message: "Required field" }]}
          >
            <DatePicker />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            label="Duration"
            name="duration"
            rules={[{ required: true, message: "Required field" }]}
          >
            <InputNumber suffix="h" step={1} min={0} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Project"
            name="project"
            rules={[{ required: true, message: "Required field" }]}
          >
            <Select options={PROJECTS_MOCK} allowClear showSearch />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Required field" }]}
          >
            <TextArea placeholder="Description" />
          </Form.Item>
        </Col>
        <Col span={24} className="text-center">
          <ButtonGroup>
            <Button variant="solid" onClick={handleClear}>
              Clear
            </Button>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Form>
  );
};
