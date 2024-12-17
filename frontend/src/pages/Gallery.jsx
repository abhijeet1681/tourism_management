import React from 'react'
import '../styles/home.css'
import { Container, Row, Col } from 'reactstrap'

import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery'

const Gallery = () => {
   return <>
      {/* ========== GALLERY SECTION START ============== */}
      <section>
         <Container>
            <Row>
               <Col lg='12'>
                  {/* <Subtitle subtitle={'Gallery'} /> */}
                  <h2 className="gallery__title text-center">Visit our customers tour gallery</h2>
               </Col>
               <Col lg='12'>
                  <MasonryImagesGallery />
               </Col>
            </Row>
         </Container>
      </section>
      {/* ========== GALLERY SECTION END ================ */}
   </>
}

export default Gallery;