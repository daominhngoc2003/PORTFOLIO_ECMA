import { useEffect, useState } from "../../lib";

const ProjectDetail = ({ id }) => {
  // const currenProject = projects.find((project) => project.id == id);
  // if (!currenProject) return "";
  console.log(id);
  const [projects, setprojects] = useState({});
  useEffect(() => {
    fetch("http://localhost:3000/projects/" + id)
      .then((response) => response.json())
      .then((data) => setprojects(data));
  }, []);
  return `
  ${projects.name}
  `;
};

export default ProjectDetail;
