export default function Page() {
  return (
    <div className="py-20 px-10 h-full flex justify-center items-center">
      <form className="flex flex-col items-center gap-5 w-11/12 sm:w-4/5 md:w-2/3 lg:w-1/2 xl:w-2/5">
        <h1 className="lg:text-3xl text-2xl font-bold tracking-widest">
          Stay Tuned
        </h1>
        <p className="text-center text-sm lg:text-base">
          Subscribe my newsletter and don't miss any update on new products,
          promotions or even career events.
        </p>
        <input
          type="email"
          placeholder="Enter your email address . . ."
          className="bg-transparent border border-slate-800 focus:outline-none px-6 py-4 rounded-full w-full"
        />
        <button
          type="submit"
          className="bg-red-600 border border-slate-800 py-4 w-full rounded-full uppercase font-bold tracking-widest active:scale-95"
        >
          Subscribe me
        </button>
      </form>
    </div>
  );
}
