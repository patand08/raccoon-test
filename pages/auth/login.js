import React, { useState, useEffect, useContext } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Context } from "../../context/authContext";

export default (props) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const router = useRouter();
  const authContext = useContext(Context);

  const validateForm = () => {
    return user.length > 0 && password.length > 0;
  };

  useEffect(() => {
    if (authContext.auth !== "") {
      localStorage.clear();
      authContext.setNewAuth("");
      setMsg("Logout realizado");
    } else {
      setMsg(authContext.globalMsg);
      authContext.setGlobalMsg("");
    }
  }, []);

  //Login and State handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr(false);
    const res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: user,
        password: password,
      }),
    });
    if (res.status == 400) {
      setErrMsg("Credenciais inválidas");
      setErr(true);
    } else if (res.status == 200) {
      let data = await res.json();
      localStorage.setItem("token", data.token);
      authContext.setNewAuth(data.token);
      router.back();
    } else {
      setErrMsg("Algo deu errado. Tente novamente.");
      setErr(true);
    }
  };

  return (
    <div className="">
      <Head>
        <title>Raccoon Test - Login</title>
        <meta name="description" content="Teste da Racooon Monks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center justify-center h-screen bg-scroll bg-center bg-cover outside-img">
        <div className="fixed right-0 top-0 left-0 bottom-0 bg-black/70 z-[2]" />
        <div className="z-10 w-5/6 sm:w-2/3 lg:w-2/5">
          <form
            onSubmit={handleSubmit}
            className=" p-6 mt-[-10rem] bg-slate-200 "
          >
            <div className="flex items-center justify-center">
              <h2 className="text-lg  font-bold">{msg}</h2>
            </div>

            <div className="">
              <label className="pt-2 pb-1 text-slate-700 text-md  font-bold">
                Usuário
              </label>
              <input
                type="text"
                className="form-input w-full px-3 py-2 rounded-sm"
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
            <div className="mt-3">
              <label className="pt-2 pb-1 text-slate-700 text-md  font-bold">
                Senha
              </label>
              <input
                type="password"
                className="form-input w-full px-3 py-2 rounded-sm"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <input
              disabled={!validateForm()}
              type="submit"
              value="Entrar"
              className={
                "mt-6 inline-flex justify-center rounded-sm w-full px-3 lg:px-5 py-2 text-md font-bold text-white" +
                (!validateForm()
                  ? " bg-gray-700"
                  : " bg-blue-900 cursor-pointer hover:bg-[#1E2A6A]")
              }
            />
          </form>
          {err && (
            <div className="mt-6 bg-red-600 flex items-center justify-center">
              <p className="px-2 lg:px-5 py-2 flex items-center text-md  font-bold leading-snug text-white">
                {errMsg}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
