module.exports = async (req, res) => {
  const path = req.url;

  res.setHeader("Access-Control-Allow-Origin", "*");

  // Manifest
  if (path.includes("manifest.json")) {
    return res.json({
      id: "org.premiumzone.fallback",
      version: "1.0.0",
      name: "Subscription Expired Message",
      description: "Shows a Subscription Expired Message",
      resources: ["stream"],
      types: ["movie", "series"],
      idPrefixes: [""]
    });
  }

  // Stream response
  return res.json({
    streams: [
      {
        title: "⚠️Please Contact Your Service Provider to renew Subscription⚠️",
        externalUrl: "https://youtube.com/watch?v=YOUR_VIDEO_ID"
      }
    ]
  });
};
