import React, { useState, useEffect, useContext } from "react";
import Head from "next/head";
import Product from "../components/Product";
import { useRouter } from "next/router";
import { Context } from "../context/authContext";

export default () => {
  const [msg, setMsg] = useState("Carregando...");
  const [showMsg, setShowMsg] = useState(true);
  const [products, setProducts] = useState([]);

  const router = useRouter();
  const authContext = useContext(Context);

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const fetchProdcts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    if (res.status == 200) {
      const data = await res.json();
      await sleep(1000);
      setMsg("");
      setShowMsg(false);
      setProducts(data.products);
    } else {
      setMsg("Algo deu errado. Recarregue a página.");
      const data = {};
      setProducts(data);
    }
  };

  useEffect(() => {
    if (authContext.auth === "") {
      authContext.setGlobalMsg("Realize o login para acessar a página.");
      router.push("/auth/login");
    } else {
      fetchProdcts();
    }
  }, []);

  return (
    <div className="">
      <Head>
        <title>Raccoon Test - Produtos</title>
        <meta name="description" content="Teste da Racooon Monks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={
          "flex " +
          (showMsg ? " items-center " : " ") +
          " justify-center " +
          (showMsg ? " h-screen " : " ") +
          " bg-fixed bg-center bg-cover  outside-img"
        }
      >
        <div className="fixed right-0 top-0 left-0 bottom-0 bg-black/70 z-[2]" />
        {!showMsg && (
          <div className="z-10 grid w-5/6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6 mt-[8rem] mb-[2rem] bg-slate-200">
            {products.map((item) => {
              return (
                <Product
                  key={item.id}
                  img={item.images[0]}
                  title={item.title}
                  desc={item.description}
                />
              );
            })}
          </div>
        )}

        {showMsg && (
          <div className="z-10 h-1/5 w-1/2 md:w-1/4 mt-[-10rem] bg-slate-200 flex items-center justify-center">
            <p className="px-2 lg:px-5 py-2 flex items-center text-md  font-bold leading-snug text-slate-700">
              {msg}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
