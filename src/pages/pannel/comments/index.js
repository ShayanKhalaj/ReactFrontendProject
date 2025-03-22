import CommentGrid from '@/components/pannel/comments/CommentGrid'
import SearchComment from '@/components/pannel/comments/SearchComment'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ThemeWrapper from '@/components/ui/theme/ThemeWrapper';

function CommentManagment() {

  return (
    <ThemeWrapper>
    <Container>
        <Row className='justify-content-center'>
            <Col md={6}>
                <SearchComment/>
            </Col>
        </Row>
        <Row className='justify-content-center'>
            <Col md={12}>
              <CommentGrid/>
            </Col>
        </Row>
    </Container>
            </ThemeWrapper>

  )
}

export default CommentManagment