import React from 'react'

export default function Interfaces() {
  return (
      <section className="content-block section-padding">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-6 col-12 pe-xl-5 mt-5 mt-xl-0 order-2 order-xl-1">
                    <div className="block-contents">
                        <div className="section-title mb-4 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                            <h2>Simple interface for business steering</h2>
                        </div>
                        <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">Xmoze is a simple software that allows you to run your business easily. One software tool brings the whole business together.</p>
                        <ul className="checked-list">
                            <li className="wow fadeInUp" data-wow-delay=".5s">Calculate inputassets/ output results effortlessly</li>
                            <li className="wow fadeInUp" data-wow-delay=".7s">Prevent waste and increase income</li>
                            <li className="wow fadeInUp" data-wow-delay=".9s">Calculate stocks effortlessly & plan for the future</li>
                        </ul>
                        <a href="#" className="theme-btn second-color mt-40 wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.1s">Get Started</a>
                    </div>
                </div>

                <div className="col-xl-6 pe-lg-0 col-12 order-1 order-xl-2">
                    <div className="block-img-right">
                        <img src="/img/home2/interface.png" alt="" />
                        <img src="/img/home2/interface-chart.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
