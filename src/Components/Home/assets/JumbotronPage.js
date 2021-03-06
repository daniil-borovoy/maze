import React, { Component } from 'react'
import {
  MDBJumbotron,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardTitle,
  MDBIcon,
} from 'mdbreact'

class JumbotronPage extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBJumbotron
              style={{ padding: 0 }}
              className="shadow-box-example hoverable"
            >
              <MDBCol
                className="text-white text-center py-5 px-4 my-5"
                style={{
                  backgroundImage: `url(https://images.pexels.com/photos/1210484/pexels-photo-1210484.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`,
                }}
              >
                <MDBCol className="py-5">
                  <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">
                    Create your style with <b>MAZE</b>
                  </MDBCardTitle>
                  <p className="mx-5 mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Repellat fugiat, laboriosam, voluptatem, optio vero odio nam
                    sit officia accusamus minus error nisi architecto nulla
                    ipsum dignissimos. Odit sed qui, dolorum!
                  </p>
                  <MDBBtn outline color="white" className="mb-5">
                    <MDBIcon icon="clone" className="mr-2"></MDBIcon> More...
                  </MDBBtn>
                </MDBCol>
              </MDBCol>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
}

export default JumbotronPage
