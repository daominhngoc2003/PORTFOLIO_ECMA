import { menusView } from "../../data";
import Footer from "./Footer";

const Nav = () => {
  function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
  return `
  <nav>
    <ul class="flex font-bold main-menu">
        ${menusView
          .map((menu) => {
            return `
            <li class="list-none px-1  sm:px-6 text-[17px] sm:text-[19px]  hover:text-blue-300"><a href="${menu.link}">${menu.name}</a></li>
            `;
          })
          .join("")}
          <button onclick="toggleDarkMode()"><i class="fa-solid fa-circle-half-stroke"></i> </button>
         
    </ul>
  </nav>
  `;
};

export default Nav;
