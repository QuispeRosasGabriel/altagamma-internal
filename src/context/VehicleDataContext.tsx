import { createContext, ReactNode, useEffect, useState } from "react";
import { IVehicle } from "../common";

const defaultValue: {
  carsData: IVehicle[];
  setCarsData: (v: IVehicle[]) => void;
} = {
  carsData: [],
  setCarsData: () => {},
};

export const VehicleDataContext = createContext(defaultValue);

export const VehicleDataProvider = ({ children }: { children: ReactNode }) => {
  // const dataFromStorage = localStorage.getItem("CARS_LIST") ?? "{}";
  const [carsData, setCarsData] = useState<Array<IVehicle>>([]);

  return (
    <VehicleDataContext.Provider
      value={{
        carsData,
        setCarsData,
      }}
    >
      {children}
    </VehicleDataContext.Provider>
  );
};
