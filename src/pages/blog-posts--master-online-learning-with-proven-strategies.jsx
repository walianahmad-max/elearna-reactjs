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
            data-motion-id={"fb4ef407-053b-0874-9f5b-4f7137e3f433"}
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
                    data-motion-id={"17d46984-7cba-edd4-a6dd-52a6d0365ce9"}
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
                    data-motion-id={"17d46984-7cba-edd4-a6dd-52a6d0365cf5"}
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
                        data-motion-id={"17d46984-7cba-edd4-a6dd-52a6d0365cfb"}
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
                        data-motion-id={"17d46984-7cba-edd4-a6dd-52a6d0365d07"}
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
                    data-motion-id={"17d46984-7cba-edd4-a6dd-52a6d0365d25"}
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
                    data-motion-id={"17d46984-7cba-edd4-a6dd-52a6d0365d41"}
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
                    data-motion-id={"17d46984-7cba-edd4-a6dd-52a6d0365d4d"}
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
                          data-motion-id={
                            "c0ed1247-def4-0564-3c81-5cee2fd4254d"
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
                            "c0ed1247-def4-0564-3c81-5cee2fd42552"
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
      <section
        style={{
          backgroundImage:
            'url("/assets/52ea9f8b-66ff6e15aa9de72eae9e859e_Blog-Portrait-Thumbnail-11.webp")',
        }}
        className={"blog-details-hero"}
      >
        <div className={"blog-details-hero-overlay"}></div>
        <div
          className={
            "w-layout-blockcontainer blog-details-hero-container w-container"
          }
        >
          <div className={"w-layout-vflex blog-details-hero-main"}>
            <div
              data-motion-id={"8277311e-18c8-04f6-75df-c1f4994fce91"}
              className={"w-layout-hflex blog-details-hero-text-top"}
            >
              <div className={"small-heading"}>{"Development"}</div>
              <div className={"w-layout-hflex blog-card-author"}>
                <div className={"small-dot color-white"}></div>
                <div className={"small-heading"}>{"Samantha Dicki"}</div>
              </div>
            </div>
            <h1
              data-motion-id={"c65e0bfb-5c96-ce02-462a-dbac823ee56a"}
              className={"heading-one-top-gap text-white margin-bottom-twenty"}
            >
              {"Master online learning with proven strategies"}
            </h1>
            <div
              data-motion-id={"b16e5383-059e-71f4-1db3-83701fb0cc02"}
              className={"text-white"}
            >
              {"October 4, 2024"}
            </div>
          </div>
        </div>
      </section>
      <section className={"blog-details-main"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div
            data-motion-id={"6d9eba64-9674-7acc-7962-d07ca40eb27b"}
            className={"blog-details-main-block"}
          >
            <div
              className={
                "w-layout-blockcontainer blog-details-container w-container"
              }
            >
              <div className={"w-richtext"}>
                <p>
                  {
                    "Lorem ipsum dolor sit amet consectetur. Et facilisis nunc quam quam etiam donec pellentesque ut. Nisl pellentesque at aliquam scelerisque non consequat amet curabitur. Imperdiet habitant purus pulvinar diam. Molestie pharetra morbi eu odio volutpat. Cursus velit elit senectus auctor vitae tristique velit. Feugiat consequat diam ipsum suspendisse vestibulum ipsum malesuada."
                  }
                </p>
                <p>
                  {
                    "Lorem ipsum dolor sit amet consectetur. Interdum mauris ac ipsum pulvinar tempor tincidunt. Lorem mi velit rhoncus ipsum nisl et. Volutpat arcu id faucibus sit eget quis dui dui. Nisl sed ullamcorper at malesuada pellentesque enim amet pulvinar semper. Id lacus amet ornare justo justo venenatis quam. Condimentum lacus at augue tortor viverra dui. Turpis sed ut leo dignissim scelerisque.Adipiscing aliquam id aliquam lorem. Tempor ut nullam et amet. Sed nulla blandit tellus tincidunt aliquam odio amet sed interdum. Facilisis eget nullam ultrices elementum in congue id vestibulum. Pellentesque morbi est lobortis eget arcu curabitur. Tortor phasellus non in lacus turpis proin arcu mollis. Amet id nunc at ipsum adipiscing varius lacus tristique ante. Nibh habitant tellus turpis nec risus diam cursus convallis nec. Enim ut massa pellentesque viverra."
                  }
                </p>
                <p>{"‍"}</p>
                <blockquote>
                  {
                    "Lorem ipsum dolor sit amet consectetur. Ut tincidunt lectus sed porta sit massa lectus. Neque nunc id nibh massa nunc eu duis diam rutrum. Platea aenean odio blandit mus aliquet id neque elit."
                  }
                </blockquote>
                <p>{"‍"}</p>
                <h4>{"Integration of technology"}</h4>
                <p>
                  {
                    "Lorem ipsum dolor sit amet consectetur. Interdum mauris ac ipsum pulvinar tempor tincidunt. Condimentum lacus at augue tortor viverra dui. Turpis sed ut leo dignissim scelerisque.Adipiscing aliquam id aliquam lorem. Tempor ut nullam et amet. Sed nulla blandit tellus tincidunt aliquam odio amet sed interdum. Facilisis eget nullam ultrices elementum in congue id vestibulum. Pellentesque morbi est lobortis eget arcu curabitur. Tortor phasellus non in lacus turpis proin arcu mollis. Amet id nunc at ipsum adipiscing varius lacus tristique ante. Nibh habitant tellus turpis nec risus diam cursus convallis nec. Enim ut massa pellentesque viverra."
                  }
                </p>
                <p>{"‍"}</p>
                <h4>
                  {"Collaboration and exchange between educational systems"}
                </h4>
                <p>
                  {
                    "Lorem ipsum dolor sit amet consectetur. Interdum mauris ac ipsum pulvinar tempor tincidunt.Tempor ut nullam et amet. Sed nulla blandit tellus tincidunt aliquam odio amet sed interdum. Facilisis eget nullam ultrices elementum in congue id vestibulum. Pellentesque morbi est lobortis eget arcu curabitur. Tortor phasellus non in lacus turpis proin arcu mollis."
                  }
                </p>
              </div>
            </div>
          </div>
          <div
            data-motion-id={"f50f11ae-46a1-de4f-b49e-72c1d8953bbe"}
            className={"blog-author"}
          >
            <div
              className={
                "w-layout-blockcontainer blog-details-container w-container"
              }
            >
              <div className={"w-layout-hflex blog-author-main"}>
                <img
                  src={
                    "/assets/e92d709b-66ea64a1e7100f5d3f9ffeb1_Blog-Author-Image-4.jpg"
                  }
                  loading={"lazy"}
                  width={"171"}
                  height={"171"}
                  alt={"Samantha Dicki"}
                  className={"blog-author-image"}
                />
                <div className={"w-layout-vflex blog-author-information"}>
                  <div
                    data-motion-id={"96645ce7-a58f-669a-a10d-291fbaae30d0"}
                    className={"small-heading"}
                  >
                    {"Author"}
                  </div>
                  <div className={"heading-three heading-three-gap text-white"}>
                    {"Samantha Dicki"}
                  </div>
                  <p className={"text-light-white no-margin-bottom"}>
                    {
                      "Lorem ipsum dolor sit amet consectetur. Interdum mauris ac ipsum pulvinar tempor tincidunt.Tempor ut nullam et amet. Sed nulla blandit tellus tincidunt aliquam odio amet sed interdum."
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"blog-details-more"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-vflex home-two-blog-main"}>
            <div
              data-motion-id={"a5ff96f1-0b24-9a8e-5c74-a45508423d0b"}
              className={"small-heading text-dark"}
            >
              {"More journals"}
            </div>
            <h2
              data-motion-id={"d5ec24aa-9892-430b-0561-9d77225749ed"}
              className={"heading-two-gap-updown text-align-center"}
            >
              {"Related blogs"}
            </h2>
            <p
              data-motion-id={"d5ec24aa-9892-430b-0561-9d77225749ef"}
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
                    data-motion-id={"d5ec24aa-9892-430b-0561-9d77225749f4"}
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
                    data-motion-id={"d5ec24aa-9892-430b-0561-9d77225749f4"}
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
                <div role={"listitem"} className={"w-dyn-item"}>
                  <SiteLink
                    data-motion-id={"d5ec24aa-9892-430b-0561-9d77225749f4"}
                    href={
                      "/blog-posts/the-evolution-of-teaching-tools-in-the-21st-century"
                    }
                    className={"home-two-blog-cards w-inline-block"}
                  >
                    <div className={"overflow-hidden"}>
                      <img
                        src={
                          "/assets/37f4caae-66e93b2410f6e96cbbc70c8d_Blog-Small-Thumbnail.webp"
                        }
                        loading={"lazy"}
                        width={"410"}
                        height={"296"}
                        alt={"Blog Image"}
                        sizes={"(max-width: 479px) 100vw, 410px"}
                        srcSet={
                          "/assets/a6bc4e78-66e93b2410f6e96cbbc70c8d_Blog-Small-Thumbnail-p-500.webp 500w, /assets/d499d141-66e93b2410f6e96cbbc70c8d_Blog-Small-Thumbnail-p-800.webp 800w, /assets/37f4caae-66e93b2410f6e96cbbc70c8d_Blog-Small-Thumbnail.webp 820w"
                        }
                        className={"blog-cards-image"}
                      />
                    </div>
                    <div className={"home-two-blog-cards-details"}>
                      <div className={"small-shot-heading"}>{"Career"}</div>
                      <div className={"heading-five"}>
                        {"The evolution of teaching tools in the 21st century"}
                      </div>
                      <div>{"September 17, 2024"}</div>
                    </div>
                  </SiteLink>
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
