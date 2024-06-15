import { Box, Flex, Image, Stack, Text, Title } from "@mantine/core";
import classes from "./Features.module.css";
import { data } from "./data";

const Features = () => {
  return (
    <Stack className={classes.container}>
      {data.map((content, index) => (
        <Flex className={classes.card} key={index} justify="space-around" align="center">
          <Box sx={{ order: index % 2 == 0 ? 0 : 2, padding: '10px' }}>
            <Image width={300} height={300} src={content.logo} />
          </Box>
          <Box>
            <Title mb={40} >{content.title}</Title>
            <Text maw='700px' color="grey" > {content.description} </Text>
          </Box>
        </Flex>
      ))}
    </Stack>
  );
};

export default Features;
