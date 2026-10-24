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
      <section className={"course-two-hero"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-vflex course-two-hero-main"}>
            <div className={"course-two-hero-text"}>
              <div
                data-motion-id={"96645ce7-a58f-669a-a10d-291fbaae30d0"}
                className={"small-heading"}
              >
                {"START WITH"}
              </div>
              <h1
                data-motion-id={"29418e7a-efc6-4144-cee5-b7e26b1d5bd9"}
                className={"heading-one-top-gap text-white"}
              >
                {"Professional online courses"}
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className={"course-two-category"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-hflex home-two-category-main"}>
            <div className={"w-layout-vflex home-two-category-left"}>
              <div
                data-motion-id={"a5ff96f1-0b24-9a8e-5c74-a45508423d0b"}
                className={"small-heading text-dark"}
              >
                {"Top Categories"}
              </div>
              <h2
                data-motion-id={"ed6d08b9-6a0b-aa2c-c9d5-48406b699d2c"}
                className={"category-heading-gap"}
              >
                {"Discover leading categories"}
              </h2>
              <div>
                <SiteLink
                  data-motion-id={"554bdb09-166f-7496-ccbc-6402fc45feda"}
                  href={"/contact-one"}
                  className={"button button-border-off w-inline-block"}
                >
                  <div>{"Get Started "}</div>
                </SiteLink>
              </div>
            </div>
            <div className={"home-two-category-grid"}>
              <SiteLink
                data-motion-id={"fd52dbab-5378-f8e3-f998-c3abe4ff5476"}
                href={"/category/design"}
                className={"category-cards w-inline-block"}
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
                  {"Web design and creative"}
                </div>
                <div>{"8 Courses"}</div>
              </SiteLink>
              <SiteLink
                data-motion-id={"fd52dbab-5378-f8e3-f998-c3abe4ff5476"}
                href={"/category/finance"}
                className={"category-cards w-inline-block"}
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
                  {"Finance and accounting"}
                </div>
                <div>{"10 Courses"}</div>
              </SiteLink>
              <SiteLink
                data-motion-id={"fd52dbab-5378-f8e3-f998-c3abe4ff5476"}
                href={"/category/development"}
                className={"category-cards w-inline-block"}
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
                data-motion-id={"fd52dbab-5378-f8e3-f998-c3abe4ff5476"}
                href={"/category/finance"}
                className={"category-cards w-inline-block"}
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
                data-motion-id={"fd52dbab-5378-f8e3-f998-c3abe4ff5476"}
                href={"/category/development"}
                className={"category-cards w-inline-block"}
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
                data-motion-id={"fd52dbab-5378-f8e3-f998-c3abe4ff5476"}
                href={"/category/finance"}
                className={"category-cards w-inline-block"}
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
                  {"Content and language"}
                </div>
                <div>{"3 Courses"}</div>
              </SiteLink>
            </div>
          </div>
        </div>
      </section>
      <section className={"course-two-store"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-vflex home-one-courses-top"}>
            <div
              data-motion-id={"a5ff96f1-0b24-9a8e-5c74-a45508423d0b"}
              className={"small-heading text-dark"}
            >
              {"Online learning"}
            </div>
            <h2
              data-motion-id={"67b23140-ee21-39d4-2e93-747766533e3e"}
              className={"no-margin-bottom heading-two-gap"}
            >
              {"Top online courses"}
            </h2>
          </div>
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
                <div className={"course-wrap-card"}>
                  <div
                    data-motion-id={"13b75262-43d1-954c-a92f-96a09df983f6"}
                    className={"w-dyn-list"}
                  >
                    <div role={"list"} className={"w-dyn-items"}>
                      <div role={"listitem"} className={"w-dyn-item"}>
                        <div
                          data-motion-id={
                            "13b75262-43d1-954c-a92f-96a09df983f9"
                          }
                          className={"course-wrap-main"}
                        >
                          <img
                            width={"410"}
                            height={"510"}
                            alt={""}
                            src={
                              "/assets/f65b2025-6710c8e98e373637b34e5406_Course-Image-8.webp"
                            }
                            loading={"lazy"}
                            sizes={"(max-width: 479px) 100vw, 410px"}
                            srcSet={
                              "/assets/350b6726-6710c8e98e373637b34e5406_Course-Image-8-p-500.webp 500w, /assets/e10596bb-6710c8e98e373637b34e5406_Course-Image-8-p-800.webp 800w, /assets/f65b2025-6710c8e98e373637b34e5406_Course-Image-8.webp 820w"
                            }
                            className={"course-three-image"}
                          />
                          <div className={"course-card-three-overlay"}></div>
                          <div className={"course-card-three-content"}>
                            <div
                              className={"small-shot-heading text-light-white"}
                            >
                              {"Management"}
                            </div>
                            <div
                              className={
                                "heading-four text-white course-name-three-gap"
                              }
                            >
                              {
                                "Crisis management and problem-solving strategies"
                              }
                            </div>
                            <div
                              className={"w-layout-hflex course-three-rating"}
                            >
                              <img
                                loading={"lazy"}
                                src={
                                  "/assets/8f74b198-66c6fb8b857efb6c4c737b5d_Rating.svg"
                                }
                                alt={""}
                              />
                              <div
                                className={
                                  "small-shot-heading small-heading-body-color"
                                }
                              >
                                {"4.88 (210)"}
                              </div>
                            </div>
                            <div
                              data-motion-id={
                                "13b75262-43d1-954c-a92f-96a09df98402"
                              }
                              className={"course-three-buttons"}
                            >
                              <div
                                className={
                                  "w-layout-hflex course-three-button-wrap"
                                }
                              >
                                <SiteLink
                                  data-motion-id={
                                    "13b75262-43d1-954c-a92f-96a09df98404"
                                  }
                                  href={
                                    "/crisis-management-and-problem-solving-strategies/course-details"
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
                              data-motion-id={
                                "13b75262-43d1-954c-a92f-96a09df9840a"
                              }
                              className={"course-three-cards-border-one"}
                            ></div>
                            <div
                              data-motion-id={
                                "13b75262-43d1-954c-a92f-96a09df9840b"
                              }
                              className={"course-three-cards-border-two"}
                            ></div>
                            <div
                              data-motion-id={
                                "13b75262-43d1-954c-a92f-96a09df9840c"
                              }
                              className={"course-three-cards-border-three"}
                            ></div>
                            <div
                              data-motion-id={
                                "13b75262-43d1-954c-a92f-96a09df9840d"
                              }
                              className={"course-three-cards-border-four"}
                            ></div>
                            <div
                              data-motion-id={
                                "13b75262-43d1-954c-a92f-96a09df9840e"
                              }
                              className={
                                "course-price-wrapper course-three-price"
                              }
                            >
                              <div>{"Free"}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-motion-id={"5949a68f-4a2b-61a5-faf3-799d29f53281"}
                    className={"w-dyn-list"}
                  >
                    <div role={"list"} className={"w-dyn-items"}>
                      <div role={"listitem"} className={"w-dyn-item"}>
                        <div
                          data-motion-id={
                            "5949a68f-4a2b-61a5-faf3-799d29f53284"
                          }
                          className={"course-wrap-main"}
                        >
                          <img
                            width={"410"}
                            height={"510"}
                            alt={""}
                            src={
                              "/assets/c865225e-6710bd0293bbfbd5e9b9c0b4_Course-Image-5.webp"
                            }
                            loading={"lazy"}
                            sizes={"(max-width: 479px) 100vw, 410px"}
                            srcSet={
                              "/assets/033cf0b4-6710bd0293bbfbd5e9b9c0b4_Course-Image-5-p-500.webp 500w, /assets/adb92d53-6710bd0293bbfbd5e9b9c0b4_Course-Image-5-p-800.webp 800w, /assets/c865225e-6710bd0293bbfbd5e9b9c0b4_Course-Image-5.webp 820w"
                            }
                            className={"course-three-image"}
                          />
                          <div className={"course-card-three-overlay"}></div>
                          <div className={"course-card-three-content"}>
                            <div
                              className={"small-shot-heading text-light-white"}
                            >
                              {"Design"}
                            </div>
                            <div
                              className={
                                "heading-four text-white course-name-three-gap"
                              }
                            >
                              {"Advanced photoshop techniques for designers"}
                            </div>
                            <div
                              className={"w-layout-hflex course-three-rating"}
                            >
                              <img
                                loading={"lazy"}
                                src={
                                  "/assets/8f74b198-66c6fb8b857efb6c4c737b5d_Rating.svg"
                                }
                                alt={""}
                              />
                              <div
                                className={
                                  "small-shot-heading small-heading-body-color"
                                }
                              >
                                {"5.00 (1.2K)"}
                              </div>
                            </div>
                            <div
                              data-motion-id={
                                "5949a68f-4a2b-61a5-faf3-799d29f53290"
                              }
                              className={"course-three-buttons"}
                            >
                              <div
                                className={
                                  "w-layout-hflex course-three-button-wrap"
                                }
                              >
                                <SiteLink
                                  data-motion-id={
                                    "5949a68f-4a2b-61a5-faf3-799d29f53292"
                                  }
                                  href={
                                    "/advanced-photoshop-techniques-for-designers/course-details"
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
                              data-motion-id={
                                "5949a68f-4a2b-61a5-faf3-799d29f53295"
                              }
                              className={"course-three-cards-border-one"}
                            ></div>
                            <div
                              data-motion-id={
                                "5949a68f-4a2b-61a5-faf3-799d29f53296"
                              }
                              className={"course-three-cards-border-two"}
                            ></div>
                            <div
                              data-motion-id={
                                "5949a68f-4a2b-61a5-faf3-799d29f53297"
                              }
                              className={"course-three-cards-border-three"}
                            ></div>
                            <div
                              data-motion-id={
                                "5949a68f-4a2b-61a5-faf3-799d29f53298"
                              }
                              className={"course-three-cards-border-four"}
                            ></div>
                            <div
                              data-motion-id={
                                "5949a68f-4a2b-61a5-faf3-799d29f53299"
                              }
                              className={
                                "course-price-wrapper course-three-price"
                              }
                            >
                              <div>{"Free"}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-motion-id={"6a837a2b-d73d-73c1-d1ee-eb876b542575"}
                    className={"w-dyn-list"}
                  >
                    <div role={"list"} className={"w-dyn-items"}>
                      <div role={"listitem"} className={"w-dyn-item"}>
                        <div
                          data-motion-id={
                            "6a837a2b-d73d-73c1-d1ee-eb876b542578"
                          }
                          className={"course-wrap-main"}
                        >
                          <img
                            width={"410"}
                            height={"510"}
                            alt={""}
                            src={
                              "/assets/119926e2-6710bb35a23640b475679863_Course-Image-2-2.webp"
                            }
                            loading={"lazy"}
                            sizes={"(max-width: 479px) 100vw, 410px"}
                            srcSet={
                              "/assets/65bf4466-6710bb35a23640b475679863_Course-Image-2-2-p-500.webp 500w, /assets/af660686-6710bb35a23640b475679863_Course-Image-2-2-p-800.webp 800w, /assets/119926e2-6710bb35a23640b475679863_Course-Image-2-2.webp 820w"
                            }
                            className={"course-three-image"}
                          />
                          <div className={"course-card-three-overlay"}></div>
                          <div className={"course-card-three-content"}>
                            <div
                              className={"small-shot-heading text-light-white"}
                            >
                              {"Finance"}
                            </div>
                            <div
                              className={
                                "heading-four text-white course-name-three-gap"
                              }
                            >
                              {
                                "Understanding corporate finance and investments"
                              }
                            </div>
                            <div
                              className={"w-layout-hflex course-three-rating"}
                            >
                              <img
                                loading={"lazy"}
                                src={
                                  "/assets/8f74b198-66c6fb8b857efb6c4c737b5d_Rating.svg"
                                }
                                alt={""}
                              />
                              <div
                                className={
                                  "small-shot-heading small-heading-body-color"
                                }
                              >
                                {"4.88 (210)"}
                              </div>
                            </div>
                            <div
                              data-motion-id={
                                "6a837a2b-d73d-73c1-d1ee-eb876b542584"
                              }
                              className={"course-three-buttons"}
                            >
                              <div
                                className={
                                  "w-layout-hflex course-three-button-wrap"
                                }
                              >
                                <SiteLink
                                  data-motion-id={
                                    "6a837a2b-d73d-73c1-d1ee-eb876b542586"
                                  }
                                  href={
                                    "/understanding-corporate-finance-and-investments/course-details"
                                  }
                                  className={
                                    "button button-yellow course-button full-grow w-inline-block"
                                  }
                                >
                                  <div
                                    data-motion-id={
                                      "ed6d08b9-6a0b-aa2c-c9d5-48406b699d2e"
                                    }
                                  >
                                    {"Course details"}
                                  </div>
                                </SiteLink>
                              </div>
                            </div>
                            <div
                              data-motion-id={
                                "6a837a2b-d73d-73c1-d1ee-eb876b542589"
                              }
                              className={"course-three-cards-border-one"}
                            ></div>
                            <div
                              data-motion-id={
                                "6a837a2b-d73d-73c1-d1ee-eb876b54258a"
                              }
                              className={"course-three-cards-border-two"}
                            ></div>
                            <div
                              data-motion-id={
                                "6a837a2b-d73d-73c1-d1ee-eb876b54258b"
                              }
                              className={"course-three-cards-border-three"}
                            ></div>
                            <div
                              data-motion-id={
                                "6a837a2b-d73d-73c1-d1ee-eb876b54258c"
                              }
                              className={"course-three-cards-border-four"}
                            ></div>
                            <div
                              data-motion-id={
                                "6a837a2b-d73d-73c1-d1ee-eb876b54258d"
                              }
                              className={
                                "course-price-wrapper course-three-price"
                              }
                            >
                              <div>{"Free"}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-motion-id={"65b3b6b9-b6e8-9910-b44c-fe6cad410208"}
                    className={"w-dyn-list"}
                  >
                    <div role={"list"} className={"w-dyn-items"}>
                      <div role={"listitem"} className={"w-dyn-item"}>
                        <div
                          data-motion-id={
                            "65b3b6b9-b6e8-9910-b44c-fe6cad41020b"
                          }
                          className={"course-wrap-main"}
                        >
                          <img
                            width={"410"}
                            height={"510"}
                            alt={""}
                            src={
                              "/assets/eb0a4269-66ebabcd61399462d208146a_Course-Portrait-Image.webp"
                            }
                            loading={"lazy"}
                            sizes={"(max-width: 479px) 100vw, 410px"}
                            srcSet={
                              "/assets/9c756b9a-66ebabcd61399462d208146a_Course-Portrait-Image-p-500.webp 500w, /assets/ea275139-66ebabcd61399462d208146a_Course-Portrait-Image-p-800.webp 800w, /assets/eb0a4269-66ebabcd61399462d208146a_Course-Portrait-Image.webp 820w"
                            }
                            className={"course-three-image"}
                          />
                          <div className={"course-card-three-overlay"}></div>
                          <div className={"course-card-three-content"}>
                            <div
                              className={"small-shot-heading text-light-white"}
                            >
                              {"Development"}
                            </div>
                            <div
                              className={
                                "heading-four text-white course-name-three-gap"
                              }
                            >
                              {"Building single page applications with angular"}
                            </div>
                            <div
                              className={"w-layout-hflex course-three-rating"}
                            >
                              <img
                                loading={"lazy"}
                                src={
                                  "/assets/8f74b198-66c6fb8b857efb6c4c737b5d_Rating.svg"
                                }
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
                              data-motion-id={
                                "65b3b6b9-b6e8-9910-b44c-fe6cad410214"
                              }
                              className={"course-three-buttons"}
                            >
                              <div
                                className={
                                  "w-layout-hflex course-three-button-wrap"
                                }
                              >
                                <SiteLink
                                  data-motion-id={
                                    "65b3b6b9-b6e8-9910-b44c-fe6cad410216"
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
                              data-motion-id={
                                "65b3b6b9-b6e8-9910-b44c-fe6cad41021c"
                              }
                              className={"course-three-cards-border-one"}
                            ></div>
                            <div
                              data-motion-id={
                                "65b3b6b9-b6e8-9910-b44c-fe6cad41021d"
                              }
                              className={"course-three-cards-border-two"}
                            ></div>
                            <div
                              data-motion-id={
                                "65b3b6b9-b6e8-9910-b44c-fe6cad41021e"
                              }
                              className={"course-three-cards-border-three"}
                            ></div>
                            <div
                              data-motion-id={
                                "65b3b6b9-b6e8-9910-b44c-fe6cad41021f"
                              }
                              className={"course-three-cards-border-four"}
                            ></div>
                            <div
                              data-motion-id={
                                "65b3b6b9-b6e8-9910-b44c-fe6cad410220"
                              }
                              className={
                                "course-price-wrapper course-three-price"
                              }
                            >
                              <div>{"Free"}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-motion-id={"13b75262-43d1-954c-a92f-96a09df98413"}
                    className={"w-dyn-list"}
                  >
                    <div role={"list"} className={"w-dyn-items"}>
                      <div role={"listitem"} className={"w-dyn-item"}>
                        <div
                          data-motion-id={
                            "13b75262-43d1-954c-a92f-96a09df98416"
                          }
                          className={"course-wrap-main"}
                        >
                          <img
                            width={"410"}
                            height={"510"}
                            alt={""}
                            src={
                              "/assets/e4e1b42f-66ebabde3e87f8984b6782a1_Course-Portrait-Image-9.webp"
                            }
                            loading={"lazy"}
                            sizes={"(max-width: 479px) 100vw, 410px"}
                            srcSet={
                              "/assets/3fc75768-66ebabde3e87f8984b6782a1_Course-Portrait-Image-9-p-500.webp 500w, /assets/f3231bc8-66ebabde3e87f8984b6782a1_Course-Portrait-Image-9-p-800.webp 800w, /assets/e4e1b42f-66ebabde3e87f8984b6782a1_Course-Portrait-Image-9.webp 820w"
                            }
                            className={"course-three-image"}
                          />
                          <div className={"course-card-three-overlay"}></div>
                          <div className={"course-card-three-content"}>
                            <div
                              className={"small-shot-heading text-light-white"}
                            >
                              {"Development"}
                            </div>
                            <div
                              className={
                                "heading-four text-white course-name-three-gap"
                              }
                            >
                              {"Database integration with MongoDB"}
                            </div>
                            <div
                              className={"w-layout-hflex course-three-rating"}
                            >
                              <img
                                loading={"lazy"}
                                src={
                                  "/assets/8f74b198-66c6fb8b857efb6c4c737b5d_Rating.svg"
                                }
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
                              data-motion-id={
                                "13b75262-43d1-954c-a92f-96a09df9841f"
                              }
                              className={"course-three-buttons"}
                            >
                              <div
                                className={
                                  "w-layout-hflex course-three-button-wrap"
                                }
                              >
                                <SiteLink
                                  data-motion-id={
                                    "13b75262-43d1-954c-a92f-96a09df98421"
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
                                    "13b75262-43d1-954c-a92f-96a09df98424"
                                  }
                                  href={
                                    "/product/database-integration-with-mongodb"
                                  }
                                  className={"button buy-button w-inline-block"}
                                >
                                  <div>{"Buy course"}</div>
                                </SiteLink>
                              </div>
                            </div>
                            <div
                              data-motion-id={
                                "13b75262-43d1-954c-a92f-96a09df98427"
                              }
                              className={"course-three-cards-border-one"}
                            ></div>
                            <div
                              data-motion-id={
                                "13b75262-43d1-954c-a92f-96a09df98428"
                              }
                              className={"course-three-cards-border-two"}
                            ></div>
                            <div
                              data-motion-id={
                                "13b75262-43d1-954c-a92f-96a09df98429"
                              }
                              className={"course-three-cards-border-three"}
                            ></div>
                            <div
                              data-motion-id={
                                "13b75262-43d1-954c-a92f-96a09df9842a"
                              }
                              className={"course-three-cards-border-four"}
                            ></div>
                            <div
                              data-motion-id={
                                "13b75262-43d1-954c-a92f-96a09df9842b"
                              }
                              className={
                                "course-price-wrapper course-three-price"
                              }
                            >
                              <div>{"$59 "}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-motion-id={"13b75262-43d1-954c-a92f-96a09df98430"}
                    className={"w-dyn-list"}
                  >
                    <div role={"list"} className={"w-dyn-items"}>
                      <div role={"listitem"} className={"w-dyn-item"}>
                        <div
                          data-motion-id={
                            "13b75262-43d1-954c-a92f-96a09df98433"
                          }
                          className={"course-wrap-main"}
                        >
                          <img
                            width={"410"}
                            height={"510"}
                            alt={""}
                            src={
                              "/assets/16779a38-66ebabf4c17d78e3224b9b5b_Course-Portrait-Image-8.webp"
                            }
                            loading={"lazy"}
                            sizes={"(max-width: 479px) 100vw, 410px"}
                            srcSet={
                              "/assets/f673dad9-66ebabf4c17d78e3224b9b5b_Course-Portrait-Image-8-p-500.webp 500w, /assets/7bcd85c0-66ebabf4c17d78e3224b9b5b_Course-Portrait-Image-8-p-800.webp 800w, /assets/16779a38-66ebabf4c17d78e3224b9b5b_Course-Portrait-Image-8.webp 820w"
                            }
                            className={"course-three-image"}
                          />
                          <div className={"course-card-three-overlay"}></div>
                          <div className={"course-card-three-content"}>
                            <div
                              className={"small-shot-heading text-light-white"}
                            >
                              {"Finance"}
                            </div>
                            <div
                              className={
                                "heading-four text-white course-name-three-gap"
                              }
                            >
                              {"Operations management and process improvement"}
                            </div>
                            <div
                              className={"w-layout-hflex course-three-rating"}
                            >
                              <img
                                loading={"lazy"}
                                src={
                                  "/assets/8f74b198-66c6fb8b857efb6c4c737b5d_Rating.svg"
                                }
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
                              data-motion-id={
                                "13b75262-43d1-954c-a92f-96a09df9843c"
                              }
                              className={"course-three-buttons"}
                            >
                              <div
                                className={
                                  "w-layout-hflex course-three-button-wrap"
                                }
                              >
                                <SiteLink
                                  data-motion-id={
                                    "13b75262-43d1-954c-a92f-96a09df9843e"
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
                              data-motion-id={
                                "13b75262-43d1-954c-a92f-96a09df98441"
                              }
                              className={"course-three-cards-border-one"}
                            ></div>
                            <div
                              data-motion-id={
                                "13b75262-43d1-954c-a92f-96a09df98442"
                              }
                              className={"course-three-cards-border-two"}
                            ></div>
                            <div
                              data-motion-id={
                                "13b75262-43d1-954c-a92f-96a09df98443"
                              }
                              className={"course-three-cards-border-three"}
                            ></div>
                            <div
                              data-motion-id={
                                "13b75262-43d1-954c-a92f-96a09df98444"
                              }
                              className={"course-three-cards-border-four"}
                            ></div>
                            <div
                              data-motion-id={
                                "13b75262-43d1-954c-a92f-96a09df98445"
                              }
                              className={
                                "course-price-wrapper course-three-price"
                              }
                            >
                              <div>{"Free"}</div>
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
                <div className={"course-wrap-card"}>
                  <div className={"w-dyn-list"}>
                    <div role={"list"} className={"w-dyn-items"}>
                      <div role={"listitem"} className={"w-dyn-item"}>
                        <div
                          data-motion-id={
                            "13b75262-43d1-954c-a92f-96a09df9844e"
                          }
                          className={"course-wrap-main"}
                        >
                          <img
                            width={"410"}
                            height={"510"}
                            alt={""}
                            src={
                              "/assets/2b97ab6b-66ebac0cfd1f38c62e59431b_Course-Portrait-Image-7.webp"
                            }
                            loading={"lazy"}
                            sizes={"100vw"}
                            srcSet={
                              "/assets/c3ff0fae-66ebac0cfd1f38c62e59431b_Course-Portrait-Image-7-p-500.webp 500w, /assets/164c23b8-66ebac0cfd1f38c62e59431b_Course-Portrait-Image-7-p-800.webp 800w, /assets/2b97ab6b-66ebac0cfd1f38c62e59431b_Course-Portrait-Image-7.webp 820w"
                            }
                            className={"course-three-image"}
                          />
                          <div className={"course-card-three-overlay"}></div>
                          <div className={"course-card-three-content"}>
                            <div
                              className={"small-shot-heading text-light-white"}
                            >
                              {"Management"}
                            </div>
                            <div
                              className={
                                "heading-four text-white course-name-three-gap"
                              }
                            >
                              {"Risk management and business continuity"}
                            </div>
                            <div
                              className={"w-layout-hflex course-three-rating"}
                            >
                              <img
                                loading={"lazy"}
                                src={
                                  "/assets/8f74b198-66c6fb8b857efb6c4c737b5d_Rating.svg"
                                }
                                alt={""}
                              />
                              <div
                                className={
                                  "small-shot-heading small-heading-body-color"
                                }
                              >
                                {"4.88 (210)"}
                              </div>
                            </div>
                            <div
                              data-motion-id={
                                "13b75262-43d1-954c-a92f-96a09df98457"
                              }
                              className={"course-three-buttons"}
                            >
                              <div
                                className={
                                  "w-layout-hflex course-three-button-wrap"
                                }
                              >
                                <SiteLink
                                  data-motion-id={
                                    "13b75262-43d1-954c-a92f-96a09df98459"
                                  }
                                  href={
                                    "/risk-management-and-business-continuity/course-details"
                                  }
                                  className={
                                    "button button-yellow course-button full-grow w-inline-block"
                                  }
                                >
                                  <div>{"Course details"}</div>
                                </SiteLink>
                                <SiteLink
                                  data-motion-id={
                                    "13b75262-43d1-954c-a92f-96a09df9845c"
                                  }
                                  href={
                                    "/product/risk-management-and-business-continuity"
                                  }
                                  className={"button buy-button w-inline-block"}
                                >
                                  <div>{"Buy course"}</div>
                                </SiteLink>
                              </div>
                            </div>
                            <div
                              data-motion-id={
                                "13b75262-43d1-954c-a92f-96a09df9845f"
                              }
                              className={"course-three-cards-border-one"}
                            ></div>
                            <div
                              data-motion-id={
                                "13b75262-43d1-954c-a92f-96a09df98460"
                              }
                              className={"course-three-cards-border-two"}
                            ></div>
                            <div
                              data-motion-id={
                                "13b75262-43d1-954c-a92f-96a09df98461"
                              }
                              className={"course-three-cards-border-three"}
                            ></div>
                            <div
                              data-motion-id={
                                "13b75262-43d1-954c-a92f-96a09df98462"
                              }
                              className={"course-three-cards-border-four"}
                            ></div>
                            <div
                              data-motion-id={
                                "13b75262-43d1-954c-a92f-96a09df98463"
                              }
                              className={
                                "course-price-wrapper course-three-price"
                              }
                            >
                              <div>{"$49 "}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"w-dyn-list"}>
                    <div role={"list"} className={"w-dyn-items"}>
                      <div role={"listitem"} className={"w-dyn-item"}>
                        <div
                          data-motion-id={
                            "13b75262-43d1-954c-a92f-96a09df9846b"
                          }
                          className={"course-wrap-main"}
                        >
                          <img
                            width={"410"}
                            height={"510"}
                            alt={""}
                            src={
                              "/assets/d5143f07-66fe66cdef763efcc757aefb_Course-Image-2.webp"
                            }
                            loading={"lazy"}
                            sizes={"100vw"}
                            srcSet={
                              "/assets/53bd8237-66fe66cdef763efcc757aefb_Course-Image-2-p-500.webp 500w, /assets/2758fd38-66fe66cdef763efcc757aefb_Course-Image-2-p-800.webp 800w, /assets/d5143f07-66fe66cdef763efcc757aefb_Course-Image-2.webp 820w"
                            }
                            className={"course-three-image"}
                          />
                          <div className={"course-card-three-overlay"}></div>
                          <div className={"course-card-three-content"}>
                            <div
                              className={"small-shot-heading text-light-white"}
                            >
                              {"Design"}
                            </div>
                            <div
                              className={
                                "heading-four text-white course-name-three-gap"
                              }
                            >
                              {"Design systems and pattern libraries"}
                            </div>
                            <div
                              className={"w-layout-hflex course-three-rating"}
                            >
                              <img
                                loading={"lazy"}
                                src={
                                  "/assets/8f74b198-66c6fb8b857efb6c4c737b5d_Rating.svg"
                                }
                                alt={""}
                              />
                              <div
                                className={
                                  "small-shot-heading small-heading-body-color"
                                }
                              >
                                {"5.00 (1.2K)"}
                              </div>
                            </div>
                            <div
                              data-motion-id={
                                "13b75262-43d1-954c-a92f-96a09df98474"
                              }
                              className={"course-three-buttons"}
                            >
                              <div
                                className={
                                  "w-layout-hflex course-three-button-wrap"
                                }
                              >
                                <SiteLink
                                  data-motion-id={
                                    "13b75262-43d1-954c-a92f-96a09df98476"
                                  }
                                  href={
                                    "/design-systems-and-pattern-libraries/course-details"
                                  }
                                  className={
                                    "button button-yellow course-button full-grow w-inline-block"
                                  }
                                >
                                  <div>{"Course details"}</div>
                                </SiteLink>
                                <SiteLink
                                  data-motion-id={
                                    "13b75262-43d1-954c-a92f-96a09df98479"
                                  }
                                  href={
                                    "/product/design-systems-and-pattern-libraries"
                                  }
                                  className={"button buy-button w-inline-block"}
                                >
                                  <div>{"Buy course"}</div>
                                </SiteLink>
                              </div>
                            </div>
                            <div
                              data-motion-id={
                                "13b75262-43d1-954c-a92f-96a09df9847c"
                              }
                              className={"course-three-cards-border-one"}
                            ></div>
                            <div
                              data-motion-id={
                                "13b75262-43d1-954c-a92f-96a09df9847d"
                              }
                              className={"course-three-cards-border-two"}
                            ></div>
                            <div
                              data-motion-id={
                                "13b75262-43d1-954c-a92f-96a09df9847e"
                              }
                              className={"course-three-cards-border-three"}
                            ></div>
                            <div
                              data-motion-id={
                                "13b75262-43d1-954c-a92f-96a09df9847f"
                              }
                              className={"course-three-cards-border-four"}
                            ></div>
                            <div
                              data-motion-id={
                                "13b75262-43d1-954c-a92f-96a09df98480"
                              }
                              className={
                                "course-price-wrapper course-three-price"
                              }
                            >
                              <div>{"$99 "}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"w-dyn-list"}>
                    <div role={"list"} className={"w-dyn-items"}>
                      <div role={"listitem"} className={"w-dyn-item"}>
                        <div
                          data-motion-id={
                            "13b75262-43d1-954c-a92f-96a09df98488"
                          }
                          className={"course-wrap-main"}
                        >
                          <img
                            width={"410"}
                            height={"510"}
                            alt={""}
                            src={
                              "/assets/39588811-66ebac3db9565bc62a90430e_Course-Portrait-Image-5.webp"
                            }
                            loading={"lazy"}
                            sizes={"100vw"}
                            srcSet={
                              "/assets/504db7fc-66ebac3db9565bc62a90430e_Course-Portrait-Image-5-p-500.webp 500w, /assets/c336c179-66ebac3db9565bc62a90430e_Course-Portrait-Image-5-p-800.webp 800w, /assets/39588811-66ebac3db9565bc62a90430e_Course-Portrait-Image-5.webp 820w"
                            }
                            className={"course-three-image"}
                          />
                          <div className={"course-card-three-overlay"}></div>
                          <div className={"course-card-three-content"}>
                            <div
                              className={"small-shot-heading text-light-white"}
                            >
                              {"Development"}
                            </div>
                            <div
                              className={
                                "heading-four text-white course-name-three-gap"
                              }
                            >
                              {"Full-stack development with the MERN stack"}
                            </div>
                            <div
                              className={"w-layout-hflex course-three-rating"}
                            >
                              <img
                                loading={"lazy"}
                                src={
                                  "/assets/8f74b198-66c6fb8b857efb6c4c737b5d_Rating.svg"
                                }
                                alt={""}
                              />
                              <div
                                className={
                                  "small-shot-heading small-heading-body-color"
                                }
                              >
                                {"5.00 (985)"}
                              </div>
                            </div>
                            <div
                              data-motion-id={
                                "13b75262-43d1-954c-a92f-96a09df98491"
                              }
                              className={"course-three-buttons"}
                            >
                              <div
                                className={
                                  "w-layout-hflex course-three-button-wrap"
                                }
                              >
                                <SiteLink
                                  data-motion-id={
                                    "13b75262-43d1-954c-a92f-96a09df98493"
                                  }
                                  href={
                                    "/full-stack-development-with-the-mern-stack/course-details"
                                  }
                                  className={
                                    "button button-yellow course-button full-grow w-inline-block"
                                  }
                                >
                                  <div>{"Course details"}</div>
                                </SiteLink>
                                <SiteLink
                                  data-motion-id={
                                    "13b75262-43d1-954c-a92f-96a09df98496"
                                  }
                                  href={
                                    "/product/full-stack-development-with-the-mern-stack"
                                  }
                                  className={"button buy-button w-inline-block"}
                                >
                                  <div>{"Buy course"}</div>
                                </SiteLink>
                              </div>
                            </div>
                            <div
                              data-motion-id={
                                "13b75262-43d1-954c-a92f-96a09df98499"
                              }
                              className={"course-three-cards-border-one"}
                            ></div>
                            <div
                              data-motion-id={
                                "13b75262-43d1-954c-a92f-96a09df9849a"
                              }
                              className={"course-three-cards-border-two"}
                            ></div>
                            <div
                              data-motion-id={
                                "13b75262-43d1-954c-a92f-96a09df9849b"
                              }
                              className={"course-three-cards-border-three"}
                            ></div>
                            <div
                              data-motion-id={
                                "13b75262-43d1-954c-a92f-96a09df9849c"
                              }
                              className={"course-three-cards-border-four"}
                            ></div>
                            <div
                              data-motion-id={
                                "13b75262-43d1-954c-a92f-96a09df9849d"
                              }
                              className={
                                "course-price-wrapper course-three-price"
                              }
                            >
                              <div>{"$72 "}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"w-dyn-list"}>
                    <div role={"list"} className={"w-dyn-items"}>
                      <div role={"listitem"} className={"w-dyn-item"}>
                        <div
                          data-motion-id={
                            "a3811647-da9b-976e-255f-2e5e0e2a48a5"
                          }
                          className={"course-wrap-main"}
                        >
                          <img
                            width={"410"}
                            height={"510"}
                            alt={""}
                            src={
                              "/assets/19f170e4-66ed1026b284234066a8f423_Course-Portrait-Image-2.webp"
                            }
                            loading={"lazy"}
                            sizes={"100vw"}
                            srcSet={
                              "/assets/4b50a383-66ed1026b284234066a8f423_Course-Portrait-Image-2-p-500.webp 500w, /assets/1e300350-66ed1026b284234066a8f423_Course-Portrait-Image-2-p-800.webp 800w, /assets/19f170e4-66ed1026b284234066a8f423_Course-Portrait-Image-2.webp 820w"
                            }
                            className={"course-three-image"}
                          />
                          <div className={"course-card-three-overlay"}></div>
                          <div className={"course-card-three-content"}>
                            <div
                              className={"small-shot-heading text-light-white"}
                            >
                              {"Management"}
                            </div>
                            <div
                              className={
                                "heading-four text-white course-name-three-gap"
                              }
                            >
                              {"Grow your brand and reach your audience"}
                            </div>
                            <div
                              className={"w-layout-hflex course-three-rating"}
                            >
                              <img
                                loading={"lazy"}
                                src={
                                  "/assets/8f74b198-66c6fb8b857efb6c4c737b5d_Rating.svg"
                                }
                                alt={""}
                              />
                              <div
                                className={
                                  "small-shot-heading small-heading-body-color"
                                }
                              >
                                {"4.88 (210)"}
                              </div>
                            </div>
                            <div
                              data-motion-id={
                                "a3811647-da9b-976e-255f-2e5e0e2a48b1"
                              }
                              className={"course-three-buttons"}
                            >
                              <div
                                className={
                                  "w-layout-hflex course-three-button-wrap"
                                }
                              >
                                <SiteLink
                                  data-motion-id={
                                    "a3811647-da9b-976e-255f-2e5e0e2a48b3"
                                  }
                                  href={
                                    "/grow-your-brand-and-reach-your-audience/course-details"
                                  }
                                  className={
                                    "button button-yellow course-button full-grow w-inline-block"
                                  }
                                >
                                  <div>{"Course details"}</div>
                                </SiteLink>
                                <SiteLink
                                  data-motion-id={
                                    "a3811647-da9b-976e-255f-2e5e0e2a48b6"
                                  }
                                  href={
                                    "/product/grow-your-brand-and-reach-your-audience"
                                  }
                                  className={"button buy-button w-inline-block"}
                                >
                                  <div>{"Buy course"}</div>
                                </SiteLink>
                              </div>
                            </div>
                            <div
                              data-motion-id={
                                "a3811647-da9b-976e-255f-2e5e0e2a48b9"
                              }
                              className={"course-three-cards-border-one"}
                            ></div>
                            <div
                              data-motion-id={
                                "a3811647-da9b-976e-255f-2e5e0e2a48ba"
                              }
                              className={"course-three-cards-border-two"}
                            ></div>
                            <div
                              data-motion-id={
                                "a3811647-da9b-976e-255f-2e5e0e2a48bb"
                              }
                              className={"course-three-cards-border-three"}
                            ></div>
                            <div
                              data-motion-id={
                                "a3811647-da9b-976e-255f-2e5e0e2a48bc"
                              }
                              className={"course-three-cards-border-four"}
                            ></div>
                            <div
                              data-motion-id={
                                "a3811647-da9b-976e-255f-2e5e0e2a48bd"
                              }
                              className={
                                "course-price-wrapper course-three-price"
                              }
                            >
                              <div>{"$49 "}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"w-dyn-list"}>
                    <div role={"list"} className={"w-dyn-items"}>
                      <div role={"listitem"} className={"w-dyn-item"}>
                        <div
                          data-motion-id={
                            "266c0e05-181f-284f-589a-040a12615f69"
                          }
                          className={"course-wrap-main"}
                        >
                          <img
                            width={"410"}
                            height={"510"}
                            alt={""}
                            src={
                              "/assets/e8f4f8a7-66ebab61dd850c0dad26f9a0_Course-Portrait-Image-4.webp"
                            }
                            loading={"lazy"}
                            sizes={"100vw"}
                            srcSet={
                              "/assets/5b9f3a14-66ebab61dd850c0dad26f9a0_Course-Portrait-Image-4-p-500.webp 500w, /assets/9f2cca9b-66ebab61dd850c0dad26f9a0_Course-Portrait-Image-4-p-800.webp 800w, /assets/e8f4f8a7-66ebab61dd850c0dad26f9a0_Course-Portrait-Image-4.webp 820w"
                            }
                            className={"course-three-image"}
                          />
                          <div className={"course-card-three-overlay"}></div>
                          <div className={"course-card-three-content"}>
                            <div
                              className={"small-shot-heading text-light-white"}
                            >
                              {"Design"}
                            </div>
                            <div
                              className={
                                "heading-four text-white course-name-three-gap"
                              }
                            >
                              {
                                "Learn interactive Web Design by building real projects"
                              }
                            </div>
                            <div
                              className={"w-layout-hflex course-three-rating"}
                            >
                              <img
                                loading={"lazy"}
                                src={
                                  "/assets/8f74b198-66c6fb8b857efb6c4c737b5d_Rating.svg"
                                }
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
                              data-motion-id={
                                "266c0e05-181f-284f-589a-040a12615f75"
                              }
                              className={"course-three-buttons"}
                            >
                              <div
                                className={
                                  "w-layout-hflex course-three-button-wrap"
                                }
                              >
                                <SiteLink
                                  data-motion-id={
                                    "266c0e05-181f-284f-589a-040a12615f77"
                                  }
                                  href={
                                    "/learn-interactive-web-design-by-building-real-projects/course-details"
                                  }
                                  className={
                                    "button button-yellow course-button full-grow w-inline-block"
                                  }
                                >
                                  <div>{"Course details"}</div>
                                </SiteLink>
                                <SiteLink
                                  data-motion-id={
                                    "266c0e05-181f-284f-589a-040a12615f7a"
                                  }
                                  href={
                                    "/product/learn-interactive-web-design-by-building-real-projects"
                                  }
                                  className={"button buy-button w-inline-block"}
                                >
                                  <div>{"Buy course"}</div>
                                </SiteLink>
                              </div>
                            </div>
                            <div
                              data-motion-id={
                                "266c0e05-181f-284f-589a-040a12615f7d"
                              }
                              className={"course-three-cards-border-one"}
                            ></div>
                            <div
                              data-motion-id={
                                "266c0e05-181f-284f-589a-040a12615f7e"
                              }
                              className={"course-three-cards-border-two"}
                            ></div>
                            <div
                              data-motion-id={
                                "266c0e05-181f-284f-589a-040a12615f7f"
                              }
                              className={"course-three-cards-border-three"}
                            ></div>
                            <div
                              data-motion-id={
                                "266c0e05-181f-284f-589a-040a12615f80"
                              }
                              className={"course-three-cards-border-four"}
                            ></div>
                            <div
                              data-motion-id={
                                "266c0e05-181f-284f-589a-040a12615f81"
                              }
                              className={
                                "course-price-wrapper course-three-price"
                              }
                            >
                              <div>{"$79 "}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"w-dyn-list"}>
                    <div role={"list"} className={"w-dyn-items"}>
                      <div role={"listitem"} className={"w-dyn-item"}>
                        <div
                          data-motion-id={
                            "0d02fab9-0e55-c89a-8b61-f7a1cc72424e"
                          }
                          className={"course-wrap-main"}
                        >
                          <img
                            width={"410"}
                            height={"510"}
                            alt={""}
                            src={
                              "/assets/4d46d7f8-66ebab87fc8ee47e284af90a_Course-Portrait-Image-3.webp"
                            }
                            loading={"lazy"}
                            sizes={"100vw"}
                            srcSet={
                              "/assets/22a2111a-66ebab87fc8ee47e284af90a_Course-Portrait-Image-3-p-500.webp 500w, /assets/34c4fb6f-66ebab87fc8ee47e284af90a_Course-Portrait-Image-3-p-800.webp 800w, /assets/4d46d7f8-66ebab87fc8ee47e284af90a_Course-Portrait-Image-3.webp 820w"
                            }
                            className={"course-three-image"}
                          />
                          <div className={"course-card-three-overlay"}></div>
                          <div className={"course-card-three-content"}>
                            <div
                              className={"small-shot-heading text-light-white"}
                            >
                              {"Finance"}
                            </div>
                            <div
                              className={
                                "heading-four text-white course-name-three-gap"
                              }
                            >
                              {
                                "The complete guide to personal and business finance"
                              }
                            </div>
                            <div
                              className={"w-layout-hflex course-three-rating"}
                            >
                              <img
                                loading={"lazy"}
                                src={
                                  "/assets/8f74b198-66c6fb8b857efb6c4c737b5d_Rating.svg"
                                }
                                alt={""}
                              />
                              <div
                                className={
                                  "small-shot-heading small-heading-body-color"
                                }
                              >
                                {"4.88 (210)"}
                              </div>
                            </div>
                            <div
                              data-motion-id={
                                "0d02fab9-0e55-c89a-8b61-f7a1cc72425a"
                              }
                              className={"course-three-buttons"}
                            >
                              <div
                                className={
                                  "w-layout-hflex course-three-button-wrap"
                                }
                              >
                                <SiteLink
                                  data-motion-id={
                                    "0d02fab9-0e55-c89a-8b61-f7a1cc72425c"
                                  }
                                  href={
                                    "/the-complete-guide-to-personal-and-business-finance/course-details"
                                  }
                                  className={
                                    "button button-yellow course-button full-grow w-inline-block"
                                  }
                                >
                                  <div>{"Course details"}</div>
                                </SiteLink>
                                <SiteLink
                                  data-motion-id={
                                    "0d02fab9-0e55-c89a-8b61-f7a1cc72425f"
                                  }
                                  href={
                                    "/product/the-complete-guide-to-personal-and-business-finance"
                                  }
                                  className={"button buy-button w-inline-block"}
                                >
                                  <div>{"Buy course"}</div>
                                </SiteLink>
                              </div>
                            </div>
                            <div
                              data-motion-id={
                                "0d02fab9-0e55-c89a-8b61-f7a1cc724262"
                              }
                              className={"course-three-cards-border-one"}
                            ></div>
                            <div
                              data-motion-id={
                                "0d02fab9-0e55-c89a-8b61-f7a1cc724263"
                              }
                              className={"course-three-cards-border-two"}
                            ></div>
                            <div
                              data-motion-id={
                                "0d02fab9-0e55-c89a-8b61-f7a1cc724264"
                              }
                              className={"course-three-cards-border-three"}
                            ></div>
                            <div
                              data-motion-id={
                                "0d02fab9-0e55-c89a-8b61-f7a1cc724265"
                              }
                              className={"course-three-cards-border-four"}
                            ></div>
                            <div
                              data-motion-id={
                                "0d02fab9-0e55-c89a-8b61-f7a1cc724266"
                              }
                              className={
                                "course-price-wrapper course-three-price"
                              }
                            >
                              <div>{"$99 "}</div>
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
              data-motion-id={"67b23140-ee21-39d4-2e93-747766533e41"}
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
