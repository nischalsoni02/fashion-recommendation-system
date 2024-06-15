import classes from "./AllClothes.module.css";

interface Props {
  imageUrl: string;
  key?: number;
  imageRef: string;
}

const CustomImage = ({ imageUrl, imageRef }: Props) => {
  return (
      <a download="image.png" href={`data:image/png;base64,${imageRef}`}>
        <img
          src={imageUrl}
          style={{
            height: "inherit",
            width: "inherit",
          }}
          className={classes.image}
        />
      </a>
  );
};

export default CustomImage;
