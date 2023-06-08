import Head from "./Head";
import Nav from "./Nav";

const Header = () => {
  return `
  ${Head()}
  <div class="bg-slate-50 block">
        <div class="w-[1450px] mx-auto">
            <div class=" grid grid-cols-[250px,auto] pt-10 gap-4">
                <!-- ----------------------------------------HEADER -->
                <header class="bg-white">
                    <div class="w-[200px] mx-auto">
                        <a href="/"><img src="https://res.cloudinary.com/fashsion-brand/image/upload/v1676633154/portfolio/logo_u0yyhm.png" width="200" class="h-[200px] rounded-full" alt=""></a>
                    </div>
                    ${Nav()}
                </header>
            
  `;
};

export default Header;
