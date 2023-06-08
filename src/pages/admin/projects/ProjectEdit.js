import axios from "axios";
import Footer from "../../../components/admin/Footer";
import Header from "../../../components/admin/Header";
import { router, useEffect, useState } from "../../../lib";

const ProjectEdit = ({ id }) => {
  const [projects, setProject] = useState({});
  const [categories, setCategories] = useState([]);

  // CATEGORY
  useEffect(() => {
    axios
      .get(`https://unicode-json-server-iota.vercel.app/categories`)
      .then(({ data }) => setCategories(data));
  }, []);

  //PROJECT
  useEffect(() => {
    axios
      .get(`https://unicode-json-server-iota.vercel.app/projects/${id}`)
      .then(({ data }) => setProject(data));
  }, []);

  useEffect(() => {
    const form = document.querySelector(".form-edit");
    const name = document.querySelector("#name");
    const category = document.querySelector("#category");
    const date = document.querySelector("#date");
    const image = document.querySelector("#image");
    const author = document.querySelector("#author");
    const description = document.querySelector(".description");
    const link = document.querySelector("#link");
    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      let ArrAlbum = [];
      // ArrAlbum =
      //   image.files.length == 0
      //     ? (ArrAlbum = image.accept.split(","))
      //     : (ArrAlbum = await uploadFiles(image.files));
      if (image.files.length == 0) {
        ArrAlbum = image.accept.split(",");
      } else {
        ArrAlbum = await uploadFiles(image.files);
      }
      console.log(ArrAlbum[0]);

      // const urls = await uploadFiles(image.files);
      const formData = {
        name: name.value,
        date: date.value,
        categoryId: category.value,
        author: author.value,
        link: link.value,
        album: ArrAlbum,
        image: image.value,
        description: description.value,
      };
      axios
        .put(
          `https://unicode-json-server-iota.vercel.app/projects/${id}`,
          formData
        )
        .then(() => router.navigate("/admin/projects"));
    });
  });
  const uploadFiles = async (files) => {
    if (files) {
      const CLOUD_NAME = "fashsion-brand";
      const PRESET_NAME = "upload-image";
      const urls = [];
      const FOLDER_NAME = "portfolio";
      const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
      const formData = new FormData();

      formData.append("upload_preset", PRESET_NAME);
      formData.append("folder", FOLDER_NAME);

      for (const file of files) {
        formData.append("file", file);

        const response = await axios.post(api, formData, {
          headers: {
            "content-type": "multipart/form-data",
          },
        });
        urls.push(response.data.secure_url);

        // return urls;
      }
      return urls;
    }
  };
  return /*html*/ `
    ${Header()}
    <!-- -----------------------------------------CONTENT -->
                <section class="box">
                    <div class="title flex align-center">
                        <h1 class="font-bold text-[30px]">Edit Projects</h1>
                        <form class="ml-6">
                            <input type="text" class="border px-3 py-2 rounded-md outline-none"
                                placeholder="Mời bạn nhập project muốn tìm">
                            <button
                                class="bg-blue-500 px-3 py-2 rounded-md text-white hover:bg-blue-600 deley-100">Search</button>
                        </form>
                    </div>
                    
                    <form class="form-edit">
                        <div>
                            <label>Tên Loại</label><br>
                            <select id="category" class="w-full py-4 px-3 outline-none rounded-md shadow-md mb-4">
                          
                                ${categories.map((cate) => {
                                  if (projects.categoryId == cate.id) {
                                    return /*html*/ `<option value=${cate.id} selected>${cate.name}</option>`;
                                  } else {
                                    return /*html*/ `<option value=${cate.id}>${cate.name}</option>`;
                                  }
                                })};
                        
                            </select> 
                        </div>
                        <div>
                            <label>Tên Project</label>
                            <input type="text" id="name" value="${
                              projects.name
                            }" class="w-full py-4 px-3 outline-none rounded-md shadow-md mb-4"
                                placeholder="Tên projects">
                        </div>
                        <div>
                            <label>Ngày đăng</label>
                            <input type="date" id="date" value="${
                              projects.date
                            }" class="w-full py-4 px-3 outline-none rounded-md shadow-md mb-4"
                                placeholder="Ngày đăng">
                        </div>
                        <div>
                            <label>Image</label>
                            <div class="w-[300px] h-[150px]">
                            <img class="w-full h-full" src="${projects.album}">
                            </div>
                            <input type="file" accept="${
                              projects.album
                            }"  id="image" class="w-full py-4 px-3 outline-none rounded-md shadow-md mb-4"
                                placeholder="Image projects">
                        </div>
                        <div>
                          <label>Người tạo</label>
                          <input type="text" id="author" value="${
                            projects.author
                          }" class="w-full py-4 px-3 outline-none rounded-md shadow-md mb-4"
                              placeholder="Người tạo">
                        </div>
                        <label>Mô tả</label>
                        <textarea class="w-full py-4 px-3 description outline-none rounded-md shadow-md mb-4" name="" 
                            cols="30" rows="5" placeholder="Description">${
                              projects.description
                            }
                            </textarea>
                        <div>
                          <label>Link page</label>
                          <input type="text" value="${
                            projects.link
                          }" id="link" class="w-full py-4 px-3 outline-none rounded-md shadow-md mb-4"
                              placeholder="Link page">
                        </div>

                        <div class="btn">
                            <a href="admin/projects/${
                              projects.id
                            }/edit" class="bg-red-500 px-3 py-2 rounded-md text-white hover:bg-red-600 deley-100">Nhập
                                lại
                                </a>
                            <a class="bg-green-500 px-3 py-2 rounded-md text-white hover:bg-green-600 deley-100"
                                href="/admin/projects">Danh sách</a>
                            <button
                                class="bg-blue-500 px-3 py-2 rounded-md text-white hover:bg-blue-600 deley-100">Lưu
                                </button>
                        </div>
                    </form>
                    
                </section>
    ${Footer()}  
  `;
};

export default ProjectEdit;
