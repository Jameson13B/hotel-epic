const { createClient } = require("@astrajs/collections");

exports.handler = async function (event, context) {
  const astraClient = await createClient({
    astraDatabaseId: process.env.ASTRA_DB_ID,
    astraDatabaseRegion: process.env.ASTRA_DB_REGION,
    applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
  });

  const eventsCollection = astraClient
    .namespace(process.env.ASTRA_DB_KEYSPACE)
    .collection("events");

  try {
    const event = await eventsCollection.create("taconite", {
      name: "New Event",
      date: "TBD",
      details:
        "Come and enjoy a variety of tacos(asada, al pastor, nopales) paired with a variety of salsas(rojo, verde, aguacate). Enjoy with homemade Mojitos made with fresh mint and real sugar.",
      drink_price: 7,
      food_price: 10,
      next: true,
      host: "Jimmy Bell",
      attendees: [],
    });
    return { statusCode: 200, body: JSON.stringify(event) };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, body: JSON.stringify(error) };
  }
};
