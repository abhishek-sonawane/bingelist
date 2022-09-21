import React from "react";
import { useContext } from "react";
import {
  Text,
  Button,
  TagLeftIcon,
  Box,
  Stack,
  Heading,
  Image,
  Center,
} from "@chakra-ui/react";
import GlobalContext from "../GlobalState";

function Watched() {
  const { watched } = useContext(GlobalContext);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "3em",
      }}
    >
      {watched.length > 0 ? (
        watched.map((item) => {
          return (
            <>
              <Center>
                <Box
                  maxW={"300px"}
                  w={"full"}
                  // bg={useColorModeValue('white', 'gray.900')}
                  boxShadow={"2xl"}
                  rounded={"md"}
                  p={6}
                  overflow={"hidden"}
                >
                  <Box
                    // h={'210px'}
                    bg={"gray.100"}
                    mt={-6}
                    mx={-6}
                    mb={6}
                  >
                    {item.poster_path ? (
                      <Image
                        w="300"
                        src={
                          `https://image.tmdb.org/t/p/original/${item.backdrop_path}` ||
                          `https://image.tmdb.org/t/p/original/${item.poster_path}`
                        }
                      />
                    ) : (
                      <></>
                    )}

                    {}
                  </Box>
                  <Stack>
                    <Heading fontSize={"2xl"} fontFamily={"body"}>
                      {item.name || item.original_title}
                    </Heading>
                  </Stack>
                </Box>
              </Center>
            </>
          );
        })
      ) : (
        <>
          <Center>
            <Heading>No movies watched yet !</Heading>
          </Center>
        </>
      )}
    </div>
  );
}

export default Watched;
