import React from "react";
import { useState, useContext } from "react";
import GlobalContext from "../GlobalState";
import { Input } from "@chakra-ui/react";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Button,
  Tooltip,
  HStack,
  Spinner,
  Image,
} from "@chakra-ui/react";
import { BsFillBookmarkPlusFill, BsBookmarkCheckFill } from "react-icons/bs";
import { GoSearch } from "react-icons/go";

function Homepage() {
  const [query, setQuery] = useState("");

  const InputHandler = (e) => {
    setQuery(e.target.value);
    // console.log(e.target.value)
  };

  const submitHandler = (e) => {
    e.preventDefault();
    findResults(query);
    setQuery("");
  };

  const { addtoList, watchList, homeFeed, findResults, results } =
    useContext(GlobalContext);

  return (
    <div>
      <form onSubmit={submitHandler} style={{ padding: "4em" }}>
        <Center>
          <HStack>
            <Input
              placeholder="search movies"
              width={"100%"}
              value={query}
              onChange={InputHandler}
              type="text"
            />{" "}
            <Button type="submit">
              <GoSearch />
            </Button>
          </HStack>
        </Center>
      </form>
      <div>
        {/* <Heading>search query</Heading> */}
        {results.length > 0 && (
          <ul>
            {results.map((movie) => {
              let checkAvailable = watchList.find(
                (item) => item.id === movie.id
              );
              let val = checkAvailable ? true : false;

              return (
                <>
                  {/* <li style={{listStyle:'none'}} >{movie.title}</li>  */}
                  <Center py={6}>
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
                        <Image
                          w="300"
                          src={
                            `https://image.tmdb.org/t/p/original/${movie.poster_path}` ||
                            `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                          }
                        />

                      </Box>
                      <Stack>
                       
                        <Heading
                          fontSize={"2xl"}
                          fontFamily={"body"}
                        >
                          {movie.name || movie.original_title}
                        </Heading>
                        <Button
                          rightIcon={
                            val ? (
                              <BsBookmarkCheckFill color="#fff" />
                            ) : (
                              <BsFillBookmarkPlusFill />
                            )
                          }
                          className="button"
                          _hover={{}}
                          isDisabled={val}
                          onClick={() => {
                            addtoList(movie);
                          }}
                          width={""}
                          bg="rgb(44, 158, 114)"
                          textColor="white"
                          colorScheme="steelblue"
                          variant="outline"
                        >
                          add to watchlist
                        </Button>
                      </Stack>
                    </Box>
                  </Center>
                </>
              );
            })}
          </ul>
        )}
      </div>

      {/* trending section */}

      <div style={{ textAlign: "center", margin: "0 auto" }}>
        <Heading fontSize="4xl" padding="1em">
          Trending
        </Heading>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            gap: "1em",
            justifyContent: "center",
          }}
          className="feed"
        >
          {homeFeed.results ? (
            homeFeed.results.map((item) => {
              let checkAvailable2 = watchList.find(
                (movie) => movie.id === item.id
              );
              let val2 = checkAvailable2 ? true : false;
              return (
                <Box w="300px" position="relative">
                  <img
                    style={{ borderRadius: "8px" }}
                    src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    alt=""
                  />
                  <Tooltip label="add to watchlist">
                    <Button
                      p="0"
                      bg="none"
                      border="0"
                      fontSize="4xl"
                      isDisabled={val2}
                      onClick={() => {
                        addtoList(item);
                      }}
                      _hover={{ cursor: "pointer", color: "#dedede" }}
                      color="#fff"
                      position="absolute"
                      left="1px"
                      top="10px"
                    >
                      {val2 ? (
                        <BsBookmarkCheckFill color="#fff" />
                      ) : (
                        <BsFillBookmarkPlusFill />
                      )}
                    </Button>
                  </Tooltip>
                </Box>
              );
            })
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
