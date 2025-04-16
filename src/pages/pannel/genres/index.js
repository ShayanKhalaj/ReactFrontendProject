import GenreGrid from "@/components/pannel/genres/GenreGrid";
import SearchGenre from "@/components/pannel/genres/SearchGenre";
import { SearchGenreDto } from "@/models/dto/GenreDto";
import {
  GetAllGenreRepository,
  SearchGenreRepository,
} from "@/repository/GenreRepository";
import { SearchGenreService } from "@/service/IGenreService";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import cookie from "cookie";
import ThemeWrapper from '@/components/ui/theme/ThemeWrapper';

function GenreManagement({ GenreSearchList, GenreList }) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (GenreList?.data) {
      dispatch(SearchGenreService(GenreSearchList.data));
    }
  }, [dispatch]);

  return (
    <ThemeWrapper>
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <SearchGenre genres={GenreList} />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={12}>
          <GenreGrid />
        </Col>
      </Row>
    </Container>
            </ThemeWrapper>
  );
}

export async function getServerSideProps(context) {
  const cookies = cookie.parse(context.req.headers.cookie || "");
  const token = cookies.token;

  if (!token) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  const GenreSearchResponse = await SearchGenreRepository(SearchGenreDto, );

  const InflateGenreDropDown = await GetAllGenreRepository();

  // اطمینان از اینکه CategorySearchResponse.data موجود است
  return {
    props: {
      GenreSearchList: GenreSearchResponse.data || null,
      GenreList: InflateGenreDropDown.data || null, // اگر null باشد مدیریت می‌شود
    },
  };
}

export default GenreManagement;
