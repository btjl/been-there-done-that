import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export const MapEmbed = ({
  placeId,
  placeName,
  latitude,
  longitude,
  zoom = 15,
  mapType = "roadmap",
}) => {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const apiKey = customFields.gMapsEmbedApiKey as string;

  let embedUrl: string;

  if (placeName) {
    // Use placeName as query
    embedUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(
      placeName
    )}`;
  } else if (placeId) {
    // Use place_id only, no q param
    embedUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=place_id:${placeId}`;
  } else if (latitude !== undefined && longitude !== undefined) {
    embedUrl = `https://www.google.com/maps/embed/v1/view?key=${apiKey}&center=${latitude},${longitude}&zoom=${zoom}&maptype=${mapType}`;
  } else {
    return (
      <div
        style={{
          padding: 20,
          border: "1px solid #ff4d4d",
          background: "#fff5f5",
          borderRadius: "8px",
        }}
      >
        MapEmbed component error: Please provide a `placeId` or `placeName` or both
        `latitude` and `longitude`.
      </div>
    );
  }

  return (
    <iframe
      title={
        placeName
          ? `Map of ${placeName}`
          : placeId
            ? "Map of place"
            : "Location map"
      }
      width="100%"
      height="450"
      loading="lazy"
      allowFullScreen
      src={embedUrl}
      style={{ border: 0, borderRadius: "8px" }}
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};
