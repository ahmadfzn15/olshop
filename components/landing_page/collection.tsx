import Link from "next/link";

export default function Collection() {
  const image = [
    {
      url: "/categories/limited-edition",
      img: "/img/img1.webp",
      label: "Limited Edition",
    },
    {
      url: "/categories/knits",
      img: "/img/img2.webp",
      label: "Knits",
    },
    {
      url: "/categories/sweats",
      img: "/img/img3.webp",
      label: "Sweats",
    },
    {
      url: "/categories/tees",
      img: "/img/img4.webp",
      label: "Tees",
    },
    {
      url: "/categories/headwear",
      img: "/img/img5.webp",
      label: "Headwear",
    },
    {
      url: "/categories/accessories",
      img: "/img/img6.webp",
      label: "Accessories",
    },
    {
      url: "/categories/tops",
      img: "/img/img7.webp",
      label: "Tops",
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10 py-10">
        <h1 className="text-3xl font-semibold">Collection</h1>
        <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-2 px-2">
          {image &&
            image.map((d, i) => (
              <Link
                href={d.url}
                key={i}
                className="w-full h-[75vh] relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-black/50 z-10 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center">
                  <h1 className="text-4xl font-bold text-white uppercase">
                    {d.label}
                  </h1>
                </div>
                <img
                  src={d.img}
                  alt="img"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}
