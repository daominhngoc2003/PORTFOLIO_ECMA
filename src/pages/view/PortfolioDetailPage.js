import Footer from "../../components/view/Footer";
import Header from "../../components/view/Header";
import { useEffect, useState } from "../../lib";

const PortfolioDetailPage = ({ id }) => {
  const [projects, setProject] = useState({});
  const [categories, setCategories] = useState({});
  useEffect(() => {
    fetch("http://localhost:3000/categories/" + id)
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:3000/projects/" + id)
      .then((response) => response.json())
      .then((data) => setProject(data));
  }, []);

  return `
    ${Header()}
    <!----------------------------------------------------------------- content -->
    <div class="bg-slate-50">
        <!-- Title -->
        <section class="bg-[#e6dace] text-center">
            <h1 class=" font-black text-[32px] pt-20 pb-8">Portfolio-detail</h1>
            <p class="pb-8">Most recent work</p>
        </section>
        <!-- project name 1 -->
        <section class="w-[1200px] mx-auto mb-[80px] mt-10">

            <div class="rows  mb-9">
                <div class="bg-slate-200 mb-3">
                    <div class="col h-[600px] p-1 image overflow-hidden rounded-md">
                        <a href="">
                            <img src="${projects.album}"
                                width="500"
                                class="h-[300px] w-full h-full hover:opacity-50 hover:transition-all   hover:scale-105 rounded-md "
                                alt=""></a>
                    </div>
                    <div class="grid grid-cols-4 w-[400px] h-[100px] gap-2 mt-2">
                        <a class=" overflow-hidden" href=""><img
                                class="hover:opacity-50  w-full h-full hover:scale-105 hover:transition-all"
                                src="${projects.album}"
                                alt=""></a>
                    </div>
                </div>

                <div class=" bg-white p-6 border rounded-md hover:shadow-xl hover:transition-all">
                    <div class="">
                        <span>Ngày đăng: ${projects.date}</span>
                        <h1 class=" font-bold text-[20px]  ">${
                          projects.name
                        }</h1> <br>
                    </div>
                    <p class=" w-full p-0 m-0">${projects.description}</p>
                    <h1>USED STACK:</h1>
                    <ul class="flex items-center  mt-10">



                        <li><div class="px-3 border py-1 mx-1   rounded-md bg-slate-200 shadow-md"
                                href="">${categories.name}</div></li>



                    </ul>
                </div>
            </div>



        </section>
        <section class="w-[900px] mx-auto mb-[80px] mt-10">
            <h1>Project có liên quan: </h1>
            <div class="bg-slate-600 text-white rounded-xl px-4">

                <div class="grid grid-cols-4 gap-3 p-3 w-full">
                    <div class=" overflow-hidden w-full h-full">
                        <a class="" href=""><img class="hover:opacity-50   hover:scale-105 hover:transition-all"
                                src="https://res.cloudinary.com/fashsion-brand/image/upload/v1655976667/image_45_mw2kej.jpg"
                                alt=""></a>
                        <div>a</div>
                    </div>
                    <div class=" overflow-hidden w-full h-full">
                        <a class="" href=""><img class="hover:opacity-50   hover:scale-105 hover:transition-all"
                                src="https://res.cloudinary.com/fashsion-brand/image/upload/v1655976667/image_45_mw2kej.jpg"
                                alt=""></a>
                        <div>a</div>
                    </div>
                    <div class=" overflow-hidden w-full h-full">
                        <a class="" href=""><img class="hover:opacity-50   hover:scale-105 hover:transition-all"
                                src="https://res.cloudinary.com/fashsion-brand/image/upload/v1655976667/image_45_mw2kej.jpg"
                                alt=""></a>
                        <div>a</div>
                    </div>
                    <div class=" overflow-hidden w-full h-full">
                        <a class="" href=""><img class="hover:opacity-50   hover:scale-105 hover:transition-all"
                                src="https://res.cloudinary.com/fashsion-brand/image/upload/v1655976667/image_45_mw2kej.jpg"
                                alt=""></a>
                        <div>a</div>
                    </div>
                    <div class=" overflow-hidden w-full h-full">
                        <a class="" href=""><img class="hover:opacity-50   hover:scale-105 hover:transition-all"
                                src="https://res.cloudinary.com/fashsion-brand/image/upload/v1655976667/image_45_mw2kej.jpg"
                                alt=""></a>
                        <div>a</div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    
    ${Footer()}
  `;
};

export default PortfolioDetailPage;
