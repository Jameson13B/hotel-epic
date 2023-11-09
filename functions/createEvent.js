const { createClient } = require("@astrajs/collections");

/**
 * .netlify/functions/createEvent
 * Uses the object on Line 22 to create new event.
 */
exports.handler = async function (event, context) {
  const astraClient = await createClient({
    astraDatabaseId: process.env.ASTRA_DB_ID,
    astraDatabaseRegion: process.env.ASTRA_DB_REGION,
    applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
  });

  const eventsCollection = astraClient
    .namespace(process.env.ASTRA_DB_KEYSPACE)
    .collection("events");

  // In the future, when creating a new event
  // we need to set the old `next` value to false.

  try {
    const event = await eventsCollection.create("pastanite", {
      name: "Name",
      date: new Date("7/21/2023"),
      details:
        "Come and enjoy a variety of pastas paired with a variety of sauces(red, white, pesto). Enjoy with a collection of wines and freshly bakes sourdough bread.",
      drink_price: 10,
      food_price: 15,
      next: false,
      host: "Nirobi Smith",
      attendees: [],
    });
    return { statusCode: 200, body: JSON.stringify(event) };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, body: JSON.stringify(error) };
  }
};
