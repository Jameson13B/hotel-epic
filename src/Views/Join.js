import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Join = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    const results = await axios.get(".netlify/functions/getEvents");
    const newEvents = [];

    for (const [key, value] of Object.entries(results.data)) {
      newEvents.push({ ...value, id: key });
    }

    setEvents(newEvents);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <React.Fragment>
      <div className="relative">
        <h1
          className="text-[5rem] mt-[15%] font-cursive relative z-10"
          onClick={() => navigate("/")}
        >
          Hotel Epic
        </h1>
        <div className="arrow-up" />
      </div>
      <h2 className="text-[2rem] mb-[16px] mt-0 font-copperplate">Join Us</h2>

      {events[0] ? (
        <React.Fragment>
          <div className="border border-white rounded-[16px] p-[16px] mt-[16px] max-w-[500px]">
            <h3 className="text-[2rem] font-cursive font-bold">
              {events[0]?.name}
            </h3>
            <p className="text-[0.9rem] mt-[-8px] italic">
              Hosted by {events[0]?.host}
            </p>
            <p className="text-[0.9rem] mt-[12px] italic">
              <strong>When:</strong> {format(events[0].date, "E MMM do @ hb")}
            </p>
            <p className="text-[0.9rem] mt-[12px] italic">
              <strong>Details:</strong> {events[0]?.details}
            </p>
            <p className="text-[0.9rem] mt-[16px] italic flex justify-evenly">
              <strong>Food Price: ${events[0]?.food_price}</strong>
              <strong>Drink Price: ${events[0]?.drink_price}</strong>
            </p>
            <button
              className="border border-2 border-white rounded-[8px] mt-[16px] mb-[8px] p-[6px] font-bold text-[0.8rem] w-3/4 max-w-[300px]"
              onClick={() =>
                navigate(`/form`, {
                  replace: true,
                  state: { id: events[0].id },
                })
              }
            >
              Interested in Event?
            </button>
          </div>
          <h4 className="mt-[12px] font-bold">Previous Events:</h4>
          {events
            .filter((_, i) => i !== 0)
            .map((event) => (
              <div
                className="border border-white rounded-[16px] p-[16px] my-[8px] w-full max-w-[500px]"
                key={event.name}
              >
                <h3 className="margin-0 text-[1.25rem]">{event.name}</h3>
              </div>
            ))}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <h2 className="font-bold text-[2rem]">Hang in there!</h2>
          <h3 className="font-semibold text-[1.5rem] mt-[8px]">
            Getting Events...
          </h3>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
