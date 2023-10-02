export const getTimeStamps = () => {
  const today = new Date();
  const curTime = today.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return curTime;
};

export const getFullDateTime = () => {
  const fullDateTime = new Date().toLocaleString();

  return fullDateTime;
};
