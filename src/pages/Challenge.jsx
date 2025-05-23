import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Challenge = () => {
  return (
    <div className="bg-Background text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center px-6 py-20">
        <h1 className="text-4xl font-bold text-primary">Challenge</h1>
      </main>
      <Footer />
    </div>
  );
};

export default Challenge;
