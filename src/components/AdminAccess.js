import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AdminAccess = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [event, setEvent] = useState(null);

  const getEvent = async (e) => {
    e.preventDefault();

    if (!searchTerm) {
      return;
    }

    const results = await axios.get(
      `.netlify/functions/getEvent?id=${searchTerm}`
    );

    setEvent({ ...results.data, id: searchTerm });
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
      <h2 className="text-[2rem] mb-[8px] mt-0 font-copperplate">Admin Menu</h2>
      <div>
        <p className="text-[green] text-[1.15rem] font-bold mb-[16px]">
          *Authenticated*
        </p>
        <form onSubmit={getEvent}>
          <input
            className="bg-[#cacaca] text-[darkslategrey] font-semibold rounded-[6px] mb-[24px] text-[2rem] text-center p-[4px] w-full"
            id="password"
            onChange={({ target }) => setSearchTerm(target.value)}
            onSubmit={getEvent}
            value={searchTerm}
          />
          <button
            className="bg-[#282c34] border-[2px] border-white rounded-[8px] color-white text-[1rem] py-[8px] font-bold mt-[12px] w-full max-w-[600px]"
            type="submit"
          >
            Get Event
          </button>
        </form>
        {event && (
          <div>
            <h2 className="text-[2rem] font-cursive font-bold">{event.name}</h2>
            <p className="text-[0.9rem] mt-[-8px] italic">
              Hosted by {event.host}
            </p>
            <p className="text-[1.25rem] mt-[12px] italic font-bold">
              Attendees:
            </p>
            {event.attendees.map((person) => (
              <p key={person.contact}>
                {person.name} - {person.contact}
              </p>
            ))}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};
