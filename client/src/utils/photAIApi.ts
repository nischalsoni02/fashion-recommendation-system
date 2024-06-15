import axios from 'axios';
export const photAIApi = () => {
  const url = import.meta.env.VITE_PHOTAI_URL;

  const headers = {
    'x-api-key': import.meta.env.VITE_PHOTAI_KEY,
    'Content-Type': 'application/json',
  };
  const data = {
    prompt: 'branded shirt',
    image:
      'https://ai-image-editor-webapp.s3.us-east-2.wasabisys.com/background_generator/input_image/2023-06-12/5e7fedad-a06a-4c85-aa7e-e781ba2c160b.jpg',
    num_outputs: 2,
    aspect_ratio: '1:1',
    studio_options: {
      style: 'ascii',
    },
  };
  axios
    .post(url, data, { headers })
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log({ err });
    });
};
