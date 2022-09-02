import React from 'react'
import { useState ,useContext } from 'react'
import GlobalContext from '../GlobalState';
import {
    Input
} from '@chakra-ui/react'
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Button,
    Avatar,
    Image,
    useColorModeValue,
  } from '@chakra-ui/react';

function Search() {

    const [query,setQuery] = useState('')
    const [results, setResults] = useState([])
  
    const InputHandler = (e)=>{
      setQuery(e.target.value)
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=e217f95a07dcdcd6365156de25eafdfc&page=1&query=${e.target.value}`).then((res)=>res.json()).then((data)=>{if(!data.errors){
        console.log(data.results)
        setResults(data.results)
      }
      else{
        setResults([])
      }
    })
    }

    const {addtoList,watchList} = useContext(GlobalContext)
   

  return (
    <div>
       
         <Input placeholder='search movies'  m={20} w={500} value={query} onChange={InputHandler} type="text" />
     <div>
      {results.length>0 && <ul >
        {
          results.map((movie)=>{
            let checkAvailable = watchList.find(item=>item.id === movie.id)
            let val = checkAvailable ? true:false
            
           return (
            
            <>
             {/* <li style={{listStyle:'none'}} >{movie.title}</li>  */}
            <Center py={6}>
      <Box
        maxW={'350px'}
        w={'full'}
        // bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          
          pos={'relative'}>
            
          {  
          //  console.log(movie)
          }
        </Box>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            {movie.title}
          </Text>
          <Heading
            // color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
           
          </Heading>
          <Button className='button' _hover={{}} isDisabled ={val} onClick={()=>{addtoList(movie)}} width={''} bg ='rgb(44, 158, 114)' textColor='white' colorScheme='steelblue' variant='outline' >
                 add to watchlist
            </Button>
        </Stack>
      </Box>
    </Center>
            </>
            
          )})
        }
        
      </ul> }
     </div>

    </div>
  )
}

export default Search