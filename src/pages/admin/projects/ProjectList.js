import axios from "axios";
import Category from "../../../components/admin/Category";
import Footer from "../../../components/admin/Footer";
import Header from "../../../components/admin/Header";
import { useEffect, useState } from "../../../lib";

const ProjectList = () => {
  const [projects, setProject] = useState([]);
  const [categories, setcategory] = useState([]);
  useEffect(() => {
    axios
      .get(`https://unicode-json-server-iota.vercel.app/categories`)
      .then(({ data }) => setcategory(data));
  }, []);
  // const onHandleclick = (id) => {
  //   axios
  //     .put(`https://unicode-json-server-iota.vercel.app/categories/${id}?_embed=projects`)
  //     .then(({ data }) => setProject(data.projects));
  // };
  useEffect(() => {
    axios
      .get("https://unicode-json-server-iota.vercel.app/projects")
      .then(({ data }) => setProject(data));
  }, []);
  // XÓA
  useEffect(() => {
    const btns = document.querySelectorAll("#btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        // Xóa local
        const id = btn.dataset.id;
        const newProject = projects.filter((project) => project.id != id);
        setProject(newProject);
        // Xóa server
        axios.delete(
          `https://unicode-json-server-iota.vercel.app/projects/${id}`
        );
      });
    }
  });
  return `
   ${Header()}
   <!-- -----------------------------------------CONTENT -->
   <section class="box">
       <div class="title flex align-center">
           <h1 class="font-bold text-[30px] ">List Projects</h1>
           <form id="form-search"  class="ml-6 flex items-center">
           <select  class="w-full py-2 px-1 outline-none rounded-md shadow-md mx-2">
           ${categories.map((cate) => {
             return `<option value="${cate.id}">${cate.name}</option>`;
           })}
       </select> 
               <input type="text" data-id="${
                 projects.id
               }" id="kyw" class="border px-3 py-2 rounded-md outline-none"
                   placeholder="Mời bạn nhập project muốn tìm">
               <button
                   class="bg-blue-500 px-3 py-2 rounded-md text-white hover:bg-blue-600 deley-100" data-id="${
                     projects.id
                   }" id="btn-search">Search</button>
           </form>
       </div>
       <table class="border w-full mb-4">
           <thead>
               <tr class="border bg-slate-400 text-[20px] ">
                   <th class="border w-[40px] py-6"></th>
                   <th class="border w-[30px] py-6">Id</th>
                   <th class="border w-[100px]">Tên Project</th>
                   <th class="border w-[80px]">Ngày đăng</th>
                   <th class="border w-[9px]">Ảnh</th>
                   <th class="border w-[100px]">Người tạo</th>
                   <th class="border w-[200px]">Mô tả</th>
                   <th class="border w-[200px]">Link</th>
                   <th class="border w-[80px]"></th>
               </tr>
           </thead>
           <tbody>
               ${projects
                 .map((project, index) => {
                   return `
                  <tr class="py-4 text-[16px]">
                  <td class="border text-center w-[40px] py-4"><input type="checkbox"></td>
                    <td class="border text-center w-[30px] py-4">${
                      index + 1
                    }</td>
                    <td class="border px-5 w-[100px]">${project.name}</td>
                    <td class="border text-center w-[80px]">${project.date}</td>
                    <td class="border text-center w-[90px] h-[70px]">
                    <img class=" w-full h-full p-0" src="${project.album}"></td>
                    <td class="border text-center w-[100px]">
                    ${project.author}</td>
                    <td class="border px-5 w-[200px]">
                    ${project.description}</td>
                    <td class="border px-5 w-[200px]">
                    <a class="underline hover:decoration-red-400 hover:text-red-400" href="${
                      project.link
                    }">${project.link}</a>
                    </td>
                    <td class="border text-center w-[80px]">
                        <a data-id="${
                          project.id
                        }" id="btn-remove" class="bg-red-500 px-2 py-1 rounded-md text-white hover:bg-red-600 deley-100"
                            href="${project.id}">Xóa</a>
                        <a class="bg-green-500 px-2 py-1 rounded-md text-white hover:bg-green-600 deley-100"
                            href="/admin/projects/${project.id}/edit">Sửa</a>
                    </td>
                 </tr>
                `;
                 })
                 .join("")}
           </tbody>
       </table>
       <form>
           <a href="/admin/projects/add"
               class="bg-slate-500 px-3 py-2 rounded-md text-white hover:bg-slate-600 deley-100">Thêm mới</a>
           <button
               class="bg-blue-500 px-3 py-2 rounded-md text-white hover:bg-blue-600 deley-100">Xóa tất cả</button>
       </form>
   </section>
   ${Footer()}
  `;
};

export default ProjectList;
