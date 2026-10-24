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
      <section className={"pricing-two-hero"}>
        <div
          className={
            "w-layout-blockcontainer pricing-two-hero-container w-container"
          }
        >
          <div className={"w-layout-vflex pricing-two-hero-main"}>
            <div
              data-motion-id={"96645ce7-a58f-669a-a10d-291fbaae30d0"}
              className={"small-heading"}
            >
              {"Pricing"}
            </div>
            <h1
              data-motion-id={"4cdcc996-ee83-6917-a9e0-c77eae6dcb15"}
              className={"pricing-two-heading"}
            >
              {"Flexible pricing plan for every one"}
            </h1>
            <div className={"pricing-two-cards-main"}>
              <Interactive
                data-current={"Tab 1"}
                data-easing={"ease"}
                data-duration-in={"0"}
                data-duration-out={"0"}
                className={"tabs w-tabs"}
                as={"div"}
              >
                <Interactive
                  data-motion-id={"a009e4f9-65d9-f103-3b10-762e866ea054"}
                  className={"pricing-tab-menu w-tab-menu"}
                  as={"div"}
                >
                  <Interactive
                    data-w-tab={"Tab 1"}
                    className={"pricing-two-links w-inline-block w-tab-link"}
                    as={"a"}
                  >
                    <div>{"Monthly"}</div>
                  </Interactive>
                  <Interactive
                    data-w-tab={"Tab 2"}
                    className={"pricing-two-links w-inline-block w-tab-link"}
                    as={"a"}
                  >
                    <div>{"Yearly"}</div>
                    <div className={"text-block"}>{"Save 20%"}</div>
                  </Interactive>
                </Interactive>
                <div
                  data-motion-id={"a009e4f9-65d9-f103-3b10-762e866ea05e"}
                  className={"pricing-tab-content w-tab-content"}
                >
                  <Interactive
                    data-w-tab={"Tab 1"}
                    className={"w-tab-pane w--tab-active"}
                    as={"div"}
                  >
                    <div className={"pricing-tab-content-main"}>
                      <div className={"w-layout-vflex pricing-plan-two"}>
                        <img
                          width={"65"}
                          height={"72"}
                          alt={"Icon"}
                          src={
                            "/assets/d93b5147-66e14486380835542ec4e9d1_Gift-Image.svg"
                          }
                          loading={"lazy"}
                          className={"margin-bottom-twenty-five"}
                        />
                        <div className={"heading-four margin-bottom-ten"}>
                          {"Starter Plan"}
                        </div>
                        <p className={"margin-bottom-twenty"}>
                          {
                            "Lorem ipsum dolor sit amet consectetur.  eu vitae magna lacus ut."
                          }
                        </p>
                        <div className={"w-layout-hflex pricing-two-tag"}>
                          <div className={"text-strike-through"}>{"$199"}</div>
                          <div>
                            <span className={"heading-three"}>{"$149"}</span>
                            {"/Monthly"}
                          </div>
                        </div>
                        <div className={"pricing-card-two-border"}></div>
                        <div className={"pricing-two-points"}>
                          <div className={"w-layout-hflex pricing-cards-point"}>
                            <img
                              width={"21"}
                              height={"22"}
                              alt={"Icon"}
                              src={
                                "/assets/e5574454-66e14486372d78a27e95c8e9_Pricing-Blue-Tick.svg"
                              }
                              loading={"lazy"}
                            />
                            <div>{"Access to 30+ top courses"}</div>
                          </div>
                          <div className={"w-layout-hflex pricing-cards-point"}>
                            <img
                              width={"21"}
                              height={"22"}
                              alt={"Icon"}
                              src={
                                "/assets/e5574454-66e14486372d78a27e95c8e9_Pricing-Blue-Tick.svg"
                              }
                              loading={"lazy"}
                            />
                            <div>{"Certification prep"}</div>
                          </div>
                          <div className={"w-layout-hflex pricing-cards-point"}>
                            <img
                              width={"21"}
                              height={"22"}
                              alt={"Icon"}
                              src={
                                "/assets/e5574454-66e14486372d78a27e95c8e9_Pricing-Blue-Tick.svg"
                              }
                              loading={"lazy"}
                            />
                            <div>{"Customizable content"}</div>
                          </div>
                          <div className={"w-layout-hflex pricing-cards-point"}>
                            <img
                              width={"21"}
                              height={"22"}
                              alt={"Icon"}
                              src={
                                "/assets/e5574454-66e14486372d78a27e95c8e9_Pricing-Blue-Tick.svg"
                              }
                              loading={"lazy"}
                            />
                            <div>{"AI-powered coding exercises"}</div>
                          </div>
                          <div className={"w-layout-hflex pricing-cards-point"}>
                            <img
                              width={"21"}
                              height={"22"}
                              alt={"Icon"}
                              src={
                                "/assets/1d5c3644-66e14486222233c74f9b9622_Pricing-Blue-Cross.svg"
                              }
                              loading={"lazy"}
                            />
                            <div>{"Analytics and adoption reports"}</div>
                          </div>
                        </div>
                        <div className={"pricing-two-button"}>
                          <SiteLink
                            data-motion-id={
                              "554bdb09-166f-7496-ccbc-6402fc45feda"
                            }
                            href={"/contact-one"}
                            className={
                              "button button-border-off w-inline-block"
                            }
                          >
                            <div>{"Subscribe This Plan"}</div>
                          </SiteLink>
                        </div>
                      </div>
                      <div
                        className={
                          "w-layout-vflex pricing-plan-two pricing-plan-card-two"
                        }
                      >
                        <img
                          width={"94"}
                          height={"58"}
                          alt={"Icon"}
                          src={
                            "/assets/3b1d6ed0-66e14486876c02e130b6a4b3_Crown.svg"
                          }
                          loading={"lazy"}
                          className={"margin-bottom-thirty"}
                        />
                        <div
                          className={
                            "heading-four margin-bottom-ten text-white"
                          }
                        >
                          {"Premium Plan"}
                        </div>
                        <p className={"margin-bottom-twenty text-light-grey"}>
                          {
                            "Lorem ipsum dolor sit amet consectetur.  eu vitae magna lacus ut."
                          }
                        </p>
                        <div className={"w-layout-hflex pricing-two-tag"}>
                          <div
                            className={"text-strike-through text-light-grey"}
                          >
                            {"$399"}
                          </div>
                          <div className={"text-light-grey"}>
                            <span className={"heading-three text-white"}>
                              {"$349"}
                            </span>
                            {"/Monthly"}
                          </div>
                        </div>
                        <div className={"pricing-card-two-border"}></div>
                        <div className={"pricing-two-points"}>
                          <div className={"w-layout-hflex pricing-cards-point"}>
                            <img
                              width={"21"}
                              height={"22"}
                              alt={"Icon"}
                              src={
                                "/assets/f949c93e-66e1448572ee3b06c3e042b5_Pricing-Grey-Tick.svg"
                              }
                              loading={"lazy"}
                            />
                            <div className={"text-light-grey"}>
                              {"Access to 50+ top courses"}
                            </div>
                          </div>
                          <div className={"w-layout-hflex pricing-cards-point"}>
                            <img
                              width={"21"}
                              height={"22"}
                              alt={"Icon"}
                              src={
                                "/assets/f949c93e-66e1448572ee3b06c3e042b5_Pricing-Grey-Tick.svg"
                              }
                              loading={"lazy"}
                            />
                            <div className={"text-light-grey"}>
                              {"Certification prep"}
                            </div>
                          </div>
                          <div className={"w-layout-hflex pricing-cards-point"}>
                            <img
                              width={"21"}
                              height={"22"}
                              alt={"Icon"}
                              src={
                                "/assets/f949c93e-66e1448572ee3b06c3e042b5_Pricing-Grey-Tick.svg"
                              }
                              loading={"lazy"}
                            />
                            <div className={"text-light-grey"}>
                              {"Customizable content"}
                            </div>
                          </div>
                          <div className={"w-layout-hflex pricing-cards-point"}>
                            <img
                              width={"21"}
                              height={"22"}
                              alt={"Icon"}
                              src={
                                "/assets/f949c93e-66e1448572ee3b06c3e042b5_Pricing-Grey-Tick.svg"
                              }
                              loading={"lazy"}
                            />
                            <div className={"text-light-grey"}>
                              {"AI-powered coding exercises"}
                            </div>
                          </div>
                          <div className={"w-layout-hflex pricing-cards-point"}>
                            <img
                              width={"21"}
                              height={"22"}
                              alt={"Icon"}
                              src={
                                "/assets/f949c93e-66e1448572ee3b06c3e042b5_Pricing-Grey-Tick.svg"
                              }
                              loading={"lazy"}
                            />
                            <div className={"text-light-grey"}>
                              {"Analytics and adoption reports"}
                            </div>
                          </div>
                        </div>
                        <div className={"pricing-two-button"}>
                          <SiteLink
                            data-motion-id={
                              "d2419891-9f36-e25c-7c72-b1716c5d291d"
                            }
                            href={"/contact-two"}
                            className={"button button-yellow w-inline-block"}
                          >
                            <div>{"Subscribe This Plan"}</div>
                          </SiteLink>
                        </div>
                      </div>
                    </div>
                  </Interactive>
                  <Interactive
                    data-w-tab={"Tab 2"}
                    className={"w-tab-pane"}
                    as={"div"}
                  >
                    <div className={"pricing-tab-content-main"}>
                      <div className={"w-layout-vflex pricing-plan-two"}>
                        <img
                          width={"65"}
                          height={"72"}
                          alt={"Icon"}
                          src={
                            "/assets/d93b5147-66e14486380835542ec4e9d1_Gift-Image.svg"
                          }
                          loading={"lazy"}
                          className={"margin-bottom-twenty-five"}
                        />
                        <div className={"heading-four margin-bottom-ten"}>
                          {"Starter Plan"}
                        </div>
                        <p className={"margin-bottom-twenty"}>
                          {
                            "Lorem ipsum dolor sit amet consectetur.  eu vitae magna lacus ut."
                          }
                        </p>
                        <div className={"w-layout-hflex pricing-two-tag"}>
                          <div className={"text-strike-through"}>{"$149"}</div>
                          <div>
                            <span className={"heading-three"}>{"$129"}</span>
                            {"/Monthly"}
                          </div>
                        </div>
                        <div className={"pricing-card-two-border"}></div>
                        <div className={"pricing-two-points"}>
                          <div className={"w-layout-hflex pricing-cards-point"}>
                            <img
                              width={"21"}
                              height={"22"}
                              alt={"Icon"}
                              src={
                                "/assets/e5574454-66e14486372d78a27e95c8e9_Pricing-Blue-Tick.svg"
                              }
                              loading={"lazy"}
                            />
                            <div>{"Access to 30+ top courses"}</div>
                          </div>
                          <div className={"w-layout-hflex pricing-cards-point"}>
                            <img
                              width={"21"}
                              height={"22"}
                              alt={"Icon"}
                              src={
                                "/assets/e5574454-66e14486372d78a27e95c8e9_Pricing-Blue-Tick.svg"
                              }
                              loading={"lazy"}
                            />
                            <div>{"Certification prep"}</div>
                          </div>
                          <div className={"w-layout-hflex pricing-cards-point"}>
                            <img
                              width={"21"}
                              height={"22"}
                              alt={"Icon"}
                              src={
                                "/assets/e5574454-66e14486372d78a27e95c8e9_Pricing-Blue-Tick.svg"
                              }
                              loading={"lazy"}
                            />
                            <div>{"Customizable content"}</div>
                          </div>
                          <div className={"w-layout-hflex pricing-cards-point"}>
                            <img
                              width={"21"}
                              height={"22"}
                              alt={"Icon"}
                              src={
                                "/assets/e5574454-66e14486372d78a27e95c8e9_Pricing-Blue-Tick.svg"
                              }
                              loading={"lazy"}
                            />
                            <div>{"AI-powered coding exercises"}</div>
                          </div>
                          <div className={"w-layout-hflex pricing-cards-point"}>
                            <img
                              width={"21"}
                              height={"22"}
                              alt={"Icon"}
                              src={
                                "/assets/1d5c3644-66e14486222233c74f9b9622_Pricing-Blue-Cross.svg"
                              }
                              loading={"lazy"}
                            />
                            <div>{"Analytics and adoption reports"}</div>
                          </div>
                        </div>
                        <div className={"pricing-two-button"}>
                          <SiteLink
                            data-motion-id={
                              "554bdb09-166f-7496-ccbc-6402fc45feda"
                            }
                            href={"/contact-one"}
                            className={
                              "button button-border-off w-inline-block"
                            }
                          >
                            <div>{"Subscribe This Plan"}</div>
                          </SiteLink>
                        </div>
                      </div>
                      <div
                        className={
                          "w-layout-vflex pricing-plan-two pricing-plan-card-two"
                        }
                      >
                        <img
                          width={"94"}
                          height={"58"}
                          alt={"Icon"}
                          src={
                            "/assets/3b1d6ed0-66e14486876c02e130b6a4b3_Crown.svg"
                          }
                          loading={"lazy"}
                          className={"margin-bottom-thirty"}
                        />
                        <div
                          className={
                            "heading-four margin-bottom-ten text-white"
                          }
                        >
                          {"Premium Plan"}
                        </div>
                        <p className={"margin-bottom-twenty text-light-grey"}>
                          {
                            "Lorem ipsum dolor sit amet consectetur.  eu vitae magna lacus ut."
                          }
                        </p>
                        <div className={"w-layout-hflex pricing-two-tag"}>
                          <div
                            className={"text-strike-through text-light-grey"}
                          >
                            {"$349"}
                          </div>
                          <div className={"text-light-grey"}>
                            <span className={"heading-three text-white"}>
                              {"$329"}
                            </span>
                            {"/Monthly"}
                          </div>
                        </div>
                        <div className={"pricing-card-two-border"}></div>
                        <div className={"pricing-two-points"}>
                          <div className={"w-layout-hflex pricing-cards-point"}>
                            <img
                              width={"21"}
                              height={"22"}
                              alt={"Icon"}
                              src={
                                "/assets/f949c93e-66e1448572ee3b06c3e042b5_Pricing-Grey-Tick.svg"
                              }
                              loading={"lazy"}
                            />
                            <div className={"text-light-grey"}>
                              {"Access to 50+ top courses"}
                            </div>
                          </div>
                          <div className={"w-layout-hflex pricing-cards-point"}>
                            <img
                              width={"21"}
                              height={"22"}
                              alt={"Icon"}
                              src={
                                "/assets/f949c93e-66e1448572ee3b06c3e042b5_Pricing-Grey-Tick.svg"
                              }
                              loading={"lazy"}
                            />
                            <div className={"text-light-grey"}>
                              {"Certification prep"}
                            </div>
                          </div>
                          <div className={"w-layout-hflex pricing-cards-point"}>
                            <img
                              width={"21"}
                              height={"22"}
                              alt={"Icon"}
                              src={
                                "/assets/f949c93e-66e1448572ee3b06c3e042b5_Pricing-Grey-Tick.svg"
                              }
                              loading={"lazy"}
                            />
                            <div className={"text-light-grey"}>
                              {"Customizable content"}
                            </div>
                          </div>
                          <div className={"w-layout-hflex pricing-cards-point"}>
                            <img
                              width={"21"}
                              height={"22"}
                              alt={"Icon"}
                              src={
                                "/assets/f949c93e-66e1448572ee3b06c3e042b5_Pricing-Grey-Tick.svg"
                              }
                              loading={"lazy"}
                            />
                            <div className={"text-light-grey"}>
                              {"AI-powered coding exercises"}
                            </div>
                          </div>
                          <div className={"w-layout-hflex pricing-cards-point"}>
                            <img
                              width={"21"}
                              height={"22"}
                              alt={"Icon"}
                              src={
                                "/assets/f949c93e-66e1448572ee3b06c3e042b5_Pricing-Grey-Tick.svg"
                              }
                              loading={"lazy"}
                            />
                            <div className={"text-light-grey"}>
                              {"Analytics and adoption reports"}
                            </div>
                          </div>
                        </div>
                        <div className={"pricing-two-button"}>
                          <SiteLink
                            data-motion-id={
                              "d2419891-9f36-e25c-7c72-b1716c5d291d"
                            }
                            href={"/contact-two"}
                            className={"button button-yellow w-inline-block"}
                          >
                            <div>{"Subscribe This Plan"}</div>
                          </SiteLink>
                        </div>
                      </div>
                    </div>
                  </Interactive>
                </div>
              </Interactive>
            </div>
          </div>
        </div>
      </section>
      <section className={"faq-two-section"}>
        <section>
          <div className={"w-layout-blockcontainer container w-container"}>
            <div className={"contact-one-faq-background"}>
              <div
                className={
                  "w-layout-blockcontainer faq-inner-container w-container"
                }
              >
                <div className={"w-layout-hflex faq-top-wrapper"}>
                  <img
                    data-motion-id={"4d5e66a2-6b2d-ddc8-d0ad-ca52bfa0df62"}
                    src={
                      "/assets/a2acb57f-66de9b24cdbecf88f8d1b2da_FAQ-Icons.svg"
                    }
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
                    <Interactive
                      className={"faq-answer w-dropdown-list"}
                      as={"nav"}
                    >
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
                    <Interactive
                      className={"faq-answer w-dropdown-list"}
                      as={"nav"}
                    >
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
                        {
                          "What are the technical requirements for online learning?"
                        }
                      </div>
                      <div className={"faq-two-icon"}>
                        <div className={"plus-bar plus-one"}></div>
                        <div className={"plus-bar plus-two"}></div>
                      </div>
                    </Interactive>
                    <Interactive
                      className={"faq-answer w-dropdown-list"}
                      as={"nav"}
                    >
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
                    <Interactive
                      className={"faq-answer w-dropdown-list"}
                      as={"nav"}
                    >
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
                        {
                          "Are there live classes, or can I learn at my own pace?"
                        }
                      </div>
                      <div className={"faq-two-icon"}>
                        <div className={"plus-bar plus-one"}></div>
                        <div className={"plus-bar plus-two"}></div>
                      </div>
                    </Interactive>
                    <Interactive
                      className={"faq-answer w-dropdown-list"}
                      as={"nav"}
                    >
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
            </div>
          </div>
        </section>
      </section>
      <section className={"cta-one"}>
        <div
          data-motion-id={"81a5b998-ae84-46ef-f7bf-03f332838459"}
          className={"w-layout-blockcontainer container w-container"}
        >
          <div className={"w-layout-hflex cta-main"}>
            <div className={"heading-three cta-heading"}>
              {"Are you ready to start your journey?"}
            </div>
            <div className={"w-layout-hflex cta-button-wrapper"}>
              <SiteLink
                data-motion-id={"554bdb09-166f-7496-ccbc-6402fc45feda"}
                href={"/course-one"}
                className={"button button-border-off w-inline-block"}
              >
                <div>{"Browse courses"}</div>
              </SiteLink>
              <SiteLink
                data-motion-id={"39baf460-15b3-a13b-7a0d-2a8c4923e136"}
                href={"/career"}
                className={"button black-border-button w-inline-block"}
              >
                <div>{"Became a teacher"}</div>
              </SiteLink>
            </div>
          </div>
        </div>
      </section>
      <footer className={"footer-one"}>
        <div
          data-motion-id={"ecc05ebb-d048-2496-f7e4-abeb03dcdcf9"}
          className={"w-layout-blockcontainer container w-container"}
        >
          <div className={"w-layout-hflex footer-one-main"}>
            <div
              id={"w-node-ecc05ebb-d048-2496-f7e4-abeb03dcdcfb-03dcdcf8"}
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
              <div className={"heading-five text-white"}>{"Quick links"}</div>
              <div className={"w-layout-vflex links-wrap"}>
                <SiteLink href={"/home-one"} className={"footer-link-hover"}>
                  {"Home"}
                </SiteLink>
                <SiteLink href={"/events"} className={"footer-link-hover"}>
                  {"Events"}
                </SiteLink>
                <SiteLink href={"/career"} className={"footer-link-hover"}>
                  {"Career"}
                </SiteLink>
                <SiteLink href={"/team"} className={"footer-link-hover"}>
                  {"Instructor"}
                </SiteLink>
              </div>
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
                <SiteLink href={"/404"} className={"footer-link-hover"}>
                  {"404"}
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
                    "/blog-posts/the-evolution-of-teaching-tools-in-the-21st-century"
                  }
                  className={"footer-link-hover"}
                >
                  {"Blog details"}
                </SiteLink>
              </div>
            </div>
          </div>
        </div>
        <div
          data-motion-id={"ecc05ebb-d048-2496-f7e4-abeb03dcdd3c"}
          className={"w-layout-blockcontainer footer-container w-container"}
        >
          <div className={"border-one"}></div>
          <div className={"w-layout-hflex footer-bottom-main"}>
            <div className={"footer-bottom-text"}>
              {"Design by "}
              <SiteLink
                href={"http://radianttemplates.com/"}
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
                target={"_blank"}
                className={"footer-bottom-link"}
              >
                {"Webflow"}
              </SiteLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
