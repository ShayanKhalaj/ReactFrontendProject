import MovieGrid from '@/components/pannel/movies/MovieGrid'
import SearchMovie from '@/components/pannel/movies/SearchMovie'
import { SearchMovieDto } from '@/models/dto/MovieDto'
import { GetAllActorRepository } from '@/repository/ActorRepository'
import { GetAllCategoryRepository } from '@/repository/CategoryRepository'
import { GetAllDirectorRepository } from '@/repository/DirectorRepository'
import { GetAllGenreRepository } from '@/repository/GenreRepository'
import { SearchMovieRepository } from '@/repository/MovieRepository'
import { SearchMovieService } from '@/service/IMovieService'
import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import cookie from 'cookie'
import ThemeWrapper from '@/components/ui/theme/ThemeWrapper';

function MovieManagment({ MovieSearchList,GenreList,DirectorList,CategoryList,ActorList }) {
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(SearchMovieService(MovieSearchList.data))
  }, [dispatch])

  return (
    <ThemeWrapper>
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <SearchMovie categories={MovieSearchList} GenreList={GenreList} DirectorList={DirectorList} CategoryList={CategoryList}/>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={12}>
          <MovieGrid ActorList={ActorList}/>
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
  const MovieSearchResponse = await SearchMovieRepository(SearchMovieDto)
  const GenreList = await GetAllGenreRepository()
  const DirectorList = await GetAllDirectorRepository()
  const CategoryList = await GetAllCategoryRepository()
  const GetAllActorList = await GetAllActorRepository()

  return {
    props: {
      MovieSearchList: MovieSearchResponse.data,
      GenreList:GenreList.data,
      DirectorList:DirectorList.data,
      CategoryList:CategoryList.data,
      ActorList:GetAllActorList.data || []
    }
  }
}

export default MovieManagment
