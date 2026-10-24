import {
  SiteLink,
  Interactive,
  CartButton,
  CartCount,
  AuthButton,
  SiteForm,
} from "../components/Interactions";
import { Checkout } from "../components/Commerce";
import { CourseCard } from "../components/CourseCard";
import courseCards from "../data/course-cards.json";

export default function Page() {
  return (
    <>
      <div
        data-motion-id={"005386ac-8f56-69ff-a08d-d6f59bbd8d79"}
        className={"navbar-two"}
      >
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
                <SiteLink
                  href={"mailto:support@example.com "}
                  className={"top-nav-text"}
                >
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
        <Interactive
          data-motion-id={"005386ac-8f56-69ff-a08d-d6f59bbd8d86"}
          data-animation={"default"}
          data-collapse={"medium"}
          data-duration={"400"}
          data-easing={"ease"}
          data-easing2={"ease"}
          role={"banner"}
          className={"nav-two w-nav"}
          as={"div"}
        >
          <div className={"container w-container"}>
            <div className={"navbar-wrapper"}>
              <SiteLink href={"/home-one"} className={"no-padding w-nav-brand"}>
                <img
                  src={"/assets/ccc5f759-66c6fb8bf82fe9cef5f78d65_Elearna.svg"}
                  loading={"lazy"}
                  width={"105"}
                  height={"26"}
                  alt={"Elearna"}
                  className={"elerna"}
                />
              </SiteLink>
              <Interactive
                role={"navigation"}
                id={"w-node-c63ce2f1-7896-b1c2-5473-a494d737f1ea-9bbd8d79"}
                className={"nav-menu w-nav-menu"}
                as={"nav"}
              >
                <Interactive
                  data-motion-id={"c63ce2f1-7896-b1c2-5473-a494d737f1eb"}
                  data-hover={"true"}
                  data-delay={"0"}
                  className={"dropdown w-dropdown"}
                  as={"div"}
                >
                  <Interactive
                    className={"dropdown-toggle w-dropdown-toggle"}
                    as={"div"}
                  >
                    <div>{"Home"}</div>
                    <div className={"icon w-icon-dropdown-toggle"}></div>
                  </Interactive>
                  <Interactive
                    className={"dropdown-list w-dropdown-list"}
                    as={"nav"}
                  >
                    <SiteLink
                      href={"/home-one"}
                      className={"dropdown-link w-dropdown-link"}
                    >
                      {"Home One"}
                    </SiteLink>
                    <SiteLink
                      href={"/home-two"}
                      className={"dropdown-link w-dropdown-link"}
                    >
                      {"Home Two"}
                    </SiteLink>
                    <SiteLink
                      href={"/home-three"}
                      className={"dropdown-link w-dropdown-link"}
                    >
                      {"Home Three"}
                    </SiteLink>
                  </Interactive>
                </Interactive>
                <Interactive
                  data-hover={"true"}
                  data-delay={"0"}
                  className={"dropdown w-dropdown"}
                  as={"div"}
                >
                  <Interactive
                    className={"dropdown-toggle w-dropdown-toggle"}
                    as={"div"}
                  >
                    <div>{"Courses"}</div>
                    <div className={"icon w-icon-dropdown-toggle"}></div>
                  </Interactive>
                  <Interactive
                    className={"dropdown-list w-dropdown-list"}
                    as={"nav"}
                  >
                    <Interactive
                      data-hover={"true"}
                      data-delay={"0"}
                      className={"sub-dropdown w-dropdown"}
                      as={"div"}
                    >
                      <Interactive
                        className={"sub-dropdown-toggle w-dropdown-toggle"}
                        as={"div"}
                      >
                        <div>{"Free"}</div>
                        <div
                          className={"dropdown-icon w-icon-dropdown-toggle"}
                        ></div>
                      </Interactive>
                      <Interactive
                        className={"menu-sublist w-dropdown-list"}
                        as={"nav"}
                      >
                        <SiteLink
                          href={
                            "/understanding-corporate-finance-and-investments/course-details"
                          }
                          className={"dropdown-link w-dropdown-link"}
                        >
                          {"Corporate Finance And Investments"}
                        </SiteLink>
                        <SiteLink
                          href={
                            "/advanced-photoshop-techniques-for-designers/course-details"
                          }
                          className={"dropdown-link w-dropdown-link"}
                        >
                          {"Advanced Photoshop Techniques"}
                        </SiteLink>
                        <SiteLink
                          href={
                            "/crisis-management-and-problem-solving-strategies/course-details"
                          }
                          className={"dropdown-link w-dropdown-link"}
                        >
                          {"Crisis Management"}
                        </SiteLink>
                        <SiteLink
                          href={
                            "/building-single-page-applications-with-angular/course-details"
                          }
                          className={"dropdown-link w-dropdown-link"}
                        >
                          {"Single Page Applications With Angular"}
                        </SiteLink>
                      </Interactive>
                    </Interactive>
                    <Interactive
                      data-hover={"true"}
                      data-delay={"0"}
                      className={"sub-dropdown w-dropdown"}
                      as={"div"}
                    >
                      <Interactive
                        className={"sub-dropdown-toggle w-dropdown-toggle"}
                        as={"div"}
                      >
                        <div>{"Paid"}</div>
                        <div
                          className={"dropdown-icon w-icon-dropdown-toggle"}
                        ></div>
                      </Interactive>
                      <Interactive
                        className={
                          "menu-sublist sub-menu-bottom w-dropdown-list"
                        }
                        as={"nav"}
                      >
                        <SiteLink
                          href={
                            "/the-complete-guide-to-personal-and-business-finance/course-details"
                          }
                          className={"dropdown-link w-dropdown-link"}
                        >
                          {"Personal And Business Finance"}
                        </SiteLink>
                        <SiteLink
                          href={
                            "/operations-management-and-process-improvement/course-details"
                          }
                          className={"dropdown-link w-dropdown-link"}
                        >
                          {"Management And Process Improvement"}
                        </SiteLink>
                        <SiteLink
                          href={
                            "/learn-interactive-web-design-by-building-real-projects/course-details"
                          }
                          className={"dropdown-link w-dropdown-link"}
                        >
                          {"Interactive Web Design"}
                        </SiteLink>
                        <SiteLink
                          href={
                            "/design-systems-and-pattern-libraries/course-details"
                          }
                          className={"dropdown-link w-dropdown-link"}
                        >
                          {"Design Systems And Pattern Libraries"}
                        </SiteLink>
                        <SiteLink
                          href={
                            "/grow-your-brand-and-reach-your-audience/course-details"
                          }
                          className={"dropdown-link w-dropdown-link"}
                        >
                          {"Grow Your Brand And Reach Your Audience"}
                        </SiteLink>
                        <SiteLink
                          href={
                            "/risk-management-and-business-continuity/course-details"
                          }
                          className={"dropdown-link w-dropdown-link"}
                        >
                          {"Risk Management"}
                        </SiteLink>
                        <SiteLink
                          href={
                            "/database-integration-with-mongodb/course-details"
                          }
                          className={"dropdown-link w-dropdown-link"}
                        >
                          {"Database Integration With MongoDB"}
                        </SiteLink>
                        <SiteLink
                          href={
                            "/full-stack-development-with-the-mern-stack/course-details"
                          }
                          className={"dropdown-link w-dropdown-link"}
                        >
                          {"Full-Stack Development with MERN Stack"}
                        </SiteLink>
                      </Interactive>
                    </Interactive>
                  </Interactive>
                </Interactive>
                <Interactive
                  data-motion-id={"c63ce2f1-7896-b1c2-5473-a494d737f227"}
                  data-hover={"true"}
                  data-delay={"0"}
                  className={"dropdown w-dropdown"}
                  as={"div"}
                >
                  <Interactive
                    className={"dropdown-toggle w-dropdown-toggle"}
                    as={"div"}
                  >
                    <div>{"Pages"}</div>
                    <div className={"icon w-icon-dropdown-toggle"}></div>
                  </Interactive>
                  <Interactive
                    className={"dropdown-list w-dropdown-list"}
                    as={"nav"}
                  >
                    <SiteLink
                      href={"/about-one"}
                      className={"dropdown-link w-dropdown-link"}
                    >
                      {"About One"}
                    </SiteLink>
                    <SiteLink
                      href={"/about-two"}
                      className={"dropdown-link w-dropdown-link"}
                    >
                      {"About Two"}
                    </SiteLink>
                    <SiteLink
                      href={"/course-one"}
                      className={"dropdown-link w-dropdown-link"}
                    >
                      {"Course One"}
                    </SiteLink>
                    <SiteLink
                      href={"/course-two"}
                      className={"dropdown-link w-dropdown-link"}
                    >
                      {"Course Two"}
                    </SiteLink>
                    <SiteLink
                      href={"/course-three"}
                      className={"dropdown-link w-dropdown-link"}
                    >
                      {"Course Three"}
                    </SiteLink>
                    <SiteLink
                      href={"/faq"}
                      className={"dropdown-link w-dropdown-link"}
                    >
                      {"FAQ"}
                    </SiteLink>
                    <SiteLink
                      href={"/pricing-one"}
                      className={"dropdown-link w-dropdown-link"}
                    >
                      {"Pricing One"}
                    </SiteLink>
                    <SiteLink
                      href={"/pricing-two"}
                      className={"dropdown-link w-dropdown-link"}
                    >
                      {"Pricing Two"}
                    </SiteLink>
                    <SiteLink
                      href={"/pricing-three"}
                      className={"dropdown-link w-dropdown-link"}
                    >
                      {"Pricing Three"}
                    </SiteLink>
                    <SiteLink
                      href={"/career"}
                      className={"dropdown-link w-dropdown-link"}
                    >
                      {"Career"}
                    </SiteLink>
                    <SiteLink
                      href={"/events"}
                      className={"dropdown-link w-dropdown-link"}
                    >
                      {"Events"}
                    </SiteLink>
                    <SiteLink
                      href={"/team"}
                      className={"dropdown-link w-dropdown-link"}
                    >
                      {"Team"}
                    </SiteLink>
                  </Interactive>
                </Interactive>
                <Interactive
                  data-motion-id={"c63ce2f1-7896-b1c2-5473-a494d737f243"}
                  data-hover={"true"}
                  data-delay={"0"}
                  className={"dropdown w-dropdown"}
                  as={"div"}
                >
                  <Interactive
                    className={"dropdown-toggle w-dropdown-toggle"}
                    as={"div"}
                  >
                    <div>{"Blog"}</div>
                    <div className={"icon w-icon-dropdown-toggle"}></div>
                  </Interactive>
                  <Interactive
                    className={"dropdown-list w-dropdown-list"}
                    as={"nav"}
                  >
                    <SiteLink
                      href={"/blog-one"}
                      className={"dropdown-link w-dropdown-link"}
                    >
                      {"Blog One"}
                    </SiteLink>
                    <SiteLink
                      href={"/blog-two"}
                      className={"dropdown-link w-dropdown-link"}
                    >
                      {"Blog Two"}
                    </SiteLink>
                    <SiteLink
                      href={"/blog-three"}
                      className={"dropdown-link w-dropdown-link"}
                    >
                      {"Blog Three"}
                    </SiteLink>
                  </Interactive>
                </Interactive>
                <Interactive
                  data-motion-id={"c63ce2f1-7896-b1c2-5473-a494d737f24f"}
                  data-hover={"true"}
                  data-delay={"0"}
                  className={"dropdown w-dropdown"}
                  as={"div"}
                >
                  <Interactive
                    className={"dropdown-toggle w-dropdown-toggle"}
                    as={"div"}
                  >
                    <div>{"Contact"}</div>
                    <div className={"icon w-icon-dropdown-toggle"}></div>
                  </Interactive>
                  <Interactive
                    className={"dropdown-list w-dropdown-list"}
                    as={"nav"}
                  >
                    <SiteLink
                      href={"/contact-one"}
                      className={"dropdown-link w-dropdown-link"}
                    >
                      {"Contact One"}
                    </SiteLink>
                    <SiteLink
                      href={"/contact-two"}
                      className={"dropdown-link w-dropdown-link"}
                    >
                      {"Contact Two"}
                    </SiteLink>
                    <SiteLink
                      href={"/contact-three"}
                      className={"dropdown-link w-dropdown-link"}
                    >
                      {"Contact Three"}
                    </SiteLink>
                  </Interactive>
                </Interactive>
              </Interactive>
              <div className={"w-layout-hflex navbar-right"}>
                <div className={"w-commerce-commercecartwrapper cart"}>
                  <CartButton
                    className={
                      "w-commerce-commercecartopenlink cart-button w-inline-block"
                    }
                    role={"button"}
                    aria-haspopup={"dialog"}
                    aria-label={"Open cart"}
                  >
                    <img
                      src={"/assets/6dc206a4-66c6fb8ba5e099697cc76c17_Cart.svg"}
                      loading={"lazy"}
                      width={"18"}
                      height={"23"}
                      alt={"Icon"}
                      className={"cart-icon"}
                    />
                    <CartCount
                      className={
                        "w-commerce-commercecartopenlinkcount cart-quantity"
                      }
                    >
                      {"0"}
                    </CartCount>
                  </CartButton>
                </div>
                <div className={"w-layout-hflex log-in-wrapper"}>
                  <AuthButton className={"user-log-in-log-out"} type={"button"}>
                    {"Logout"}
                  </AuthButton>
                  <div className={"menu-border"}></div>
                  <SiteLink
                    href={"/sign-up"}
                    className={"menu-font text-white"}
                  >
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
          <div
            className={
              "w-layout-blockcontainer navbar-container navbar-style-two w-container"
            }
          >
            <div className={"w-layout-hflex navbar-wrapper"}>
              <SiteLink
                href={"/home-one"}
                className={"no-padding w-inline-block"}
              >
                <img
                  src={"/assets/ccc5f759-66c6fb8bf82fe9cef5f78d65_Elearna.svg"}
                  loading={"lazy"}
                  alt={"Elearna"}
                  className={"elerna"}
                />
              </SiteLink>
              <div
                id={"w-node-_7eb3cca6-13cf-7235-9406-8c91967107b9-9bbd8d79"}
                className={"w-layout-hflex desktop-menu-wrapper"}
              >
                <Interactive
                  data-hover={"true"}
                  data-delay={"0"}
                  className={"dropdown w-dropdown"}
                  as={"div"}
                >
                  <Interactive
                    className={"dropdown-toggle w-dropdown-toggle"}
                    as={"div"}
                  >
                    <div>{"Home"}</div>
                    <div className={"icon w-icon-dropdown-toggle"}></div>
                  </Interactive>
                  <Interactive
                    className={"dropdown-list w-dropdown-list"}
                    as={"nav"}
                  >
                    <SiteLink
                      href={"/home-one"}
                      className={"dropdown-link w-dropdown-link"}
                    >
                      {"Home One"}
                    </SiteLink>
                    <SiteLink
                      href={"/home-two"}
                      className={"dropdown-link w-dropdown-link"}
                    >
                      {"Home Two"}
                    </SiteLink>
                    <SiteLink
                      href={"/home-three"}
                      className={"dropdown-link w-dropdown-link"}
                    >
                      {"Home Three"}
                    </SiteLink>
                  </Interactive>
                </Interactive>
                <Interactive
                  data-hover={"true"}
                  data-delay={"0"}
                  className={"dropdown mega-menu-dropdown w-dropdown"}
                  as={"div"}
                >
                  <Interactive
                    className={"dropdown-toggle w-dropdown-toggle"}
                    as={"div"}
                  >
                    <div>{"Courses"}</div>
                    <div className={"icon w-icon-dropdown-toggle"}></div>
                  </Interactive>
                  <Interactive
                    className={"dropdown-list mega-menu w-dropdown-list"}
                    as={"nav"}
                  >
                    <div className={"w-layout-hflex mega-menu-inside"}>
                      <div className={"mega-menu-right-wrapper"}>
                        <div
                          data-motion-id={
                            "7eb3cca6-13cf-7235-9406-8c91967107ce"
                          }
                          className={"w-layout-vflex mega-menu-box free-box"}
                        >
                          <div className={"mega-menu-headings"}>
                            {"Free courses"}
                          </div>
                          <p className={"mega-menu-description hover-off"}>
                            {"Free learning resources for skill development."}
                          </p>
                        </div>
                        <div
                          data-motion-id={
                            "7eb3cca6-13cf-7235-9406-8c91967107d3"
                          }
                          className={"w-layout-vflex mega-menu-box paid-box"}
                        >
                          <div className={"mega-menu-headings"}>
                            {"Paid courses"}
                          </div>
                          <p className={"mega-menu-description hover-off"}>
                            {
                              "Courses are available upon purchase.(Requires login)"
                            }
                          </p>
                        </div>
                      </div>
                      <div className={"mega-menu-option"}>
                        <div className={"mega-menu-block free"}>
                          <div className={"w-layout-vflex mega-menu-columns"}>
                            <div className={"small-shot-heading"}>
                              {"Finance"}
                            </div>
                            <SiteLink
                              href={
                                "/understanding-corporate-finance-and-investments/course-details"
                              }
                              className={"mega-menu-description"}
                            >
                              {
                                "Understanding corporate finance and investments"
                              }
                            </SiteLink>
                          </div>
                          <div className={"w-layout-vflex mega-menu-columns"}>
                            <div className={"small-shot-heading"}>
                              {"Design"}
                            </div>
                            <SiteLink
                              href={
                                "/advanced-photoshop-techniques-for-designers/course-details"
                              }
                              className={"mega-menu-description"}
                            >
                              {"Advanced photoshop techniques for designers"}
                            </SiteLink>
                          </div>
                          <div className={"w-layout-vflex mega-menu-columns"}>
                            <div className={"small-shot-heading"}>
                              {"Management"}
                            </div>
                            <SiteLink
                              href={
                                "/crisis-management-and-problem-solving-strategies/course-details"
                              }
                              className={"mega-menu-description"}
                            >
                              {
                                "Crisis management and problem-solving strategies"
                              }
                            </SiteLink>
                          </div>
                          <div className={"w-layout-vflex mega-menu-columns"}>
                            <div className={"small-shot-heading"}>
                              {"Development"}
                            </div>
                            <SiteLink
                              href={
                                "/building-single-page-applications-with-angular/course-details"
                              }
                              className={"mega-menu-description"}
                            >
                              {"Building single page applications with angular"}
                            </SiteLink>
                          </div>
                        </div>
                        <div className={"mega-menu-block paid"}>
                          <div className={"w-layout-vflex mega-menu-columns"}>
                            <div className={"small-shot-heading"}>
                              {"Finance"}
                            </div>
                            <SiteLink
                              href={
                                "/the-complete-guide-to-personal-and-business-finance/course-details"
                              }
                              className={"mega-menu-description"}
                            >
                              {
                                "The complete guide to personal and business finance"
                              }
                            </SiteLink>
                            <SiteLink
                              href={
                                "/operations-management-and-process-improvement/course-details"
                              }
                              className={"mega-menu-description"}
                            >
                              {"Operations management and process improvement"}
                            </SiteLink>
                          </div>
                          <div className={"w-layout-vflex mega-menu-columns"}>
                            <div className={"small-shot-heading"}>
                              {"Design"}
                            </div>
                            <SiteLink
                              href={
                                "/learn-interactive-web-design-by-building-real-projects/course-details"
                              }
                              className={"mega-menu-description"}
                            >
                              {
                                "Learn interactive Web Design by building real projects"
                              }
                            </SiteLink>
                            <SiteLink
                              href={
                                "/design-systems-and-pattern-libraries/course-details"
                              }
                              className={"mega-menu-description"}
                            >
                              {"Design systems and pattern libraries"}
                            </SiteLink>
                          </div>
                          <div className={"w-layout-vflex mega-menu-columns"}>
                            <div className={"small-shot-heading"}>
                              {"Management"}
                            </div>
                            <SiteLink
                              href={
                                "/grow-your-brand-and-reach-your-audience/course-details"
                              }
                              className={"mega-menu-description"}
                            >
                              {"Grow your brand and reach your audience"}
                            </SiteLink>
                            <SiteLink
                              href={
                                "/risk-management-and-business-continuity/course-details"
                              }
                              className={"mega-menu-description"}
                            >
                              {"Risk management and business continuity"}
                            </SiteLink>
                          </div>
                          <div className={"w-layout-vflex mega-menu-columns"}>
                            <div className={"small-shot-heading"}>
                              {"Development"}
                            </div>
                            <SiteLink
                              href={
                                "/database-integration-with-mongodb/course-details"
                              }
                              className={"mega-menu-description"}
                            >
                              {"Database integration with MongoDB"}
                            </SiteLink>
                            <SiteLink
                              href={
                                "/full-stack-development-with-the-mern-stack/course-details"
                              }
                              className={"mega-menu-description"}
                            >
                              {"Full-stack development with the MERN stack"}
                            </SiteLink>
                          </div>
                        </div>
                        <div className={"w-layout-hflex mega-menu-add"}>
                          <img
                            src={
                              "/assets/043bc555-67123069e49297274bf9143a_Coins-Icons.svg"
                            }
                            loading={"lazy"}
                            width={"47"}
                            height={"47"}
                            alt={"Icons"}
                          />
                          <div className={"w-layout-vflex menu-add-middle"}>
                            <div className={"mega-menu-headings"}>
                              {"Increase your potential earnings"}
                            </div>
                            <p className={"mega-menu-description hover-off"}>
                              {
                                "Lorem ipsum dolor sit amet scelerisque integer adipiscing velit sem sed."
                              }
                            </p>
                          </div>
                          <SiteLink
                            href={"/career"}
                            className={"link-block w-inline-block"}
                          >
                            <img
                              src={
                                "/assets/174a6561-66c86330828a126c2bb6c4d9_Button-Arrow-Black.png"
                              }
                              loading={"lazy"}
                              width={"13"}
                              alt={"Icon"}
                            />
                          </SiteLink>
                        </div>
                      </div>
                    </div>
                  </Interactive>
                </Interactive>
                <Interactive
                  data-hover={"true"}
                  data-delay={"0"}
                  className={"dropdown w-dropdown"}
                  as={"div"}
                >
                  <Interactive
                    className={"dropdown-toggle w-dropdown-toggle"}
                    as={"div"}
                  >
                    <div>{"Pages"}</div>
                    <div className={"icon w-icon-dropdown-toggle"}></div>
                  </Interactive>
                  <Interactive
                    className={"dropdown-list w-dropdown-list"}
                    as={"nav"}
                  >
                    <SiteLink
                      href={"/about-one"}
                      className={"dropdown-link w-dropdown-link"}
                    >
                      {"About One"}
                    </SiteLink>
                    <SiteLink
                      href={"/about-two"}
                      className={"dropdown-link w-dropdown-link"}
                    >
                      {"About Two"}
                    </SiteLink>
                    <SiteLink
                      href={"/course-one"}
                      className={"dropdown-link w-dropdown-link"}
                    >
                      {"Course One"}
                    </SiteLink>
                    <SiteLink
                      href={"/course-two"}
                      className={"dropdown-link w-dropdown-link"}
                    >
                      {"Course Two"}
                    </SiteLink>
                    <SiteLink
                      href={"/course-three"}
                      className={"dropdown-link w-dropdown-link"}
                    >
                      {"Course Three"}
                    </SiteLink>
                    <SiteLink
                      href={"/faq"}
                      className={"dropdown-link w-dropdown-link"}
                    >
                      {"FAQ"}
                    </SiteLink>
                    <SiteLink
                      href={"/pricing-one"}
                      className={"dropdown-link w-dropdown-link"}
                    >
                      {"Pricing One"}
                    </SiteLink>
                    <SiteLink
                      href={"/pricing-two"}
                      className={"dropdown-link w-dropdown-link"}
                    >
                      {"Pricing Two"}
                    </SiteLink>
                    <SiteLink
                      href={"/pricing-three"}
                      className={"dropdown-link w-dropdown-link"}
                    >
                      {"Pricing Three"}
                    </SiteLink>
                    <SiteLink
                      href={"/career"}
                      className={"dropdown-link w-dropdown-link"}
                    >
                      {"Career"}
                    </SiteLink>
                    <SiteLink
                      href={"/events"}
                      className={"dropdown-link w-dropdown-link"}
                    >
                      {"Events"}
                    </SiteLink>
                    <SiteLink
                      href={"/team"}
                      className={"dropdown-link w-dropdown-link"}
                    >
                      {"Team"}
                    </SiteLink>
                  </Interactive>
                </Interactive>
                <Interactive
                  data-hover={"true"}
                  data-delay={"0"}
                  className={"dropdown w-dropdown"}
                  as={"div"}
                >
                  <Interactive
                    className={"dropdown-toggle w-dropdown-toggle"}
                    as={"div"}
                  >
                    <div>{"Blog"}</div>
                    <div className={"icon w-icon-dropdown-toggle"}></div>
                  </Interactive>
                  <Interactive
                    className={"dropdown-list w-dropdown-list"}
                    as={"nav"}
                  >
                    <SiteLink
                      href={"/blog-one"}
                      className={"dropdown-link w-dropdown-link"}
                    >
                      {"Blog One"}
                    </SiteLink>
                    <SiteLink
                      href={"/blog-two"}
                      className={"dropdown-link w-dropdown-link"}
                    >
                      {"Blog Two"}
                    </SiteLink>
                    <SiteLink
                      href={"/blog-three"}
                      className={"dropdown-link w-dropdown-link"}
                    >
                      {"Blog Three"}
                    </SiteLink>
                  </Interactive>
                </Interactive>
                <Interactive
                  data-hover={"true"}
                  data-delay={"0"}
                  className={"dropdown w-dropdown"}
                  as={"div"}
                >
                  <Interactive
                    className={"dropdown-toggle w-dropdown-toggle"}
                    as={"div"}
                  >
                    <div>{"Contact"}</div>
                    <div className={"icon w-icon-dropdown-toggle"}></div>
                  </Interactive>
                  <Interactive
                    className={"dropdown-list w-dropdown-list"}
                    as={"nav"}
                  >
                    <SiteLink
                      href={"/contact-one"}
                      className={"dropdown-link w-dropdown-link"}
                    >
                      {"Contact One"}
                    </SiteLink>
                    <SiteLink
                      href={"/contact-two"}
                      className={"dropdown-link w-dropdown-link"}
                    >
                      {"Contact Two"}
                    </SiteLink>
                    <SiteLink
                      href={"/contact-three"}
                      className={"dropdown-link w-dropdown-link"}
                    >
                      {"Contact Three"}
                    </SiteLink>
                  </Interactive>
                </Interactive>
              </div>
              <div className={"w-layout-hflex navbar-right"}>
                <div className={"w-commerce-commercecartwrapper cart"}>
                  <CartButton
                    className={
                      "w-commerce-commercecartopenlink cart-button w-inline-block"
                    }
                    role={"button"}
                    aria-haspopup={"dialog"}
                    aria-label={"Open cart"}
                  >
                    <img
                      src={"/assets/6dc206a4-66c6fb8ba5e099697cc76c17_Cart.svg"}
                      loading={"lazy"}
                      width={"18"}
                      height={"23"}
                      alt={"Icon"}
                      className={"cart-icon"}
                    />
                    <CartCount
                      className={
                        "w-commerce-commercecartopenlinkcount cart-quantity"
                      }
                    >
                      {"0"}
                    </CartCount>
                  </CartButton>
                </div>
                <div className={"w-layout-hflex log-in-wrapper"}>
                  <AuthButton className={"user-log-in-log-out"} type={"button"}>
                    {"Logout"}
                  </AuthButton>
                  <div className={"menu-border"}></div>
                  <SiteLink
                    href={"/sign-up"}
                    className={"menu-font text-white"}
                  >
                    {"Register"}
                  </SiteLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section
        style={{
          backgroundImage:
            'url("/assets/1fc84196-6710bcfbe2ff495668259a3f_Course-Image-6.webp")',
        }}
        className={"course-hero"}
      >
        <div className={"course-hero-overlay"}></div>
        <div className={"course-hero-box"}>
          <div className={"w-layout-blockcontainer container w-container"}>
            <div className={"w-layout-vflex course-hero-content-box"}>
              <div className={"small-heading text-light-white"}>
                {"5.00 (1.2K)"}
              </div>
              <h1
                className={
                  "heading-one-top-gap text-white margin-bottom-thirty-five"
                }
              >
                {"Advanced photoshop techniques for designers"}
              </h1>
              <div className={"w-layout-hflex course-hero-ratting"}>
                <img
                  src={"/assets/8f74b198-66c6fb8b857efb6c4c737b5d_Rating.svg"}
                  loading={"lazy"}
                  alt={""}
                />
                <div className={"text-light-white"}>{"5.00 (1.2K)"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"course-short-information"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"course-short-information-main"}>
            <div className={"w-layout-hflex course-short-information-box"}>
              <img
                src={
                  "/assets/84034dd2-66ed2b4dd66d1f67877ff988_Clock-Icons-2.svg"
                }
                loading={"lazy"}
                width={"30"}
                height={"31"}
                alt={"Icons"}
                className={"margin-top-five"}
              />
              <div className={"w-layout-vflex"}>
                <div className={"heading-six margin-bottom-five"}>
                  {"Time span"}
                </div>
                <div className={"text-small text-dark"}>{"4 weeks"}</div>
              </div>
            </div>
            <div className={"w-layout-hflex course-short-information-box"}>
              <img
                src={
                  "/assets/ec794265-66ed2b4db284234066c29758_Books-Icons.svg"
                }
                loading={"lazy"}
                width={"28"}
                height={"32"}
                alt={"Icons"}
                className={"margin-top-five"}
              />
              <div className={"w-layout-vflex"}>
                <div className={"heading-six margin-bottom-five"}>
                  {"Lectures"}
                </div>
                <div className={"text-small text-dark"}>{"8 Lessons"}</div>
              </div>
            </div>
            <div className={"w-layout-hflex course-short-information-box"}>
              <img
                src={
                  "/assets/7dd3862f-66ed2b4deb1f70f5a655d940_Skills-Arrow.svg"
                }
                loading={"lazy"}
                width={"36"}
                height={"32"}
                alt={"Icons"}
                className={"margin-top-five"}
              />
              <div className={"w-layout-vflex"}>
                <div className={"heading-six margin-bottom-five"}>
                  {"Skill level"}
                </div>
                <div className={"text-small text-dark"}>{"Beginner"}</div>
              </div>
            </div>
            <div className={"w-layout-hflex course-short-information-box"}>
              <img
                src={
                  "/assets/e55a919a-66ed2b4d31c3e04c229773da_Video-Icons.svg"
                }
                loading={"lazy"}
                width={"29"}
                height={"31"}
                alt={"Icons"}
                className={"margin-top-five"}
              />
              <div className={"w-layout-vflex"}>
                <div className={"heading-six margin-bottom-five"}>
                  {"Video lessons"}
                </div>
                <div className={"text-small text-dark"}>{"10 hours"}</div>
              </div>
            </div>
            <div
              className={
                "w-layout-hflex course-short-information-box border-off"
              }
            >
              <img
                src={"/assets/811f519c-66ed2b4d04e91f137e0edb2c_Persons.svg"}
                loading={"lazy"}
                width={"30"}
                height={"30"}
                alt={"Icons"}
                className={"margin-top-five"}
              />
              <div className={"w-layout-vflex"}>
                <div className={"heading-six margin-bottom-five"}>
                  {"Students"}
                </div>
                <div className={"text-small text-dark"}>{"25k Enrolled"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"course-details"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div>
            <Interactive
              data-current={"Tab 1"}
              data-easing={"ease"}
              data-duration-in={"300"}
              data-duration-out={"100"}
              className={"course-details-tab w-tabs"}
              as={"div"}
            >
              <Interactive
                className={"course-details-tabs w-tab-menu"}
                as={"div"}
              >
                <Interactive
                  data-w-tab={"Tab 1"}
                  className={
                    "course-details-tabs-options w-inline-block w-tab-link"
                  }
                  as={"a"}
                >
                  <div>{"Overview"}</div>
                </Interactive>
                <Interactive
                  data-w-tab={"Tab 2"}
                  className={
                    "course-details-tabs-options w-inline-block w-tab-link"
                  }
                  as={"a"}
                >
                  <div>{"Curriculum"}</div>
                </Interactive>
                <Interactive
                  data-w-tab={"Tab 3"}
                  className={
                    "course-details-tabs-options w-inline-block w-tab-link"
                  }
                  as={"a"}
                >
                  <div>{"Instructor"}</div>
                </Interactive>
                <Interactive
                  data-w-tab={"Tab 4"}
                  className={
                    "course-details-tabs-options w-inline-block w-tab-link"
                  }
                  as={"a"}
                >
                  <div>{"FAQ"}</div>
                </Interactive>
                <Interactive
                  data-w-tab={"Tab 5"}
                  className={
                    "course-details-tabs-options w-inline-block w-tab-link"
                  }
                  as={"a"}
                >
                  <div>{"query"}</div>
                </Interactive>
              </Interactive>
              <div className={"course-tab-content w-tab-content"}>
                <Interactive
                  data-w-tab={"Tab 1"}
                  className={"w-tab-pane w--tab-active"}
                  as={"div"}
                >
                  <div className={"w-richtext"}>
                    <h3>{"Course description"}</h3>
                    <p>
                      {
                        "Lorem ipsum dolor sit amet consectetur. Et facilisis nunc quam quam etiam donec pellentesque ut. Nisl pellentesque at aliquam scelerisque non consequat amet curabitur. Imperdiet habitant purus pulvinar diam. Molestie pharetra morbi eu odio volutpat. Cursus velit elit senectus auctor vitae tristique velit. Feugiat consequat diam ipsum suspendisse vestibulum ipsum malesuada. Adipiscing nulla hac enim vivamus elementum massa. Est feugiat sed eget vestibulum."
                      }
                    </p>
                    <p>{"‍"}</p>
                    <h4>{"Main features"}</h4>
                    <ul role={"list"}>
                      <li>{"Lorem ipsum dolor sit amet consectetur."}</li>
                      <li>
                        {
                          "Et facilisis nunc quam quam etiam donec pellentesque ut."
                        }
                      </li>
                      <li>
                        {
                          "Nisl pellentesque at aliquam scelerisque non consequat amet curabitur. Imperdiet habitant purus pulvinar diam."
                        }
                      </li>
                      <li>{"Molestie pharetra morbi eu odio volutpat."}</li>
                      <li>
                        {
                          "Cursus velit elit senectus auctor vitae tristique velit."
                        }
                      </li>
                      <li>
                        {
                          "Feugiat consequat diam ipsum suspendisse vestibulum ipsum malesuada."
                        }
                      </li>
                    </ul>
                    <p>{"‍"}</p>
                    <h4>{"What is the target audience?"}</h4>
                    <p>
                      {
                        "Lorem ipsum dolor sit amet consectetur. Nibh urna quis tempus elit ultrices amet. Convallis facilisis duis vivamus ut suspendisse imperdiet vel eleifend maecenas. Mi senectus eu nec mattis lacus dolor in diam cursus. Eu magna enim sed duis enim fames vitae ornare pretium. Consequat egestas amet eget neque sed. Quis elementum amet diam sapien adipiscing dis dignissim."
                      }
                    </p>
                  </div>
                </Interactive>
                <Interactive
                  data-w-tab={"Tab 2"}
                  className={"w-tab-pane"}
                  as={"div"}
                >
                  <div>
                    <Interactive
                      data-current={"Tab 1"}
                      data-easing={"ease"}
                      data-duration-in={"300"}
                      data-duration-out={"100"}
                      className={"curriculum-tab w-tabs"}
                      as={"div"}
                    >
                      <Interactive
                        className={"curriculum-tabs-menu w-tab-menu"}
                        as={"div"}
                      >
                        <Interactive
                          data-w-tab={"Tab 1"}
                          className={
                            "course-details-tabs-options w-inline-block w-tab-link"
                          }
                          as={"a"}
                        >
                          <div>{"Lesson 1"}</div>
                        </Interactive>
                        <Interactive
                          data-w-tab={"Tab 2"}
                          className={
                            "course-details-tabs-options w-inline-block w-tab-link"
                          }
                          as={"a"}
                        >
                          <div>{"Lesson 2"}</div>
                        </Interactive>
                        <Interactive
                          data-w-tab={"Tab 3"}
                          className={
                            "course-details-tabs-options w-inline-block w-tab-link"
                          }
                          as={"a"}
                        >
                          <div>{"Lesson 3"}</div>
                        </Interactive>
                        <Interactive
                          data-w-tab={"Tab 4"}
                          className={
                            "course-details-tabs-options w-inline-block w-tab-link"
                          }
                          as={"a"}
                        >
                          <div>{"Lesson 4"}</div>
                        </Interactive>
                        <Interactive
                          data-w-tab={"Tab 5"}
                          className={
                            "course-details-tabs-options w-inline-block w-tab-link"
                          }
                          as={"a"}
                        >
                          <div>{"Lesson 5"}</div>
                        </Interactive>
                      </Interactive>
                      <div className={"curriculum-tab-content w-tab-content"}>
                        <Interactive
                          data-w-tab={"Tab 1"}
                          className={"w-tab-pane w--tab-active"}
                          as={"div"}
                        >
                          <div>
                            <div
                              className={"heading-three margin-bottom-thirty"}
                            >
                              {
                                "Introduction to photoshop techniques for designers"
                              }
                            </div>
                            <div className={"w-richtext"}>
                              <h5>{"Introduction"}</h5>
                              <p>
                                {
                                  "Lorem ipsum dolor sit amet consectetur. Et facilisis nunc quam quam etiam donec pellentesque ut. Nisl pellentesque at aliquam scelerisque non consequat amet curabitur. Imperdiet habitant purus pulvinar diam. Molestie pharetra morbi eu odio volutpat. Cursus velit elit senectus auctor vitae tristique velit. Feugiat consequat diam ipsum suspendisse vestibulum ipsum malesuada."
                                }
                              </p>
                              <p>{"‍"}</p>
                              <figure
                                style={{ paddingBottom: "56.25%" }}
                                className={
                                  "w-richtext-align-fullwidth w-richtext-figure-type-video"
                                }
                              >
                                <div>
                                  <iframe
                                    src={
                                      "https://www.youtube.com/embed/setu9Ir1miY"
                                    }
                                    scrolling={"no"}
                                    frameBorder={"0"}
                                    allowFullScreen={true}
                                  ></iframe>
                                </div>
                              </figure>
                              <p>{"‍"}</p>
                              <h5>{"Main features"}</h5>
                              <ul role={"list"}>
                                <li>
                                  {"Lorem ipsum dolor sit amet consectetur."}
                                </li>
                                <li>
                                  {
                                    "Et facilisis nunc quam quam etiam donec pellentesque ut."
                                  }
                                </li>
                                <li>
                                  {
                                    "Nisl pellentesque at aliquam scelerisque non consequat amet curabitur. Imperdiet habitant purus pulvinar diam."
                                  }
                                </li>
                                <li>
                                  {"Molestie pharetra morbi eu odio volutpat."}
                                </li>
                                <li>
                                  {
                                    "Cursus velit elit senectus auctor vitae tristique velit."
                                  }
                                </li>
                                <li>
                                  {
                                    "Feugiat consequat diam ipsum suspendisse vestibulum ipsum malesuada."
                                  }
                                </li>
                              </ul>
                              <p>{"‍"}</p>
                              <figure
                                style={{ maxWidth: "1920pxpx" }}
                                className={
                                  "w-richtext-align-fullwidth w-richtext-figure-type-image"
                                }
                              >
                                <div>
                                  <img
                                    loading={"lazy"}
                                    alt={""}
                                    src={
                                      "/assets/1d4cc88d-66f27b23782c6572c6eae153_66f2798135e3471739729357_Details.webp"
                                    }
                                  />
                                </div>
                              </figure>
                              <p>{"‍"}</p>
                              <p>
                                {
                                  "Lorem ipsum dolor sit amet consectetur. Et facilisis nunc quam quam etiam donec pellentesque ut. Nisl pellentesque at aliquam scelerisque non consequat amet curabitur. Imperdiet habitant purus pulvinar diam. Molestie pharetra morbi eu odio volutpat. Cursus velit elit senectus auctor vitae tristique velit. Feugiat consequat diam ipsum suspendisse vestibulum ipsum malesuada."
                                }
                              </p>
                              <p>{"‍"}</p>
                              <h5>{"Lesson Summary"}</h5>
                              <p>
                                {
                                  "Lorem ipsum dolor sit amet consectetur. Et facilisis nunc quam quam etiam donec pellentesque ut. Nisl pellentesque at aliquam scelerisque non consequat amet curabitur. Imperdiet habitant purus pulvinar diam. Molestie pharetra morbi eu odio volutpat. Cursus velit elit senectus auctor vitae tristique velit. Feugiat consequat diam ipsum suspendisse vestibulum ipsum malesuada."
                                }
                              </p>
                            </div>
                          </div>
                        </Interactive>
                        <Interactive
                          data-w-tab={"Tab 2"}
                          className={"w-tab-pane"}
                          as={"div"}
                        >
                          <div>
                            <div
                              className={"heading-three margin-bottom-thirty"}
                            >
                              {
                                "Responsive web design for making sites mobile-friendly"
                              }
                            </div>
                            <div className={"w-richtext"}>
                              <h5>{"Introduction"}</h5>
                              <p>
                                {
                                  "Lorem ipsum dolor sit amet consectetur. Et facilisis nunc quam quam etiam donec pellentesque ut. Nisl pellentesque at aliquam scelerisque non consequat amet curabitur. Imperdiet habitant purus pulvinar diam. Molestie pharetra morbi eu odio volutpat. Cursus velit elit senectus auctor vitae tristique velit. Feugiat consequat diam ipsum suspendisse vestibulum ipsum malesuada."
                                }
                              </p>
                              <p>{"‍"}</p>
                              <figure
                                style={{ paddingBottom: "56.25%" }}
                                className={
                                  "w-richtext-align-fullwidth w-richtext-figure-type-video"
                                }
                              >
                                <div>
                                  <iframe
                                    src={
                                      "https://www.youtube.com/embed/PcFXt8o7uGg"
                                    }
                                    scrolling={"no"}
                                    frameBorder={"0"}
                                    allowFullScreen={true}
                                  ></iframe>
                                </div>
                              </figure>
                              <p>{"‍"}</p>
                              <h5>{"Main features"}</h5>
                              <ul role={"list"}>
                                <li>
                                  {"Lorem ipsum dolor sit amet consectetur."}
                                </li>
                                <li>
                                  {
                                    "Et facilisis nunc quam quam etiam donec pellentesque ut."
                                  }
                                </li>
                                <li>
                                  {
                                    "Nisl pellentesque at aliquam scelerisque non consequat amet curabitur. Imperdiet habitant purus pulvinar diam."
                                  }
                                </li>
                                <li>
                                  {"Molestie pharetra morbi eu odio volutpat."}
                                </li>
                                <li>
                                  {
                                    "Cursus velit elit senectus auctor vitae tristique velit."
                                  }
                                </li>
                                <li>
                                  {
                                    "Feugiat consequat diam ipsum suspendisse vestibulum ipsum malesuada."
                                  }
                                </li>
                              </ul>
                              <p>{"‍"}</p>
                              <figure
                                style={{ maxWidth: "1920px" }}
                                className={
                                  "w-richtext-align-fullwidth w-richtext-figure-type-image"
                                }
                              >
                                <div>
                                  <img
                                    loading={"lazy"}
                                    alt={""}
                                    src={
                                      "/assets/1d4cc88d-66f27b23782c6572c6eae153_66f2798135e3471739729357_Details.webp"
                                    }
                                  />
                                </div>
                              </figure>
                              <p>{"‍"}</p>
                              <p>
                                {
                                  "Lorem ipsum dolor sit amet consectetur. Et facilisis nunc quam quam etiam donec pellentesque ut. Nisl pellentesque at aliquam scelerisque non consequat amet curabitur. Imperdiet habitant purus pulvinar diam. Molestie pharetra morbi eu odio volutpat. Cursus velit elit senectus auctor vitae tristique velit. Feugiat consequat diam ipsum suspendisse vestibulum ipsum malesuada."
                                }
                              </p>
                              <p>{"‍"}</p>
                              <h5>{"Lesson Summary"}</h5>
                              <p>
                                {
                                  "Lorem ipsum dolor sit amet consectetur. Et facilisis nunc quam quam etiam donec pellentesque ut. Nisl pellentesque at aliquam scelerisque non consequat amet curabitur. Imperdiet habitant purus pulvinar diam. Molestie pharetra morbi eu odio volutpat. Cursus velit elit senectus auctor vitae tristique velit. Feugiat consequat diam ipsum suspendisse vestibulum ipsum malesuada."
                                }
                              </p>
                            </div>
                          </div>
                        </Interactive>
                        <Interactive
                          data-w-tab={"Tab 3"}
                          className={"w-tab-pane"}
                          as={"div"}
                        >
                          <div>
                            <div
                              className={"heading-three margin-bottom-thirty"}
                            >
                              {
                                "User experience (UX) basics design for the user"
                              }
                            </div>
                            <div className={"w-richtext"}>
                              <h5>{"Introduction"}</h5>
                              <p>
                                {
                                  "Lorem ipsum dolor sit amet consectetur. Et facilisis nunc quam quam etiam donec pellentesque ut. Nisl pellentesque at aliquam scelerisque non consequat amet curabitur. Imperdiet habitant purus pulvinar diam. Molestie pharetra morbi eu odio volutpat. Cursus velit elit senectus auctor vitae tristique velit. Feugiat consequat diam ipsum suspendisse vestibulum ipsum malesuada."
                                }
                              </p>
                              <p>{"‍"}</p>
                              <figure
                                style={{ paddingBottom: "56.25%" }}
                                className={
                                  "w-richtext-align-fullwidth w-richtext-figure-type-video"
                                }
                              >
                                <div>
                                  <iframe
                                    src={
                                      "https://www.youtube.com/embed/EFHoH15i4Zg"
                                    }
                                    scrolling={"no"}
                                    frameBorder={"0"}
                                    allowFullScreen={true}
                                  ></iframe>
                                </div>
                              </figure>
                              <p>{"‍"}</p>
                              <h5>{"Main features"}</h5>
                              <ul role={"list"}>
                                <li>
                                  {"Lorem ipsum dolor sit amet consectetur."}
                                </li>
                                <li>
                                  {
                                    "Et facilisis nunc quam quam etiam donec pellentesque ut."
                                  }
                                </li>
                                <li>
                                  {
                                    "Nisl pellentesque at aliquam scelerisque non consequat amet curabitur. Imperdiet habitant purus pulvinar diam."
                                  }
                                </li>
                                <li>
                                  {"Molestie pharetra morbi eu odio volutpat."}
                                </li>
                                <li>
                                  {
                                    "Cursus velit elit senectus auctor vitae tristique velit."
                                  }
                                </li>
                                <li>
                                  {
                                    "Feugiat consequat diam ipsum suspendisse vestibulum ipsum malesuada."
                                  }
                                </li>
                              </ul>
                              <p>{"‍"}</p>
                              <figure
                                style={{ maxWidth: "1920px" }}
                                className={
                                  "w-richtext-align-fullwidth w-richtext-figure-type-image"
                                }
                              >
                                <div>
                                  <img
                                    loading={"lazy"}
                                    alt={""}
                                    src={
                                      "/assets/1d4cc88d-66f27b23782c6572c6eae153_66f2798135e3471739729357_Details.webp"
                                    }
                                  />
                                </div>
                              </figure>
                              <p>{"‍"}</p>
                              <p>
                                {
                                  "Lorem ipsum dolor sit amet consectetur. Et facilisis nunc quam quam etiam donec pellentesque ut. Nisl pellentesque at aliquam scelerisque non consequat amet curabitur. Imperdiet habitant purus pulvinar diam. Molestie pharetra morbi eu odio volutpat. Cursus velit elit senectus auctor vitae tristique velit. Feugiat consequat diam ipsum suspendisse vestibulum ipsum malesuada."
                                }
                              </p>
                              <p>{"‍"}</p>
                              <h5>{"Lesson Summary"}</h5>
                              <p>
                                {
                                  "Lorem ipsum dolor sit amet consectetur. Et facilisis nunc quam quam etiam donec pellentesque ut. Nisl pellentesque at aliquam scelerisque non consequat amet curabitur. Imperdiet habitant purus pulvinar diam. Molestie pharetra morbi eu odio volutpat. Cursus velit elit senectus auctor vitae tristique velit. Feugiat consequat diam ipsum suspendisse vestibulum ipsum malesuada."
                                }
                              </p>
                            </div>
                          </div>
                        </Interactive>
                        <Interactive
                          data-w-tab={"Tab 4"}
                          className={"w-tab-pane"}
                          as={"div"}
                        >
                          <div>
                            <div
                              className={"heading-three margin-bottom-thirty"}
                            >
                              {"Creating compelling user interfaces (UI)"}
                            </div>
                            <div className={"w-richtext"}>
                              <h5>{"Introduction"}</h5>
                              <p>
                                {
                                  "Lorem ipsum dolor sit amet consectetur. Et facilisis nunc quam quam etiam donec pellentesque ut. Nisl pellentesque at aliquam scelerisque non consequat amet curabitur. Imperdiet habitant purus pulvinar diam. Molestie pharetra morbi eu odio volutpat. Cursus velit elit senectus auctor vitae tristique velit. Feugiat consequat diam ipsum suspendisse vestibulum ipsum malesuada."
                                }
                              </p>
                              <p>{"‍"}</p>
                              <figure
                                style={{ paddingBottom: "56.25%" }}
                                className={
                                  "w-richtext-align-fullwidth w-richtext-figure-type-video"
                                }
                              >
                                <div>
                                  <iframe
                                    src={
                                      "https://www.youtube.com/embed/De2unauLBks"
                                    }
                                    scrolling={"no"}
                                    frameBorder={"0"}
                                    allowFullScreen={true}
                                  ></iframe>
                                </div>
                              </figure>
                              <p>{"‍"}</p>
                              <h5>{"Main features"}</h5>
                              <ul role={"list"}>
                                <li>
                                  {"Lorem ipsum dolor sit amet consectetur."}
                                </li>
                                <li>
                                  {
                                    "Et facilisis nunc quam quam etiam donec pellentesque ut."
                                  }
                                </li>
                                <li>
                                  {
                                    "Nisl pellentesque at aliquam scelerisque non consequat amet curabitur. Imperdiet habitant purus pulvinar diam."
                                  }
                                </li>
                                <li>
                                  {"Molestie pharetra morbi eu odio volutpat."}
                                </li>
                                <li>
                                  {
                                    "Cursus velit elit senectus auctor vitae tristique velit."
                                  }
                                </li>
                                <li>
                                  {
                                    "Feugiat consequat diam ipsum suspendisse vestibulum ipsum malesuada."
                                  }
                                </li>
                              </ul>
                              <p>{"‍"}</p>
                              <figure
                                style={{ maxWidth: "1920px" }}
                                className={
                                  "w-richtext-align-fullwidth w-richtext-figure-type-image"
                                }
                              >
                                <div>
                                  <img
                                    loading={"lazy"}
                                    alt={""}
                                    src={
                                      "/assets/1d4cc88d-66f27b23782c6572c6eae153_66f2798135e3471739729357_Details.webp"
                                    }
                                  />
                                </div>
                              </figure>
                              <p>{"‍"}</p>
                              <p>
                                {
                                  "Lorem ipsum dolor sit amet consectetur. Et facilisis nunc quam quam etiam donec pellentesque ut. Nisl pellentesque at aliquam scelerisque non consequat amet curabitur. Imperdiet habitant purus pulvinar diam. Molestie pharetra morbi eu odio volutpat. Cursus velit elit senectus auctor vitae tristique velit. Feugiat consequat diam ipsum suspendisse vestibulum ipsum malesuada."
                                }
                              </p>
                              <p>{"‍"}</p>
                              <h5>{"Lesson Summary"}</h5>
                              <p>
                                {
                                  "Lorem ipsum dolor sit amet consectetur. Et facilisis nunc quam quam etiam donec pellentesque ut. Nisl pellentesque at aliquam scelerisque non consequat amet curabitur. Imperdiet habitant purus pulvinar diam. Molestie pharetra morbi eu odio volutpat. Cursus velit elit senectus auctor vitae tristique velit. Feugiat consequat diam ipsum suspendisse vestibulum ipsum malesuada."
                                }
                              </p>
                            </div>
                          </div>
                        </Interactive>
                        <Interactive
                          data-w-tab={"Tab 5"}
                          className={"w-tab-pane"}
                          as={"div"}
                        >
                          <div>
                            <div
                              className={"heading-three margin-bottom-thirty"}
                            >
                              {
                                "Mastering color theory with effective color schemes"
                              }
                            </div>
                            <div className={"w-richtext"}>
                              <h5>{"Introduction"}</h5>
                              <p>
                                {
                                  "Lorem ipsum dolor sit amet consectetur. Et facilisis nunc quam quam etiam donec pellentesque ut. Nisl pellentesque at aliquam scelerisque non consequat amet curabitur. Imperdiet habitant purus pulvinar diam. Molestie pharetra morbi eu odio volutpat. Cursus velit elit senectus auctor vitae tristique velit. Feugiat consequat diam ipsum suspendisse vestibulum ipsum malesuada."
                                }
                              </p>
                              <p>{"‍"}</p>
                              <figure
                                style={{ paddingBottom: "56.25%" }}
                                className={
                                  "w-richtext-align-fullwidth w-richtext-figure-type-video"
                                }
                              >
                                <div>
                                  <iframe
                                    src={
                                      "https://www.youtube.com/embed/pLgPFfFdpDs"
                                    }
                                    scrolling={"no"}
                                    frameBorder={"0"}
                                    allowFullScreen={true}
                                  ></iframe>
                                </div>
                              </figure>
                              <p>{"‍"}</p>
                              <h5>{"Main features"}</h5>
                              <ul role={"list"}>
                                <li>
                                  {"Lorem ipsum dolor sit amet consectetur."}
                                </li>
                                <li>
                                  {
                                    "Et facilisis nunc quam quam etiam donec pellentesque ut."
                                  }
                                </li>
                                <li>
                                  {
                                    "Nisl pellentesque at aliquam scelerisque non consequat amet curabitur. Imperdiet habitant purus pulvinar diam."
                                  }
                                </li>
                                <li>
                                  {"Molestie pharetra morbi eu odio volutpat."}
                                </li>
                                <li>
                                  {
                                    "Cursus velit elit senectus auctor vitae tristique velit."
                                  }
                                </li>
                                <li>
                                  {
                                    "Feugiat consequat diam ipsum suspendisse vestibulum ipsum malesuada."
                                  }
                                </li>
                              </ul>
                              <p>{"‍"}</p>
                              <figure
                                style={{ maxWidth: "1920px" }}
                                className={
                                  "w-richtext-align-fullwidth w-richtext-figure-type-image"
                                }
                              >
                                <div>
                                  <img
                                    loading={"lazy"}
                                    alt={""}
                                    src={
                                      "/assets/1d4cc88d-66f27b23782c6572c6eae153_66f2798135e3471739729357_Details.webp"
                                    }
                                  />
                                </div>
                              </figure>
                              <p>{"‍"}</p>
                              <p>
                                {
                                  "Lorem ipsum dolor sit amet consectetur. Et facilisis nunc quam quam etiam donec pellentesque ut. Nisl pellentesque at aliquam scelerisque non consequat amet curabitur. Imperdiet habitant purus pulvinar diam. Molestie pharetra morbi eu odio volutpat. Cursus velit elit senectus auctor vitae tristique velit. Feugiat consequat diam ipsum suspendisse vestibulum ipsum malesuada."
                                }
                              </p>
                              <p>{"‍"}</p>
                              <h5>{"Lesson Summary"}</h5>
                              <p>
                                {
                                  "Lorem ipsum dolor sit amet consectetur. Et facilisis nunc quam quam etiam donec pellentesque ut. Nisl pellentesque at aliquam scelerisque non consequat amet curabitur. Imperdiet habitant purus pulvinar diam. Molestie pharetra morbi eu odio volutpat. Cursus velit elit senectus auctor vitae tristique velit. Feugiat consequat diam ipsum suspendisse vestibulum ipsum malesuada."
                                }
                              </p>
                            </div>
                          </div>
                        </Interactive>
                      </div>
                    </Interactive>
                  </div>
                </Interactive>
                <Interactive
                  data-w-tab={"Tab 3"}
                  className={"w-tab-pane"}
                  as={"div"}
                >
                  <div>
                    <div className={"heading-three margin-bottom-twenty"}>
                      {"Course instructor"}
                    </div>
                    <p className={"margin-bottom-thirty"}>
                      {
                        "Lorem ipsum dolor sit amet consectetur. Et facilisis nunc quam quam etiam donec pellentesque ut. Nisl pellentesque at aliquam scelerisque non consequat amet curabitur. Imperdiet habitant purus pulvinar diam. Molestie pharetra morbi eu odio volutpat. Cursus velit elit senectus auctor vitae tristique velit. Feugiat consequat diam ipsum suspendisse vestibulum ipsum malesuada."
                      }
                    </p>
                    <div className={"w-dyn-list"}>
                      <div
                        role={"list"}
                        className={"team-wrapper course-team w-dyn-items"}
                      >
                        <div role={"listitem"} className={"w-dyn-item"}>
                          <SiteLink
                            href={"/team-members/leslie-upton"}
                            className={"team-card w-inline-block"}
                          >
                            <div className={"team-card-image"}>
                              <img
                                loading={"lazy"}
                                src={
                                  "/assets/f4df7a40-66e54e091763e997592e23aa_Team-Member-2.webp"
                                }
                                alt={"Instructors"}
                                sizes={"100vw"}
                                srcSet={
                                  "/assets/43f3d990-66e54e091763e997592e23aa_Team-Member-2-p-500.webp 500w, /assets/bd0bd1c4-66e54e091763e997592e23aa_Team-Member-2-p-800.webp 800w, /assets/9a808f64-66e54e091763e997592e23aa_Team-Member-2-p-1080.webp 1080w, /assets/f4df7a40-66e54e091763e997592e23aa_Team-Member-2.webp 1240w"
                                }
                                className={"team-member-image"}
                              />
                            </div>
                            <div className={"w-layout-vflex team-member-names"}>
                              <div className={"heading-five"}>
                                {"Leslie Upton"}
                              </div>
                              <div
                                className={
                                  "small-shot-heading small-heading-body-color"
                                }
                              >
                                {"instructor"}
                              </div>
                            </div>
                          </SiteLink>
                        </div>
                        <div role={"listitem"} className={"w-dyn-item"}>
                          <SiteLink
                            href={"/team-members/lee-schmitt"}
                            className={"team-card w-inline-block"}
                          >
                            <div className={"team-card-image"}>
                              <img
                                loading={"lazy"}
                                src={
                                  "/assets/171f9067-66e54d38f0ccaa6615e57338_Team-Member.webp"
                                }
                                alt={"Instructors"}
                                sizes={"100vw"}
                                srcSet={
                                  "/assets/99718479-66e54d38f0ccaa6615e57338_Team-Member-p-500.webp 500w, /assets/58e93027-66e54d38f0ccaa6615e57338_Team-Member-p-800.webp 800w, /assets/c631ccc4-66e54d38f0ccaa6615e57338_Team-Member-p-1080.webp 1080w, /assets/171f9067-66e54d38f0ccaa6615e57338_Team-Member.webp 1264w"
                                }
                                className={"team-member-image"}
                              />
                            </div>
                            <div className={"w-layout-vflex team-member-names"}>
                              <div className={"heading-five"}>
                                {"Lee Schmitt"}
                              </div>
                              <div
                                className={
                                  "small-shot-heading small-heading-body-color"
                                }
                              >
                                {"instructor"}
                              </div>
                            </div>
                          </SiteLink>
                        </div>
                        <div role={"listitem"} className={"w-dyn-item"}>
                          <SiteLink
                            href={"/team-members/jasmine-konopelski"}
                            className={"team-card w-inline-block"}
                          >
                            <div className={"team-card-image"}>
                              <img
                                loading={"lazy"}
                                src={
                                  "/assets/c51fe745-66e54d1d831de420da7dd70f_Team-Member-6.webp"
                                }
                                alt={"Instructors"}
                                sizes={"100vw"}
                                srcSet={
                                  "/assets/874f39c6-66e54d1d831de420da7dd70f_Team-Member-6-p-500.webp 500w, /assets/471031bd-66e54d1d831de420da7dd70f_Team-Member-6-p-800.webp 800w, /assets/40d106cc-66e54d1d831de420da7dd70f_Team-Member-6-p-1080.webp 1080w, /assets/c51fe745-66e54d1d831de420da7dd70f_Team-Member-6.webp 1226w"
                                }
                                className={"team-member-image"}
                              />
                            </div>
                            <div className={"w-layout-vflex team-member-names"}>
                              <div className={"heading-five"}>
                                {"Jasmine Konopelski"}
                              </div>
                              <div
                                className={
                                  "small-shot-heading small-heading-body-color"
                                }
                              >
                                {"instructor"}
                              </div>
                            </div>
                          </SiteLink>
                        </div>
                        <div role={"listitem"} className={"w-dyn-item"}>
                          <SiteLink
                            href={"/team-members/wanda-abshire"}
                            className={"team-card w-inline-block"}
                          >
                            <div className={"team-card-image"}>
                              <img
                                loading={"lazy"}
                                src={
                                  "/assets/5db624e6-66e54da5dd0e5c0326754533_Team-Member-5.webp"
                                }
                                alt={"Instructors"}
                                sizes={"100vw"}
                                srcSet={
                                  "/assets/3afbf939-66e54da5dd0e5c0326754533_Team-Member-5-p-500.webp 500w, /assets/663c5911-66e54da5dd0e5c0326754533_Team-Member-5-p-800.webp 800w, /assets/f652fea0-66e54da5dd0e5c0326754533_Team-Member-5-p-1080.webp 1080w, /assets/5db624e6-66e54da5dd0e5c0326754533_Team-Member-5.webp 1264w"
                                }
                                className={"team-member-image"}
                              />
                            </div>
                            <div className={"w-layout-vflex team-member-names"}>
                              <div className={"heading-five"}>
                                {"Wanda Abshire"}
                              </div>
                              <div
                                className={
                                  "small-shot-heading small-heading-body-color"
                                }
                              >
                                {"instructor"}
                              </div>
                            </div>
                          </SiteLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </Interactive>
                <Interactive
                  data-w-tab={"Tab 4"}
                  className={"w-tab-pane"}
                  as={"div"}
                >
                  <div>
                    <div className={"heading-three margin-bottom-twenty"}>
                      {"Frequently asked questions"}
                    </div>
                    <p className={"course-details-faq-gap"}>
                      {
                        "Lorem ipsum dolor sit amet consectetur. Et facilisis nunc quam quam etiam donec pellentesque ut. Nisl pellentesque at aliquam scelerisque non consequat amet curabitur. Imperdiet habitant purus pulvinar diam. Molestie pharetra morbi eu odio volutpat. Cursus velit elit senectus auctor vitae tristique velit. Feugiat consequat diam ipsum suspendisse vestibulum ipsum malesuada."
                      }
                    </p>
                    <div className={"faq-s"}>
                      <Interactive
                        data-motion-id={"32c0d755-97f1-3fa3-0c65-d8a8620e772b"}
                        data-delay={"400"}
                        data-hover={"false"}
                        className={"faq-two-dropdown w-dropdown"}
                        as={"div"}
                      >
                        <Interactive
                          className={"faq-two w-dropdown-toggle"}
                          as={"div"}
                        >
                          <div className={"heading-five"}>
                            {"Why is responsive design important?"}
                          </div>
                          <div className={"faq-two-icon"}>
                            <div className={"plus-bar plus-one"}></div>
                            <div
                              style={{
                                transform:
                                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                              }}
                              className={"plus-bar plus-two"}
                            ></div>
                          </div>
                        </Interactive>
                        <Interactive
                          style={{ width: "100%" }}
                          className={"faq-two-list w-dropdown-list"}
                          as={"nav"}
                        >
                          <div className={"faq-two-answers"}>
                            <p>
                              {
                                "Lorem ipsum dolor sit amet consectetur. Et facilisis nunc quam quam etiam donec pellentesque ut. Nisl pellentesque at aliquam scelerisque non consequat amet curabitur. Imperdiet habitant purus pulvinar diam. Molestie pharetra morbi eu odio volutpat. Cursus velit elit senectus auctor vitae tristique velit. Feugiat consequat diam ipsum suspendisse vestibulum ipsum malesuada."
                              }
                            </p>
                          </div>
                        </Interactive>
                      </Interactive>
                      <Interactive
                        data-motion-id={"32c0d755-97f1-3fa3-0c65-d8a8620e7736"}
                        data-delay={"400"}
                        data-hover={"false"}
                        className={"faq-two-dropdown w-dropdown"}
                        as={"div"}
                      >
                        <Interactive
                          className={"faq-two w-dropdown-toggle"}
                          as={"div"}
                        >
                          <div className={"heading-five"}>
                            {"What is the difference between UI and UX design?"}
                          </div>
                          <div className={"faq-two-icon"}>
                            <div className={"plus-bar plus-one"}></div>
                            <div
                              style={{
                                transform:
                                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                              }}
                              className={"plus-bar plus-two"}
                            ></div>
                          </div>
                        </Interactive>
                        <Interactive
                          style={{ width: "100%" }}
                          className={"faq-two-list w-dropdown-list"}
                          as={"nav"}
                        >
                          <div className={"faq-two-answers"}>
                            <p>
                              {
                                "Lorem ipsum dolor sit amet consectetur. Et facilisis nunc quam quam etiam donec pellentesque ut. Nisl pellentesque at aliquam scelerisque non consequat amet curabitur. Imperdiet habitant purus pulvinar diam. Molestie pharetra morbi eu odio volutpat. Cursus velit elit senectus auctor vitae tristique velit. Feugiat consequat diam ipsum suspendisse vestibulum ipsum malesuada."
                              }
                            </p>
                          </div>
                        </Interactive>
                      </Interactive>
                      <Interactive
                        data-motion-id={"32c0d755-97f1-3fa3-0c65-d8a8620e7741"}
                        data-delay={"400"}
                        data-hover={"false"}
                        className={"faq-two-dropdown w-dropdown"}
                        as={"div"}
                      >
                        <Interactive
                          className={"faq-two w-dropdown-toggle"}
                          as={"div"}
                        >
                          <div className={"heading-five"}>
                            {"What is the web design process?"}
                          </div>
                          <div className={"faq-two-icon"}>
                            <div className={"plus-bar plus-one"}></div>
                            <div
                              style={{
                                transform:
                                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                              }}
                              className={"plus-bar plus-two"}
                            ></div>
                          </div>
                        </Interactive>
                        <Interactive
                          style={{ width: "100%" }}
                          className={"faq-two-list w-dropdown-list"}
                          as={"nav"}
                        >
                          <div className={"faq-two-answers"}>
                            <p>
                              {
                                "Lorem ipsum dolor sit amet consectetur. Et facilisis nunc quam quam etiam donec pellentesque ut. Nisl pellentesque at aliquam scelerisque non consequat amet curabitur. Imperdiet habitant purus pulvinar diam. Molestie pharetra morbi eu odio volutpat. Cursus velit elit senectus auctor vitae tristique velit. Feugiat consequat diam ipsum suspendisse vestibulum ipsum malesuada."
                              }
                            </p>
                          </div>
                        </Interactive>
                      </Interactive>
                      <Interactive
                        data-motion-id={"32c0d755-97f1-3fa3-0c65-d8a8620e774c"}
                        data-delay={"400"}
                        data-hover={"false"}
                        className={"faq-two-dropdown w-dropdown"}
                        as={"div"}
                      >
                        <Interactive
                          className={"faq-two w-dropdown-toggle"}
                          as={"div"}
                        >
                          <div className={"heading-five"}>
                            {"How important is content in web design?"}
                          </div>
                          <div className={"faq-two-icon"}>
                            <div className={"plus-bar plus-one"}></div>
                            <div
                              style={{
                                transform:
                                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                              }}
                              className={"plus-bar plus-two"}
                            ></div>
                          </div>
                        </Interactive>
                        <Interactive
                          style={{ width: "100%" }}
                          className={"faq-two-list w-dropdown-list"}
                          as={"nav"}
                        >
                          <div className={"faq-two-answers"}>
                            <p>
                              {
                                "Lorem ipsum dolor sit amet consectetur. Et facilisis nunc quam quam etiam donec pellentesque ut. Nisl pellentesque at aliquam scelerisque non consequat amet curabitur. Imperdiet habitant purus pulvinar diam. Molestie pharetra morbi eu odio volutpat. Cursus velit elit senectus auctor vitae tristique velit. Feugiat consequat diam ipsum suspendisse vestibulum ipsum malesuada."
                              }
                            </p>
                          </div>
                        </Interactive>
                      </Interactive>
                      <Interactive
                        data-motion-id={"32c0d755-97f1-3fa3-0c65-d8a8620e7757"}
                        data-delay={"400"}
                        data-hover={"false"}
                        className={"faq-two-dropdown w-dropdown"}
                        as={"div"}
                      >
                        <Interactive
                          className={"faq-two w-dropdown-toggle"}
                          as={"div"}
                        >
                          <div className={"heading-five"}>
                            {"Can I customize my website’s design?"}
                          </div>
                          <div className={"faq-two-icon"}>
                            <div className={"plus-bar plus-one"}></div>
                            <div
                              style={{
                                transform:
                                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                              }}
                              className={"plus-bar plus-two"}
                            ></div>
                          </div>
                        </Interactive>
                        <Interactive
                          style={{ width: "100%" }}
                          className={"faq-two-list w-dropdown-list"}
                          as={"nav"}
                        >
                          <div className={"faq-two-answers"}>
                            <p>
                              {
                                "Lorem ipsum dolor sit amet consectetur. Et facilisis nunc quam quam etiam donec pellentesque ut. Nisl pellentesque at aliquam scelerisque non consequat amet curabitur. Imperdiet habitant purus pulvinar diam. Molestie pharetra morbi eu odio volutpat. Cursus velit elit senectus auctor vitae tristique velit. Feugiat consequat diam ipsum suspendisse vestibulum ipsum malesuada."
                              }
                            </p>
                          </div>
                        </Interactive>
                      </Interactive>
                    </div>
                  </div>
                </Interactive>
                <Interactive
                  data-w-tab={"Tab 5"}
                  className={"w-tab-pane"}
                  as={"div"}
                >
                  <div className={"w-layout-vflex course-details-form"}>
                    <div className={"w-layout-vflex course-details-form-text"}>
                      <div className={"heading-three margin-bottom-twenty"}>
                        {"Have any questions about this course?"}
                      </div>
                      <p>
                        {
                          "Lorem ipsum dolor sit amet consectetur. Et facilisis nunc quam quam etiam donec pellentesque ut. Nisl pellentesque at aliquam scelerisque non consequat amet curabitur."
                        }
                      </p>
                    </div>
                    <div className={"course-form"}>
                      <div className={"no-margin-bottom w-form"}>
                        <SiteForm
                          id={"wf-form-Course-Query-Form"}
                          name={"wf-form-Course-Query-Form"}
                          data-name={"Course Query Form"}
                          formKind={"contact"}
                          route={
                            "/advanced-photoshop-techniques-for-designers/course-details"
                          }
                        >
                          <div className={"w-layout-hflex course-form-top"}>
                            <input
                              className={"text-field no-margin-bottom w-input"}
                              maxLength={"256"}
                              name={"First-name"}
                              data-name={"First name"}
                              placeholder={"First name*"}
                              type={"text"}
                              id={"First-name"}
                              required={true}
                            />
                            <input
                              className={"text-field no-margin-bottom w-input"}
                              maxLength={"256"}
                              name={"Last-name"}
                              data-name={"Last name"}
                              placeholder={"Last name*"}
                              type={"text"}
                              id={"Last-name"}
                              required={true}
                            />
                          </div>
                          <div className={"course-form-top"}>
                            <input
                              className={"text-field no-margin-bottom w-input"}
                              maxLength={"256"}
                              name={"Your-email"}
                              data-name={"Your email"}
                              placeholder={"Your email*"}
                              type={"email"}
                              id={"Your-email"}
                              required={true}
                            />
                            <input
                              className={"text-field no-margin-bottom w-input"}
                              maxLength={"256"}
                              name={"Course-category"}
                              data-name={"Course category"}
                              placeholder={"Course category*"}
                              type={"text"}
                              id={"Course-category"}
                              required={true}
                            />
                          </div>
                          <textarea
                            id={"Your-query"}
                            name={"Your-query"}
                            maxLength={"5000"}
                            data-name={"Your query"}
                            placeholder={"Your query*"}
                            className={"textarea textarea-gap-thirty w-input"}
                          ></textarea>
                          <label
                            className={
                              "w-checkbox checkbox-field margin-bottom-thirty-five"
                            }
                          >
                            <div
                              className={
                                "w-checkbox-input w-checkbox-input--inputType-custom checkbox"
                              }
                            ></div>
                            <input
                              type={"checkbox"}
                              name={"checkbox"}
                              id={"checkbox"}
                              data-name={"Checkbox"}
                              className={" native-checkbox"}
                            />
                            <span
                              className={"checkbox-label w-form-label"}
                              htmlFor={"checkbox"}
                            >
                              {"Save information for next time."}
                            </span>
                          </label>
                          <div>
                            <input
                              type={"submit"}
                              data-wait={"Please wait..."}
                              className={"button w-button"}
                              value={"Send your query"}
                            />
                          </div>
                        </SiteForm>
                      </div>
                    </div>
                  </div>
                </Interactive>
              </div>
            </Interactive>
          </div>
        </div>
      </section>
      <section className={"course-details-more"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div
            data-motion-id={"a5ff96f1-0b24-9a8e-5c74-a45508423d0b"}
            className={"small-heading text-dark"}
          >
            {"Online learning"}
          </div>
          <h2
            data-motion-id={"3969f338-ac70-d276-1ad3-e0d0efb3eb1c"}
            className={"heading-two-gap-top course-one-store-heading"}
          >
            {"Related courses"}
          </h2>
          <div className={"course-wrap-card"}>
            <div
              data-motion-id={"3969f338-ac70-d276-1ad3-e0d0efb3eb1f"}
              className={"w-dyn-list"}
            >
              <div role={"list"} className={"w-dyn-items"}>
                <div role={"listitem"} className={"w-dyn-item"}>
                  <div
                    data-motion-id={"3969f338-ac70-d276-1ad3-e0d0efb3eb22"}
                    className={"course-wrap-main"}
                  >
                    <img
                      src={
                        "/assets/eb0a4269-66ebabcd61399462d208146a_Course-Portrait-Image.webp"
                      }
                      loading={"lazy"}
                      width={"410"}
                      height={"510"}
                      alt={""}
                      sizes={"(max-width: 479px) 100vw, 410px"}
                      srcSet={
                        "/assets/9c756b9a-66ebabcd61399462d208146a_Course-Portrait-Image-p-500.webp 500w, /assets/ea275139-66ebabcd61399462d208146a_Course-Portrait-Image-p-800.webp 800w, /assets/eb0a4269-66ebabcd61399462d208146a_Course-Portrait-Image.webp 820w"
                      }
                      className={"course-three-image"}
                    />
                    <div className={"course-card-three-overlay"}></div>
                    <div className={"course-card-three-content"}>
                      <div className={"small-shot-heading text-light-white"}>
                        {"Development"}
                      </div>
                      <div
                        className={
                          "heading-four text-white course-name-three-gap"
                        }
                      >
                        {"Building single page applications with angular"}
                      </div>
                      <div className={"w-layout-hflex course-three-rating"}>
                        <img
                          src={
                            "/assets/8f74b198-66c6fb8b857efb6c4c737b5d_Rating.svg"
                          }
                          loading={"lazy"}
                          alt={""}
                        />
                        <div
                          className={
                            "small-shot-heading small-heading-body-color"
                          }
                        >
                          {"5.00 (328)"}
                        </div>
                      </div>
                      <div
                        data-motion-id={"3969f338-ac70-d276-1ad3-e0d0efb3eb2b"}
                        className={"course-three-buttons"}
                      >
                        <div
                          className={"w-layout-hflex course-three-button-wrap"}
                        >
                          <SiteLink
                            data-motion-id={
                              "3969f338-ac70-d276-1ad3-e0d0efb3eb2d"
                            }
                            href={
                              "/building-single-page-applications-with-angular/course-details"
                            }
                            className={
                              "button button-yellow course-button full-grow w-inline-block"
                            }
                          >
                            <div>{"Course details"}</div>
                          </SiteLink>
                        </div>
                      </div>
                      <div
                        data-motion-id={"3969f338-ac70-d276-1ad3-e0d0efb3eb30"}
                        className={"course-three-cards-border-one"}
                      ></div>
                      <div
                        data-motion-id={"3969f338-ac70-d276-1ad3-e0d0efb3eb31"}
                        className={"course-three-cards-border-two"}
                      ></div>
                      <div
                        data-motion-id={"3969f338-ac70-d276-1ad3-e0d0efb3eb32"}
                        className={"course-three-cards-border-three"}
                      ></div>
                      <div
                        data-motion-id={"3969f338-ac70-d276-1ad3-e0d0efb3eb33"}
                        className={"course-three-cards-border-four"}
                      ></div>
                      <div
                        data-motion-id={"3969f338-ac70-d276-1ad3-e0d0efb3eb34"}
                        className={"course-price-wrapper course-three-price"}
                      >
                        <div>{"Free"}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-motion-id={"3969f338-ac70-d276-1ad3-e0d0efb3eb3a"}
              className={"w-dyn-list"}
            >
              <div role={"list"} className={"w-dyn-items"}>
                <div role={"listitem"} className={"w-dyn-item"}>
                  <div
                    data-motion-id={"3969f338-ac70-d276-1ad3-e0d0efb3eb3d"}
                    className={"course-wrap-main"}
                  >
                    <img
                      src={
                        "/assets/e4e1b42f-66ebabde3e87f8984b6782a1_Course-Portrait-Image-9.webp"
                      }
                      loading={"lazy"}
                      width={"410"}
                      height={"510"}
                      alt={""}
                      sizes={"(max-width: 479px) 100vw, 410px"}
                      srcSet={
                        "/assets/3fc75768-66ebabde3e87f8984b6782a1_Course-Portrait-Image-9-p-500.webp 500w, /assets/f3231bc8-66ebabde3e87f8984b6782a1_Course-Portrait-Image-9-p-800.webp 800w, /assets/e4e1b42f-66ebabde3e87f8984b6782a1_Course-Portrait-Image-9.webp 820w"
                      }
                      className={"course-three-image"}
                    />
                    <div className={"course-card-three-overlay"}></div>
                    <div className={"course-card-three-content"}>
                      <div className={"small-shot-heading text-light-white"}>
                        {"Development"}
                      </div>
                      <div
                        className={
                          "heading-four text-white course-name-three-gap"
                        }
                      >
                        {"Database integration with MongoDB"}
                      </div>
                      <div className={"w-layout-hflex course-three-rating"}>
                        <img
                          src={
                            "/assets/8f74b198-66c6fb8b857efb6c4c737b5d_Rating.svg"
                          }
                          loading={"lazy"}
                          alt={""}
                        />
                        <div
                          className={
                            "small-shot-heading small-heading-body-color"
                          }
                        >
                          {"4.49 (756)"}
                        </div>
                      </div>
                      <div
                        data-motion-id={"3969f338-ac70-d276-1ad3-e0d0efb3eb46"}
                        className={"course-three-buttons"}
                      >
                        <div
                          className={"w-layout-hflex course-three-button-wrap"}
                        >
                          <SiteLink
                            data-motion-id={
                              "3969f338-ac70-d276-1ad3-e0d0efb3eb48"
                            }
                            href={
                              "/database-integration-with-mongodb/course-details"
                            }
                            className={
                              "button button-yellow course-button full-grow w-inline-block"
                            }
                          >
                            <div>{"Course details"}</div>
                          </SiteLink>
                          <SiteLink
                            data-motion-id={
                              "3969f338-ac70-d276-1ad3-e0d0efb3eb4b"
                            }
                            href={"/product/database-integration-with-mongodb"}
                            className={"button buy-button w-inline-block"}
                          >
                            <div>{"Buy course"}</div>
                          </SiteLink>
                        </div>
                      </div>
                      <div
                        data-motion-id={"3969f338-ac70-d276-1ad3-e0d0efb3eb4e"}
                        className={"course-three-cards-border-one"}
                      ></div>
                      <div
                        data-motion-id={"3969f338-ac70-d276-1ad3-e0d0efb3eb4f"}
                        className={"course-three-cards-border-two"}
                      ></div>
                      <div
                        data-motion-id={"3969f338-ac70-d276-1ad3-e0d0efb3eb50"}
                        className={"course-three-cards-border-three"}
                      ></div>
                      <div
                        data-motion-id={"3969f338-ac70-d276-1ad3-e0d0efb3eb51"}
                        className={"course-three-cards-border-four"}
                      ></div>
                      <div
                        data-motion-id={"3969f338-ac70-d276-1ad3-e0d0efb3eb52"}
                        className={"course-price-wrapper course-three-price"}
                      >
                        <div>{"$59 "}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-motion-id={"3969f338-ac70-d276-1ad3-e0d0efb3eb57"}
              className={"w-dyn-list"}
            >
              <div role={"list"} className={"w-dyn-items"}>
                <div role={"listitem"} className={"w-dyn-item"}>
                  <div
                    data-motion-id={"3969f338-ac70-d276-1ad3-e0d0efb3eb5a"}
                    className={"course-wrap-main"}
                  >
                    <img
                      src={
                        "/assets/16779a38-66ebabf4c17d78e3224b9b5b_Course-Portrait-Image-8.webp"
                      }
                      loading={"lazy"}
                      width={"410"}
                      height={"510"}
                      alt={""}
                      sizes={"(max-width: 479px) 100vw, 410px"}
                      srcSet={
                        "/assets/f673dad9-66ebabf4c17d78e3224b9b5b_Course-Portrait-Image-8-p-500.webp 500w, /assets/7bcd85c0-66ebabf4c17d78e3224b9b5b_Course-Portrait-Image-8-p-800.webp 800w, /assets/16779a38-66ebabf4c17d78e3224b9b5b_Course-Portrait-Image-8.webp 820w"
                      }
                      className={"course-three-image"}
                    />
                    <div className={"course-card-three-overlay"}></div>
                    <div className={"course-card-three-content"}>
                      <div className={"small-shot-heading text-light-white"}>
                        {"Finance"}
                      </div>
                      <div
                        className={
                          "heading-four text-white course-name-three-gap"
                        }
                      >
                        {"Operations management and process improvement"}
                      </div>
                      <div className={"w-layout-hflex course-three-rating"}>
                        <img
                          src={
                            "/assets/8f74b198-66c6fb8b857efb6c4c737b5d_Rating.svg"
                          }
                          loading={"lazy"}
                          alt={""}
                        />
                        <div
                          className={
                            "small-shot-heading small-heading-body-color"
                          }
                        >
                          {"5.00 (812)"}
                        </div>
                      </div>
                      <div
                        data-motion-id={"3969f338-ac70-d276-1ad3-e0d0efb3eb63"}
                        className={"course-three-buttons"}
                      >
                        <div
                          className={"w-layout-hflex course-three-button-wrap"}
                        >
                          <SiteLink
                            data-motion-id={
                              "3969f338-ac70-d276-1ad3-e0d0efb3eb65"
                            }
                            href={
                              "/operations-management-and-process-improvement/course-details"
                            }
                            className={
                              "button button-yellow course-button full-grow w-inline-block"
                            }
                          >
                            <div>{"Course details"}</div>
                          </SiteLink>
                        </div>
                      </div>
                      <div
                        data-motion-id={"3969f338-ac70-d276-1ad3-e0d0efb3eb68"}
                        className={"course-three-cards-border-one"}
                      ></div>
                      <div
                        data-motion-id={"3969f338-ac70-d276-1ad3-e0d0efb3eb69"}
                        className={"course-three-cards-border-two"}
                      ></div>
                      <div
                        data-motion-id={"3969f338-ac70-d276-1ad3-e0d0efb3eb6a"}
                        className={"course-three-cards-border-three"}
                      ></div>
                      <div
                        data-motion-id={"3969f338-ac70-d276-1ad3-e0d0efb3eb6b"}
                        className={"course-three-cards-border-four"}
                      ></div>
                      <div
                        data-motion-id={"3969f338-ac70-d276-1ad3-e0d0efb3eb6c"}
                        className={"course-price-wrapper course-three-price"}
                      >
                        <div>{"Free"}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"cta-three"}>
        <div
          className={"w-layout-blockcontainer cta-three-container w-container"}
        >
          <div className={"w-layout-hflex cta-three-main"}>
            <div
              data-motion-id={"88293f59-0187-6056-3a72-86586e29ff70"}
              className={"heading-three cta-heading text-white"}
            >
              {"Are you ready to start your journey?"}
            </div>
            <div
              data-motion-id={"88293f59-0187-6056-3a72-86586e29ff72"}
              className={"w-layout-hflex cta-button-wrapper"}
            >
              <SiteLink
                data-motion-id={"890a1aa9-6573-2ea8-6a51-6c8deb450bab"}
                href={"/course-one"}
                className={"button white-border-button w-inline-block"}
              >
                <div>{"Browse courses"}</div>
              </SiteLink>
              <SiteLink
                data-motion-id={"d2419891-9f36-e25c-7c72-b1716c5d291d"}
                href={"/career"}
                className={"button button-yellow w-inline-block"}
              >
                <div>{"Became an  instructor"}</div>
              </SiteLink>
            </div>
          </div>
        </div>
      </section>
      <section className={"footer-two"}>
        <div
          data-motion-id={"e1c36f32-de27-e1d0-913a-a0776cbd6ec0"}
          className={"w-layout-blockcontainer container w-container"}
        >
          <div className={"w-layout-hflex footer-two-main"}>
            <div
              id={"w-node-e1c36f32-de27-e1d0-913a-a0776cbd6ec2-6cbd6ebf"}
              className={"w-layout-vflex footer-links-wrap"}
            >
              <SiteLink href={"/home-one"} className={"w-inline-block"}>
                <img
                  src={"/assets/ccc5f759-66c6fb8bf82fe9cef5f78d65_Elearna.svg"}
                  loading={"lazy"}
                  width={"105"}
                  height={"26"}
                  alt={"Elearna"}
                  className={"elerna"}
                />
              </SiteLink>
              <p className={"no-margin-bottom"}>
                {
                  "Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus quis eget amet ut tristique cras."
                }
              </p>
            </div>
            <div className={"w-layout-vflex footer-links-wrap-two"}>
              <div className={"heading-five text-white"}>
                {"Popular courses"}
              </div>
              <div className={"w-layout-vflex links-wrap"}>
                <SiteLink
                  href={"/category/finance"}
                  className={"footer-link-hover"}
                >
                  {"Finance"}
                </SiteLink>
                <SiteLink
                  href={"/category/management"}
                  className={"footer-link-hover"}
                >
                  {"Management"}
                </SiteLink>
                <SiteLink
                  href={"/category/design"}
                  className={"footer-link-hover"}
                >
                  {"Design"}
                </SiteLink>
                <SiteLink
                  href={"/category/development"}
                  className={"footer-link-hover"}
                >
                  {"Web development"}
                </SiteLink>
              </div>
            </div>
            <div className={"w-layout-vflex footer-links-wrap-two"}>
              <div className={"heading-five text-white"}>{"Company"}</div>
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
                <SiteLink
                  href={"/information/license"}
                  className={"footer-link-hover"}
                >
                  {"License"}
                </SiteLink>
                <SiteLink href={"/pricing-one"} className={"footer-link-hover"}>
                  {"Pricing"}
                </SiteLink>
              </div>
            </div>
            <div className={"w-layout-vflex footer-links-wrap-two"}>
              <div className={"heading-five text-white"}>{"CMS"}</div>
              <div className={"w-layout-vflex links-wrap"}>
                <SiteLink
                  href={
                    "/grow-your-brand-and-reach-your-audience/course-details"
                  }
                  className={"footer-link-hover"}
                >
                  {"Course details"}
                </SiteLink>
                <SiteLink
                  href={"/team-members/lee-schmitt"}
                  className={"footer-link-hover"}
                >
                  {"Instructor details"}
                </SiteLink>
                <SiteLink
                  href={
                    "/grow-your-brand-and-reach-your-audience/course-details"
                  }
                  className={"footer-link-hover"}
                >
                  {"Blog details"}
                </SiteLink>
              </div>
            </div>
            <div className={"w-layout-vflex footer-links-wrap-three"}>
              <div className={"heading-five text-white"}>{"Need help?"}</div>
              <div className={"w-layout-vflex footer-links-contact"}>
                <div>
                  <div>{"Call us"}</div>
                  <SiteLink
                    href={"tel:8881234567"}
                    className={"heading-five text-white footer-hover-in"}
                  >
                    {"(888) 123 4567"}
                  </SiteLink>
                </div>
                <div>
                  <div>{"Need support?"}</div>
                  <SiteLink
                    href={"mailto:info@example.com"}
                    className={"heading-five text-white footer-hover-in"}
                  >
                    {"info@example.com"}
                  </SiteLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-motion-id={"e1c36f32-de27-e1d0-913a-a0776cbd6efb"}
          className={"w-layout-blockcontainer footer-container w-container"}
        >
          <div className={"border-one"}></div>
          <div className={"w-layout-hflex footer-bottom-main"}>
            <div className={"footer-bottom-text"}>
              {"Design by "}
              <SiteLink
                href={"https://www.radianttemplates.com"}
                target={"_blank"}
                className={"footer-bottom-link"}
              >
                {"Radiant Templates"}
              </SiteLink>
            </div>
            <div className={"footer-bottom-text"}>
              {"Powered by "}
              <SiteLink
                href={"https://webflow.com/?r=0"}
                className={"footer-bottom-link"}
              >
                {"Webflow"}
              </SiteLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
