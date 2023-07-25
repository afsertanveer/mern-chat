import React from "react";

const Chat = () => {
  return (
    <div className="flex h-screen">
      <div className="bg-white w-1/3">contacts</div>
      <div className="flex flex-col bg-blue-300 w-2/3 p-2">
        <div className="flex-grow">
            Messages with selected person
        </div>
        <div className="flex gap-2 mx-2">
          <input
            type="text"
            placeholder="Type your message"
            className="bg-white flex-grow border p-2 rounded-md"
            name=""
            id=""
          />
          <button className="bg-blue-500 p-2 text-whit rounded-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
