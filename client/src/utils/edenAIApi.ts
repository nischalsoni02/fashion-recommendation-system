import { EDENAI } from "../enums/eden";

export const edenAIApi = async (prompt: string) => {
  const url = "https://api.edenai.run/v2/image/generation";

  const headers = {
    authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYjc1NTRhOTItMmFlNy00NjkwLTgzMmYtN2YzYjQ3ZWU1NTcxIiwidHlwZSI6ImFwaV90b2tlbiJ9.RCvFcWdRXivIJhTJWTmneOLQ8ggyc_ckErEibddW-yw`,
    "Content-Type": "application/json",
  };
  const data = {
    providers: EDENAI.PROVIDERS,
    text: prompt,
    resolution: EDENAI.RESOLUTION,
    num_images: EDENAI.NUM_IMAGES,
  };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    });
    const resData = await response.json();
    return resData;
  } catch (err) {
    console.log(err);
  }
};
