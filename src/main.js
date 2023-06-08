import { router, render } from "./lib";
//admin
import CategoryList from "./pages/admin/category/CategoryList";
import DashBoard from "./pages/admin/DashBoard";
import ProjectAdd from "./pages/admin/projects/ProjectAdd";
import ProjectEdit from "./pages/admin/projects/ProjectEdit";
import ProjectList from "./pages/admin/projects/ProjectList";
import AccountList from "./pages/admin/accounts/AccountList";
import CategoryAdd from "./pages/admin/category/CategoryAdd";
import CategoryEdit from "./pages/admin/category/CategoryEdit";

// View
import ContactPage from "./pages/view/ContactPage";
import HomePage from "./pages/view/HomePage";
import AboutPage from "./pages/view/AboutPage";
import ProjectDetail from "./pages/view/ProjectDetail";
import ProjectPage from "./pages/view/ProjectPage";
import SkillPage from "./pages/view/SkillPage";
import ServicePage from "./pages/view/ServicePage";
import PortfolioPage from "./pages/view/PortfolioPage";
import BlogPage from "./pages/view/BlogPage";
import PortfolioDetailPage from "./pages/view/PortfolioDetailPage";
import BlogDetailPage from "./pages/view/BlogDetailPage";
import Signin from "./pages/view/accounts/Signin";
import Register from "./pages/view/accounts/register";

const app = document.getElementById("app");

// Login
// router.on("/admin/*", () => {}, {
//   before: (next) => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (!user | (user && user.id != 1)) return (window.location.href = "/");
//     next();
//   },
// });

router.on("/signin", () => render(Signin, app));
router.on("/signup", () => render(Register, app));

//------------------------------- view
router.on("/", () => render(HomePage, app));
router.on("/about", () => render(AboutPage, app));
router.on("/skill", () => render(SkillPage, app));
router.on("/service", () => render(ServicePage, app));
router.on("/portfolio", () => render(PortfolioPage, app));
router.on("/portfolio/:id", ({ data }) =>
  render(() => PortfolioDetailPage(data), app)
);
router.on("/blogs", () => render(BlogPage, app));
router.on("/blogs/:id", ({ data }) => render(() => BlogDetailPage(data), app));
router.on("/contact", () => render(ContactPage, app));

// project
router.on("/projects", () => render(ProjectPage, app));
router.on("/projects/:id", ({ data }) =>
  render(() => ProjectDetail(data), app)
);
router.on("/contact", () => render(ContactPage, app));

// -------------------------------admin dashboard
router.on("/admin/", () => render(DashBoard, app));

// category admin
router.on("/admin/category", () => render(CategoryList, app));
router.on("/admin/category/add", () => render(CategoryAdd, app));
router.on("/admin/category/:id/edit", ({ data }) =>
  render(() => CategoryEdit(data), app)
);

//project admin
router.on("/admin/projects", () => render(ProjectList, app));
router.on("/admin/projects/add", () => render(ProjectAdd, app));
router.on("/admin/projects/:id/edit", ({ data }) =>
  render(() => ProjectEdit(data), app)
);

// account admin
router.on("/admin/account", () => render(AccountList, app));

router.notFound(() => console.log("not found"));
router.resolve();
