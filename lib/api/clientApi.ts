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
//   const res = await fetch(`/api/cars/${id}`);
//   return res.json();
// };

export const getBrands = async () => {
  const res = await nextServer.get("/brands");
  return res.data;
};
