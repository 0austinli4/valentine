import { useState } from "react";
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Riri are you really sure?",
      "Riri please!",
      "RIRIIRIII!",
      "man",
      "bruh",
      "riri cmon",
      "ur so mean",
      "pleaseeeeeeee",
      "i'll give you massage everyday",
      ">:(",
      "riri this is not funny anymore",
      "i'm gonna cry",
      "ririiiiiiiiiiiiiiiiiiii",
      "You're breaking my heart ;(",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      " : (",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <>
          <div className="fixed inset-0 pointer-events-none z-0">
            <img 
              src="/src/assets/IMG_0955.JPG" 
              alt="Memory 1" 
              className="absolute top-[10%] left-[5%] w-48 h-48 object-cover rotate-[-12deg] shadow-lg"
            />
            <img 
              src="/src/assets/IMG_1326.JPG" 
              alt="Memory 2" 
              className="absolute top-[60%] right-[10%] w-56 h-56 object-cover rotate-[8deg] shadow-lg"
            />
            <img 
              src="/src/assets/IMG_3396.JPG" 
              alt="Memory 3" 
              className="absolute top-[30%] left-[70%] w-40 h-40 object-cover rotate-[15deg] shadow-lg"
            />
            <img 
              src="/src/assets/IMG_7788.JPG" 
              alt="Memory 4" 
              className="absolute bottom-[20%] left-[15%] w-52 h-52 object-cover rotate-[-5deg] shadow-lg"
            />
            <img 
              src="/src/assets/IMG_2711 2.JPG" 
              alt="Memory 5" 
              className="absolute bottom-[10%] right-[25%] w-44 h-44 object-cover rotate-[10deg] shadow-lg"
            />
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center">
            <img src="https://media.giphy.com/media/FqHTyEllkHxAY/giphy.gif" alt="Charlie Brown Valentine's Day GIF" />
            <div className="text-4xl md:text-6xl font-bold my-4 text-white">
              Yayyyyy I LOVE YOUOOUUUU!
            </div>
          </div>
        </>
      ) : (
        <>
          <img
            src={lovesvg}
            className="fixed animate-pulse top-10 md:left-24 left-6 md:w-40 w-28"
          />
          <img
            src={lovesvg2}
            className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32"
          />
          <img
            className="h-[230px] rounded-lg shadow-lg"
            src="https://media.giphy.com/media/MW27DzJThGD3a/giphy.gif"
            alt="Charlie Brown Valentine's Day GIF"
          />
          <h1 className="text-4xl md:text-6xl my-4 text-center text-white">
            Dear Riri, will you be my Valentine?
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <a
      className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-1 rounded border-rose-300"
      href="https://github.com/Xeven777/valentine"
      target="__blank"
    >
      Made with{" "}
      <span role="img" aria-label="heart">
        ❤️
      </span>
    </a>
  );
};
