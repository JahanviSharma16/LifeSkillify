import { first } from "../../helper/images";
import { CardStackDemo } from "./Cards";

const First = () => {
  return (
    <section className="pt-32 min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6">
      {/* <img src={first} alt="Life skills vector" className="w-full md:w-1/2" /> */}
      <CardStackDemo/>
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-extrabold mb-4 text-primary">
          LifeSkillify
        </h1>
        <p className="text-xl text-grayDark">
          Master everyday life skills, one day at a time ✨
        </p>
      </div>
    </section>
  );
};

export default First;
