import { nextServer } from "./api";
import { Car } from "@/types/car";

export const getCarById = async (id: string) => {
  console.log("Fetching car with id:", id);
  const res = await nextServer.get<Car>(
    `https://car-rental-api.goit.global/cars/${id}`
  );
  return res.data;
};

// export const getCarById = async (id: string): Promise<Car> => {
//   const res = await nextServer.get<Car>(`/cars/${id}`);
//   return res.data;
// };
