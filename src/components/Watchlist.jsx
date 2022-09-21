import React from "react";
import { useContext } from "react";
import GlobalContext from "../GlobalState";
import {
  Text,
  Button,
  TagLeftIcon,
  Box,
  Stack,
  Heading,
  Image,
  Center,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { TbCheckbox } from "react-icons/tb";
import { useState } from "react";
import popcornImg from "../assets/images/popcorn.png";

function Watchlist() {
  const { watchList, addToWatched, watched, setwatchlist } =
    useContext(GlobalContext);
  const [nemp, setNemp] = useState([]);

  useEffect(() => {
    const nem = watchList.filter((item) => {
      return !watched.some((item2) => item.id === item2.id);
    });
    console.log(nem);
    setwatchlist(nem);
  }, [watched]);

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
      {watchList.length > 0 ? (
        watchList.map((movie) => {
          return (
            <div>
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
                    {movie.poster_path ? (
                      <Image
                        w="300"
                        src={
                          `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` ||
                          `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                        }
                      />
                    ) : (
                      <></>
                    )}

                    {}
                  </Box>
                  <Stack>
                    <Heading fontSize={"2xl"} fontFamily={"body"}>
                      {movie.name || movie.original_title}
                    </Heading>
                    <Button
                      onClick={() => {
                        addToWatched(movie);
                      }}
                      leftIcon={<TbCheckbox />}
                    >
                      watched
                    </Button>
                  </Stack>
                </Box>
              </Center>
            </div>
          );
        })
      ) : (
        <>
          <VStack>
            <Heading p={10}>Your watchlist is empty</Heading>
            <Text>add some movies and shows to it </Text>
            <img width="500" src={popcornImg} alt="" />
          </VStack>
        </>
      )}
    </div>
  );
}

export default Watchlist;
