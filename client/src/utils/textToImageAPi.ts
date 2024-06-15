export const textToImageApi = async (searchData: string) => {
  const response = await fetch(import.meta.env.VITE_SERPER_URL, {
    method: "post",
    headers: {
      "X-API-KEY": import.meta.env.VITE_SERPER_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      q: searchData,
    }),
  });

  const responseData = await response.json();
  return responseData;
};
