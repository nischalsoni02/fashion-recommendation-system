/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState } from "react";
import DataContext from "../../context/dataContext";
import classes from "./AllClothes.module.css";
import CustomImage from "./CustomImage";
import { Button, Loader, Text } from "@mantine/core";
import { edenAIApi } from "../../utils/edenAIApi";

const AllClothes = () => {
  const { allData, setAllData } = useContext(DataContext);
  const [isLoadMore, setIsLoadMore] = useState<boolean>(false);

  const loadMoreHandler = (loadPrompt: string) => {
    try {
      setIsLoadMore(true);
      edenAIApi(loadPrompt).then((res) => {
        console.log({ res });
        const newData: any = allData.map((data) => {
          if (data.prompt === loadPrompt) {
            console.log(data.prompt === loadPrompt);
            return {
              images: data.images.concat(res?.openai?.items),
              prompt: loadPrompt,
            };
          } else return data;
        });
        setAllData(newData);
        console.log({ newData });
        setIsLoadMore(false);
      });
    } catch (err) {
      console.log({ err });
    }
  };

  return (
    <section className={classes.section}>
      {allData.map(
        (resultData, index: number) =>
          resultData.prompt !== "" && (
            <div key={index} className={classes.results}>
              <Text pt={30} pb={30} pl={30} className={classes.prompt}>
                {" "}
                <b> Prompt:</b> {resultData.prompt}{" "}
              </Text>
              <div className={classes.body}>
                {resultData.images?.map((cloth: any, index: number) => {
                  return (
                    <CustomImage
                      key={index}
                      imageRef={cloth?.image}
                      imageUrl={cloth?.image_resource_url as string}
                    />
                  );
                })}
              </div>
              <Button
                onClick={() => {
                  loadMoreHandler(resultData?.prompt);
                }}
                className={classes.loadMore}
              >
                {isLoadMore ? (
                  <Loader color="white" variant="dots" />
                ) : (
                  "Load More"
                )}
              </Button>
            </div>
          )
      )}
    </section>
  );
};

export default AllClothes;
