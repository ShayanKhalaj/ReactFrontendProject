import DirectorGrid from "@/components/pannel/directors/DirectorGrid";
import SearchDirector from "@/components/pannel/directors/SearchDirector";
import { SearchDirectorDto } from "@/models/dto/DirectorDto";
import { setDirectorListItems } from "@/redux/features/pannel/DirectorSlice";
import { SearchDirectorRepository } from "@/repository/DirectorRepository";
import { SearchDirectorService } from "@/service/IDirectorService";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import cookie from 'cookie'
import ThemeWrapper from '@/components/ui/theme/ThemeWrapper';

function DirectorManagement({ DirectorSearchList }) {
  const dispatch = useDispatch();
  useEffect(() => {
    if(DirectorSearchList?.data){
        dispatch(SearchDirectorService(DirectorSearchList.data));
    }
  }, [dispatch]);

  return (
    <ThemeWrapper>
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <SearchDirector />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={12}>
          <DirectorGrid />
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

  const DirectorSearchResponse = await SearchDirectorRepository(
    SearchDirectorDto,

  );

  // اطمینان از اینکه CategorySearchResponse.data موجود است
  return {
    props: {
        DirectorSearchList: DirectorSearchResponse?.data || {},
    },
  };
}

export default DirectorManagement;
