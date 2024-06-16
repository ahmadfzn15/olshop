"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const p = useParams();
  useEffect(() => {
    console.log(p);
  }, []);

  return (
    <div className="">
      <div className="w-full h-[50vh] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10 flex justify-start items-end p-5">
          <h1 className="text-4xl font-bold text-white uppercase">{p.slug}</h1>
        </div>
        <img
          src="/img/img1.webp"
          alt="img"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
