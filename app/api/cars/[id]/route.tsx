import { NextRequest, NextResponse } from "next/server";
import { api } from "../../api";
import { isAxiosError } from "axios";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { error: "Car ID is required" },
        { status: 400 }
      );
    }

    const res = await api.get(`/cars/${id}`);

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
