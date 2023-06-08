import Head from "./Head";
import Nav from "./Nav";

const Header = () => {
  return `
  ${Head()}
  <!-- CONTAINER -->
    <div class="">
        <!-- HEADER -->
        <header class=" w-[500px] sm:w-[1510px]">
            <div class="header flex justify-between  items-center ">
                <div class="uppercase flex items-center">
                    <a href="/admin/projects"><img src="https://res.cloudinary.com/fashsion-brand/image/upload/v1676633154/portfolio/logo_u0yyhm.png" width="150" alt=""></a>
                </div>
                ${Nav()}
            </div>
        </header>
    
  `;
};

export default Header;
