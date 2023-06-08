import Header from "../../components/view/Header";
import ProjectList from "../../components/view/ProjectList";
import { useEffect, useState } from "../../lib";

const ProjectPage = () => {
  const [projects, setprojects] = useState([]);
  useEffect(() => {
    fetch("https://unicode-json-server-iota.vercel.app/projects")
      .then((response) => response.json())
      .then((data) => setprojects(data));
  }, []);
  return `
    ${Header()}
    ${ProjectList({ projects })}
  `;
};

export default ProjectPage;
