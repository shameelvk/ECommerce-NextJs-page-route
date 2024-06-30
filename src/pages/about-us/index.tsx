import Link from 'next/link'
import React from 'react'


function AboutUs() {
  return (
    <section className="py-2 py-md-3">
      <div className="container">
        <div className="row gy-2 gy-md-2 gy-lg-0 align-items-lg-center">
          <div className="col-12 col-lg-6">
            <img className="img-fluid rounded" loading="lazy" src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?t=st=1719380177~exp=1719380777~hmac=591403a656d14c3332406563df991e287a29fc22eefc591fa35d5fb36155064f" alt="About 2"/>
          </div>
          <div className="col-12 col-lg-6">
            <div className="row justify-content-xl-center">
              <div className="col-12 col-xl-10">
                <h2 className="mb-3">Why Choose Us?</h2>
                <p className="lead fs-5 mb-3 mb-xl-5">With years of experience and deep industry knowledge, we have a proven track record of success and are constantly pushing ourselves to stay ahead of the curve.</p>
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                  </div>
                  <div>
                    <p className="fs-6 m-0">Our evolution procedure is super intelligent.</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                  </div>
                  <div>
                    <p className="fs-6 m-0">We deliver services beyond expectations.</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4 mb-xl-5">
                  <div className="me-3 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                  </div>
                  <div>
                    <p className="fs-6 m-0">Let's hire us to reach your objectives.</p>
                  </div>
                </div>
                <Link href={'contact-us'}className="btn bsb-btn-xl btn-outline-primary rounded-pill">Connect Now</Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs