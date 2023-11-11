import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { ReactComponent as SearchLogo } from "../assets/search.svg";
import loadingLogo from "../assets/loading.png";

export const AdminAccess = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [event, setEvent] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!submitting) return () => {};

    if (!searchTerm) {
      return;
    }

    axios
      .get(`.netlify/functions/getEvent?id=${searchTerm}`)
      .then((results) => {
        setEvent({ ...results.data, id: searchTerm });
        setSubmitting(false);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitting]);

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
        <form
          className="flex justify-center mb-[24px]"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitting(true);
          }}
        >
          <input
            className="bg-[#cacaca] text-[darkslategrey] font-semibold rounded-[6px] text-[2rem] text-center w-full"
            id="password"
            onChange={({ target }) => setSearchTerm(target.value)}
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitting(true);
            }}
            value={searchTerm}
          />
          <button
            className="bg-[#282c34] border-[2px] border-white rounded-[8px] color-white text-[1rem] p-[8px] ml-[20px] font-bold w-[20%] flex justify-center"
            type="submit"
          >
            {submitting ? (
              <img
                width="50"
                height="50"
                src={loadingLogo}
                alt="spinner-frame-5"
              />
            ) : (
              <SearchLogo />
            )}
          </button>
        </form>
        {event && (
          <div>
            <h2 className="text-[2.5rem] font-cursive font-bold">
              {event.name}
            </h2>
            <p className="text-[0.9rem] mt-[-8px] italic">
              Hosted by {event.host}
            </p>
            <p className="text-[1.5rem] mt-[12px] italic font-bold">
              Attendees:
            </p>
            {event.attendees?.map((person) => (
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
