import Footer from "../../../components/admin/Footer";
import Header from "../../../components/admin/Header";
import { router, useEffect, useState } from "../../../lib";

const CategoryEdit = ({ id }) => {
  const [categories, setcategory] = useState({});
  console.log(categories);
  useEffect(() => {
    fetch("http://localhost:3000/categories/" + id)
      .then((response) => response.json())
      .then((data) => setcategory(data));
  }, []);
  useEffect(() => {
    const form = document.querySelector("#form-edit");
    const name = document.querySelector("#name");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const newdata = {
        name: name.value,
      };
      fetch("http://localhost:3000/categories/" + id, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newdata),
      }).then(() => router.navigate("/admin/category"));
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
        <form id="form-edit">
            <div>
                <label>Id</label>
                <input type="text" value="${
                  categories.id
                }" class="w-full py-4 px-3 outline-none rounded-md shadow-md mb-4"
                    placeholder="Id" disabled>
            </div>
            <div>
                <label>Tên Loại</label>
                <input id="name" value="${
                  categories.name
                }" type="text" class="w-full py-4 px-3 outline-none rounded-md shadow-md mb-4"
                    placeholder="Tên Loại">
            </div>
            <div>
                <a class="bg-green-500 px-3 py-2 rounded-md text-white hover:bg-green-600 deley-100"
                    href="/admin/category">Danh sách</a>
                <button
                    class="bg-blue-500 px-3 py-2 rounded-md text-white hover:bg-blue-600 deley-100">Lưu</button>
            </div>
        </form>
    </section>
    ${Footer()}
  `;
};

export default CategoryEdit;
