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
      <div className={"overflow-hidden"}>
        <div
          data-motion-id={"005386ac-8f56-69ff-a08d-d6f59bbd8d79"}
          className={"navbar-two"}
        >
          <section className={"navbar-two-top"}>
            <div className={"w-layout-blockcontainer container w-container"}>
              <div className={"w-layout-hflex top-nav-main"}>
                <div className={"top-nav-text"}>
                  {"Are you interested in online coaching? "}
                  <SiteLink
                    href={"/contact-one"}
                    className={"text-light-white"}
                  >
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
                    <SiteLink
                      href={"tel:8881234567"}
                      className={"top-nav-text"}
                    >
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
                <SiteLink
                  href={"/home-one"}
                  className={"no-padding w-nav-brand"}
                >
                  <img
                    src={
                      "/assets/ccc5f759-66c6fb8bf82fe9cef5f78d65_Elearna.svg"
                    }
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
                        src={
                          "/assets/6dc206a4-66c6fb8ba5e099697cc76c17_Cart.svg"
                        }
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
                    <AuthButton
                      className={"user-log-in-log-out"}
                      type={"button"}
                    >
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
                    src={
                      "/assets/ccc5f759-66c6fb8bf82fe9cef5f78d65_Elearna.svg"
                    }
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
                                {
                                  "Building single page applications with angular"
                                }
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
                                {
                                  "Operations management and process improvement"
                                }
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
                        src={
                          "/assets/6dc206a4-66c6fb8ba5e099697cc76c17_Cart.svg"
                        }
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
                    <AuthButton
                      className={"user-log-in-log-out"}
                      type={"button"}
                    >
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
        <section className={"contact-three"}>
          <div className={"contact-three-main"}>
            <div className={"w-layout-vflex contact-three-content"}>
              <div
                data-motion-id={"ef574b54-136d-5174-17c8-ee5edced9474"}
                className={"contact-big-text"}
              >
                {"Contact"}
              </div>
              <p
                data-motion-id={"40a28fa9-f1ca-0dbb-455d-c1caa7405a22"}
                className={"contact-big-description"}
              >
                {
                  "Lorem ipsum dolor sit amet consectetur. Est cras viverra pharetra tellus pulvinar amet aliquam. Vestibulum hac tincidunt."
                }
              </p>
              <div className={"w-layout-vflex contact-three-information-box"}>
                <SiteLink
                  data-motion-id={"9d5326b8-8abf-5a14-68ab-3ac1ca707c57"}
                  href={"mailto:info@example.com"}
                  className={"contact-three-information"}
                >
                  {"info@example.com"}
                </SiteLink>
                <div
                  data-motion-id={"8f6185d6-15c5-8d2c-4bfd-467970e8d4a8"}
                  className={"contact-three-border"}
                ></div>
                <SiteLink
                  data-motion-id={"5e6eff80-201c-b839-406b-53d603bdba5d"}
                  href={"tel:8881234567"}
                  className={"contact-three-information"}
                >
                  {"(888) 123 4567"}
                </SiteLink>
              </div>
            </div>
          </div>
          <div
            data-motion-id={"d595ed54-cd29-1f77-046f-e35c2ea500fa"}
            className={"icon-box"}
          >
            <img
              src={"/assets/e8b3cdca-66e017c693d2b070536a9291_Icons.svg"}
              loading={"lazy"}
              width={"34"}
              height={"37"}
              alt={"Icon"}
            />
          </div>
          <div className={"contact-three-form"}>
            <div
              style={{
                transform:
                  "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              }}
              className={"contact-three-form-pop-up"}
            >
              <div className={"no-margin w-form"}>
                <SiteForm
                  id={"email-form"}
                  name={"email-form"}
                  data-name={"Email Form"}
                  formKind={"contact"}
                  route={"/contact-three"}
                >
                  <div className={"contact-three-form-top"}>
                    <div className={"heading-four"}>
                      {"Contact information"}
                    </div>
                  </div>
                  <div className={"contact-three-form-inside"}>
                    <input
                      className={"text-field-two w-input"}
                      maxLength={"256"}
                      name={"Your-name"}
                      data-name={"Your name"}
                      placeholder={"Your name"}
                      type={"text"}
                      id={"Your-name"}
                      required={true}
                    />
                    <input
                      className={"text-field-two w-input"}
                      maxLength={"256"}
                      name={"Email"}
                      data-name={"Email"}
                      placeholder={"Email"}
                      type={"email"}
                      id={"Email"}
                      required={true}
                    />
                    <input
                      className={"text-field-two w-input"}
                      maxLength={"256"}
                      name={"Phone"}
                      data-name={"Phone"}
                      placeholder={"Phone"}
                      type={"tel"}
                      id={"Phone"}
                      required={true}
                    />
                    <input
                      className={"text-field-two margin-bottom-thirty w-input"}
                      maxLength={"256"}
                      name={"Enquiry-type"}
                      data-name={"Enquiry type"}
                      placeholder={"Enquiry type"}
                      type={"text"}
                      id={"Enquiry-type"}
                      required={true}
                    />
                    <input
                      type={"submit"}
                      data-wait={"Please wait..."}
                      className={
                        "button button-yellow button-full-width w-button"
                      }
                      value={"Send message"}
                    />
                  </div>
                </SiteForm>
              </div>
            </div>
          </div>
        </section>
        <section
          data-motion-id={"1a9d11b7-7483-9920-b2a5-863bb6991ec8"}
          className={"contact-three-footer"}
        >
          <div
            className={
              "w-layout-blockcontainer contact-three-container top-border w-container"
            }
          >
            <div className={"w-layout-hflex contact-three-footer-main"}>
              <div className={"w-layout-hflex contact-footer-links-wrapper"}>
                <SiteLink
                  href={"/information/style-guide"}
                  className={"footer-small-link"}
                >
                  {"Style guide"}
                </SiteLink>
                <SiteLink href={"/401"} className={"footer-small-link"}>
                  {"Password protected"}
                </SiteLink>
                <SiteLink href={"/404"} className={"footer-small-link"}>
                  {"404"}
                </SiteLink>
                <SiteLink
                  href={"/information/license"}
                  className={"footer-small-link"}
                >
                  {"License"}
                </SiteLink>
              </div>
              <div className={"w-layout-hflex contact-footer-links-wrapper"}>
                <div className={"small-heading small-heading-mobile"}>
                  {"Design by "}
                  <SiteLink
                    href={"https://www.radianttemplates.com"}
                    target={"_blank"}
                    className={"footer-small-link"}
                  >
                    {"Radiant Templates"}
                  </SiteLink>
                </div>
                <div className={"small-heading small-heading-mobile"}>
                  {"Powered by "}
                  <SiteLink
                    href={"https://webflow.com/?r=0"}
                    target={"_blank"}
                    className={"footer-small-link"}
                  >
                    {"webflow"}
                  </SiteLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
