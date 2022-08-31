import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useAddTask } from "utils/task";
import { useProjectIdInUrl, useTasksQueryKey } from "screens/kanban/util";
import { Card, Input } from "antd";

export const CreateTask = ({ kanbanId }: { kanbanId: number }) => {
  const [name, setName] = useState("");
  const { mutateAsync: addTask } = useAddTask(useTasksQueryKey());
  const projectId = useProjectIdInUrl();
  const [inputMode, setInputMode] = useState(false);

  const submit = async () => {
    await addTask({ projectId, name, kanbanId });
    setInputMode(false);
    setName("");
  };

  const toggle = () => setInputMode((mode) => !mode);

  useEffect(() => {
    if (!inputMode) {
      setName("");
    }
  }, [inputMode]);

  if (!inputMode) {
    return <CreateTaskButton onClick={toggle}>创建任务</CreateTaskButton>;
  }

  return (
    <Card
      style={{
        marginBottom: "0.5rem",
        cursor: "pointer",
        borderRadius: "2rem",
        backgroundColor: "rgba(242, 172, 159, 0.3)",
      }}
    >
      <Input
        onBlur={toggle}
        placeholder={"需要做些什么"}
        autoFocus={true}
        onPressEnter={submit}
        value={name}
        onChange={(evt) => setName(evt.target.value)}
      />
    </Card>
  );
};

const CreateTaskButton = styled.div`
  border-radius: 1.5rem;
  background-color: rgba(242, 172, 159, 0.3);
  text-align: center;
`;
