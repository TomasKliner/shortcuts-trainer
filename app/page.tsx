"use client";

import Image from "next/image";
import React, { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";

export default function Home() {
  type TaskData = {
    task: string;
    keyCombination: string;
  };
  const data: TaskData[] = [
    {
      task: "Create new line",
      keyCombination: "ctrl+n",
    },
  ];

  function convertKeyCombinationToArray(s: string) {
    const arr = s.split("+");
    return arr;
  }

  console.log(data[0].keyCombination);
  console.log(
    convertKeyCombinationToArray(data[0].keyCombination).map((x) => "ar" + x)
  );

  const [code, setCode] = useState(`function add(a, b) {\n  return a + b;\n}`);
  return (
    <div className="dark flex w-full min-h-screen bg-neutral-800">
      <section id="sidebar" className="w-64 bg-neutral-600 rounded-r-xl p-4">
        <h1
          className="text-white font-black drop-shadow bg-neutral-800 p-4 rounded-xl text-center
          "
        >
          SHORTCUTS TRAINER
        </h1>
      </section>
      <main id="editor" className="flex-grow h-full flex flex-col">
        <div
          style={{ backgroundColor: "#111111" }}
          className="h-48 w-full flex justify-center items-center text-white"
        >
          <div className=" h-36 w-4/5 p-4 shadow mockup-window bg-base-300 flex flex-col justify-between ">
            <h2 className="font-bold text-xl">Instructions</h2>
            <div className="flex gap-2">
              <p className="font-bold">Task: </p>
              <p>{data[0].task} </p>
            </div>
            <div className="flex gap-2 items-center">
              <p className="font-bold">hint:</p>
              <div className="flex flex-wrap items-center">
                {convertKeyCombinationToArray(data[0].keyCombination).map(
                  (x) => {
                    return <kbd className="kbd kbd-md" data-theme="dark">{x}</kbd>;
                  }
                )}
                {}
              </div>
            </div>
          </div>
        </div>
        <CodeEditor
          className="flex-grow h-full w-full"
          value={code}
          language="js"
          placeholder="Please enter JS code."
          onChange={(evn) => setCode(evn.target.value)}
          padding={15}
          style={{
            backgroundColor: "#111111",
            fontFamily:
              "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
          }}
        />
      </main>
    </div>
  );
}
