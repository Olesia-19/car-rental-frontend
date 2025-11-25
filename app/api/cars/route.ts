import { NextRequest, NextResponse } from "next/server";
import { api } from "../api";
import { isAxiosError } from "axios";

export async function GET(req: NextRequest) {
  try {
    const page = req.nextUrl.searchParams.get("page") ?? "1";
    const limit = req.nextUrl.searchParams.get("limit") ?? "10";
    const brand = req.nextUrl.searchParams.get("brand") ?? undefined;
    const rentalPrice =
      req.nextUrl.searchParams.get("rentalPrice") ?? undefined;
    const minMileage = req.nextUrl.searchParams.get("minMileage") ?? undefined;
    const maxMileage = req.nextUrl.searchParams.get("maxMileage") ?? undefined;

    const res = await api.get("/cars", {
      params: { page, limit, brand, rentalPrice, minMileage, maxMileage },
    });

    return NextResponse.json(res.data, { status: res.status });
  } catch (error) {
    if (isAxiosError(error)) {
      console.error("Axios error:", error.response?.data);
      return NextResponse.json(
        { error: error.message, response: error.response?.data },
        { status: error.response?.status ?? 500 }
      );
    }

    console.error("Unexpected error:", (error as Error).message);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
