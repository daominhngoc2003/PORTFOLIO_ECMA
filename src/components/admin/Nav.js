import { menusAdmin } from "../../data";

const Nav = () => {
  return `
        ${menusAdmin
          .map((menu) => {
            return `
                    <nav>
                        <ul>
                            <li>
                                <a class="grid grid-cols-[40px,auto] w-full px-10 py-3 hover:bg-indigo-400 hover:rounded-xl hover:text-white transition-all deley-100" href="${menu.link}">
                                    ${menu.icon}
                                    <h1 class=" text-[25px]">${menu.name}</h1>
                                </a>
                            </li>
                        </ul>
                    </nav>
            `;
          })
          .join("")}
  `;
};

export default Nav;
