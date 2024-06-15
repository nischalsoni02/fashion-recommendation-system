import {
  createStyles,
  Header,
  Burger,
  Container,
  rem,
  Image,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import "./HeaderMain.css";

const useStyles = createStyles((theme) => ({
  header: {
    padding: "20px 0",
    borderColor: "#a6a8ab",
  },

  inner: {
    height: rem(70),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: "#212529",
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
  },

  linkLabel: {
    marginRight: rem(5),
  },
}));

export function HeaderMain() {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();
  const navigate = useNavigate();


  return (
    <Header height={80} className={classes.header}>
      <Container>
        <div className={classes.inner}>
          <Image
            sx={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/");
            }}
            width="200px"
            height="63px"
            src={logo}
          />
          <div className="navHeading">
            <h2>Flipkart GRID 5.0</h2>
          </div>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
            color="#fff"
          />
        </div>
      </Container>
    </Header>
  );
}

export default HeaderMain;
