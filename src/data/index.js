const projects = [
  { id: 1, name: "Dự án 1" },
  { id: 2, name: "Dự án 2" },
  { id: 3, name: "Dự án 3" },
];

const menusView = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Skills", link: "/skill" },
  { id: 4, name: "Service", link: "/service" },
  { id: 5, name: "Portfolio", link: "/portfolio" },
  { id: 6, name: "Blog", link: "/blogs" },
  { id: 7, name: "Contact", link: "/contact" },
  { id: 8, name: '<i class="fa-solid fa-user"></i>', link: "/signin" },
];

const menusAdmin = [
  {
    id: 1,
    name: "DashBoard",
    link: "/admin/",
    icon: '<i class="fa-solid fa-house mt-3"></i>',
  },
  {
    id: 2,
    name: "Category",
    link: "/admin/category",
    icon: '<i class="fa-solid fa-plus mt-3"></i>',
  },
  {
    id: 3,
    name: "Projects",
    link: "/admin/projects",
    icon: '<i class="fa-brands fa-r-project mt-3"></i>',
  },
  {
    id: 4,
    name: "Account",
    link: "/admin/account",
    icon: '<i class="fa-solid fa-user mt-3"></i>',
  },
];

export { menusView, projects, menusAdmin };
