/** @jsxImportSource @emotion/react */
import { Input, Form } from "antd";
import { User } from "../../types/user";
import { Project } from "../../types/project";
import { UserSelect } from "components/user-select";
interface SearchPanelProps {
  users: User[];
  param: Partial<Pick<Project, "name" | "personId">>;
  setParam: (param: SearchPanelProps["param"]) => void;
}

export const SearchPanel = ({ users, param, setParam }: SearchPanelProps) => {
  return (
    <Form css={{ marginBottom: "2rem" }} layout={"inline"}>
      <Form.Item>
        {/* setParam(Object.assign({ },param,{name:event.target.value})) */}
        <Input
          placeholder={"项目名"}
          type="text"
          value={param.name}
          onChange={(event) =>
            setParam({
              ...param,
              name: event.target.value,
            })
          }
        />
      </Form.Item>
      <Form.Item>
        <UserSelect
          defaultOptionName={"负责人"}
          value={param.personId}
          onChange={(value) =>
            setParam({
              ...param,
              personId: value,
            })
          }
        />
      </Form.Item>
    </Form>
  );
};
