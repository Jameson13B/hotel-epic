import React from "react";
import { useNavigate } from "react-router-dom";

export const Authentication = ({ handleOAuth, password, feedback }) => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div className="relative">
        <h1
          className="text-[5rem] mt-[15%] font-cursive relative z-10 cursor-pointer"
          onClick={() => navigate("/")}
        >
          Hotel Epic
        </h1>
        <div className="arrow-up" />
      </div>
      <h2 className="text-[2rem] mb-[16px] mt-0 font-copperplate">
        Admin Menu
      </h2>
      <p>Not Authenticated. Login to continue.</p>

      <form
        className="flex flex-col items-center text-[1.3rem] mt-[2rem] max-w-[400px] w-full"
        onSubmit={handleOAuth}
      >
        <label
          className="text-start font-bold text-[2rem] mb-[12px]"
          htmlFor="password"
        >
          Password:
        </label>
        <input
          autoFocus={true}
          className="bg-[#cacaca] text-[darkslategrey] font-semibold rounded-[6px] mb-[24px] text-[2rem] text-center p-[6px] w-full"
          id="password"
          onChange={({ target }) => password.set(target.value)}
          type="password"
          value={password.get}
        />
        {feedback && (
          <label className="text-start text-[red] font-bold text-[1.5rem] mb-[12px]">
            {feedback.get}
          </label>
        )}
      </form>
    </React.Fragment>
  );
};
