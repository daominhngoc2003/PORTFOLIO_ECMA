import axios from "axios";
import Footer from "../../components/view/Footer";
import Header from "../../components/view/Header";
import { useEffect, useState } from "../../lib";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://unicode-json-server-iota.vercel.app/blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);
  return /*html*/ `
  ${Header()}
  <!----------------------------------------------------------------- content -->
  <div class="bg-slate-50 ">
      <!-- Title -->
      <section class=" text-center bg-[#e6dace]">
          <h1 class=" font-black text-[32px] pt-20 pb-8">Blog</h1>
          <p class="pb-8">What i offer</p>
      </section>
      <!-- project name 1 -->
      <section class="w-[1100px] mx-auto pb-[80px] mt-20">
          <div class="rows">
             
                  ${blogs
                    .map((blog) => {
                      return `
                     <div class="col grid grid-cols-[300px,auto] hover:shadow-xl flex items-center mb-6  shadow  bg-white  h-[300px]">
                      <div class="">
                          <a href="">
                              <img src="${blog.album}"
                                  class="w-[300px] p-10 h-[300px]" alt="">
                          </a>
                      </div>
                      <div class="p-10">
                          <div>
                              <a class=" text-[24px]" href="">${blog.business}</a>
                              <span class=" text-[22px]">- ${blog.date}</span>
                          </div>
                          <div class=" my-6">
                              <a class="text-[30px] font-bold hover:text-red-400 transition-all" href="/blogs/${blog.id}">${blog.title}</a>
                          </div>
                          <div class="flex items-center text-[20px]">
                              <a class="flex items-center" href="">
                                  <i class="fa-solid fa-user mr-2"></i>
                                  <h1>${blog.username}</h1>
                              </a>
                              <a class="mx-5" href="">
                                  <i class="fa-solid fa-heart mr-2"></i> ${blog.heartId}
                              </a>
                              <a href="">
                                  <i class="fa-solid fa-comment mr-2"></i> ${blog.commentId}
                              </a>
                          </div>

                      </div>
                      </div>
                    `;
                    })
                    .join("")}
                

              </div>
              </section>
          </div>
      
      
  </div>
  ${Footer()}
  `;
};

export default BlogPage;
