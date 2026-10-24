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
      <section className={"team-member-details-hero"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-hflex team-details-hero-main"}>
            <div
              data-motion-id={"197545fa-dc0e-f478-2c06-9cee1cca3ea1"}
              className={"w-layout-vflex team-details-hero-image"}
            >
              <img
                src={
                  "/assets/f4df7a40-66e54e091763e997592e23aa_Team-Member-2.webp"
                }
                loading={"eager"}
                width={"632"}
                height={"1021"}
                alt={""}
                sizes={"(max-width: 767px) 100vw, 632px"}
                srcSet={
                  "/assets/43f3d990-66e54e091763e997592e23aa_Team-Member-2-p-500.webp 500w, /assets/bd0bd1c4-66e54e091763e997592e23aa_Team-Member-2-p-800.webp 800w, /assets/9a808f64-66e54e091763e997592e23aa_Team-Member-2-p-1080.webp 1080w, /assets/f4df7a40-66e54e091763e997592e23aa_Team-Member-2.webp 1240w"
                }
                className={"team-details-image"}
              />
              <div className={"team-member-circle"}></div>
              <div className={"team-members-social"}>
                <SiteLink
                  href={"https://www.behance.net"}
                  className={"team-social-link w-inline-block"}
                >
                  <img
                    src={
                      "/assets/d32cec54-66e7c6433d7856003f72b9f5_Behance.png"
                    }
                    loading={"lazy"}
                    width={"29"}
                    height={"18"}
                    alt={"Icon"}
                  />
                </SiteLink>
                <SiteLink
                  href={"https://x.com"}
                  className={"team-social-link w-inline-block"}
                >
                  <img
                    src={
                      "/assets/a58a5857-66e7c56daf060e8c0d357f32_Twitter.svg"
                    }
                    loading={"lazy"}
                    width={"19"}
                    height={"17"}
                    alt={"Icon"}
                  />
                </SiteLink>
                <SiteLink
                  href={"https://in.linkedin.com"}
                  className={"team-social-link w-inline-block"}
                >
                  <img
                    src={
                      "/assets/bfcbc6a1-66e7c56d6c59a934ad103c27_LinkedIn.svg"
                    }
                    loading={"lazy"}
                    width={"19"}
                    height={"17"}
                    alt={"Icon"}
                  />
                </SiteLink>
                <SiteLink
                  href={"https://www.facebook.com"}
                  className={"team-social-link w-inline-block"}
                >
                  <img
                    src={
                      "/assets/dcfc2633-66e7c64323897cf8a1810bdb_Facebook.png"
                    }
                    loading={"lazy"}
                    width={"11"}
                    height={"18"}
                    alt={"Icon"}
                  />
                </SiteLink>
                <div className={"team-member-social-line"}></div>
              </div>
            </div>
            <div className={"w-layout-vflex team-details-hero-text"}>
              <h1
                data-motion-id={"919beba6-27b2-2593-a9ea-b42536f35487"}
                className={"no-margin-top text-white margin-bottom-twenty"}
              >
                {"Professional training with Leslie Upton"}
              </h1>
              <p
                data-motion-id={"fa3802e0-5eb0-6336-2e09-6986913fa722"}
                className={"text-light-white margin-bottom-thirty"}
              >
                {
                  "Lorem ipsum dolor sit amet consectetur. Scelerisque cursus eget aliquet vel elit. Suspendisse odio augue ultrices sed adipiscing placerat vel consectetur. Aliquet."
                }
              </p>
              <div
                data-motion-id={"00d7418a-e78c-d07f-aed8-49dcd5154841"}
                className={"heading-four text-white margin-bottom-twenty"}
              >
                {"Specialist in"}
              </div>
              <div
                data-motion-id={"317269de-f205-49d9-83d0-520317566099"}
                className={"text-light-white w-richtext"}
              >
                <ul role={"list"}>
                  <li>{"Branding Design"}</li>
                  <li>{"Web Development"}</li>
                  <li>{"Logo design"}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={"team-details-marquee"}>
          <div
            style={{
              transform:
                "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            }}
            className={"w-layout-hflex team-details-marquee-train"}
          >
            <div className={"team-details-marquee-text"}>{"UI/UX Design"}</div>
            <img
              src={"/assets/dbfe51ab-66e57671dfc47c83c2021a47_Subtract-2.svg"}
              loading={"lazy"}
              width={"40"}
              height={"48"}
              alt={"Icon"}
            />
            <div className={"team-details-marquee-text"}>{"Branding"}</div>
            <img
              src={"/assets/dbfe51ab-66e57671dfc47c83c2021a47_Subtract-2.svg"}
              loading={"lazy"}
              width={"40"}
              height={"48"}
              alt={"Icon"}
            />
            <div className={"team-details-marquee-text"}>
              {"Web developent"}
            </div>
            <img
              src={"/assets/dbfe51ab-66e57671dfc47c83c2021a47_Subtract-2.svg"}
              loading={"lazy"}
              width={"40"}
              height={"48"}
              alt={"Icon"}
            />
          </div>
          <div
            style={{
              transform:
                "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            }}
            className={"w-layout-hflex team-details-marquee-train"}
          >
            <div className={"team-details-marquee-text"}>{"UI/UX Design"}</div>
            <img
              src={"/assets/dbfe51ab-66e57671dfc47c83c2021a47_Subtract-2.svg"}
              loading={"lazy"}
              width={"40"}
              height={"48"}
              alt={"Icon"}
            />
            <div className={"team-details-marquee-text"}>{"Branding"}</div>
            <img
              src={"/assets/dbfe51ab-66e57671dfc47c83c2021a47_Subtract-2.svg"}
              loading={"lazy"}
              width={"40"}
              height={"48"}
              alt={"Icon"}
            />
            <div className={"team-details-marquee-text"}>
              {"Web developent"}
            </div>
            <img
              src={"/assets/dbfe51ab-66e57671dfc47c83c2021a47_Subtract-2.svg"}
              loading={"lazy"}
              width={"40"}
              height={"48"}
              alt={"Icon"}
            />
          </div>
          <div
            style={{
              transform:
                "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            }}
            className={"w-layout-hflex team-details-marquee-train"}
          >
            <div className={"team-details-marquee-text"}>{"UI/UX Design"}</div>
            <img
              src={"/assets/dbfe51ab-66e57671dfc47c83c2021a47_Subtract-2.svg"}
              loading={"lazy"}
              width={"40"}
              height={"48"}
              alt={"Icon"}
            />
            <div className={"team-details-marquee-text"}>{"Branding"}</div>
            <img
              src={"/assets/dbfe51ab-66e57671dfc47c83c2021a47_Subtract-2.svg"}
              loading={"lazy"}
              width={"40"}
              height={"48"}
              alt={"Icon"}
            />
            <div className={"team-details-marquee-text"}>
              {"Web developent"}
            </div>
            <img
              src={"/assets/dbfe51ab-66e57671dfc47c83c2021a47_Subtract-2.svg"}
              loading={"lazy"}
              width={"40"}
              height={"48"}
              alt={"Icon"}
            />
          </div>
          <div className={"clients-overlay-one dark-overlay"}></div>
        </div>
      </section>
      <section className={"team-member-about"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-hflex team-member-about-main"}>
            <div
              data-motion-id={"a5ff96f1-0b24-9a8e-5c74-a45508423d0b"}
              className={"small-heading text-dark"}
            >
              {"About Instructor"}
            </div>
            <div className={"w-layout-hflex team-member-about-text"}>
              <div
                data-motion-id={"df84d14c-e533-1abb-92bc-5201cae9b67b"}
                className={"yellow-bar"}
              ></div>
              <div className={"team-member-about-content"}>
                <div
                  data-motion-id={"f37e34a8-fca7-80e0-d9af-dd6c9f0a50fd"}
                  className={
                    "heading-three margin-bottom-thirty mobile-margin-twenty"
                  }
                >
                  {
                    "Lorem ipsum dolor sit amet consectetur. Cras suscipit habitant nisi aliquam tincidunt egetvolutpat urna netus est quis."
                  }
                </div>
                <p
                  data-motion-id={"645724cc-a0b0-8136-fb24-48408ff557b4"}
                  className={"team-member-about-description"}
                >
                  {
                    "Lorem ipsum dolor sit amet consectetur. Scelerisque cursus eget aliquet vel elit. Suspendisse odio augue ultrices sed adipiscing placerat vel consectetur. Aliquet."
                  }
                </p>
                <div
                  data-motion-id={"6d57e40c-84e4-212f-f5a7-d974d979b428"}
                  className={"w-layout-hflex team-member-about-skills"}
                >
                  <div className={"w-layout-hflex about-skills-options"}>
                    <div className={"w-layout-vflex skills-description"}>
                      <div className={"heading-four"}>
                        {"Teaching strategy"}
                      </div>
                      <p className={"no-margin-bottom"}>
                        {
                          "Lorem ipsum dolor sit amet consectetur. Quis vitae eget tincidunt enim in ipsum."
                        }
                      </p>
                    </div>
                    <div className={"skills-big-text"}>{"84%"}</div>
                  </div>
                  <div className={"w-layout-hflex about-skills-options"}>
                    <div className={"w-layout-vflex skills-description"}>
                      <div className={"heading-four"}>{"Success ratio"}</div>
                      <p className={"no-margin-bottom"}>
                        {
                          "Lorem ipsum dolor sit amet consectetur. Quis vitae eget tincidunt enim in ipsum."
                        }
                      </p>
                    </div>
                    <div className={"skills-big-text"}>
                      {"95"}
                      <span className={"skills-text-small"}>{"%"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"team-member-courses"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-vflex"}>
            <div
              data-motion-id={"a5ff96f1-0b24-9a8e-5c74-a45508423d0b"}
              className={"small-heading text-dark"}
            >
              {"Online learning"}
            </div>
            <h2
              data-motion-id={"2a1ddea1-565b-75ed-d5ea-6e12d0a6ac97"}
              className={"heading-two-gap-top member-courses-heading"}
            >
              {"Instructor of course"}
            </h2>
            <div className={"course-wrap-card"}>
              <div
                data-motion-id={"4b4870ee-9982-faf8-e055-5cb2f50e011e"}
                className={"w-dyn-list"}
              >
                <div role={"list"} className={"w-dyn-items"}>
                  <div role={"listitem"} className={"w-dyn-item"}>
                    <div
                      data-motion-id={"4b4870ee-9982-faf8-e055-5cb2f50e0121"}
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
                          data-motion-id={
                            "4b4870ee-9982-faf8-e055-5cb2f50e012a"
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
                                "4b4870ee-9982-faf8-e055-5cb2f50e012c"
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
                            <SiteLink
                              data-motion-id={
                                "4b4870ee-9982-faf8-e055-5cb2f50e012f"
                              }
                              href={
                                "/product/building-single-page-applications-with-angular"
                              }
                              className={"button buy-button w-inline-block"}
                            >
                              <div>{"Buy course"}</div>
                            </SiteLink>
                          </div>
                        </div>
                        <div
                          data-motion-id={
                            "4b4870ee-9982-faf8-e055-5cb2f50e0132"
                          }
                          className={"course-three-cards-border-one"}
                        ></div>
                        <div
                          data-motion-id={
                            "4b4870ee-9982-faf8-e055-5cb2f50e0133"
                          }
                          className={"course-three-cards-border-two"}
                        ></div>
                        <div
                          data-motion-id={
                            "4b4870ee-9982-faf8-e055-5cb2f50e0134"
                          }
                          className={"course-three-cards-border-three"}
                        ></div>
                        <div
                          data-motion-id={
                            "4b4870ee-9982-faf8-e055-5cb2f50e0135"
                          }
                          className={"course-three-cards-border-four"}
                        ></div>
                        <div
                          data-motion-id={
                            "4b4870ee-9982-faf8-e055-5cb2f50e0136"
                          }
                          className={"course-price-wrapper course-three-price"}
                        >
                          <div>{"$0 "}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-motion-id={"4b4870ee-9982-faf8-e055-5cb2f50e013b"}
                className={"w-dyn-list"}
              >
                <div role={"list"} className={"w-dyn-items"}>
                  <div role={"listitem"} className={"w-dyn-item"}>
                    <div
                      data-motion-id={"4b4870ee-9982-faf8-e055-5cb2f50e013e"}
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
                          data-motion-id={
                            "4b4870ee-9982-faf8-e055-5cb2f50e0147"
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
                                "4b4870ee-9982-faf8-e055-5cb2f50e0149"
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
                                "4b4870ee-9982-faf8-e055-5cb2f50e014c"
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
                            "4b4870ee-9982-faf8-e055-5cb2f50e014f"
                          }
                          className={"course-three-cards-border-one"}
                        ></div>
                        <div
                          data-motion-id={
                            "4b4870ee-9982-faf8-e055-5cb2f50e0150"
                          }
                          className={"course-three-cards-border-two"}
                        ></div>
                        <div
                          data-motion-id={
                            "4b4870ee-9982-faf8-e055-5cb2f50e0151"
                          }
                          className={"course-three-cards-border-three"}
                        ></div>
                        <div
                          data-motion-id={
                            "4b4870ee-9982-faf8-e055-5cb2f50e0152"
                          }
                          className={"course-three-cards-border-four"}
                        ></div>
                        <div
                          data-motion-id={
                            "4b4870ee-9982-faf8-e055-5cb2f50e0153"
                          }
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
                data-motion-id={"4b4870ee-9982-faf8-e055-5cb2f50e01ad"}
                className={"w-dyn-list"}
              >
                <div role={"list"} className={"w-dyn-items"}>
                  <div role={"listitem"} className={"w-dyn-item"}>
                    <div
                      data-motion-id={"4b4870ee-9982-faf8-e055-5cb2f50e01b0"}
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
                        <div className={"small-shot-heading text-light-white"}>
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
                            "4b4870ee-9982-faf8-e055-5cb2f50e01b9"
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
                                "4b4870ee-9982-faf8-e055-5cb2f50e01bb"
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
                                "4b4870ee-9982-faf8-e055-5cb2f50e01be"
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
                            "4b4870ee-9982-faf8-e055-5cb2f50e01c1"
                          }
                          className={"course-three-cards-border-one"}
                        ></div>
                        <div
                          data-motion-id={
                            "4b4870ee-9982-faf8-e055-5cb2f50e01c2"
                          }
                          className={"course-three-cards-border-two"}
                        ></div>
                        <div
                          data-motion-id={
                            "4b4870ee-9982-faf8-e055-5cb2f50e01c3"
                          }
                          className={"course-three-cards-border-three"}
                        ></div>
                        <div
                          data-motion-id={
                            "4b4870ee-9982-faf8-e055-5cb2f50e01c4"
                          }
                          className={"course-three-cards-border-four"}
                        ></div>
                        <div
                          data-motion-id={
                            "4b4870ee-9982-faf8-e055-5cb2f50e01c5"
                          }
                          className={"course-price-wrapper course-three-price"}
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
      </section>
      <section className={"team-details-awards"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-hflex team-details-awards-top"}>
            <div className={"w-layout-vflex team-details-awards-left"}>
              <div
                data-motion-id={"a5ff96f1-0b24-9a8e-5c74-a45508423d0b"}
                className={"small-heading text-dark"}
              >
                {"awards"}
              </div>
              <h2
                data-motion-id={"365397b2-1759-9b38-7ed3-f300a7ded423"}
                className={"heading-two-gap-top"}
              >
                {"Our achieved awards"}
              </h2>
            </div>
            <div className={"team-details-awards-right"}>
              <p
                data-motion-id={"885a4fd7-e630-b95c-5891-cdef761dcaea"}
                className={"no-margin-bottom"}
              >
                {
                  "Lorem ipsum dolor sit amet consectetur. Scelerisque cursus eget aliquet vel elit. Suspendisse odio augue ultrices sed adipiscing placerat vel consectetur. Aliquet."
                }
              </p>
            </div>
          </div>
          <div className={"team-details-awards-bottom"}>
            <div
              data-motion-id={"66ea914c-6a8d-ee3d-fe58-02add18693eb"}
              className={"w-layout-hflex awards-cards"}
            >
              <div className={"awards-year"}>{"2012"}</div>
              <div className={"w-layout-vflex awards-content"}>
                <img
                  src={"/assets/b5591299-66e55e42fc586a4e75f8f96b_Awwwards.svg"}
                  loading={"lazy"}
                  width={"40"}
                  height={"62"}
                  alt={"Icon"}
                />
                <div className={"heading-four"}>{"Awwwards"}</div>
                <p className={"no-margin-bottom"}>
                  {
                    "Lorem ipsum dolor sit amet consectetur. Nunc at faucibus risus sodales in mattis."
                  }
                </p>
              </div>
            </div>
            <div
              data-motion-id={"59b373aa-e89d-02e3-8892-1b564810d0a5"}
              className={"w-layout-hflex awards-cards"}
            >
              <div className={"awards-year"}>{"2016"}</div>
              <div className={"w-layout-vflex awards-content"}>
                <img
                  src={"/assets/356b2af8-66e55e422c3e8186a6f75758_Dribbble.svg"}
                  loading={"lazy"}
                  width={"49"}
                  height={"62"}
                  alt={"Icon"}
                />
                <div className={"heading-four"}>{"Dribbble"}</div>
                <p className={"no-margin-bottom"}>
                  {
                    "Lorem ipsum dolor sit amet consectetur. Nunc at faucibus risus sodales in mattis."
                  }
                </p>
              </div>
            </div>
            <div
              data-motion-id={"e89dca85-fd7d-6cea-bd31-7be23a8c9b92"}
              className={"w-layout-hflex awards-cards"}
            >
              <div className={"awards-year"}>{"2019"}</div>
              <div className={"w-layout-vflex awards-content"}>
                <img
                  src={"/assets/a51b957f-66e55e421201bf7ff039a2c8_Hubspot.svg"}
                  loading={"lazy"}
                  width={"77"}
                  height={"62"}
                  alt={"Icon"}
                />
                <div className={"heading-four"}>{"hubSpot"}</div>
                <p className={"no-margin-bottom"}>
                  {
                    "Lorem ipsum dolor sit amet consectetur. Nunc at faucibus risus sodales in mattis."
                  }
                </p>
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
