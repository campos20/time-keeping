import dayjs from "dayjs";

export const PROJECTS_MOCK = [
  {
    label: "Nightwatch",
    value: "Nightwatch",
  },
  {
    label: "Project 2",
    value: "Project 2",
  },
  {
    label: "Lorem",
    value: "Lorem",
  },
  {
    label: "Ipsum",
    value: "Ipsum",
  },
  {
    label: "Dolor",
    value: "Dolor",
  },
  {
    label: "Sit",
    value: "Sit",
  },
  {
    label: "Amet",
    value: "Amet",
  },
  {
    label: "Consectetur",
    value: "Consectetur",
  },
  {
    label: "Adipiscing",
    value: "Adipiscing",
  },
];

export const ENTRIES_MOCK = [
  {
    id: 1,
    date: dayjs(),
    duration: 2,
    project: "Nightwatch",
    description: "Worked on feature X",
  },
  {
    id: 2,
    date: dayjs(),
    duration: 3,
    project: "Project 2",
    description: "Fixed bug Y",
  },
];
