import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Function to handle the GET request with dynamic prov_id
export async function GET(request, { params }) {
  const { prov_id } = params; // Get the dynamic prov_id from the URL

  // Validate that prov_id is exactly 2 characters
  if (prov_id.length !== 2) {
    return NextResponse.json(
      {
        message: "Invalid prov_id. Please provide a valid 2-character ID.",
      },
      { status: 400 }
    );
  }

  // Path to your JSON file
  const filePath = path.join(process.cwd(), "data", "kabkota.json");

  try {
    // Read and parse the JSON file
    const jsonData = await fs.promises.readFile(filePath, "utf-8");
    const data = JSON.parse(jsonData);

    // Filter data to get keys that start with the given prov_id
    const filteredData = Object.keys(data)
      .filter((key) => key.startsWith(prov_id))
      .map((key) => ({
        id: key,
        name: data[key],
      }));

    // If no matching data is found, return 404
    if (filteredData.length === 0) {
      return NextResponse.json({ message: "No data found", data: [] }, { status: 404 });
    }

    // Return the transformed data with a 200 status
    return NextResponse.json(
      {
        message: "success",
        data: {
          prov_id,
          kabkot: filteredData,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    // Return a 500 error if something goes wrong while reading the file
    return NextResponse.json({ message: "Server error. Could not read data." }, { status: 500 });
  }
}
