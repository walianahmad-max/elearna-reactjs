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
      <section className={"blog-hero"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-vflex blog-hero-wrap"}>
            <div
              data-motion-id={"96645ce7-a58f-669a-a10d-291fbaae30d0"}
              className={"small-heading"}
            >
              {"News and journals"}
            </div>
            <h1
              data-motion-id={"b68108df-65be-f6ed-8220-bd2a62bb7923"}
              className={"heading-one-top-gap text-white"}
            >
              {"Planning to transition to a new career?"}
            </h1>
          </div>
        </div>
      </section>
      <section className={"blog-two-cards"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-hflex blog-two-cards-wrapper"}>
            <div
              data-motion-id={"172cc7cc-c4c7-347c-591c-2243f36ec9b8"}
              className={"blog-two-wrapper-left"}
            >
              <div className={"w-dyn-list"}>
                <div role={"list"} className={"w-dyn-items"}>
                  <div role={"listitem"} className={"w-dyn-item"}>
                    <SiteLink
                      data-motion-id={"5545ba81-77e0-0ce7-251a-a8b7d78d628c"}
                      href={
                        "/blog-posts/improve-knowledge-retention-with-visual-learning"
                      }
                      className={"blog-two-cards-one w-inline-block"}
                    >
                      <div className={"overflow-hidden"}>
                        <img
                          data-motion-id={
                            "d5a370cb-cddb-77e2-3223-f82720653400"
                          }
                          className={"blog-card-one-image"}
                          src={
                            "/assets/c4692dfd-66ff71ac285b8bcb87417ef6_Blog-Portrait-Thumbnail-13.webp"
                          }
                          width={"630"}
                          height={"749.32"}
                          alt={""}
                          sizes={"(max-width: 767px) 100vw, 630px"}
                          loading={"lazy"}
                          srcSet={
                            "/assets/aed91a8b-66ff71ac285b8bcb87417ef6_Blog-Portrait-Thumbnail-13-p-500.webp 500w, /assets/7703bead-66ff71ac285b8bcb87417ef6_Blog-Portrait-Thumbnail-13-p-800.webp 800w, /assets/84ac8ced-66ff71ac285b8bcb87417ef6_Blog-Portrait-Thumbnail-13-p-1080.webp 1080w, /assets/c4692dfd-66ff71ac285b8bcb87417ef6_Blog-Portrait-Thumbnail-13.webp 1260w"
                          }
                        />
                      </div>
                      <div className={"blog-two-cards-text extra-padding"}>
                        <div className={"w-layout-hflex blog-two-cards-top"}>
                          <div
                            className={
                              "small-shot-heading small-heading-body-color"
                            }
                          >
                            {"10.4.2024"}
                          </div>
                          <div className={"w-layout-hflex blog-card-author"}>
                            <div className={"small-dot"}></div>
                            <div className={"small-shot-heading"}>
                              {"Nina Leffler"}
                            </div>
                          </div>
                        </div>
                        <div
                          className={"heading-four margin-bottom-twenty-five"}
                        >
                          {"Improve knowledge retention with visual learning"}
                        </div>
                        <div>
                          {
                            "Lorem ipsum dolor sit amet consectetur. Enim turpis feugiat elementum sit ut. Cras mattis aliquam arcu mauris sagittis fames eu diam vulputate."
                          }
                        </div>
                      </div>
                    </SiteLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={"blog-two-cards-block"}>
              <div className={"blog-two-cards-row"}>
                <div className={"w-dyn-list"}>
                  <div role={"list"} className={"w-dyn-items"}>
                    <div role={"listitem"} className={"w-dyn-item"}>
                      <SiteLink
                        data-motion-id={"c53c5b83-998d-93ea-e3e5-b13f4531d179"}
                        href={
                          "/blog-posts/master-online-learning-with-proven-strategies"
                        }
                        className={"blog-two-small-cards w-inline-block"}
                      >
                        <div className={"overflow-hidden"}>
                          <img
                            data-motion-id={
                              "af9f3af1-d451-bc87-a3dc-0ad21093747c"
                            }
                            className={"blog-card-one-image"}
                            src={
                              "/assets/f61a99fe-66ff6e0a6f9b375fbca970fe_Blog-Small-Thumbnail-11.webp"
                            }
                            width={"299.96"}
                            height={"196.9"}
                            alt={""}
                            sizes={"(max-width: 479px) 100vw, 299.953125px"}
                            loading={"lazy"}
                            srcSet={
                              "/assets/71d83ea7-66ff6e0a6f9b375fbca970fe_Blog-Small-Thumbnail-11-p-500.webp 500w, /assets/ed7bc32b-66ff6e0a6f9b375fbca970fe_Blog-Small-Thumbnail-11-p-800.webp 800w, /assets/f61a99fe-66ff6e0a6f9b375fbca970fe_Blog-Small-Thumbnail-11.webp 820w"
                            }
                          />
                        </div>
                        <div className={"blog-two-small-cards-content"}>
                          <div
                            className={
                              "w-layout-hflex blog-two-small-cards-top"
                            }
                          >
                            <div
                              className={
                                "small-shot-heading small-heading-body-color"
                              }
                            >
                              {"4.10.2024"}
                            </div>
                            <div className={"w-layout-hflex blog-card-author"}>
                              <div className={"small-dot"}></div>
                              <div className={"small-shot-heading"}>
                                {"Samantha Dicki"}
                              </div>
                            </div>
                          </div>
                          <div className={"heading-six"}>
                            {"Master online learning with proven strategies"}
                          </div>
                        </div>
                      </SiteLink>
                    </div>
                  </div>
                </div>
                <div className={"w-dyn-list"}>
                  <div role={"list"} className={"w-dyn-items"}>
                    <div role={"listitem"} className={"w-dyn-item"}>
                      <SiteLink
                        data-motion-id={"b9cf13b7-8656-f85e-6998-87fa8fcb7e89"}
                        href={
                          "/blog-posts/how-to-enhance-your-learning-experience-today"
                        }
                        className={"blog-two-small-cards w-inline-block"}
                      >
                        <div className={"overflow-hidden"}>
                          <img
                            data-motion-id={
                              "b9cf13b7-8656-f85e-6998-87fa8fcb7e8b"
                            }
                            className={"blog-card-one-image"}
                            src={
                              "/assets/e9b04dca-66ff6a7612bb5e582719b5d6_Blog-Portrait-Thumbnail-10.webp"
                            }
                            width={"300"}
                            height={"365.1"}
                            alt={""}
                            sizes={"(max-width: 479px) 100vw, 300px"}
                            loading={"lazy"}
                            srcSet={
                              "/assets/e3f636bc-66ff6a7612bb5e582719b5d6_Blog-Portrait-Thumbnail-10-p-500.webp 500w, /assets/f5f9980a-66ff6a7612bb5e582719b5d6_Blog-Portrait-Thumbnail-10-p-800.webp 800w, /assets/78f0c2cf-66ff6a7612bb5e582719b5d6_Blog-Portrait-Thumbnail-10-p-1080.webp 1080w, /assets/e9b04dca-66ff6a7612bb5e582719b5d6_Blog-Portrait-Thumbnail-10.webp 1260w"
                            }
                          />
                        </div>
                        <div className={"blog-two-small-cards-content"}>
                          <div
                            className={
                              "w-layout-hflex blog-two-small-cards-top"
                            }
                          >
                            <div
                              className={
                                "small-shot-heading small-heading-body-color"
                              }
                            >
                              {"3.10.2024"}
                            </div>
                            <div className={"w-layout-hflex blog-card-author"}>
                              <div className={"small-dot"}></div>
                              <div className={"small-shot-heading"}>
                                {"Edwin Waters"}
                              </div>
                            </div>
                          </div>
                          <div className={"heading-six"}>
                            {"How to enhance your learning experience today"}
                          </div>
                        </div>
                      </SiteLink>
                    </div>
                  </div>
                </div>
                <div className={"w-dyn-list"}>
                  <div role={"list"} className={"w-dyn-items"}>
                    <div role={"listitem"} className={"w-dyn-item"}>
                      <SiteLink
                        data-motion-id={"216ef57e-7894-79ad-1784-a9011b3fe719"}
                        href={
                          "/blog-posts/the-evolution-of-teaching-tools-in-the-21st-century"
                        }
                        className={"blog-two-small-cards w-inline-block"}
                      >
                        <div className={"overflow-hidden"}>
                          <img
                            data-motion-id={
                              "216ef57e-7894-79ad-1784-a9011b3fe71b"
                            }
                            className={"blog-card-one-image"}
                            src={
                              "/assets/37f4caae-66e93b2410f6e96cbbc70c8d_Blog-Small-Thumbnail.webp"
                            }
                            width={"299.96"}
                            height={"196.9"}
                            alt={""}
                            sizes={"(max-width: 479px) 100vw, 299.953125px"}
                            loading={"lazy"}
                            srcSet={
                              "/assets/a6bc4e78-66e93b2410f6e96cbbc70c8d_Blog-Small-Thumbnail-p-500.webp 500w, /assets/d499d141-66e93b2410f6e96cbbc70c8d_Blog-Small-Thumbnail-p-800.webp 800w, /assets/37f4caae-66e93b2410f6e96cbbc70c8d_Blog-Small-Thumbnail.webp 820w"
                            }
                          />
                        </div>
                        <div className={"blog-two-small-cards-content"}>
                          <div
                            className={
                              "w-layout-hflex blog-two-small-cards-top"
                            }
                          >
                            <div
                              className={
                                "small-shot-heading small-heading-body-color"
                              }
                            >
                              {"17.9.2024"}
                            </div>
                            <div className={"w-layout-hflex blog-card-author"}>
                              <div className={"small-dot"}></div>
                              <div className={"small-shot-heading"}>
                                {"Edward Braun"}
                              </div>
                            </div>
                          </div>
                          <div className={"heading-six"}>
                            {
                              "The evolution of teaching tools in the 21st century"
                            }
                          </div>
                        </div>
                      </SiteLink>
                    </div>
                  </div>
                </div>
                <div className={"w-dyn-list"}>
                  <div role={"list"} className={"w-dyn-items"}>
                    <div role={"listitem"} className={"w-dyn-item"}>
                      <SiteLink
                        data-motion-id={"6a778c65-2120-daf0-2d51-778759d26934"}
                        href={
                          "/blog-posts/the-role-of-parental-involvement-in-academic-achievement"
                        }
                        className={"blog-two-small-cards w-inline-block"}
                      >
                        <div className={"overflow-hidden"}>
                          <img
                            data-motion-id={
                              "6a778c65-2120-daf0-2d51-778759d26936"
                            }
                            className={"blog-card-one-image"}
                            src={
                              "/assets/c1db662a-66e93b734e839a98823ff445_Blog-Small-Thumbnail-3.webp"
                            }
                            width={"299.96"}
                            height={"196.9"}
                            alt={""}
                            sizes={"(max-width: 479px) 100vw, 299.953125px"}
                            loading={"lazy"}
                            srcSet={
                              "/assets/96eb782f-66e93b734e839a98823ff445_Blog-Small-Thumbnail-3-p-500.webp 500w, /assets/7eca1d08-66e93b734e839a98823ff445_Blog-Small-Thumbnail-3-p-800.webp 800w, /assets/c1db662a-66e93b734e839a98823ff445_Blog-Small-Thumbnail-3.webp 820w"
                            }
                          />
                        </div>
                        <div className={"blog-two-small-cards-content"}>
                          <div
                            className={
                              "w-layout-hflex blog-two-small-cards-top"
                            }
                          >
                            <div
                              className={
                                "small-shot-heading small-heading-body-color"
                              }
                            >
                              {"16.9.2024"}
                            </div>
                            <div className={"w-layout-hflex blog-card-author"}>
                              <div className={"small-dot"}></div>
                              <div className={"small-shot-heading"}>
                                {"Jesse Johnson"}
                              </div>
                            </div>
                          </div>
                          <div className={"heading-six"}>
                            {
                              "The role of parental involvement in academic achievement"
                            }
                          </div>
                        </div>
                      </SiteLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"blog-two-cards-row"}>
                <div className={"w-dyn-list"}>
                  <div role={"list"} className={"w-dyn-items"}>
                    <div role={"listitem"} className={"w-dyn-item"}>
                      <SiteLink
                        data-motion-id={"45f4f301-6248-6c08-b494-2ae378b5853e"}
                        href={
                          "/blog-posts/the-role-of-technology-in-modern-classrooms"
                        }
                        className={"blog-two-small-cards w-inline-block"}
                      >
                        <div className={"overflow-hidden"}>
                          <img
                            data-motion-id={
                              "45f4f301-6248-6c08-b494-2ae378b58540"
                            }
                            className={"blog-card-one-image"}
                            src={
                              "/assets/1e13523b-66e93bb940c86a7d79f1e185_Blog-Small-Thumbnail-8.webp"
                            }
                            width={"299.96"}
                            height={"196.9"}
                            alt={""}
                            sizes={"(max-width: 479px) 100vw, 299.953125px"}
                            loading={"lazy"}
                            srcSet={
                              "/assets/bd9fbc37-66e93bb940c86a7d79f1e185_Blog-Small-Thumbnail-8-p-500.webp 500w, /assets/a92782b3-66e93bb940c86a7d79f1e185_Blog-Small-Thumbnail-8-p-800.webp 800w, /assets/1e13523b-66e93bb940c86a7d79f1e185_Blog-Small-Thumbnail-8.webp 820w"
                            }
                          />
                        </div>
                        <div className={"blog-two-small-cards-content"}>
                          <div
                            className={
                              "w-layout-hflex blog-two-small-cards-top"
                            }
                          >
                            <div
                              className={
                                "small-shot-heading small-heading-body-color"
                              }
                            >
                              {"14.9.2024"}
                            </div>
                            <div className={"w-layout-hflex blog-card-author"}>
                              <div className={"small-dot"}></div>
                              <div className={"small-shot-heading"}>
                                {"Samantha Dicki"}
                              </div>
                            </div>
                          </div>
                          <div className={"heading-six"}>
                            {"The role of technology in modern classrooms"}
                          </div>
                        </div>
                      </SiteLink>
                    </div>
                  </div>
                </div>
                <div className={"w-dyn-list"}>
                  <div role={"list"} className={"w-dyn-items"}>
                    <div role={"listitem"} className={"w-dyn-item"}>
                      <SiteLink
                        data-motion-id={"738e4e73-b2ff-a89f-db78-8154d6273ef9"}
                        href={
                          "/blog-posts/how-globalization-is-shaping-curriculum-development"
                        }
                        className={"blog-two-small-cards w-inline-block"}
                      >
                        <div className={"overflow-hidden"}>
                          <img
                            data-motion-id={
                              "738e4e73-b2ff-a89f-db78-8154d6273efb"
                            }
                            className={"blog-card-one-image"}
                            src={
                              "/assets/bcd34cc1-66e93bf4c8aeb4955eb8be4c_Blog-Small-Thumbnail-2.webp"
                            }
                            width={"299.96"}
                            height={"196.9"}
                            alt={""}
                            sizes={"(max-width: 479px) 100vw, 299.953125px"}
                            loading={"lazy"}
                            srcSet={
                              "/assets/ba6836b6-66e93bf4c8aeb4955eb8be4c_Blog-Small-Thumbnail-2-p-500.webp 500w, /assets/7464c264-66e93bf4c8aeb4955eb8be4c_Blog-Small-Thumbnail-2-p-800.webp 800w, /assets/bcd34cc1-66e93bf4c8aeb4955eb8be4c_Blog-Small-Thumbnail-2.webp 820w"
                            }
                          />
                        </div>
                        <div className={"blog-two-small-cards-content"}>
                          <div
                            className={
                              "w-layout-hflex blog-two-small-cards-top"
                            }
                          >
                            <div
                              className={
                                "small-shot-heading small-heading-body-color"
                              }
                            >
                              {"13.9.2024"}
                            </div>
                            <div className={"w-layout-hflex blog-card-author"}>
                              <div className={"small-dot"}></div>
                              <div className={"small-shot-heading"}>
                                {"Edwin Waters"}
                              </div>
                            </div>
                          </div>
                          <div className={"heading-six"}>
                            {
                              "How globalization is shaping curriculum development"
                            }
                          </div>
                        </div>
                      </SiteLink>
                    </div>
                  </div>
                </div>
                <div className={"w-dyn-list"}>
                  <div role={"list"} className={"w-dyn-items"}>
                    <div role={"listitem"} className={"w-dyn-item"}>
                      <SiteLink
                        data-motion-id={"3ead99de-a0bf-69e9-7451-b293a3717799"}
                        href={
                          "/blog-posts/how-personalized-learning-is-changing-education"
                        }
                        className={"blog-two-small-cards w-inline-block"}
                      >
                        <div className={"overflow-hidden"}>
                          <img
                            data-motion-id={
                              "3ead99de-a0bf-69e9-7451-b293a371779b"
                            }
                            className={"blog-card-one-image"}
                            src={
                              "/assets/0af8d8df-66e94670c010ad7f6a1391a0_Blog-Portrait-Thumbnail-3.webp"
                            }
                            width={"300"}
                            height={"365.1"}
                            alt={""}
                            sizes={"(max-width: 479px) 100vw, 300px"}
                            loading={"lazy"}
                            srcSet={
                              "/assets/38095530-66e94670c010ad7f6a1391a0_Blog-Portrait-Thumbnail-3-p-500.webp 500w, /assets/e93e15ed-66e94670c010ad7f6a1391a0_Blog-Portrait-Thumbnail-3-p-800.webp 800w, /assets/d32401a8-66e94670c010ad7f6a1391a0_Blog-Portrait-Thumbnail-3-p-1080.webp 1080w, /assets/0af8d8df-66e94670c010ad7f6a1391a0_Blog-Portrait-Thumbnail-3.webp 1260w"
                            }
                          />
                        </div>
                        <div className={"blog-two-small-cards-content"}>
                          <div
                            className={
                              "w-layout-hflex blog-two-small-cards-top"
                            }
                          >
                            <div
                              className={
                                "small-shot-heading small-heading-body-color"
                              }
                            >
                              {"12.9.2024"}
                            </div>
                            <div className={"w-layout-hflex blog-card-author"}>
                              <div className={"small-dot"}></div>
                              <div className={"small-shot-heading"}>
                                {"Gerald Nienow"}
                              </div>
                            </div>
                          </div>
                          <div className={"heading-six"}>
                            {"How personalized learning is changing education"}
                          </div>
                        </div>
                      </SiteLink>
                    </div>
                  </div>
                </div>
                <div className={"w-dyn-list"}>
                  <div role={"list"} className={"w-dyn-items"}>
                    <div role={"listitem"} className={"w-dyn-item"}>
                      <SiteLink
                        data-motion-id={"e2e2a5b4-a093-6208-1273-3dc218029d78"}
                        href={
                          "/blog-posts/empowering-teachers-with-continuous-professional-development"
                        }
                        className={"blog-two-small-cards w-inline-block"}
                      >
                        <div className={"overflow-hidden"}>
                          <img
                            data-motion-id={
                              "e2e2a5b4-a093-6208-1273-3dc218029d7a"
                            }
                            className={"blog-card-one-image"}
                            src={
                              "/assets/723d8cf3-66e93c6c4ffe823e68be9c67_Blog-Small-Thumbnail-6.webp"
                            }
                            width={"299.96"}
                            height={"196.9"}
                            alt={""}
                            sizes={"(max-width: 479px) 100vw, 299.953125px"}
                            loading={"lazy"}
                            srcSet={
                              "/assets/66efb94b-66e93c6c4ffe823e68be9c67_Blog-Small-Thumbnail-6-p-500.webp 500w, /assets/37814f27-66e93c6c4ffe823e68be9c67_Blog-Small-Thumbnail-6-p-800.webp 800w, /assets/723d8cf3-66e93c6c4ffe823e68be9c67_Blog-Small-Thumbnail-6.webp 820w"
                            }
                          />
                        </div>
                        <div className={"blog-two-small-cards-content"}>
                          <div
                            className={
                              "w-layout-hflex blog-two-small-cards-top"
                            }
                          >
                            <div
                              className={
                                "small-shot-heading small-heading-body-color"
                              }
                            >
                              {"11.9.2024"}
                            </div>
                            <div className={"w-layout-hflex blog-card-author"}>
                              <div className={"small-dot"}></div>
                              <div className={"small-shot-heading"}>
                                {"Nina Leffler"}
                              </div>
                            </div>
                          </div>
                          <div className={"heading-six"}>
                            {
                              "Empowering teachers with continuous professional development"
                            }
                          </div>
                        </div>
                      </SiteLink>
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
