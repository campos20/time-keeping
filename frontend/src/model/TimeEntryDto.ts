import dayjs from "dayjs";

export interface TimeEntryDto {
  id?: number;
  date: dayjs.Dayjs;
  duration: number;
  project: string;
  description: string;
}
