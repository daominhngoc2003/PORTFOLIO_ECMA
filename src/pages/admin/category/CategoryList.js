import Footer from "../../../components/admin/Footer";
import Header from "../../../components/admin/Header";
import { useEffect, useState } from "../../../lib";

const CategoryList = () => {
  const [categories, setcategory] = useState([]);
  useEffect(() => {
    fetch("https://unicode-json-server-iota.vercel.app/categories")
      .then((response) => response.json())
      .then((data) => setcategory(data));
  }, []);
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        // Xóa local
        const id = this.dataset.id;
        const newcate = categories.filter((cate) => cate.id != id);
        setcategory(newcate);

        // Xóa server
        fetch("https://unicode-json-server-iota.vercel.app/categories/" + id, {
          method: "DELETE",
        }).then(() => alert("Xóa thành công"));
      });
    }
  });
  return `
    ${Header()}
    <!-- -----------------------------------------CONTENT -->
                <section class="box">
                    <div class="title flex align-center">
                        <h1 class="font-bold text-[30px] ">List Category</h1>
                        <form class="ml-6">
                            <input type="text" class="border px-3 py-2 rounded-md outline-none"
                                placeholder="Mời bạn nhập project muốn tìm">
                            <button
                                class="bg-blue-500 px-3 py-2 rounded-md text-white hover:bg-blue-600 deley-100">Search</button>
                        </form>
                    </div>
                    <table class="border w-full mb-4">
                        <thead>
                            <tr class="border bg-slate-400 text-[23px] ">
                                <th class="border w-[60px] py-6">Id</th>
                                <th class="border w-[200px]">Tên Loại</th>
                                <th class="border"></th>
                            </tr>
                        </thead>
                        <tbody>
                            ${categories
                              .map((cate, index) => {
                                return `
                                <tr class="py-4 text-[18px]">
                                    <td class="border text-center w-[60px] py-4">${
                                      index + 1
                                    }</td>
                                    <td class="border px-5 w-[200px]">${
                                      cate.name
                                    }</td>
                                    <td class="border text-center w-[100px]">
                                        <a data-id="${
                                          cate.id
                                        }" class="bg-red-500 btn-remove px-3 py-2 rounded-md text-white hover:bg-red-600 deley-100"
                                            href="${cate.id}">Xóa</a>
                                        <a class="bg-green-500 px-3 py-2 rounded-md text-white hover:bg-green-600 deley-100"
                                            href="/admin/category/${
                                              cate.id
                                            }/edit">Sửa</a>
                                    </td>
                                </tr>
                                `;
                              })
                              .join("")}
                        </tbody>
                    </table>
                    <form>
                        <a href="/admin/category/add"
                            class="bg-slate-500 px-3 py-2 rounded-md text-white hover:bg-slate-600 deley-100">Thêm mới</a>
                        <button
                            class="bg-blue-500 px-3 py-2 rounded-md text-white hover:bg-blue-600 deley-100">Xóa Tất cả</button>
                    </form>
                </section>
    ${Footer()}
  `;
};

export default CategoryList;
