export default function Hero() {
  return (
    <div
      className='flex flex-col items-center justify-center h-screen bg-[url("/bg/hero.svg")] bg-[-40rem_-25rem]'
      style={{ backgroundSize: "200% 200%" }}
    >
      <div className="text-center flex flex-col items-center">
        <h1 className=""> Design. Develop. Deliver.</h1>
        <p className="w-1/2">
          With 3 years of experience, I create web experiences that not only
          feel smooth and intuitive but also drive results. Using Vue.js’s
          reactive magic and Tailwind CSS’s utility classes, I deliver fast,
          flexible, and high-quality solutions tailored to your needs
        </p>
      </div>
      {/* <h1 className="text-4xl font-bold">Hero</h1> */}
    </div>
  );
}
