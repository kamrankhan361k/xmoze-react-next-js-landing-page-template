import React from 'react'

export default function Cta() {
  return (
    
    <section className="cta-banner-wrapper">
        <div className="container">
            <div className="cta-banner style-2 text-white">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 text-center col-xl-8 offset-xl-2">
                        <div className="cta-contents">
                            <h2 className="wow fadeInUp">Sign up and improve your business easily</h2>
                            <a href="#" className="app-download-btn wow fadeInUp" data-wow-delay=".3s"><img src="/img/apple.png" alt="" /></a>
                            <a href="#" className="app-download-btn wow fadeInUp" data-wow-delay=".6s"><img src="/img/android.png" alt="" /></a>
                        </div>
                    </div>
                </div>

                <div className="white-arrow-icon d-none d-md-block  wow fadeInDown" data-wow-delay=".8s">
                    <img src="/img/icons/white-arrow-icon.svg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}
