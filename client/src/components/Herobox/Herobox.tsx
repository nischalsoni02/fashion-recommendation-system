import { Button, Text, Title } from "@mantine/core";
import classes from "./Herobox.module.css";
import { useNavigate } from "react-router-dom";

const Herobox = () => {
  const navigate = useNavigate();

  return (
    <section>
      <section className={classes.main}>
        <div className={classes.body}>
          <Title color="grey" mb={30}>
            {" "}
            Welcome to While Collection{" "}
          </Title>
          <Text>
            At Fashion Flair, we believe that fashion is more than just
            clothing, it's an expression of your personality and a way to
            showcase your unique style. Our app is designed to empower you with
            the latest fashion trends, AI-driven outfit suggestions, and a
            curated collection of top-quality clothing, accessories, and
            footwear.
          </Text>
          <Button
            className={classes.generateBtn}
            pb={10}
            pt={10}
            onClick={() => {
              navigate("/generate");
            }}
          >
            Let's Create
          </Button>
        </div>
      </section>
    </section>
  );
};

export default Herobox;
