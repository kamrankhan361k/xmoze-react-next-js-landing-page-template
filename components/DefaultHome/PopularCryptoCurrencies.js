import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiBinance, SiChainlink, SiDogecoin, SiLitecoin } from "react-icons/si";
export default function PopularCryptoCurrencies() {
	return (
		<section className="crypto-currencies-wrapper fix section-black section-padding">
			<div className="container">
				<div className="col-lg-8 col-xl-6 offset-xl-3 col-12 offset-lg-2 text-center">
					<div className="block-contents text-white">
						<div className="section-title wow fadeInUp" data-wow-duration="1s">
							<h2>The most popular cryptocurrencies</h2>
						</div>
					</div>
				</div>
				<div className="nice-arrow-icon d-none d-lg-block wow fadeInDown" data-wow-duration="1.2s">
					<img src="img/icons/nice-arrow-down.svg" alt="" />
				</div>

				<div className="row">
					<div className="col-md-6 col-xl-4 col-12">
						<div
							className="single-crypto-currency-card wow fadeInUp"
							data-wow-duration="1s"
							data-wow-delay=".2s"
						>
							<div className="currency-header">
								<div className="icon icon1">
									<FaBitcoin className="icon-bitcoin" />
								</div>
								<div className="currency-name">
									<h6>Bitcoin (BTC)</h6>
									<span>Cryptocurrency</span>
								</div>
							</div>
							<div className="currency-info">
								<p>
									Bitcoin is the most stable and least volatile digital currency. Bitcoin is
									considered an excellent inflationary hedge.
								</p>
							</div>
							<div className="currency-rate-buy-btn d-flex align-items-center justify-content-between">
								<div className="currency-rate">
									<h5>$56,204.37</h5>
								</div>
								<div className="currency-buy-now">
									<a href="#">buy now</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-xl-4 col-12">
						<div
							className="single-crypto-currency-card wow fadeInUp"
							data-wow-duration="1s"
							data-wow-delay=".4s"
						>
							<div className="currency-header">
								<div className="icon icon2">
									<FaEthereum className="icon-eth" />
								</div>
								<div className="currency-name">
									<h6>Ethereum (ETH)</h6>
									<span>Cryptocurrency</span>
								</div>
							</div>
							<div className="currency-info">
								<p>
									Ethereum is the largest and most well-established, open-ended decentralized software
									platform.
								</p>
							</div>
							<div className="currency-rate-buy-btn d-flex align-items-center justify-content-between">
								<div className="currency-rate">
									<h5>$3,979.05</h5>
								</div>
								<div className="currency-buy-now">
									<a href="#">buy now</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-xl-4 col-12">
						<div
							className="single-crypto-currency-card wow fadeInUp"
							data-wow-duration="1s"
							data-wow-delay=".6s"
						>
							<div className="currency-header">
								<div className="icon icon3">
									<SiChainlink className="" />
								</div>
								<div className="currency-name">
									<h6>Chainlink (LINK)</h6>
									<span>Cryptocurrency</span>
								</div>
							</div>
							<div className="currency-info">
								<p>
									Chainlink is a good investment for both the short and the long term. fantastic
									long-term investment.
								</p>
							</div>
							<div className="currency-rate-buy-btn d-flex align-items-center justify-content-between">
								<div className="currency-rate">
									<h5>$5,372.67</h5>
								</div>
								<div className="currency-buy-now">
									<a href="#">buy now</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-xl-4 col-12">
						<div
							className="single-crypto-currency-card wow fadeInUp"
							data-wow-duration="1s"
							data-wow-delay=".1s"
						>
							<div className="currency-header">
								<div className="icon icon4">
									<SiLitecoin />
								</div>
								<div className="currency-name">
									<h6>Litecoin</h6>
									<span>Cryptocurrency</span>
								</div>
							</div>
							<div className="currency-info">
								<p>
									Litecoin is the largest and most well-established, open-ended decentralized software
									platform.
								</p>
							</div>
							<div className="currency-rate-buy-btn d-flex align-items-center justify-content-between">
								<div className="currency-rate">
									<h5>$8,372.67</h5>
								</div>
								<div className="currency-buy-now">
									<a href="#">buy now</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-xl-4 col-12">
						<div
							className="single-crypto-currency-card wow fadeInUp"
							data-wow-duration="1s"
							data-wow-delay=".3s"
						>
							<div className="currency-header">
								<div className="icon icon5">
									<SiBinance />
								</div>
								<div className="currency-name">
									<h6>Binance Coin (BNB)</h6>
									<span>Cryptocurrency</span>
								</div>
							</div>
							<div className="currency-info">
								<p>
									As per our short-term BNB price prediction, the Binance coin can reach $1000 by the
									end of the next year.
								</p>
							</div>
							<div className="currency-rate-buy-btn d-flex align-items-center justify-content-between">
								<div className="currency-rate">
									<h5>$542.35</h5>
								</div>
								<div className="currency-buy-now">
									<a href="#">buy now</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-xl-4 col-12">
						<div
							className="single-crypto-currency-card wow fadeInUp"
							data-wow-duration="1s"
							data-wow-delay=".6s"
						>
							<div className="currency-header">
								<div className="icon icon6">
									<SiDogecoin />
								</div>
								<div className="currency-name">
									<h6>Tether (USDT)</h6>
									<span>Cryptocurrency</span>
								</div>
							</div>
							<div className="currency-info">
								<p>
									Create an account on the exchange, buy the Tether (USDT) crypto asset, and transfer
									it to your crypto wallet.
								</p>
							</div>
							<div className="currency-rate-buy-btn d-flex align-items-center justify-content-between">
								<div className="currency-rate">
									<h5>$600.95</h5>
								</div>
								<div className="currency-buy-now">
									<a href="#">buy now</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
