import { SiteLink, Interactive, CartButton, CartCount, AuthButton, SiteForm } from '../components/Interactions';
import { Checkout } from '../components/Commerce';
import { CourseCard } from '../components/CourseCard';
import courseCards from '../data/course-cards.json';

export default function Page() {
  return (<>
    <div data-motion-id={"005386ac-8f56-69ff-a08d-d6f59bbd8d79"} className={"navbar-two"}>
      <section className={"navbar-two-top"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-hflex top-nav-main"}>
            <div className={"top-nav-text"}>
{"Are you interested in online coaching? "}
              <SiteLink href={"/contact-one"} className={"text-light-white"}>
{"Contact us."}
              </SiteLink>
            </div>
            <div className={"w-layout-hflex top-nav-right"}>
              <SiteLink href={"mailto:support@example.com "} className={"top-nav-text"}>
{"support@example.com"}
              </SiteLink>
              <div className={"top-nav-text"}>
{"Call: "}
                <SiteLink href={"tel:8881234567"} className={"top-nav-text"}>
{"(888) 123 4567"}
                </SiteLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Interactive data-motion-id={"005386ac-8f56-69ff-a08d-d6f59bbd8d86"} data-animation={"default"} data-collapse={"medium"} data-duration={"400"} data-easing={"ease"} data-easing2={"ease"} role={"banner"} className={"nav-two w-nav"} as={"div"}>
        <div className={"container w-container"}>
          <div className={"navbar-wrapper"}>
            <SiteLink href={"/home-one"} className={"no-padding w-nav-brand"}>
              <img src={"/assets/ccc5f759-66c6fb8bf82fe9cef5f78d65_Elearna.svg"} loading={"lazy"} width={"105"} height={"26"} alt={"Elearna"} className={"elerna"} />
            </SiteLink>
            <Interactive role={"navigation"} id={"w-node-c63ce2f1-7896-b1c2-5473-a494d737f1ea-9bbd8d79"} className={"nav-menu w-nav-menu"} as={"nav"}>
              <Interactive data-motion-id={"c63ce2f1-7896-b1c2-5473-a494d737f1eb"} data-hover={"true"} data-delay={"0"} className={"dropdown w-dropdown"} as={"div"}>
                <Interactive className={"dropdown-toggle w-dropdown-toggle"} as={"div"}>
                  <div>
{"Home"}
                  </div>
                  <div className={"icon w-icon-dropdown-toggle"}></div>
                </Interactive>
                <Interactive className={"dropdown-list w-dropdown-list"} as={"nav"}>
                  <SiteLink href={"/home-one"} className={"dropdown-link w-dropdown-link"}>
{"Home One"}
                  </SiteLink>
                  <SiteLink href={"/home-two"} className={"dropdown-link w-dropdown-link"}>
{"Home Two"}
                  </SiteLink>
                  <SiteLink href={"/home-three"} className={"dropdown-link w-dropdown-link"}>
{"Home Three"}
                  </SiteLink>
                </Interactive>
              </Interactive>
              <Interactive data-hover={"true"} data-delay={"0"} className={"dropdown w-dropdown"} as={"div"}>
                <Interactive className={"dropdown-toggle w-dropdown-toggle"} as={"div"}>
                  <div>
{"Courses"}
                  </div>
                  <div className={"icon w-icon-dropdown-toggle"}></div>
                </Interactive>
                <Interactive className={"dropdown-list w-dropdown-list"} as={"nav"}>
                  <Interactive data-hover={"true"} data-delay={"0"} className={"sub-dropdown w-dropdown"} as={"div"}>
                    <Interactive className={"sub-dropdown-toggle w-dropdown-toggle"} as={"div"}>
                      <div>
{"Free"}
                      </div>
                      <div className={"dropdown-icon w-icon-dropdown-toggle"}></div>
                    </Interactive>
                    <Interactive className={"menu-sublist w-dropdown-list"} as={"nav"}>
                      <SiteLink href={"/understanding-corporate-finance-and-investments/course-details"} className={"dropdown-link w-dropdown-link"}>
{"Corporate Finance And Investments"}
                      </SiteLink>
                      <SiteLink href={"/advanced-photoshop-techniques-for-designers/course-details"} className={"dropdown-link w-dropdown-link"}>
{"Advanced Photoshop Techniques"}
                      </SiteLink>
                      <SiteLink href={"/crisis-management-and-problem-solving-strategies/course-details"} className={"dropdown-link w-dropdown-link"}>
{"Crisis Management"}
                      </SiteLink>
                      <SiteLink href={"/building-single-page-applications-with-angular/course-details"} className={"dropdown-link w-dropdown-link"}>
{"Single Page Applications With Angular"}
                      </SiteLink>
                    </Interactive>
                  </Interactive>
                  <Interactive data-hover={"true"} data-delay={"0"} className={"sub-dropdown w-dropdown"} as={"div"}>
                    <Interactive className={"sub-dropdown-toggle w-dropdown-toggle"} as={"div"}>
                      <div>
{"Paid"}
                      </div>
                      <div className={"dropdown-icon w-icon-dropdown-toggle"}></div>
                    </Interactive>
                    <Interactive className={"menu-sublist sub-menu-bottom w-dropdown-list"} as={"nav"}>
                      <SiteLink href={"/the-complete-guide-to-personal-and-business-finance/course-details"} className={"dropdown-link w-dropdown-link"}>
{"Personal And Business Finance"}
                      </SiteLink>
                      <SiteLink href={"/operations-management-and-process-improvement/course-details"} className={"dropdown-link w-dropdown-link"}>
{"Management And Process Improvement"}
                      </SiteLink>
                      <SiteLink href={"/learn-interactive-web-design-by-building-real-projects/course-details"} className={"dropdown-link w-dropdown-link"}>
{"Interactive Web Design"}
                      </SiteLink>
                      <SiteLink href={"/design-systems-and-pattern-libraries/course-details"} className={"dropdown-link w-dropdown-link"}>
{"Design Systems And Pattern Libraries"}
                      </SiteLink>
                      <SiteLink href={"/grow-your-brand-and-reach-your-audience/course-details"} className={"dropdown-link w-dropdown-link"}>
{"Grow Your Brand And Reach Your Audience"}
                      </SiteLink>
                      <SiteLink href={"/risk-management-and-business-continuity/course-details"} className={"dropdown-link w-dropdown-link"}>
{"Risk Management"}
                      </SiteLink>
                      <SiteLink href={"/database-integration-with-mongodb/course-details"} className={"dropdown-link w-dropdown-link"}>
{"Database Integration With MongoDB"}
                      </SiteLink>
                      <SiteLink href={"/full-stack-development-with-the-mern-stack/course-details"} className={"dropdown-link w-dropdown-link"}>
{"Full-Stack Development with MERN Stack"}
                      </SiteLink>
                    </Interactive>
                  </Interactive>
                </Interactive>
              </Interactive>
              <Interactive data-motion-id={"c63ce2f1-7896-b1c2-5473-a494d737f227"} data-hover={"true"} data-delay={"0"} className={"dropdown w-dropdown"} as={"div"}>
                <Interactive className={"dropdown-toggle w-dropdown-toggle"} as={"div"}>
                  <div>
{"Pages"}
                  </div>
                  <div className={"icon w-icon-dropdown-toggle"}></div>
                </Interactive>
                <Interactive className={"dropdown-list w-dropdown-list"} as={"nav"}>
                  <SiteLink href={"/about-one"} className={"dropdown-link w-dropdown-link"}>
{"About One"}
                  </SiteLink>
                  <SiteLink href={"/about-two"} className={"dropdown-link w-dropdown-link"}>
{"About Two"}
                  </SiteLink>
                  <SiteLink href={"/course-one"} className={"dropdown-link w-dropdown-link"}>
{"Course One"}
                  </SiteLink>
                  <SiteLink href={"/course-two"} className={"dropdown-link w-dropdown-link"}>
{"Course Two"}
                  </SiteLink>
                  <SiteLink href={"/course-three"} className={"dropdown-link w-dropdown-link"}>
{"Course Three"}
                  </SiteLink>
                  <SiteLink href={"/faq"} className={"dropdown-link w-dropdown-link"}>
{"FAQ"}
                  </SiteLink>
                  <SiteLink href={"/pricing-one"} className={"dropdown-link w-dropdown-link"}>
{"Pricing One"}
                  </SiteLink>
                  <SiteLink href={"/pricing-two"} className={"dropdown-link w-dropdown-link"}>
{"Pricing Two"}
                  </SiteLink>
                  <SiteLink href={"/pricing-three"} className={"dropdown-link w-dropdown-link"}>
{"Pricing Three"}
                  </SiteLink>
                  <SiteLink href={"/career"} className={"dropdown-link w-dropdown-link"}>
{"Career"}
                  </SiteLink>
                  <SiteLink href={"/events"} className={"dropdown-link w-dropdown-link"}>
{"Events"}
                  </SiteLink>
                  <SiteLink href={"/team"} className={"dropdown-link w-dropdown-link"}>
{"Team"}
                  </SiteLink>
                </Interactive>
              </Interactive>
              <Interactive data-motion-id={"c63ce2f1-7896-b1c2-5473-a494d737f243"} data-hover={"true"} data-delay={"0"} className={"dropdown w-dropdown"} as={"div"}>
                <Interactive className={"dropdown-toggle w-dropdown-toggle"} as={"div"}>
                  <div>
{"Blog"}
                  </div>
                  <div className={"icon w-icon-dropdown-toggle"}></div>
                </Interactive>
                <Interactive className={"dropdown-list w-dropdown-list"} as={"nav"}>
                  <SiteLink href={"/blog-one"} className={"dropdown-link w-dropdown-link"}>
{"Blog One"}
                  </SiteLink>
                  <SiteLink href={"/blog-two"} className={"dropdown-link w-dropdown-link"}>
{"Blog Two"}
                  </SiteLink>
                  <SiteLink href={"/blog-three"} className={"dropdown-link w-dropdown-link"}>
{"Blog Three"}
                  </SiteLink>
                </Interactive>
              </Interactive>
              <Interactive data-motion-id={"c63ce2f1-7896-b1c2-5473-a494d737f24f"} data-hover={"true"} data-delay={"0"} className={"dropdown w-dropdown"} as={"div"}>
                <Interactive className={"dropdown-toggle w-dropdown-toggle"} as={"div"}>
                  <div>
{"Contact"}
                  </div>
                  <div className={"icon w-icon-dropdown-toggle"}></div>
                </Interactive>
                <Interactive className={"dropdown-list w-dropdown-list"} as={"nav"}>
                  <SiteLink href={"/contact-one"} className={"dropdown-link w-dropdown-link"}>
{"Contact One"}
                  </SiteLink>
                  <SiteLink href={"/contact-two"} className={"dropdown-link w-dropdown-link"}>
{"Contact Two"}
                  </SiteLink>
                  <SiteLink href={"/contact-three"} className={"dropdown-link w-dropdown-link"}>
{"Contact Three"}
                  </SiteLink>
                </Interactive>
              </Interactive>
            </Interactive>
            <div className={"w-layout-hflex navbar-right"}>
              <div className={"w-commerce-commercecartwrapper cart"}>
                <CartButton className={"w-commerce-commercecartopenlink cart-button w-inline-block"} role={"button"} aria-haspopup={"dialog"} aria-label={"Open cart"}>
                  <img src={"/assets/6dc206a4-66c6fb8ba5e099697cc76c17_Cart.svg"} loading={"lazy"} width={"18"} height={"23"} alt={"Icon"} className={"cart-icon"} />
                  <CartCount className={"w-commerce-commercecartopenlinkcount cart-quantity"}>
{"0"}
                  </CartCount>
                </CartButton>
              </div>
              <div className={"w-layout-hflex log-in-wrapper"}>
                <AuthButton className={"user-log-in-log-out"} type={"button"}>
{"Logout"}
                </AuthButton>
                <div className={"menu-border"}></div>
                <SiteLink href={"/sign-up"} className={"menu-font text-white"}>
{"Register"}
                </SiteLink>
              </div>
            </div>
            <Interactive className={"menu-button w-nav-button"} as={"div"}>
              <div className={"menu-bars"}>
                <div className={"bar menu-bar-one"}></div>
                <div className={"bar menu-bar-two"}></div>
              </div>
            </Interactive>
          </div>
        </div>
      </Interactive>
      <section className={"desktop-menu menu-two"}>
        <div className={"w-layout-blockcontainer navbar-container navbar-style-two w-container"}>
          <div className={"w-layout-hflex navbar-wrapper"}>
            <SiteLink href={"/home-one"} className={"no-padding w-inline-block"}>
              <img src={"/assets/ccc5f759-66c6fb8bf82fe9cef5f78d65_Elearna.svg"} loading={"lazy"} alt={"Elearna"} className={"elerna"} />
            </SiteLink>
            <div id={"w-node-_7eb3cca6-13cf-7235-9406-8c91967107b9-9bbd8d79"} className={"w-layout-hflex desktop-menu-wrapper"}>
              <Interactive data-hover={"true"} data-delay={"0"} className={"dropdown w-dropdown"} as={"div"}>
                <Interactive className={"dropdown-toggle w-dropdown-toggle"} as={"div"}>
                  <div>
{"Home"}
                  </div>
                  <div className={"icon w-icon-dropdown-toggle"}></div>
                </Interactive>
                <Interactive className={"dropdown-list w-dropdown-list"} as={"nav"}>
                  <SiteLink href={"/home-one"} className={"dropdown-link w-dropdown-link"}>
{"Home One"}
                  </SiteLink>
                  <SiteLink href={"/home-two"} className={"dropdown-link w-dropdown-link"}>
{"Home Two"}
                  </SiteLink>
                  <SiteLink href={"/home-three"} className={"dropdown-link w-dropdown-link"}>
{"Home Three"}
                  </SiteLink>
                </Interactive>
              </Interactive>
              <Interactive data-hover={"true"} data-delay={"0"} className={"dropdown mega-menu-dropdown w-dropdown"} as={"div"}>
                <Interactive className={"dropdown-toggle w-dropdown-toggle"} as={"div"}>
                  <div>
{"Courses"}
                  </div>
                  <div className={"icon w-icon-dropdown-toggle"}></div>
                </Interactive>
                <Interactive className={"dropdown-list mega-menu w-dropdown-list"} as={"nav"}>
                  <div className={"w-layout-hflex mega-menu-inside"}>
                    <div className={"mega-menu-right-wrapper"}>
                      <div data-motion-id={"7eb3cca6-13cf-7235-9406-8c91967107ce"} className={"w-layout-vflex mega-menu-box free-box"}>
                        <div className={"mega-menu-headings"}>
{"Free courses"}
                        </div>
                        <p className={"mega-menu-description hover-off"}>
{"Free learning resources for skill development."}
                        </p>
                      </div>
                      <div data-motion-id={"7eb3cca6-13cf-7235-9406-8c91967107d3"} className={"w-layout-vflex mega-menu-box paid-box"}>
                        <div className={"mega-menu-headings"}>
{"Paid courses"}
                        </div>
                        <p className={"mega-menu-description hover-off"}>
{"Courses are available upon purchase.(Requires login)"}
                        </p>
                      </div>
                    </div>
                    <div className={"mega-menu-option"}>
                      <div className={"mega-menu-block free"}>
                        <div className={"w-layout-vflex mega-menu-columns"}>
                          <div className={"small-shot-heading"}>
{"Finance"}
                          </div>
                          <SiteLink href={"/understanding-corporate-finance-and-investments/course-details"} className={"mega-menu-description"}>
{"Understanding corporate finance and investments"}
                          </SiteLink>
                        </div>
                        <div className={"w-layout-vflex mega-menu-columns"}>
                          <div className={"small-shot-heading"}>
{"Design"}
                          </div>
                          <SiteLink href={"/advanced-photoshop-techniques-for-designers/course-details"} className={"mega-menu-description"}>
{"Advanced photoshop techniques for designers"}
                          </SiteLink>
                        </div>
                        <div className={"w-layout-vflex mega-menu-columns"}>
                          <div className={"small-shot-heading"}>
{"Management"}
                          </div>
                          <SiteLink href={"/crisis-management-and-problem-solving-strategies/course-details"} className={"mega-menu-description"}>
{"Crisis management and problem-solving strategies"}
                          </SiteLink>
                        </div>
                        <div className={"w-layout-vflex mega-menu-columns"}>
                          <div className={"small-shot-heading"}>
{"Development"}
                          </div>
                          <SiteLink href={"/building-single-page-applications-with-angular/course-details"} className={"mega-menu-description"}>
{"Building single page applications with angular"}
                          </SiteLink>
                        </div>
                      </div>
                      <div className={"mega-menu-block paid"}>
                        <div className={"w-layout-vflex mega-menu-columns"}>
                          <div className={"small-shot-heading"}>
{"Finance"}
                          </div>
                          <SiteLink href={"/the-complete-guide-to-personal-and-business-finance/course-details"} className={"mega-menu-description"}>
{"The complete guide to personal and business finance"}
                          </SiteLink>
                          <SiteLink href={"/operations-management-and-process-improvement/course-details"} className={"mega-menu-description"}>
{"Operations management and process improvement"}
                          </SiteLink>
                        </div>
                        <div className={"w-layout-vflex mega-menu-columns"}>
                          <div className={"small-shot-heading"}>
{"Design"}
                          </div>
                          <SiteLink href={"/learn-interactive-web-design-by-building-real-projects/course-details"} className={"mega-menu-description"}>
{"Learn interactive Web Design by building real projects"}
                          </SiteLink>
                          <SiteLink href={"/design-systems-and-pattern-libraries/course-details"} className={"mega-menu-description"}>
{"Design systems and pattern libraries"}
                          </SiteLink>
                        </div>
                        <div className={"w-layout-vflex mega-menu-columns"}>
                          <div className={"small-shot-heading"}>
{"Management"}
                          </div>
                          <SiteLink href={"/grow-your-brand-and-reach-your-audience/course-details"} className={"mega-menu-description"}>
{"Grow your brand and reach your audience"}
                          </SiteLink>
                          <SiteLink href={"/risk-management-and-business-continuity/course-details"} className={"mega-menu-description"}>
{"Risk management and business continuity"}
                          </SiteLink>
                        </div>
                        <div className={"w-layout-vflex mega-menu-columns"}>
                          <div className={"small-shot-heading"}>
{"Development"}
                          </div>
                          <SiteLink href={"/database-integration-with-mongodb/course-details"} className={"mega-menu-description"}>
{"Database integration with MongoDB"}
                          </SiteLink>
                          <SiteLink href={"/full-stack-development-with-the-mern-stack/course-details"} className={"mega-menu-description"}>
{"Full-stack development with the MERN stack"}
                          </SiteLink>
                        </div>
                      </div>
                      <div className={"w-layout-hflex mega-menu-add"}>
                        <img src={"/assets/043bc555-67123069e49297274bf9143a_Coins-Icons.svg"} loading={"lazy"} width={"47"} height={"47"} alt={"Icons"} />
                        <div className={"w-layout-vflex menu-add-middle"}>
                          <div className={"mega-menu-headings"}>
{"Increase your potential earnings"}
                          </div>
                          <p className={"mega-menu-description hover-off"}>
{"Lorem ipsum dolor sit amet scelerisque integer adipiscing velit sem sed."}
                          </p>
                        </div>
                        <SiteLink href={"/career"} className={"link-block w-inline-block"}>
                          <img src={"/assets/174a6561-66c86330828a126c2bb6c4d9_Button-Arrow-Black.png"} loading={"lazy"} width={"13"} alt={"Icon"} />
                        </SiteLink>
                      </div>
                    </div>
                  </div>
                </Interactive>
              </Interactive>
              <Interactive data-hover={"true"} data-delay={"0"} className={"dropdown w-dropdown"} as={"div"}>
                <Interactive className={"dropdown-toggle w-dropdown-toggle"} as={"div"}>
                  <div>
{"Pages"}
                  </div>
                  <div className={"icon w-icon-dropdown-toggle"}></div>
                </Interactive>
                <Interactive className={"dropdown-list w-dropdown-list"} as={"nav"}>
                  <SiteLink href={"/about-one"} className={"dropdown-link w-dropdown-link"}>
{"About One"}
                  </SiteLink>
                  <SiteLink href={"/about-two"} className={"dropdown-link w-dropdown-link"}>
{"About Two"}
                  </SiteLink>
                  <SiteLink href={"/course-one"} className={"dropdown-link w-dropdown-link"}>
{"Course One"}
                  </SiteLink>
                  <SiteLink href={"/course-two"} className={"dropdown-link w-dropdown-link"}>
{"Course Two"}
                  </SiteLink>
                  <SiteLink href={"/course-three"} className={"dropdown-link w-dropdown-link"}>
{"Course Three"}
                  </SiteLink>
                  <SiteLink href={"/faq"} className={"dropdown-link w-dropdown-link"}>
{"FAQ"}
                  </SiteLink>
                  <SiteLink href={"/pricing-one"} className={"dropdown-link w-dropdown-link"}>
{"Pricing One"}
                  </SiteLink>
                  <SiteLink href={"/pricing-two"} className={"dropdown-link w-dropdown-link"}>
{"Pricing Two"}
                  </SiteLink>
                  <SiteLink href={"/pricing-three"} className={"dropdown-link w-dropdown-link"}>
{"Pricing Three"}
                  </SiteLink>
                  <SiteLink href={"/career"} className={"dropdown-link w-dropdown-link"}>
{"Career"}
                  </SiteLink>
                  <SiteLink href={"/events"} className={"dropdown-link w-dropdown-link"}>
{"Events"}
                  </SiteLink>
                  <SiteLink href={"/team"} className={"dropdown-link w-dropdown-link"}>
{"Team"}
                  </SiteLink>
                </Interactive>
              </Interactive>
              <Interactive data-hover={"true"} data-delay={"0"} className={"dropdown w-dropdown"} as={"div"}>
                <Interactive className={"dropdown-toggle w-dropdown-toggle"} as={"div"}>
                  <div>
{"Blog"}
                  </div>
                  <div className={"icon w-icon-dropdown-toggle"}></div>
                </Interactive>
                <Interactive className={"dropdown-list w-dropdown-list"} as={"nav"}>
                  <SiteLink href={"/blog-one"} className={"dropdown-link w-dropdown-link"}>
{"Blog One"}
                  </SiteLink>
                  <SiteLink href={"/blog-two"} className={"dropdown-link w-dropdown-link"}>
{"Blog Two"}
                  </SiteLink>
                  <SiteLink href={"/blog-three"} className={"dropdown-link w-dropdown-link"}>
{"Blog Three"}
                  </SiteLink>
                </Interactive>
              </Interactive>
              <Interactive data-hover={"true"} data-delay={"0"} className={"dropdown w-dropdown"} as={"div"}>
                <Interactive className={"dropdown-toggle w-dropdown-toggle"} as={"div"}>
                  <div>
{"Contact"}
                  </div>
                  <div className={"icon w-icon-dropdown-toggle"}></div>
                </Interactive>
                <Interactive className={"dropdown-list w-dropdown-list"} as={"nav"}>
                  <SiteLink href={"/contact-one"} className={"dropdown-link w-dropdown-link"}>
{"Contact One"}
                  </SiteLink>
                  <SiteLink href={"/contact-two"} className={"dropdown-link w-dropdown-link"}>
{"Contact Two"}
                  </SiteLink>
                  <SiteLink href={"/contact-three"} className={"dropdown-link w-dropdown-link"}>
{"Contact Three"}
                  </SiteLink>
                </Interactive>
              </Interactive>
            </div>
            <div className={"w-layout-hflex navbar-right"}>
              <div className={"w-commerce-commercecartwrapper cart"}>
                <CartButton className={"w-commerce-commercecartopenlink cart-button w-inline-block"} role={"button"} aria-haspopup={"dialog"} aria-label={"Open cart"}>
                  <img src={"/assets/6dc206a4-66c6fb8ba5e099697cc76c17_Cart.svg"} loading={"lazy"} width={"18"} height={"23"} alt={"Icon"} className={"cart-icon"} />
                  <CartCount className={"w-commerce-commercecartopenlinkcount cart-quantity"}>
{"0"}
                  </CartCount>
                </CartButton>
              </div>
              <div className={"w-layout-hflex log-in-wrapper"}>
                <AuthButton className={"user-log-in-log-out"} type={"button"}>
{"Logout"}
                </AuthButton>
                <div className={"menu-border"}></div>
                <SiteLink href={"/sign-up"} className={"menu-font text-white"}>
{"Register"}
                </SiteLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section className={"team-hero"}>
      <div className={"w-layout-blockcontainer w-container"}>
        <div className={"w-layout-vflex team-hero-main"}>
          <h1 data-motion-id={"786d4cfe-9687-b140-181d-ac54d2620960"} className={"no-margin text-white"}>
{"Our experts"}
          </h1>
        </div>
      </div>
    </section>
    <section className={"team-section"}>
      <div className={"w-layout-blockcontainer container w-container"}>
        <div className={"w-layout-vflex team-main"}>
          <div data-motion-id={"a5ff96f1-0b24-9a8e-5c74-a45508423d0b"} className={"small-heading text-dark"}>
{"Contact Us"}
          </div>
          <h2 data-motion-id={"4722a677-355e-395b-bb5d-d7525effd287"} className={"heading-two-gap-updown team-heading"}>
{"Know our expert team agents, they solve your questions"}
          </h2>
          <div>
{"Lorem ipsum dolor sit amet consectetur. Neque libero donec hendrerit nam id"}
          </div>
        </div>
        <div className={"w-dyn-list"}>
          <div role={"list"} className={"team-wrapper w-dyn-items"}>
            <div role={"listitem"} className={"w-dyn-item"}>
              <SiteLink data-motion-id={"e9757ef1-b057-99b3-d185-fa04bd2db5f9"} href={"/team-members/leslie-upton"} className={"team-card w-inline-block"}>
                <div className={"team-card-image"}>
                  <img src={"/assets/f4df7a40-66e54e091763e997592e23aa_Team-Member-2.webp"} loading={"lazy"} width={"Auto"} height={"410"} alt={"Team Member Image"} sizes={"(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"} srcSet={"/assets/43f3d990-66e54e091763e997592e23aa_Team-Member-2-p-500.webp 500w, /assets/bd0bd1c4-66e54e091763e997592e23aa_Team-Member-2-p-800.webp 800w, /assets/9a808f64-66e54e091763e997592e23aa_Team-Member-2-p-1080.webp 1080w, /assets/f4df7a40-66e54e091763e997592e23aa_Team-Member-2.webp 1240w"} className={"team-member-image"} />
                </div>
                <div className={"w-layout-vflex team-member-names"}>
                  <div className={"heading-five"}>
{"Leslie Upton"}
                  </div>
                  <div className={"small-shot-heading small-heading-body-color"}>
{"instructor"}
                  </div>
                </div>
              </SiteLink>
            </div>
            <div role={"listitem"} className={"w-dyn-item"}>
              <SiteLink data-motion-id={"e9757ef1-b057-99b3-d185-fa04bd2db5f9"} href={"/team-members/darnell-kuphal"} className={"team-card w-inline-block"}>
                <div className={"team-card-image"}>
                  <img src={"/assets/c20e9ecc-66e54dfe163cc2b616b99dd3_Team-Member-3.webp"} loading={"lazy"} width={"Auto"} height={"410"} alt={"Team Member Image"} sizes={"(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"} srcSet={"/assets/1988ec47-66e54dfe163cc2b616b99dd3_Team-Member-3-p-500.webp 500w, /assets/0de92c7a-66e54dfe163cc2b616b99dd3_Team-Member-3-p-800.webp 800w, /assets/10a833ee-66e54dfe163cc2b616b99dd3_Team-Member-3-p-1080.webp 1080w, /assets/c20e9ecc-66e54dfe163cc2b616b99dd3_Team-Member-3.webp 1236w"} className={"team-member-image"} />
                </div>
                <div className={"w-layout-vflex team-member-names"}>
                  <div className={"heading-five"}>
{"Darnell Kuphal"}
                  </div>
                  <div className={"small-shot-heading small-heading-body-color"}>
{"instructor"}
                  </div>
                </div>
              </SiteLink>
            </div>
            <div role={"listitem"} className={"w-dyn-item"}>
              <SiteLink data-motion-id={"e9757ef1-b057-99b3-d185-fa04bd2db5f9"} href={"/team-members/steven-roob"} className={"team-card w-inline-block"}>
                <div className={"team-card-image"}>
                  <img src={"/assets/569f884d-66e54dddec07c3fa3f20027a_Team-Member-4.webp"} loading={"lazy"} width={"Auto"} height={"410"} alt={"Team Member Image"} sizes={"(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"} srcSet={"/assets/4a9c21b7-66e54dddec07c3fa3f20027a_Team-Member-4-p-500.webp 500w, /assets/af56f573-66e54dddec07c3fa3f20027a_Team-Member-4-p-800.webp 800w, /assets/83f516d6-66e54dddec07c3fa3f20027a_Team-Member-4-p-1080.webp 1080w, /assets/569f884d-66e54dddec07c3fa3f20027a_Team-Member-4.webp 1264w"} className={"team-member-image"} />
                </div>
                <div className={"w-layout-vflex team-member-names"}>
                  <div className={"heading-five"}>
{"Steven Roob"}
                  </div>
                  <div className={"small-shot-heading small-heading-body-color"}>
{"instructor"}
                  </div>
                </div>
              </SiteLink>
            </div>
            <div role={"listitem"} className={"w-dyn-item"}>
              <SiteLink data-motion-id={"e9757ef1-b057-99b3-d185-fa04bd2db5f9"} href={"/team-members/wanda-abshire"} className={"team-card w-inline-block"}>
                <div className={"team-card-image"}>
                  <img src={"/assets/5db624e6-66e54da5dd0e5c0326754533_Team-Member-5.webp"} loading={"lazy"} width={"Auto"} height={"410"} alt={"Team Member Image"} sizes={"(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"} srcSet={"/assets/3afbf939-66e54da5dd0e5c0326754533_Team-Member-5-p-500.webp 500w, /assets/663c5911-66e54da5dd0e5c0326754533_Team-Member-5-p-800.webp 800w, /assets/f652fea0-66e54da5dd0e5c0326754533_Team-Member-5-p-1080.webp 1080w, /assets/5db624e6-66e54da5dd0e5c0326754533_Team-Member-5.webp 1264w"} className={"team-member-image"} />
                </div>
                <div className={"w-layout-vflex team-member-names"}>
                  <div className={"heading-five"}>
{"Wanda Abshire"}
                  </div>
                  <div className={"small-shot-heading small-heading-body-color"}>
{"instructor"}
                  </div>
                </div>
              </SiteLink>
            </div>
            <div role={"listitem"} className={"w-dyn-item"}>
              <SiteLink data-motion-id={"e9757ef1-b057-99b3-d185-fa04bd2db5f9"} href={"/team-members/lee-schmitt"} className={"team-card w-inline-block"}>
                <div className={"team-card-image"}>
                  <img src={"/assets/171f9067-66e54d38f0ccaa6615e57338_Team-Member.webp"} loading={"lazy"} width={"Auto"} height={"410"} alt={"Team Member Image"} sizes={"(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"} srcSet={"/assets/99718479-66e54d38f0ccaa6615e57338_Team-Member-p-500.webp 500w, /assets/58e93027-66e54d38f0ccaa6615e57338_Team-Member-p-800.webp 800w, /assets/c631ccc4-66e54d38f0ccaa6615e57338_Team-Member-p-1080.webp 1080w, /assets/171f9067-66e54d38f0ccaa6615e57338_Team-Member.webp 1264w"} className={"team-member-image"} />
                </div>
                <div className={"w-layout-vflex team-member-names"}>
                  <div className={"heading-five"}>
{"Lee Schmitt"}
                  </div>
                  <div className={"small-shot-heading small-heading-body-color"}>
{"instructor"}
                  </div>
                </div>
              </SiteLink>
            </div>
            <div role={"listitem"} className={"w-dyn-item"}>
              <SiteLink data-motion-id={"e9757ef1-b057-99b3-d185-fa04bd2db5f9"} href={"/team-members/jasmine-konopelski"} className={"team-card w-inline-block"}>
                <div className={"team-card-image"}>
                  <img src={"/assets/c51fe745-66e54d1d831de420da7dd70f_Team-Member-6.webp"} loading={"lazy"} width={"Auto"} height={"410"} alt={"Team Member Image"} sizes={"(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"} srcSet={"/assets/874f39c6-66e54d1d831de420da7dd70f_Team-Member-6-p-500.webp 500w, /assets/471031bd-66e54d1d831de420da7dd70f_Team-Member-6-p-800.webp 800w, /assets/40d106cc-66e54d1d831de420da7dd70f_Team-Member-6-p-1080.webp 1080w, /assets/c51fe745-66e54d1d831de420da7dd70f_Team-Member-6.webp 1226w"} className={"team-member-image"} />
                </div>
                <div className={"w-layout-vflex team-member-names"}>
                  <div className={"heading-five"}>
{"Jasmine Konopelski"}
                  </div>
                  <div className={"small-shot-heading small-heading-body-color"}>
{"instructor"}
                  </div>
                </div>
              </SiteLink>
            </div>
            <div role={"listitem"} className={"w-dyn-item"}>
              <SiteLink data-motion-id={"e9757ef1-b057-99b3-d185-fa04bd2db5f9"} href={"/team-members/tonya-flatley"} className={"team-card w-inline-block"}>
                <div className={"team-card-image"}>
                  <img src={"/assets/670296f6-66e54cf958de957ca8c9be63_Team-Member-7.webp"} loading={"lazy"} width={"Auto"} height={"410"} alt={"Team Member Image"} sizes={"(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"} srcSet={"/assets/7827317e-66e54cf958de957ca8c9be63_Team-Member-7-p-500.webp 500w, /assets/aa5d0fec-66e54cf958de957ca8c9be63_Team-Member-7-p-800.webp 800w, /assets/4a105a03-66e54cf958de957ca8c9be63_Team-Member-7-p-1080.webp 1080w, /assets/670296f6-66e54cf958de957ca8c9be63_Team-Member-7.webp 1194w"} className={"team-member-image"} />
                </div>
                <div className={"w-layout-vflex team-member-names"}>
                  <div className={"heading-five"}>
{"Tonya Flatley"}
                  </div>
                  <div className={"small-shot-heading small-heading-body-color"}>
{"instructor"}
                  </div>
                </div>
              </SiteLink>
            </div>
            <div role={"listitem"} className={"w-dyn-item"}>
              <SiteLink data-motion-id={"e9757ef1-b057-99b3-d185-fa04bd2db5f9"} href={"/team-members/colin-fay"} className={"team-card w-inline-block"}>
                <div className={"team-card-image"}>
                  <img src={"/assets/d3c0757a-66e54cd0f0ccaa6615e5101f_Team-Member-8.webp"} loading={"lazy"} width={"Auto"} height={"410"} alt={"Team Member Image"} sizes={"(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"} srcSet={"/assets/0cebb176-66e54cd0f0ccaa6615e5101f_Team-Member-8-p-500.webp 500w, /assets/6693687a-66e54cd0f0ccaa6615e5101f_Team-Member-8-p-800.webp 800w, /assets/13fd9a65-66e54cd0f0ccaa6615e5101f_Team-Member-8-p-1080.webp 1080w, /assets/d3c0757a-66e54cd0f0ccaa6615e5101f_Team-Member-8.webp 1244w"} className={"team-member-image"} />
                </div>
                <div className={"w-layout-vflex team-member-names"}>
                  <div className={"heading-five"}>
{"Colin Fay"}
                  </div>
                  <div className={"small-shot-heading small-heading-body-color"}>
{"instructor"}
                  </div>
                </div>
              </SiteLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className={"cta-three"}>
      <div className={"w-layout-blockcontainer cta-three-container w-container"}>
        <div className={"w-layout-hflex cta-three-main"}>
          <div data-motion-id={"88293f59-0187-6056-3a72-86586e29ff70"} className={"heading-three cta-heading text-white"}>
{"Are you ready to start your journey?"}
          </div>
          <div data-motion-id={"88293f59-0187-6056-3a72-86586e29ff72"} className={"w-layout-hflex cta-button-wrapper"}>
            <SiteLink data-motion-id={"890a1aa9-6573-2ea8-6a51-6c8deb450bab"} href={"/course-one"} className={"button white-border-button w-inline-block"}>
              <div>
{"Browse courses"}
              </div>
            </SiteLink>
            <SiteLink data-motion-id={"d2419891-9f36-e25c-7c72-b1716c5d291d"} href={"/career"} className={"button button-yellow w-inline-block"}>
              <div>
{"Became an  instructor"}
              </div>
            </SiteLink>
          </div>
        </div>
      </div>
    </section>
    <section className={"footer-two"}>
      <div data-motion-id={"e1c36f32-de27-e1d0-913a-a0776cbd6ec0"} className={"w-layout-blockcontainer container w-container"}>
        <div className={"w-layout-hflex footer-two-main"}>
          <div id={"w-node-e1c36f32-de27-e1d0-913a-a0776cbd6ec2-6cbd6ebf"} className={"w-layout-vflex footer-links-wrap"}>
            <SiteLink href={"/home-one"} className={"w-inline-block"}>
              <img src={"/assets/ccc5f759-66c6fb8bf82fe9cef5f78d65_Elearna.svg"} loading={"lazy"} width={"105"} height={"26"} alt={"Elearna"} className={"elerna"} />
            </SiteLink>
            <p className={"no-margin-bottom"}>
{"Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus quis eget amet ut tristique cras."}
            </p>
          </div>
          <div className={"w-layout-vflex footer-links-wrap-two"}>
            <div className={"heading-five text-white"}>
{"Popular courses"}
            </div>
            <div className={"w-layout-vflex links-wrap"}>
              <SiteLink href={"/category/finance"} className={"footer-link-hover"}>
{"Finance"}
              </SiteLink>
              <SiteLink href={"/category/management"} className={"footer-link-hover"}>
{"Management"}
              </SiteLink>
              <SiteLink href={"/category/design"} className={"footer-link-hover"}>
{"Design"}
              </SiteLink>
              <SiteLink href={"/category/development"} className={"footer-link-hover"}>
{"Web development"}
              </SiteLink>
            </div>
          </div>
          <div className={"w-layout-vflex footer-links-wrap-two"}>
            <div className={"heading-five text-white"}>
{"Company"}
            </div>
            <div className={"w-layout-vflex links-wrap"}>
              <SiteLink href={"/about-one"} className={"footer-link-hover"}>
{"About"}
              </SiteLink>
              <SiteLink href={"/course-two"} className={"footer-link-hover"}>
{"Courses"}
              </SiteLink>
              <SiteLink href={"/blog-one"} className={"footer-link-hover"}>
{"Blog"}
              </SiteLink>
              <SiteLink href={"/contact-one"} className={"footer-link-hover"}>
{"Contact"}
              </SiteLink>
              <SiteLink href={"/information/license"} className={"footer-link-hover"}>
{"License"}
              </SiteLink>
              <SiteLink href={"/pricing-one"} className={"footer-link-hover"}>
{"Pricing"}
              </SiteLink>
            </div>
          </div>
          <div className={"w-layout-vflex footer-links-wrap-two"}>
            <div className={"heading-five text-white"}>
{"CMS"}
            </div>
            <div className={"w-layout-vflex links-wrap"}>
              <SiteLink href={"/grow-your-brand-and-reach-your-audience/course-details"} className={"footer-link-hover"}>
{"Course details"}
              </SiteLink>
              <SiteLink href={"/team-members/lee-schmitt"} className={"footer-link-hover"}>
{"Instructor details"}
              </SiteLink>
              <SiteLink href={"/grow-your-brand-and-reach-your-audience/course-details"} className={"footer-link-hover"}>
{"Blog details"}
              </SiteLink>
            </div>
          </div>
          <div className={"w-layout-vflex footer-links-wrap-three"}>
            <div className={"heading-five text-white"}>
{"Need help?"}
            </div>
            <div className={"w-layout-vflex footer-links-contact"}>
              <div>
                <div>
{"Call us"}
                </div>
                <SiteLink href={"tel:8881234567"} className={"heading-five text-white footer-hover-in"}>
{"(888) 123 4567"}
                </SiteLink>
              </div>
              <div>
                <div>
{"Need support?"}
                </div>
                <SiteLink href={"mailto:info@example.com"} className={"heading-five text-white footer-hover-in"}>
{"info@example.com"}
                </SiteLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-motion-id={"e1c36f32-de27-e1d0-913a-a0776cbd6efb"} className={"w-layout-blockcontainer footer-container w-container"}>
        <div className={"border-one"}></div>
        <div className={"w-layout-hflex footer-bottom-main"}>
          <div className={"footer-bottom-text"}>
{"Design by "}
            <SiteLink href={"https://www.radianttemplates.com"} target={"_blank"} className={"footer-bottom-link"}>
{"Radiant Templates"}
            </SiteLink>
          </div>
          <div className={"footer-bottom-text"}>
{"Powered by "}
            <SiteLink href={"https://webflow.com/?r=0"} className={"footer-bottom-link"}>
{"Webflow"}
            </SiteLink>
          </div>
        </div>
      </div>
    </section>
  </>);
}
