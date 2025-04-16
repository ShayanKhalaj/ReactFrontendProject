import CategoryGrid from "@/components/pannel/category/CategoryGrid";
import SearchCategory from "@/components/pannel/category/SearchCategory";
import { SearchCategoryDto } from "@/models/dto/CategoryDto";
import {
  GetAllCategoryRepository,
  SearchCategoryRepository,
} from "@/repository/CategoryRepository";
import { SearchCategoryService } from "@/service/ICategoryService";
import cookie from "cookie";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import ThemeWrapper from '@/components/ui/theme/ThemeWrapper';

function CategoryManagement({ CategorySearchList = {}, CategoryList = [] }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (CategorySearchList?.data) {
      dispatch(SearchCategoryService(CategorySearchList.data));
    }
  }, [CategorySearchList, dispatch]);

  return (
    <ThemeWrapper>
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <SearchCategory categories={CategoryList} />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={12}>
            <CategoryGrid />
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


    const CategorySearchResponse = await SearchCategoryRepository(SearchCategoryDto, {
      headers: { Authorization: `Bearer ${token}` }, // ارسال توکن
    });

    const CategoryListResponse = await GetAllCategoryRepository({}, {
      headers: { Authorization: `Bearer ${token}` }, // ارسال توکن
    });

    return {
      props: {
        CategorySearchList: CategorySearchResponse?.data || {},
        CategoryList: CategoryListResponse?.data || [],
      },
    };

}

export default CategoryManagement;
