import { Dayjs } from "dayjs";

export interface IVehicle {
  id: number;
  brand: string;
  model: string;
  price: number | null;
  km: number | null;
  year: Dayjs;
  concession: string;
}
