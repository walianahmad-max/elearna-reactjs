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
      <div>
        <div className={"navbar-box"}>
          <Interactive
            data-animation={"default"}
            data-collapse={"medium"}
            data-duration={"400"}
            data-easing={"ease"}
            data-easing2={"ease"}
            role={"banner"}
            className={"navbar w-nav"}
            as={"div"}
          >
            <div className={"navbar-container w-container"}>
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
                  id={"w-node-_17d46984-7cba-edd4-a6dd-52a6d0365ce8-37e3f433"}
                  className={"nav-menu w-nav-menu"}
                  as={"nav"}
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
        </div>
        <section className={"desktop-menu"}>
          <div
            className={"w-layout-blockcontainer navbar-container w-container"}
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
                id={"w-node-c0ed1247-def4-0564-3c81-5cee2fd42538-2fd42530"}
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
      <section className={"landing-hero"}>
        <div
          className={
            "w-layout-blockcontainer landing-hero-container w-container"
          }
        >
          <div className={"w-layout-vflex landing-hero-main"}>
            <div className={"small-heading"}>{"Online learning"}</div>
            <h1 className={"landing-hero-text"}>
              {"Online course & "}
              <span className={"text-yellow"}>{"eLearning"}</span>
              {" Webflow template"}
            </h1>
            <div className={"w-layout-hflex landing-hero-images-wrap"}>
              <div className={"landing-hero-image-three"}>
                <img
                  src={
                    "/assets/2cd3e98c-66f39b2335288044a93a956d_Mask-group-6.avif"
                  }
                  loading={"lazy"}
                  width={"295"}
                  height={"269"}
                  alt={"Screenshot"}
                  className={"border-radius-ten image-auto"}
                />
              </div>
              <div className={"landing-hero-image-left"}>
                <img
                  src={
                    "/assets/8e585866-66f39b231622a63730b6a2fc_Mask-group-5.avif"
                  }
                  loading={"eager"}
                  width={"272.5"}
                  height={"275"}
                  alt={"Screenshot"}
                  className={"landing-small-images"}
                />
              </div>
              <div>
                <img
                  src={
                    "/assets/bef3648c-66f390d6226adceba95820a8_Mask-group.avif"
                  }
                  loading={"eager"}
                  width={"703"}
                  height={"676"}
                  alt={"Landing Screenshot"}
                  srcSet={
                    "/assets/e5f7985a-66f390d6226adceba95820a8_Mask-group-p-500.avif 500w, /assets/bef3648c-66f390d6226adceba95820a8_Mask-group.avif 1406w"
                  }
                  sizes={"(max-width: 767px) 100vw, 703px"}
                  className={"landing-hero-main-image"}
                />
              </div>
              <div className={"landing-hero-image-one"}>
                <img
                  src={
                    "/assets/15a183af-66f391cd93fcb3e78f11c4e2_Mask-group-2.avif"
                  }
                  loading={"eager"}
                  width={"264"}
                  height={"256"}
                  alt={"Landing Screenshot"}
                  className={"landing-small-images"}
                />
              </div>
              <div className={"w-layout-vflex landing-hero-right-images"}>
                <img
                  src={
                    "/assets/59667327-66f393f92a626e98c3ab8dfd_Mask-group-3.avif"
                  }
                  loading={"eager"}
                  width={"273"}
                  height={"246"}
                  alt={"Screenshot"}
                  className={"border-radius-ten image-auto"}
                />
                <img
                  src={
                    "/assets/6449fe9a-66f393f82f72499295a44e5a_Mask-group-4.avif"
                  }
                  loading={"eager"}
                  width={"203"}
                  height={"174"}
                  alt={"Screenshot"}
                  className={"border-radius-ten image-auto"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id={"homepages"} className={"landing-home"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-vflex landing-home-main"}>
            <div className={"small-heading text-dark"}>{"Pre-build demos"}</div>
            <div className={"heading-three demos-heading"}>
              {"Websites that are designed professionally to get you started"}
            </div>
            <div className={"landing-home-description"}>
              {
                "Three different demos here with full functionality, ready to start  for your next eLearning website."
              }
            </div>
            <div className={"landing-home-boxes"}>
              <SiteLink
                href={"/home-one"}
                target={"_blank"}
                className={"home-cards w-inline-block"}
              >
                <img
                  src={
                    "/assets/1f943ddb-66f3ba751be6c1dc4f75f372_Home-One-2.avif"
                  }
                  loading={"lazy"}
                  width={"410"}
                  height={"337"}
                  alt={"Screenshot"}
                  srcSet={
                    "/assets/3da2ac84-66f3ba751be6c1dc4f75f372_Home-One-2-p-500.avif 500w, /assets/1f943ddb-66f3ba751be6c1dc4f75f372_Home-One-2.avif 820w"
                  }
                  sizes={"(max-width: 479px) 100vw, 410px"}
                  className={"landing-screenshot"}
                />
                <div className={"heading-five"}>{"Home"}</div>
                <div className={"stylish-font"}>{"01"}</div>
              </SiteLink>
              <SiteLink
                href={"/home-two"}
                target={"_blank"}
                className={"home-cards w-inline-block"}
              >
                <img
                  src={
                    "/assets/623f46c7-66f3ba875aa40d7f2fca0bf9_Home-Three-2.avif"
                  }
                  loading={"lazy"}
                  width={"410"}
                  height={"337"}
                  alt={"Screenshot"}
                  srcSet={
                    "/assets/946236df-66f3ba875aa40d7f2fca0bf9_Home-Three-2-p-500.avif 500w, /assets/623f46c7-66f3ba875aa40d7f2fca0bf9_Home-Three-2.avif 818w"
                  }
                  sizes={"(max-width: 479px) 100vw, 410px"}
                  className={"landing-screenshot"}
                />
                <div className={"heading-five"}>{"Home"}</div>
                <div className={"stylish-font"}>{"02"}</div>
              </SiteLink>
              <SiteLink
                href={"/home-three"}
                target={"_blank"}
                className={"home-cards w-inline-block"}
              >
                <img
                  src={
                    "/assets/06a008e2-66f3ba7546eb72b9d5273f9e_Home-Two-2.avif"
                  }
                  loading={"lazy"}
                  width={"410"}
                  height={"337"}
                  alt={"Screenshot"}
                  className={"landing-screenshot"}
                />
                <div className={"heading-five"}>{"Home"}</div>
                <div className={"stylish-font"}>{"03"}</div>
              </SiteLink>
            </div>
            <div className={"div-block"}>
              <div className={"demo-styled-text-wrapper"}>
                {"Start with a fully functional demo website."}
              </div>
              <img
                src={
                  "/assets/bbac04ca-66f3c79b816be8fdac206a87_Yellow-Arrow.svg"
                }
                loading={"lazy"}
                alt={"Arrow Shape"}
                className={"image"}
              />
            </div>
          </div>
        </div>
      </section>
      <section className={"landing-customization"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-hflex customization-cta"}>
            <h2 className={"customization-cta-heading"}>
              {"2 hours free customization offer"}
              <span className={"text-span"}>
                <sup>{"*"}</sup>
              </span>
            </h2>
            <div className={"w-layout-vflex customization-cta-description"}>
              <p className={"text-dark-grey"}>
                {"Buy any of our template "}
                <span className={"text-dark"}>{"(From $79 onwards)"}</span>
                {" and get "}
                <span className={"text-dark"}>
                  {"2 hours free customization"}
                </span>
                {
                  " / fix (worth $60) on your under development site. You need to book customization within 15 days of purchasing a template.  "
                }
                <span className={"text-dark"}>
                  {"After 15 days we won't be able to honor the request."}
                </span>
                {
                  " You need to share your workspace access with our Webflow user id and one of our designers will check your case and answer accordingly. "
                }
              </p>
              <SiteLink
                href={"https://www.radianttemplates.com/customize-template"}
                target={"_blank"}
                className={"button button-border-off w-inline-block"}
              >
                <div>{"Get Free Customization"}</div>
              </SiteLink>
            </div>
            <div className={"limited-offer"}>{"**Limited Time Offer**"}</div>
          </div>
        </div>
      </section>
      <section className={"landing-courses"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-hflex landing-courses-top"}>
            <div className={"w-layout-vflex landing-course-heading"}>
              <div className={"small-heading text-dark"}>
                {"Online courses"}
              </div>
              <h2 className={"heading-two-gap-top"}>
                {"Online course and lesson management"}
              </h2>
            </div>
            <div className={"landing-course-top-right"}>
              <div className={"w-layout-hflex landing-course-top-checks"}>
                <img
                  src={
                    "/assets/0687c5cd-66f3cae5bd18684ae5b36a60_Blue-Check.svg"
                  }
                  loading={"lazy"}
                  alt={"Check Icon"}
                />
                <div className={"text-dark"}>
                  {"Create & sell online courses using e-commerce."}
                </div>
              </div>
              <div className={"w-layout-hflex landing-course-top-checks"}>
                <img
                  src={
                    "/assets/0687c5cd-66f3cae5bd18684ae5b36a60_Blue-Check.svg"
                  }
                  loading={"lazy"}
                  alt={"Check Icon"}
                />
                <div className={"text-dark"}>
                  {
                    "Get started with monetization through paid or free courses."
                  }
                </div>
              </div>
              <div className={"w-layout-hflex landing-course-top-checks"}>
                <img
                  src={
                    "/assets/0687c5cd-66f3cae5bd18684ae5b36a60_Blue-Check.svg"
                  }
                  loading={"lazy"}
                  alt={"Check Icon"}
                />
                <div className={"text-dark"}>{"Easily update courses."}</div>
              </div>
              <div className={"w-layout-hflex landing-course-top-checks"}>
                <img
                  src={
                    "/assets/0687c5cd-66f3cae5bd18684ae5b36a60_Blue-Check.svg"
                  }
                  loading={"lazy"}
                  alt={"Check Icon"}
                />
                <div className={"text-dark"}>
                  {"Video lessons are included with course details."}
                </div>
              </div>
              <div className={"w-layout-hflex landing-course-top-checks"}>
                <img
                  src={
                    "/assets/0687c5cd-66f3cae5bd18684ae5b36a60_Blue-Check.svg"
                  }
                  loading={"lazy"}
                  alt={"Check Icon"}
                />
                <div className={"text-dark"}>
                  {"Excellent payment gateway support including PayPal."}
                </div>
              </div>
            </div>
          </div>
          <div className={"w-layout-hflex landing-course-images-wrap"}>
            <div className={"w-layout-vflex landing-course-image-left"}>
              <div className={"w-layout-vflex course-styled-text"}>
                <div className={"stylish-heading"}>{"03"}</div>
                <div className={"course-text"}>
                  {"Types of online course style with course details"}
                </div>
                <img
                  src={
                    "/assets/bbac04ca-66f3c79b816be8fdac206a87_Yellow-Arrow.svg"
                  }
                  loading={"lazy"}
                  width={"85"}
                  height={"85"}
                  alt={"Arrow Shape"}
                  className={"course-arrow"}
                />
              </div>
              <SiteLink
                href={"/course-one"}
                target={"_blank"}
                className={"w-inline-block"}
              >
                <img
                  src={
                    "/assets/71e6c3e5-66f3cd09f26e440a1aa7e361_Course-style-01.avif"
                  }
                  loading={"lazy"}
                  width={"363"}
                  height={"284"}
                  alt={"Screenshot"}
                  srcSet={
                    "/assets/77003158-66f3cd09f26e440a1aa7e361_Course-style-01-p-500.avif 500w, /assets/71e6c3e5-66f3cd09f26e440a1aa7e361_Course-style-01.avif 726w"
                  }
                  sizes={"(max-width: 479px) 100vw, 363px"}
                  className={"image-auto course-one-preview"}
                />
              </SiteLink>
            </div>
            <SiteLink
              href={"/product/database-integration-with-mongodb"}
              target={"_blank"}
              className={"course-details-preview w-inline-block"}
            >
              <img
                src={
                  "/assets/9247c278-66f3cd09bd18684ae5b56b41_Course-details---Overview.avif"
                }
                loading={"lazy"}
                width={"690"}
                height={"726"}
                alt={"Screenshot"}
                srcSet={
                  "/assets/78667143-66f3cd09bd18684ae5b56b41_Course-details---Overview-p-500.avif 500w, /assets/c50413ce-66f3cd09bd18684ae5b56b41_Course-details---Overview-p-800.avif 800w, /assets/9247c278-66f3cd09bd18684ae5b56b41_Course-details---Overview.avif 1380w"
                }
                sizes={"(max-width: 767px) 100vw, 690px"}
                className={"image-auto border-radius-four"}
              />
            </SiteLink>
            <div className={"w-layout-vflex course-details-right-box"}>
              <SiteLink href={"/course-two"} className={"w-inline-block"}>
                <img
                  src={
                    "/assets/d9413f70-66f3cd08d9723cade7e3a275_Course-style-02.avif"
                  }
                  loading={"lazy"}
                  width={"380"}
                  height={"259"}
                  alt={"Screenshot"}
                  srcSet={
                    "/assets/39418009-66f3cd08d9723cade7e3a275_Course-style-02-p-500.avif 500w, /assets/d9413f70-66f3cd08d9723cade7e3a275_Course-style-02.avif 760w"
                  }
                  sizes={"(max-width: 479px) 100vw, 380px"}
                  className={"image-auto course-one-preview"}
                />
              </SiteLink>
              <SiteLink href={"/course-three"} className={"w-inline-block"}>
                <img
                  src={
                    "/assets/86cadefd-66f3cd087e9c6c0410563f68_Course-style-03.avif"
                  }
                  loading={"lazy"}
                  width={"262"}
                  height={"199"}
                  alt={"Screenshot"}
                  className={"image-auto course-one-preview"}
                />
              </SiteLink>
            </div>
          </div>
        </div>
      </section>
      <section className={"landing-courses-more"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-grid landing-course-more-main"}>
            <div className={"landing-course-column-one"}>
              <img
                src={
                  "/assets/8463d1e1-66f3de84ec2f38ec7e2c6c18_Course-style-01-2.avif"
                }
                loading={"lazy"}
                width={"240"}
                height={"129"}
                alt={"Screenshot"}
                className={"image-auto border-radius-four"}
              />
              <img
                src={
                  "/assets/ec15d48e-66f3de85fb638b2b8e2cafb7_Course-style-01-3.avif"
                }
                loading={"lazy"}
                width={"190"}
                height={"129"}
                alt={"Screenshot"}
                className={"image-auto course-one-preview column-bottom-image"}
              />
            </div>
            <div className={"w-layout-vflex landing-course-text"}>
              <div className={"heading-four"}>{"Generate query"}</div>
              <p className={"no-margin-bottom"}>
                {
                  "Design a query form for learners to request clarifications on video content, specifying lesson number, timecode, and subject area."
                }
              </p>
            </div>
            <div>
              <img
                src={
                  "/assets/4ccc5b69-66f3de7190d67f7b8706da1b_Related-Course.avif"
                }
                loading={"lazy"}
                width={"300"}
                height={"208"}
                alt={"Screenshot"}
                className={"image-auto border-radius-four"}
              />
            </div>
            <div className={"w-layout-vflex landing-course-text"}>
              <div className={"heading-four"}>{"Related course"}</div>
              <p className={"no-margin-bottom"}>
                {
                  "Explore related courses covering advanced topics in this subject, offering deeper insights into the key concepts from the video lesson."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={"landing-team"}>
        <div
          className={
            "w-layout-blockcontainer landing-team-big-container w-container"
          }
        >
          <div className={"stylish-heading-text"}>
            {"Presenting the most exceptional instructors"}
          </div>
        </div>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-hflex landing-team-main"}>
            <div className={"w-layout-hflex landing-team-left-wrap"}>
              <div>
                <img
                  src={"/assets/44f1087c-66f3e5377e30e8efc296c11b_Team.avif"}
                  loading={"lazy"}
                  width={"602"}
                  height={"436"}
                  alt={"Screenshot"}
                  srcSet={
                    "/assets/e68146c6-66f3e5377e30e8efc296c11b_Team-p-500.avif 500w, /assets/44f1087c-66f3e5377e30e8efc296c11b_Team.avif 1040w"
                  }
                  sizes={"(max-width: 767px) 100vw, 602px"}
                  className={"image-auto course-one-preview"}
                />
              </div>
              <div className={"landing-team-right-image"}>
                <img
                  src={
                    "/assets/fba27d0b-66f3e5374c44dd085f7e4a1b_Team-details.avif"
                  }
                  loading={"lazy"}
                  width={"457"}
                  height={"327"}
                  alt={"Screenshot"}
                  srcSet={
                    "/assets/00d08fae-66f3e5374c44dd085f7e4a1b_Team-details-p-500.avif 500w, /assets/fba27d0b-66f3e5374c44dd085f7e4a1b_Team-details.avif 914w"
                  }
                  sizes={"(max-width: 479px) 100vw, 457px"}
                  className={"image-auto course-one-preview mobile-image-hide"}
                />
              </div>
            </div>
            <div className={"w-layout-vflex landing-team-text"}>
              <div className={"small-heading text-dark"}>{"Our experts"}</div>
              <h2 className={"margin-bottom-thirty mobile-margin-fifteen"}>
                {"Teachers and instructors"}
              </h2>
              <div>
                <SiteLink
                  href={"/team"}
                  target={"_blank"}
                  className={"button button-border-off w-inline-block"}
                >
                  <div>{"Our instructor"}</div>
                </SiteLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"landing-membership"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-vflex landing-membership-main-box"}>
            <div className={"membership"}>{"Memberships"}</div>
            <div className={"w-layout-vflex landing-membership-heading"}>
              <div className={"small-heading text-dark"}>{"Memberships"}</div>
              <h2 className={"heading-two-gap-top"}>
                {"Build with Webflow Memberships"}
              </h2>
            </div>
          </div>
          <div className={"w-layout-hflex landing-membership-mid-box"}>
            <div className={"w-layout-hflex landing-membership-left"}>
              <div>
                <img
                  src={
                    "/assets/adaed24c-66ff7a10ac60a3335ecf3485_Membership-Card.webp"
                  }
                  loading={"lazy"}
                  width={"520"}
                  sizes={"(max-width: 767px) 100vw, 520px"}
                  alt={"Screenshot"}
                  srcSet={
                    "/assets/1fe433ed-66ff7a10ac60a3335ecf3485_Membership-Card-p-500.webp 500w, /assets/16dfae8a-66ff7a10ac60a3335ecf3485_Membership-Card-p-800.webp 800w, /assets/adaed24c-66ff7a10ac60a3335ecf3485_Membership-Card.webp 1040w"
                  }
                  className={"landing-membership-card"}
                />
              </div>
              <div className={"membership-denied-box"}>
                <img
                  src={
                    "/assets/130ebfee-66ff7a10faa49d97821d7f7c_Access-Denied.webp"
                  }
                  loading={"lazy"}
                  width={"391"}
                  sizes={"(max-width: 479px) 100vw, 391px"}
                  alt={"Screenshot"}
                  srcSet={
                    "/assets/0839908b-66ff7a10faa49d97821d7f7c_Access-Denied-p-500.webp 500w, /assets/130ebfee-66ff7a10faa49d97821d7f7c_Access-Denied.webp 782w"
                  }
                  className={"border-radius-four"}
                />
              </div>
            </div>
            <div className={"w-layout-vflex landing-membership-right"}>
              <h3 className={"membership-heading"}>
                {"Course details without test login"}
              </h3>
              <p className={"no-margin-bottom text-dark"}>
                {
                  'Access to course details is restricted without a test login. To view the content, users must login with their credentials. Unauthorized access will result in an "Access Denied" message.'
                }
              </p>
            </div>
          </div>
          <div className={"w-layout-hflex landing-membership-bottom-box"}>
            <div className={"w-layout-vflex landing-bottom-box-left"}>
              <h3 className={"membership-heading"}>
                {"Course details after test login"}
              </h3>
              <p className={"text-dark landing-box-margin"}>
                {
                  'Access to course details is restricted without a test login. To view the content, users must login with their credentials. Unauthorized access will result in an "Access Denied" message.'
                }
              </p>
              <div className={"w-layout-hflex landing-box-steps"}>
                <div className={"heading-three text-opacity-twenty"}>
                  {"01"}
                </div>
                <div className={"w-layout-vflex"}>
                  <div className={"heading-five margin-bottom-fifteen"}>
                    {"Login with test account"}
                  </div>
                  <p className={"no-margin-bottom"}>
                    {
                      "Enter test username and password on the test login page to gain access."
                    }
                  </p>
                </div>
              </div>
              <div className={"w-layout-hflex landing-box-steps"}>
                <div className={"heading-three text-opacity-twenty"}>
                  {"02"}
                </div>
                <div className={"w-layout-vflex"}>
                  <div className={"heading-five margin-bottom-fifteen"}>
                    {"Browse courses"}
                  </div>
                  <p className={"no-margin-bottom"}>
                    {
                      "View a list of all available courses assigned to you or that you have enrolled in."
                    }
                  </p>
                </div>
              </div>
              <div
                className={"w-layout-hflex landing-box-steps no-margin-bottom"}
              >
                <div className={"heading-three text-opacity-twenty"}>
                  {"03"}
                </div>
                <div className={"w-layout-vflex"}>
                  <div className={"heading-five margin-bottom-fifteen"}>
                    {"Login with test account"}
                  </div>
                  <p className={"no-margin-bottom"}>
                    {
                      "Upon selecting the course, you will be directed to the course page where you can view detailed information such as:"
                    }
                  </p>
                  <ul role={"list"}>
                    <li>{"Course description"}</li>
                    <li>{"Module structure"}</li>
                    <li>{"Course duration"}</li>
                    <li>{"Course materials and resources"}</li>
                    <li>{"Instructor information"}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={"w-layout-vflex landing-bottom-box-right"}>
              <div className={"landing-bottom-box card-off"}>
                <img
                  src={
                    "/assets/52158210-66ff7d309a10f57c14418eb2_Course-Details-Card-2.webp"
                  }
                  loading={"lazy"}
                  width={"446"}
                  sizes={"(max-width: 479px) 100vw, 446px"}
                  alt={"Screenshot"}
                  srcSet={
                    "/assets/b41d54e2-66ff7d309a10f57c14418eb2_Course-Details-Card-2-p-500.webp 500w, /assets/911493db-66ff7d309a10f57c14418eb2_Course-Details-Card-2-p-800.webp 800w, /assets/52158210-66ff7d309a10f57c14418eb2_Course-Details-Card-2.webp 892w"
                  }
                  className={"border-radius-four image-shadow"}
                />
              </div>
              <div className={"landing-bottom-card card-off"}>
                <img
                  src={
                    "/assets/adaed24c-66ff7a10ac60a3335ecf3485_Membership-Card.webp"
                  }
                  loading={"lazy"}
                  width={"301"}
                  sizes={"(max-width: 479px) 100vw, 301px"}
                  alt={"Screenshot"}
                  srcSet={
                    "/assets/1fe433ed-66ff7a10ac60a3335ecf3485_Membership-Card-p-500.webp 500w, /assets/16dfae8a-66ff7a10ac60a3335ecf3485_Membership-Card-p-800.webp 800w, /assets/adaed24c-66ff7a10ac60a3335ecf3485_Membership-Card.webp 1040w"
                  }
                  className={"border-radius-four image-shadow"}
                />
              </div>
              <div className={"landing-bottom-details"}>
                <img
                  src={
                    "/assets/d3811a0c-66ff7d9386f85d8c0308aefa_Course-Details-Screen.webp"
                  }
                  loading={"lazy"}
                  width={"575"}
                  sizes={"(max-width: 767px) 100vw, 575px"}
                  alt={"Screenshot"}
                  srcSet={
                    "/assets/f359ca32-66ff7d9386f85d8c0308aefa_Course-Details-Screen-p-500.webp 500w, /assets/e101352f-66ff7d9386f85d8c0308aefa_Course-Details-Screen-p-800.webp 800w, /assets/d17fef80-66ff7d9386f85d8c0308aefa_Course-Details-Screen-p-1080.webp 1080w, /assets/d3811a0c-66ff7d9386f85d8c0308aefa_Course-Details-Screen.webp 1150w"
                  }
                  className={
                    "border-radius-four image-shadow tab-image-full-width"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"landing-innerpage"}>
        <div className={"w-layout-vflex landing-innerpage-main"}>
          <h2 className={"innerpage-marquee-heading"}>{"Inner page demos"}</h2>
          <p className={"innerpage-marquee-description"}>
            {
              "Elearna helps you to save the time with its professional pre-built inner pages."
            }
          </p>
          <div
            className={
              "w-layout-blockcontainer container landing-slider-container w-container"
            }
          >
            <div className={"innerpage-demos-boxes"}>
              <SiteLink
                href={"/about-one"}
                target={"_blank"}
                className={"innerpage-cards w-inline-block"}
              >
                <img
                  src={
                    "/assets/4d6149e5-66fa74ddb7c6da935a04255a_About-One-4.webp"
                  }
                  loading={"lazy"}
                  width={"488"}
                  height={"Auto"}
                  alt={"Screenshot"}
                  sizes={"(max-width: 767px) 100vw, 488px"}
                  srcSet={
                    "/assets/c6ccc85f-66fa74ddb7c6da935a04255a_About-One-4-p-500.webp 500w, /assets/cedd673c-66fa74ddb7c6da935a04255a_About-One-4-p-800.webp 800w, /assets/4d6149e5-66fa74ddb7c6da935a04255a_About-One-4.webp 1048w"
                  }
                  className={"innerpage-cards-image border-radius-four"}
                />
                <div className={"innerpage-cards-text"}>
                  <div className={"heading-four text-white"}>{"About one"}</div>
                </div>
              </SiteLink>
              <SiteLink
                href={"/about-two"}
                target={"_blank"}
                className={"innerpage-cards w-inline-block"}
              >
                <img
                  src={
                    "/assets/7ccd1cc8-66fa7431e7d757f944eb1a98_About-Two.webp"
                  }
                  loading={"lazy"}
                  width={"488"}
                  height={"Auto"}
                  alt={"Screenshot"}
                  sizes={"(max-width: 767px) 100vw, 488px"}
                  srcSet={
                    "/assets/3562abb8-66fa7431e7d757f944eb1a98_About-Two-p-500.webp 500w, /assets/1c64e797-66fa7431e7d757f944eb1a98_About-Two-p-800.webp 800w, /assets/7ccd1cc8-66fa7431e7d757f944eb1a98_About-Two.webp 1048w"
                  }
                  className={"innerpage-cards-image border-radius-four"}
                />
                <div className={"innerpage-cards-text"}>
                  <div className={"heading-four text-white"}>{"About two"}</div>
                </div>
              </SiteLink>
              <SiteLink
                href={"/course-one"}
                target={"_blank"}
                className={"innerpage-cards w-inline-block"}
              >
                <img
                  src={
                    "/assets/a0d96f0f-66fa775b2ce68041b4aa043b_Course-One.webp"
                  }
                  loading={"lazy"}
                  width={"488"}
                  height={"Auto"}
                  alt={"Screenshot"}
                  sizes={"(max-width: 767px) 100vw, 488px"}
                  srcSet={
                    "/assets/b9cf889b-66fa775b2ce68041b4aa043b_Course-One-p-500.webp 500w, /assets/061b200f-66fa775b2ce68041b4aa043b_Course-One-p-800.webp 800w, /assets/a0d96f0f-66fa775b2ce68041b4aa043b_Course-One.webp 1048w"
                  }
                  className={"innerpage-cards-image border-radius-four"}
                />
                <div className={"innerpage-cards-text"}>
                  <div className={"heading-four text-white"}>
                    {"Course one"}
                  </div>
                </div>
              </SiteLink>
              <SiteLink
                href={"/course-two"}
                target={"_blank"}
                className={"innerpage-cards w-inline-block"}
              >
                <img
                  src={
                    "/assets/afba70d3-66fa775bca6c78c198619cf2_Course-Two.webp"
                  }
                  loading={"lazy"}
                  width={"488"}
                  height={"Auto"}
                  alt={"Screenshot"}
                  sizes={"(max-width: 767px) 100vw, 488px"}
                  srcSet={
                    "/assets/34ca333c-66fa775bca6c78c198619cf2_Course-Two-p-500.webp 500w, /assets/86c38519-66fa775bca6c78c198619cf2_Course-Two-p-800.webp 800w, /assets/afba70d3-66fa775bca6c78c198619cf2_Course-Two.webp 1048w"
                  }
                  className={"innerpage-cards-image border-radius-four"}
                />
                <div className={"innerpage-cards-text"}>
                  <div className={"heading-four text-white"}>
                    {"Course two"}
                  </div>
                </div>
              </SiteLink>
              <SiteLink
                href={"/course-three"}
                target={"_blank"}
                className={"innerpage-cards w-inline-block"}
              >
                <img
                  src={
                    "/assets/394938a1-66fa775b27c00e4c9c1bb4ca_Course-Three.webp"
                  }
                  loading={"lazy"}
                  width={"488"}
                  height={"Auto"}
                  alt={"Screenshot"}
                  sizes={"(max-width: 767px) 100vw, 488px"}
                  srcSet={
                    "/assets/188cb3e8-66fa775b27c00e4c9c1bb4ca_Course-Three-p-500.webp 500w, /assets/00fcc397-66fa775b27c00e4c9c1bb4ca_Course-Three-p-800.webp 800w, /assets/394938a1-66fa775b27c00e4c9c1bb4ca_Course-Three.webp 1048w"
                  }
                  className={"innerpage-cards-image border-radius-four"}
                />
                <div className={"innerpage-cards-text"}>
                  <div className={"heading-four text-white"}>
                    {"Course three"}
                  </div>
                </div>
              </SiteLink>
              <SiteLink
                href={"/contact-one"}
                target={"_blank"}
                className={"innerpage-cards w-inline-block"}
              >
                <img
                  src={
                    "/assets/12c25490-66fa7953e7ab03a7d6a09032_Contact-01-2.webp"
                  }
                  loading={"lazy"}
                  width={"488"}
                  height={"Auto"}
                  alt={"Screenshot"}
                  sizes={"(max-width: 767px) 100vw, 488px"}
                  srcSet={
                    "/assets/867054e5-66fa7953e7ab03a7d6a09032_Contact-01-2-p-500.webp 500w, /assets/fefc9d47-66fa7953e7ab03a7d6a09032_Contact-01-2-p-800.webp 800w, /assets/12c25490-66fa7953e7ab03a7d6a09032_Contact-01-2.webp 1048w"
                  }
                  className={"innerpage-cards-image border-radius-four"}
                />
                <div className={"innerpage-cards-text"}>
                  <div className={"heading-four text-white"}>
                    {"Contact one"}
                  </div>
                </div>
              </SiteLink>
              <SiteLink
                href={"/contact-two"}
                target={"_blank"}
                className={"innerpage-cards w-inline-block"}
              >
                <img
                  src={
                    "/assets/9c9179e9-66fa7954ca6c78c198639331_Contact-2-2.webp"
                  }
                  loading={"lazy"}
                  width={"488"}
                  height={"Auto"}
                  alt={"Screenshot"}
                  sizes={"(max-width: 767px) 100vw, 488px"}
                  srcSet={
                    "/assets/ce088fac-66fa7954ca6c78c198639331_Contact-2-2-p-500.webp 500w, /assets/b42dc030-66fa7954ca6c78c198639331_Contact-2-2-p-800.webp 800w, /assets/9c9179e9-66fa7954ca6c78c198639331_Contact-2-2.webp 1048w"
                  }
                  className={"innerpage-cards-image border-radius-four"}
                />
                <div className={"innerpage-cards-text"}>
                  <div className={"heading-four text-white"}>
                    {"Contact two"}
                  </div>
                </div>
              </SiteLink>
              <SiteLink
                href={"/contact-three"}
                target={"_blank"}
                className={"innerpage-cards w-inline-block"}
              >
                <img
                  src={
                    "/assets/b06ebc8a-66fa79543b706c6015aa4b22_Contact-3-2.webp"
                  }
                  loading={"lazy"}
                  width={"488"}
                  height={"Auto"}
                  alt={"Screenshot"}
                  sizes={"(max-width: 767px) 100vw, 488px"}
                  srcSet={
                    "/assets/b8b8fe68-66fa79543b706c6015aa4b22_Contact-3-2-p-500.webp 500w, /assets/64a8cae8-66fa79543b706c6015aa4b22_Contact-3-2-p-800.webp 800w, /assets/b06ebc8a-66fa79543b706c6015aa4b22_Contact-3-2.webp 1048w"
                  }
                  className={"innerpage-cards-image border-radius-four"}
                />
                <div className={"innerpage-cards-text"}>
                  <div className={"heading-four text-white"}>
                    {"Contact three"}
                  </div>
                </div>
              </SiteLink>
              <SiteLink
                href={"/blog-one"}
                target={"_blank"}
                className={"innerpage-cards w-inline-block"}
              >
                <img
                  src={
                    "/assets/30dbf8dc-66fa7b12fec88b5a0ef3b225_Blog-One.webp"
                  }
                  loading={"lazy"}
                  width={"488"}
                  height={"Auto"}
                  alt={"Screenshot"}
                  sizes={"(max-width: 767px) 100vw, 488px"}
                  srcSet={
                    "/assets/eb238d64-66fa7b12fec88b5a0ef3b225_Blog-One-p-500.webp 500w, /assets/34e950fa-66fa7b12fec88b5a0ef3b225_Blog-One-p-800.webp 800w, /assets/30dbf8dc-66fa7b12fec88b5a0ef3b225_Blog-One.webp 1048w"
                  }
                  className={"innerpage-cards-image border-radius-four"}
                />
                <div className={"innerpage-cards-text"}>
                  <div className={"heading-four text-white"}>{"Blog one"}</div>
                </div>
              </SiteLink>
              <SiteLink
                href={"/blog-two"}
                target={"_blank"}
                className={"innerpage-cards w-inline-block"}
              >
                <img
                  src={
                    "/assets/cb9f316f-66fa7b129a7b589739d75227_Blog-Two.webp"
                  }
                  loading={"lazy"}
                  width={"488"}
                  height={"Auto"}
                  alt={"Screenshot"}
                  sizes={"(max-width: 767px) 100vw, 488px"}
                  srcSet={
                    "/assets/33f2f35f-66fa7b129a7b589739d75227_Blog-Two-p-500.webp 500w, /assets/2fb7f268-66fa7b129a7b589739d75227_Blog-Two-p-800.webp 800w, /assets/cb9f316f-66fa7b129a7b589739d75227_Blog-Two.webp 1048w"
                  }
                  className={"innerpage-cards-image border-radius-four"}
                />
                <div className={"innerpage-cards-text"}>
                  <div className={"heading-four text-white"}>{"Blog two"}</div>
                </div>
              </SiteLink>
              <SiteLink
                href={"/blog-three"}
                target={"_blank"}
                className={"innerpage-cards w-inline-block"}
              >
                <img
                  src={
                    "/assets/7a72188d-66fa7b12cac7b5a1ccb99b62_Blog-Three.webp"
                  }
                  loading={"lazy"}
                  width={"488"}
                  height={"Auto"}
                  alt={"Screenshot"}
                  sizes={"(max-width: 767px) 100vw, 488px"}
                  srcSet={
                    "/assets/c4d6ea16-66fa7b12cac7b5a1ccb99b62_Blog-Three-p-500.webp 500w, /assets/7572cab7-66fa7b12cac7b5a1ccb99b62_Blog-Three-p-800.webp 800w, /assets/7a72188d-66fa7b12cac7b5a1ccb99b62_Blog-Three.webp 1048w"
                  }
                  className={"innerpage-cards-image border-radius-four"}
                />
                <div className={"innerpage-cards-text"}>
                  <div className={"heading-four text-white"}>
                    {"Blog three"}
                  </div>
                </div>
              </SiteLink>
              <SiteLink
                href={
                  "/blog-posts/the-evolution-of-teaching-tools-in-the-21st-century"
                }
                target={"_blank"}
                className={"innerpage-cards w-inline-block"}
              >
                <img
                  src={
                    "/assets/e544d7c6-66fa7bb9fd37f53b0d0739d4_Blog-Details-3.webp"
                  }
                  loading={"lazy"}
                  width={"488"}
                  height={"Auto"}
                  alt={"Screenshot"}
                  sizes={"(max-width: 767px) 100vw, 488px"}
                  srcSet={
                    "/assets/ee8dbe78-66fa7bb9fd37f53b0d0739d4_Blog-Details-3-p-500.webp 500w, /assets/678d4bd2-66fa7bb9fd37f53b0d0739d4_Blog-Details-3-p-800.webp 800w, /assets/e544d7c6-66fa7bb9fd37f53b0d0739d4_Blog-Details-3.webp 1048w"
                  }
                  className={"innerpage-cards-image border-radius-four"}
                />
                <div className={"innerpage-cards-text"}>
                  <div className={"heading-four text-white"}>
                    {"Blog details"}
                  </div>
                </div>
              </SiteLink>
              <SiteLink
                href={"/pricing-one"}
                target={"_blank"}
                className={"innerpage-cards w-inline-block"}
              >
                <img
                  src={
                    "/assets/bf8a37a9-66fa8d8aa79297e84d176d61_Pricing-One.webp"
                  }
                  loading={"lazy"}
                  width={"488"}
                  height={"Auto"}
                  alt={"Screenshot"}
                  sizes={"(max-width: 767px) 100vw, 488px"}
                  srcSet={
                    "/assets/cfb6af9c-66fa8d8aa79297e84d176d61_Pricing-One-p-500.webp 500w, /assets/aacad2a6-66fa8d8aa79297e84d176d61_Pricing-One-p-800.webp 800w, /assets/bf8a37a9-66fa8d8aa79297e84d176d61_Pricing-One.webp 1048w"
                  }
                  className={"innerpage-cards-image border-radius-four"}
                />
                <div className={"innerpage-cards-text"}>
                  <div className={"heading-four text-white"}>
                    {"Pricing one"}
                  </div>
                </div>
              </SiteLink>
              <SiteLink
                href={"/pricing-two"}
                target={"_blank"}
                className={"innerpage-cards w-inline-block"}
              >
                <img
                  src={
                    "/assets/3658b6ea-66fa8b8bfc8507277f6f639f_Pricing-Two.webp"
                  }
                  loading={"lazy"}
                  width={"488"}
                  height={"Auto"}
                  alt={"Screenshot"}
                  sizes={"(max-width: 767px) 100vw, 488px"}
                  srcSet={
                    "/assets/ef5b3380-66fa8b8bfc8507277f6f639f_Pricing-Two-p-500.webp 500w, /assets/ce9c6160-66fa8b8bfc8507277f6f639f_Pricing-Two-p-800.webp 800w, /assets/3658b6ea-66fa8b8bfc8507277f6f639f_Pricing-Two.webp 1048w"
                  }
                  className={"innerpage-cards-image border-radius-four"}
                />
                <div className={"innerpage-cards-text"}>
                  <div className={"heading-four text-white"}>
                    {"Pricing two"}
                  </div>
                </div>
              </SiteLink>
              <SiteLink
                href={"/pricing-three"}
                target={"_blank"}
                className={"innerpage-cards w-inline-block"}
              >
                <img
                  src={
                    "/assets/45db04c7-66fe32527a07feeaa333448a_Pricing-Three-NEw.webp"
                  }
                  loading={"lazy"}
                  width={"488"}
                  height={"Auto"}
                  alt={""}
                  sizes={"(max-width: 767px) 100vw, 488px"}
                  srcSet={
                    "/assets/09e0ec56-66fe32527a07feeaa333448a_Pricing-Three-NEw-p-500.webp 500w, /assets/dc50ca99-66fe32527a07feeaa333448a_Pricing-Three-NEw-p-800.webp 800w, /assets/45db04c7-66fe32527a07feeaa333448a_Pricing-Three-NEw.webp 1048w"
                  }
                  className={"innerpage-cards-image border-radius-four"}
                />
                <div className={"innerpage-cards-text"}>
                  <div className={"heading-four text-white"}>
                    {"Pricing three"}
                  </div>
                </div>
              </SiteLink>
              <SiteLink
                href={"/faq"}
                target={"_blank"}
                className={"innerpage-cards w-inline-block"}
              >
                <img
                  src={"/assets/f2ac88dd-66fb873c5a691bd12893f397_FAQ.webp"}
                  loading={"lazy"}
                  width={"488"}
                  height={"Auto"}
                  alt={"Screenshot"}
                  sizes={"(max-width: 767px) 100vw, 488px"}
                  srcSet={
                    "/assets/5dd79106-66fb873c5a691bd12893f397_FAQ-p-500.webp 500w, /assets/69b12191-66fb873c5a691bd12893f397_FAQ-p-800.webp 800w, /assets/f2ac88dd-66fb873c5a691bd12893f397_FAQ.webp 1048w"
                  }
                  className={"innerpage-cards-image border-radius-four"}
                />
                <div className={"innerpage-cards-text"}>
                  <div className={"heading-four text-white"}>{"FAQ"}</div>
                </div>
              </SiteLink>
              <SiteLink
                href={"/career"}
                target={"_blank"}
                className={"innerpage-cards w-inline-block"}
              >
                <img
                  src={
                    "/assets/2afbe5a0-66fa82c252f9881ca108745b_Career-2.webp"
                  }
                  loading={"lazy"}
                  width={"488"}
                  height={"Auto"}
                  alt={"Screenshot"}
                  sizes={"(max-width: 767px) 100vw, 488px"}
                  srcSet={
                    "/assets/b45af668-66fa82c252f9881ca108745b_Career-2-p-500.webp 500w, /assets/5e8ccf00-66fa82c252f9881ca108745b_Career-2-p-800.webp 800w, /assets/2afbe5a0-66fa82c252f9881ca108745b_Career-2.webp 1048w"
                  }
                  className={"innerpage-cards-image border-radius-four"}
                />
                <div className={"innerpage-cards-text"}>
                  <div className={"heading-four text-white"}>{"Career"}</div>
                </div>
              </SiteLink>
              <SiteLink
                href={"/404"}
                target={"_blank"}
                className={"innerpage-cards w-inline-block"}
              >
                <img
                  src={
                    "/assets/e7139623-66fa82c19cf55f6314303226_Career-details-2.webp"
                  }
                  loading={"lazy"}
                  width={"488"}
                  height={"Auto"}
                  alt={"Screenshot"}
                  sizes={"(max-width: 767px) 100vw, 488px"}
                  srcSet={
                    "/assets/df4d9f25-66fa82c19cf55f6314303226_Career-details-2-p-500.webp 500w, /assets/268da81d-66fa82c19cf55f6314303226_Career-details-2-p-800.webp 800w, /assets/e7139623-66fa82c19cf55f6314303226_Career-details-2.webp 1048w"
                  }
                  className={"innerpage-cards-image border-radius-four"}
                />
                <div className={"innerpage-cards-text"}>
                  <div className={"heading-four text-white"}>
                    {"Career details"}
                  </div>
                </div>
              </SiteLink>
              <SiteLink
                href={"/team"}
                target={"_blank"}
                className={"innerpage-cards w-inline-block"}
              >
                <img
                  src={"/assets/f6954585-66fa80f1ccb648cd2976db94_Team-4.webp"}
                  loading={"lazy"}
                  width={"488"}
                  height={"Auto"}
                  alt={"Screenshot"}
                  sizes={"(max-width: 767px) 100vw, 488px"}
                  srcSet={
                    "/assets/f01595a4-66fa80f1ccb648cd2976db94_Team-4-p-500.webp 500w, /assets/b7b4916b-66fa80f1ccb648cd2976db94_Team-4-p-800.webp 800w, /assets/f6954585-66fa80f1ccb648cd2976db94_Team-4.webp 1048w"
                  }
                  className={"innerpage-cards-image border-radius-four"}
                />
                <div className={"innerpage-cards-text"}>
                  <div className={"heading-four text-white"}>{"Team"}</div>
                </div>
              </SiteLink>
              <SiteLink
                href={"/team-members/lee-schmitt"}
                target={"_blank"}
                className={"innerpage-cards w-inline-block"}
              >
                <img
                  src={
                    "/assets/1606c2c3-66fa8066b25bbce9221b65f5_Team-details-3.webp"
                  }
                  loading={"lazy"}
                  width={"488"}
                  height={"Auto"}
                  alt={"Screenshot"}
                  sizes={"(max-width: 767px) 100vw, 488px"}
                  srcSet={
                    "/assets/aaf4b0e6-66fa8066b25bbce9221b65f5_Team-details-3-p-500.webp 500w, /assets/dfb79c18-66fa8066b25bbce9221b65f5_Team-details-3-p-800.webp 800w, /assets/1606c2c3-66fa8066b25bbce9221b65f5_Team-details-3.webp 1048w"
                  }
                  className={"innerpage-cards-image border-radius-four"}
                />
                <div className={"innerpage-cards-text"}>
                  <div className={"heading-four text-white"}>
                    {"Team details"}
                  </div>
                </div>
              </SiteLink>
              <SiteLink
                href={"/events"}
                target={"_blank"}
                className={"innerpage-cards w-inline-block"}
              >
                <img
                  src={"/assets/8f0e1d65-66fa80f1cdbfb6bf9b263f9b_Event-5.webp"}
                  loading={"lazy"}
                  width={"488"}
                  height={"Auto"}
                  alt={"Screenshot"}
                  sizes={"(max-width: 767px) 100vw, 488px"}
                  srcSet={
                    "/assets/09540c56-66fa80f1cdbfb6bf9b263f9b_Event-5-p-500.webp 500w, /assets/95d89c6f-66fa80f1cdbfb6bf9b263f9b_Event-5-p-800.webp 800w, /assets/8f0e1d65-66fa80f1cdbfb6bf9b263f9b_Event-5.webp 1048w"
                  }
                  className={"innerpage-cards-image border-radius-four"}
                />
                <div className={"innerpage-cards-text"}>
                  <div className={"heading-four text-white"}>{"Events"}</div>
                </div>
              </SiteLink>
              <SiteLink
                href={
                  "/events/navigating-the-future-of-online-education-platforms"
                }
                target={"_blank"}
                className={"innerpage-cards w-inline-block"}
              >
                <img
                  src={
                    "/assets/10c6a444-66fa807a13cb6db4ccef1164_Event-details-4.webp"
                  }
                  loading={"lazy"}
                  width={"488"}
                  height={"Auto"}
                  alt={"Screenshot"}
                  sizes={"(max-width: 767px) 100vw, 488px"}
                  srcSet={
                    "/assets/3d065ae0-66fa807a13cb6db4ccef1164_Event-details-4-p-500.webp 500w, /assets/e80fe9dc-66fa807a13cb6db4ccef1164_Event-details-4-p-800.webp 800w, /assets/10c6a444-66fa807a13cb6db4ccef1164_Event-details-4.webp 1048w"
                  }
                  className={"innerpage-cards-image border-radius-four"}
                />
                <div className={"innerpage-cards-text"}>
                  <div className={"heading-four text-white"}>
                    {"Events details"}
                  </div>
                </div>
              </SiteLink>
              <SiteLink
                href={"/log-in"}
                target={"_blank"}
                className={"innerpage-cards w-inline-block"}
              >
                <img
                  src={"/assets/538775f7-66fa8b8b823405b517683fd1_Login-2.webp"}
                  loading={"lazy"}
                  width={"488"}
                  height={"Auto"}
                  alt={"Screenshot"}
                  sizes={"(max-width: 767px) 100vw, 488px"}
                  srcSet={
                    "/assets/f0b037e1-66fa8b8b823405b517683fd1_Login-2-p-500.webp 500w, /assets/6f345039-66fa8b8b823405b517683fd1_Login-2-p-800.webp 800w, /assets/538775f7-66fa8b8b823405b517683fd1_Login-2.webp 1048w"
                  }
                  className={"innerpage-cards-image border-radius-four"}
                />
                <div className={"innerpage-cards-text"}>
                  <div className={"heading-four text-white"}>{"Log in"}</div>
                </div>
              </SiteLink>
              <SiteLink
                href={"/sign-up"}
                target={"_blank"}
                className={"innerpage-cards w-inline-block"}
              >
                <img
                  src={
                    "/assets/e311abb2-66fa8b8b4b95fb40aadb189c_Sign-up-2.webp"
                  }
                  loading={"lazy"}
                  width={"488"}
                  height={"Auto"}
                  alt={"Screenshot"}
                  sizes={"(max-width: 767px) 100vw, 488px"}
                  srcSet={
                    "/assets/cb2d2d84-66fa8b8b4b95fb40aadb189c_Sign-up-2-p-500.webp 500w, /assets/c9c31ad8-66fa8b8b4b95fb40aadb189c_Sign-up-2-p-800.webp 800w, /assets/e311abb2-66fa8b8b4b95fb40aadb189c_Sign-up-2.webp 1048w"
                  }
                  className={"innerpage-cards-image border-radius-four"}
                />
                <div className={"innerpage-cards-text"}>
                  <div className={"heading-four text-white"}>{"Sign up"}</div>
                </div>
              </SiteLink>
              <SiteLink
                href={"/reset-password"}
                target={"_blank"}
                className={"innerpage-cards w-inline-block"}
              >
                <img
                  src={
                    "/assets/24879b4e-66fa8b8bfab9fc0795814b47_Reset-password-2.webp"
                  }
                  loading={"lazy"}
                  width={"488"}
                  height={"Auto"}
                  alt={"Screenshot"}
                  sizes={"(max-width: 767px) 100vw, 488px"}
                  srcSet={
                    "/assets/4bd69af1-66fa8b8bfab9fc0795814b47_Reset-password-2-p-500.webp 500w, /assets/72e3b31c-66fa8b8bfab9fc0795814b47_Reset-password-2-p-800.webp 800w, /assets/24879b4e-66fa8b8bfab9fc0795814b47_Reset-password-2.webp 1048w"
                  }
                  className={"innerpage-cards-image border-radius-four"}
                />
                <div className={"innerpage-cards-text"}>
                  <div className={"heading-four text-white"}>
                    {"Reset password"}
                  </div>
                </div>
              </SiteLink>
              <div className={"innerpages-overlay-move"}></div>
            </div>
          </div>
        </div>
      </section>
      <section className={"landing-blogs"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-hflex landing-blog-main"}>
            <div className={"landing-blog-left"}>
              <div className={"w-layout-vflex landing-blog-left-column"}>
                <div className={"landing-blog-style-box-one"}>
                  <img
                    src={
                      "/assets/51fccd0a-66f4e2544ea1055950abf48e_Blog-Style-2.avif"
                    }
                    loading={"lazy"}
                    width={"403"}
                    height={"409"}
                    alt={"Screenshot"}
                    srcSet={
                      "/assets/778f8625-66f4e2544ea1055950abf48e_Blog-Style-2-p-500.avif 500w, /assets/51fccd0a-66f4e2544ea1055950abf48e_Blog-Style-2.avif 806w"
                    }
                    sizes={"(max-width: 479px) 100vw, 403px"}
                    className={"image-auto course-one-preview"}
                  />
                </div>
                <div className={"yellow-box"}></div>
              </div>
              <div className={"w-layout-vflex landing-blog-right-cloumn"}>
                <div className={"light-blue-box"}></div>
                <div>
                  <img
                    src={
                      "/assets/bdddb930-66f4e2547d05b082d98fdb0f_Blog-Style.avif"
                    }
                    loading={"lazy"}
                    width={"195"}
                    height={"198"}
                    alt={"Screenshot"}
                    className={"image-auto course-one-preview"}
                  />
                </div>
              </div>
              <div className={"landing-blog-details-image"}>
                <img
                  src={
                    "/assets/4a5f791d-66f4e2548b53a8e28619f9f5_Blog-Details.avif"
                  }
                  loading={"lazy"}
                  width={"469"}
                  height={"361"}
                  alt={"Screenshot"}
                  srcSet={
                    "/assets/2a3d9b20-66f4e2548b53a8e28619f9f5_Blog-Details-p-500.avif 500w, /assets/4a5f791d-66f4e2548b53a8e28619f9f5_Blog-Details.avif 938w"
                  }
                  sizes={"(max-width: 479px) 100vw, 469px"}
                  className={"border-radius-twenty-six image-auto"}
                />
              </div>
              <div className={"blog-images-text"}>
                <img
                  src={
                    "/assets/b5edd573-66f4e2543b1d1c6145b0e7a6_Landing-Yellow-Arrow.svg"
                  }
                  loading={"lazy"}
                  alt={"Arrow"}
                />
                <div className={"w-layout-vflex"}>
                  <div className={"stylish-heading"}>{"03"}</div>
                  <div className={"course-text"}>
                    {"Types of online course style with course details"}
                  </div>
                </div>
              </div>
            </div>
            <div className={"w-layout-vflex landing-blog-right-text"}>
              <div className={"small-heading text-dark"}>
                {"Education Blogs"}
              </div>
              <h2 className={"heading-two-gap-updown"}>
                {"Our news and ideas"}
              </h2>
              <p className={"margin-bottom-thirty"}>
                {
                  "Explore blog posts with detailed breakdowns of complex concepts introduced in your lessons, offering additional clarity and examples."
                }
              </p>
              <div>
                <SiteLink
                  href={"/blog-one"}
                  target={"_blank"}
                  className={"button button-border-off w-inline-block"}
                >
                  <div>{"Discover blog"}</div>
                </SiteLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"landing-events"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-hflex landing-events-main"}>
            <div className={"w-layout-vflex landing-blog-right-text"}>
              <div className={"small-heading text-dark"}>{"Our events"}</div>
              <h2 className={"heading-two-gap-updown"}>{"Upcoming events"}</h2>
              <p className={"margin-bottom-thirty"}>
                {
                  "Explore upcoming events offering hands-on workshops, training sessions, and discussions to help you deepen your knowledge and skills."
                }
              </p>
              <div>
                <SiteLink
                  href={"/events"}
                  target={"_blank"}
                  className={"button button-border-off w-inline-block"}
                >
                  <div>{"Discover Events"}</div>
                </SiteLink>
              </div>
            </div>
            <div className={"w-layout-vflex landing-events-images-wrap"}>
              <div className={"events-page-preview"}>
                <img
                  src={"/assets/372da6ba-66f4f159d18c0b2fb0e19438_Event.avif"}
                  loading={"lazy"}
                  width={"490.5"}
                  height={"357.28"}
                  alt={"Screenshot"}
                  srcSet={
                    "/assets/1c52d748-66f4f159d18c0b2fb0e19438_Event-p-500.avif 500w, /assets/372da6ba-66f4f159d18c0b2fb0e19438_Event.avif 981w"
                  }
                  sizes={"(max-width: 767px) 100vw, 490.5px"}
                  className={"image-auto course-one-preview"}
                />
              </div>
              <div className={"w-layout-hflex landing-events-more-images"}>
                <div>
                  <img
                    src={
                      "/assets/32c45106-66f4f15917a909f8c4c2d0b8_Event-details.avif"
                    }
                    loading={"lazy"}
                    width={"429"}
                    height={"384.62"}
                    alt={"Screenshot"}
                    srcSet={
                      "/assets/a9c07dce-66f4f15917a909f8c4c2d0b8_Event-details-p-500.avif 500w, /assets/32c45106-66f4f15917a909f8c4c2d0b8_Event-details.avif 858w"
                    }
                    sizes={"(max-width: 479px) 100vw, 429px"}
                    className={"image-auto course-one-preview"}
                  />
                </div>
                <div className={"landing-more-images-right"}>
                  <img
                    src={
                      "/assets/c351223d-66f4f159751acf48257fd48f_Event-details-2.avif"
                    }
                    loading={"lazy"}
                    width={"141"}
                    height={"292.23"}
                    alt={"Screenshot"}
                    className={"image-auto course-one-preview"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"landing-figma"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-grid landing-fgma-main"}>
            <div className={"w-layout-vflex spacial-card-one"}>
              <img
                width={"86"}
                height={"85"}
                alt={"figma"}
                src={"/assets/9d509a6f-67b83cc77c7884f1c6103263_figma.svg"}
                loading={"lazy"}
                className={"figma-logo"}
              />
              <div className={"heading-three margin-bottom-twenty"}>
                {"Figma File Included"}
              </div>
              <p className={"margin-bottom-twenty"}>
                {"Send us an email to "}
                <SiteLink href={"#"} className={"text-dark"}>
                  {"hello@radianttemplates.com"}
                </SiteLink>
                {
                  " after your purchase (please attach original purchase receipt where purchase code and your workspace name is mentioned) & the fully editable Figma file will be shared with you from Google drive. Please also include a Google id."
                }
              </p>
              <div className={"figma-screen-viewer"}>
                <img
                  sizes={
                    "(max-width: 767px) 100vw, (max-width: 991px) 728px, 824px"
                  }
                  srcSet={
                    "/assets/88bed592-67b83f5588d0bb650517106d_image_2025_02_21T08_53_22_980Z-p-500.avif 500w, /assets/6ec877e4-67b83f5588d0bb650517106d_image_2025_02_21T08_53_22_980Z.avif 824w"
                  }
                  alt={"Figma Screenshot"}
                  src={
                    "/assets/6ec877e4-67b83f5588d0bb650517106d_image_2025_02_21T08_53_22_980Z.avif"
                  }
                  loading={"lazy"}
                  className={"figma-preview"}
                />
                <div className={"spacial-pop-up"}>
                  <div className={"page-count-2"}>{"30+"}</div>
                  <div className={"text-block-2"}>{"templates"}</div>
                </div>
              </div>
            </div>
            <div className={"w-layout-vflex rt-ads-card-v7"}>
              <div className={"offer-container-card-v2"}>
                <div
                  className={"w-layout-blockcontainer rt-container w-container"}
                >
                  <div
                    className={
                      "w-layout-hflex rt-limited-offer background-off rt-padding-reduce"
                    }
                  >
                    <div
                      className={"w-layout-hflex rt-pricing-v2-countdown-text"}
                    >
                      <div
                        data-end={"2025-11-15T23:59:59Z"}
                        className={"countdown"}
                      >
                        {"Unlock full access and save "}
                        <span className={"rt-text-underline"}>{"30%"}</span>
                        {" with Pro yearly "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"rt-ads-card-v7-image-wrapper"}>
                <img
                  width={"602"}
                  sizes={"(max-width: 767px) 100vw, 602px"}
                  alt={""}
                  src={"/assets/0a9637eb-695631901649a35ec5e94a1b_screens.avif"}
                  loading={"lazy"}
                  srcSet={
                    "/assets/d35d69e5-695631901649a35ec5e94a1b_screens-p-500.avif 500w, /assets/0a9637eb-695631901649a35ec5e94a1b_screens.avif 1204w"
                  }
                  className={"rt-ads-image"}
                />
              </div>
              <div className={"w-layout-vflex rt-ads-card-v7-text-wrap"}>
                <div className={"rt-ads-card-v7-text-content"}>
                  <div>
                    <div className={"heading-three margin-bottom-twenty"}>
                      {"Unlock "}
                      <span className={"rt-ads-card-v8-highlight"}>
                        {"160+ premium"}
                      </span>
                      {" Webflow templates today!"}
                    </div>
                    <div className={"rt-ads-v1-cards-description"}>
                      {
                        "Get unlimited access with one payment. Start building today!"
                      }
                    </div>
                  </div>
                  <div className={"w-layout-vflex rt-ads-v7-cards-list"}>
                    <div className={"w-layout-hflex rt-cta-v4-points"}>
                      <div className={"rt-not-shrink align-icon"}>
                        <img
                          width={"12"}
                          height={"10"}
                          alt={""}
                          src={
                            "/assets/2197e743-695631901649a35ec5e94a20_Tick-dark.svg"
                          }
                          loading={"lazy"}
                        />
                      </div>
                      <div>{"Unlimited templates download"}</div>
                    </div>
                    <div className={"rt-grey-line"}></div>
                    <div className={"w-layout-hflex rt-cta-v4-points"}>
                      <div className={"rt-not-shrink align-icon"}>
                        <img
                          width={"12"}
                          height={"10"}
                          alt={""}
                          src={
                            "/assets/2197e743-695631901649a35ec5e94a20_Tick-dark.svg"
                          }
                          loading={"lazy"}
                        />
                      </div>
                      <div>{"New templates added every month"}</div>
                    </div>
                    <div className={"rt-grey-line"}></div>
                    <div className={"w-layout-hflex rt-cta-v4-points"}>
                      <div className={"rt-not-shrink align-icon"}>
                        <img
                          width={"12"}
                          height={"10"}
                          alt={""}
                          src={
                            "/assets/2197e743-695631901649a35ec5e94a20_Tick-dark.svg"
                          }
                          loading={"lazy"}
                        />
                      </div>
                      <div>{"Figma file available"}</div>
                      <div className={"rt-not-shrink align-icon"}>
                        <img
                          width={"16"}
                          height={"16"}
                          alt={""}
                          src={
                            "/assets/89c569cd-695631901649a35ec5e94a17_figma-2-.svg"
                          }
                          loading={"lazy"}
                        />
                      </div>
                    </div>
                  </div>
                  <SiteLink
                    href={"https://radianttemplates.com/unlock-access"}
                    target={"_blank"}
                    className={"button button-border-off w-inline-block"}
                  >
                    <div>{"Unlock all access"}</div>
                  </SiteLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"landing-features"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-vflex landing-features-main"}>
            <h2 className={"no-margin-top margin-bottom-twenty"}>
              {"Core features"}
            </h2>
            <p className={"landing-features-description"}>
              {
                "Elearna is built for modern eLearning web pages bundle with user support, life-time updating, SEO and many more features."
              }
            </p>
            <div className={"landing-features-boxes"}>
              <div className={"figma-box core-boxes"}>
                <div className={"w-layout-vflex landing-cards-main"}>
                  <img
                    src={
                      "/assets/f9f3ac16-66f5030dd897dfbb214e6611_Landing-Icon.svg"
                    }
                    loading={"lazy"}
                    width={"49"}
                    height={"42"}
                    alt={"Icon"}
                    className={"landing-icons"}
                  />
                  <div className={"heading-four"}>{"Course listing"}</div>
                </div>
                <div className={"figma-overlay radius-reduce"}></div>
              </div>
              <div className={"figma-box core-boxes"}>
                <div className={"w-layout-vflex landing-cards-main"}>
                  <img
                    src={
                      "/assets/6e184482-66f4fafe41c62cb699683e84_Landing-Icon-2.svg"
                    }
                    loading={"lazy"}
                    width={"57"}
                    height={"40"}
                    alt={"Icon"}
                    className={"landing-icons"}
                  />
                  <div className={"heading-four"}>{"Retina ready"}</div>
                </div>
                <div className={"figma-overlay radius-reduce"}></div>
              </div>
              <div className={"figma-box core-boxes"}>
                <div className={"w-layout-vflex landing-cards-main"}>
                  <img
                    src={
                      "/assets/1e33d301-66f4fafe1c59cbfc285c0b4a_Landing-Icon-3.svg"
                    }
                    loading={"lazy"}
                    width={"48"}
                    height={"41"}
                    alt={"Icon"}
                    className={"landing-icons"}
                  />
                  <div className={"heading-four"}>{"Course video"}</div>
                </div>
                <div className={"figma-overlay radius-reduce"}></div>
              </div>
              <div className={"figma-box core-boxes"}>
                <div className={"w-layout-vflex landing-cards-main"}>
                  <img
                    src={
                      "/assets/c17daaee-66f4fafe294921d7ae181dae_Landing-Icon-4.svg"
                    }
                    loading={"lazy"}
                    width={"42"}
                    height={"42"}
                    alt={"Icon"}
                    className={"landing-icons"}
                  />
                  <div className={"heading-four"}>{"Pixel perfect"}</div>
                </div>
                <div className={"figma-overlay radius-reduce"}></div>
              </div>
              <div className={"figma-box core-boxes"}>
                <div className={"w-layout-vflex landing-cards-main"}>
                  <img
                    src={
                      "/assets/6d94bdf8-66f4fafed897dfbb2146d981_Landing-Icon-5.svg"
                    }
                    loading={"lazy"}
                    width={"38"}
                    height={"42"}
                    alt={"Icon"}
                    className={"landing-icons"}
                  />
                  <div className={"heading-four"}>{"CMS solution"}</div>
                </div>
                <div className={"figma-overlay radius-reduce"}></div>
              </div>
              <div className={"figma-box core-boxes"}>
                <div className={"w-layout-vflex landing-cards-main"}>
                  <img
                    src={
                      "/assets/8a19a257-66f4fafebe5ac9f5beecdd13_Landing-Icon-6.svg"
                    }
                    loading={"lazy"}
                    width={"59"}
                    height={"42"}
                    alt={"Icon"}
                    className={"landing-icons"}
                  />
                  <div className={"heading-four"}>{"Fast performance"}</div>
                </div>
                <div className={"figma-overlay radius-reduce"}></div>
              </div>
              <div className={"figma-box core-boxes"}>
                <div className={"w-layout-vflex landing-cards-main"}>
                  <img
                    src={
                      "/assets/e6d2ce0a-66f4fafefa450a70f2db7c71_Landing-Icon-7.svg"
                    }
                    loading={"lazy"}
                    width={"42"}
                    height={"42"}
                    alt={"Icon"}
                    className={"landing-icons"}
                  />
                  <div className={"heading-four"}>{"Easy to edit"}</div>
                </div>
                <div className={"figma-overlay radius-reduce"}></div>
              </div>
              <div className={"figma-box core-boxes"}>
                <div className={"w-layout-vflex landing-cards-main"}>
                  <img
                    src={
                      "/assets/fc1967cf-66f4fafe8fbc5fb41686f217_Landing-Icon-8.svg"
                    }
                    loading={"lazy"}
                    width={"41"}
                    height={"41"}
                    alt={"Icon"}
                    className={"landing-icons"}
                  />
                  <div className={"heading-four"}>{"Ecommerce ready"}</div>
                </div>
                <div className={"figma-overlay radius-reduce"}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"landing-footer"}>
        <div
          className={
            "w-layout-blockcontainer landing-footer-container w-container"
          }
        >
          <div className={"w-layout-vflex landing-footer-main"}>
            <SiteLink href={"/home-one"} className={"w-inline-block"}>
              <img
                src={"/assets/ccc5f759-66c6fb8bf82fe9cef5f78d65_Elearna.svg"}
                loading={"lazy"}
                width={"197"}
                height={"Auto"}
                alt={"Elearna"}
                className={"landing-site-logo"}
              />
            </SiteLink>
            <div className={"heading-three text-white"}>
              {
                "Want us to customize Elerna for you or want us to create new template for you?"
              }
            </div>
            <div className={"text-light-white"}>
              {"Start transforming your next-generation eLearning website."}
            </div>
            <div className={"w-layout-hflex button-wrapper"}>
              <SiteLink
                data-motion-id={"d2419891-9f36-e25c-7c72-b1716c5d291d"}
                href={"http://webflow.com/templates/designers/radiant-themes"}
                target={"_blank"}
                className={"button button-yellow w-inline-block"}
              >
                <div>{"Check our templates"}</div>
              </SiteLink>
              <SiteLink
                href={"https://www.radianttemplates.com/contact-us"}
                target={"_blank"}
                className={"button white-border-button w-inline-block"}
              >
                <div>{"Get Quote"}</div>
              </SiteLink>
            </div>
          </div>
        </div>
        <div className={"landing-footer-left-images"}>
          <img
            className={"landing-footer-image-one landing-footer-image-shadow"}
            src={"/assets/a3b8b249-66f51659dd633a6cf1fa19fb_Event-2.avif"}
            width={"342"}
            height={"249"}
            alt={"Screenshot"}
            sizes={"(max-width: 479px) 100vw, 342px"}
            loading={"lazy"}
            srcSet={
              "/assets/008d706c-66f51659dd633a6cf1fa19fb_Event-2-p-500.avif 500w, /assets/a3b8b249-66f51659dd633a6cf1fa19fb_Event-2.avif 684w"
            }
          />
          <img
            src={"/assets/6cd41ed3-66f516591030b321fb9ef243_09.avif"}
            loading={"lazy"}
            width={"319.5"}
            height={"267.9"}
            alt={"Screenshot"}
            className={"landing-footer-image-two landing-footer-image-shadow"}
          />
          <img
            src={"/assets/a28e4e18-66f51658db6e36971155b5ad_02-1.avif"}
            loading={"lazy"}
            width={"159"}
            height={"206"}
            alt={"Screenshot"}
            className={"landing-footer-image-three"}
          />
          <img
            className={"landing-four-image-four landing-footer-image-shadow"}
            src={"/assets/a18415cd-66f51658fd63468ccbd4db83_08.avif"}
            width={"449"}
            height={"246"}
            alt={"Screenshot"}
            sizes={"(max-width: 479px) 100vw, 449px"}
            loading={"lazy"}
            srcSet={
              "/assets/57d62b42-66f51658fd63468ccbd4db83_08-p-500.avif 500w, /assets/a18415cd-66f51658fd63468ccbd4db83_08.avif 898w"
            }
          />
        </div>
        <div className={"landing-footer-right-images"}>
          <img
            className={"landing-right-image-one landing-footer-image-shadow"}
            src={"/assets/60aceaf1-66f51fc6496bd246d9c86a74_Landing-Right.avif"}
            width={"396"}
            height={"253"}
            alt={"Screenshot"}
            sizes={"(max-width: 479px) 100vw, 396px"}
            loading={"lazy"}
            srcSet={
              "/assets/538904cd-66f51fc6496bd246d9c86a74_Landing-Right-p-500.avif 500w, /assets/60aceaf1-66f51fc6496bd246d9c86a74_Landing-Right.avif 792w"
            }
          />
          <img
            src={
              "/assets/1100fdc8-66f51fc6177f3e35aa563233_Landing-Right-2.avif"
            }
            loading={"lazy"}
            width={"263"}
            height={"284"}
            alt={"Screenshot"}
            className={"landing-right-image-two landing-footer-image-shadow"}
          />
          <img
            className={"landing-right-image-three landing-footer-image-shadow"}
            src={
              "/assets/63a1e287-66f51fc607f0eef01a1dbd32_Landing-Right-3.avif"
            }
            width={"395"}
            height={"246"}
            alt={"Screenshot"}
            sizes={"(max-width: 479px) 100vw, 395px"}
            loading={"lazy"}
            srcSet={
              "/assets/2de7ce13-66f51fc607f0eef01a1dbd32_Landing-Right-3-p-500.avif 500w, /assets/63a1e287-66f51fc607f0eef01a1dbd32_Landing-Right-3.avif 790w"
            }
          />
          <img
            src={
              "/assets/905f98dd-66f51fc672b75420c518573b_Landing-Right-4.avif"
            }
            loading={"lazy"}
            width={"332.5"}
            height={"182"}
            alt={"Screenshot"}
            className={"landing-right-image-four landing-footer-image-shadow"}
          />
          <img
            src={
              "/assets/07537c94-66f51fc6fa8216001b9eef2f_Landing-Right-5.avif"
            }
            loading={"lazy"}
            width={"214"}
            height={"182"}
            alt={"Screenshot"}
            className={"landing-right-image-five"}
          />
        </div>
        <div
          className={
            "w-layout-blockcontainer contact-three-container w-container"
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
                {"404 Error"}
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
                  href={"http://webflow.com/"}
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
    </>
  );
}
