import axios from "axios";
import Footer from "../../components/view/Footer";
import Header from "../../components/view/Header";
import { useEffect, useState } from "../../lib";

const BlogDetailPage = ({ id }) => {
  const [blogs, setBlogs] = useState({});
  useEffect(() => {
    fetch("https://unicode-json-server-iota.vercel.app/blogs/" + id)
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);
  console.log(id);
  return `
  ${Header()}
  <!----------------------------------------------------------------- content -->
  <div class="bg-slate-50 ">
      <!-- Title -->
      <section class=" text-center bg-[#e6dace]">
          <h1 class=" font-black text-[32px] pt-20 pb-8">Blog-detail</h1>
          <p class="pb-8">What i offer</p>
      </section>
      <!-- project name 1 -->
      <section class="w-[1100px] mx-auto pb-[80px] mt-20">
      <div class="rows">
      <div class="col  hover:shadow-xl  items-center mb-6  shadow  bg-white  ">
        <div class="p-10">
          <div class="flex justify-between items-center">
            <a class=" text-[24px]" href="">${blogs.business}</a>
            <div class="flex justify-between items-center">
              <a class="flex items-center" href="">
                <i class="fa-solid fa-user mr-2"></i>
                <h1 class="text-[22px]">${blogs.username}</h1>
              </a>
              <span class=" text-[22px]">
                <i class="fa-solid fa-calendar-days ml-4"></i>
                ${blogs.date}</span>
            </div>
          </div>
          <div class=" my-6">
            <a class="text-[30px] font-bold" href="">${blogs.title}</a>
          </div>
          <div class=" my-6">
            <a class="text-[22px]" href="">${blogs.content}</a>
          </div>
          <div class="ư-full">
            <a href="">
              <img src="${blogs.album}" class="w-full" alt="">
            </a>
          </div>
        </div>
      </div>
      <div >
        <h1 class="text-[30px] font-bold">Comment: </h1>
      </div>
      <div class="col  hover:shadow-xl  items-center mb-6  shadow  bg-white  ">
      a
      </div>
    </div>
    </section>
    </div>
      
      
  </div>
  ${Footer()}
  `;
};

export default BlogDetailPage;
