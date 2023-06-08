import Footer from "../../../components/admin/Footer";
import Header from "../../../components/admin/Header";
import { router, useEffect } from "../../../lib";

const CategoryAdd = () => {
  useEffect(() => {
    const form = document.querySelector("#form-add");
    const name = document.querySelector("#name");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formdata = {
        name: name.value,
      };
      fetch("http://localhost:3000/categories/", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formdata),
      }).then(() => router.navigate("/admin/category/"));
    });
  });
  return `
    ${Header()}
    <!-- -----------------------------------------CONTENT -->
                <section class="box">
                    <div class="title flex align-center">
                        <h1 class="font-bold text-[30px]">Add Category</h1>
                        <form class="ml-6">
                            <input type="text" class="border px-3 py-2 rounded-md outline-none"
                                placeholder="Mời bạn nhập project muốn tìm">
                            <button
                                class="bg-blue-500 px-3 py-2 rounded-md text-white hover:bg-blue-600 deley-100">Search</button>
                        </form>
                    </div>
                    <form id="form-add">
                        <div>
                            <label>Id</label>
                            <input type="text" class="w-full py-4 px-3 outline-none rounded-md shadow-md mb-4"
                                placeholder="Id" disabled>
                        </div>
                        <div>
                            <label>Tên Loại</label>
                            <input id="name" type="text" class="w-full py-4 px-3 outline-none rounded-md shadow-md mb-4"
                                placeholder="Tên Loại">
                        </div>
                        <div>
                            <a class="bg-green-500 px-3 py-2 rounded-md text-white hover:bg-green-600 deley-100"
                                href="/admin/category">Danh sách</a>
                            <button
                                class="bg-blue-500 px-3 py-2 rounded-md text-white hover:bg-blue-600 deley-100">Thêm</button>
                        </div>
                    </form>
                </section>
    ${Footer()}
  `;
};

export default CategoryAdd;
