import { Dayjs } from "dayjs";

export interface IVehicle {
  brand?: string;
  model?: string;
  price?: number;
  km?: string;
  year?: Dayjs;
  concession?: string;
}
