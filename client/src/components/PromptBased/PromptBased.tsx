/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useContext } from "react";
import DataContext from "../../context/dataContext";
import classes from "./promptBased.module.css";
import { Title, Textarea, Button, Loader } from "@mantine/core";
import { edenAIApi } from "../../utils/edenAIApi";

const PromptBased = () => {
  const [prompt, setPrompt] = useState<string>(
    localStorage.getItem("prompt") || ""
  );
  const {  setIsLoading, isLoading, setAllData } = useContext(
    DataContext
  );

  const handleSearch = () => {
    localStorage.setItem("prompt", prompt);
    try {
      setIsLoading(true);
      edenAIApi(prompt).then((res) => {
        console.log({ res });
        setAllData((prev) => [
          {
            images: res?.openai?.items,
            prompt: prompt,
          },
          ...prev,
        ]);

        setIsLoading(false);
      });
    } catch (err) {
      console.log({ err });
    }
  };

  return (
    <section>
      <div className={classes.container}>
        <div className={classes.prompt}>
          <div className={classes.promptHeading}>
            <Title order={2} mb={6}>
              Describe your fashion
            </Title>
          </div>
          <Textarea
            placeholder="A floral frock with natural colors..."
            description="What do you want to wear, you can use a single word or complete sentence"
            withAsterisk
            autosize
            value={prompt}
            minRows={6}
            className={classes.promptBox}
            onChange={(e: any) => {
              setPrompt(e.target.value);
            }}
          />
          <div className={classes.searchButton}>
            <Button
              disabled={prompt.length === 0}
              sx={{
                width: "50%",
                background: "linear-gradient(90deg,#04a0f4,#11b7da,#23d5b8)",
              }}
              onClick={handleSearch}
            >
              {isLoading ? <Loader color="white" variant="dots" /> : "Generate"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PromptBased;
