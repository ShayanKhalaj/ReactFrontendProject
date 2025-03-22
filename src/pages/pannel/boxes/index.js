import BoxGrid from "@/components/pannel/box/BoxGrid";
import CreateBox from "@/components/pannel/box/CreateBox";
import SearchBox from "@/components/pannel/box/SearchBox";
import { SearchBoxDto } from "@/models/dto/BoxDto";
import {
  GetAllBoxRepository,
  SearchBoxRepository,
} from "@/repository/BoxRepository";
import { GetAllCategoryRepository } from "@/repository/CategoryRepository";
import { GetAllMovieRepository } from "@/repository/MovieRepository";
import { SearchBoxService } from "@/service/IBoxService";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import cookie from 'cookie'
import ThemeWrapper from '@/components/ui/theme/ThemeWrapper';

function BoxManagment({ BoxSearchList, CategoryList, MoviesList }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SearchBoxService(BoxSearchList.data));
  }, [dispatch]);

  return (
    <ThemeWrapper>
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <SearchBox categories={CategoryList} movies={MoviesList} />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={12}>
          <BoxGrid />
        </Col>
      </Row>
    </Container>
            </ThemeWrapper>
  );
}

export async function getServerSideProps(context) {
  // const cookies = cookie.parse(context.req.headers.cookie || "");
  // const token = cookies.token;

  // if (!token) {
  //   return {
  //     redirect: {
  //       destination: "/auth/login",
  //       permanent: false,
  //     },
  //   };
  // }
  const SliderSearchResponse = await SearchBoxRepository(SearchBoxDto);

  const CategoryList = await GetAllCategoryRepository();
  const MoviesList = await GetAllMovieRepository();

  return {
    props: {
      BoxSearchList: SliderSearchResponse.data,
      CategoryList: CategoryList.data,
      MoviesList: MoviesList.data || [],
    },
  };
}

export default BoxManagment;
