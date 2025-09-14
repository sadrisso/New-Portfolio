import { dbConnect } from "@/lib/dbConnect";
import React from "react";
import ProjectsPage from "../components/ProjectsPage";



async function AllProjects() {
  const collection = await dbConnect("projects");
  const res = await collection.find().toArray();
  const projects = await JSON.parse(JSON.stringify(res));

  return <ProjectsPage data={projects} />;
}

export default AllProjects;
