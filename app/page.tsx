'use client'

import Image from "next/image";
import React, { useState } from "react";
import CodeEditor from '@uiw/react-textarea-code-editor';


export default function Home() {
  const [code, setCode] = useState(
    `function add(a, b) {\n  return a + b;\n}`
  );
  return (
    <div className="flex w-full min-h-screen dark:bg-neutral-800">
      <section id="sidebar"
        className="w-64 dark:bg-neutral-600 rounded-r-xl p-4">
        <h1 className="dark:text-white font-black drop-shadow dark:bg-neutral-800 p-4 rounded-xl text-center
          ">SHORTCUTS TRAINER</h1>
      </section>
      <main id="editor"
        className="flex-grow h-full flex flex-col">
        <div style={{ backgroundColor: "#111111" }}
          className="h-48 w-full flex justify-center items-center">
          <div className=" h-32 w-4/5 p-4 rounded-2xl shadow dark:bg-neutral-700  ">
            <h2 className="font-bold text-xl">Instructions</h2>
            <div  className="flex gap-2">
              <p>do this</p>
              <p>create new line </p>
            </div>
            <div className="flex gap-2">
              <p>hint:</p>
              <div>
                key combination will go here
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
            fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
          }}
        />
      </main>

    </div>
  );
}
