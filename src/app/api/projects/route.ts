// import { dbConnect } from "@/lib/dbConnect";
// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     const projects = await dbConnect("projects").then((col) =>
//       col.find().toArray()
//     );

//     return NextResponse.json(projects);
//   } catch (error) {
//     console.error("Error fetching projects:", error);
//     return NextResponse.json(
//       { error: "Failed to load projects" },
//       { status: 500 }
//     );
//   }
// }