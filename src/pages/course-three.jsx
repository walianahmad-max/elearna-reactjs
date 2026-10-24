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
      <section className={"course-one-hero"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-vflex course-three-hero-main"}>
            <div
              data-motion-id={"96645ce7-a58f-669a-a10d-291fbaae30d0"}
              className={"small-heading"}
            >
              {"START WITH"}
            </div>
            <h1
              data-motion-id={"5a05da2e-c711-9af7-7235-3652416f0584"}
              className={"heading-one-top-gap text-white"}
            >
              {"Professional online courses"}
            </h1>
          </div>
        </div>
      </section>
      <section className={"course-one-category"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div
            data-motion-id={"e4044be6-8bc0-3959-c87e-28a3635418ff"}
            className={"course-one-category-main"}
          >
            <SiteLink
              href={"/category/design"}
              className={"course-one-category-cards w-inline-block"}
            >
              <div className={"category-icons-wrap"}>
                <img
                  src={
                    "/assets/828c1caa-66c6fb8b9d9bcd0e5de94637_Category-Icons.svg"
                  }
                  loading={"lazy"}
                  width={"Auto"}
                  height={"Auto"}
                  alt={"Icon"}
                />
              </div>
              <div className={"heading-six margin-bottom-five category-text"}>
                {"Creative web design"}
              </div>
              <div>{"8 Courses"}</div>
            </SiteLink>
            <SiteLink
              href={"/category/finance"}
              className={"course-one-category-cards w-inline-block"}
            >
              <div className={"category-icons-wrap"}>
                <img
                  src={
                    "/assets/55295ffb-66c6fb8b98a2dc7066c693d3_Category-Icons-2.svg"
                  }
                  loading={"lazy"}
                  width={"Auto"}
                  height={"Auto"}
                  alt={"Icon"}
                />
              </div>
              <div className={"heading-six margin-bottom-five category-text"}>
                {"Finance  accounting"}
              </div>
              <div>{"4 Courses"}</div>
            </SiteLink>
            <SiteLink
              href={"/category/development"}
              className={"course-one-category-cards w-inline-block"}
            >
              <div className={"category-icons-wrap"}>
                <img
                  src={
                    "/assets/a5b15863-66c6fb8b2ae1000d4215a423_Category-Icons-3.svg"
                  }
                  loading={"lazy"}
                  width={"Auto"}
                  height={"Auto"}
                  alt={"Icon"}
                />
              </div>
              <div className={"heading-six margin-bottom-five category-text"}>
                {"IT and software"}
              </div>
              <div>{"5 Courses"}</div>
            </SiteLink>
            <SiteLink
              href={"/category/management"}
              className={"course-one-category-cards w-inline-block"}
            >
              <div className={"category-icons-wrap"}>
                <img
                  src={
                    "/assets/3f28a8bd-66c6fb94416128e5b4e355b0_Category-Icons-4.svg"
                  }
                  loading={"lazy"}
                  width={"Auto"}
                  height={"Auto"}
                  alt={"Icon"}
                />
              </div>
              <div className={"heading-six margin-bottom-five category-text"}>
                {"Digital marketing"}
              </div>
              <div>{"4 Courses"}</div>
            </SiteLink>
            <SiteLink
              href={"/category/development"}
              className={"course-one-category-cards w-inline-block"}
            >
              <div className={"category-icons-wrap"}>
                <img
                  src={
                    "/assets/7ea95918-66c6fb8b035ebd8829061041_Category-Icons-5.svg"
                  }
                  loading={"lazy"}
                  width={"Auto"}
                  height={"Auto"}
                  alt={"Icon"}
                />
              </div>
              <div className={"heading-six margin-bottom-five category-text"}>
                {"Web development"}
              </div>
              <div>{"8 Courses"}</div>
            </SiteLink>
            <SiteLink
              href={"/category/design"}
              className={"course-one-category-cards w-inline-block"}
            >
              <div className={"category-icons-wrap"}>
                <img
                  src={
                    "/assets/d9d1328d-66c6fb8bf82fe9cef5f78d2f_Category-Icons-6.svg"
                  }
                  loading={"lazy"}
                  width={"Auto"}
                  height={"Auto"}
                  alt={"Icon"}
                />
              </div>
              <div className={"heading-six margin-bottom-five category-text"}>
                {"Content writing"}
              </div>
              <div>{"3 Courses"}</div>
            </SiteLink>
          </div>
        </div>
      </section>
      <section className={"course-one-store"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-vflex"}>
            <div
              data-motion-id={"a5ff96f1-0b24-9a8e-5c74-a45508423d0b"}
              className={"small-heading text-dark"}
            >
              {"Online learning"}
            </div>
            <h2
              data-motion-id={"dc9546fb-6f2e-b60a-ff51-312a995e72d9"}
              className={"heading-two-gap-top course-one-store-heading"}
            >
              {"All online courses"}
            </h2>
            <Interactive
              data-current={"Tab 1"}
              data-easing={"ease"}
              data-duration-in={"300"}
              data-duration-out={"100"}
              className={"courses-pagination w-tabs"}
              as={"div"}
            >
              <div className={"courses-tab-content w-tab-content"}>
                <Interactive
                  data-w-tab={"Tab 1"}
                  className={"w-tab-pane w--tab-active"}
                  as={"div"}
                >
                  <div className={"tranding-courses-cards"}>
                    <div className={"w-dyn-list"}>
                      <div
                        role={"list"}
                        className={"card-height-full w-dyn-items"}
                      >
                        <div
                          role={"listitem"}
                          className={"card-height-full w-dyn-item"}
                        >
                          <div
                            data-motion-id={
                              "50a41079-6f5f-fa39-8032-e2a256573782"
                            }
                            className={"course-cards-two"}
                          >
                            <div
                              data-motion-id={
                                "50a41079-6f5f-fa39-8032-e2a256573783"
                              }
                              className={"course-card-top"}
                            >
                              <div
                                style={{ opacity: "0" }}
                                className={"course-overlay"}
                              ></div>
                              <img
                                className={"course-card-two-image"}
                                src={
                                  "/assets/b109ef70-6710c8cf232065a7046261dc_Course-Image-7.webp"
                                }
                                width={"519.5"}
                                height={"400"}
                                alt={""}
                                style={{ width: "100%" }}
                                sizes={"(max-width: 767px) 100vw, 519.5px"}
                                loading={"lazy"}
                                srcSet={
                                  "/assets/e12a9802-6710c8cf232065a7046261dc_Course-Image-7-p-500.webp 500w, /assets/de4a3282-6710c8cf232065a7046261dc_Course-Image-7-p-800.webp 800w, /assets/b109ef70-6710c8cf232065a7046261dc_Course-Image-7.webp 820w"
                                }
                              />
                              <div className={"course-image-wrap"}></div>
                              <div
                                className={
                                  "w-layout-vflex course-card-top-description"
                                }
                              >
                                <div
                                  style={{ color: "rgb(123,124,125)" }}
                                  className={
                                    "small-shot-heading small-heading-body-color margin-bottom-ten"
                                  }
                                >
                                  {"Management"}
                                </div>
                                <div
                                  style={{ color: "rgb(15,37,42)" }}
                                  className={
                                    "heading-five margin-bottom-twenty"
                                  }
                                >
                                  {
                                    "Crisis management and problem-solving strategies"
                                  }
                                </div>
                                <div
                                  className={
                                    "w-layout-hflex course-two-card-rating"
                                  }
                                >
                                  <img
                                    src={
                                      "/assets/8f74b198-66c6fb8b857efb6c4c737b5d_Rating.svg"
                                    }
                                    loading={"lazy"}
                                    width={"79"}
                                    height={"Auto"}
                                    alt={""}
                                  />
                                  <div
                                    style={{ color: "rgb(123,124,125)" }}
                                    className={
                                      "small-shot-heading small-heading-body-color rating-color"
                                    }
                                  >
                                    {"4.88 (210)"}
                                  </div>
                                </div>
                              </div>
                              <div
                                className={
                                  "course-price-wrapper course-two-price"
                                }
                              >
                                <div>{"Free"}</div>
                              </div>
                            </div>
                            <div
                              style={{ display: "none" }}
                              className={"course-card-pop-up"}
                            >
                              <div className={"heading-five course-name"}>
                                {
                                  "Crisis management and problem-solving strategies"
                                }
                              </div>
                              <div
                                className={
                                  "w-layout-hflex course-card-popup-tags"
                                }
                              >
                                <div className={"grey-dot"}></div>
                                <div
                                  className={
                                    "small-shot-heading small-heading-body-color"
                                  }
                                >
                                  {"6 Lessons"}
                                </div>
                                <div className={"grey-dot"}></div>
                                <div
                                  className={
                                    "small-shot-heading small-heading-body-color"
                                  }
                                >
                                  {"8k Enrolled"}
                                </div>
                              </div>
                              <p className={"course-card-two-description"}>
                                {
                                  "Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet."
                                }
                              </p>
                              <div className={"w-layout-vflex course-checkes"}>
                                <div
                                  className={
                                    "w-layout-hflex course-card-checklist"
                                  }
                                >
                                  <img
                                    src={
                                      "/assets/669fe9b8-66cc3f52670c35637add3599_Tick.svg"
                                    }
                                    loading={"lazy"}
                                    width={"12"}
                                    height={"10"}
                                    alt={"Icon"}
                                    className={"margin-top-five"}
                                  />
                                  <div
                                    className={"course-card-two-description"}
                                  >
                                    {"Lorem ipsum dolor sit amet consectetur"}
                                  </div>
                                </div>
                                <div
                                  className={
                                    "w-layout-hflex course-card-checklist"
                                  }
                                >
                                  <img
                                    src={
                                      "/assets/669fe9b8-66cc3f52670c35637add3599_Tick.svg"
                                    }
                                    loading={"lazy"}
                                    width={"12"}
                                    height={"10"}
                                    alt={"Icon"}
                                    className={"margin-top-five"}
                                  />
                                  <div
                                    className={"course-card-two-description"}
                                  >
                                    {"Lorem ipsum dolor"}
                                  </div>
                                </div>
                                <div
                                  className={
                                    "w-layout-hflex course-card-checklist"
                                  }
                                >
                                  <img
                                    src={
                                      "/assets/669fe9b8-66cc3f52670c35637add3599_Tick.svg"
                                    }
                                    loading={"lazy"}
                                    width={"12"}
                                    height={"10"}
                                    alt={"Icon"}
                                    className={"margin-top-five"}
                                  />
                                  <div
                                    className={"course-card-two-description"}
                                  >
                                    {"Lorem ipsum dolor sit"}
                                  </div>
                                </div>
                              </div>
                              <div
                                className={
                                  "w-layout-hflex course-cards-two-button"
                                }
                              >
                                <SiteLink
                                  data-motion-id={
                                    "50a41079-6f5f-fa39-8032-e2a2565737a2"
                                  }
                                  href={
                                    "/crisis-management-and-problem-solving-strategies/course-details"
                                  }
                                  className={
                                    "button button-yellow course-two-button free-button w-inline-block"
                                  }
                                >
                                  <div>{"Course Details"}</div>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"w-dyn-list"}>
                      <div
                        role={"list"}
                        className={"card-height-full w-dyn-items"}
                      >
                        <div
                          role={"listitem"}
                          className={"card-height-full w-dyn-item"}
                        >
                          <div
                            data-motion-id={
                              "34c57fa2-2bbf-91e5-aa84-521cea0d0e23"
                            }
                            className={"course-cards-two"}
                          >
                            <div
                              data-motion-id={
                                "34c57fa2-2bbf-91e5-aa84-521cea0d0e24"
                              }
                              className={"course-card-top"}
                            >
                              <div
                                style={{ opacity: "0" }}
                                className={"course-overlay"}
                              ></div>
                              <img
                                className={"course-card-two-image"}
                                src={
                                  "/assets/57444e57-6710bcf4976ba1d072d8b476_Course-Image-4-2.webp"
                                }
                                width={"519.5"}
                                height={"400"}
                                alt={""}
                                style={{ width: "100%" }}
                                sizes={"(max-width: 767px) 100vw, 519.5px"}
                                loading={"lazy"}
                                srcSet={
                                  "/assets/fc4d3819-6710bcf4976ba1d072d8b476_Course-Image-4-2-p-500.webp 500w, /assets/a656cb57-6710bcf4976ba1d072d8b476_Course-Image-4-2-p-800.webp 800w, /assets/57444e57-6710bcf4976ba1d072d8b476_Course-Image-4-2.webp 820w"
                                }
                              />
                              <div className={"course-image-wrap"}></div>
                              <div
                                className={
                                  "w-layout-vflex course-card-top-description"
                                }
                              >
                                <div
                                  style={{ color: "rgb(123,124,125)" }}
                                  className={
                                    "small-shot-heading small-heading-body-color margin-bottom-ten"
                                  }
                                >
                                  {"Design"}
                                </div>
                                <div
                                  style={{ color: "rgb(15,37,42)" }}
                                  className={
                                    "heading-five margin-bottom-twenty"
                                  }
                                >
                                  {
                                    "Advanced photoshop techniques for designers"
                                  }
                                </div>
                                <div
                                  className={
                                    "w-layout-hflex course-two-card-rating"
                                  }
                                >
                                  <img
                                    src={
                                      "/assets/8f74b198-66c6fb8b857efb6c4c737b5d_Rating.svg"
                                    }
                                    loading={"lazy"}
                                    width={"79"}
                                    height={"Auto"}
                                    alt={""}
                                  />
                                  <div
                                    style={{ color: "rgb(123,124,125)" }}
                                    className={
                                      "small-shot-heading small-heading-body-color rating-color"
                                    }
                                  >
                                    {"5.00 (1.2K)"}
                                  </div>
                                </div>
                              </div>
                              <div
                                className={
                                  "course-price-wrapper course-two-price"
                                }
                              >
                                <div>{"Free"}</div>
                              </div>
                            </div>
                            <div
                              style={{ display: "none" }}
                              className={"course-card-pop-up"}
                            >
                              <div className={"heading-five course-name"}>
                                {"Advanced photoshop techniques for designers"}
                              </div>
                              <div
                                className={
                                  "w-layout-hflex course-card-popup-tags"
                                }
                              >
                                <div className={"grey-dot"}></div>
                                <div
                                  className={
                                    "small-shot-heading small-heading-body-color"
                                  }
                                >
                                  {"8 Lessons"}
                                </div>
                                <div className={"grey-dot"}></div>
                                <div
                                  className={
                                    "small-shot-heading small-heading-body-color"
                                  }
                                >
                                  {"25k Enrolled"}
                                </div>
                              </div>
                              <p className={"course-card-two-description"}>
                                {
                                  "Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet."
                                }
                              </p>
                              <div className={"w-layout-vflex course-checkes"}>
                                <div
                                  className={
                                    "w-layout-hflex course-card-checklist"
                                  }
                                >
                                  <img
                                    src={
                                      "/assets/669fe9b8-66cc3f52670c35637add3599_Tick.svg"
                                    }
                                    loading={"lazy"}
                                    width={"12"}
                                    height={"10"}
                                    alt={"Icon"}
                                    className={"margin-top-five"}
                                  />
                                  <div
                                    className={"course-card-two-description"}
                                  >
                                    {"Lorem ipsum dolor sit amet consectetur"}
                                  </div>
                                </div>
                                <div
                                  className={
                                    "w-layout-hflex course-card-checklist"
                                  }
                                >
                                  <img
                                    src={
                                      "/assets/669fe9b8-66cc3f52670c35637add3599_Tick.svg"
                                    }
                                    loading={"lazy"}
                                    width={"12"}
                                    height={"10"}
                                    alt={"Icon"}
                                    className={"margin-top-five"}
                                  />
                                  <div
                                    className={"course-card-two-description"}
                                  >
                                    {"Lorem ipsum dolor"}
                                  </div>
                                </div>
                                <div
                                  className={
                                    "w-layout-hflex course-card-checklist"
                                  }
                                >
                                  <img
                                    src={
                                      "/assets/669fe9b8-66cc3f52670c35637add3599_Tick.svg"
                                    }
                                    loading={"lazy"}
                                    width={"12"}
                                    height={"10"}
                                    alt={"Icon"}
                                    className={"margin-top-five"}
                                  />
                                  <div
                                    className={"course-card-two-description"}
                                  >
                                    {"Lorem ipsum dolor sit"}
                                  </div>
                                </div>
                              </div>
                              <div
                                className={
                                  "w-layout-hflex course-cards-two-button"
                                }
                              >
                                <SiteLink
                                  data-motion-id={
                                    "34c57fa2-2bbf-91e5-aa84-521cea0d0e4e"
                                  }
                                  href={
                                    "/advanced-photoshop-techniques-for-designers/course-details"
                                  }
                                  className={
                                    "button button-yellow course-two-button free-button w-inline-block"
                                  }
                                >
                                  <div>{"Course Details"}</div>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"w-dyn-list"}>
                      <div
                        role={"list"}
                        className={"card-height-full w-dyn-items"}
                      >
                        <div
                          role={"listitem"}
                          className={"card-height-full w-dyn-item"}
                        >
                          <div
                            data-motion-id={
                              "f55025f4-3861-2bd1-2e00-f3243cc382ad"
                            }
                            className={"course-cards-two"}
                          >
                            <div
                              data-motion-id={
                                "f55025f4-3861-2bd1-2e00-f3243cc382ae"
                              }
                              className={"course-card-top"}
                            >
                              <div
                                style={{ opacity: "0" }}
                                className={"course-overlay"}
                              ></div>
                              <img
                                className={"course-card-two-image"}
                                src={
                                  "/assets/f15ace2d-6710bb2b1bfbb88a06696c70_Course-Image-4.webp"
                                }
                                width={"519.5"}
                                height={"400"}
                                alt={""}
                                style={{ width: "100%" }}
                                sizes={"(max-width: 767px) 100vw, 519.5px"}
                                loading={"lazy"}
                                srcSet={
                                  "/assets/c2a8201d-6710bb2b1bfbb88a06696c70_Course-Image-4-p-500.webp 500w, /assets/b882baae-6710bb2b1bfbb88a06696c70_Course-Image-4-p-800.webp 800w, /assets/f15ace2d-6710bb2b1bfbb88a06696c70_Course-Image-4.webp 820w"
                                }
                              />
                              <div className={"course-image-wrap"}></div>
                              <div
                                className={
                                  "w-layout-vflex course-card-top-description"
                                }
                              >
                                <div
                                  style={{ color: "rgb(123,124,125)" }}
                                  className={
                                    "small-shot-heading small-heading-body-color margin-bottom-ten"
                                  }
                                >
                                  {"Finance"}
                                </div>
                                <div
                                  style={{ color: "rgb(15,37,42)" }}
                                  className={
                                    "heading-five margin-bottom-twenty"
                                  }
                                >
                                  {
                                    "Understanding corporate finance and investments"
                                  }
                                </div>
                                <div
                                  className={
                                    "w-layout-hflex course-two-card-rating"
                                  }
                                >
                                  <img
                                    src={
                                      "/assets/8f74b198-66c6fb8b857efb6c4c737b5d_Rating.svg"
                                    }
                                    loading={"lazy"}
                                    width={"79"}
                                    height={"Auto"}
                                    alt={""}
                                  />
                                  <div
                                    style={{ color: "rgb(123,124,125)" }}
                                    className={
                                      "small-shot-heading small-heading-body-color rating-color"
                                    }
                                  >
                                    {"4.88 (210)"}
                                  </div>
                                </div>
                              </div>
                              <div
                                className={
                                  "course-price-wrapper course-two-price"
                                }
                              >
                                <div>{"Free"}</div>
                              </div>
                            </div>
                            <div
                              style={{ display: "none" }}
                              className={"course-card-pop-up"}
                            >
                              <div className={"heading-five course-name"}>
                                {
                                  "Understanding corporate finance and investments"
                                }
                              </div>
                              <div
                                className={
                                  "w-layout-hflex course-card-popup-tags"
                                }
                              >
                                <div className={"grey-dot"}></div>
                                <div
                                  className={
                                    "small-shot-heading small-heading-body-color"
                                  }
                                >
                                  {"10 Lessons"}
                                </div>
                                <div className={"grey-dot"}></div>
                                <div
                                  className={
                                    "small-shot-heading small-heading-body-color"
                                  }
                                >
                                  {"8k Enrolled"}
                                </div>
                              </div>
                              <p className={"course-card-two-description"}>
                                {
                                  "Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet."
                                }
                              </p>
                              <div className={"w-layout-vflex course-checkes"}>
                                <div
                                  className={
                                    "w-layout-hflex course-card-checklist"
                                  }
                                >
                                  <img
                                    src={
                                      "/assets/669fe9b8-66cc3f52670c35637add3599_Tick.svg"
                                    }
                                    loading={"lazy"}
                                    width={"12"}
                                    height={"10"}
                                    alt={"Icon"}
                                    className={"margin-top-five"}
                                  />
                                  <div
                                    className={"course-card-two-description"}
                                  >
                                    {"Lorem ipsum dolor sit amet consectetur"}
                                  </div>
                                </div>
                                <div
                                  className={
                                    "w-layout-hflex course-card-checklist"
                                  }
                                >
                                  <img
                                    src={
                                      "/assets/669fe9b8-66cc3f52670c35637add3599_Tick.svg"
                                    }
                                    loading={"lazy"}
                                    width={"12"}
                                    height={"10"}
                                    alt={"Icon"}
                                    className={"margin-top-five"}
                                  />
                                  <div
                                    className={"course-card-two-description"}
                                  >
                                    {"Lorem ipsum dolor"}
                                  </div>
                                </div>
                                <div
                                  className={
                                    "w-layout-hflex course-card-checklist"
                                  }
                                >
                                  <img
                                    src={
                                      "/assets/669fe9b8-66cc3f52670c35637add3599_Tick.svg"
                                    }
                                    loading={"lazy"}
                                    width={"12"}
                                    height={"10"}
                                    alt={"Icon"}
                                    className={"margin-top-five"}
                                  />
                                  <div
                                    className={"course-card-two-description"}
                                  >
                                    {"Lorem ipsum dolor sit"}
                                  </div>
                                </div>
                              </div>
                              <div
                                className={
                                  "w-layout-hflex course-cards-two-button"
                                }
                              >
                                <SiteLink
                                  data-motion-id={
                                    "f55025f4-3861-2bd1-2e00-f3243cc382d8"
                                  }
                                  href={
                                    "/understanding-corporate-finance-and-investments/course-details"
                                  }
                                  className={
                                    "button button-yellow course-two-button free-button w-inline-block"
                                  }
                                >
                                  <div>{"Course Details"}</div>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"w-dyn-list"}>
                      <div
                        role={"list"}
                        className={"card-height-full w-dyn-items"}
                      >
                        <div
                          role={"listitem"}
                          className={"card-height-full w-dyn-item"}
                        >
                          <div
                            data-motion-id={
                              "50a41079-6f5f-fa39-8032-e2a256573806"
                            }
                            className={"course-cards-two"}
                          >
                            <div
                              data-motion-id={
                                "50a41079-6f5f-fa39-8032-e2a256573807"
                              }
                              className={"course-card-top"}
                            >
                              <div
                                style={{ opacity: "0" }}
                                className={"course-overlay"}
                              ></div>
                              <img
                                className={"course-card-two-image"}
                                src={
                                  "/assets/b792cfd1-66eb9e61096e930736b651e4_Course-Small-Image-5.webp"
                                }
                                width={"519.5"}
                                height={"400"}
                                alt={
                                  "Full-stack development with the MERN stack"
                                }
                                style={{ width: "100%" }}
                                sizes={"(max-width: 767px) 100vw, 519.5px"}
                                loading={"lazy"}
                                srcSet={
                                  "/assets/574cdbfc-66eb9e61096e930736b651e4_Course-Small-Image-5-p-500.webp 500w, /assets/ece034eb-66eb9e61096e930736b651e4_Course-Small-Image-5-p-800.webp 800w, /assets/b792cfd1-66eb9e61096e930736b651e4_Course-Small-Image-5.webp 820w"
                                }
                              />
                              <div className={"course-image-wrap"}></div>
                              <div
                                className={
                                  "w-layout-vflex course-card-top-description"
                                }
                              >
                                <div
                                  style={{ color: "rgb(123,124,125)" }}
                                  className={
                                    "small-shot-heading small-heading-body-color margin-bottom-ten"
                                  }
                                >
                                  {"Development"}
                                </div>
                                <div
                                  style={{ color: "rgb(15,37,42)" }}
                                  className={
                                    "heading-five margin-bottom-twenty"
                                  }
                                >
                                  {"Full-stack development with the MERN stack"}
                                </div>
                                <div
                                  className={
                                    "w-layout-hflex course-two-card-rating"
                                  }
                                >
                                  <img
                                    src={
                                      "/assets/8f74b198-66c6fb8b857efb6c4c737b5d_Rating.svg"
                                    }
                                    loading={"lazy"}
                                    width={"79"}
                                    height={"Auto"}
                                    alt={""}
                                  />
                                  <div
                                    style={{ color: "rgb(123,124,125)" }}
                                    className={
                                      "small-shot-heading small-heading-body-color rating-color"
                                    }
                                  >
                                    {"5.00 (985)"}
                                  </div>
                                </div>
                              </div>
                              <div
                                className={
                                  "course-price-wrapper course-two-price"
                                }
                              >
                                <div>{"$72 "}</div>
                              </div>
                            </div>
                            <div
                              className={"course-card-pop-up course-popup-last"}
                            >
                              <div className={"heading-five course-name"}>
                                {"Full-stack development with the MERN stack"}
                              </div>
                              <div
                                className={
                                  "w-layout-hflex course-card-popup-tags"
                                }
                              >
                                <div className={"grey-dot"}></div>
                                <div
                                  className={
                                    "small-shot-heading small-heading-body-color"
                                  }
                                >
                                  {"12 Lessons"}
                                </div>
                                <div className={"grey-dot"}></div>
                                <div
                                  className={
                                    "small-shot-heading small-heading-body-color"
                                  }
                                >
                                  {"22k Enrolled"}
                                </div>
                              </div>
                              <p className={"course-card-two-description"}>
                                {
                                  "Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet."
                                }
                              </p>
                              <div className={"w-layout-vflex course-checkes"}>
                                <div
                                  className={
                                    "w-layout-hflex course-card-checklist"
                                  }
                                >
                                  <img
                                    src={
                                      "/assets/669fe9b8-66cc3f52670c35637add3599_Tick.svg"
                                    }
                                    loading={"lazy"}
                                    width={"12"}
                                    height={"10"}
                                    alt={"Icon"}
                                    className={"margin-top-five"}
                                  />
                                  <div
                                    className={"course-card-two-description"}
                                  >
                                    {"Lorem ipsum dolor sit amet consectetur"}
                                  </div>
                                </div>
                                <div
                                  className={
                                    "w-layout-hflex course-card-checklist"
                                  }
                                >
                                  <img
                                    src={
                                      "/assets/669fe9b8-66cc3f52670c35637add3599_Tick.svg"
                                    }
                                    loading={"lazy"}
                                    width={"12"}
                                    height={"10"}
                                    alt={"Icon"}
                                    className={"margin-top-five"}
                                  />
                                  <div
                                    className={"course-card-two-description"}
                                  >
                                    {"Lorem ipsum dolor"}
                                  </div>
                                </div>
                                <div
                                  className={
                                    "w-layout-hflex course-card-checklist"
                                  }
                                >
                                  <img
                                    src={
                                      "/assets/669fe9b8-66cc3f52670c35637add3599_Tick.svg"
                                    }
                                    loading={"lazy"}
                                    width={"12"}
                                    height={"10"}
                                    alt={"Icon"}
                                    className={"margin-top-five"}
                                  />
                                  <div
                                    className={"course-card-two-description"}
                                  >
                                    {"Lorem ipsum dolor sit"}
                                  </div>
                                </div>
                              </div>
                              <div
                                className={
                                  "w-layout-hflex course-cards-two-button"
                                }
                              >
                                <SiteLink
                                  data-motion-id={
                                    "50a41079-6f5f-fa39-8032-e2a256573826"
                                  }
                                  href={
                                    "/full-stack-development-with-the-mern-stack/course-details"
                                  }
                                  className={
                                    "button button-yellow course-two-button w-inline-block"
                                  }
                                >
                                  <div>{"Course Details"}</div>
                                </SiteLink>
                                <SiteLink
                                  data-motion-id={
                                    "50a41079-6f5f-fa39-8032-e2a256573829"
                                  }
                                  href={
                                    "/product/full-stack-development-with-the-mern-stack"
                                  }
                                  className={
                                    "button button-border-off course-button-two w-inline-block"
                                  }
                                >
                                  <div>{"Enroll"}</div>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"w-dyn-list"}>
                      <div
                        role={"list"}
                        className={"card-height-full w-dyn-items"}
                      >
                        <div
                          role={"listitem"}
                          className={"card-height-full w-dyn-item"}
                        >
                          <div
                            data-motion-id={
                              "47257b11-4f98-41c7-50f3-7772768a1693"
                            }
                            className={"course-cards-two"}
                          >
                            <div
                              data-motion-id={
                                "47257b11-4f98-41c7-50f3-7772768a1694"
                              }
                              className={"course-card-top"}
                            >
                              <div
                                style={{ opacity: "0" }}
                                className={"course-overlay"}
                              ></div>
                              <img
                                className={"course-card-two-image"}
                                src={
                                  "/assets/2a0fe063-66eb9dfb3e87f8984b5a15b6_Course-Small-Image.webp"
                                }
                                width={"519.5"}
                                height={"400"}
                                alt={
                                  "Building single page applications with angular"
                                }
                                style={{ width: "100%" }}
                                sizes={"(max-width: 767px) 100vw, 519.5px"}
                                loading={"lazy"}
                                srcSet={
                                  "/assets/fa45b4a2-66eb9dfb3e87f8984b5a15b6_Course-Small-Image-p-500.webp 500w, /assets/264f8a55-66eb9dfb3e87f8984b5a15b6_Course-Small-Image-p-800.webp 800w, /assets/2a0fe063-66eb9dfb3e87f8984b5a15b6_Course-Small-Image.webp 820w"
                                }
                              />
                              <div className={"course-image-wrap"}></div>
                              <div
                                className={
                                  "w-layout-vflex course-card-top-description"
                                }
                              >
                                <div
                                  style={{ color: "rgb(123,124,125)" }}
                                  className={
                                    "small-shot-heading small-heading-body-color margin-bottom-ten"
                                  }
                                >
                                  {"Development"}
                                </div>
                                <div
                                  style={{ color: "rgb(15,37,42)" }}
                                  className={
                                    "heading-five margin-bottom-twenty"
                                  }
                                >
                                  {
                                    "Building single page applications with angular"
                                  }
                                </div>
                                <div
                                  className={
                                    "w-layout-hflex course-two-card-rating"
                                  }
                                >
                                  <img
                                    src={
                                      "/assets/8f74b198-66c6fb8b857efb6c4c737b5d_Rating.svg"
                                    }
                                    loading={"lazy"}
                                    width={"79"}
                                    height={"Auto"}
                                    alt={""}
                                  />
                                  <div
                                    style={{ color: "rgb(123,124,125)" }}
                                    className={
                                      "small-shot-heading small-heading-body-color rating-color"
                                    }
                                  >
                                    {"5.00 (328)"}
                                  </div>
                                </div>
                              </div>
                              <div
                                className={
                                  "course-price-wrapper course-two-price"
                                }
                              >
                                <div>{"$0 "}</div>
                              </div>
                            </div>
                            <div
                              style={{ display: "none" }}
                              className={"course-card-pop-up"}
                            >
                              <div className={"heading-five course-name"}>
                                {
                                  "Building single page applications with angular"
                                }
                              </div>
                              <div
                                className={
                                  "w-layout-hflex course-card-popup-tags"
                                }
                              >
                                <div className={"grey-dot"}></div>
                                <div
                                  className={
                                    "small-shot-heading small-heading-body-color"
                                  }
                                >
                                  {"6 Lessons"}
                                </div>
                                <div className={"grey-dot"}></div>
                                <div
                                  className={
                                    "small-shot-heading small-heading-body-color"
                                  }
                                >
                                  {"12k Enrolled"}
                                </div>
                              </div>
                              <p className={"course-card-two-description"}>
                                {
                                  "Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet."
                                }
                              </p>
                              <div className={"w-layout-vflex course-checkes"}>
                                <div
                                  className={
                                    "w-layout-hflex course-card-checklist"
                                  }
                                >
                                  <img
                                    src={
                                      "/assets/669fe9b8-66cc3f52670c35637add3599_Tick.svg"
                                    }
                                    loading={"lazy"}
                                    width={"12"}
                                    height={"10"}
                                    alt={"Icon"}
                                    className={"margin-top-five"}
                                  />
                                  <div
                                    className={"course-card-two-description"}
                                  >
                                    {"Lorem ipsum dolor sit amet consectetur"}
                                  </div>
                                </div>
                                <div
                                  className={
                                    "w-layout-hflex course-card-checklist"
                                  }
                                >
                                  <img
                                    src={
                                      "/assets/669fe9b8-66cc3f52670c35637add3599_Tick.svg"
                                    }
                                    loading={"lazy"}
                                    width={"12"}
                                    height={"10"}
                                    alt={"Icon"}
                                    className={"margin-top-five"}
                                  />
                                  <div
                                    className={"course-card-two-description"}
                                  >
                                    {"Lorem ipsum dolor"}
                                  </div>
                                </div>
                                <div
                                  className={
                                    "w-layout-hflex course-card-checklist"
                                  }
                                >
                                  <img
                                    src={
                                      "/assets/669fe9b8-66cc3f52670c35637add3599_Tick.svg"
                                    }
                                    loading={"lazy"}
                                    width={"12"}
                                    height={"10"}
                                    alt={"Icon"}
                                    className={"margin-top-five"}
                                  />
                                  <div
                                    className={"course-card-two-description"}
                                  >
                                    {"Lorem ipsum dolor sit"}
                                  </div>
                                </div>
                              </div>
                              <div
                                className={
                                  "w-layout-hflex course-cards-two-button"
                                }
                              >
                                <SiteLink
                                  data-motion-id={
                                    "47257b11-4f98-41c7-50f3-7772768a16b3"
                                  }
                                  href={
                                    "/building-single-page-applications-with-angular/course-details"
                                  }
                                  className={
                                    "button button-yellow course-two-button free-button w-inline-block"
                                  }
                                >
                                  <div>{"Course Details"}</div>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"w-dyn-list"}>
                      <div
                        role={"list"}
                        className={"card-height-full w-dyn-items"}
                      >
                        <div
                          role={"listitem"}
                          className={"card-height-full w-dyn-item"}
                        >
                          <div
                            data-motion-id={
                              "50a41079-6f5f-fa39-8032-e2a2565737ae"
                            }
                            className={"course-cards-two"}
                          >
                            <div
                              data-motion-id={
                                "50a41079-6f5f-fa39-8032-e2a2565737af"
                              }
                              className={"course-card-top"}
                            >
                              <div
                                style={{ opacity: "0" }}
                                className={"course-overlay"}
                              ></div>
                              <img
                                className={"course-card-two-image"}
                                src={
                                  "/assets/fa099d9d-66eb9e1184c0c12d2244968d_Course-Small-Image-9.webp"
                                }
                                width={"519.5"}
                                height={"400"}
                                alt={"Database integration with MongoDB"}
                                style={{ width: "100%" }}
                                sizes={"(max-width: 767px) 100vw, 519.5px"}
                                loading={"lazy"}
                                srcSet={
                                  "/assets/385869d7-66eb9e1184c0c12d2244968d_Course-Small-Image-9-p-500.webp 500w, /assets/236313bd-66eb9e1184c0c12d2244968d_Course-Small-Image-9-p-800.webp 800w, /assets/fa099d9d-66eb9e1184c0c12d2244968d_Course-Small-Image-9.webp 820w"
                                }
                              />
                              <div className={"course-image-wrap"}></div>
                              <div
                                className={
                                  "w-layout-vflex course-card-top-description"
                                }
                              >
                                <div
                                  style={{ color: "rgb(123,124,125)" }}
                                  className={
                                    "small-shot-heading small-heading-body-color margin-bottom-ten"
                                  }
                                >
                                  {"Development"}
                                </div>
                                <div
                                  style={{ color: "rgb(15,37,42)" }}
                                  className={
                                    "heading-five margin-bottom-twenty"
                                  }
                                >
                                  {"Database integration with MongoDB"}
                                </div>
                                <div
                                  className={
                                    "w-layout-hflex course-two-card-rating"
                                  }
                                >
                                  <img
                                    src={
                                      "/assets/8f74b198-66c6fb8b857efb6c4c737b5d_Rating.svg"
                                    }
                                    loading={"lazy"}
                                    width={"79"}
                                    height={"Auto"}
                                    alt={""}
                                  />
                                  <div
                                    style={{ color: "rgb(123,124,125)" }}
                                    className={
                                      "small-shot-heading small-heading-body-color rating-color"
                                    }
                                  >
                                    {"4.49 (756)"}
                                  </div>
                                </div>
                              </div>
                              <div
                                className={
                                  "course-price-wrapper course-two-price"
                                }
                              >
                                <div>{"$59 "}</div>
                              </div>
                            </div>
                            <div
                              style={{ display: "none" }}
                              className={"course-card-pop-up"}
                            >
                              <div className={"heading-five course-name"}>
                                {"Database integration with MongoDB"}
                              </div>
                              <div
                                className={
                                  "w-layout-hflex course-card-popup-tags"
                                }
                              >
                                <div className={"grey-dot"}></div>
                                <div
                                  className={
                                    "small-shot-heading small-heading-body-color"
                                  }
                                >
                                  {"10 Lessons"}
                                </div>
                                <div className={"grey-dot"}></div>
                                <div
                                  className={
                                    "small-shot-heading small-heading-body-color"
                                  }
                                >
                                  {"7k Enrolled"}
                                </div>
                              </div>
                              <p className={"course-card-two-description"}>
                                {
                                  "Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet."
                                }
                              </p>
                              <div className={"w-layout-vflex course-checkes"}>
                                <div
                                  className={
                                    "w-layout-hflex course-card-checklist"
                                  }
                                >
                                  <img
                                    src={
                                      "/assets/669fe9b8-66cc3f52670c35637add3599_Tick.svg"
                                    }
                                    loading={"lazy"}
                                    width={"12"}
                                    height={"10"}
                                    alt={"Icon"}
                                    className={"margin-top-five"}
                                  />
                                  <div
                                    className={"course-card-two-description"}
                                  >
                                    {"Lorem ipsum dolor sit amet consectetur"}
                                  </div>
                                </div>
                                <div
                                  className={
                                    "w-layout-hflex course-card-checklist"
                                  }
                                >
                                  <img
                                    src={
                                      "/assets/669fe9b8-66cc3f52670c35637add3599_Tick.svg"
                                    }
                                    loading={"lazy"}
                                    width={"12"}
                                    height={"10"}
                                    alt={"Icon"}
                                    className={"margin-top-five"}
                                  />
                                  <div
                                    className={"course-card-two-description"}
                                  >
                                    {"Lorem ipsum dolor"}
                                  </div>
                                </div>
                                <div
                                  className={
                                    "w-layout-hflex course-card-checklist"
                                  }
                                >
                                  <img
                                    src={
                                      "/assets/669fe9b8-66cc3f52670c35637add3599_Tick.svg"
                                    }
                                    loading={"lazy"}
                                    width={"12"}
                                    height={"10"}
                                    alt={"Icon"}
                                    className={"margin-top-five"}
                                  />
                                  <div
                                    className={"course-card-two-description"}
                                  >
                                    {"Lorem ipsum dolor sit"}
                                  </div>
                                </div>
                              </div>
                              <div
                                className={
                                  "w-layout-hflex course-cards-two-button"
                                }
                              >
                                <SiteLink
                                  data-motion-id={
                                    "50a41079-6f5f-fa39-8032-e2a2565737ce"
                                  }
                                  href={
                                    "/database-integration-with-mongodb/course-details"
                                  }
                                  className={
                                    "button button-yellow course-two-button w-inline-block"
                                  }
                                >
                                  <div>{"Course Details"}</div>
                                </SiteLink>
                                <SiteLink
                                  data-motion-id={
                                    "50a41079-6f5f-fa39-8032-e2a2565737d1"
                                  }
                                  href={
                                    "/product/database-integration-with-mongodb"
                                  }
                                  className={
                                    "button button-border-off course-button-two w-inline-block"
                                  }
                                >
                                  <div>{"Enroll"}</div>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"w-dyn-list"}>
                      <div
                        role={"list"}
                        className={"card-height-full w-dyn-items"}
                      >
                        <div
                          role={"listitem"}
                          className={"card-height-full w-dyn-item"}
                        >
                          <div
                            data-motion-id={
                              "50a41079-6f5f-fa39-8032-e2a2565737da"
                            }
                            className={"course-cards-two"}
                          >
                            <div
                              data-motion-id={
                                "50a41079-6f5f-fa39-8032-e2a2565737db"
                              }
                              className={"course-card-top"}
                            >
                              <div
                                style={{ opacity: "0" }}
                                className={"course-overlay"}
                              ></div>
                              <img
                                className={"course-card-two-image"}
                                src={
                                  "/assets/b608125d-66eb9e363f6e47ec5245cf09_Course-Small-Image-7.webp"
                                }
                                width={"519.5"}
                                height={"400"}
                                alt={"Risk management and business continuity"}
                                style={{ width: "100%" }}
                                sizes={"(max-width: 767px) 100vw, 519.5px"}
                                loading={"lazy"}
                                srcSet={
                                  "/assets/3af4b6a8-66eb9e363f6e47ec5245cf09_Course-Small-Image-7-p-500.webp 500w, /assets/3ed0942e-66eb9e363f6e47ec5245cf09_Course-Small-Image-7-p-800.webp 800w, /assets/b608125d-66eb9e363f6e47ec5245cf09_Course-Small-Image-7.webp 820w"
                                }
                              />
                              <div className={"course-image-wrap"}></div>
                              <div
                                className={
                                  "w-layout-vflex course-card-top-description"
                                }
                              >
                                <div
                                  style={{ color: "rgb(123,124,125)" }}
                                  className={
                                    "small-shot-heading small-heading-body-color margin-bottom-ten"
                                  }
                                >
                                  {"Management"}
                                </div>
                                <div
                                  style={{ color: "rgb(15,37,42)" }}
                                  className={
                                    "heading-five margin-bottom-twenty"
                                  }
                                >
                                  {"Risk management and business continuity"}
                                </div>
                                <div
                                  className={
                                    "w-layout-hflex course-two-card-rating"
                                  }
                                >
                                  <img
                                    src={
                                      "/assets/8f74b198-66c6fb8b857efb6c4c737b5d_Rating.svg"
                                    }
                                    loading={"lazy"}
                                    width={"79"}
                                    height={"Auto"}
                                    alt={""}
                                  />
                                  <div
                                    style={{ color: "rgb(123,124,125)" }}
                                    className={
                                      "small-shot-heading small-heading-body-color rating-color"
                                    }
                                  >
                                    {"4.88 (210)"}
                                  </div>
                                </div>
                              </div>
                              <div
                                className={
                                  "course-price-wrapper course-two-price"
                                }
                              >
                                <div>{"$49 "}</div>
                              </div>
                            </div>
                            <div
                              style={{ display: "none" }}
                              className={"course-card-pop-up"}
                            >
                              <div className={"heading-five course-name"}>
                                {"Risk management and business continuity"}
                              </div>
                              <div
                                className={
                                  "w-layout-hflex course-card-popup-tags"
                                }
                              >
                                <div className={"grey-dot"}></div>
                                <div
                                  className={
                                    "small-shot-heading small-heading-body-color"
                                  }
                                >
                                  {"3 Lessons"}
                                </div>
                                <div className={"grey-dot"}></div>
                                <div
                                  className={
                                    "small-shot-heading small-heading-body-color"
                                  }
                                >
                                  {"8k Enrolled"}
                                </div>
                              </div>
                              <p className={"course-card-two-description"}>
                                {
                                  "Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet."
                                }
                              </p>
                              <div className={"w-layout-vflex course-checkes"}>
                                <div
                                  className={
                                    "w-layout-hflex course-card-checklist"
                                  }
                                >
                                  <img
                                    src={
                                      "/assets/669fe9b8-66cc3f52670c35637add3599_Tick.svg"
                                    }
                                    loading={"lazy"}
                                    width={"12"}
                                    height={"10"}
                                    alt={"Icon"}
                                    className={"margin-top-five"}
                                  />
                                  <div
                                    className={"course-card-two-description"}
                                  >
                                    {"Lorem ipsum dolor sit amet consectetur"}
                                  </div>
                                </div>
                                <div
                                  className={
                                    "w-layout-hflex course-card-checklist"
                                  }
                                >
                                  <img
                                    src={
                                      "/assets/669fe9b8-66cc3f52670c35637add3599_Tick.svg"
                                    }
                                    loading={"lazy"}
                                    width={"12"}
                                    height={"10"}
                                    alt={"Icon"}
                                    className={"margin-top-five"}
                                  />
                                  <div
                                    className={"course-card-two-description"}
                                  >
                                    {"Lorem ipsum dolor"}
                                  </div>
                                </div>
                                <div
                                  className={
                                    "w-layout-hflex course-card-checklist"
                                  }
                                >
                                  <img
                                    src={
                                      "/assets/669fe9b8-66cc3f52670c35637add3599_Tick.svg"
                                    }
                                    loading={"lazy"}
                                    width={"12"}
                                    height={"10"}
                                    alt={"Icon"}
                                    className={"margin-top-five"}
                                  />
                                  <div
                                    className={"course-card-two-description"}
                                  >
                                    {"Lorem ipsum dolor sit"}
                                  </div>
                                </div>
                              </div>
                              <div
                                className={
                                  "w-layout-hflex course-cards-two-button"
                                }
                              >
                                <SiteLink
                                  data-motion-id={
                                    "50a41079-6f5f-fa39-8032-e2a2565737fa"
                                  }
                                  href={
                                    "/risk-management-and-business-continuity/course-details"
                                  }
                                  className={
                                    "button button-yellow course-two-button w-inline-block"
                                  }
                                >
                                  <div>{"Course Details"}</div>
                                </SiteLink>
                                <SiteLink
                                  data-motion-id={
                                    "50a41079-6f5f-fa39-8032-e2a2565737fd"
                                  }
                                  href={
                                    "/product/risk-management-and-business-continuity"
                                  }
                                  className={
                                    "button button-border-off course-button-two w-inline-block"
                                  }
                                >
                                  <div>{"Enroll"}</div>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"w-dyn-list"}>
                      <div
                        role={"list"}
                        className={"card-height-full w-dyn-items"}
                      >
                        <div
                          role={"listitem"}
                          className={"card-height-full w-dyn-item"}
                        >
                          <div
                            data-motion-id={
                              "50a41079-6f5f-fa39-8032-e2a2565738b4"
                            }
                            className={"course-cards-two"}
                          >
                            <div
                              data-motion-id={
                                "50a41079-6f5f-fa39-8032-e2a2565738b5"
                              }
                              className={"course-card-top"}
                            >
                              <div
                                style={{ opacity: "0" }}
                                className={"course-overlay"}
                              ></div>
                              <img
                                className={"course-card-two-image"}
                                src={
                                  "/assets/10d5f997-66eb9ece25b132baef1462d5_Course-Small-Image-3.webp"
                                }
                                width={"519.5"}
                                height={"400"}
                                alt={
                                  "The complete guide to personal and business finance"
                                }
                                style={{ width: "100%" }}
                                sizes={"(max-width: 767px) 100vw, 519.5px"}
                                loading={"lazy"}
                                srcSet={
                                  "/assets/c3cad60d-66eb9ece25b132baef1462d5_Course-Small-Image-3-p-500.webp 500w, /assets/90f60e11-66eb9ece25b132baef1462d5_Course-Small-Image-3-p-800.webp 800w, /assets/10d5f997-66eb9ece25b132baef1462d5_Course-Small-Image-3.webp 820w"
                                }
                              />
                              <div className={"course-image-wrap"}></div>
                              <div
                                className={
                                  "w-layout-vflex course-card-top-description"
                                }
                              >
                                <div
                                  style={{ color: "rgb(123,124,125)" }}
                                  className={
                                    "small-shot-heading small-heading-body-color margin-bottom-ten"
                                  }
                                >
                                  {"Finance"}
                                </div>
                                <div
                                  style={{ color: "rgb(15,37,42)" }}
                                  className={
                                    "heading-five margin-bottom-twenty"
                                  }
                                >
                                  {
                                    "The complete guide to personal and business finance"
                                  }
                                </div>
                                <div
                                  className={
                                    "w-layout-hflex course-two-card-rating"
                                  }
                                >
                                  <img
                                    src={
                                      "/assets/8f74b198-66c6fb8b857efb6c4c737b5d_Rating.svg"
                                    }
                                    loading={"lazy"}
                                    width={"79"}
                                    height={"Auto"}
                                    alt={""}
                                  />
                                  <div
                                    style={{ color: "rgb(123,124,125)" }}
                                    className={
                                      "small-shot-heading small-heading-body-color rating-color"
                                    }
                                  >
                                    {"4.88 (210)"}
                                  </div>
                                </div>
                              </div>
                              <div
                                className={
                                  "course-price-wrapper course-two-price"
                                }
                              >
                                <div>{"$99 "}</div>
                              </div>
                            </div>
                            <div
                              className={"course-card-pop-up course-popup-last"}
                            >
                              <div className={"heading-five course-name"}>
                                {
                                  "The complete guide to personal and business finance"
                                }
                              </div>
                              <div
                                className={
                                  "w-layout-hflex course-card-popup-tags"
                                }
                              >
                                <div className={"grey-dot"}></div>
                                <div
                                  className={
                                    "small-shot-heading small-heading-body-color"
                                  }
                                >
                                  {"10 Lessons"}
                                </div>
                                <div className={"grey-dot"}></div>
                                <div
                                  className={
                                    "small-shot-heading small-heading-body-color"
                                  }
                                >
                                  {"8k Enrolled"}
                                </div>
                              </div>
                              <p className={"course-card-two-description"}>
                                {
                                  "Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet."
                                }
                              </p>
                              <div className={"w-layout-vflex course-checkes"}>
                                <div
                                  className={
                                    "w-layout-hflex course-card-checklist"
                                  }
                                >
                                  <img
                                    src={
                                      "/assets/669fe9b8-66cc3f52670c35637add3599_Tick.svg"
                                    }
                                    loading={"lazy"}
                                    width={"12"}
                                    height={"10"}
                                    alt={"Icon"}
                                    className={"margin-top-five"}
                                  />
                                  <div
                                    className={"course-card-two-description"}
                                  >
                                    {"Lorem ipsum dolor sit amet consectetur"}
                                  </div>
                                </div>
                                <div
                                  className={
                                    "w-layout-hflex course-card-checklist"
                                  }
                                >
                                  <img
                                    src={
                                      "/assets/669fe9b8-66cc3f52670c35637add3599_Tick.svg"
                                    }
                                    loading={"lazy"}
                                    width={"12"}
                                    height={"10"}
                                    alt={"Icon"}
                                    className={"margin-top-five"}
                                  />
                                  <div
                                    className={"course-card-two-description"}
                                  >
                                    {"Lorem ipsum dolor"}
                                  </div>
                                </div>
                                <div
                                  className={
                                    "w-layout-hflex course-card-checklist"
                                  }
                                >
                                  <img
                                    src={
                                      "/assets/669fe9b8-66cc3f52670c35637add3599_Tick.svg"
                                    }
                                    loading={"lazy"}
                                    width={"12"}
                                    height={"10"}
                                    alt={"Icon"}
                                    className={"margin-top-five"}
                                  />
                                  <div
                                    className={"course-card-two-description"}
                                  >
                                    {"Lorem ipsum dolor sit"}
                                  </div>
                                </div>
                              </div>
                              <div
                                className={
                                  "w-layout-hflex course-cards-two-button"
                                }
                              >
                                <SiteLink
                                  data-motion-id={
                                    "50a41079-6f5f-fa39-8032-e2a2565738d4"
                                  }
                                  href={
                                    "/the-complete-guide-to-personal-and-business-finance/course-details"
                                  }
                                  className={
                                    "button button-yellow course-two-button w-inline-block"
                                  }
                                >
                                  <div>{"Course Details"}</div>
                                </SiteLink>
                                <SiteLink
                                  data-motion-id={
                                    "50a41079-6f5f-fa39-8032-e2a2565738d7"
                                  }
                                  href={
                                    "/product/the-complete-guide-to-personal-and-business-finance"
                                  }
                                  className={
                                    "button button-border-off course-button-two w-inline-block"
                                  }
                                >
                                  <div>{"Enroll"}</div>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Interactive>
                <Interactive
                  data-w-tab={"Tab 2"}
                  className={"w-tab-pane"}
                  as={"div"}
                >
                  <div className={"tranding-courses-cards"}>
                    <div className={"w-dyn-list"}>
                      <div
                        role={"list"}
                        className={"card-height-full w-dyn-items"}
                      >
                        <div
                          role={"listitem"}
                          className={"card-height-full w-dyn-item"}
                        >
                          <div
                            data-motion-id={
                              "50a41079-6f5f-fa39-8032-e2a256573832"
                            }
                            className={"course-cards-two"}
                          >
                            <div className={"course-card-top"}>
                              <div
                                style={{ opacity: "0" }}
                                className={"course-overlay"}
                              ></div>
                              <img
                                className={"course-card-two-image"}
                                src={
                                  "/assets/d460afa5-66eb9e25c4d132b7abc4dcb2_Course-Small-Image-8.webp"
                                }
                                width={"519.5"}
                                height={"400"}
                                alt={
                                  "Operations management and process improvement"
                                }
                                style={{ width: "100%" }}
                                sizes={"100vw"}
                                loading={"lazy"}
                                srcSet={
                                  "/assets/65d48e96-66eb9e25c4d132b7abc4dcb2_Course-Small-Image-8-p-500.webp 500w, /assets/174ed563-66eb9e25c4d132b7abc4dcb2_Course-Small-Image-8-p-800.webp 800w, /assets/d460afa5-66eb9e25c4d132b7abc4dcb2_Course-Small-Image-8.webp 820w"
                                }
                              />
                              <div className={"course-image-wrap"}></div>
                              <div
                                className={
                                  "w-layout-vflex course-card-top-description"
                                }
                              >
                                <div
                                  style={{ color: "rgb(123,124,125)" }}
                                  className={
                                    "small-shot-heading small-heading-body-color margin-bottom-ten"
                                  }
                                >
                                  {"Finance"}
                                </div>
                                <div
                                  style={{ color: "rgb(15,37,42)" }}
                                  className={
                                    "heading-five margin-bottom-twenty"
                                  }
                                >
                                  {
                                    "Operations management and process improvement"
                                  }
                                </div>
                                <div
                                  className={
                                    "w-layout-hflex course-two-card-rating"
                                  }
                                >
                                  <img
                                    src={
                                      "/assets/8f74b198-66c6fb8b857efb6c4c737b5d_Rating.svg"
                                    }
                                    loading={"lazy"}
                                    width={"79"}
                                    height={"Auto"}
                                    alt={""}
                                  />
                                  <div
                                    style={{ color: "rgb(123,124,125)" }}
                                    className={
                                      "small-shot-heading small-heading-body-color rating-color"
                                    }
                                  >
                                    {"5.00 (812)"}
                                  </div>
                                </div>
                              </div>
                              <div
                                className={
                                  "course-price-wrapper course-two-price"
                                }
                              >
                                <div>{"Free"}</div>
                              </div>
                            </div>
                            <div
                              style={{ display: "none" }}
                              className={"course-card-pop-up"}
                            >
                              <div className={"heading-five course-name"}>
                                {
                                  "Operations management and process improvement"
                                }
                              </div>
                              <div
                                className={
                                  "w-layout-hflex course-card-popup-tags"
                                }
                              >
                                <div className={"grey-dot"}></div>
                                <div
                                  className={
                                    "small-shot-heading small-heading-body-color"
                                  }
                                >
                                  {"12 Lessons"}
                                </div>
                                <div className={"grey-dot"}></div>
                                <div
                                  className={
                                    "small-shot-heading small-heading-body-color"
                                  }
                                >
                                  {"23k Enrolled"}
                                </div>
                              </div>
                              <p className={"course-card-two-description"}>
                                {
                                  "Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet."
                                }
                              </p>
                              <div className={"w-layout-vflex course-checkes"}>
                                <div
                                  className={
                                    "w-layout-hflex course-card-checklist"
                                  }
                                >
                                  <img
                                    src={
                                      "/assets/669fe9b8-66cc3f52670c35637add3599_Tick.svg"
                                    }
                                    loading={"lazy"}
                                    width={"12"}
                                    height={"10"}
                                    alt={"Icon"}
                                    className={"margin-top-five"}
                                  />
                                  <div
                                    className={"course-card-two-description"}
                                  >
                                    {"Lorem ipsum dolor sit amet consectetur"}
                                  </div>
                                </div>
                                <div
                                  className={
                                    "w-layout-hflex course-card-checklist"
                                  }
                                >
                                  <img
                                    src={
                                      "/assets/669fe9b8-66cc3f52670c35637add3599_Tick.svg"
                                    }
                                    loading={"lazy"}
                                    width={"12"}
                                    height={"10"}
                                    alt={"Icon"}
                                    className={"margin-top-five"}
                                  />
                                  <div
                                    className={"course-card-two-description"}
                                  >
                                    {"Lorem ipsum dolor"}
                                  </div>
                                </div>
                                <div
                                  className={
                                    "w-layout-hflex course-card-checklist"
                                  }
                                >
                                  <img
                                    src={
                                      "/assets/669fe9b8-66cc3f52670c35637add3599_Tick.svg"
                                    }
                                    loading={"lazy"}
                                    width={"12"}
                                    height={"10"}
                                    alt={"Icon"}
                                    className={"margin-top-five"}
                                  />
                                  <div
                                    className={"course-card-two-description"}
                                  >
                                    {"Lorem ipsum dolor sit"}
                                  </div>
                                </div>
                              </div>
                              <div
                                className={
                                  "w-layout-hflex course-cards-two-button"
                                }
                              >
                                <SiteLink
                                  data-motion-id={
                                    "50a41079-6f5f-fa39-8032-e2a256573853"
                                  }
                                  href={
                                    "/operations-management-and-process-improvement/course-details"
                                  }
                                  className={
                                    "button button-yellow course-two-button free-button w-inline-block"
                                  }
                                >
                                  <div>{"Course Details"}</div>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"w-dyn-list"}>
                      <div
                        role={"list"}
                        className={"card-height-full w-dyn-items"}
                      >
                        <div
                          role={"listitem"}
                          className={"card-height-full w-dyn-item"}
                        >
                          <div
                            data-motion-id={
                              "50a41079-6f5f-fa39-8032-e2a25657385c"
                            }
                            className={"course-cards-two"}
                          >
                            <div className={"course-card-top"}>
                              <div
                                style={{ opacity: "0" }}
                                className={"course-overlay"}
                              ></div>
                              <img
                                className={"course-card-two-image"}
                                src={
                                  "/assets/e189c009-66fe66442929de6e874b3284_Course-Image.webp"
                                }
                                width={"519.5"}
                                height={"400"}
                                alt={"Course Details"}
                                style={{ width: "100%" }}
                                sizes={"100vw"}
                                loading={"lazy"}
                                srcSet={
                                  "/assets/f71df869-66fe66442929de6e874b3284_Course-Image-p-500.webp 500w, /assets/4cff7b61-66fe66442929de6e874b3284_Course-Image-p-800.webp 800w, /assets/e189c009-66fe66442929de6e874b3284_Course-Image.webp 820w"
                                }
                              />
                              <div className={"course-image-wrap"}></div>
                              <div
                                className={
                                  "w-layout-vflex course-card-top-description"
                                }
                              >
                                <div
                                  style={{ color: "rgb(123,124,125)" }}
                                  className={
                                    "small-shot-heading small-heading-body-color margin-bottom-ten"
                                  }
                                >
                                  {"Design"}
                                </div>
                                <div
                                  style={{ color: "rgb(15,37,42)" }}
                                  className={
                                    "heading-five margin-bottom-twenty"
                                  }
                                >
                                  {"Design systems and pattern libraries"}
                                </div>
                                <div
                                  className={
                                    "w-layout-hflex course-two-card-rating"
                                  }
                                >
                                  <img
                                    src={
                                      "/assets/8f74b198-66c6fb8b857efb6c4c737b5d_Rating.svg"
                                    }
                                    loading={"lazy"}
                                    width={"79"}
                                    height={"Auto"}
                                    alt={""}
                                  />
                                  <div
                                    style={{ color: "rgb(123,124,125)" }}
                                    className={
                                      "small-shot-heading small-heading-body-color rating-color"
                                    }
                                  >
                                    {"5.00 (1.2K)"}
                                  </div>
                                </div>
                              </div>
                              <div
                                className={
                                  "course-price-wrapper course-two-price"
                                }
                              >
                                <div>{"$99 "}</div>
                              </div>
                            </div>
                            <div
                              style={{ display: "none" }}
                              className={"course-card-pop-up"}
                            >
                              <div className={"heading-five course-name"}>
                                {"Design systems and pattern libraries"}
                              </div>
                              <div
                                className={
                                  "w-layout-hflex course-card-popup-tags"
                                }
                              >
                                <div className={"grey-dot"}></div>
                                <div
                                  className={
                                    "small-shot-heading small-heading-body-color"
                                  }
                                >
                                  {"8 Lessons"}
                                </div>
                                <div className={"grey-dot"}></div>
                                <div
                                  className={
                                    "small-shot-heading small-heading-body-color"
                                  }
                                >
                                  {"25k Enrolled"}
                                </div>
                              </div>
                              <p className={"course-card-two-description"}>
                                {
                                  "Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet."
                                }
                              </p>
                              <div className={"w-layout-vflex course-checkes"}>
                                <div
                                  className={
                                    "w-layout-hflex course-card-checklist"
                                  }
                                >
                                  <img
                                    src={
                                      "/assets/669fe9b8-66cc3f52670c35637add3599_Tick.svg"
                                    }
                                    loading={"lazy"}
                                    width={"12"}
                                    height={"10"}
                                    alt={"Icon"}
                                    className={"margin-top-five"}
                                  />
                                  <div
                                    className={"course-card-two-description"}
                                  >
                                    {"Lorem ipsum dolor sit amet consectetur"}
                                  </div>
                                </div>
                                <div
                                  className={
                                    "w-layout-hflex course-card-checklist"
                                  }
                                >
                                  <img
                                    src={
                                      "/assets/669fe9b8-66cc3f52670c35637add3599_Tick.svg"
                                    }
                                    loading={"lazy"}
                                    width={"12"}
                                    height={"10"}
                                    alt={"Icon"}
                                    className={"margin-top-five"}
                                  />
                                  <div
                                    className={"course-card-two-description"}
                                  >
                                    {"Lorem ipsum dolor"}
                                  </div>
                                </div>
                                <div
                                  className={
                                    "w-layout-hflex course-card-checklist"
                                  }
                                >
                                  <img
                                    src={
                                      "/assets/669fe9b8-66cc3f52670c35637add3599_Tick.svg"
                                    }
                                    loading={"lazy"}
                                    width={"12"}
                                    height={"10"}
                                    alt={"Icon"}
                                    className={"margin-top-five"}
                                  />
                                  <div
                                    className={"course-card-two-description"}
                                  >
                                    {"Lorem ipsum dolor sit"}
                                  </div>
                                </div>
                              </div>
                              <div
                                className={
                                  "w-layout-hflex course-cards-two-button"
                                }
                              >
                                <SiteLink
                                  data-motion-id={
                                    "50a41079-6f5f-fa39-8032-e2a25657387c"
                                  }
                                  href={
                                    "/design-systems-and-pattern-libraries/course-details"
                                  }
                                  className={
                                    "button button-yellow course-two-button w-inline-block"
                                  }
                                >
                                  <div>{"Course Details"}</div>
                                </SiteLink>
                                <SiteLink
                                  data-motion-id={
                                    "50a41079-6f5f-fa39-8032-e2a25657387f"
                                  }
                                  href={
                                    "/product/design-systems-and-pattern-libraries"
                                  }
                                  className={
                                    "button button-border-off course-button-two w-inline-block"
                                  }
                                >
                                  <div>{"Enroll"}</div>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"w-dyn-list"}>
                      <div
                        role={"list"}
                        className={"card-height-full w-dyn-items"}
                      >
                        <div
                          role={"listitem"}
                          className={"card-height-full w-dyn-item"}
                        >
                          <div
                            data-motion-id={
                              "50a41079-6f5f-fa39-8032-e2a256573888"
                            }
                            className={"course-cards-two"}
                          >
                            <div className={"course-card-top"}>
                              <div
                                style={{ opacity: "0" }}
                                className={"course-overlay"}
                              ></div>
                              <img
                                className={"course-card-two-image"}
                                src={
                                  "/assets/86375962-66eb9fb02faddeb03288c28e_Course-Small-Image-2.webp"
                                }
                                width={"519.5"}
                                height={"400"}
                                alt={""}
                                style={{ width: "100%" }}
                                sizes={"100vw"}
                                loading={"lazy"}
                                srcSet={
                                  "/assets/c8d16da2-66eb9fb02faddeb03288c28e_Course-Small-Image-2-p-500.webp 500w, /assets/9b241212-66eb9fb02faddeb03288c28e_Course-Small-Image-2-p-800.webp 800w, /assets/86375962-66eb9fb02faddeb03288c28e_Course-Small-Image-2.webp 820w"
                                }
                              />
                              <div className={"course-image-wrap"}></div>
                              <div
                                className={
                                  "w-layout-vflex course-card-top-description"
                                }
                              >
                                <div
                                  style={{ color: "rgb(123,124,125)" }}
                                  className={
                                    "small-shot-heading small-heading-body-color margin-bottom-ten"
                                  }
                                >
                                  {"Management"}
                                </div>
                                <div
                                  style={{ color: "rgb(15,37,42)" }}
                                  className={
                                    "heading-five margin-bottom-twenty"
                                  }
                                >
                                  {"Grow your brand and reach your audience"}
                                </div>
                                <div
                                  className={
                                    "w-layout-hflex course-two-card-rating"
                                  }
                                >
                                  <img
                                    src={
                                      "/assets/8f74b198-66c6fb8b857efb6c4c737b5d_Rating.svg"
                                    }
                                    loading={"lazy"}
                                    width={"79"}
                                    height={"Auto"}
                                    alt={""}
                                  />
                                  <div
                                    style={{ color: "rgb(123,124,125)" }}
                                    className={
                                      "small-shot-heading small-heading-body-color rating-color"
                                    }
                                  >
                                    {"4.88 (210)"}
                                  </div>
                                </div>
                              </div>
                              <div
                                className={
                                  "course-price-wrapper course-two-price"
                                }
                              >
                                <div>{"$49 "}</div>
                              </div>
                            </div>
                            <div
                              style={{ display: "none" }}
                              className={"course-card-pop-up"}
                            >
                              <div className={"heading-five course-name"}>
                                {"Grow your brand and reach your audience"}
                              </div>
                              <div
                                className={
                                  "w-layout-hflex course-card-popup-tags"
                                }
                              >
                                <div className={"grey-dot"}></div>
                                <div
                                  className={
                                    "small-shot-heading small-heading-body-color"
                                  }
                                >
                                  {"10 Lessons"}
                                </div>
                                <div className={"grey-dot"}></div>
                                <div
                                  className={
                                    "small-shot-heading small-heading-body-color"
                                  }
                                >
                                  {"8k Enrolled"}
                                </div>
                              </div>
                              <p className={"course-card-two-description"}>
                                {
                                  "Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet."
                                }
                              </p>
                              <div className={"w-layout-vflex course-checkes"}>
                                <div
                                  className={
                                    "w-layout-hflex course-card-checklist"
                                  }
                                >
                                  <img
                                    src={
                                      "/assets/669fe9b8-66cc3f52670c35637add3599_Tick.svg"
                                    }
                                    loading={"lazy"}
                                    width={"12"}
                                    height={"10"}
                                    alt={"Icon"}
                                    className={"margin-top-five"}
                                  />
                                  <div
                                    className={"course-card-two-description"}
                                  >
                                    {"Lorem ipsum dolor sit amet consectetur"}
                                  </div>
                                </div>
                                <div
                                  className={
                                    "w-layout-hflex course-card-checklist"
                                  }
                                >
                                  <img
                                    src={
                                      "/assets/669fe9b8-66cc3f52670c35637add3599_Tick.svg"
                                    }
                                    loading={"lazy"}
                                    width={"12"}
                                    height={"10"}
                                    alt={"Icon"}
                                    className={"margin-top-five"}
                                  />
                                  <div
                                    className={"course-card-two-description"}
                                  >
                                    {"Lorem ipsum dolor"}
                                  </div>
                                </div>
                                <div
                                  className={
                                    "w-layout-hflex course-card-checklist"
                                  }
                                >
                                  <img
                                    src={
                                      "/assets/669fe9b8-66cc3f52670c35637add3599_Tick.svg"
                                    }
                                    loading={"lazy"}
                                    width={"12"}
                                    height={"10"}
                                    alt={"Icon"}
                                    className={"margin-top-five"}
                                  />
                                  <div
                                    className={"course-card-two-description"}
                                  >
                                    {"Lorem ipsum dolor sit"}
                                  </div>
                                </div>
                              </div>
                              <div
                                className={
                                  "w-layout-hflex course-cards-two-button"
                                }
                              >
                                <SiteLink
                                  data-motion-id={
                                    "50a41079-6f5f-fa39-8032-e2a2565738a8"
                                  }
                                  href={
                                    "/grow-your-brand-and-reach-your-audience/course-details"
                                  }
                                  className={
                                    "button button-yellow course-two-button w-inline-block"
                                  }
                                >
                                  <div>{"Course Details"}</div>
                                </SiteLink>
                                <SiteLink
                                  data-motion-id={
                                    "50a41079-6f5f-fa39-8032-e2a2565738ab"
                                  }
                                  href={
                                    "/product/grow-your-brand-and-reach-your-audience"
                                  }
                                  className={
                                    "button button-border-off course-button-two w-inline-block"
                                  }
                                >
                                  <div>{"Enroll"}</div>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Interactive>
              </div>
              <Interactive
                className={"courses-pagination-menu w-tab-menu"}
                as={"div"}
              >
                <Interactive
                  data-w-tab={"Tab 1"}
                  className={"tab-nav-link w-inline-block w-tab-link"}
                  as={"a"}
                >
                  <div>{"1"}</div>
                </Interactive>
                <Interactive
                  data-w-tab={"Tab 2"}
                  className={"tab-nav-link w-inline-block w-tab-link"}
                  as={"a"}
                >
                  <div>{"2"}</div>
                </Interactive>
              </Interactive>
            </Interactive>
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
