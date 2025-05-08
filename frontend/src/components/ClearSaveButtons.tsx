import { Button } from "antd";
import ButtonGroup from "antd/es/button/button-group";

interface Props {
  handleClear: () => void;
}

export const ClearSaveButtons = ({ handleClear }: Props) => {
  return (
    <ButtonGroup>
      <Button variant="solid" onClick={handleClear}>
        Clear
      </Button>
      <Button type="primary" htmlType="submit">
        Save
      </Button>
    </ButtonGroup>
  );
};
