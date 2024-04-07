import { Dayjs } from "dayjs";

export interface IVehicle {
  brand?: string;
  model?: string;
  price?: string;
  km?: string;
  year?: Dayjs;
  concession?: string;
}
