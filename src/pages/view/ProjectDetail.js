import { useEffect, useState } from "../../lib";

const ProjectDetail = ({ id }) => {
  // const currenProject = projects.find((project) => project.id == id);
  // if (!currenProject) return "";
  console.log(id);
  const [projects, setprojects] = useState({});
  useEffect(() => {
    fetch("https://unicode-json-server-iota.vercel.app/projects/" + id)
      .then((response) => response.json())
      .then((data) => setprojects(data));
  }, []);
  return `
  ${projects.name}
  `;
};

export default ProjectDetail;
