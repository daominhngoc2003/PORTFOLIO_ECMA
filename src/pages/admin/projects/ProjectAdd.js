import axios from "axios";
import Footer from "../../../components/admin/Footer";
import Header from "../../../components/admin/Header";
import { router, useEffect, useState } from "../../../lib";

const ProjectAdd = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/categories")
      .then(({ data }) => setCategories(data));
  }, []);
  useEffect(() => {
    const form = document.querySelector(".form-add");
    const idcategory = document.querySelector("#idcategory");
    const name = document.querySelector("#name");
    const date = document.querySelector("#date");
    const image = document.querySelector("#image");
    const author = document.querySelector("#author");
    const description = document.querySelector(".description");
    const link = document.querySelector("#link");
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const urls = await uploadfiles(image.files);

      // console.log(image.files);
      const formData = {
        name: name.value,
        categoryId: Number(idcategory.value),
        date: date.value,
        author: author.value,
        link: link.value,
        album: urls,
        image: image.value,
        description: description.value,
      };
      console.log(idcategory);

      axios
        .post("http://localhost:3000/projects", formData)
        .then(() => router.navigate("/admin/projects/"));
    });
  });
  const uploadfiles = async (files) => {
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
  console.log(categories);
  return `
    ${Header()}
    <!-- -----------------------------------------CONTENT -->
                <section class="box">
                    <div class="title flex align-center">
                        <h1 class="font-bold text-[30px]">Add Projects</h1>
                        <form class="ml-6">
                            <input type="text" class="border px-3 py-2 rounded-md outline-none"
                                placeholder="Mời bạn nhập project muốn tìm">
                            <button
                                class="bg-blue-500 px-3 py-2 rounded-md text-white hover:bg-blue-600 deley-100">Search</button>
                        </form>
                    </div>
                    
                    <form class="form-add">
                        <div>
                            <label>Tên Loại</label><br>
                            <select id="idcategory" class="w-full py-4 px-3 outline-none rounded-md shadow-md mb-4">
                              ${categories.map((cate) => /*html*/ {
                                return `<option value="${cate.id}">${cate.name}</option>`;
                              })}
                            </select>
                        </div>
                        <div>
                            <label>Tên Project</label>
                            <input type="text" id="name"  class="w-full py-4 px-3 outline-none rounded-md shadow-md mb-4"
                                placeholder="Tên projects">
                        </div>
                        <div>
                            <label>Ngày đăng</label>
                            <input type="date" id="date" class="w-full py-4 px-3 outline-none rounded-md shadow-md mb-4"
                                placeholder="Ngày đăng">
                        </div>
                        <div>
                            <label>Image</label>
                            <input type="file" id="image" multiple class="w-full py-4 px-3 outline-none rounded-md shadow-md mb-4"
                                placeholder="Image projects">
                        </div>
                        <div>
                          <label>Người tạo</label>
                          <input type="text" id="author" class="w-full py-4 px-3 outline-none rounded-md shadow-md mb-4"
                              placeholder="Người tạo">
                        </div>
                        <label>Mô tả</label>
                        <textarea class="w-full py-4 px-3 description outline-none rounded-md shadow-md mb-4" name="" 
                            cols="30" rows="5" placeholder="Description"></textarea>
                        <div>
                          <label>Link page</label>
                          <input type="text" id="link" class="w-full py-4 px-3 outline-none rounded-md shadow-md mb-4"
                              placeholder="Link page">
                        </div>

                        <div class="btn">
                            <button class="bg-red-500 px-3 py-2 rounded-md text-white hover:bg-red-600 deley-100">Nhập
                                lại</button>
                            <a class="bg-green-500 px-3 py-2 rounded-md text-white hover:bg-green-600 deley-100"
                                href="/admin/projects">Danh sách</a>
                            <button
                                class="bg-blue-500 px-3 py-2 rounded-md text-white hover:bg-blue-600 deley-100">Thêm</button>
                        </div>
                    </form>
                    
                </section>
    ${Footer()}
    `;
};

export default ProjectAdd;
