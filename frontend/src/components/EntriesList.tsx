import { Button, Popconfirm, Table } from "antd";
import { TimeEntryDto } from "../model/TimeEntryDto";
import Paragraph from "antd/es/typography/Paragraph";
import ButtonGroup from "antd/es/button/button-group";
import { FaEdit, FaTrash } from "react-icons/fa";

interface Props {
  entries: TimeEntryDto[];
  onRemove: (id?: number) => void;
  setToEdit: (entry: TimeEntryDto) => void;
}

export const EntriesList = ({ entries, onRemove, setToEdit }: Props) => {
  const columns = [
    {
      title: "Project",
      dataIndex: "project",
    },
    {
      title: "Duration",
      dataIndex: "duration",
    },
    {
      title: "Description",
      dataIndex: "description",
      render: (text: string) => (
        <Paragraph ellipsis={{ rows: 2, expandable: true }}>{text}</Paragraph>
      ),
    },
    {
      render: (timeEntry: TimeEntryDto) => (
        <ButtonGroup>
          <Popconfirm
            title="Are you sure to delete this entry?"
            onConfirm={() => {
              onRemove(timeEntry.id);
            }}
          >
            <Button icon={<FaTrash />}></Button>
          </Popconfirm>
          <Button
            icon={<FaEdit />}
            onClick={() => {
              setToEdit(timeEntry);
            }}
          />
        </ButtonGroup>
      ),
    },
  ];

  if (!entries.length) {
    return null;
  }

  return (
    <Table
      className="mt-4"
      columns={columns}
      dataSource={entries}
      pagination={false}
      rowKey="id"
    />
  );
};
