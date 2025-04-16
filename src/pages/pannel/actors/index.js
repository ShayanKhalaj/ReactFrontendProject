import ActorGrid from '@/components/pannel/actors/ActorGrid'
import SearchActor from '@/components/pannel/actors/SearchActor'
import { SearchActorDto } from '@/models/dto/ActorDto'
import { GetAllActorRepository, SearchActorRepository } from '@/repository/ActorRepository'
import { SearchActorService } from '@/service/IActorService'
import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import cookie from 'cookie'
import ThemeWrapper from '@/components/ui/theme/ThemeWrapper';

function ActorManagement({ ActorSearchList }) {

    console.log(ActorSearchList)
    const dispatch = useDispatch()
    useEffect(() => {
        if(ActorSearchList?.data){
            dispatch(SearchActorService(ActorSearchList.data))
        }
    }, [dispatch])


    return (
        <ThemeWrapper>
        <Container>
            <Row className='justify-content-center'>
                <Col md={6}>
                    <SearchActor />
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col md={12}>
                    <ActorGrid />
                </Col>
            </Row>
        </Container>
            </ThemeWrapper>
    )
}

export async function getServerSideProps(context) {
    const cookies = cookie.parse(context.req.headers.cookie || "");
    const token = cookies.token;

    if(!token){
        return{
            redirect: {
                destination: "/auth/login",
                permanent: false,
              },
        }
    }

    const ActorSearchResponse = await SearchActorRepository(SearchActorDto,{
        headers: { Authorization: `Bearer ${token}` }, // ارسال توکن
    })
    return {
        props: {
            ActorSearchList: ActorSearchResponse?.data||{},
        }
    }
}

export default ActorManagement