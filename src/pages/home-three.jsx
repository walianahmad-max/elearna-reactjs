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
      <section className={"home-three-hero"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-vflex home-three-hero-main"}>
            <div
              data-motion-id={"ea890cac-9b87-8491-ec0d-e0c458448e15"}
              className={"home-three-big-heading"}
            >
              {"Personal"}
            </div>
            <div
              data-motion-id={"471625bb-cac4-132e-70c9-1b4ec6f66325"}
              className={"home-three-big-heading home-three-big-heading-two"}
            >
              {"Coach"}
            </div>
            <img
              data-motion-id={"95c6b4c4-aefd-356b-779e-58a7f6361481"}
              className={"home-three-hero-image"}
              src={
                "/assets/c7257852-66d6b65afa48c134cb3e9ab1_Home-Three-Hero-Man-Image.webp"
              }
              width={"694"}
              height={"Auto"}
              alt={"Home Three Banner Image"}
              sizes={"(max-width: 767px) 100vw, 694px"}
              loading={"lazy"}
              srcSet={
                "/assets/04e54cbc-66d6b65afa48c134cb3e9ab1_Home-Three-Hero-Man-Image-p-500.webp 500w, /assets/9a2c0919-66d6b65afa48c134cb3e9ab1_Home-Three-Hero-Man-Image-p-800.webp 800w, /assets/05e8a283-66d6b65afa48c134cb3e9ab1_Home-Three-Hero-Man-Image-p-1080.webp 1080w, /assets/c7257852-66d6b65afa48c134cb3e9ab1_Home-Three-Hero-Man-Image.webp 1388w"
              }
            />
            <div className={"w-layout-vflex home-three-hero-text"}>
              <div
                data-motion-id={"96645ce7-a58f-669a-a10d-291fbaae30d0"}
                className={"small-heading"}
              >
                {"Online learning"}
              </div>
              <h1
                data-motion-id={"fa338d5f-1f6d-204c-b335-ff45c74c0bab"}
                className={"heading-one-top-gap text-white"}
              >
                {"Digital "}
                <span className={"text-yellow"}>{"learning"}</span>
                {" empowerment hub"}
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className={"home-three-details"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-hflex home-two-details-main shadow-off"}>
            <div
              data-motion-id={"7f3bada0-d0a3-b68d-5afa-041f82aa6ff6"}
              className={"w-layout-hflex home-two-details-box"}
            >
              <img
                src={
                  "/assets/ee413474-66cff274c1ce9bc0b1d47e11_Circle-Icon-One.svg"
                }
                loading={"lazy"}
                width={"45"}
                height={"45"}
                alt={"Icon"}
                className={"details-icon"}
              />
              <div className={"w-layout-vflex details-text"}>
                <div className={"heading-four"}>{"150+ online courses"}</div>
                <p className={"no-margin-bottom"}>
                  {"Lorem ipsum dolor sit amet"}
                </p>
              </div>
            </div>
            <div
              data-motion-id={"7f3bada0-d0a3-b68d-5afa-041f82aa6ffd"}
              className={"w-layout-hflex home-two-details-box"}
            >
              <img
                src={
                  "/assets/4489ade4-66cff274e1a83a39a2571294_Circle-Icon-Two.svg"
                }
                loading={"lazy"}
                width={"45"}
                height={"45"}
                alt={"Icon"}
                className={"details-icon"}
              />
              <div className={"w-layout-vflex details-text"}>
                <div className={"heading-four"}>{"Personalized learning"}</div>
                <p className={"no-margin-bottom"}>
                  {"Lorem ipsum dolor sit amet"}
                </p>
              </div>
            </div>
            <div
              data-motion-id={"7f3bada0-d0a3-b68d-5afa-041f82aa7004"}
              className={"w-layout-hflex home-two-details-box"}
            >
              <img
                src={
                  "/assets/dd494e51-66cff27596d8f5a818903b2a_Circle-Icon-Three.svg"
                }
                loading={"lazy"}
                width={"45"}
                height={"45"}
                alt={"Icon"}
                className={"details-icon"}
              />
              <div className={"w-layout-vflex details-text"}>
                <div className={"heading-four"}>{"Lifetime update"}</div>
                <p className={"no-margin-bottom"}>
                  {"Lorem ipsum dolor sit amet"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"home-three-category"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-vflex home-three-category-text"}>
            <div
              data-motion-id={"a5ff96f1-0b24-9a8e-5c74-a45508423d0b"}
              className={"small-heading text-dark"}
            >
              {"Top Categories"}
            </div>
            <h2
              data-motion-id={"18afe6ec-a47e-e7af-38b7-115aa5977895"}
              className={"home-three-category-heading"}
            >
              {"Discover leading categories"}
            </h2>
            <p
              data-motion-id={"e083e11a-2127-7389-de68-2c6d6cc28bc8"}
              className={"no-margin-bottom category-description"}
            >
              {
                "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus."
              }
            </p>
          </div>
          <div className={"home-three-categories-wrap"}>
            <div
              data-motion-id={"e1f1c24b-cf4f-d78f-d8bd-6d9480d4e887"}
              className={"category-card-two"}
            >
              <img
                src={
                  "/assets/8d4198f4-66d6ca6d65198d1adcda7a6f_Category-Image.webp"
                }
                loading={"lazy"}
                width={"300"}
                height={"368"}
                alt={""}
                sizes={
                  "(max-width: 479px) 19vw, (max-width: 767px) 21vw, (max-width: 991px) 22vw, (max-width: 1439px) 23vw, 300px"
                }
                srcSet={
                  "/assets/03958260-66d6ca6d65198d1adcda7a6f_Category-Image-p-500.webp 500w, /assets/8d4198f4-66d6ca6d65198d1adcda7a6f_Category-Image.webp 600w"
                }
                className={"tab-image-full-width"}
              />
              <div className={"category-two-cards-content"}>
                <div
                  className={"heading-four text-white category-content-name"}
                >
                  {"Web design and creative"}
                </div>
              </div>
            </div>
            <div
              data-motion-id={"e1f1c24b-cf4f-d78f-d8bd-6d9480d4e887"}
              className={"category-card-two"}
            >
              <img
                src={
                  "/assets/1d24511e-66d6ca6d379847199a9da8c3_Category-Image-2.webp"
                }
                loading={"lazy"}
                width={"300"}
                height={"368"}
                alt={""}
                sizes={"(max-width: 479px) 100vw, 300px"}
                srcSet={
                  "/assets/06dbcce0-66d6ca6d379847199a9da8c3_Category-Image-2-p-500.webp 500w, /assets/1d24511e-66d6ca6d379847199a9da8c3_Category-Image-2.webp 600w"
                }
                className={"tab-image-full-width"}
              />
              <div className={"category-two-cards-content"}>
                <div
                  className={"heading-four text-white category-content-name"}
                >
                  {"Finance and accounting"}
                </div>
              </div>
            </div>
            <div
              data-motion-id={"e1f1c24b-cf4f-d78f-d8bd-6d9480d4e887"}
              className={"category-card-two"}
            >
              <img
                src={
                  "/assets/a2e26e3e-66d6ca6ddec047bd0f259004_Category-Image-3.webp"
                }
                loading={"lazy"}
                width={"300"}
                height={"368"}
                alt={""}
                sizes={"(max-width: 479px) 100vw, 300px"}
                srcSet={
                  "/assets/899f1a5c-66d6ca6ddec047bd0f259004_Category-Image-3-p-500.webp 500w, /assets/a2e26e3e-66d6ca6ddec047bd0f259004_Category-Image-3.webp 600w"
                }
                className={"tab-image-full-width"}
              />
              <div className={"category-two-cards-content"}>
                <div
                  className={"heading-four text-white category-content-name"}
                >
                  {"Technology and software"}
                </div>
              </div>
            </div>
            <div
              data-motion-id={"e1f1c24b-cf4f-d78f-d8bd-6d9480d4e887"}
              className={"category-card-two"}
            >
              <img
                src={
                  "/assets/0cf4358a-66fe6841120ac0d82bf8c08a_Digital-Marketing.webp"
                }
                loading={"lazy"}
                width={"300"}
                height={"368"}
                alt={"Digital Marketing"}
                sizes={"(max-width: 479px) 100vw, 300px"}
                srcSet={
                  "/assets/69963ffb-66fe6841120ac0d82bf8c08a_Digital-Marketing-p-500.webp 500w, /assets/0cf4358a-66fe6841120ac0d82bf8c08a_Digital-Marketing.webp 600w"
                }
                className={"tab-image-full-width"}
              />
              <div className={"category-two-cards-content"}>
                <div
                  className={"heading-four text-white category-content-name"}
                >
                  {"Digital marketing"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"home-three-potential"}>
        <div className={"w-layout-blockcontainer w-container"}>
          <div className={"w-layout-vflex home-three-potential-text"}>
            <div
              data-motion-id={"a5ff96f1-0b24-9a8e-5c74-a45508423d0b"}
              className={"small-heading text-dark"}
            >
              {"Unlocking Potential"}
            </div>
            <div
              data-motion-id={"0449e69f-3f26-fe49-ea69-7fe23d311acd"}
              className={"heading-three margin-top-fifteen"}
            >
              {
                "Discover the boundless advantages and transformative power of eLearning for personal and professional growth in the digital age"
              }
            </div>
          </div>
        </div>
        <div
          data-motion-id={"f7a9fcd0-fc01-4f82-d63c-dd933f06a45f"}
          className={"home-three-potential-cards-wrap"}
        >
          <div
            data-motion-id={"82dd583d-c0fb-3601-998a-0e4c9ed892b4"}
            className={"potential-cards"}
          >
            <div className={"heading-three text-blue margin-bottom-ten"}>
              {"01"}
            </div>
            <div className={"heading-four margin-bottom-ten"}>
              {"Flexibility and convenience"}
            </div>
            <p className={"no-margin-bottom"}>
              {
                "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus."
              }
            </p>
            <div
              data-motion-id={"b1286f16-ec89-a66b-94bf-556fc3d6134f"}
              className={"potential-cards-button-wrap button-wrap-one"}
            >
              <div className={"potential-button"}>
                <SiteLink
                  data-motion-id={"554bdb09-166f-7496-ccbc-6402fc45feda"}
                  href={"/contact-one"}
                  className={"button button-border-off w-inline-block"}
                >
                  <div>{"Get Started "}</div>
                </SiteLink>
              </div>
            </div>
          </div>
          <div
            data-motion-id={"efedf68c-9362-059a-59d0-f2c2d296b758"}
            className={"potential-cards"}
          >
            <div className={"heading-three text-blue margin-bottom-ten"}>
              {"02"}
            </div>
            <div className={"heading-four margin-bottom-ten"}>
              {"Course accessibility"}
            </div>
            <p className={"no-margin-bottom"}>
              {
                "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus."
              }
            </p>
            <div className={"potential-cards-button-wrap button-wrap-two"}>
              <div className={"potential-button"}>
                <SiteLink
                  data-motion-id={"554bdb09-166f-7496-ccbc-6402fc45feda"}
                  href={"/contact-two"}
                  className={"button button-border-off w-inline-block"}
                >
                  <div>{"Get Started "}</div>
                </SiteLink>
              </div>
            </div>
          </div>
          <div
            data-motion-id={"ee71139a-b7f5-4e0b-229e-55765b43bf5e"}
            className={"potential-cards"}
          >
            <div className={"heading-three text-blue margin-bottom-ten"}>
              {"03"}
            </div>
            <div className={"heading-four margin-bottom-ten"}>
              {"Cost-effectiveness"}
            </div>
            <p className={"no-margin-bottom"}>
              {
                "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus."
              }
            </p>
            <div
              data-motion-id={"ee71139a-b7f5-4e0b-229e-55765b43bf65"}
              className={"potential-cards-button-wrap button-wrap-three"}
            >
              <div className={"potential-button"}>
                <SiteLink
                  data-motion-id={"554bdb09-166f-7496-ccbc-6402fc45feda"}
                  href={"/contact-three"}
                  className={"button button-border-off w-inline-block"}
                >
                  <div>{"Get Started "}</div>
                </SiteLink>
              </div>
            </div>
          </div>
          <div
            data-motion-id={"448b01dc-c9de-b702-5ee9-5a9e21e806e2"}
            className={"potential-cards"}
          >
            <div className={"heading-three text-blue margin-bottom-ten"}>
              {"04"}
            </div>
            <div className={"heading-four margin-bottom-ten"}>
              {"Personalized learning"}
            </div>
            <p className={"no-margin-bottom"}>
              {
                "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus."
              }
            </p>
            <div
              data-motion-id={"448b01dc-c9de-b702-5ee9-5a9e21e806e9"}
              className={"potential-cards-button-wrap button-wrap-four"}
            >
              <div className={"potential-button"}>
                <SiteLink
                  data-motion-id={"554bdb09-166f-7496-ccbc-6402fc45feda"}
                  href={"/contact-one"}
                  className={"button button-border-off w-inline-block"}
                >
                  <div>{"Get Started "}</div>
                </SiteLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        data-motion-id={"d6b8d61d-2b8b-7d4a-21d4-ab0ce1d441a8"}
        className={"home-three-courses-full"}
      >
        <div className={"home-three-courses-images-wrapper"}>
          <img
            data-motion-id={"147ad1cf-78da-b1fe-1024-f28ae55daa7b"}
            className={"course-four-background backgorund-one"}
            src={
              "/assets/dabcf7f9-66d831a6a196c626a4646563_Course-Background.webp"
            }
            width={"1920"}
            height={"650"}
            alt={"Course Background"}
            sizes={"(max-width: 1919px) 100vw, 1920px"}
            loading={"lazy"}
            srcSet={
              "/assets/4c09975f-66d831a6a196c626a4646563_Course-Background-p-500.webp 500w, /assets/c8f25701-66d831a6a196c626a4646563_Course-Background-p-800.webp 800w, /assets/6cf827b1-66d831a6a196c626a4646563_Course-Background-p-1080.webp 1080w, /assets/26e87007-66d831a6a196c626a4646563_Course-Background-p-1600.webp 1600w, /assets/f6dbdabd-66d831a6a196c626a4646563_Course-Background-p-2000.webp 2000w, /assets/3138997b-66d831a6a196c626a4646563_Course-Background-p-2600.webp 2600w, /assets/62c6f633-66d831a6a196c626a4646563_Course-Background-p-3200.webp 3200w, /assets/dabcf7f9-66d831a6a196c626a4646563_Course-Background.webp 3840w"
            }
          />
          <img
            data-motion-id={"eff37c03-9565-f7ad-a36e-0c7e692db361"}
            className={"course-four-background backgorund-two"}
            src={
              "/assets/30d00aed-66d831a6884e433507631ecb_Course-Background-3.webp"
            }
            width={"1920"}
            height={"650"}
            alt={"Course Background"}
            sizes={"(max-width: 1919px) 100vw, 1920px"}
            loading={"lazy"}
            srcSet={
              "/assets/88903350-66d831a6884e433507631ecb_Course-Background-3-p-500.webp 500w, /assets/ff5417b1-66d831a6884e433507631ecb_Course-Background-3-p-800.webp 800w, /assets/8893d8c4-66d831a6884e433507631ecb_Course-Background-3-p-1080.webp 1080w, /assets/56e2b87f-66d831a6884e433507631ecb_Course-Background-3-p-1600.webp 1600w, /assets/ed51f8fb-66d831a6884e433507631ecb_Course-Background-3-p-2000.webp 2000w, /assets/1697f416-66d831a6884e433507631ecb_Course-Background-3-p-2600.webp 2600w, /assets/9c4b6332-66d831a6884e433507631ecb_Course-Background-3-p-3200.webp 3200w, /assets/30d00aed-66d831a6884e433507631ecb_Course-Background-3.webp 3840w"
            }
          />
          <img
            data-motion-id={"bfaff8b0-48ad-09ae-6b92-3872b86aae07"}
            className={"course-four-background backgorund-three"}
            src={
              "/assets/af985344-66d831a6fface746de9764a6_Course-Background-4.webp"
            }
            width={"1920"}
            height={"650"}
            alt={"Course Background"}
            sizes={"(max-width: 1919px) 100vw, 1920px"}
            loading={"lazy"}
            srcSet={
              "/assets/bf8ed866-66d831a6fface746de9764a6_Course-Background-4-p-500.webp 500w, /assets/e64450be-66d831a6fface746de9764a6_Course-Background-4-p-800.webp 800w, /assets/449ae1a2-66d831a6fface746de9764a6_Course-Background-4-p-1080.webp 1080w, /assets/74d589ee-66d831a6fface746de9764a6_Course-Background-4-p-1600.webp 1600w, /assets/92f6d1e1-66d831a6fface746de9764a6_Course-Background-4-p-2000.webp 2000w, /assets/e43606b9-66d831a6fface746de9764a6_Course-Background-4-p-2600.webp 2600w, /assets/b6b1af00-66d831a6fface746de9764a6_Course-Background-4-p-3200.webp 3200w, /assets/af985344-66d831a6fface746de9764a6_Course-Background-4.webp 3840w"
            }
          />
          <img
            data-motion-id={"be686b50-12cb-7fe1-f159-4437838b4bc7"}
            className={"course-four-background backgorund-four"}
            src={
              "/assets/b206559c-66d831a65d24001133ce1b9f_Course-Background-5.webp"
            }
            width={"1920"}
            height={"650"}
            alt={"Course Background"}
            sizes={"(max-width: 1919px) 100vw, 1920px"}
            loading={"lazy"}
            srcSet={
              "/assets/44cada1d-66d831a65d24001133ce1b9f_Course-Background-5-p-500.webp 500w, /assets/14b7e59a-66d831a65d24001133ce1b9f_Course-Background-5-p-800.webp 800w, /assets/6bd69136-66d831a65d24001133ce1b9f_Course-Background-5-p-1080.webp 1080w, /assets/e46a7ccb-66d831a65d24001133ce1b9f_Course-Background-5-p-1600.webp 1600w, /assets/96e67d50-66d831a65d24001133ce1b9f_Course-Background-5-p-2000.webp 2000w, /assets/36d21a3f-66d831a65d24001133ce1b9f_Course-Background-5-p-2600.webp 2600w, /assets/7d69c3c0-66d831a65d24001133ce1b9f_Course-Background-5-p-3200.webp 3200w, /assets/b206559c-66d831a65d24001133ce1b9f_Course-Background-5.webp 3840w"
            }
          />
          <img
            data-motion-id={"4bf0282a-ca9e-10e7-8acc-97b1b27a9640"}
            className={"course-four-background backgorund-five"}
            src={
              "/assets/64c7d24d-66d831a6c4e5401855628a37_Course-Background-6.webp"
            }
            width={"1920"}
            height={"650"}
            alt={"Course Background"}
            sizes={"(max-width: 1919px) 100vw, 1920px"}
            loading={"lazy"}
            srcSet={
              "/assets/dbc86c73-66d831a6c4e5401855628a37_Course-Background-6-p-500.webp 500w, /assets/bc9ce7d3-66d831a6c4e5401855628a37_Course-Background-6-p-800.webp 800w, /assets/367a5433-66d831a6c4e5401855628a37_Course-Background-6-p-1080.webp 1080w, /assets/6fc2b7e0-66d831a6c4e5401855628a37_Course-Background-6-p-1600.webp 1600w, /assets/6b658cdc-66d831a6c4e5401855628a37_Course-Background-6-p-2000.webp 2000w, /assets/d2dd183b-66d831a6c4e5401855628a37_Course-Background-6-p-2600.webp 2600w, /assets/e5ac7a53-66d831a6c4e5401855628a37_Course-Background-6-p-3200.webp 3200w, /assets/64c7d24d-66d831a6c4e5401855628a37_Course-Background-6.webp 3840w"
            }
          />
          <img
            data-motion-id={"23282981-beab-bb24-fb6f-23b2203444a3"}
            className={"course-four-background backgorund-six"}
            src={
              "/assets/41a807ef-66d831a6dae65024b112fdba_Course-Background-2.webp"
            }
            width={"1920"}
            height={"650"}
            alt={"Course Background"}
            sizes={"(max-width: 1919px) 100vw, 1920px"}
            loading={"lazy"}
            srcSet={
              "/assets/e4c87f5e-66d831a6dae65024b112fdba_Course-Background-2-p-500.webp 500w, /assets/ade4fc8d-66d831a6dae65024b112fdba_Course-Background-2-p-800.webp 800w, /assets/4aa686af-66d831a6dae65024b112fdba_Course-Background-2-p-1080.webp 1080w, /assets/cebc4eb8-66d831a6dae65024b112fdba_Course-Background-2-p-1600.webp 1600w, /assets/5dee9ee6-66d831a6dae65024b112fdba_Course-Background-2-p-2000.webp 2000w, /assets/2de9128e-66d831a6dae65024b112fdba_Course-Background-2-p-2600.webp 2600w, /assets/6e1ad8df-66d831a6dae65024b112fdba_Course-Background-2-p-3200.webp 3200w, /assets/41a807ef-66d831a6dae65024b112fdba_Course-Background-2.webp 3840w"
            }
          />
          <div className={"course-four-background-overlay"}></div>
        </div>
        <div className={"home-three-course-content"}>
          <div className={"w-layout-blockcontainer container w-container"}>
            <div className={"w-layout-hflex home-three-course-main"}>
              <div className={"w-layout-vflex home-three-course-text"}>
                <div
                  data-motion-id={"96645ce7-a58f-669a-a10d-291fbaae30d0"}
                  className={"small-heading"}
                >
                  {"Trending courses"}
                </div>
                <h2
                  className={"no-margin-bottom text-white course-four-heading"}
                >
                  {"Explore our top programs"}
                </h2>
              </div>
              <div className={"course-list-box"}>
                <div
                  data-motion-id={"80a121dd-7278-1d67-8d31-5b1266e868ef"}
                  className={"course-four-card w-dyn-list"}
                >
                  <div role={"list"} className={"w-dyn-items"}>
                    <div role={"listitem"} className={"w-dyn-item"}>
                      <SiteLink
                        href={
                          "/product/building-single-page-applications-with-angular"
                        }
                        className={"w-inline-block"}
                      >
                        <div
                          className={
                            "heading-four text-white margin-bottom-ten"
                          }
                        >
                          {"Building single page applications with angular"}
                        </div>
                        <div
                          className={"w-layout-hflex course-details-options"}
                        >
                          <div className={"w-layout-hflex course-four-ratings"}>
                            <img
                              src={
                                "/assets/8f74b198-66c6fb8b857efb6c4c737b5d_Rating.svg"
                              }
                              loading={"lazy"}
                              alt={""}
                            />
                            <div
                              className={"small-shot-heading text-light-white"}
                            >
                              {"5.00 (328)"}
                            </div>
                          </div>
                          <div className={"w-layout-hflex course-four-about"}>
                            <img
                              src={
                                "/assets/960ffd93-66d81aceab3f72d1961e6b7c_Books-Small-Icons.svg"
                              }
                              loading={"lazy"}
                              width={"16"}
                              height={"16"}
                              alt={"Icon"}
                            />
                            <div className={"text-white"}>{"6 Lessons"}</div>
                          </div>
                          <div className={"w-layout-hflex course-four-about"}>
                            <img
                              src={
                                "/assets/0b5d5c64-66d81acea3854f6c5831b5c5_Person-Icons-White.svg"
                              }
                              loading={"lazy"}
                              width={"13"}
                              height={"14"}
                              alt={"Icon"}
                            />
                            <div className={"text-white"}>{"12k Enrolled"}</div>
                          </div>
                        </div>
                      </SiteLink>
                    </div>
                  </div>
                </div>
                <div
                  data-motion-id={"dd2403df-fa48-5771-1f0e-29504dba719d"}
                  className={"course-four-card w-dyn-list"}
                >
                  <div role={"list"} className={"w-dyn-items"}>
                    <div role={"listitem"} className={"w-dyn-item"}>
                      <SiteLink
                        href={"/product/database-integration-with-mongodb"}
                        className={"w-inline-block"}
                      >
                        <div
                          className={
                            "heading-four text-white margin-bottom-ten"
                          }
                        >
                          {"Database integration with MongoDB"}
                        </div>
                        <div
                          className={"w-layout-hflex course-details-options"}
                        >
                          <div className={"w-layout-hflex course-four-ratings"}>
                            <img
                              src={
                                "/assets/8f74b198-66c6fb8b857efb6c4c737b5d_Rating.svg"
                              }
                              loading={"lazy"}
                              alt={""}
                            />
                            <div
                              className={"small-shot-heading text-light-white"}
                            >
                              {"4.49 (756)"}
                            </div>
                          </div>
                          <div className={"w-layout-hflex course-four-about"}>
                            <img
                              src={
                                "/assets/960ffd93-66d81aceab3f72d1961e6b7c_Books-Small-Icons.svg"
                              }
                              loading={"lazy"}
                              width={"16"}
                              height={"16"}
                              alt={"Icon"}
                            />
                            <div className={"text-white"}>{"10 Lessons"}</div>
                          </div>
                          <div className={"w-layout-hflex course-four-about"}>
                            <img
                              src={
                                "/assets/0b5d5c64-66d81acea3854f6c5831b5c5_Person-Icons-White.svg"
                              }
                              loading={"lazy"}
                              width={"13"}
                              height={"14"}
                              alt={"Icon"}
                            />
                            <div className={"text-white"}>{"7k Enrolled"}</div>
                          </div>
                        </div>
                      </SiteLink>
                    </div>
                  </div>
                </div>
                <div
                  data-motion-id={"1a1a5840-1bbf-9178-d97f-fc933c3f4182"}
                  className={"course-four-card w-dyn-list"}
                >
                  <div role={"list"} className={"w-dyn-items"}>
                    <div role={"listitem"} className={"w-dyn-item"}>
                      <SiteLink
                        href={
                          "/product/operations-management-and-process-improvement"
                        }
                        className={"w-inline-block"}
                      >
                        <div
                          className={
                            "heading-four text-white margin-bottom-ten"
                          }
                        >
                          {"Operations management and process improvement"}
                        </div>
                        <div
                          className={"w-layout-hflex course-details-options"}
                        >
                          <div className={"w-layout-hflex course-four-ratings"}>
                            <img
                              src={
                                "/assets/8f74b198-66c6fb8b857efb6c4c737b5d_Rating.svg"
                              }
                              loading={"lazy"}
                              alt={""}
                            />
                            <div
                              className={"small-shot-heading text-light-white"}
                            >
                              {"5.00 (812)"}
                            </div>
                          </div>
                          <div className={"w-layout-hflex course-four-about"}>
                            <img
                              src={
                                "/assets/960ffd93-66d81aceab3f72d1961e6b7c_Books-Small-Icons.svg"
                              }
                              loading={"lazy"}
                              width={"16"}
                              height={"16"}
                              alt={"Icon"}
                            />
                            <div className={"text-white"}>{"12 Lessons"}</div>
                          </div>
                          <div className={"w-layout-hflex course-four-about"}>
                            <img
                              src={
                                "/assets/0b5d5c64-66d81acea3854f6c5831b5c5_Person-Icons-White.svg"
                              }
                              loading={"lazy"}
                              width={"13"}
                              height={"14"}
                              alt={"Icon"}
                            />
                            <div className={"text-white"}>{"23k Enrolled"}</div>
                          </div>
                        </div>
                      </SiteLink>
                    </div>
                  </div>
                </div>
                <div
                  data-motion-id={"6427e33c-b5f4-2164-f3fc-c2364ba457e2"}
                  className={"course-four-card w-dyn-list"}
                >
                  <div role={"list"} className={"w-dyn-items"}>
                    <div role={"listitem"} className={"w-dyn-item"}>
                      <SiteLink
                        href={
                          "/product/risk-management-and-business-continuity"
                        }
                        className={"w-inline-block"}
                      >
                        <div
                          className={
                            "heading-four text-white margin-bottom-ten"
                          }
                        >
                          {"Risk management and business continuity"}
                        </div>
                        <div
                          className={"w-layout-hflex course-details-options"}
                        >
                          <div className={"w-layout-hflex course-four-ratings"}>
                            <img
                              src={
                                "/assets/8f74b198-66c6fb8b857efb6c4c737b5d_Rating.svg"
                              }
                              loading={"lazy"}
                              alt={""}
                            />
                            <div
                              className={"small-shot-heading text-light-white"}
                            >
                              {"4.88 (210)"}
                            </div>
                          </div>
                          <div className={"w-layout-hflex course-four-about"}>
                            <img
                              src={
                                "/assets/960ffd93-66d81aceab3f72d1961e6b7c_Books-Small-Icons.svg"
                              }
                              loading={"lazy"}
                              width={"16"}
                              height={"16"}
                              alt={"Icon"}
                            />
                            <div className={"text-white"}>{"3 Lessons"}</div>
                          </div>
                          <div className={"w-layout-hflex course-four-about"}>
                            <img
                              src={
                                "/assets/0b5d5c64-66d81acea3854f6c5831b5c5_Person-Icons-White.svg"
                              }
                              loading={"lazy"}
                              width={"13"}
                              height={"14"}
                              alt={"Icon"}
                            />
                            <div className={"text-white"}>{"8k Enrolled"}</div>
                          </div>
                        </div>
                      </SiteLink>
                    </div>
                  </div>
                </div>
                <div
                  data-motion-id={"47c29c67-94a3-aa3f-b38b-203b72e0f5e2"}
                  className={"course-four-card w-dyn-list"}
                >
                  <div role={"list"} className={"w-dyn-items"}>
                    <div role={"listitem"} className={"w-dyn-item"}>
                      <SiteLink
                        href={"/product/design-systems-and-pattern-libraries"}
                        className={"w-inline-block"}
                      >
                        <div
                          className={
                            "heading-four text-white margin-bottom-ten"
                          }
                        >
                          {"Design systems and pattern libraries"}
                        </div>
                        <div
                          className={"w-layout-hflex course-details-options"}
                        >
                          <div className={"w-layout-hflex course-four-ratings"}>
                            <img
                              src={
                                "/assets/8f74b198-66c6fb8b857efb6c4c737b5d_Rating.svg"
                              }
                              loading={"lazy"}
                              alt={""}
                            />
                            <div
                              className={"small-shot-heading text-light-white"}
                            >
                              {"5.00 (1.2K)"}
                            </div>
                          </div>
                          <div className={"w-layout-hflex course-four-about"}>
                            <img
                              src={
                                "/assets/960ffd93-66d81aceab3f72d1961e6b7c_Books-Small-Icons.svg"
                              }
                              loading={"lazy"}
                              width={"16"}
                              height={"16"}
                              alt={"Icon"}
                            />
                            <div className={"text-white"}>{"8 Lessons"}</div>
                          </div>
                          <div className={"w-layout-hflex course-four-about"}>
                            <img
                              src={
                                "/assets/0b5d5c64-66d81acea3854f6c5831b5c5_Person-Icons-White.svg"
                              }
                              loading={"lazy"}
                              width={"13"}
                              height={"14"}
                              alt={"Icon"}
                            />
                            <div className={"text-white"}>{"25k Enrolled"}</div>
                          </div>
                        </div>
                      </SiteLink>
                    </div>
                  </div>
                </div>
                <div
                  data-motion-id={"cb415f60-b35b-bf79-d5da-99ac027ba592"}
                  className={"course-four-card w-dyn-list"}
                >
                  <div role={"list"} className={"w-dyn-items"}>
                    <div role={"listitem"} className={"w-dyn-item"}>
                      <SiteLink
                        href={
                          "/product/full-stack-development-with-the-mern-stack"
                        }
                        className={"w-inline-block"}
                      >
                        <div
                          className={
                            "heading-four text-white margin-bottom-ten"
                          }
                        >
                          {"Full-stack development with the MERN stack"}
                        </div>
                        <div
                          className={"w-layout-hflex course-details-options"}
                        >
                          <div className={"w-layout-hflex course-four-ratings"}>
                            <img
                              src={
                                "/assets/8f74b198-66c6fb8b857efb6c4c737b5d_Rating.svg"
                              }
                              loading={"lazy"}
                              alt={""}
                            />
                            <div
                              className={"small-shot-heading text-light-white"}
                            >
                              {"5.00 (985)"}
                            </div>
                          </div>
                          <div className={"w-layout-hflex course-four-about"}>
                            <img
                              src={
                                "/assets/960ffd93-66d81aceab3f72d1961e6b7c_Books-Small-Icons.svg"
                              }
                              loading={"lazy"}
                              width={"16"}
                              height={"16"}
                              alt={"Icon"}
                            />
                            <div className={"text-white"}>{"12 Lessons"}</div>
                          </div>
                          <div className={"w-layout-hflex course-four-about"}>
                            <img
                              src={
                                "/assets/0b5d5c64-66d81acea3854f6c5831b5c5_Person-Icons-White.svg"
                              }
                              loading={"lazy"}
                              width={"13"}
                              height={"14"}
                              alt={"Icon"}
                            />
                            <div className={"text-white"}>{"22k Enrolled"}</div>
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
      <section className={"home-three-courses"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div
            data-motion-id={"a5ff96f1-0b24-9a8e-5c74-a45508423d0b"}
            className={"small-heading text-dark"}
          >
            {"Online learning"}
          </div>
          <div
            data-motion-id={"453c1bd1-01e5-ee13-72a0-6f79360c575f"}
            className={"heading-three heading-three-gap margin-bottom-thirty"}
          >
            {"Popular courses"}
          </div>
          <div className={"tranding-courses-cards tranding-course-bottom-gap"}>
            <div className={"w-dyn-list"}>
              <div role={"list"} className={"card-height-full w-dyn-items"}>
                <div
                  role={"listitem"}
                  className={"card-height-full w-dyn-item"}
                >
                  <div
                    data-motion-id={"065082bd-2bae-8443-12ff-a8121f456312"}
                    className={"course-cards-two"}
                  >
                    <div
                      data-motion-id={"065082bd-2bae-8443-12ff-a8121f456313"}
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
                        alt={"Building single page applications with angular"}
                        style={{ width: "100%" }}
                        sizes={"(max-width: 767px) 100vw, 519.5px"}
                        loading={"lazy"}
                        srcSet={
                          "/assets/fa45b4a2-66eb9dfb3e87f8984b5a15b6_Course-Small-Image-p-500.webp 500w, /assets/264f8a55-66eb9dfb3e87f8984b5a15b6_Course-Small-Image-p-800.webp 800w, /assets/2a0fe063-66eb9dfb3e87f8984b5a15b6_Course-Small-Image.webp 820w"
                        }
                      />
                      <div className={"course-image-wrap"}></div>
                      <div
                        className={"w-layout-vflex course-card-top-description"}
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
                          className={"heading-five margin-bottom-twenty"}
                        >
                          {"Building single page applications with angular"}
                        </div>
                        <div
                          className={"w-layout-hflex course-two-card-rating"}
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
                      <div className={"course-price-wrapper course-two-price"}>
                        <div>{"Free"}</div>
                      </div>
                    </div>
                    <div
                      style={{ display: "none" }}
                      className={"course-card-pop-up"}
                    >
                      <div className={"heading-five course-name"}>
                        {"Building single page applications with angular"}
                      </div>
                      <div className={"w-layout-hflex course-card-popup-tags"}>
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
                        <div className={"w-layout-hflex course-card-checklist"}>
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
                          <div className={"course-card-two-description"}>
                            {"Lorem ipsum dolor sit amet consectetur"}
                          </div>
                        </div>
                        <div className={"w-layout-hflex course-card-checklist"}>
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
                          <div className={"course-card-two-description"}>
                            {"Lorem ipsum dolor"}
                          </div>
                        </div>
                        <div className={"w-layout-hflex course-card-checklist"}>
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
                          <div className={"course-card-two-description"}>
                            {"Lorem ipsum dolor sit"}
                          </div>
                        </div>
                      </div>
                      <div className={"w-layout-hflex course-cards-two-button"}>
                        <SiteLink
                          data-motion-id={
                            "065082bd-2bae-8443-12ff-a8121f456332"
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
              <div role={"list"} className={"card-height-full w-dyn-items"}>
                <div
                  role={"listitem"}
                  className={"card-height-full w-dyn-item"}
                >
                  <div
                    data-motion-id={"065082bd-2bae-8443-12ff-a8121f45633e"}
                    className={"course-cards-two"}
                  >
                    <div
                      data-motion-id={"065082bd-2bae-8443-12ff-a8121f45633f"}
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
                        className={"w-layout-vflex course-card-top-description"}
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
                          className={"heading-five margin-bottom-twenty"}
                        >
                          {"Database integration with MongoDB"}
                        </div>
                        <div
                          className={"w-layout-hflex course-two-card-rating"}
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
                      <div className={"course-price-wrapper course-two-price"}>
                        <div>{"$59 "}</div>
                      </div>
                    </div>
                    <div
                      className={"course-card-pop-up course-card-pop-up-two"}
                    >
                      <div className={"heading-five course-name"}>
                        {"Database integration with MongoDB"}
                      </div>
                      <div className={"w-layout-hflex course-card-popup-tags"}>
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
                        <div className={"w-layout-hflex course-card-checklist"}>
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
                          <div className={"course-card-two-description"}>
                            {"Lorem ipsum dolor sit amet consectetur"}
                          </div>
                        </div>
                        <div className={"w-layout-hflex course-card-checklist"}>
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
                          <div className={"course-card-two-description"}>
                            {"Lorem ipsum dolor"}
                          </div>
                        </div>
                        <div className={"w-layout-hflex course-card-checklist"}>
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
                          <div className={"course-card-two-description"}>
                            {"Lorem ipsum dolor sit"}
                          </div>
                        </div>
                      </div>
                      <div className={"w-layout-hflex course-cards-two-button"}>
                        <SiteLink
                          data-motion-id={
                            "065082bd-2bae-8443-12ff-a8121f45635e"
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
                            "065082bd-2bae-8443-12ff-a8121f456361"
                          }
                          href={"/product/database-integration-with-mongodb"}
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
              <div role={"list"} className={"card-height-full w-dyn-items"}>
                <div
                  role={"listitem"}
                  className={"card-height-full w-dyn-item"}
                >
                  <div
                    data-motion-id={"065082bd-2bae-8443-12ff-a8121f45636a"}
                    className={"course-cards-two"}
                  >
                    <div
                      data-motion-id={"065082bd-2bae-8443-12ff-a8121f45636b"}
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
                        className={"w-layout-vflex course-card-top-description"}
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
                          className={"heading-five margin-bottom-twenty"}
                        >
                          {"Risk management and business continuity"}
                        </div>
                        <div
                          className={"w-layout-hflex course-two-card-rating"}
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
                      <div className={"course-price-wrapper course-two-price"}>
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
                      <div className={"w-layout-hflex course-card-popup-tags"}>
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
                        <div className={"w-layout-hflex course-card-checklist"}>
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
                          <div className={"course-card-two-description"}>
                            {"Lorem ipsum dolor sit amet consectetur"}
                          </div>
                        </div>
                        <div className={"w-layout-hflex course-card-checklist"}>
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
                          <div className={"course-card-two-description"}>
                            {"Lorem ipsum dolor"}
                          </div>
                        </div>
                        <div className={"w-layout-hflex course-card-checklist"}>
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
                          <div className={"course-card-two-description"}>
                            {"Lorem ipsum dolor sit"}
                          </div>
                        </div>
                      </div>
                      <div className={"w-layout-hflex course-cards-two-button"}>
                        <SiteLink
                          data-motion-id={
                            "065082bd-2bae-8443-12ff-a8121f45638a"
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
                            "065082bd-2bae-8443-12ff-a8121f45638d"
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
              <div role={"list"} className={"card-height-full w-dyn-items"}>
                <div
                  role={"listitem"}
                  className={"card-height-full w-dyn-item"}
                >
                  <div
                    data-motion-id={"065082bd-2bae-8443-12ff-a8121f456396"}
                    className={"course-cards-two"}
                  >
                    <div
                      data-motion-id={"065082bd-2bae-8443-12ff-a8121f456397"}
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
                        alt={"Full-stack development with the MERN stack"}
                        style={{ width: "100%" }}
                        sizes={"(max-width: 767px) 100vw, 519.5px"}
                        loading={"lazy"}
                        srcSet={
                          "/assets/574cdbfc-66eb9e61096e930736b651e4_Course-Small-Image-5-p-500.webp 500w, /assets/ece034eb-66eb9e61096e930736b651e4_Course-Small-Image-5-p-800.webp 800w, /assets/b792cfd1-66eb9e61096e930736b651e4_Course-Small-Image-5.webp 820w"
                        }
                      />
                      <div className={"course-image-wrap"}></div>
                      <div
                        className={"w-layout-vflex course-card-top-description"}
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
                          className={"heading-five margin-bottom-twenty"}
                        >
                          {"Full-stack development with the MERN stack"}
                        </div>
                        <div
                          className={"w-layout-hflex course-two-card-rating"}
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
                      <div className={"course-price-wrapper course-two-price"}>
                        <div>{"$72 "}</div>
                      </div>
                    </div>
                    <div className={"course-card-pop-up course-popup-last"}>
                      <div className={"heading-five course-name"}>
                        {"Full-stack development with the MERN stack"}
                      </div>
                      <div className={"w-layout-hflex course-card-popup-tags"}>
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
                        <div className={"w-layout-hflex course-card-checklist"}>
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
                          <div className={"course-card-two-description"}>
                            {"Lorem ipsum dolor sit amet consectetur"}
                          </div>
                        </div>
                        <div className={"w-layout-hflex course-card-checklist"}>
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
                          <div className={"course-card-two-description"}>
                            {"Lorem ipsum dolor"}
                          </div>
                        </div>
                        <div className={"w-layout-hflex course-card-checklist"}>
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
                          <div className={"course-card-two-description"}>
                            {"Lorem ipsum dolor sit"}
                          </div>
                        </div>
                      </div>
                      <div className={"w-layout-hflex course-cards-two-button"}>
                        <SiteLink
                          data-motion-id={
                            "065082bd-2bae-8443-12ff-a8121f4563b6"
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
                            "065082bd-2bae-8443-12ff-a8121f4563b9"
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
              <div role={"list"} className={"card-height-full w-dyn-items"}>
                <div
                  role={"listitem"}
                  className={"card-height-full w-dyn-item"}
                >
                  <div
                    data-motion-id={"065082bd-2bae-8443-12ff-a8121f4563c2"}
                    className={"course-cards-two"}
                  >
                    <div
                      data-motion-id={"065082bd-2bae-8443-12ff-a8121f4563c3"}
                      className={"course-card-top"}
                    >
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
                        alt={"Operations management and process improvement"}
                        style={{ width: "100%" }}
                        sizes={"(max-width: 767px) 100vw, 519.5px"}
                        loading={"lazy"}
                        srcSet={
                          "/assets/65d48e96-66eb9e25c4d132b7abc4dcb2_Course-Small-Image-8-p-500.webp 500w, /assets/174ed563-66eb9e25c4d132b7abc4dcb2_Course-Small-Image-8-p-800.webp 800w, /assets/d460afa5-66eb9e25c4d132b7abc4dcb2_Course-Small-Image-8.webp 820w"
                        }
                      />
                      <div className={"course-image-wrap"}></div>
                      <div
                        className={"w-layout-vflex course-card-top-description"}
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
                          className={"heading-five margin-bottom-twenty"}
                        >
                          {"Operations management and process improvement"}
                        </div>
                        <div
                          className={"w-layout-hflex course-two-card-rating"}
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
                      <div className={"course-price-wrapper course-two-price"}>
                        <div>{"Free"}</div>
                      </div>
                    </div>
                    <div
                      style={{ display: "none" }}
                      className={"course-card-pop-up"}
                    >
                      <div className={"heading-five course-name"}>
                        {"Operations management and process improvement"}
                      </div>
                      <div className={"w-layout-hflex course-card-popup-tags"}>
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
                        <div className={"w-layout-hflex course-card-checklist"}>
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
                          <div className={"course-card-two-description"}>
                            {"Lorem ipsum dolor sit amet consectetur"}
                          </div>
                        </div>
                        <div className={"w-layout-hflex course-card-checklist"}>
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
                          <div className={"course-card-two-description"}>
                            {"Lorem ipsum dolor"}
                          </div>
                        </div>
                        <div className={"w-layout-hflex course-card-checklist"}>
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
                          <div className={"course-card-two-description"}>
                            {"Lorem ipsum dolor sit"}
                          </div>
                        </div>
                      </div>
                      <div className={"w-layout-hflex course-cards-two-button"}>
                        <SiteLink
                          data-motion-id={
                            "065082bd-2bae-8443-12ff-a8121f4563e3"
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
              <div role={"list"} className={"card-height-full w-dyn-items"}>
                <div
                  role={"listitem"}
                  className={"card-height-full w-dyn-item"}
                >
                  <div
                    data-motion-id={"065082bd-2bae-8443-12ff-a8121f4563ec"}
                    className={"course-cards-two"}
                  >
                    <div
                      data-motion-id={"065082bd-2bae-8443-12ff-a8121f4563ed"}
                      className={"course-card-top"}
                    >
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
                        sizes={"(max-width: 767px) 100vw, 519.5px"}
                        loading={"lazy"}
                        srcSet={
                          "/assets/f71df869-66fe66442929de6e874b3284_Course-Image-p-500.webp 500w, /assets/4cff7b61-66fe66442929de6e874b3284_Course-Image-p-800.webp 800w, /assets/e189c009-66fe66442929de6e874b3284_Course-Image.webp 820w"
                        }
                      />
                      <div className={"course-image-wrap"}></div>
                      <div
                        className={"w-layout-vflex course-card-top-description"}
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
                          className={"heading-five margin-bottom-twenty"}
                        >
                          {"Design systems and pattern libraries"}
                        </div>
                        <div
                          className={"w-layout-hflex course-two-card-rating"}
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
                      <div className={"course-price-wrapper course-two-price"}>
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
                      <div className={"w-layout-hflex course-card-popup-tags"}>
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
                        <div className={"w-layout-hflex course-card-checklist"}>
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
                          <div className={"course-card-two-description"}>
                            {"Lorem ipsum dolor sit amet consectetur"}
                          </div>
                        </div>
                        <div className={"w-layout-hflex course-card-checklist"}>
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
                          <div className={"course-card-two-description"}>
                            {"Lorem ipsum dolor"}
                          </div>
                        </div>
                        <div className={"w-layout-hflex course-card-checklist"}>
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
                          <div className={"course-card-two-description"}>
                            {"Lorem ipsum dolor sit"}
                          </div>
                        </div>
                      </div>
                      <div className={"w-layout-hflex course-cards-two-button"}>
                        <SiteLink
                          data-motion-id={
                            "065082bd-2bae-8443-12ff-a8121f45640c"
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
                            "065082bd-2bae-8443-12ff-a8121f45640f"
                          }
                          href={"/product/design-systems-and-pattern-libraries"}
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
              <div role={"list"} className={"card-height-full w-dyn-items"}>
                <div
                  role={"listitem"}
                  className={"card-height-full w-dyn-item"}
                >
                  <div
                    data-motion-id={"065082bd-2bae-8443-12ff-a8121f456418"}
                    className={"course-cards-two"}
                  >
                    <div
                      data-motion-id={"065082bd-2bae-8443-12ff-a8121f456419"}
                      className={"course-card-top"}
                    >
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
                        sizes={"(max-width: 767px) 100vw, 519.5px"}
                        loading={"lazy"}
                        srcSet={
                          "/assets/c8d16da2-66eb9fb02faddeb03288c28e_Course-Small-Image-2-p-500.webp 500w, /assets/9b241212-66eb9fb02faddeb03288c28e_Course-Small-Image-2-p-800.webp 800w, /assets/86375962-66eb9fb02faddeb03288c28e_Course-Small-Image-2.webp 820w"
                        }
                      />
                      <div className={"course-image-wrap"}></div>
                      <div
                        className={"w-layout-vflex course-card-top-description"}
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
                          className={"heading-five margin-bottom-twenty"}
                        >
                          {"Grow your brand and reach your audience"}
                        </div>
                        <div
                          className={"w-layout-hflex course-two-card-rating"}
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
                      <div className={"course-price-wrapper course-two-price"}>
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
                      <div className={"w-layout-hflex course-card-popup-tags"}>
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
                        <div className={"w-layout-hflex course-card-checklist"}>
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
                          <div className={"course-card-two-description"}>
                            {"Lorem ipsum dolor sit amet consectetur"}
                          </div>
                        </div>
                        <div className={"w-layout-hflex course-card-checklist"}>
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
                          <div className={"course-card-two-description"}>
                            {"Lorem ipsum dolor"}
                          </div>
                        </div>
                        <div className={"w-layout-hflex course-card-checklist"}>
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
                          <div className={"course-card-two-description"}>
                            {"Lorem ipsum dolor sit"}
                          </div>
                        </div>
                      </div>
                      <div className={"w-layout-hflex course-cards-two-button"}>
                        <SiteLink
                          data-motion-id={
                            "065082bd-2bae-8443-12ff-a8121f456438"
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
                            "065082bd-2bae-8443-12ff-a8121f45643b"
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
            <div className={"w-dyn-list"}>
              <div role={"list"} className={"card-height-full w-dyn-items"}>
                <div
                  role={"listitem"}
                  className={"card-height-full w-dyn-item"}
                >
                  <div
                    data-motion-id={"065082bd-2bae-8443-12ff-a8121f456444"}
                    className={"course-cards-two"}
                  >
                    <div
                      data-motion-id={"065082bd-2bae-8443-12ff-a8121f456445"}
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
                        className={"w-layout-vflex course-card-top-description"}
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
                          className={"heading-five margin-bottom-twenty"}
                        >
                          {
                            "The complete guide to personal and business finance"
                          }
                        </div>
                        <div
                          className={"w-layout-hflex course-two-card-rating"}
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
                      <div className={"course-price-wrapper course-two-price"}>
                        <div>{"$99 "}</div>
                      </div>
                    </div>
                    <div className={"course-card-pop-up course-popup-last"}>
                      <div className={"heading-five course-name"}>
                        {"The complete guide to personal and business finance"}
                      </div>
                      <div className={"w-layout-hflex course-card-popup-tags"}>
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
                        <div className={"w-layout-hflex course-card-checklist"}>
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
                          <div className={"course-card-two-description"}>
                            {"Lorem ipsum dolor sit amet consectetur"}
                          </div>
                        </div>
                        <div className={"w-layout-hflex course-card-checklist"}>
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
                          <div className={"course-card-two-description"}>
                            {"Lorem ipsum dolor"}
                          </div>
                        </div>
                        <div className={"w-layout-hflex course-card-checklist"}>
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
                          <div className={"course-card-two-description"}>
                            {"Lorem ipsum dolor sit"}
                          </div>
                        </div>
                      </div>
                      <div className={"w-layout-hflex course-cards-two-button"}>
                        <SiteLink
                          data-motion-id={
                            "065082bd-2bae-8443-12ff-a8121f456464"
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
                            "065082bd-2bae-8443-12ff-a8121f456467"
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
          <div
            data-motion-id={"e59f3ae9-b6a7-894d-b654-494caa52a52b"}
            className={
              "w-layout-blockcontainer more-course-text-container w-container"
            }
          >
            <div className={"text-dark"}>
              {"We assist you in finding the ideal tutor at no cost. "}
              <SiteLink
                href={"/course-two"}
                className={"text-dark text-underline hyperlink-text"}
              >
                {"Browse all available courses"}
              </SiteLink>
            </div>
          </div>
        </div>
      </section>
      <section className={"home-three-counter"}>
        <div
          className={
            "w-layout-blockcontainer home-three-counter-container w-container"
          }
        >
          <div className={"w-layout-hflex home-three-counter-main"}>
            <div className={"w-layout-vflex home-three-counter-left"}>
              <div
                data-motion-id={"31f2f54f-cb2c-6bfc-c199-638caaa8243e"}
                className={"heading-three text-white margin-bottom-twenty-five"}
              >
                {"Get the courses by expert coach"}
              </div>
              <div
                data-motion-id={"72a7a7da-da46-51a9-9484-486c490ea4aa"}
                className={"heading-four text-yellow started-text"}
              >
                {"Get started with us"}
              </div>
              <div
                data-motion-id={"b84c6794-3e83-7f7c-7e68-bc86d518091b"}
                className={
                  "w-layout-hflex home-two-counters-wrap no-margin-bottom"
                }
              >
                <div className={"w-layout-vflex home-two-counters"}>
                  <div
                    data-motion-id={"b84c6794-3e83-7f7c-7e68-bc86d518091d"}
                    className={"w-layout-hflex counter-box"}
                  >
                    <Interactive
                      className={"w-layout-vflex counter-train-wrapper"}
                      as={"div"}
                      counterValue={"1"}
                      counterClass={"heading-two text-white"}
                    ></Interactive>
                    <div className={"heading-two text-white"}>{"."}</div>
                    <Interactive
                      className={"w-layout-vflex counter-train-wrapper"}
                      as={"div"}
                      counterValue={"5"}
                      counterClass={"heading-two text-white"}
                    ></Interactive>
                    <div className={"heading-two text-white"}>{"K"}</div>
                  </div>
                  <div className={"small-heading"}>{"Finish seasons"}</div>
                </div>
                <div className={"counter-border border-white"}></div>
                <div className={"w-layout-vflex home-two-counters"}>
                  <div
                    data-motion-id={"b84c6794-3e83-7f7c-7e68-bc86d5180944"}
                    className={"w-layout-hflex counter-box"}
                  >
                    <Interactive
                      className={"w-layout-vflex counter-train-wrapper"}
                      as={"div"}
                      counterValue={"7"}
                      counterClass={"heading-two text-white"}
                    ></Interactive>
                    <div className={"heading-two text-white"}>{"."}</div>
                    <Interactive
                      className={"w-layout-vflex counter-train-wrapper"}
                      as={"div"}
                      counterValue={"8"}
                      counterClass={"heading-two text-white"}
                    ></Interactive>
                    <div className={"heading-two text-white"}>{"K"}</div>
                  </div>
                  <div className={"small-heading"}>{"Enrolled"}</div>
                </div>
                <div className={"counter-border border-white"}></div>
                <div className={"w-layout-vflex home-two-counters"}>
                  <div
                    data-motion-id={"b84c6794-3e83-7f7c-7e68-bc86d518098f"}
                    className={"w-layout-hflex counter-box"}
                  >
                    <Interactive
                      className={"w-layout-vflex counter-train-wrapper"}
                      as={"div"}
                      counterValue={"1"}
                      counterClass={"heading-two text-white"}
                    ></Interactive>
                    <Interactive
                      className={"w-layout-vflex counter-train-wrapper"}
                      as={"div"}
                      counterValue={"0"}
                      counterClass={"heading-two text-white"}
                    ></Interactive>
                    <Interactive
                      className={"w-layout-vflex counter-train-wrapper"}
                      as={"div"}
                      counterValue={"0"}
                      counterClass={"heading-two text-white"}
                    ></Interactive>
                    <div className={"heading-two text-white"}>{"%"}</div>
                  </div>
                  <div className={"small-heading"}>{"Job placement"}</div>
                </div>
                <div className={"counter-border border-white"}></div>
              </div>
            </div>
            <div
              data-motion-id={"04a3de9a-8430-b7ed-a514-b2389695083f"}
              className={"home-three-counter-right"}
            >
              <div className={"no-margin-bottom w-form"}>
                <SiteForm
                  id={"email-form"}
                  name={"email-form"}
                  data-name={"Email Form"}
                  className={"form"}
                  formKind={"contact"}
                  route={"/home-three"}
                >
                  <div className={"heading-four margin-bottom-twenty-five"}>
                    {"Course availability inquiry"}
                  </div>
                  <input
                    className={"input-field w-input"}
                    maxLength={"256"}
                    name={"Name"}
                    data-name={"Name"}
                    placeholder={"Your name"}
                    type={"text"}
                    id={"Name"}
                    required={true}
                  />
                  <input
                    className={"input-field w-input"}
                    maxLength={"256"}
                    name={"Email"}
                    data-name={"Email"}
                    placeholder={"Email address"}
                    type={"email"}
                    id={"Email"}
                    required={true}
                  />
                  <textarea
                    placeholder={"Message"}
                    maxLength={"5000"}
                    id={"field"}
                    name={"field"}
                    data-name={"Field"}
                    className={"textarea w-input"}
                  ></textarea>
                  <input
                    data-motion-id={"847d89f8-1e26-9f92-5d46-722eb93d7518"}
                    type={"submit"}
                    data-wait={"Please wait..."}
                    className={"button button-border-off w-button"}
                    value={"Inquire"}
                  />
                </SiteForm>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"clients-three"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <p
            data-motion-id={"749170a9-5dab-3b9e-8196-6f9b8c3dcff8"}
            className={"margin-bottom-twenty-five text-align-center"}
          >
            {"Learn from 350+ leading universities and companies with us"}
          </p>
          <div
            data-motion-id={"749170a9-5dab-3b9e-8196-6f9b8c3dcffa"}
            className={"w-layout-hflex marquee-main"}
          >
            <div className={"w-layout-hflex clients-train"}>
              <img
                src={
                  "/assets/2d26a90d-66c6fb8bca715a603abbc84f_Clients-Logo.svg"
                }
                loading={"lazy"}
                width={"153"}
                height={"51"}
                alt={"Clients Logo"}
                className={"clients-logo"}
              />
              <img
                src={
                  "/assets/63019ec9-66c6fb8b87b34b4188395ff2_Clients-Logo-4.svg"
                }
                loading={"lazy"}
                width={"131"}
                height={"54"}
                alt={"Clients Logo"}
                className={"clients-logo"}
              />
              <img
                src={
                  "/assets/8d477911-66c6fb8beb3991b3db5cd5ff_Clients-Logo-6.svg"
                }
                loading={"lazy"}
                width={"163"}
                height={"52"}
                alt={"Clients Logo"}
                className={"clients-logo"}
              />
              <img
                src={
                  "/assets/60be2a9a-66c6fb8bb6896643f3baa632_Clients-Logo-2.svg"
                }
                loading={"lazy"}
                width={"98"}
                height={"51"}
                alt={"Clients Logo"}
                className={"clients-logo"}
              />
              <img
                src={
                  "/assets/75f428f9-66c6fb8bf82fe9cef5f78d2a_Clients-Logo-3.svg"
                }
                loading={"lazy"}
                width={"66"}
                height={"53"}
                alt={"Clients Logo"}
                className={"clients-logo"}
              />
              <img
                src={
                  "/assets/1fcb894e-66c6fb8bf99901dda5c25e7e_Clients-Logo-5.svg"
                }
                loading={"lazy"}
                width={"160"}
                height={"52"}
                alt={"Clients Logo"}
                className={"clients-logo"}
              />
            </div>
            <div className={"w-layout-hflex clients-train"}>
              <img
                src={
                  "/assets/2d26a90d-66c6fb8bca715a603abbc84f_Clients-Logo.svg"
                }
                loading={"lazy"}
                width={"153"}
                height={"51"}
                alt={"Clients Logo"}
                className={"clients-logo"}
              />
              <img
                src={
                  "/assets/63019ec9-66c6fb8b87b34b4188395ff2_Clients-Logo-4.svg"
                }
                loading={"lazy"}
                width={"131"}
                height={"54"}
                alt={"Clients Logo"}
                className={"clients-logo"}
              />
              <img
                src={
                  "/assets/8d477911-66c6fb8beb3991b3db5cd5ff_Clients-Logo-6.svg"
                }
                loading={"lazy"}
                width={"163"}
                height={"52"}
                alt={"Clients Logo"}
                className={"clients-logo"}
              />
              <img
                src={
                  "/assets/60be2a9a-66c6fb8bb6896643f3baa632_Clients-Logo-2.svg"
                }
                loading={"lazy"}
                width={"98"}
                height={"51"}
                alt={"Clients Logo"}
                className={"clients-logo"}
              />
              <img
                src={
                  "/assets/75f428f9-66c6fb8bf82fe9cef5f78d2a_Clients-Logo-3.svg"
                }
                loading={"lazy"}
                width={"66"}
                height={"53"}
                alt={"Clients Logo"}
                className={"clients-logo"}
              />
              <img
                src={
                  "/assets/1fcb894e-66c6fb8bf99901dda5c25e7e_Clients-Logo-5.svg"
                }
                loading={"lazy"}
                width={"160"}
                height={"52"}
                alt={"Clients Logo"}
                className={"clients-logo"}
              />
            </div>
            <div className={"w-layout-hflex clients-train"}>
              <img
                src={
                  "/assets/2d26a90d-66c6fb8bca715a603abbc84f_Clients-Logo.svg"
                }
                loading={"lazy"}
                width={"153"}
                height={"51"}
                alt={"Clients Logo"}
                className={"clients-logo"}
              />
              <img
                src={
                  "/assets/63019ec9-66c6fb8b87b34b4188395ff2_Clients-Logo-4.svg"
                }
                loading={"lazy"}
                width={"131"}
                height={"54"}
                alt={"Clients Logo"}
                className={"clients-logo"}
              />
              <img
                src={
                  "/assets/8d477911-66c6fb8beb3991b3db5cd5ff_Clients-Logo-6.svg"
                }
                loading={"lazy"}
                width={"163"}
                height={"52"}
                alt={"Clients Logo"}
                className={"clients-logo"}
              />
              <img
                src={
                  "/assets/60be2a9a-66c6fb8bb6896643f3baa632_Clients-Logo-2.svg"
                }
                loading={"lazy"}
                width={"98"}
                height={"51"}
                alt={"Clients Logo"}
                className={"clients-logo"}
              />
              <img
                src={
                  "/assets/75f428f9-66c6fb8bf82fe9cef5f78d2a_Clients-Logo-3.svg"
                }
                loading={"lazy"}
                width={"66"}
                height={"53"}
                alt={"Clients Logo"}
                className={"clients-logo"}
              />
              <img
                src={
                  "/assets/1fcb894e-66c6fb8bf99901dda5c25e7e_Clients-Logo-5.svg"
                }
                loading={"lazy"}
                width={"160"}
                height={"52"}
                alt={"Clients Logo"}
                className={"clients-logo"}
              />
            </div>
            <div className={"clients-overlay-one dark-overlay"}></div>
          </div>
        </div>
      </section>
      <section className={"home-three-learning"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-hflex home-three-learning-main"}>
            <div className={"home-three-learning-video-wrap"}>
              <div
                data-motion-id={"8fb9711f-21c2-554b-1ccb-c46b59c447b0"}
                className={"video-wrap-four"}
              >
                <div
                  data-poster-url={
                    "https://cdn.prod.website-files.com/668cb7adec02e140422345de%2F66c86567624ca9dec83f55cc_Home%20One%20Video-poster-00001.jpg"
                  }
                  data-video-urls={
                    "https://cdn.prod.website-files.com/668cb7adec02e140422345de%2F66c86567624ca9dec83f55cc_Home%20One%20Video-transcode.mp4,https://cdn.prod.website-files.com/668cb7adec02e140422345de%2F66c86567624ca9dec83f55cc_Home%20One%20Video-transcode.webm"
                  }
                  data-autoplay={"true"}
                  data-loop={"true"}
                  className={
                    "video-three w-background-video w-background-video-atom"
                  }
                >
                  <video
                    id={"26d2d345-3019-133e-8bdd-ba522fe5e9d2-video"}
                    autoPlay={true}
                    loop={true}
                    style={{
                      backgroundImage:
                        'url("/assets/94271667-668cb7adec02e140422345de-66c86567624ca9dec83f55cc_Home-One-Video-poster-00001.jpg")',
                    }}
                    muted={true}
                    playsInline={true}
                    data-object-fit={"cover"}
                  >
                    <source
                      src={
                        "/assets/0fbdbd45-668cb7adec02e140422345de-66c86567624ca9dec83f55cc_Home-One-Video-transcode.mp4"
                      }
                    />
                    <source
                      src={
                        "/assets/ed927fb5-668cb7adec02e140422345de-66c86567624ca9dec83f55cc_Home-One-Video-transcode.webm"
                      }
                    />
                  </video>
                </div>
              </div>
              <div
                data-motion-id={"af45527c-70a4-bbd9-c070-478e43498a33"}
                className={"video-three-top-image"}
              >
                <img
                  src={
                    "/assets/eba9b85f-66d92b103999266e87ca5747_Free-Course.avif"
                  }
                  loading={"lazy"}
                  width={"272"}
                  alt={"Course Count"}
                  className={"border-radius-four"}
                />
              </div>
              <div
                data-motion-id={"63d365c3-1163-826d-1a83-866ac6169169"}
                className={"w-layout-vflex video-three-experience"}
              >
                <div className={"heading-one"}>{"25"}</div>
                <div className={"experiace-text"}>{"Years of experiance"}</div>
              </div>
            </div>
            <div className={"home-three-learning-right"}>
              <div
                data-motion-id={"a5ff96f1-0b24-9a8e-5c74-a45508423d0b"}
                className={"small-heading text-dark"}
              >
                {"what we Offer"}
              </div>
              <h2
                data-motion-id={"099bd291-e7e9-2e45-895b-93d28f650136"}
                className={"heading-two-gap-updown"}
              >
                {"Personalized learning for your ambitions"}
              </h2>
              <p
                data-motion-id={"667d76fe-3008-5d9f-f7fe-9da495135842"}
                className={"margin-bottom-twenty"}
              >
                {
                  "Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut."
                }
              </p>
              <ul
                data-motion-id={"70e48e35-218e-891d-570c-54b8a376dee7"}
                role={"list"}
                className={"home-one-offer-list"}
              >
                <li className={"heading-six"}>{"Skill-based instruction"}</li>
                <li className={"heading-six"}>{"Analytics and insights"}</li>
                <li className={"heading-six"}>{"Global certification"}</li>
                <li className={"heading-six"}>{"Customizable courses"}</li>
              </ul>
              <div
                data-motion-id={"2efa3d0d-0ff1-eb89-5aa2-f11edd8da4ae"}
                className={"w-layout-hflex home-one-offer-box"}
              >
                <div className={"w-layout-vflex home-one-offer-text"}>
                  <div className={"heading-five"}>
                    {"Still have questions?"}
                  </div>
                  <p className={"no-margin-bottom"}>
                    {
                      "Lorem ipsum dolor sit amet conse ipsum blandit etiam aliquam."
                    }
                  </p>
                </div>
                <div className={"no-shrink"}>
                  <SiteLink
                    data-motion-id={"554bdb09-166f-7496-ccbc-6402fc45feda"}
                    href={"/contact-one"}
                    className={"button button-border-off w-inline-block"}
                  >
                    <div>{"Get Started "}</div>
                  </SiteLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"home-two-testimonial"}>
        <div
          className={
            "w-layout-blockcontainer home-two-testimonial-container w-container"
          }
        >
          <div className={"w-layout-vflex home-two-testimonial-main"}>
            <img
              data-motion-id={"94133b6d-1f40-cb6b-ab13-10b498f20ec3"}
              src={"/assets/d297079d-66cff274c1ce9bc0b1d47e56_Quote-Icons.svg"}
              loading={"lazy"}
              width={"159"}
              height={"116"}
              alt={"Quote"}
              className={"testimonial-two-quote"}
            />
            <Interactive
              data-motion-id={"94133b6d-1f40-cb6b-ab13-10b498f20ec4"}
              data-delay={"4000"}
              data-animation={"cross"}
              className={"testimonial-two-slider w-slider"}
              data-autoplay={"false"}
              data-easing={"ease"}
              data-hide-arrows={"false"}
              data-disable-swipe={"false"}
              data-autoplay-limit={"0"}
              data-nav-spacing={"3"}
              data-duration={"500"}
              data-infinite={"true"}
              as={"div"}
            >
              <div className={"w-slider-mask"}>
                <Interactive className={"w-slide"} as={"div"} slideIndex={0}>
                  <div className={"w-layout-vflex home-two-testimonial-items"}>
                    <p className={"home-two-testimonial-text"}>
                      {
                        "“Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus venenatis donec mattis. Morbi placerat eleifend malesuada sed semper quis.”"
                      }
                    </p>
                    <div className={"home-two-testimonial-name"}>
                      {"Linda Grady"}
                    </div>
                    <div className={"body-small-text"}>
                      {"Co-assistant manager"}
                    </div>
                  </div>
                </Interactive>
                <Interactive className={"w-slide"} as={"div"} slideIndex={1}>
                  <div className={"w-layout-vflex home-two-testimonial-items"}>
                    <p className={"home-two-testimonial-text"}>
                      {
                        '"Lorem ipsum dolor sit amet consectetur. Est felis pulvinar tortor ut nibh montes ante gravida velit. Facilisi posuere in sed mattis blandit duis aliquet. Molestie faucibus nibh felis tempor vel aliquet cursus placerat duis."'
                      }
                    </p>
                    <div className={"home-two-testimonial-name"}>
                      {"Jim Adams"}
                    </div>
                    <div className={"body-small-text"}>{"Designer"}</div>
                  </div>
                </Interactive>
              </div>
              <Interactive
                className={
                  "testimonial-two-slider-arrow slider-arrow-left w-slider-arrow-left"
                }
                as={"div"}
              >
                <img
                  src={
                    "/assets/a28d5e5b-66cff27450908035329d09f0_Slider-Arrow-Black.svg"
                  }
                  loading={"lazy"}
                  width={"18"}
                  height={"Auto"}
                  alt={"Slider Arrow"}
                  className={"icon-rotate"}
                />
              </Interactive>
              <Interactive
                className={
                  "testimonial-two-slider-arrow slider-arrow-right w-slider-arrow-right"
                }
                as={"div"}
              >
                <img
                  src={
                    "/assets/a28d5e5b-66cff27450908035329d09f0_Slider-Arrow-Black.svg"
                  }
                  loading={"lazy"}
                  width={"18"}
                  height={"Auto"}
                  alt={"Slider Arrow"}
                />
              </Interactive>
              <Interactive
                className={"display-off w-slider-nav w-round w-num"}
                as={"div"}
              ></Interactive>
            </Interactive>
          </div>
        </div>
      </section>
      <section className={"cta-one"}>
        <div
          data-motion-id={"1f1740e9-17b8-d475-7d9c-ce8d11687932"}
          className={"w-layout-blockcontainer container w-container"}
        >
          <div className={"w-layout-hflex cta-main cta-two-main"}>
            <div className={"heading-three cta-heading text-white"}>
              {"Are you ready to start your journey?"}
            </div>
            <div className={"w-layout-hflex cta-button-wrapper"}>
              <SiteLink
                data-motion-id={"d2419891-9f36-e25c-7c72-b1716c5d291d"}
                href={"/course-two"}
                className={"button button-yellow w-inline-block"}
              >
                <div>{"Browse courses"}</div>
              </SiteLink>
              <SiteLink
                data-motion-id={"890a1aa9-6573-2ea8-6a51-6c8deb450bab"}
                href={"/career"}
                className={"button white-border-button w-inline-block"}
              >
                <div>{"Became a teacher"}</div>
              </SiteLink>
            </div>
          </div>
        </div>
      </section>
      <section className={"home-three-journey"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-vflex home-one-journey-main-wrap"}>
            <div
              data-motion-id={"a5ff96f1-0b24-9a8e-5c74-a45508423d0b"}
              className={"small-heading text-dark"}
            >
              {"Why we are"}
            </div>
            <div
              data-motion-id={"3654ddcd-1d4a-6018-e801-dec7585a521a"}
              className={"heading-three heading-three-gap"}
            >
              {"Elevate your professional journey"}
            </div>
            <p
              data-motion-id={"3654ddcd-1d4a-6018-e801-dec7585a521c"}
              className={"no-margin-bottom journey-description"}
            >
              {
                "Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut."
              }
            </p>
            <div className={"journey-options-wrap"}>
              <div
                data-motion-id={"3654ddcd-1d4a-6018-e801-dec7585a521f"}
                className={"w-layout-vflex journey-cards"}
              >
                <img
                  src={
                    "/assets/087275d0-66c6fb8bee2a8ef26987f800_Books-Icons.svg"
                  }
                  loading={"lazy"}
                  width={"43"}
                  height={"42"}
                  alt={"Icon"}
                />
                <div className={"heading-five"}>{"Learn anything"}</div>
                <p className={"no-margin-bottom"}>
                  {
                    "Lorem ipsum dolor sit amet conse non quis id viverra id proin."
                  }
                </p>
              </div>
              <div
                data-motion-id={"3654ddcd-1d4a-6018-e801-dec7585a5225"}
                className={"w-layout-vflex journey-cards"}
              >
                <img
                  src={
                    "/assets/af51b02a-66c6fb8bdf096206b7f4e62e_Money-Bag-ICon.svg"
                  }
                  loading={"lazy"}
                  width={"34"}
                  height={"42"}
                  alt={"Icon"}
                />
                <div className={"heading-five"}>{"Save money"}</div>
                <p className={"no-margin-bottom"}>
                  {
                    "Lorem ipsum dolor sit amet conse non quis id viverra id proin."
                  }
                </p>
              </div>
              <div
                data-motion-id={"3654ddcd-1d4a-6018-e801-dec7585a522b"}
                className={"w-layout-vflex journey-cards"}
              >
                <img
                  src={
                    "/assets/1c7adc45-66c6fb8bf82fe9cef5f78d5e_Course-Icon.svg"
                  }
                  loading={"lazy"}
                  width={"38"}
                  height={"42"}
                  alt={"Icon"}
                />
                <div className={"heading-five"}>{"Flexible courses"}</div>
                <p className={"no-margin-bottom"}>
                  {
                    "Lorem ipsum dolor sit amet conse non quis id viverra id proin."
                  }
                </p>
              </div>
              <div
                data-motion-id={"3654ddcd-1d4a-6018-e801-dec7585a5231"}
                className={"w-layout-vflex journey-cards"}
              >
                <img
                  src={
                    "/assets/3d643611-66c6fb8b98a2dc7066c69460_Verified-Icon.svg"
                  }
                  loading={"lazy"}
                  width={"42"}
                  height={"42"}
                  alt={"Icon"}
                />
                <div className={"heading-five"}>{"Unlimited certificate"}</div>
                <p className={"no-margin-bottom"}>
                  {
                    "Lorem ipsum dolor sit amet conse non quis id viverra id proin."
                  }
                </p>
              </div>
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
