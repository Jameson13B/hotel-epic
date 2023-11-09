const { createClient } = require("@astrajs/collections");

/**
 * .netlify/functions/updateEvent
 * Include event ID and updates in object on Line 19.
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

  try {
    const result = await eventsCollection.update("ID", {
      host: "Nairobi Smith",
    });
    return { statusCode: 200, body: JSON.stringify(result) };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, body: JSON.stringify(error) };
  }
};
