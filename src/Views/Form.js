import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export const Form = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [joinResp, setJoinResp] = useState(null);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  const joinEvent = (e) => {
    e.preventDefault();
    if (!name || !contact) {
      return setJoinResp("Error: Missing name and email/phone number.");
    }

    axios
      .post(".netlify/functions/rsvp4Event", {
        name,
        contact,
        id: location.state.id,
      })
      .then(() => setJoinResp("Success! See you soon."))
      .catch(() => setJoinResp("Error - Please try again."));
  };

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
      <h2 className="text-[2rem] mb-[16px] mt-0 font-copperplate">Form</h2>
      <p>
        Fill out this form to request more info and the location for the next
        event.
      </p>
      <em className="text-[0.75rem] mb-[24px] to-0">
        This isn't a commitment. Things happen and plans change. If you need to
        cancel, no problem, just let us know.
      </em>

      <form className="flex flex-col text-[1.3rem] max-w-[400px] w-full">
        <label className="text-start mb-[12px]" htmlFor="name">
          Name:
        </label>
        <input
          autoFocus={true}
          className="bg-[#cacaca] text-[darkslategrey] font-semibold rounded-[6px] mb-[24px] text-[1rem] p-[6px]"
          id="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label className="text-start mb-[12px]" htmlFor="contact">
          Email or Phone Number:
        </label>
        <input
          className="bg-[#cacaca] text-[darkslategrey] font-semibold rounded-[6px] mb-[24px] text-[1rem] p-[6px]"
          id="contact"
          onChange={(e) => setContact(e.target.value)}
          value={contact}
        />
        {joinResp && (
          <p
            className={`mt-[6px] mb-[12px] text-[1rem] font-bold ${
              joinResp.includes("Success!") ? "text-[green]" : "text-[red]"
            }`}
          >
            {joinResp}
          </p>
        )}
        <button
          className="bg-[#282c34] border-[2px] border-white rounded-[8px] color-white text-[1rem] py-[8px] font-bold mt-[12px] w-full max-w-[600px]"
          onClick={joinEvent}
        >
          Submit
        </button>
        <button
          className="bg-[#282c34] border border-white rounded-[8px] color-white text-[1rem] py-[8px] mt-[16px] w-full max-w-[600px]"
          onClick={() => navigate("/join")}
        >
          Back
        </button>
      </form>
    </React.Fragment>
  );
};
