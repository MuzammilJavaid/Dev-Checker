import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState([]);
  const [msgPara1, setMsgPara1] = useState("");
  const [msgPara2, setMsgPara2] = useState("");

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

    const formattedMessage = formatMessage(msgPara1, msgPara2);
    setMessage(formattedMessage);
    // setMsgPara1("");
    // setMsgPara2("");
  };

  const formatMessage = (para1, para2) => {
    const maxLength = Math.max(para1.length, para2.length);
    let formattedMsg = [];

    for (let i = 0; i < maxLength; i++) {
      const char1 = para1[i];
      const char2 = para2[i];

      if (char1 !== char2) {
        formattedMsg.push(
          <span key={i} style={{ color: "red", fontWeight: "bold" }}>
            {char2}
          </span>
        );
      } else {
        formattedMsg.push(<span key={i}>{char2}</span>);
      }
    }

    return formattedMsg;
  };

  return (
    <div className="w-screen h-screen bg-gray-700 flex flex-col justify-center items-center gap-5 px-40">
      <div className="w-full bg-white text-center py-5 rounded-xl">
        <h1 className="text-3xl font-[600]">Comparing The Paragraphs</h1>
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
        className="text-3xl text-white bg-green-500 rounded-3xl p-4 hover:bg-green-700"
      >
        Submit
      </button>
      <div className="w-full bg-white rounded-lg overflow-auto p-4">
        <p className="text-xl">{message}</p>
      </div>
    </div>
  );
}

export default App;
