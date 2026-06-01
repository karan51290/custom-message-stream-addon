module.exports = async (req, res) => {
  const path = req.url;

  res.setHeader("Access-Control-Allow-Origin", "*");

  // Manifest
  if (path.includes("manifest.json")) {
    return res.json({
      id: "org.miglanis.fallback",
      version: "1.0.0",
      name: "Fallback Message",
      description: "Shows a message when no streams are available",
      resources: ["stream"],
      types: ["movie", "series"],
      idPrefixes: [""]
    });
  }

  // Stream response
  return res.json({
    streams: [
      {
        title: "⚠️Please Contact Your Service Provider to renew⚠️",
        //externalUrl: "https://youtube.com/watch?v=YOUR_VIDEO_ID"
      }
    ]
  });
};
