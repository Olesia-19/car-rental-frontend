import { nextServer } from "./api";

export const getCars = async (params: {
  page: number;
  brand?: string;
  rentalPrice?: string;
  minMileage?: string;
  maxMileage?: string;
  limit?: string;
}) => {
  const res = await nextServer.get("/cars", { params });
  return res.data;
};

// export const getCarById = async (id: string) => {
//   console.log("Fetching car with id:", id);
//   const res = await fetch(`https://car-rental-api.goit.global/cars/${id}`);
//   const data = await res.json();
//   console.log(data);
// };

export const getBrands = async () => {
  const res = await nextServer.get("/brands");
  return res.data;
};
