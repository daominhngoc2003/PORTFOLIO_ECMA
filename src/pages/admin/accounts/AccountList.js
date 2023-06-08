import axios from "axios";
import Footer from "../../../components/admin/Footer";
import Header from "../../../components/admin/Header";
import { useEffect, useState } from "../../../lib";

const AccountList = () => {
  const [accounts, setaccounts] = useState([]);
  useEffect(() => {
    axios
      .get("https://unicode-json-server-iota.vercel.app/accounts")
      .then(({ data }) => setaccounts(data));
  }, []);
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        const id = btn.dataset.id;
        setaccounts(accounts.filter((account) => account.id != +id));

        axios.delete(
          "https://unicode-json-server-iota.vercel.app/accounts/" + id
        );
      });
    }
  });

  return `
    ${Header()}
    <!-- -----------------------------------------CONTENT -->
    <section class="box">
        <div class="title flex align-center">
            <h1 class="font-bold text-[30px] ">List Account</h1>
            <form class="ml-6">
                <input type="text" class="border px-3 py-2 rounded-md outline-none"
                    placeholder="Mời bạn nhập project muốn tìm">
                <button
                    class="bg-blue-500 px-3 py-2 rounded-md text-white hover:bg-blue-600 deley-100">Search</button>
            </form>
        </div>
        <table class="border w-full">
            <thead>
                <tr class="border bg-slate-400 text-[23px] ">
                    <th class="border w-[60px] py-6">Id</th>
                    <th class="border w-[250px]">Username</th>
                    <th class="border w-[140px]">Full name</th>
                    <th class="border w-[400px]">Password</th>
                    <th class="border"></th>
                </tr>
            </thead>
            <tbody>
                ${accounts
                  .map((account, index) => {
                    return `
                  <tr class="py-4 text-[18px]">
                    <td class="border text-center w-[60px] py-4">${
                      index + 1
                    }</td>
                    <td class="border px-5 w-[250px]">${account.username}</td>
                    <td class="border text-center w-[140px]">${
                      account.fullname
                    }</td>
                    <td class="border px-5 w-[400px]">${account.password}</td>
                    <td class="border text-center">
                        <a data-id="${
                          account.id
                        }" class="bg-red-500 btn-remove px-3 py-2 rounded-md text-white hover:bg-red-600 deley-100"
                            href="${account.id}">Xóa</a>
                        <a class="bg-green-500 px-3 py-2 rounded-md text-white hover:bg-green-600 deley-100"
                            href="">Sửa</a>
                    </td>
                </tr>`;
                  })
                  .join("")}
            </tbody>
        </table>
        <form>
            <a href="./projects.html"
                class="bg-slate-500 px-3 py-2 rounded-md text-white hover:bg-slate-600 deley-100">Nhập
                lại</a>
            <button
                class="bg-blue-500 px-3 py-2 rounded-md text-white hover:bg-blue-600 deley-100">Lưu</button>
        </form>
    </section>
    ${Footer()}
  `;
};

export default AccountList;
