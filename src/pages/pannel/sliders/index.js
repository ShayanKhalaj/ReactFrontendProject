import SearchSlider from '@/components/pannel/sliders/SearchSlider'
import SliderGrid from '@/components/pannel/sliders/SliderGrid'
import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import cookie from 'cookie'
import { GetAllSliderRepository, SearchSliderRepository } from '@/repository/SliderRepository'
import { SearchActorDto } from '@/models/dto/ActorDto'
import { GetAllCategoryRepository } from '@/repository/CategoryRepository'
import { useDispatch } from 'react-redux'
import { SearchSliderService } from '@/service/ISliderService'
import { GetAllMovieRepository } from '@/repository/MovieRepository'
import ThemeWrapper from '@/components/ui/theme/ThemeWrapper';

function SliderManagment({SliderearchList,CategoryList,MoviesList}) {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(SearchSliderService(SliderearchList.data))
  },[dispatch])

  return (
    <ThemeWrapper>
    <Container>
        <Row className='justify-content-center'>
            <Col md={6}>
                <SearchSlider  categories={CategoryList} movies={MoviesList}/>
            </Col>
        </Row>
        <Row className='justify-content-center'>
            <Col md={12}>
              <SliderGrid/>
            </Col>
        </Row>
    </Container>
            </ThemeWrapper>

  )
}

export async function getServerSideProps(context) {
    //  const cookies = cookie.parse(context.req.headers.cookie || "");
    //   const token = cookies.token;
  
    //   if(!token){
    //       return{
    //           redirect: {
    //               destination: "/auth/login",
    //               permanent: false,
    //             },
    //       }
    //   }
  const SliderSearchResponse = await SearchSliderRepository(SearchActorDto)

  const CategoryList = await GetAllCategoryRepository()
  const MoviesList = await GetAllMovieRepository()
  

  return {
    props: {
      SliderearchList: SliderSearchResponse.data,
      CategoryList:CategoryList.data,
      MoviesList:MoviesList.data||[]
    }
  }
}


export default SliderManagment