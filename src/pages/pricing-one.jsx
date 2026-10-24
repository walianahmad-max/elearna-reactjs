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
      <section className={"pricing-one-hero"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-vflex pricing-one-hero-main"}>
            <div
              data-motion-id={"96645ce7-a58f-669a-a10d-291fbaae30d0"}
              className={"small-heading"}
            >
              {"Pricing"}
            </div>
            <h1
              data-motion-id={"b38fca23-53e3-1cb9-9bad-a934d07122e2"}
              className={"heading-one-top-gap pricing-one-hero-heading"}
            >
              {"Flexible pricing plan for every one"}
            </h1>
          </div>
        </div>
      </section>
      <section className={"pricing-one-cards"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div
            data-motion-id={"42964069-8c7d-ff35-6799-97e0176dbb2b"}
            className={"w-layout-hflex pricing-one-toggle-box"}
          >
            <div className={"small-heading text-dark"}>{"Monthly"}</div>
            <div
              data-motion-id={"42964069-8c7d-ff35-6799-97e0176dbb2e"}
              className={"toggle-box"}
            >
              <div
                style={{
                  transform:
                    "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                }}
                className={"toggle-ball"}
              ></div>
            </div>
            <div className={"small-heading text-dark"}>{"Yearly"}</div>
          </div>
          <div className={"pricing-one-cards-wrapper"}>
            <div
              data-motion-id={"42964069-8c7d-ff35-6799-97e0176dbb35"}
              className={"w-layout-vflex pricing-one-card"}
            >
              <div className={"heading-five margin-bottom-twenty-five"}>
                {"Basic"}
              </div>
              <p className={"margin-bottom-thirty"}>
                {"Lorem ipsum dolor sit amet consectetur erat ipsum non."}
              </p>
              <div className={"amount-wrapper"}>
                <div style={{ opacity: "1" }} className={"monthly-amount"}>
                  <div className={"heading-three"}>
                    {"$199"}
                    <span className={"small-body-font"}>{"/month"}</span>
                  </div>
                </div>
                <div className={"yearly-amount"}>
                  <div className={"heading-three"}>
                    {"$139"}
                    <span className={"small-body-font"}>{"/month"}</span>
                  </div>
                </div>
              </div>
              <div className={"pricing-one-check-points"}>
                <div className={"w-layout-hflex pricing-one-points"}>
                  <img
                    src={
                      "/assets/79e2e389-66e126a8745c48b34dd303f6_Pricing-Check.svg"
                    }
                    loading={"lazy"}
                    alt={"Check Icon"}
                  />
                  <div>{"Access to 10+ top courses"}</div>
                </div>
                <div className={"w-layout-hflex pricing-one-points"}>
                  <img
                    src={
                      "/assets/79e2e389-66e126a8745c48b34dd303f6_Pricing-Check.svg"
                    }
                    loading={"lazy"}
                    alt={"Check Icon"}
                  />
                  <div>{"Certification prep"}</div>
                </div>
                <div className={"w-layout-hflex pricing-one-points"}>
                  <img
                    src={
                      "/assets/79e2e389-66e126a8745c48b34dd303f6_Pricing-Check.svg"
                    }
                    loading={"lazy"}
                    alt={"Check Icon"}
                  />
                  <div>{"Customizable content"}</div>
                </div>
                <div className={"w-layout-hflex pricing-one-points"}>
                  <img
                    src={
                      "/assets/79e2e389-66e126a8745c48b34dd303f6_Pricing-Check.svg"
                    }
                    loading={"lazy"}
                    alt={"Check Icon"}
                  />
                  <div>{"AI-powered coding exercises"}</div>
                </div>
              </div>
              <div className={"pricing-box-one-button"}>
                <SiteLink
                  data-motion-id={"554bdb09-166f-7496-ccbc-6402fc45feda"}
                  href={"/contact-one"}
                  className={"button button-border-off w-inline-block"}
                >
                  <div>{"Subscribe this plan"}</div>
                </SiteLink>
              </div>
            </div>
            <div
              data-motion-id={"0f5207e2-e65a-af74-8093-5497864fd0e7"}
              className={"w-layout-vflex pricing-one-card"}
            >
              <div className={"heading-five margin-bottom-twenty-five"}>
                {"Standard"}
              </div>
              <p className={"margin-bottom-thirty"}>
                {"Lorem ipsum dolor sit amet consectetur erat ipsum non."}
              </p>
              <div className={"amount-wrapper"}>
                <div style={{ opacity: "1" }} className={"monthly-amount"}>
                  <div className={"heading-three"}>
                    {"$299"}
                    <span className={"small-body-font"}>{"/month"}</span>
                  </div>
                </div>
                <div className={"yearly-amount"}>
                  <div className={"heading-three"}>
                    {"$279"}
                    <span className={"small-body-font"}>{"/month"}</span>
                  </div>
                </div>
              </div>
              <div className={"pricing-one-check-points"}>
                <div className={"w-layout-hflex pricing-one-points"}>
                  <img
                    src={
                      "/assets/79e2e389-66e126a8745c48b34dd303f6_Pricing-Check.svg"
                    }
                    loading={"lazy"}
                    alt={"Check Icon"}
                  />
                  <div>{"Access to 30+ top courses"}</div>
                </div>
                <div className={"w-layout-hflex pricing-one-points"}>
                  <img
                    src={
                      "/assets/79e2e389-66e126a8745c48b34dd303f6_Pricing-Check.svg"
                    }
                    loading={"lazy"}
                    alt={"Check Icon"}
                  />
                  <div>{"Certification prep"}</div>
                </div>
                <div className={"w-layout-hflex pricing-one-points"}>
                  <img
                    src={
                      "/assets/79e2e389-66e126a8745c48b34dd303f6_Pricing-Check.svg"
                    }
                    loading={"lazy"}
                    alt={"Check Icon"}
                  />
                  <div>{"Customizable content"}</div>
                </div>
                <div className={"w-layout-hflex pricing-one-points"}>
                  <img
                    src={
                      "/assets/79e2e389-66e126a8745c48b34dd303f6_Pricing-Check.svg"
                    }
                    loading={"lazy"}
                    alt={"Check Icon"}
                  />
                  <div>{"AI-powered coding exercises"}</div>
                </div>
              </div>
              <div className={"pricing-box-one-button"}>
                <SiteLink
                  data-motion-id={"554bdb09-166f-7496-ccbc-6402fc45feda"}
                  href={"/contact-one"}
                  className={"button button-border-off w-inline-block"}
                >
                  <div>{"Subscribe this plan"}</div>
                </SiteLink>
              </div>
            </div>
            <div
              data-motion-id={"42964069-8c7d-ff35-6799-97e0176dbb59"}
              className={"w-layout-vflex pricing-one-card pricing-dark-card"}
            >
              <div className={"pricing-cards-top-border"}></div>
              <div
                className={"heading-five margin-bottom-twenty-five text-white"}
              >
                {"Premium"}
              </div>
              <p className={"margin-bottom-thirty-five text-light-white"}>
                {"Lorem ipsum dolor sit amet consectetur erat ipsum non."}
              </p>
              <div className={"amount-wrapper"}>
                <div style={{ opacity: "1" }} className={"monthly-amount"}>
                  <div className={"heading-three text-white"}>
                    {"$699"}
                    <span className={"small-body-font text-light-white"}>
                      {"/month"}
                    </span>
                  </div>
                </div>
                <div className={"yearly-amount"}>
                  <div className={"heading-three text-white"}>
                    {"$659"}
                    <span className={"small-body-font text-light-white"}>
                      {"/month"}
                    </span>
                  </div>
                </div>
              </div>
              <div className={"pricing-one-check-points"}>
                <div className={"w-layout-hflex pricing-one-points"}>
                  <img
                    src={
                      "/assets/79e2e389-66e126a8745c48b34dd303f6_Pricing-Check.svg"
                    }
                    loading={"lazy"}
                    alt={"Check Icon"}
                  />
                  <div className={"text-light-white"}>
                    {"Access to 50+ top courses"}
                  </div>
                </div>
                <div className={"w-layout-hflex pricing-one-points"}>
                  <img
                    src={
                      "/assets/79e2e389-66e126a8745c48b34dd303f6_Pricing-Check.svg"
                    }
                    loading={"lazy"}
                    alt={"Check Icon"}
                  />
                  <div className={"text-light-white"}>
                    {"Certification prep"}
                  </div>
                </div>
                <div className={"w-layout-hflex pricing-one-points"}>
                  <img
                    src={
                      "/assets/79e2e389-66e126a8745c48b34dd303f6_Pricing-Check.svg"
                    }
                    loading={"lazy"}
                    alt={"Check Icon"}
                  />
                  <div className={"text-light-white"}>
                    {"Customizable content"}
                  </div>
                </div>
                <div className={"w-layout-hflex pricing-one-points"}>
                  <img
                    src={
                      "/assets/79e2e389-66e126a8745c48b34dd303f6_Pricing-Check.svg"
                    }
                    loading={"lazy"}
                    alt={"Check Icon"}
                  />
                  <div className={"text-light-white"}>
                    {"AI-powered coding exercises"}
                  </div>
                </div>
                <div className={"w-layout-hflex pricing-one-points"}>
                  <img
                    src={
                      "/assets/79e2e389-66e126a8745c48b34dd303f6_Pricing-Check.svg"
                    }
                    loading={"lazy"}
                    alt={"Check Icon"}
                  />
                  <div className={"text-light-white"}>
                    {"Analytics and adoption reports"}
                  </div>
                </div>
              </div>
              <div className={"pricing-box-one-button"}>
                <SiteLink
                  data-motion-id={"d2419891-9f36-e25c-7c72-b1716c5d291d"}
                  href={"/contact-two"}
                  className={"button button-yellow w-inline-block"}
                >
                  <div>{"Subscribe this plan "}</div>
                </SiteLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"clients"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-vflex clients-main"}>
            <p
              data-motion-id={"1e12d122-f38e-07ce-3128-25aed7067c88"}
              className={"text-dark margin-bottom-twenty-five clients-top"}
            >
              {"Learn from 350+ leading universities and companies with us"}
            </p>
            <div
              data-motion-id={"1e12d122-f38e-07ce-3128-25aed7067c8a"}
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
              <div className={"clients-overlay-one"}></div>
            </div>
          </div>
        </div>
      </section>
      <section className={"pricing-one-comparision-section"}>
        <div
          className={
            "w-layout-blockcontainer container position-relative w-container"
          }
        >
          <div
            className={
              "w-layout-vflex pricing-one-hero-heading-wrapper overflow-hidden"
            }
          >
            <h2
              data-motion-id={"0830695f-249f-c713-e755-1ef44f9b25d1"}
              className={"no-margin-top text-center margin-bottom-twenty"}
            >
              {"Pricing "}
              <span>{"comparison"}</span>
            </h2>
            <p
              data-motion-id={"0830695f-249f-c713-e755-1ef44f9b25d5"}
              className={"pricing-one-hero-description margin-bottom-twenty"}
            >
              {
                "Distracted by the readable content of a page when looking at its point of using that it has a more  many desktop."
              }
            </p>
          </div>
          <div>
            <div className={"w-layout-hflex pricing-table-row"}>
              <div className={"table-left-column"}></div>
              <div
                className={
                  "w-layout-grid pricing-right-column pricing-top-column"
                }
              >
                <div
                  id={"w-node-_0830695f-249f-c713-e755-1ef44f9b25dc-518d1f23"}
                  className={"w-layout-vflex pricing-table-top-wrapper"}
                >
                  <div className={"heading-five plan-name"}>{"Basic plan"}</div>
                  <div className={"heading-three plan-pricing"}>
                    <sup className={"superscript"}>{"$"}</sup>
                    {"199"}
                    <span className={"small-body-font pricing-month"}>
                      {"/ month"}
                    </span>
                  </div>
                  <div className={"mobile-body-small"}>
                    {"No "}
                    <span>{"credit card"}</span>
                    {" required."}
                  </div>
                </div>
                <div
                  id={"w-node-_0830695f-249f-c713-e755-1ef44f9b25ea-518d1f23"}
                  className={
                    "w-layout-vflex pricing-table-top-wrapper starter-plan cell-background-dark"
                  }
                >
                  <div className={"heading-five text-white plan-name"}>
                    {"Starter plan"}
                  </div>
                  <div className={"heading-three text-white plan-pricing"}>
                    <sup className={"superscript"}>{"$"}</sup>
                    {"299"}
                    <span className={"small-body-font pricing-month"}>
                      {"/ month"}
                    </span>
                  </div>
                  <div className={"text-light-white mobile-body-small"}>
                    {"No "}
                    <span>{"credit card"}</span>
                    {" required."}
                  </div>
                </div>
                <div
                  id={"w-node-_0830695f-249f-c713-e755-1ef44f9b25f8-518d1f23"}
                  className={"w-layout-vflex pricing-table-top-wrapper"}
                >
                  <div className={"heading-five plan-name"}>
                    {"Platinum plan"}
                  </div>
                  <div className={"heading-three plan-pricing"}>
                    <sup className={"superscript"}>{"$"}</sup>
                    {"399"}
                    <span className={"small-body-font pricing-month"}>
                      {"/ month"}
                    </span>
                  </div>
                  <div className={"mobile-body-small"}>
                    {"No "}
                    <span>{"credit card"}</span>
                    {" required."}
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                "w-layout-hflex pricing-table-row middle-row row-background-dark"
              }
            >
              <div className={"heading-six"}>{"Access to 30+ top courses"}</div>
              <div className={"w-layout-grid pricing-right-column"}>
                <div
                  id={"w-node-_0830695f-249f-c713-e755-1ef44f9b260a-518d1f23"}
                  className={"pricing-table-icon-wrapper"}
                >
                  <img
                    width={"20"}
                    height={"20"}
                    alt={"Icon"}
                    src={
                      "/assets/42cd1034-66fa5eee841c6e46c0a6cc82_Black-Tick.svg"
                    }
                    loading={"lazy"}
                  />
                </div>
                <div
                  id={"w-node-_0830695f-249f-c713-e755-1ef44f9b260c-518d1f23"}
                  className={
                    "pricing-table-icon-wrapper starter-plan-cell-background"
                  }
                >
                  <img
                    width={"20"}
                    height={"20"}
                    alt={"Icons"}
                    src={
                      "/assets/81933cf5-66fa5fdb154fc273901a471a_Yellow-Tick-2.svg"
                    }
                    loading={"lazy"}
                  />
                </div>
                <div
                  id={"w-node-_0830695f-249f-c713-e755-1ef44f9b260e-518d1f23"}
                  className={"pricing-table-icon-wrapper"}
                >
                  <img
                    width={"20"}
                    height={"20"}
                    alt={"Icon"}
                    src={
                      "/assets/42cd1034-66fa5eee841c6e46c0a6cc82_Black-Tick.svg"
                    }
                    loading={"lazy"}
                  />
                </div>
              </div>
            </div>
            <div className={"w-layout-hflex pricing-table-row middle-row"}>
              <div className={"heading-six"}>{"Certification prep"}</div>
              <div className={"w-layout-grid pricing-right-column"}>
                <div
                  id={"w-node-_0830695f-249f-c713-e755-1ef44f9b2614-518d1f23"}
                  className={"pricing-table-icon-wrapper"}
                >
                  <img
                    width={"20"}
                    height={"20"}
                    alt={"Icon"}
                    src={
                      "/assets/42cd1034-66fa5eee841c6e46c0a6cc82_Black-Tick.svg"
                    }
                    loading={"lazy"}
                  />
                </div>
                <div
                  id={"w-node-_0830695f-249f-c713-e755-1ef44f9b2616-518d1f23"}
                  className={
                    "pricing-table-icon-wrapper starter-plan-cell-background"
                  }
                >
                  <img
                    width={"20"}
                    height={"20"}
                    alt={"Icons"}
                    src={
                      "/assets/81933cf5-66fa5fdb154fc273901a471a_Yellow-Tick-2.svg"
                    }
                    loading={"lazy"}
                  />
                </div>
                <div
                  id={"w-node-_0830695f-249f-c713-e755-1ef44f9b2618-518d1f23"}
                  className={"pricing-table-icon-wrapper"}
                >
                  <img
                    width={"20"}
                    height={"20"}
                    alt={"Icon"}
                    src={
                      "/assets/42cd1034-66fa5eee841c6e46c0a6cc82_Black-Tick.svg"
                    }
                    loading={"lazy"}
                  />
                </div>
              </div>
            </div>
            <div
              className={
                "w-layout-hflex pricing-table-row middle-row row-background-dark"
              }
            >
              <div className={"heading-six"}>{"Customizable content"}</div>
              <div className={"w-layout-grid pricing-right-column"}>
                <div
                  id={"w-node-_0830695f-249f-c713-e755-1ef44f9b261e-518d1f23"}
                  className={"pricing-table-icon-wrapper"}
                >
                  <img
                    width={"20"}
                    height={"20"}
                    alt={"Icon"}
                    src={
                      "/assets/42cd1034-66fa5eee841c6e46c0a6cc82_Black-Tick.svg"
                    }
                    loading={"lazy"}
                  />
                </div>
                <div
                  id={"w-node-_0830695f-249f-c713-e755-1ef44f9b2620-518d1f23"}
                  className={
                    "pricing-table-icon-wrapper starter-plan-cell-background"
                  }
                >
                  <img
                    width={"20"}
                    height={"20"}
                    alt={"Icons"}
                    src={
                      "/assets/81933cf5-66fa5fdb154fc273901a471a_Yellow-Tick-2.svg"
                    }
                    loading={"lazy"}
                  />
                </div>
                <div
                  id={"w-node-_0830695f-249f-c713-e755-1ef44f9b2622-518d1f23"}
                  className={"pricing-table-icon-wrapper"}
                >
                  <img
                    width={"20"}
                    height={"20"}
                    alt={"Icon"}
                    src={
                      "/assets/42cd1034-66fa5eee841c6e46c0a6cc82_Black-Tick.svg"
                    }
                    loading={"lazy"}
                  />
                </div>
              </div>
            </div>
            <div className={"w-layout-hflex pricing-table-row middle-row"}>
              <div className={"heading-six name-in-two-line"}>
                {"AI-powered coding exercises"}
              </div>
              <div className={"w-layout-grid pricing-right-column"}>
                <div
                  id={"w-node-_0830695f-249f-c713-e755-1ef44f9b2628-518d1f23"}
                  className={"pricing-table-icon-wrapper"}
                >
                  <img
                    width={"20"}
                    height={"20"}
                    alt={"Icon"}
                    src={
                      "/assets/42cd1034-66fa5eee841c6e46c0a6cc82_Black-Tick.svg"
                    }
                    loading={"lazy"}
                  />
                </div>
                <div
                  id={"w-node-_0830695f-249f-c713-e755-1ef44f9b262a-518d1f23"}
                  className={
                    "pricing-table-icon-wrapper starter-plan-cell-background"
                  }
                >
                  <img
                    width={"20"}
                    height={"20"}
                    alt={"Icons"}
                    src={
                      "/assets/81933cf5-66fa5fdb154fc273901a471a_Yellow-Tick-2.svg"
                    }
                    loading={"lazy"}
                  />
                </div>
                <div
                  id={"w-node-_0830695f-249f-c713-e755-1ef44f9b262d-518d1f23"}
                  className={"pricing-table-icon-wrapper"}
                >
                  <img
                    width={"20"}
                    height={"20"}
                    alt={"Icon"}
                    src={
                      "/assets/42cd1034-66fa5eee841c6e46c0a6cc82_Black-Tick.svg"
                    }
                    loading={"lazy"}
                  />
                </div>
              </div>
            </div>
            <div
              className={
                "w-layout-hflex pricing-table-row middle-row row-background-dark"
              }
            >
              <div className={"heading-six name-in-two-line"}>
                {"Analytics and adoption reports"}
              </div>
              <div className={"w-layout-grid pricing-right-column"}>
                <div
                  id={"w-node-_0830695f-249f-c713-e755-1ef44f9b2634-518d1f23"}
                  className={"pricing-table-icon-wrapper"}
                >
                  <img
                    width={"20"}
                    height={"20"}
                    alt={"Icon"}
                    src={
                      "/assets/f34564ba-66fa5ee479968b11ee95d851_Black-Cross.svg"
                    }
                    loading={"lazy"}
                  />
                </div>
                <div
                  id={"w-node-_0830695f-249f-c713-e755-1ef44f9b2637-518d1f23"}
                  className={
                    "pricing-table-icon-wrapper starter-plan-cell-background"
                  }
                >
                  <img
                    width={"20"}
                    height={"20"}
                    alt={"Icon"}
                    src={
                      "/assets/adbfc97d-66fa602acdbfb6bf9b03f6b3_Yellow-Cross-Icon.svg"
                    }
                    loading={"lazy"}
                  />
                </div>
                <div
                  id={"w-node-_0830695f-249f-c713-e755-1ef44f9b2639-518d1f23"}
                  className={"pricing-table-icon-wrapper"}
                >
                  <img
                    width={"20"}
                    height={"20"}
                    alt={"Icon"}
                    src={
                      "/assets/42cd1034-66fa5eee841c6e46c0a6cc82_Black-Tick.svg"
                    }
                    loading={"lazy"}
                  />
                </div>
              </div>
            </div>
            <div className={"w-layout-hflex pricing-table-row middle-row"}>
              <div className={"heading-six"}>{"24/7 customer support"}</div>
              <div className={"w-layout-grid pricing-right-column"}>
                <div
                  id={"w-node-_0830695f-249f-c713-e755-1ef44f9b263f-518d1f23"}
                  className={"pricing-table-icon-wrapper"}
                >
                  <img
                    width={"20"}
                    height={"20"}
                    alt={"Icon"}
                    src={
                      "/assets/f34564ba-66fa5ee479968b11ee95d851_Black-Cross.svg"
                    }
                    loading={"lazy"}
                  />
                </div>
                <div
                  id={"w-node-_0830695f-249f-c713-e755-1ef44f9b2641-518d1f23"}
                  className={
                    "pricing-table-icon-wrapper starter-plan-cell-background"
                  }
                >
                  <img
                    width={"20"}
                    height={"20"}
                    alt={"Icon"}
                    src={
                      "/assets/adbfc97d-66fa602acdbfb6bf9b03f6b3_Yellow-Cross-Icon.svg"
                    }
                    loading={"lazy"}
                  />
                </div>
                <div
                  id={"w-node-_0830695f-249f-c713-e755-1ef44f9b2643-518d1f23"}
                  className={"pricing-table-icon-wrapper"}
                >
                  <img
                    width={"20"}
                    height={"20"}
                    alt={"Icon"}
                    src={
                      "/assets/42cd1034-66fa5eee841c6e46c0a6cc82_Black-Tick.svg"
                    }
                    loading={"lazy"}
                  />
                </div>
              </div>
            </div>
            <div
              className={
                "w-layout-hflex pricing-table-row middle-row row-background-dark"
              }
            >
              <div className={"heading-six"}>{"Instructor Q&A"}</div>
              <div className={"w-layout-grid pricing-right-column"}>
                <div
                  id={"w-node-_51319b82-53d1-c423-74c8-52f426140019-518d1f23"}
                  className={"pricing-table-icon-wrapper"}
                >
                  <img
                    width={"20"}
                    height={"20"}
                    alt={"Icon"}
                    src={
                      "/assets/42cd1034-66fa5eee841c6e46c0a6cc82_Black-Tick.svg"
                    }
                    loading={"lazy"}
                  />
                </div>
                <div
                  id={"w-node-_51319b82-53d1-c423-74c8-52f42614001b-518d1f23"}
                  className={
                    "pricing-table-icon-wrapper starter-plan-cell-background"
                  }
                >
                  <img
                    width={"20"}
                    height={"20"}
                    alt={"Icons"}
                    src={
                      "/assets/81933cf5-66fa5fdb154fc273901a471a_Yellow-Tick-2.svg"
                    }
                    loading={"lazy"}
                  />
                </div>
                <div
                  id={"w-node-_51319b82-53d1-c423-74c8-52f42614001d-518d1f23"}
                  className={"pricing-table-icon-wrapper"}
                >
                  <img
                    width={"20"}
                    height={"20"}
                    alt={"Icon"}
                    src={
                      "/assets/42cd1034-66fa5eee841c6e46c0a6cc82_Black-Tick.svg"
                    }
                    loading={"lazy"}
                  />
                </div>
              </div>
            </div>
            <div className={"w-layout-hflex pricing-table-row middle-row"}>
              <div className={"heading-six"}>{"Skills assessments"}</div>
              <div className={"w-layout-grid pricing-right-column"}>
                <div
                  id={"w-node-_0830695f-249f-c713-e755-1ef44f9b2656-518d1f23"}
                  className={"pricing-table-icon-wrapper"}
                >
                  <img
                    width={"20"}
                    height={"20"}
                    alt={"Icon"}
                    src={
                      "/assets/f34564ba-66fa5ee479968b11ee95d851_Black-Cross.svg"
                    }
                    loading={"lazy"}
                  />
                </div>
                <div
                  id={"w-node-_0830695f-249f-c713-e755-1ef44f9b2658-518d1f23"}
                  className={
                    "pricing-table-icon-wrapper starter-plan-cell-background"
                  }
                >
                  <img
                    width={"20"}
                    height={"20"}
                    alt={"Icons"}
                    src={
                      "/assets/81933cf5-66fa5fdb154fc273901a471a_Yellow-Tick-2.svg"
                    }
                    loading={"lazy"}
                  />
                </div>
                <div
                  id={"w-node-_0830695f-249f-c713-e755-1ef44f9b265a-518d1f23"}
                  className={"pricing-table-icon-wrapper"}
                >
                  <img
                    width={"20"}
                    height={"20"}
                    alt={"Icon"}
                    src={
                      "/assets/42cd1034-66fa5eee841c6e46c0a6cc82_Black-Tick.svg"
                    }
                    loading={"lazy"}
                  />
                </div>
              </div>
            </div>
            <div
              className={
                "w-layout-hflex pricing-table-row middle-row tab-display-off"
              }
            >
              <div
                id={"w-node-a986e90b-8dfe-bd14-7f2a-c935215c2f98-518d1f23"}
                className={"pricing-table-icon-wrapper pricing-last-cell"}
              ></div>
              <div className={"w-layout-grid pricing-right-column"}>
                <div
                  id={"w-node-a986e90b-8dfe-bd14-7f2a-c935215c2f9c-518d1f23"}
                  className={"pricing-table-icon-wrapper pricing-last-cell"}
                ></div>
                <div
                  id={"w-node-a986e90b-8dfe-bd14-7f2a-c935215c2f9a-518d1f23"}
                  className={
                    "pricing-table-icon-wrapper starter-plan-cell-background pricing-last-cell"
                  }
                ></div>
                <div
                  id={"w-node-_53018dd6-c0ce-1452-f452-5c0bd5894555-518d1f23"}
                  className={"pricing-table-icon-wrapper pricing-last-cell"}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"contact-two-faq"}>
        <div
          className={"w-layout-blockcontainer faq-inner-container w-container"}
        >
          <div className={"w-layout-hflex faq-top-wrapper"}>
            <img
              data-motion-id={"4d5e66a2-6b2d-ddc8-d0ad-ca52bfa0df62"}
              src={"/assets/a2acb57f-66de9b24cdbecf88f8d1b2da_FAQ-Icons.svg"}
              loading={"lazy"}
              width={"263"}
              height={"247"}
              alt={"FAQ Icons"}
            />
            <div className={"w-layout-vflex faq-top-text"}>
              <div
                data-motion-id={"a5ff96f1-0b24-9a8e-5c74-a45508423d0b"}
                className={"small-heading text-dark"}
              >
                {"Contact Us"}
              </div>
              <h2
                data-motion-id={"4d5e66a2-6b2d-ddc8-d0ad-ca52bfa0df66"}
                className={"heading-two-gap-top"}
              >
                {"Frequently asked questions"}
              </h2>
            </div>
          </div>
          <div>
            <Interactive
              data-motion-id={"4d5e66a2-6b2d-ddc8-d0ad-ca52bfa0df69"}
              data-hover={"false"}
              data-delay={"300"}
              className={"faq w-dropdown"}
              as={"div"}
            >
              <Interactive
                className={"faq-toggle w-dropdown-toggle"}
                as={"div"}
              >
                <div className={"heading-six"}>
                  {"How do I enroll in an online course?"}
                </div>
                <div className={"faq-two-icon"}>
                  <div className={"plus-bar plus-one"}></div>
                  <div className={"plus-bar plus-two"}></div>
                </div>
              </Interactive>
              <Interactive className={"faq-answer w-dropdown-list"} as={"nav"}>
                <div className={"toggle-answer-wrap"}>
                  <p>
                    {
                      "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac."
                    }
                  </p>
                </div>
              </Interactive>
            </Interactive>
            <Interactive
              data-motion-id={"4d5e66a2-6b2d-ddc8-d0ad-ca52bfa0df71"}
              data-hover={"false"}
              data-delay={"300"}
              className={"faq w-dropdown"}
              as={"div"}
            >
              <Interactive
                className={"faq-toggle w-dropdown-toggle"}
                as={"div"}
              >
                <div className={"heading-six"}>
                  {
                    "Are there any prerequisites for enrolling in online courses?"
                  }
                </div>
                <div className={"faq-two-icon"}>
                  <div className={"plus-bar plus-one"}></div>
                  <div className={"plus-bar plus-two"}></div>
                </div>
              </Interactive>
              <Interactive className={"faq-answer w-dropdown-list"} as={"nav"}>
                <div className={"toggle-answer-wrap"}>
                  <p>
                    {
                      "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac."
                    }
                  </p>
                </div>
              </Interactive>
            </Interactive>
            <Interactive
              data-motion-id={"4d5e66a2-6b2d-ddc8-d0ad-ca52bfa0df79"}
              data-hover={"false"}
              data-delay={"300"}
              className={"faq w-dropdown"}
              as={"div"}
            >
              <Interactive
                className={"faq-toggle w-dropdown-toggle"}
                as={"div"}
              >
                <div className={"heading-six"}>
                  {"What are the technical requirements for online learning?"}
                </div>
                <div className={"faq-two-icon"}>
                  <div className={"plus-bar plus-one"}></div>
                  <div className={"plus-bar plus-two"}></div>
                </div>
              </Interactive>
              <Interactive className={"faq-answer w-dropdown-list"} as={"nav"}>
                <div className={"toggle-answer-wrap"}>
                  <p>
                    {
                      "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac."
                    }
                  </p>
                </div>
              </Interactive>
            </Interactive>
            <Interactive
              data-motion-id={"4d5e66a2-6b2d-ddc8-d0ad-ca52bfa0df81"}
              data-hover={"false"}
              data-delay={"300"}
              className={"faq w-dropdown"}
              as={"div"}
            >
              <Interactive
                className={"faq-toggle w-dropdown-toggle"}
                as={"div"}
              >
                <div className={"heading-six"}>
                  {"What if I encounter technical difficulties?"}
                </div>
                <div className={"faq-two-icon"}>
                  <div className={"plus-bar plus-one"}></div>
                  <div className={"plus-bar plus-two"}></div>
                </div>
              </Interactive>
              <Interactive className={"faq-answer w-dropdown-list"} as={"nav"}>
                <div className={"toggle-answer-wrap"}>
                  <p>
                    {
                      "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac."
                    }
                  </p>
                </div>
              </Interactive>
            </Interactive>
            <Interactive
              data-motion-id={"4d5e66a2-6b2d-ddc8-d0ad-ca52bfa0df89"}
              data-hover={"false"}
              data-delay={"300"}
              className={"faq w-dropdown"}
              as={"div"}
            >
              <Interactive
                className={"faq-toggle w-dropdown-toggle"}
                as={"div"}
              >
                <div className={"heading-six"}>
                  {"Are there live classes, or can I learn at my own pace?"}
                </div>
                <div className={"faq-two-icon"}>
                  <div className={"plus-bar plus-one"}></div>
                  <div className={"plus-bar plus-two"}></div>
                </div>
              </Interactive>
              <Interactive className={"faq-answer w-dropdown-list"} as={"nav"}>
                <div className={"toggle-answer-wrap"}>
                  <p>
                    {
                      "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac."
                    }
                  </p>
                </div>
              </Interactive>
            </Interactive>
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
