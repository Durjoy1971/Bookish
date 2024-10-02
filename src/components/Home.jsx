import React from "react";
import imageOne from "../assets/HomeOne.jpeg";
import imageTwo from "../assets/HomeTwo.jpeg";

export default function Home() {
  return (
    <div className="grid grid-rows-1 gap-4">
      <div className="flex gap-4 justify-center pt-10">
        <h1 className="max-w-[50%] text-center flex items-center font-inter">
          Welcome to Bookish - Your Personalized Book Hub
        </h1>
        <img src={imageOne} alt="reading books on sofa" className="rounded-lg shadow-gray-400 shadow-lg"/>
      </div>
      <div className="flex justify-center bg-white py-10">
        <h1 className="max-w-[90%] font-fredoka text-justify">
          Discover and keep track of your favorite books. Whether you're a
          casual reader or an avid bibliophile, explore curated collections,
          share opinions, and build your reading list!
        </h1>
      </div>
      <div className="flex justify-center gap-4">
        <h1 className="max-w-[50%] text-center font-inter items-center flex">
          Start your journey by exploring our extensive library or logging in to
          access your personalized list.
        </h1>
        <img src={imageTwo} className="h-[173px]" alt="books on tab" />
      </div>
    </div>
  );
}

/*

1. Home Page:
Text:

Welcome Title: "Welcome to [App Name] – Your Personalized Book Hub"
Description: "Discover, review, and keep track of your favorite books. Whether you're a casual reader or an avid bibliophile, explore curated collections, share opinions, and build your reading list!"
Call to Action: "Start your journey by exploring our extensive library or logging in to access your personalized list."
*/
