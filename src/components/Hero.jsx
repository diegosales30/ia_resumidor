import { logo } from "../assets";
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() => window.open("https://github.com/diegosales30")}
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Resuma artigos com <br className="max-md:hidden" />
        <span className="orange_gradient">OpenIA GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplifique sua leitura com o Summarize, um resumidor de artigos
        open-source que transforma artigos longos em resumos claros e concisos
      </h2>
    </header>
  );
};

export default Hero;
