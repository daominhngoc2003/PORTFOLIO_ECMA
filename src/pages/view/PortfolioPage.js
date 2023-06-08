import axios from "axios";
import Category from "../../components/view/Category";
import Footer from "../../components/view/Footer";
import Header from "../../components/view/Header";
import { useEffect, useState } from "../../lib";

const PortfolioPage = () => {
  const [categories, setCategories] = useState([]);

  // console.log(projects);
  //CATEGORY
  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  const onHandleclick = (id) => {
    if (id == 0) {
      fetch("http://localhost:3000/projects")
        .then((response) => response.json())
        .then((data) => setProjects(data));
    } else {
      fetch(`http://localhost:3000/categories/${id}?_embed=projects`)
        .then((response) => response.json())
        .then(({ projects }) => setProjects(projects));
    }
  };

  return `
  ${Header()}
  <!----------------------------------------------------------------- content -->
  <div class=" bg-slate-50">
      <!-- Title -->
      <section class="bg-[#e6dace] text-center">
          <h1 class=" font-black text-[32px] pt-20 pb-8">Portfolio</h1>
          <p class="pb-8">Most recent work</p>
      </section>
      <section class="">
                ${Category({ categories, onClick: onHandleclick })}
            </section>
      <!-- project name 1 -->
      <section class="w-[1200px] mx-auto mb-[80px] mt-10">
      <div class="rows grid grid-cols-2 gap-4 mb-7">
              ${projects
                .map((project) => {
                  return `
              
                    
                  <div>
                        <div class="portfolio-imageproject h-[300px] mb-4 overflow-hidden rounded-md"> 
                            <a class="" href="${project.link}" > 
                                <img src="${
                                  project.album
                                }" width="500" class="h-[300px] p-1 w-full h-full  hover:transition-all  rounded-md " alt="">
                                <div class="portfolio-icon">
                                   <a href="${
                                     project.link
                                   }"><i class="fa-sharp fa-solid fa-triangle-exclamation text-[40px] text-white"></i></a>
                                </div>
                            </a>
                            
                        </div>
                    
                      <div class=" bg-white h-[300px] p-6 border rounded-md hover:shadow-xl hover:transition-all">
                          <div class="">
                              <span>Ngày đăng: ${project.date}</span>
                              <h1 class=" font-bold text-[23px]  hover:transition-all hover:text-red-500">
                                <a href="/portfolio/${project.id}">${
                    project.name
                  }
                                </a>
                              </h1> <br>
                          </div>
                          <p class=" w-full p-0 m-0">${project.description}</p>
                          <h1>USED STACK:</h1> 
                              <ul class="flex items-center  mt-10">
                                  ${categories
                                    .map((cat) => {
                                      return `
                                        <li><a class="px-3 border py-1 mx-1   rounded-md bg-slate-200 shadow-md" href="">${cat.name}</a></li>
                                    `;
                                    })
                                    .join("")}
                              </ul>
                      </div>
                    </div>
               
                `;
                })
                .join("")}
                </div>
          
      </section>
      <section class="w-[900px] mx-auto mb-[80px] mt-10">
          <div class="bg-violet-600 text-white rounded-xl grid grid-cols-[600px,auto] flex items-center px-4">
              <div class="py-6 px-6">
                  <h1 class="font-bold text-[20px] mb-2">You have a new Project</h1>
                  <p class="mb-2">Contact me now and get a 30% discount on your new project</p>
                  <button class="bg-white text-blue-800 px-2 py-3 rounded-md ">Contact Me <i
                          class="fa-solid fa-arrow-right"></i></button>
              </div>
              <div>
                <img src="https://res.cloudinary.com/fashsion-brand/image/upload/v1655976667/image_45_mw2kej.jpg">
              </div>
          </div>
      </section>
  </div>

    ${Footer()}
  `;
};

export default PortfolioPage;
