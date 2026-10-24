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
      <section className={"home-two-hero"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-vflex home-two-main"}>
            <div className={"w-layout-vflex home-two-top-text"}>
              <div
                data-motion-id={"d92fadf7-fb1d-cf72-ebda-09dad15e71fc"}
                className={"gradiant-text"}
              >
                {"personal"}
              </div>
              <div
                data-motion-id={"f3ed014c-32f7-2a81-e503-75f7d62d4d20"}
                className={"gradiant-text gradiant-text-two"}
              >
                {"Coach"}
              </div>
            </div>
            <div className={"w-layout-vflex home-two-bottom-text"}>
              <div
                data-motion-id={"96645ce7-a58f-669a-a10d-291fbaae30d0"}
                className={"small-heading"}
              >
                {"Online learning"}
              </div>
              <h1
                data-motion-id={"29f7f06d-d86f-5084-d910-86f91af0a630"}
                className={"heading-gap no-margin-bottom text-white"}
              >
                {"Transform "}
                <span className={"brand-color"}>{"learning"}</span>
                {" with flexible online education"}
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className={"home-two-details"}>
        <div
          data-motion-id={"fe9e2b73-e7d7-af8f-12ad-34dc265b0633"}
          className={"w-layout-blockcontainer container w-container"}
        >
          <div className={"w-layout-hflex home-two-details-main"}>
            <div className={"w-layout-hflex home-two-details-box"}>
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
            <div className={"w-layout-hflex home-two-details-box"}>
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
            <div className={"w-layout-hflex home-two-details-box"}>
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
      <section className={"home-two-category"}>
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
                data-motion-id={"ccf0ee95-96e2-525d-cf44-c65c385ab54e"}
                className={"category-heading-gap"}
              >
                {"Discover leading categories"}
              </h2>
              <div>
                <SiteLink
                  data-motion-id={"554bdb09-166f-7496-ccbc-6402fc45feda"}
                  href={"/course-one"}
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
                  {"Creative web design"}
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
                  {"Finance accounting"}
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
                href={"/category/design"}
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
                  {"Content writing"}
                </div>
                <div>{"3 Courses"}</div>
              </SiteLink>
            </div>
          </div>
        </div>
      </section>
      <section className={"home-two-discover"}>
        <div
          className={
            "w-layout-blockcontainer home-two-discover-container w-container"
          }
        >
          <div className={"w-layout-vflex home-two-discover-text"}>
            <div
              data-motion-id={"a5ff96f1-0b24-9a8e-5c74-a45508423d0b"}
              className={"small-heading text-dark"}
            >
              {"Unlocking Potential"}
            </div>
            <div
              data-motion-id={"b89b7d40-c2f2-64b5-00d7-5d22638febd3"}
              className={"heading-three"}
            >
              {
                "Discover the boundless advantages and transformative power of eLearning for professional growth"
              }
            </div>
          </div>
        </div>
        <div
          data-motion-id={"6d1fa230-2b2f-0e74-d842-07f71c571399"}
          className={"home-two-discover-options"}
        >
          <div className={"home-two-discover-images"}>
            <img
              src={
                "/assets/40bffd5e-66cff2777e50749c4b90b5dd_Potential-Image-2.webp"
              }
              loading={"lazy"}
              width={"1920"}
              height={"750"}
              alt={"Potential Image"}
              srcSet={
                "/assets/1b6a183b-66cff2777e50749c4b90b5dd_Potential-Image-2-p-500.webp 500w, /assets/70ced126-66cff2777e50749c4b90b5dd_Potential-Image-2-p-800.webp 800w, /assets/3d289803-66cff2777e50749c4b90b5dd_Potential-Image-2-p-1080.webp 1080w, /assets/7c3f298f-66cff2777e50749c4b90b5dd_Potential-Image-2-p-1600.webp 1600w, /assets/193820a0-66cff2777e50749c4b90b5dd_Potential-Image-2-p-2000.webp 2000w, /assets/dd57ec2e-66cff2777e50749c4b90b5dd_Potential-Image-2-p-2600.webp 2600w, /assets/7100df0c-66cff2777e50749c4b90b5dd_Potential-Image-2-p-3200.webp 3200w, /assets/40bffd5e-66cff2777e50749c4b90b5dd_Potential-Image-2.webp 3840w"
              }
              sizes={"(max-width: 1919px) 100vw, 1920px"}
              className={"discover-image image-one"}
            />
            <img
              src={
                "/assets/d03f25c4-66cff277582c8617efcf31ab_Potential-Image-3.webp"
              }
              loading={"lazy"}
              width={"1920"}
              height={"750"}
              alt={"Potential Image"}
              srcSet={
                "/assets/f66debdd-66cff277582c8617efcf31ab_Potential-Image-3-p-500.webp 500w, /assets/f95acd37-66cff277582c8617efcf31ab_Potential-Image-3-p-800.webp 800w, /assets/5ab5802c-66cff277582c8617efcf31ab_Potential-Image-3-p-1080.webp 1080w, /assets/ae87bd23-66cff277582c8617efcf31ab_Potential-Image-3-p-1600.webp 1600w, /assets/c29f23fa-66cff277582c8617efcf31ab_Potential-Image-3-p-2000.webp 2000w, /assets/20658e95-66cff277582c8617efcf31ab_Potential-Image-3-p-2600.webp 2600w, /assets/d6d761ea-66cff277582c8617efcf31ab_Potential-Image-3-p-3200.webp 3200w, /assets/d03f25c4-66cff277582c8617efcf31ab_Potential-Image-3.webp 3840w"
              }
              sizes={"(max-width: 1919px) 100vw, 1920px"}
              className={"discover-image image-two"}
            />
            <img
              src={
                "/assets/d77fa40b-66cff277ceae6c7605edbd6e_Potential-Image-4.webp"
              }
              loading={"lazy"}
              width={"1920"}
              height={"750"}
              alt={"Potential Image"}
              srcSet={
                "/assets/4767eac4-66cff277ceae6c7605edbd6e_Potential-Image-4-p-500.webp 500w, /assets/da9bf1b3-66cff277ceae6c7605edbd6e_Potential-Image-4-p-800.webp 800w, /assets/3c26d8c9-66cff277ceae6c7605edbd6e_Potential-Image-4-p-1080.webp 1080w, /assets/ba5184c3-66cff277ceae6c7605edbd6e_Potential-Image-4-p-1600.webp 1600w, /assets/12606088-66cff277ceae6c7605edbd6e_Potential-Image-4-p-2000.webp 2000w, /assets/1d6749b7-66cff277ceae6c7605edbd6e_Potential-Image-4-p-2600.webp 2600w, /assets/0c395d60-66cff277ceae6c7605edbd6e_Potential-Image-4-p-3200.webp 3200w, /assets/d77fa40b-66cff277ceae6c7605edbd6e_Potential-Image-4.webp 3840w"
              }
              sizes={"(max-width: 1919px) 100vw, 1920px"}
              className={"discover-image image-three"}
            />
            <img
              src={
                "/assets/04cdd489-66de9b2474f1094cb7ea1767_Contact-Us-One.webp"
              }
              loading={"lazy"}
              width={"1920"}
              height={"750"}
              alt={"Hero Background"}
              srcSet={
                "/assets/b06e40e7-66de9b2474f1094cb7ea1767_Contact-Us-One-p-500.webp 500w, /assets/56237633-66de9b2474f1094cb7ea1767_Contact-Us-One-p-800.webp 800w, /assets/75a6e60b-66de9b2474f1094cb7ea1767_Contact-Us-One-p-1080.webp 1080w, /assets/5438d8ba-66de9b2474f1094cb7ea1767_Contact-Us-One-p-1600.webp 1600w, /assets/f45600a9-66de9b2474f1094cb7ea1767_Contact-Us-One-p-2000.webp 2000w, /assets/5d5c3c5d-66de9b2474f1094cb7ea1767_Contact-Us-One-p-2600.webp 2600w, /assets/118c97d2-66de9b2474f1094cb7ea1767_Contact-Us-One-p-3200.webp 3200w, /assets/04cdd489-66de9b2474f1094cb7ea1767_Contact-Us-One.webp 3840w"
              }
              sizes={"(max-width: 1919px) 100vw, 1920px"}
              className={"discover-image image-four"}
            />
          </div>
          <div className={"home-two-discover-cards-wrap"}>
            <div
              data-motion-id={"7611239c-7dca-09ac-ef7d-4a7b5d653aa0"}
              className={"w-layout-vflex discover-cards"}
            >
              <div className={"w-layout-vflex discover-cards-text"}>
                <div className={"heading-three text-white"}>{"01"}</div>
                <div className={"heading-four text-white"}>
                  {"Flexibility and convenience"}
                </div>
                <div
                  className={"discover-cards-description description-box-one"}
                >
                  <p className={"text-light-white no-margin-bottom"}>
                    {
                      "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus."
                    }
                  </p>
                </div>
              </div>
            </div>
            <div
              data-motion-id={"7611239c-7dca-09ac-ef7d-4a7b5d653aa9"}
              className={"w-layout-vflex discover-cards border-off"}
            >
              <div className={"w-layout-vflex discover-cards-text"}>
                <div className={"heading-three text-white"}>{"02"}</div>
                <div className={"heading-four text-white"}>
                  {"Course accessibility"}
                </div>
                <div
                  className={"discover-cards-description description-box-two"}
                >
                  <p className={"text-light-white no-margin-bottom"}>
                    {
                      "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus."
                    }
                  </p>
                </div>
              </div>
            </div>
            <div
              data-motion-id={"7611239c-7dca-09ac-ef7d-4a7b5d653ab2"}
              className={"w-layout-vflex discover-cards card-three"}
            >
              <div className={"w-layout-vflex discover-cards-text"}>
                <div className={"heading-three text-white"}>{"03"}</div>
                <div className={"heading-four text-white"}>
                  {"Cost-effectiveness"}
                </div>
                <div
                  className={"discover-cards-description description-box-three"}
                >
                  <p className={"text-light-white no-margin-bottom"}>
                    {
                      "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus."
                    }
                  </p>
                </div>
              </div>
            </div>
            <div
              data-motion-id={"7611239c-7dca-09ac-ef7d-4a7b5d653abb"}
              className={"w-layout-vflex discover-cards border-off card-four"}
            >
              <div className={"w-layout-vflex discover-cards-text"}>
                <div className={"heading-three text-white"}>{"04"}</div>
                <div className={"heading-four text-white"}>
                  {"Personalized learning"}
                </div>
                <div
                  className={"discover-cards-description description-box-four"}
                >
                  <p className={"text-light-white no-margin-bottom"}>
                    {
                      "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus."
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"home-two-courses"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-vflex"}>
            <div
              data-motion-id={"a5ff96f1-0b24-9a8e-5c74-a45508423d0b"}
              className={"small-heading text-dark"}
            >
              {"Online learning"}
            </div>
            <h2
              data-motion-id={"36df2957-5014-05a3-bc12-e03876fbda08"}
              className={"courses-heading-gap"}
            >
              {"Top online courses"}
            </h2>
            <div className={"course-wrap-three"}>
              <div className={"course-wrap-card"}>
                <div
                  data-motion-id={"c5344ace-6111-b4dc-79c3-45c836f59f33"}
                  className={"w-dyn-list"}
                >
                  <div role={"list"} className={"w-dyn-items"}>
                    <div role={"listitem"} className={"w-dyn-item"}>
                      <div
                        data-motion-id={"e410f14f-0049-651a-ca82-ae45871bcc08"}
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
                            data-motion-id={
                              "e410f14f-0049-651a-ca82-ae45871bcc14"
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
                                  "e410f14f-0049-651a-ca82-ae45871bcc16"
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
                              "e410f14f-0049-651a-ca82-ae45871bcc1c"
                            }
                            className={"course-three-cards-border-one"}
                          ></div>
                          <div
                            data-motion-id={
                              "e410f14f-0049-651a-ca82-ae45871bcc1d"
                            }
                            className={"course-three-cards-border-two"}
                          ></div>
                          <div
                            data-motion-id={
                              "e410f14f-0049-651a-ca82-ae45871bcc1e"
                            }
                            className={"course-three-cards-border-three"}
                          ></div>
                          <div
                            data-motion-id={
                              "e410f14f-0049-651a-ca82-ae45871bcc1f"
                            }
                            className={"course-three-cards-border-four"}
                          ></div>
                          <div
                            data-motion-id={
                              "e410f14f-0049-651a-ca82-ae45871bcc20"
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
                  data-motion-id={"25fc2b6f-882c-979e-11ab-d88dc27fc51e"}
                  className={"w-dyn-list"}
                >
                  <div role={"list"} className={"w-dyn-items"}>
                    <div role={"listitem"} className={"w-dyn-item"}>
                      <div
                        data-motion-id={"93b8cf1f-b6ea-a040-b4fe-0dbf654b936e"}
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
                            data-motion-id={
                              "93b8cf1f-b6ea-a040-b4fe-0dbf654b937a"
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
                                  "93b8cf1f-b6ea-a040-b4fe-0dbf654b937c"
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
                                  "93b8cf1f-b6ea-a040-b4fe-0dbf654b937f"
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
                              "93b8cf1f-b6ea-a040-b4fe-0dbf654b9382"
                            }
                            className={"course-three-cards-border-one"}
                          ></div>
                          <div
                            data-motion-id={
                              "93b8cf1f-b6ea-a040-b4fe-0dbf654b9383"
                            }
                            className={"course-three-cards-border-two"}
                          ></div>
                          <div
                            data-motion-id={
                              "93b8cf1f-b6ea-a040-b4fe-0dbf654b9384"
                            }
                            className={"course-three-cards-border-three"}
                          ></div>
                          <div
                            data-motion-id={
                              "93b8cf1f-b6ea-a040-b4fe-0dbf654b9385"
                            }
                            className={"course-three-cards-border-four"}
                          ></div>
                          <div
                            data-motion-id={
                              "93b8cf1f-b6ea-a040-b4fe-0dbf654b9386"
                            }
                            className={
                              "course-price-wrapper course-three-price"
                            }
                          >
                            <div
                              data-motion-id={
                                "43a75118-8c2f-447c-7a14-7a821997b8a9"
                              }
                            >
                              {"$59 "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-motion-id={"92629fa2-e1e8-97b6-692a-0f3fd9be875d"}
                  className={"w-dyn-list"}
                >
                  <div role={"list"} className={"w-dyn-items"}>
                    <div role={"listitem"} className={"w-dyn-item"}>
                      <div
                        data-motion-id={"256db351-38be-393a-3055-c720f9ac3338"}
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
                            data-motion-id={
                              "256db351-38be-393a-3055-c720f9ac3344"
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
                                  "256db351-38be-393a-3055-c720f9ac3346"
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
                              "256db351-38be-393a-3055-c720f9ac334c"
                            }
                            className={"course-three-cards-border-one"}
                          ></div>
                          <div
                            data-motion-id={
                              "256db351-38be-393a-3055-c720f9ac334d"
                            }
                            className={"course-three-cards-border-two"}
                          ></div>
                          <div
                            data-motion-id={
                              "256db351-38be-393a-3055-c720f9ac334e"
                            }
                            className={"course-three-cards-border-three"}
                          ></div>
                          <div
                            data-motion-id={
                              "256db351-38be-393a-3055-c720f9ac334f"
                            }
                            className={"course-three-cards-border-four"}
                          ></div>
                          <div
                            data-motion-id={
                              "256db351-38be-393a-3055-c720f9ac3350"
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
                  data-motion-id={"e34cb0b9-5ae7-f48c-4785-97a66e4f63ca"}
                  className={"w-dyn-list"}
                >
                  <div role={"list"} className={"w-dyn-items"}>
                    <div role={"listitem"} className={"w-dyn-item"}>
                      <div
                        data-motion-id={"17301345-2498-6d6c-a6ab-92eaa86ab56f"}
                        className={"course-wrap-main"}
                      >
                        <img
                          src={
                            "/assets/2b97ab6b-66ebac0cfd1f38c62e59431b_Course-Portrait-Image-7.webp"
                          }
                          loading={"lazy"}
                          width={"410"}
                          height={"510"}
                          alt={""}
                          sizes={"(max-width: 479px) 100vw, 410px"}
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
                              {"4.88 (210)"}
                            </div>
                          </div>
                          <div
                            data-motion-id={
                              "17301345-2498-6d6c-a6ab-92eaa86ab57b"
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
                                  "17301345-2498-6d6c-a6ab-92eaa86ab57d"
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
                                  "17301345-2498-6d6c-a6ab-92eaa86ab580"
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
                              "17301345-2498-6d6c-a6ab-92eaa86ab583"
                            }
                            className={"course-three-cards-border-one"}
                          ></div>
                          <div
                            data-motion-id={
                              "17301345-2498-6d6c-a6ab-92eaa86ab584"
                            }
                            className={"course-three-cards-border-two"}
                          ></div>
                          <div
                            data-motion-id={
                              "17301345-2498-6d6c-a6ab-92eaa86ab585"
                            }
                            className={"course-three-cards-border-three"}
                          ></div>
                          <div
                            data-motion-id={
                              "17301345-2498-6d6c-a6ab-92eaa86ab586"
                            }
                            className={"course-three-cards-border-four"}
                          ></div>
                          <div
                            data-motion-id={
                              "17301345-2498-6d6c-a6ab-92eaa86ab587"
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
                <div
                  data-motion-id={"adf83511-938d-8b7b-f029-fada698709b8"}
                  className={"w-dyn-list"}
                >
                  <div role={"list"} className={"w-dyn-items"}>
                    <div role={"listitem"} className={"w-dyn-item"}>
                      <div
                        data-motion-id={"be80a8ab-001e-76f7-88e5-4fa232d9efbd"}
                        className={"course-wrap-main"}
                      >
                        <img
                          src={
                            "/assets/d5143f07-66fe66cdef763efcc757aefb_Course-Image-2.webp"
                          }
                          loading={"lazy"}
                          width={"410"}
                          height={"510"}
                          alt={""}
                          sizes={"(max-width: 479px) 100vw, 410px"}
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
                              {"5.00 (1.2K)"}
                            </div>
                          </div>
                          <div
                            data-motion-id={
                              "be80a8ab-001e-76f7-88e5-4fa232d9efc9"
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
                                  "be80a8ab-001e-76f7-88e5-4fa232d9efcb"
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
                                  "be80a8ab-001e-76f7-88e5-4fa232d9efce"
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
                              "be80a8ab-001e-76f7-88e5-4fa232d9efd1"
                            }
                            className={"course-three-cards-border-one"}
                          ></div>
                          <div
                            data-motion-id={
                              "be80a8ab-001e-76f7-88e5-4fa232d9efd2"
                            }
                            className={"course-three-cards-border-two"}
                          ></div>
                          <div
                            data-motion-id={
                              "be80a8ab-001e-76f7-88e5-4fa232d9efd3"
                            }
                            className={"course-three-cards-border-three"}
                          ></div>
                          <div
                            data-motion-id={
                              "be80a8ab-001e-76f7-88e5-4fa232d9efd4"
                            }
                            className={"course-three-cards-border-four"}
                          ></div>
                          <div
                            data-motion-id={
                              "be80a8ab-001e-76f7-88e5-4fa232d9efd5"
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
                <div
                  data-motion-id={"0df3d833-7fa0-1ca2-c661-c11f78dc2167"}
                  className={"w-dyn-list"}
                >
                  <div role={"list"} className={"w-dyn-items"}>
                    <div role={"listitem"} className={"w-dyn-item"}>
                      <div
                        data-motion-id={"2e0dbfec-478f-463e-9514-1121fdbc936b"}
                        className={"course-wrap-main"}
                      >
                        <img
                          src={
                            "/assets/39588811-66ebac3db9565bc62a90430e_Course-Portrait-Image-5.webp"
                          }
                          loading={"lazy"}
                          width={"410"}
                          height={"510"}
                          alt={""}
                          sizes={"(max-width: 479px) 100vw, 410px"}
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
                              {"5.00 (985)"}
                            </div>
                          </div>
                          <div
                            data-motion-id={
                              "2e0dbfec-478f-463e-9514-1121fdbc9377"
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
                                  "2e0dbfec-478f-463e-9514-1121fdbc9379"
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
                                  "2e0dbfec-478f-463e-9514-1121fdbc937c"
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
                              "2e0dbfec-478f-463e-9514-1121fdbc937f"
                            }
                            className={"course-three-cards-border-one"}
                          ></div>
                          <div
                            data-motion-id={
                              "2e0dbfec-478f-463e-9514-1121fdbc9380"
                            }
                            className={"course-three-cards-border-two"}
                          ></div>
                          <div
                            data-motion-id={
                              "2e0dbfec-478f-463e-9514-1121fdbc9381"
                            }
                            className={"course-three-cards-border-three"}
                          ></div>
                          <div
                            data-motion-id={
                              "2e0dbfec-478f-463e-9514-1121fdbc9382"
                            }
                            className={"course-three-cards-border-four"}
                          ></div>
                          <div
                            data-motion-id={
                              "2e0dbfec-478f-463e-9514-1121fdbc9383"
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
              </div>
            </div>
          </div>
          <div
            data-motion-id={"0ecfb054-303e-3e16-0b7d-e92a6f26982d"}
            className={
              "w-layout-blockcontainer more-courses-container w-container"
            }
          >
            <div>
              {"We assist you in finding the ideal tutor at no cost. "}
              <SiteLink href={"/course-one"} className={"button-font"}>
                {"Browse all available courses"}
              </SiteLink>
            </div>
          </div>
        </div>
      </section>
      <section className={"home-two-learning"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-vflex home-two-learning-heading"}>
            <div
              data-motion-id={"a5ff96f1-0b24-9a8e-5c74-a45508423d0b"}
              className={"small-heading text-dark"}
            >
              {"Why we are"}
            </div>
            <h2
              data-motion-id={"4783d4da-7a39-081d-071c-bc2417c7af99"}
              className={"category-heading-gap"}
            >
              {"World-class learning from anywhere"}
            </h2>
          </div>
          <div className={"w-layout-hflex home-two-learning-main"}>
            <div className={"home-two-learning-image-wrap"}>
              <div
                data-motion-id={"c90be8ae-523b-7160-c7de-6bfe0fff2203"}
                className={"learning-video-wrap"}
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
                    "video-two w-background-video w-background-video-atom"
                  }
                >
                  <video
                    id={"398528e1-0a84-66a3-f31b-8e2c58424e79-video"}
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
                data-motion-id={"bd0c74ba-3650-c9a8-bac9-5f3ef3665f1e"}
                className={"learning-image-wrap"}
              >
                <img
                  src={
                    "/assets/d93d505a-66cff274cdd4c2243b9ba324_Woman-Image.webp"
                  }
                  loading={"lazy"}
                  width={"366"}
                  height={"471"}
                  alt={"Girl Image"}
                  srcSet={
                    "/assets/5e2ca33f-66cff274cdd4c2243b9ba324_Woman-Image-p-500.webp 500w, /assets/d93d505a-66cff274cdd4c2243b9ba324_Woman-Image.webp 732w"
                  }
                  sizes={"(max-width: 479px) 100vw, 366px"}
                  className={"border-radius-four tab-image-full-width"}
                />
              </div>
            </div>
            <div className={"home-two-learning-right"}>
              <p
                data-motion-id={"061601d9-ef93-ed39-2e73-705fe51903df"}
                className={"margin-bottom-thirty responsive-text-center"}
              >
                {
                  "Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut."
                }
              </p>
              <div
                data-motion-id={"ffd7d1f9-0ec6-7d7f-943f-8c8934c4f475"}
                className={"w-layout-hflex home-two-counters-wrap"}
              >
                <div className={"w-layout-vflex home-two-counters"}>
                  <div
                    data-motion-id={"e23deeb5-162d-8ab2-d644-bd6088281b5d"}
                    className={"w-layout-hflex counter-box"}
                  >
                    <Interactive
                      className={"w-layout-vflex counter-train-wrapper"}
                      as={"div"}
                      counterValue={"1"}
                      counterClass={"heading-two"}
                    ></Interactive>
                    <div className={"heading-two"}>{"."}</div>
                    <Interactive
                      className={"w-layout-vflex counter-train-wrapper"}
                      as={"div"}
                      counterValue={"5"}
                      counterClass={"heading-two"}
                    ></Interactive>
                    <div className={"heading-two"}>{"K"}</div>
                  </div>
                  <div className={"small-heading text-dark"}>
                    {"Finish seasons"}
                  </div>
                </div>
                <div className={"counter-border"}></div>
                <div className={"w-layout-vflex home-two-counters"}>
                  <div
                    data-motion-id={"22e1bbd6-b406-bb0f-4269-2784b0ba4bc2"}
                    className={"w-layout-hflex counter-box"}
                  >
                    <Interactive
                      className={"w-layout-vflex counter-train-wrapper"}
                      as={"div"}
                      counterValue={"7"}
                      counterClass={"heading-two"}
                    ></Interactive>
                    <div className={"heading-two"}>{"."}</div>
                    <Interactive
                      className={"w-layout-vflex counter-train-wrapper"}
                      as={"div"}
                      counterValue={"8"}
                      counterClass={"heading-two"}
                    ></Interactive>
                    <div className={"heading-two"}>{"K"}</div>
                  </div>
                  <div className={"small-heading text-dark"}>{"Enrolled"}</div>
                </div>
                <div className={"counter-border"}></div>
                <div className={"w-layout-vflex home-two-counters"}>
                  <div
                    data-motion-id={"09c02fd4-4fa3-4b95-99a1-c420234a734f"}
                    className={"w-layout-hflex counter-box"}
                  >
                    <Interactive
                      className={"w-layout-vflex counter-train-wrapper"}
                      as={"div"}
                      counterValue={"1"}
                      counterClass={"heading-two"}
                    ></Interactive>
                    <Interactive
                      className={"w-layout-vflex counter-train-wrapper"}
                      as={"div"}
                      counterValue={"0"}
                      counterClass={"heading-two"}
                    ></Interactive>
                    <Interactive
                      className={"w-layout-vflex counter-train-wrapper"}
                      as={"div"}
                      counterValue={"0"}
                      counterClass={"heading-two"}
                    ></Interactive>
                    <div className={"heading-two"}>{"%"}</div>
                  </div>
                  <div className={"small-heading text-dark"}>
                    {"Job placement"}
                  </div>
                </div>
              </div>
              <div
                data-motion-id={"41bac7c6-87b0-a660-11d4-a04729434373"}
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
                    href={"/contact-two"}
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
      <section className={"home-two-offer"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-vflex home-two-offer-text"}>
            <div
              data-motion-id={"96645ce7-a58f-669a-a10d-291fbaae30d0"}
              className={"small-heading"}
            >
              {"what we Offer"}
            </div>
            <h2
              data-motion-id={"82d4faca-aff1-c62e-31ee-7d6adf9d84e3"}
              className={"heading-two-gap-updown text-white"}
            >
              {"Personalized learning for your ambitions"}
            </h2>
            <p
              data-motion-id={"acd73731-e922-9022-f446-660acbf9023f"}
              className={"offer-description"}
            >
              {
                "Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut."
              }
            </p>
            <div>
              <SiteLink
                data-motion-id={"d2419891-9f36-e25c-7c72-b1716c5d291d"}
                href={"/course-one"}
                className={"button button-yellow w-inline-block"}
              >
                <div>{"Get Course "}</div>
              </SiteLink>
            </div>
          </div>
        </div>
      </section>
      <section className={"clients-two"}>
        <div
          data-motion-id={"90e82947-de64-495b-8669-2144522f35d4"}
          className={"w-layout-blockcontainer container w-container"}
        >
          <div className={"w-layout-vflex clients-two-main"}>
            <p className={"text-dark no-margin-bottom"}>
              {"Learn from 350+ leading universities and companies with us"}
            </p>
            <div className={"w-layout-hflex clients-two-marquee-wrap"}>
              <div className={"w-layout-hflex clients-train"}>
                <img
                  src={
                    "/assets/cb421327-66cff2747e50749c4b90b49e_Client-Icon-Black.svg"
                  }
                  loading={"lazy"}
                  width={"153"}
                  height={"51"}
                  alt={"Clients"}
                  className={"clients-logo"}
                />
                <img
                  src={
                    "/assets/43fbf473-66cff274f86ce33e074f03d9_Client-Icon-Black-2.svg"
                  }
                  loading={"lazy"}
                  width={"131"}
                  height={"54"}
                  alt={"Clients"}
                  className={"clients-logo"}
                />
                <img
                  src={
                    "/assets/957ca751-66cff274cdd4c2243b9ba268_Client-Icon-Black-3.svg"
                  }
                  loading={"lazy"}
                  width={"163"}
                  height={"52"}
                  alt={"Clients"}
                  className={"clients-logo"}
                />
                <img
                  src={
                    "/assets/4025f3e4-66cff274e855d20c26ff2fba_Client-Icon-Black-4.svg"
                  }
                  loading={"lazy"}
                  width={"98"}
                  height={"51"}
                  alt={"Clients"}
                  className={"clients-logo"}
                />
                <img
                  src={
                    "/assets/9978a61c-66cff274d9213b6ef2e8640e_Client-Icon-Black-5.svg"
                  }
                  loading={"lazy"}
                  width={"66"}
                  height={"53"}
                  alt={"Clients"}
                  className={"clients-logo"}
                />
                <img
                  src={
                    "/assets/75d79da4-66cff274d9213b6ef2e86488_Client-Icon-Black-6.svg"
                  }
                  loading={"lazy"}
                  width={"160"}
                  height={"52"}
                  alt={"Clients"}
                  className={"clients-logo"}
                />
              </div>
              <div className={"w-layout-hflex clients-train"}>
                <img
                  src={
                    "/assets/cb421327-66cff2747e50749c4b90b49e_Client-Icon-Black.svg"
                  }
                  loading={"lazy"}
                  width={"153"}
                  height={"51"}
                  alt={"Clients"}
                  className={"clients-logo"}
                />
                <img
                  src={
                    "/assets/43fbf473-66cff274f86ce33e074f03d9_Client-Icon-Black-2.svg"
                  }
                  loading={"lazy"}
                  width={"131"}
                  height={"54"}
                  alt={"Clients"}
                  className={"clients-logo"}
                />
                <img
                  src={
                    "/assets/957ca751-66cff274cdd4c2243b9ba268_Client-Icon-Black-3.svg"
                  }
                  loading={"lazy"}
                  width={"163"}
                  height={"52"}
                  alt={"Clients"}
                  className={"clients-logo"}
                />
                <img
                  src={
                    "/assets/4025f3e4-66cff274e855d20c26ff2fba_Client-Icon-Black-4.svg"
                  }
                  loading={"lazy"}
                  width={"98"}
                  height={"51"}
                  alt={"Clients"}
                  className={"clients-logo"}
                />
                <img
                  src={
                    "/assets/9978a61c-66cff274d9213b6ef2e8640e_Client-Icon-Black-5.svg"
                  }
                  loading={"lazy"}
                  width={"66"}
                  height={"53"}
                  alt={"Clients"}
                  className={"clients-logo"}
                />
                <img
                  src={
                    "/assets/75d79da4-66cff274d9213b6ef2e86488_Client-Icon-Black-6.svg"
                  }
                  loading={"lazy"}
                  width={"160"}
                  height={"52"}
                  alt={"Clients"}
                  className={"clients-logo"}
                />
              </div>
              <div className={"w-layout-hflex clients-train"}>
                <img
                  src={
                    "/assets/cb421327-66cff2747e50749c4b90b49e_Client-Icon-Black.svg"
                  }
                  loading={"lazy"}
                  width={"153"}
                  height={"51"}
                  alt={"Clients"}
                  className={"clients-logo"}
                />
                <img
                  src={
                    "/assets/43fbf473-66cff274f86ce33e074f03d9_Client-Icon-Black-2.svg"
                  }
                  loading={"lazy"}
                  width={"131"}
                  height={"54"}
                  alt={"Clients"}
                  className={"clients-logo"}
                />
                <img
                  src={
                    "/assets/957ca751-66cff274cdd4c2243b9ba268_Client-Icon-Black-3.svg"
                  }
                  loading={"lazy"}
                  width={"163"}
                  height={"52"}
                  alt={"Clients"}
                  className={"clients-logo"}
                />
                <img
                  src={
                    "/assets/4025f3e4-66cff274e855d20c26ff2fba_Client-Icon-Black-4.svg"
                  }
                  loading={"lazy"}
                  width={"98"}
                  height={"51"}
                  alt={"Clients"}
                  className={"clients-logo"}
                />
                <img
                  src={
                    "/assets/9978a61c-66cff274d9213b6ef2e8640e_Client-Icon-Black-5.svg"
                  }
                  loading={"lazy"}
                  width={"66"}
                  height={"53"}
                  alt={"Clients"}
                  className={"clients-logo"}
                />
                <img
                  src={
                    "/assets/75d79da4-66cff274d9213b6ef2e86488_Client-Icon-Black-6.svg"
                  }
                  loading={"lazy"}
                  width={"160"}
                  height={"52"}
                  alt={"Clients"}
                  className={"clients-logo"}
                />
              </div>
              <div className={"clients-overlay-one white-overlays"}></div>
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
      <section className={"home-two-blog"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-vflex home-two-blog-main"}>
            <div
              data-motion-id={"a5ff96f1-0b24-9a8e-5c74-a45508423d0b"}
              className={"small-heading text-dark"}
            >
              {"Education Blog"}
            </div>
            <h2
              data-motion-id={"67d6b3be-da40-f14d-5dfc-8bd8295230ed"}
              className={"heading-two-gap-updown text-align-center"}
            >
              {"Our news and ideas"}
            </h2>
            <p
              data-motion-id={"67d6b3be-da40-f14d-5dfc-8bd8295230ef"}
              className={"home-two-blog-description"}
            >
              {
                "Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus venenatis donec mattis."
              }
            </p>
            <div className={"home-two-blog-box w-dyn-list"}>
              <div
                role={"list"}
                className={"home-two-blog-wrapper w-dyn-items"}
              >
                <div role={"listitem"} className={"w-dyn-item"}>
                  <SiteLink
                    data-motion-id={"67d6b3be-da40-f14d-5dfc-8bd8295230f4"}
                    href={
                      "/blog-posts/improve-knowledge-retention-with-visual-learning"
                    }
                    className={"home-two-blog-cards w-inline-block"}
                  >
                    <div className={"overflow-hidden"}>
                      <img
                        src={
                          "/assets/44aef23a-66ff7196253a4813606a5f52_Blog-Small-Thumbnail-12.webp"
                        }
                        loading={"lazy"}
                        width={"410"}
                        height={"296"}
                        alt={"Blog Image"}
                        sizes={"(max-width: 479px) 100vw, 410px"}
                        srcSet={
                          "/assets/ace4bd8e-66ff7196253a4813606a5f52_Blog-Small-Thumbnail-12-p-500.webp 500w, /assets/96d3ab1c-66ff7196253a4813606a5f52_Blog-Small-Thumbnail-12-p-800.webp 800w, /assets/44aef23a-66ff7196253a4813606a5f52_Blog-Small-Thumbnail-12.webp 820w"
                        }
                        className={"blog-cards-image"}
                      />
                    </div>
                    <div className={"home-two-blog-cards-details"}>
                      <div className={"small-shot-heading"}>{"Career"}</div>
                      <div className={"heading-five"}>
                        {"Improve knowledge retention with visual learning"}
                      </div>
                      <div>{"October 4, 2024"}</div>
                    </div>
                  </SiteLink>
                </div>
                <div role={"listitem"} className={"w-dyn-item"}>
                  <SiteLink
                    data-motion-id={"67d6b3be-da40-f14d-5dfc-8bd8295230f4"}
                    href={
                      "/blog-posts/master-online-learning-with-proven-strategies"
                    }
                    className={"home-two-blog-cards w-inline-block"}
                  >
                    <div className={"overflow-hidden"}>
                      <img
                        src={
                          "/assets/f61a99fe-66ff6e0a6f9b375fbca970fe_Blog-Small-Thumbnail-11.webp"
                        }
                        loading={"lazy"}
                        width={"410"}
                        height={"296"}
                        alt={"Blog Image"}
                        sizes={"(max-width: 479px) 100vw, 410px"}
                        srcSet={
                          "/assets/71d83ea7-66ff6e0a6f9b375fbca970fe_Blog-Small-Thumbnail-11-p-500.webp 500w, /assets/ed7bc32b-66ff6e0a6f9b375fbca970fe_Blog-Small-Thumbnail-11-p-800.webp 800w, /assets/f61a99fe-66ff6e0a6f9b375fbca970fe_Blog-Small-Thumbnail-11.webp 820w"
                        }
                        className={"blog-cards-image"}
                      />
                    </div>
                    <div className={"home-two-blog-cards-details"}>
                      <div className={"small-shot-heading"}>
                        {"Development"}
                      </div>
                      <div className={"heading-five"}>
                        {"Master online learning with proven strategies"}
                      </div>
                      <div>{"October 4, 2024"}</div>
                    </div>
                  </SiteLink>
                </div>
                <div role={"listitem"} className={"w-dyn-item"}>
                  <SiteLink
                    data-motion-id={"67d6b3be-da40-f14d-5dfc-8bd8295230f4"}
                    href={
                      "/blog-posts/how-to-enhance-your-learning-experience-today"
                    }
                    className={"home-two-blog-cards w-inline-block"}
                  >
                    <div className={"overflow-hidden"}>
                      <img
                        src={
                          "/assets/5b3d28ab-66ff6a72dd07492f0cbb0a6d_Blog-Small-Thumbnail-10.webp"
                        }
                        loading={"lazy"}
                        width={"410"}
                        height={"296"}
                        alt={"Blog Image"}
                        sizes={"(max-width: 479px) 100vw, 410px"}
                        srcSet={
                          "/assets/c51dc3fe-66ff6a72dd07492f0cbb0a6d_Blog-Small-Thumbnail-10-p-500.webp 500w, /assets/9a6e9559-66ff6a72dd07492f0cbb0a6d_Blog-Small-Thumbnail-10-p-800.webp 800w, /assets/5b3d28ab-66ff6a72dd07492f0cbb0a6d_Blog-Small-Thumbnail-10.webp 820w"
                        }
                        className={"blog-cards-image"}
                      />
                    </div>
                    <div className={"home-two-blog-cards-details"}>
                      <div className={"small-shot-heading"}>{"Teaching"}</div>
                      <div className={"heading-five"}>
                        {"How to enhance your learning experience today"}
                      </div>
                      <div>{"October 3, 2024"}</div>
                    </div>
                  </SiteLink>
                </div>
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
