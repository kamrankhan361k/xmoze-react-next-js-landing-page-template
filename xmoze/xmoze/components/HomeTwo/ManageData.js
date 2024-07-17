import React from 'react'

export default function ManageData() {
  return (
      <section className="content-block section-padding">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 mb-3 mb-lg-0  pe-lg-0 col-12">
                    <div className="animated-img-wrapper">
                        <img src="/img/home2/dashboard-img.png" alt="" />
                        <img src="/img/home2/top-element-img.png" alt="" />
                        <img src="/img/home2/chart-graphic.png" alt="" />
                    </div>
                </div>
                <div className="col-lg-6 offset-lg-1 mt-5 mt-lg-0 col-12 ps-lg-5 pe-lg-5">
                    <div className="block-contents ms-xl-3">
                        <div className="section-title mb-4 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                            <h2>Manage data & get instant outgrowth</h2>
                        </div>
                        <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">Xmoze is a simple software that allows you to run your business easily. One software tool brings success.</p>
                        <ul className="checked-list">
                            <li className="wow fadeInUp" data-wow-delay=".5s">Calculate input output results easily</li>
                            <li className="wow fadeInUp" data-wow-delay=".7s">Prevent waste and increase income</li>
                            <li className="wow fadeInUp" data-wow-delay=".9s">Calculate stocks easily & plan for the future</li>
                        </ul>
                        <a href="#" className="theme-btn second-color mt-40 wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.1s">Get Started</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
