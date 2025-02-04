"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [yesSize, setYesSize] = useState(2);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [showMessage, setShowMessage] = useState(false);
  const [showConversation, setShowConversation] = useState(true);

  useEffect(() => {
    const audio = new Audio("/background-music.mp3");
    audio.loop = true;
    audio.volume = 0.5;
    audio.play();
  }, []);

  const handleNoClick = () => {
    setNoCount(noCount + 1);
    setYesSize(yesSize * 1.3);
    setNoPosition({
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
    });
  };

  const resetToStart = () => {
    setYesPressed(false);
    setYesSize(2);
    setNoCount(0);
    setNoPosition({ x: 0, y: 0 });
    setShowConversation(true);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Don't you dare",
      "Stop bullying me 🙄",
      "No fucking way 🥱",
      "Are you sure? 😧 ",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Have a heart! Pwease 🥺",
      "You're breaking my heart ;(",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-pink-200 to-red-300">
      <AnimatePresence mode="wait">
        {showConversation ? (
          <motion.div
            key="conversation"
            className="text-center animate-fade-in"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-red-600">
              Hello Kutty Madam 👻
            </h1>
            <p className="text-lg font-bold text-gray-700 mt-4 max-w-4xl">
              Happy 3 Month Anniversary To The Love Of My Life 😘 <br />
              These past months with you have been nothing but a romantic
              adventure.. <br />
              Something I got out of the blue and deserved it for absolutely
              nothing.. <br />
              Something that made me feel worth it and adored for the first time
              truly.. <br />
              So many emotions, laughter, tears, anger, smile, hugs, kisses, had
              both happy and sad times.. <br />
              But these were all just the ingredients we both are using together
              to cook this fine dinner called Love.. <br />
              Thank you for your love.. I'm blessed to be yours my dear.. <br />{" "}
              I'd do anything to make our journey a boundless book full of
              different chapters.. <br />
              Cheers to My Guardian Angel for many more years..
              <br />
              And on that note.. Soooo, Your Piggy 🐽, I, just wanted to ask you
              something........
            </p>
            <motion.button
              className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-6 rounded mt-6"
              onClick={() => setShowConversation(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Next 💛
            </motion.button>
          </motion.div>
        ) : yesPressed ? (
          <AnimatePresence mode="wait">
            {showMessage ? (
              <motion.div
                key="message"
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl font-bold text-red-600">
                  Thank You For Everything..
                </h1>
                <p className="text-lg font-bold text-gray-700 mt-4 max-w-3xl">
                  From the moment we got together, my world has been brighter
                  and keeps getting brighter. Your Smile is My Favorite Sight,
                  Your Laughter is My Favorite Melody. You are My Love, My Partner, My Kutty,
                  My Biggest Supporter, My Best Friend, My Lady,
                  the one who has taken over My Heart completely forever and
                  will always.. Finally you are My Life and Everything.. Mine
                  Love Mine All Mine... I cherish every moment with you, and I
                  can't wait to make even more beautiful memories together. I
                  love you endlessly my dear. ❤️
                </p>
                <div className="grid grid-cols-3 gap-8 mt-6">
                  <motion.img
                    className="border-4 border-red-500 rounded-lg shadow-lg"
                    src="/photo1.jpg"
                    alt="Us 1"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.img
                    className="border-4 border-red-500 rounded-lg shadow-lg"
                    src="/photo2.jpg"
                    alt="Us 2"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.img
                    className="border-4 border-red-500 rounded-lg shadow-lg"
                    src="/photo3.jpg"
                    alt="Us 3"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <motion.button
                  className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded mt-6"
                  onClick={resetToStart}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Back to Start
                </motion.button>
              </motion.div>
            ) : (
              <>
                <Confetti numberOfPieces={300} recycle={false} />
                <motion.img
                  className="border-4 border-red-500 rounded-lg shadow-lg"
                  src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
                  alt="Love GIF"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div
                  className="text-4xl font-bold text-gray-600 animate-pulse"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Seeeeee.. I knew itttttttt!!!! <br /> (phewwwwwwwwwwwwww) <br />{" "}
                  that was close.. thank god 😵😵‍💫 <br /> I know you loveee
                  meeee 😌🥰 <br /> You are MYYYYY Apeksha Kuttyy <br /> I Love
                  You So Much! 😘🐽❤️
                </motion.div>
                <motion.button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mt-4 animate-bounce"
                  onClick={() => setShowMessage(true)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Press Me 😩
                </motion.button>
              </>
            )}
          </AnimatePresence>
        ) : (
          <>
            <motion.img
              className="h-[200px] border-4 border-red-500 rounded-lg shadow-lg animate-spin-slow"
              src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
              alt="Cute Bear"
            />
            <motion.h1
              className="text-4xl my-4 text-red-600 font-bold animate-wiggle"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Apeksha my love, will you be mine.. Forever? <br /> Will you be my
              first and only Valentine? 🥺🥰💖
            </motion.h1>
            <div className="relative">
              <motion.button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded mr-4"
                style={{ fontSize: `${yesSize}rem`, padding: `${yesSize / 2}rem` }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setYesPressed(true);
                }}
              >
                Yes
              </motion.button>
              <motion.button
                onClick={handleNoClick}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-xl absolute"
                animate={{ x: noPosition.x, y: noPosition.y }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                {getNoButtonText()}
              </motion.button>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
