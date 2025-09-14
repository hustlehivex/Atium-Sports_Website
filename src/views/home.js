import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Check from '../components/check'
import Line from '../components/line'
import IconContainer from '../components/icon-container'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Togthr template</title>
        <meta property="og:title" content="Togthr template" />
      </Helmet>
      <section className="home-hero">
        <header className="home-header10">
          <header data-thq="thq-navbar" className="home-navbar">
            <img alt="image" src="/logo.svg" className="home-branding1" />
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <div className="home-hamburger">
                <img alt="image" src="/hamburger.svg" className="home-icon10" />
              </div>
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="home-nav1"
              >
                <div className="home-container2">
                  <img alt="image" src="/logo.svg" className="home-image10" />
                  <div data-thq="thq-close-menu" className="home-menu-close">
                    <svg viewBox="0 0 1024 1024" className="home-icon11">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav
                  data-thq="thq-mobile-menu-nav-links"
                  data-role="Nav"
                  className="home-nav2"
                >
                  <span className="home-text10">About</span>
                  <span className="home-text11">Features</span>
                  <span className="home-text12">Pricing</span>
                  <span className="home-text13">Team</span>
                  <span className="home-text14">Blog</span>
                </nav>
                <div className="home-container3">
                  <button className="home-login button">Login</button>
                  <button className="button">Register</button>
                </div>
              </div>
              <div className="home-icon-group">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon13"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon15"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon17"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </header>
        <video
          src="/togethr-template.mp4"
          loop
          muted
          poster="/hero-bg.png"
          preload="auto"
          autoPlay
          playsInline
          className="home-video"
        ></video>
        <div className="home-hero-content">
          <div className="home-header-container1">
            <div className="home-header11">
              <h1 className="home-heading10">
                <span>
                  Face-to-face with
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text16">imagination</span>
                <br></br>
              </h1>
            </div>
            <p className="home-caption10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <button className="button home-button1">
            <span>
              <span>Get started today</span>
              <br></br>
            </span>
          </button>
        </div>
      </section>
      <section className="home-note">
        <h2 className="home-caption11">
          The most comprehensive lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna.
        </h2>
      </section>
      <section className="home-statistics">
        <div className="home-content10">
          <div className="home-stat1">
            <h3 className="home-header12">$1.69M</h3>
            <span className="home-caption12">
              Consectetur adipiscing
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
          <div className="home-stat2">
            <h3 className="home-header13">Multiverse</h3>
            <span className="home-caption13">Unde omnis iste</span>
          </div>
          <div className="home-stat3">
            <h3 className="home-header14">500K</h3>
            <span className="home-caption14">Accusantium doloremque</span>
          </div>
        </div>
      </section>
      <section className="home-slider1">
        <div className="home-header15">
          <h2 className="home-heading11">
            <span>The first all-in-one verse </span>
            <span className="home-text22">o</span>
            <span className="home-text23">
              ptimized for growth.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </h2>
        </div>
        <div className="home-selector">
          <p className="home-caption15">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
          <div className="home-slide-titles">
            <div className="slide-title">
              <span>Metaverse</span>
            </div>
            <div className="slide-title slide-title-active">
              <span>Ecosystems</span>
            </div>
            <div className="slide-title">
              <span>Development</span>
            </div>
            <div className="slide-title">
              <span>Integration</span>
            </div>
          </div>
        </div>
      </section>
      <section className="home-slides">
        <div className="home-slider2 slider blaze-slider">
          <div className="home-slider-container blaze-container">
            <div className="home-slider-track-container blaze-track-container">
              <div className="home-slider-track blaze-track">
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/slider-ecosystems-400h.png"
                    className="home-image11"
                  />
                  <div className="home-content11">
                    <div className="home-header16">
                      <h3 className="home-heading12">Metaverse</h3>
                      <p className="home-caption16">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                    <div className="home-more1">
                      <span className="home-caption17">Read More</span>
                      <svg viewBox="0 0 1024 1024" className="home-icon19">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/slider-ecosystems-400h.png"
                    className="home-image12"
                  />
                  <div className="home-content12">
                    <div className="home-header17">
                      <h3 className="home-heading13">Ecosystems</h3>
                      <p className="home-caption18">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                    <div className="home-more2">
                      <span className="home-caption19">Read More</span>
                      <svg viewBox="0 0 1024 1024" className="home-icon21">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/slider-ecosystems-400h.png"
                    className="home-image13"
                  />
                  <div className="home-content13">
                    <div className="home-header18">
                      <h3 className="home-heading14">Development</h3>
                      <p className="home-caption20">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                    <div className="home-more3">
                      <span className="home-caption21">Read More</span>
                      <svg viewBox="0 0 1024 1024" className="home-icon23">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/slider-ecosystems-400h.png"
                    className="home-image14"
                  />
                  <div className="home-content14">
                    <div className="home-header19">
                      <h3 className="home-heading15">Integration</h3>
                      <p className="home-caption22">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                    <div className="home-more4">
                      <span className="home-caption23">Read More</span>
                      <svg viewBox="0 0 1024 1024" className="home-icon25">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-controls1">
              <button
                data-role="previous-banner-button"
                className="home-previous1 blaze-prev button"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon27">
                  <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                </svg>
              </button>
              <button
                data-role="next-banner-button"
                className="home-next1 blaze-next button"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon29">
                  <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="home-container5">
            <Script
              html={`<script defer>
const el = document.querySelector('.blaze-slider')

new BlazeSlider(el, {
  all: {
    slidesToShow: 3,
    slideGap: '80px',
    loop: true,
    enableAutoplay: true,
  },
})
</script>`}
            ></Script>
          </div>
        </div>
      </section>
      <section className="home-get-started">
        <div className="home-header-container2">
          <div className="home-header20">
            <h2 className="home-heading16">
              Companies will dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore veniam and more opportunities.
            </h2>
            <p className="home-caption24">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="home-button2">
            <button className="button">
              <span>Get started today</span>
            </button>
          </div>
        </div>
        <img alt="image" src="/getstarted-800w.png" className="home-image15" />
      </section>
      <section className="home-objectives">
        <div className="home-content15">
          <span className="home-text29">Objectives</span>
          <div className="home-objectives-list">
            <div className="objective">
              <h3 className="home-text30">Growth</h3>
              <p className="home-text31">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="objective home-objective2">
              <h3 className="home-text32">Develop</h3>
              <p className="home-text33">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="objective home-objective3">
              <h3 className="home-text34">Optimize</h3>
              <p className="home-text35">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-growth">
        <div className="home-content16">
          <div className="home-header21">
            <div className="home-header22">
              <h2 className="home-heading17">
                <span>
                  Multiverse optimized for
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text37">growth.</span>
                <br></br>
              </h2>
            </div>
            <p className="home-caption25">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <p className="home-caption26">
              Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="home-testimonial1">
            <div className="home-content17">
              <span className="home-text39">Testimonial</span>
              <p className="home-text40">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.”
              </p>
            </div>
            <div className="home-information1">
              <div className="home-author1">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1552234994-66ba234fd567?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHBvdHJhaXR8ZW58MHx8fHwxNjcxMDU2MzMz&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-icon31"
                />
                <span className="home-name1">Andrew Gonzales</span>
              </div>
              <img alt="image" src="/logoipsum.svg" className="home-from1" />
            </div>
          </div>
        </div>
        <div className="home-images1">
          <div className="home-square1"></div>
          <img alt="image" src="/growth-1400w.png" className="home-image16" />
        </div>
      </section>
      <section className="home-experience">
        <div className="home-images2">
          <div className="home-square2"></div>
          <img
            alt="image"
            src="/experience-1400w.png"
            className="home-image17"
          />
        </div>
        <div className="home-content18">
          <div className="home-header23">
            <div className="home-header-container3">
              <div className="home-header24">
                <h2 className="home-heading18">
                  <span>A worlds class </span>
                  <span className="home-text42">experience</span>
                </h2>
              </div>
              <p className="home-caption27">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod.
              </p>
            </div>
            <div className="home-checkmarks">
              <div className="home-check1">
                <div className="home-mark1">
                  <svg viewBox="0 0 1024 1024" className="home-icon32">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text43">
                  Duis aute irure dolor in reprehenderit
                </span>
              </div>
              <div className="home-check2">
                <div className="home-mark2">
                  <svg viewBox="0 0 1024 1024" className="home-icon34">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text44">Lorem ipsum dolor sit amet</span>
              </div>
              <div className="home-check3">
                <div className="home-mark3">
                  <svg viewBox="0 0 1024 1024" className="home-icon36">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text45">
                  Voluptate velit esse cillum dolore eu fugiat nulla
                </span>
              </div>
              <div className="home-check4">
                <div className="home-mark4">
                  <svg viewBox="0 0 1024 1024" className="home-icon38">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text46">
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                </span>
              </div>
            </div>
          </div>
          <div className="home-testimonial2">
            <div className="home-content19">
              <span className="home-text47">Testimonial</span>
              <p className="home-text48">
                “Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.”
              </p>
            </div>
            <div className="home-information2">
              <div className="home-author2">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY3MTA1NjMzMw&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-icon40"
                />
                <span className="home-name2">Cory Smith</span>
              </div>
              <img alt="image" src="/logoipsum-2.svg" className="home-from2" />
            </div>
          </div>
        </div>
      </section>
      <section className="home-create">
        <div className="home-content20">
          <div className="home-header25">
            <h2 className="home-heading19">
              <span>
                Create your own
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text50">environment</span>
              <span> now!</span>
              <br></br>
            </h2>
          </div>
          <button className="home-button4 button">
            <span>
              <span>Get started today</span>
              <br></br>
            </span>
          </button>
        </div>
      </section>
      <section className="home-comparision">
        <div className="home-header-container4">
          <div className="home-header26">
            <h2 className="home-heading20">
              <span>Environment c</span>
              <span className="home-text57">omparision</span>
              <br></br>
            </h2>
          </div>
          <p className="home-caption28">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod.
          </p>
        </div>
        <div className="home-table">
          <div className="home-row10">
            <div className="home-headers1">
              <span className="home-text59">Placeholder</span>
            </div>
            <div className="home-plans1">
              <div className="home-row11">
                <span className="home-text60">TOGHTR</span>
                <span className="home-text61">AGENCY</span>
                <span className="home-text62">FRELLANCE</span>
              </div>
            </div>
          </div>
          <div className="home-row12">
            <div className="home-headers2">
              <span className="home-text63">
                Duis aute irure dolor in reprehenderit
              </span>
            </div>
            <div className="home-plans2">
              <div className="home-row13">
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <Check></Check>
                </div>
              </div>
            </div>
          </div>
          <div className="home-row14">
            <div className="home-headers3">
              <span className="home-text64">Lorem ipsum dolor sit amet</span>
            </div>
            <div className="home-plans3">
              <div className="home-row15">
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <Line></Line>
                </div>
              </div>
            </div>
          </div>
          <div className="home-row16">
            <div className="home-headers4">
              <span className="home-text65">
                Duis aute irure dolor in reprehenderit
              </span>
            </div>
            <div className="home-plans4">
              <div className="home-row17">
                <div className="value">
                  <span className="home-text66">Custom</span>
                </div>
                <div className="value">
                  <Line></Line>
                </div>
                <div className="value">
                  <Line></Line>
                </div>
              </div>
            </div>
          </div>
          <div className="home-row18">
            <div className="home-headers5">
              <span className="home-text67">
                Duis aute irure dolor in reprehenderit
              </span>
            </div>
            <div className="home-plans5">
              <div className="home-row19">
                <div className="value">
                  <span className="home-text68">Unlimited</span>
                </div>
                <div className="value">
                  <span className="home-text69">Limited</span>
                </div>
                <div className="value">
                  <Line></Line>
                </div>
              </div>
            </div>
          </div>
          <div className="home-row20">
            <div className="home-headers6">
              <span className="home-text70">Lorem ipsum dolor sit amet</span>
            </div>
            <div className="home-plans6">
              <div className="home-row21">
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <Line></Line>
                </div>
                <div className="value">
                  <span className="home-text71">Limited</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-row22">
            <div className="home-headers7">
              <span className="home-text72">Lorem ipsum dolor sit amet</span>
            </div>
            <div className="home-plans7">
              <div className="home-row23">
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <Check></Check>
                </div>
              </div>
            </div>
          </div>
          <div className="home-row24">
            <div className="home-headers8">
              <span className="home-text73">Lorem ipsum dolor sit amet</span>
            </div>
            <div className="home-plans8">
              <div className="home-row25">
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <span className="home-text74">Limited</span>
                </div>
                <div className="value">
                  <Line></Line>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-data">
        <div className="home-header-container5">
          <div className="home-header27">
            <div className="home-row26">
              <h2 className="home-heading21">
                <span>
                  Understand your data to manage all in one
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text76">platform</span>
                <br></br>
              </h2>
            </div>
          </div>
          <p className="home-caption29">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
        </div>
        <div className="home-content21">
          <div className="home-image18">
            <img alt="image" src="/data-1400w.png" className="home-image19" />
          </div>
          <div className="home-accordion">
            <div data-role="accordion-container" className="accordion">
              <div>
                <h3 className="home-header28">Management</h3>
                <p data-role="accordion-content" className="accordion-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <IconContainer rootClassName="icon-containerroot-class-name"></IconContainer>
            </div>
            <div data-role="accordion-container" className="accordion">
              <div>
                <h3 className="home-header29">Integrations</h3>
                <p data-role="accordion-content" className="accordion-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <IconContainer rootClassName="icon-containerroot-class-name1"></IconContainer>
            </div>
            <div data-role="accordion-container" className="accordion">
              <div>
                <h3 className="home-header30">Customer Solutions</h3>
                <p data-role="accordion-content" className="accordion-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <IconContainer rootClassName="icon-containerroot-class-name2"></IconContainer>
            </div>
            <div data-role="accordion-container" className="accordion">
              <div>
                <h3 className="home-header31">Recruiting</h3>
                <p data-role="accordion-content" className="accordion-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <IconContainer rootClassName="icon-containerroot-class-name3"></IconContainer>
            </div>
            <div>
              <div className="home-container7">
                <Script
                  html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
                ></Script>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-customer">
        <div className="home-header32">
          <h2 className="home-heading22">
            <span>
              Customer validation is an essential phase of the
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text79">product development process</span>
            <br></br>
          </h2>
        </div>
        <div className="home-quotes">
          <div className="home-quote1">
            <p className="home-quote2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="home-author3">
              <span className="home-name3">Joanna Smith</span>
              <span className="home-location1">Briville</span>
            </div>
          </div>
          <div className="home-quote3">
            <p className="home-quote4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="home-author4">
              <span className="home-name4">Joanna Smith</span>
              <span className="home-location2">Briville</span>
            </div>
          </div>
          <div className="home-quote5">
            <p className="home-quote6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="home-author5">
              <span className="home-name5">Joanna Smith</span>
              <span className="home-location3">Briville</span>
            </div>
          </div>
          <div className="home-quote7">
            <p className="home-quote8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="home-author6">
              <span className="home-name6">Joanna Smith</span>
              <span className="home-location4">Briville</span>
            </div>
          </div>
        </div>
        <div className="home-controls2">
          <button className="home-previous2 button">
            <svg viewBox="0 0 1024 1024" className="home-icon41">
              <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
            </svg>
          </button>
          <button className="home-next2 button">
            <svg viewBox="0 0 1024 1024" className="home-icon43">
              <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
            </svg>
          </button>
          <button className="button home-button5">
            <span>
              <span>View all cases</span>
              <br></br>
            </span>
          </button>
        </div>
      </section>
      <section className="home-faq">
        <div className="home-header33">
          <h2 className="home-heading23">
            <span>Frequently asked </span>
            <span className="home-text85">questions</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </h2>
        </div>
        <div className="home-content30">
          <div className="home-column1">
            <div className="home-element14">
              <h3 className="home-header34">
                Lorem ipsum dolor sit ametetur elit?
              </h3>
              <p className="home-content31">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="home-element15">
              <h3 className="home-header35">
                Excepteur sint occaecat cupidatat non sunt in culpa qui officia
                deserunt mollit anim id est laborum?
              </h3>
              <p className="home-content32">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
            <div className="home-element16">
              <h3 className="home-header36">
                Tempor incididunt ut labore et dolore magna aliquat enim ad
                minim?
              </h3>
              <p className="home-content33">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="home-column2">
            <div className="home-element17">
              <h3 className="home-header37">
                Tempor incididunt ut labore et dolore magna aliquat enim ad
                minim?
              </h3>
              <p className="home-content34">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="home-element18">
              <h3 className="home-header38">
                Lorem ipsum dolor sit ametetur elit?
              </h3>
              <p className="home-content35">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="home-element19">
              <h3 className="home-header39">Incididunt ut labore et dolore?</h3>
              <p className="home-content36">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="home-footer">
        <div className="home-content37">
          <div className="home-main">
            <div className="home-branding2">
              <img alt="image" src="/logo.svg" className="home-image20" />
              <span className="home-text87">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <div className="home-links">
              <div className="home-column3">
                <span className="home-header40">Company</span>
                <div className="home-list1">
                  <Link to="/" className="home-navlink10">
                    About
                  </Link>
                  <Link to="/" className="home-navlink11">
                    Services
                  </Link>
                  <Link to="/" className="home-navlink12">
                    How
                  </Link>
                  <Link to="/" className="home-navlink13">
                    <span className="home-text88">Why</span>
                    <br></br>
                  </Link>
                </div>
              </div>
              <div className="home-column4">
                <span className="home-header41">Extern</span>
                <div className="home-list2">
                  <Link to="/" className="home-navlink14">
                    News
                  </Link>
                  <Link to="/" className="home-navlink15">
                    Articles
                  </Link>
                  <Link to="/" className="home-navlink16">
                    Blog
                  </Link>
                  <Link to="/" className="home-navlink17">
                    Privacy
                  </Link>
                  <Link to="/" className="home-navlink18">
                    Terms
                  </Link>
                  <Link to="/" className="home-navlink19">
                    Legal
                  </Link>
                  <Link to="/" className="home-navlink20">
                    Press
                  </Link>
                </div>
              </div>
              <div className="home-column5">
                <span className="home-header42">Social</span>
                <div className="home-list3">
                  <Link to="/" className="home-navlink21">
                    LinkedIn
                  </Link>
                  <Link to="/" className="home-navlink22">
                    Twitter
                  </Link>
                  <Link to="/" className="home-navlink23">
                    Instagram
                  </Link>
                  <Link to="/" className="home-navlink24">
                    Facebook
                  </Link>
                  <Link to="/" className="home-navlink25">
                    TikTok
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="home-bottom">
            <span className="home-text90">
              © 2022 togthr - All rights reserved
            </span>
            <button data-role="scroll-top" className="home-button6 button">
              <img alt="image" src="/arrow.svg" className="home-image21" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="home-container9">
          <Script
            html={`<script>
document.addEventListener("DOMContentLoaded", function() {
  // get the element with the "scroll-top" data-role
  const scrollTopBtn = document.querySelector('[data-role="scroll-top"]');

  // when the element is clicked
  scrollTopBtn.addEventListener("click", function() {
    // smoothly scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
</script>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
