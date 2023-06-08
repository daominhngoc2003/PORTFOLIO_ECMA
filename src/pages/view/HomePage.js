import Footer from "../../components/view/Footer";

import Header from "../../components/view/Header";
import { useEffect, useState } from "../../lib";

const HomePage = () => {
  const [profiles, setFrofile] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/profiles")
      .then((res) => res.json())
      .then((data) => setFrofile(data));
  }, []);
  return `
    ${Header()}
    <div class=" sm:grid sm:grid-cols-[650px,auto]">
    <!-- ARTICLE -->
    <article class=" bg-[#e6dace] w-[520px] px-2 sm:px-0 h-[330px] sm:h-[700px] sm:relative ">
        ${profiles.map((profile) => {
          return `
            <section
            class="box bg-[#f4ece6] w-full sm:w-[430px] sm:absolute sm:ml-[300px] mt-10 sm:mt-[100px] text-center  box shadow-lg shadow-gray-500 rounded-l">
            <!-- Image -->
            <div class="img ">
                <a href="" class=""><img src="${profile.album}"
                        class="border rounded-full border-none mx-auto my-10 sm:w-[250px] w-[100px] h-[100px] sm:h-[250px] hover:scale-110 transition"
                         alt=""></a>
            </div>
            <!-- content -->
            <div>
                <h1 class="font-black uppercase text-[23px] pt-3 pb-10 tracking-wide">${profile.fullname}</h1>
                <span class="tracking-widest">${profile.job}</span>
            </div>
            <!-- footer -->
            <div class="bg-white ">
                <ul class="flex justify-center py-2 mt-5 rounded-l">
                    <li><a class="pl-4 pr-5 text-[20px]" href="${profile.album}"><i
                                class="fa-brands fa-facebook"></i></a></li>
                    <li><a class="pr-5 text-[20px]" href=""><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a class=" pr-5 text-[20px]" href=""><i class="fa-brands fa-linkedin-in"></i></a></li>
                    <li><a class="pr-5 text-[20px]" href=""><i class="fa-brands fa-instagram"></i></a></li>
                </ul>
            </div>
        </section>
            `;
        })}
    </article>
    <!-- ASIDE -->
    <aside class="relative">
        <div class="box w-[520px] px-4 sm:px-0 sm:w-[500px] mx-auto my-8 sm:my-32 ">
        ${profiles
          .map((profile) => {
            return `
            <h1 class="text-[44px] font-medium font-black">${profile.title}</h1>
            <p class="py-5 text-[20px]">${profile.content}</p>
            <ul>
                <li class="decoration-none w-[150px] rounded-xl"><a
                        class="list-none block text-white rounded-xl transition deley-75 bg-blue-500 hover:text-blue-600 hover:bg-slate-300 py-3 w-full text-[19px] font-bold text-center"
                        href="https://drive.google.com/file/d/1PAY1CbYEKkEdl6_XYGkhUEPj4HAqLy1V/view?usp=sharing">Get Resume
                        <i class="fa-solid fa-download"></i></a></li>
             </ul>
             `;
          })
          .join("")}  
        </div>

    </aside>
</div>
    ${Footer()}
  `;
};

export default HomePage;
