import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Function to handle the request and return the JSON data
export async function GET() {
  // Read the JSON file from the file system
  const filePath = path.join(process.cwd(), "data", "desa.json");
  const jsonData = await fs.promises.readFile(filePath, "utf-8");
  const data = JSON.parse(jsonData);

  const formattedData = Object.keys(data).map((key) => ({
    prov_id: key.substring(0, 2),
    kabkot_id: key.substring(0, 4),
    kec_id: key.substring(0, 7),
    desa_id: key,
    name: data[key],
  }));

  // Return the JSON data using NextResponse
  return NextResponse.json(
    {
      message: "success",
      data: formattedData,
    },
    { status: 200 }
  );
}