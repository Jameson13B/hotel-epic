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
    const requestBody = JSON.parse(event.body);
    const currentEvent = await eventsCollection.get(requestBody.id);
    const result = await eventsCollection.update(requestBody.id, {
      attendees: [
        ...currentEvent.attendees,
        { name: requestBody.name, contact: requestBody.contact },
      ],
    });
    return { statusCode: 200, body: JSON.stringify(result.data) };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, body: JSON.stringify(error) };
  }
};
