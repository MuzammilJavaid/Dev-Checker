import React, { useState } from "react";

function App() {
  const [msgPara1, setMsgPara1] = useState("");
  const [msgPara2, setMsgPara2] = useState("");
  const [checkMsg1, setCheckMsg1] = useState("");
  const [checkMsg2, setCheckMsg2] = useState("");

  const handleChangePara1 = (event) => {
    setMsgPara1(event.target.value);
  };

  const handleChangePara2 = (event) => {
    setMsgPara2(event.target.value);
  };

  const handleSubmit = () => {
    if (!msgPara1 || !msgPara2) {
      alert("Please fill in both paragraphs!");
      return;
    }

    const formattedMsg1 = compareWords(msgPara1, msgPara2);
    const formattedMsg2 = compareWords(msgPara2, msgPara1, false);

    setCheckMsg1(formattedMsg1);
    setCheckMsg2(formattedMsg2);
  };

  const compareWords = (para1, para2, isFirst = true) => {
    const words1 = para1.split(/\s+/);
    const words2 = para2.split(/\s+/);
    const maxLength = Math.max(words1.length, words2.length);
    let formattedMsg = [];

    for (let i = 0; i < maxLength; i++) {
      if (words1[i] !== words2[i]) {
        formattedMsg.push(
          <span
            key={i}
            style={{
              backgroundColor: isFirst ? "red" : "green",
              fontWeight: "bold",
            }}
          >
            {words1[i]}
          </span>,
          " "
        );
      } else {
        formattedMsg.push(<span key={i}>{words1[i]}</span>, " ");
      }
    }

    return formattedMsg;
  };

  return (
    <div className="w-screen h-screen bg-gray-700 flex flex-col justify-center items-center gap-5 px-40">
      <div className="w-full bg-white text-center py-5 rounded-xl">
        <h1 className="text-3xl font-[600]">Diff Checker</h1>
      </div>
      <div className="w-full flex justify-between">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-3xl font-[600] text-white">Paragraph 1</h2>
          <textarea
            value={msgPara1}
            onChange={handleChangePara1}
            placeholder="Enter any message..."
            rows={8}
            cols={50}
            className="rounded-lg p-4 text-xl"
          />
        </div>
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-3xl font-[600] text-white">Paragraph 2</h2>
          <textarea
            value={msgPara2}
            onChange={handleChangePara2}
            placeholder="Enter any message..."
            rows={8}
            cols={50}
            className="rounded-lg p-4 text-xl"
          />
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="text-3xl text-white bg-green-500 rounded-2xl p-4 hover:bg-green-700"
      >
        Generate
      </button>
      <div className="w-full flex justify-between gap-48">
        <div className="w-full bg-white rounded-lg overflow-auto p-4">
          <p className="w-full bg-red-200 text-xl">{checkMsg1}</p>
        </div>
        <div className="w-full bg-white rounded-lg overflow-auto p-4">
          <p className="w-full bg-green-200 text-xl">{checkMsg2}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
