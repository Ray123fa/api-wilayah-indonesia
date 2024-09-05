import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Function to handle the GET request with dynamic prefix
export async function GET(request, { params }) {
  const { prov_id, kabkot_id } = params; // Get the dynamic prefix from the URL

  // Check if the prefix is not 2 characters long
  if (prov_id.length !== 2 || kabkot_id.length !== 2) {
    return NextResponse.json(
      {
        message: "Invalid prov_id or kabkot_id. Please provide a valid 2-character ID",
      },
      { status: 400 }
    );
  }

  // Path to your JSON file
  const filePath = path.join(process.cwd(), "data", "desa.json");

  // Read and parse the JSON file
  const jsonData = await fs.promises.readFile(filePath, "utf-8");
  const data = JSON.parse(jsonData);

  // Filter data to get keys that start with the given prefix
  const filteredData = Object.keys(data)
    .filter((key) => key.startsWith(`${prov_id}${kabkot_id}`))
    .map((key) => ({
      id: key,
      name: data[key],
    }));

  // Check if filteredData is empty
  if (filteredData.length === 0) {
    return NextResponse.json({ message: "No data found", data: [] }, { status: 404 });
  }

  // Return the filtered data as a JSON response
  return NextResponse.json(
    {
      message: "success",
      data: {
        prov_id,
        kabkot_id: prov_id + kabkot_id,
        desa: filteredData,
      },
    },
    { status: 200 }
  );
}
