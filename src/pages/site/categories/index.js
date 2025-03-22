import Category from '@/components/site/elements/Category'
import SiteNavbar from '@/components/site/menu/SiteNavbar'
import SiteWrapper from '@/components/ui/theme/SiteWrapper'
import axios from 'axios'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Categories({categories}) {

  return (
    <>
    <SiteWrapper>
    <SiteNavbar/>
    <Container>
        <Row>
            {categories.map((item,index)=>{
               
           return <Col key={item.cateoryId} md={3} sm={12} xs={12}>
            <Category category={item}/>
        </Col> 
            })}
        </Row>
    </Container>
    </SiteWrapper>
    </>

  )
}

export async function getStaticProps(params) {
    const categories = await axios.get('http://localhost:5090/site/categories/get')
    return {
        props:{
            categories:categories.data
        }
    }
}

export default Categories