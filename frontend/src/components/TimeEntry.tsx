import { Col, DatePicker, Form, InputNumber, Row, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useEffect } from "react";
import { PROJECTS_MOCK } from "../mock/Mock";
import { TimeEntryDto } from "../model/TimeEntryDto";
import { REQUIRED_FIELD } from "../util/FormUtil";
import { ClearSaveButtons } from "./ClearSaveButtons";

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
          <Form.Item label="Date" name="date" rules={REQUIRED_FIELD}>
            <DatePicker />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item label="Duration" name="duration" rules={REQUIRED_FIELD}>
            <InputNumber suffix="h" step={1} min={0} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Project" name="project" rules={REQUIRED_FIELD}>
            <Select options={PROJECTS_MOCK} allowClear showSearch />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            label="Description"
            name="description"
            rules={REQUIRED_FIELD}
          >
            <TextArea placeholder="Description" />
          </Form.Item>
        </Col>
        <Col span={24} className="text-center">
          <ClearSaveButtons handleClear={handleClear} />
        </Col>
      </Row>
    </Form>
  );
};
