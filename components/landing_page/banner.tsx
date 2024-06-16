import { Carousel } from "@material-tailwind/react";

export default function Banner() {
  return (
    <div id="" className="h-[calc(100vh-6rem)] w-screen">
      <Carousel
        autoplay
        loop
        autoplayDelay={3000}
        transition={{ type: "tween", duration: 1 }}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <img src="/img/bg1.jpeg" className="w-full h-full object-cover" />
        <img src="/img/bg2.jpeg" className="w-full h-full object-cover" />
      </Carousel>
    </div>
  );
}
