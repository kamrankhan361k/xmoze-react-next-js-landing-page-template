import Link from "next/link";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { ImFacebook, ImInstagram, ImPinterest, ImTwitter } from "react-icons/im";
import BlogSidebar from "./BlogSidebar";
export default function BlogDetails() {
	return (
		<div className="blog-details-wrapper section-padding mtm-30">
			<div className="container">
				<div className="row">
					<div className="col-xl-8 col-12 pe-xl-5">
						<div className="blog-content">
							<img src="/img/blog/single-details-img.jpg" alt="" />

							<div className="post-meta d-flex">
								<div className="post-cat">
									<Link href="/news">
										<a>Sponsored</a>
									</Link>
								</div>
								<div className="post-date">
									<span>Dec. 8, 2022</span>
								</div>
							</div>

							<h3 className="pt-md-4">
								The Crypto Volatility Index (CVI) is a decentralized solution used as a benchmark to
								track the volatility from cryptocurrency option prices and the overall crypto market.{" "}
							</h3>
							<p className="mt-4">
								For those who are not familiar with the term, the VIX is an index that measures
								volatility in the stock market based on the implied volatility of S&P 500 Index options;
								it’s also referred to as the “Market Fear Index.”
							</p>
							<p className="mt-4 mb-4">
								In a similar way, the CVI helps users track and trade the 30-day implied volatility of
								Ether (ETH) Bitcoin (BTC) by using the Black-Scholes options pricing model foster an
								index that fluctuates between 0 and 200. Black-Scholes is a pricing model used to
								determine the fair price or theoretical value for a call or a put option based on six
								variables volatility type of optiont & underlying stock pricing and risk-free rate.
							</p>

							<h4>What Does the Platform Hold for the Future?</h4>
							<p className="mt-4">
								Along with the recent migration from USDT to USDC and a recent integration with
								investing.com, the founders of CVI have announced the implementation of new and exciting
								features for the protocoler.
							</p>
							<p className="mt-4">
								The first, is the launch of volatility tokens via CVOL (Crypto vola & ETHVOL (Ethereum
								Volatility token). These tokens can be understood as being a wrapper for opening a long
								position on CVI and a tradable on Ethereum compatible DEXs. The tokens maintain their
								peg to the value of the underlying following a rebase mechanism with a similar
								architecture to that of tokens like Ampleforth. The volatility tokens can be used to
								benefit from arbitrage trading strategies on other compatible DEXs.
							</p>
							<blockquote>
								<p>
									“Learning how cryptocurrency works is like learning a new language. It is incredibly
									difficult at the beginning, but once it clicks it will stick with you forever.”
								</p>
								<cite>― Olawale Daniel</cite>
							</blockquote>

							<img src="/img/blog/blog1.jpg" className="me-lg-3" alt="" />
							<img src="/img/blog/blog2.jpg" alt="" />

							<h5>Key Takeaways</h5>
							<ul>
								<li>
									The Index allows DeFi users to either hedge against or profit from volatility in the
									crypto market.
								</li>
								<li>
									The index functions as a crypto version of the VIX (The S&P 500 Volatility Index), a
									real-time for market index representing the market's expectations for volatility
									forover the coming 30 days.
								</li>
								<li>
									COTI is the project behind the development and deployment of the CVI, which has at
									launched a decentralized trading system that enables a permissionless way to &
									positions on the index.
								</li>
							</ul>
						</div>

						<div className="related-post-wrapper">
							<div className="row">
								<div className="col-md-6 col-xl-4 col-12">
									<div className="single-related-post">
										<p>
											<HiArrowLeft /> Previous
										</p>
										<Link href="/news-details">
											<a>SWIFT will cryptocurrency explode asset market in 2022</a>
										</Link>
									</div>
								</div>
								<div className="col-md-6 col-xl-4 mt-md-0 mt-4 offset-xl-4 col-12 text-md-end">
									<div className="single-related-post">
										<p>
											Next <HiArrowRight />
										</p>
										<Link href="/news-details">
											<a>How social good Is offering 100% cryptocurrency</a>
										</Link>
									</div>
								</div>
							</div>
						</div>

						<div className="share-post-wrapper d-flex justify-content-between align-items-center">
							<div className="share-title">
								<h5 className="mb-0">Share this post:</h5>
							</div>
							<div className="share-links">
								<Link href="/#">
									<a>
										<ImFacebook className="facebook" />
									</a>
								</Link>
								<Link href="/#">
									<a>
										<ImTwitter className="twitter" />
									</a>
								</Link>
								<Link href="/#">
									<a>
										<ImInstagram className="instagram" />
									</a>
								</Link>
								<Link href="/#">
									<a>
										<ImPinterest className="pinterest" />
									</a>
								</Link>
							</div>
						</div>

						<div className="comments-wrapper">
							<h5>3 comments on this post:</h5>

							<div className="comments-list">
								<div className="single-comment">
									<div
										className="user-img bg-cover"
										style={{ backgroundImage: "url(/img/blog/author2.jpg)" }}
									></div>
									<div className="comment-data">
										<h6>Juliya Naik</h6>
										<span>Dec. 25, 2021</span>

										<p>
											Leading an organization is incredibly rewarding and equally humbling.
											Confidence and humility. Every success is rewarding.
										</p>

										<a href="#" className="replay-btn">
											Reply
										</a>
									</div>
								</div>
								<div className="single-comment replay-comment">
									<div
										className="user-img bg-cover"
										style={{ backgroundImage: "url(/img/blog/author_img.jpg" }}
									></div>
									<div className="comment-data">
										<h6>Sakib Masum</h6>
										<span>Dec. 25, 2021</span>

										<p>
											The manufacturing industry needs continuous automation throughout processes,
											and each part of the company needs to work flawlessly in order to avoid
											potential business issues.
										</p>

										<a href="#" className="replay-btn">
											Reply
										</a>
									</div>
								</div>
								<div className="single-comment">
									<div
										className="user-img bg-cover"
										style={{ backgroundImage: "url(/img/blog/author3.jpg" }}
									></div>
									<div className="comment-data">
										<h6>Salman Ahmed</h6>
										<span>Mar. 05, 2022</span>

										<p>
											Black-Scholes is a pricing model used to determine the fair price or
											theoretical value for a call or a put option based on six variables
											volatility type of optiont & underlying stock pricing and risk-free rate.
										</p>

										<a href="#" className="replay-btn">
											Reply
										</a>
									</div>
								</div>
							</div>

							<div className="comment-form-wrapper">
								<h5 className="mb-30">Leave a comment</h5>

								<form action="#" className="comment-form row">
									<div className="col-md-6 col-12">
										<input type="text" placeholder="Name" />
									</div>
									<div className="col-md-6 col-12">
										<input type="email" placeholder="Email Address" />
									</div>
									<div className="col-md-12 col-12">
										<textarea placeholder="Write your comment"></textarea>
									</div>

									<div className="col-md-12 col-12">
										<button className="theme-btn" type="submit">
											Comment
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div className="col-xl-4 col-12">
						|<BlogSidebar />
					</div>
				</div>
			</div>
		</div>
	);
}
