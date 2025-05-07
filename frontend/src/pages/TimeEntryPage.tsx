import { Col, Row } from "antd";
import { useState } from "react";
import { Charts } from "../components/Charts";
import { EntriesList } from "../components/EntriesList";
import { TimeEntry } from "../components/TimeEntry";
import { ENTRIES_MOCK } from "../mock/Mock";
import { TimeEntryDto } from "../model/TimeEntryDto";

import { TopMenu } from "../components/TopMenu";

export const TimeEntryPage = () => {
  const [entries, setEntries] = useState<TimeEntryDto[]>(ENTRIES_MOCK);
  const [toEdit, setToEdit] = useState<TimeEntryDto>();

  return (
    <div>
      <TopMenu />

      <Row gutter={8} className="p-4">
        <Col span={24} md={12}>
          <TimeEntry
            toEdit={toEdit}
            clearToEdit={() => setToEdit(undefined)}
            updateEntry={(entry: TimeEntryDto) => {
              setEntries((prev) =>
                prev.map((e) => (e.id === entry.id ? entry : e))
              );
              setToEdit(undefined);
            }}
            addEntry={(entry: TimeEntryDto) => {
              setEntries((prev) => [
                ...prev,
                {
                  ...entry,
                  // Unique ID for each entry
                  id: prev.length > 0 ? (prev[prev.length - 1].id || 0) + 1 : 1,
                },
              ]);
            }}
          />
        </Col>
        <Col span={24} md={12} className="text-center">
          <Charts entries={entries} />
        </Col>
        <Col span={24} md={12}>
          <EntriesList
            entries={entries.filter((entry) => entry.id !== toEdit?.id)}
            setToEdit={setToEdit}
            onRemove={(timeEntry) => {
              setEntries((prev) =>
                prev.filter((entry) => entry.id !== timeEntry)
              );
            }}
          />
        </Col>
      </Row>
    </div>
  );
};
