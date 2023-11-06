export const databaseEndpoint =
  process.env.NODE_ENV === "development"
    ? "https://kf9p4bkih6.execute-api.eu-west-1.amazonaws.com/dev/"
    : "PRODUCTION_ENDPOINT_HERE";
