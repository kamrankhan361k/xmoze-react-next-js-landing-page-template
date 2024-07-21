
export default function CallToAction() {
  return (
     <section className="cta-banner-wrapper section-padding pt-0">
        <div className="container">
            <div className="cta-banner newsletter-box text-white">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 text-center col-xl-8 offset-xl-2">
                        <div className="cta-contents">
                            <h2 className="wow fadeInUp">Are you interested in doing your project with us?</h2>
                            <div className="newsletter-form wow fadeInUp">
                                <form action="#">
                                    <input type="email" placeholder="Enter your email" />
                                    <button type="submit" className="submit-btn">Contact Now</button>
                                </form>
                            </div>

                            <div className="arrow-shape">
                                <img src="/img/arrow-shape.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
