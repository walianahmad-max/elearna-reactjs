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
      <section className={"home-one-hero"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-hflex home-one-hero-main"}>
            <div className={"home-one-hero-image-wrap"}>
              <img
                data-motion-id={"c0265631-d863-6826-f402-a7043adfde54"}
                className={"hero-image-main"}
                src={
                  "/assets/d6eb8dab-66c6fb8ca55c188e59cf91d8_Banner-Girl.webp"
                }
                width={"677.5"}
                height={"746"}
                alt={"Hero Girl Image"}
                sizes={"(max-width: 767px) 100vw, 677.5px"}
                loading={"lazy"}
                srcSet={
                  "/assets/fdfed59e-66c6fb8ca55c188e59cf91d8_Banner-Girl-p-500.webp 500w, /assets/706ecfe1-66c6fb8ca55c188e59cf91d8_Banner-Girl-p-800.webp 800w, /assets/a8388da4-66c6fb8ca55c188e59cf91d8_Banner-Girl-p-1080.webp 1080w, /assets/d6eb8dab-66c6fb8ca55c188e59cf91d8_Banner-Girl.webp 1355w"
                }
              />
              <img
                data-motion-id={"1967640d-b5f5-e549-7372-12dd9163bd2e"}
                src={
                  "/assets/b3b2121e-66c6fb8b79cb093fa869be54_Achievements.webp"
                }
                loading={"lazy"}
                width={"275"}
                height={"93"}
                alt={"Achievements"}
                className={"achievement-image"}
              />
              <img
                data-motion-id={"d3dac050-1e94-ff7e-1167-8ebc824e4b33"}
                src={
                  "/assets/40b9972c-66f638f0e915508fda239b73_Trusted-By-Image.avif"
                }
                loading={"lazy"}
                width={"268"}
                height={"179"}
                alt={"Trusted Image"}
                className={"trusted-by-image"}
              />
              <img
                data-motion-id={"48196e90-0562-74df-6e54-601ffcefd415"}
                src={"/assets/a3234fa2-66c6fb8bdcbb90074c85249f_Half-Moon.svg"}
                loading={"lazy"}
                alt={"Half Moon"}
                className={"half-moon"}
              />
              <img
                data-motion-id={"70b05186-2eda-aa4f-2dfb-94e7c3b9b0c9"}
                src={"/assets/3a4dfeb8-66c6fb8b857efb6c4c737b8a_Yellow-Dot.svg"}
                loading={"lazy"}
                width={"17"}
                height={"17"}
                alt={"Yellow Dot"}
                className={"yellow-dot-small"}
              />
              <img
                data-motion-id={"a5780128-fbc4-d66f-233f-aff6d651de49"}
                src={"/assets/3a4dfeb8-66c6fb8b857efb6c4c737b8a_Yellow-Dot.svg"}
                loading={"lazy"}
                width={"11"}
                height={"11"}
                alt={"Yellow Dot"}
                className={"yellow-dot-left"}
              />
              <img
                data-motion-id={"ba4c3b2e-80c1-b8b2-a76a-c52e3da32a8e"}
                src={
                  "/assets/5ee46c7c-66c6fb8bfbf579e1a5ff1577_Blue-Circle.svg"
                }
                loading={"lazy"}
                alt={"Blue Dot"}
                className={"blue-circle"}
              />
            </div>
            <div className={"w-layout-vflex home-one-hero-text"}>
              <div
                data-motion-id={"96645ce7-a58f-669a-a10d-291fbaae30d0"}
                className={"small-heading"}
              >
                {"Online learning"}
              </div>
              <h1
                data-motion-id={"7ecc48d3-1ed6-a482-b56a-3aabd6610c08"}
                className={"text-white heading-one-gap"}
              >
                {"More then "}
                <span className={"brand-color"}>{"25000+"}</span>
                {" education courses online"}
              </h1>
              <p
                data-motion-id={"b961950d-37b6-df03-f3f1-b1a17e647a6f"}
                className={"text-light-white hero-description"}
              >
                {
                  "Lorem ipsum dolor sit amet consectetur. Gravida enim risus sollicitudin mauris tincidunt commodo ornare."
                }
              </p>
              <SiteLink
                data-motion-id={"63b4d4e7-94c2-9465-89d9-58c4a20f71fa"}
                href={"/contact-one"}
                className={"button w-inline-block"}
              >
                <div>{"Get Started "}</div>
              </SiteLink>
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
      <section className={"top-category"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-vflex top-category-main"}>
            <div
              data-motion-id={"a5ff96f1-0b24-9a8e-5c74-a45508423d0b"}
              className={"small-heading text-dark"}
            >
              {"Top Categories"}
            </div>
            <div
              data-motion-id={"e5cdae92-0489-4215-ef09-bf88851e69ff"}
              className={"heading-three heading-three-gap category-heading"}
            >
              {"Discover leading categories to elevate your journey"}
            </div>
            <div className={"w-layout-grid category-cards-wrap"}>
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
                      "/assets/828c1caa-66c6fb8b9d9bcd0e5de94637_Category-Icons.svg"
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
      <section className={"quick-start"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-grid quick-start-main"}>
            <div
              data-motion-id={"c7058f4e-b7b1-7606-1e13-1a060225a714"}
              className={"w-layout-hflex quick-start-card-one"}
            >
              <div className={"w-layout-vflex quick-start-text-wrap-one"}>
                <div className={"heading-four"}>
                  {"Quick access to the popular courses"}
                </div>
                <SiteLink
                  data-motion-id={"d2419891-9f36-e25c-7c72-b1716c5d291d"}
                  href={"/course-one"}
                  className={"button button-yellow w-inline-block"}
                >
                  <div>{"View Courses"}</div>
                </SiteLink>
              </div>
              <img
                src={
                  "/assets/7b110080-66c86806b094d5e2529855a0_Woman-Using-Laptop.webp"
                }
                loading={"lazy"}
                width={"421"}
                height={"288"}
                alt={"Girl With Laptop"}
                srcSet={
                  "/assets/d25cf651-66c86806b094d5e2529855a0_Woman-Using-Laptop-p-500.webp 500w, /assets/b68fbc58-66c86806b094d5e2529855a0_Woman-Using-Laptop-p-800.webp 800w, /assets/7b110080-66c86806b094d5e2529855a0_Woman-Using-Laptop.webp 842w"
                }
                sizes={"(max-width: 479px) 100vw, 421px"}
                className={"tab-image-full-width quick-start-image"}
              />
            </div>
            <div
              data-motion-id={"bffc44cd-99a5-f1c7-cc17-d8479cc37e97"}
              className={"w-layout-hflex quick-start-card-two"}
            >
              <div className={"w-layout-vflex quick-start-card-two-left"}>
                <div className={"heading-four"}>
                  {"Develop your skills online!"}
                </div>
                <SiteLink
                  data-motion-id={"554bdb09-166f-7496-ccbc-6402fc45feda"}
                  href={"/career"}
                  className={"button button-border-off w-inline-block"}
                >
                  <div>{"Apply now"}</div>
                </SiteLink>
              </div>
              <div className={"quick-start-card-video"}>
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
                    "background-video w-background-video w-background-video-atom"
                  }
                >
                  <video
                    id={"7b5630cc-1d79-eb09-68c0-beb293c7712b-video"}
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
                <img
                  src={"/assets/7ad2409a-66c6fb8b23f88178b487b3e2_Controls.svg"}
                  loading={"lazy"}
                  alt={"Controls"}
                  className={"video-controls"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"home-one-courses"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-vflex home-one-courses-top"}>
            <div
              data-motion-id={"a5ff96f1-0b24-9a8e-5c74-a45508423d0b"}
              className={"small-heading text-dark"}
            >
              {"Online learning"}
            </div>
            <h2
              data-motion-id={"1e105df6-a269-dbba-7c92-4523dfddf9bd"}
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
            className={"home-one-courses-tab w-tabs"}
            as={"div"}
          >
            <Interactive
              data-motion-id={"6aed1a4f-0557-2995-c039-1b386c5ddca4"}
              className={"tabs-menu w-tab-menu"}
              as={"div"}
            >
              <Interactive
                data-w-tab={"Tab 1"}
                className={"tab-option w-inline-block w-tab-link"}
                as={"a"}
              >
                <div>{"All courses"}</div>
              </Interactive>
              <Interactive
                data-w-tab={"Tab 2"}
                className={"tab-option w-inline-block w-tab-link"}
                as={"a"}
              >
                <div>{"Design"}</div>
              </Interactive>
              <Interactive
                data-w-tab={"Tab 3"}
                className={"tab-option w-inline-block w-tab-link"}
                as={"a"}
              >
                <div>{"Development"}</div>
              </Interactive>
              <Interactive
                data-w-tab={"Tab 4"}
                className={"tab-option w-inline-block w-tab-link"}
                as={"a"}
              >
                <div>{"Management"}</div>
              </Interactive>
              <Interactive
                data-w-tab={"Tab 5"}
                className={"tab-option w-inline-block w-tab-link"}
                as={"a"}
              >
                <div>{"Finance"}</div>
              </Interactive>
            </Interactive>
            <div className={"tabs-content w-tab-content"}>
              <Interactive
                data-w-tab={"Tab 1"}
                className={"w-tab-pane w--tab-active"}
                as={"div"}
              >
                <div className={"courses-cards-wrapper"}>
                  <div
                    data-motion-id={"d3eeb093-70ea-f21b-d4ed-c11137cc875a"}
                    className={"w-dyn-list"}
                  >
                    <div role={"list"} className={"w-dyn-items"}>
                      <div role={"listitem"} className={"w-dyn-item"}>
                        <CourseCard
                          motionId={"a29111d3-6faa-12fc-b66a-47560750de55"}
                          course={
                            courseCards[
                              "crisis-management-and-problem-solving-strategies"
                            ]
                          }
                          priceLabel={"Free"}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    data-motion-id={"39b6e8ec-050c-6449-776b-8c1244807108"}
                    className={"w-dyn-list"}
                  >
                    <div role={"list"} className={"w-dyn-items"}>
                      <div role={"listitem"} className={"w-dyn-item"}>
                        <CourseCard
                          motionId={"39b6e8ec-050c-6449-776b-8c124480710b"}
                          course={
                            courseCards[
                              "advanced-photoshop-techniques-for-designers"
                            ]
                          }
                          priceLabel={"Free"}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    data-motion-id={"9faf0fe4-e602-1758-5639-1b947808109b"}
                    className={"w-dyn-list"}
                  >
                    <div role={"list"} className={"w-dyn-items"}>
                      <div role={"listitem"} className={"w-dyn-item"}>
                        <CourseCard
                          motionId={"b745677f-235d-6f14-43df-58118572f71d"}
                          course={
                            courseCards[
                              "operations-management-and-process-improvement"
                            ]
                          }
                          priceLabel={"Free"}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    data-motion-id={"7220f9ab-9e9f-03a1-7abe-437d4b24c746"}
                    className={"w-dyn-list"}
                  >
                    <div role={"list"} className={"w-dyn-items"}>
                      <div role={"listitem"} className={"w-dyn-item"}>
                        <CourseCard
                          motionId={"24363370-d7ae-01e5-f109-fd24cdea6279"}
                          course={
                            courseCards["database-integration-with-mongodb"]
                          }
                          priceLabel={"$59"}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    data-motion-id={"4b627d68-5ba6-799a-1efe-f8ec23066b25"}
                    className={"w-dyn-list"}
                  >
                    <div role={"list"} className={"w-dyn-items"}>
                      <div role={"listitem"} className={"w-dyn-item"}>
                        <CourseCard
                          motionId={"3ef220c4-306e-db43-b590-edfd666ad6c0"}
                          course={
                            courseCards[
                              "risk-management-and-business-continuity"
                            ]
                          }
                          priceLabel={"$49"}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    data-motion-id={"b0f123cc-a623-e7f1-5a60-67770e90acca"}
                    className={"w-dyn-list"}
                  >
                    <div role={"list"} className={"w-dyn-items"}>
                      <div role={"listitem"} className={"w-dyn-item"}>
                        <CourseCard
                          motionId={"f9b6e14b-c722-9bcd-24b0-11ae26101637"}
                          course={
                            courseCards[
                              "full-stack-development-with-the-mern-stack"
                            ]
                          }
                          priceLabel={"$72"}
                        />
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
                <div className={"courses-cards-wrapper"}>
                  <div className={"w-dyn-list"}>
                    <div role={"list"} className={"w-dyn-items"}>
                      <div role={"listitem"} className={"w-dyn-item"}>
                        <CourseCard
                          motionId={"bac06ee9-26be-8856-e4f2-db6d7b720535"}
                          course={
                            courseCards["design-systems-and-pattern-libraries"]
                          }
                          priceLabel={"$99"}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={"w-dyn-list"}>
                    <div role={"list"} className={"w-dyn-items"}>
                      <div role={"listitem"} className={"w-dyn-item"}>
                        <CourseCard
                          motionId={"a958d578-6a6a-b450-9b0f-2a4c0c1bbe51"}
                          course={
                            courseCards[
                              "learn-interactive-web-design-by-building-real-projects"
                            ]
                          }
                          priceLabel={"$79"}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={"w-dyn-list"}>
                    <div role={"list"} className={"w-dyn-items"}>
                      <div role={"listitem"} className={"w-dyn-item"}>
                        <CourseCard
                          motionId={"fe8052c6-0edb-be6d-9da7-3f5e8676a05c"}
                          course={
                            courseCards[
                              "advanced-photoshop-techniques-for-designers"
                            ]
                          }
                          priceLabel={"Free"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Interactive>
              <Interactive
                data-w-tab={"Tab 3"}
                className={"w-tab-pane"}
                as={"div"}
              >
                <div className={"courses-cards-wrapper"}>
                  <div className={"w-dyn-list"}>
                    <div role={"list"} className={"w-dyn-items"}>
                      <div role={"listitem"} className={"w-dyn-item"}>
                        <CourseCard
                          motionId={"f15a0bc2-0304-5f89-e9cb-f876fd55dff0"}
                          course={
                            courseCards[
                              "building-single-page-applications-with-angular"
                            ]
                          }
                          priceLabel={"Free"}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={"w-dyn-list"}>
                    <div role={"list"} className={"w-dyn-items"}>
                      <div role={"listitem"} className={"w-dyn-item"}>
                        <CourseCard
                          motionId={"f9deea36-85b0-d2ae-7ca3-e29ae07f1241"}
                          course={
                            courseCards["database-integration-with-mongodb"]
                          }
                          priceLabel={"$59"}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={"w-dyn-list"}>
                    <div role={"list"} className={"w-dyn-items"}>
                      <div role={"listitem"} className={"w-dyn-item"}>
                        <CourseCard
                          motionId={"76d6e6b7-c637-867a-a808-38657f16977e"}
                          course={
                            courseCards[
                              "full-stack-development-with-the-mern-stack"
                            ]
                          }
                          priceLabel={"$72"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Interactive>
              <Interactive
                data-w-tab={"Tab 4"}
                className={"w-tab-pane"}
                as={"div"}
              >
                <div className={"courses-cards-wrapper"}>
                  <div className={"w-dyn-list"}>
                    <div role={"list"} className={"w-dyn-items"}>
                      <div role={"listitem"} className={"w-dyn-item"}>
                        <CourseCard
                          motionId={"b1ef85ea-b2cd-675f-8c6b-be0d1d1763c3"}
                          course={
                            courseCards[
                              "risk-management-and-business-continuity"
                            ]
                          }
                          priceLabel={"$49"}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={"w-dyn-list"}>
                    <div role={"list"} className={"w-dyn-items"}>
                      <div role={"listitem"} className={"w-dyn-item"}>
                        <CourseCard
                          motionId={"28431198-c670-74f8-2029-ab3b2f0ab29e"}
                          course={
                            courseCards[
                              "grow-your-brand-and-reach-your-audience"
                            ]
                          }
                          priceLabel={"$49"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Interactive>
              <Interactive
                data-w-tab={"Tab 5"}
                className={"w-tab-pane"}
                as={"div"}
              >
                <div className={"courses-cards-wrapper"}>
                  <div className={"w-dyn-list"}>
                    <div role={"list"} className={"w-dyn-items"}>
                      <div role={"listitem"} className={"w-dyn-item"}>
                        <CourseCard
                          motionId={"d640d226-a2fe-22aa-eee1-1e142c4010bc"}
                          course={
                            courseCards[
                              "operations-management-and-process-improvement"
                            ]
                          }
                          priceLabel={"Free"}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={"w-dyn-list"}>
                    <div role={"list"} className={"w-dyn-items"}>
                      <div role={"listitem"} className={"w-dyn-item"}>
                        <CourseCard
                          motionId={"ed026aa9-f251-d76d-bdff-daeb6771b009"}
                          course={
                            courseCards[
                              "the-complete-guide-to-personal-and-business-finance"
                            ]
                          }
                          priceLabel={"$99"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Interactive>
            </div>
          </Interactive>
          <div
            data-motion-id={"72cdbb0d-c615-a688-34aa-d28da4623457"}
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
      <section className={"home-one-offer"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-hflex home-one-offer-main"}>
            <div className={"w-layout-hflex home-one-offer-image-wrap"}>
              <div className={"w-layout-vflex home-one-offer-images-left"}>
                <div
                  data-motion-id={"8425e082-f31d-9244-afef-d8ec08e01bc1"}
                  className={"free-courses-image"}
                >
                  <img
                    src={
                      "/assets/eba9b85f-66d92b103999266e87ca5747_Free-Course.avif"
                    }
                    loading={"lazy"}
                    width={"272"}
                    height={"94"}
                    alt={"Course Count"}
                    className={"border-radius-four height-auto"}
                  />
                </div>
                <div
                  data-motion-id={"9a938b3b-cc8c-a81f-b94e-a031f19a1e52"}
                  className={"home-one-offer-image-shadow"}
                >
                  <img
                    src={
                      "/assets/90dc0673-66c6fb8bbdff100351a1e011_Man-Image-Holding-Graph.webp"
                    }
                    loading={"lazy"}
                    width={"362"}
                    height={"454"}
                    alt={"Man Image Holding Graph"}
                    srcSet={
                      "/assets/6bc49532-66c6fb8bbdff100351a1e011_Man-Image-Holding-Graph-p-500.webp 500w, /assets/90dc0673-66c6fb8bbdff100351a1e011_Man-Image-Holding-Graph.webp 724w"
                    }
                    sizes={"(max-width: 479px) 100vw, 362px"}
                    className={"border-radius-four height-auto"}
                  />
                </div>
              </div>
              <div
                data-motion-id={"6e76b972-106c-222d-f64f-fb68ac111d94"}
                className={"home-one-offer-image-right"}
              >
                <img
                  src={
                    "/assets/f725f098-66c6fb8b45a3029806674bb6_Woman-Image-Holding-Copy.webp"
                  }
                  loading={"lazy"}
                  width={"332"}
                  height={"434"}
                  alt={"Woman Image Holding Tab"}
                  srcSet={
                    "/assets/5929c29c-66c6fb8b45a3029806674bb6_Woman-Image-Holding-Copy-p-500.webp 500w, /assets/f725f098-66c6fb8b45a3029806674bb6_Woman-Image-Holding-Copy.webp 664w"
                  }
                  sizes={"(max-width: 479px) 100vw, 332px"}
                  className={"border-radius-four height-auto"}
                />
              </div>
            </div>
            <div className={"home-one-offer-right"}>
              <div
                data-motion-id={"a5ff96f1-0b24-9a8e-5c74-a45508423d0b"}
                className={"small-heading text-dark"}
              >
                {"what we Offer"}
              </div>
              <h2
                data-motion-id={"aa9efe86-8c8f-34be-3b8a-c1ed23284df4"}
                className={"heading-two-gap-updown"}
              >
                {"Personalized learning for your ambitions"}
              </h2>
              <p
                data-motion-id={"e5536572-c012-d738-aec8-897203400e32"}
                className={"margin-bottom-twenty"}
              >
                {
                  "Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut."
                }
              </p>
              <ul
                data-motion-id={"d74ac44d-9587-0b97-d201-ffc3bddc1874"}
                role={"list"}
                className={"home-one-offer-list"}
              >
                <li className={"heading-six"}>{"Skill-based instruction"}</li>
                <li className={"heading-six"}>{"Analytics and insights"}</li>
                <li className={"heading-six"}>{"Global certification"}</li>
                <li className={"heading-six"}>{"Customizable courses"}</li>
              </ul>
              <div
                data-motion-id={"aeebfd1b-5baa-c83d-755f-a9dc0151b570"}
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
      <section className={"home-one-testimonial"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-hflex home-one-testimonial-top"}>
            <div className={"w-layout-vflex testimonial-left"}>
              <div
                data-motion-id={"96645ce7-a58f-669a-a10d-291fbaae30d0"}
                className={"small-heading"}
              >
                {"Our testimonials"}
              </div>
              <h2
                data-motion-id={"d20b6635-0186-db64-a82a-557331d32686"}
                className={"heading-two-gap-top text-white"}
              >
                {"Trusted by our successful students"}
              </h2>
            </div>
            <div
              data-motion-id={"689d19a8-1c5d-e7a3-1660-e5b3e5560d00"}
              className={"w-layout-hflex testimonial-right"}
            >
              <div className={"w-layout-hflex testimonial-right-boxes"}>
                <div
                  data-motion-id={"3f0d9780-66bc-1748-1867-a298ad6bdf58"}
                  className={"w-layout-hflex counter-box"}
                >
                  <Interactive
                    className={"w-layout-vflex counter-train-wrapper"}
                    as={"div"}
                    counterValue={"7"}
                    counterClass={"heading-two text-white"}
                  ></Interactive>
                  <Interactive
                    className={"w-layout-vflex counter-train-wrapper"}
                    as={"div"}
                    counterValue={"0"}
                    counterClass={"heading-two text-white"}
                  ></Interactive>
                  <div className={"heading-two text-white"}>{"M"}</div>
                </div>
                <div className={"vertical-border"}></div>
                <div>
                  <p className={"testimonial-counter-description"}>
                    {"Successful students"}
                  </p>
                </div>
              </div>
              <div className={"w-layout-hflex testimonial-right-boxes"}>
                <div
                  data-motion-id={"01c18ddc-e78a-c75b-b7f9-8c8186e93d85"}
                  className={"w-layout-hflex counter-box"}
                >
                  <Interactive
                    className={"w-layout-vflex counter-train-wrapper"}
                    as={"div"}
                    counterValue={"2"}
                    counterClass={"heading-two text-white"}
                  ></Interactive>
                  <Interactive
                    className={"w-layout-vflex counter-train-wrapper"}
                    as={"div"}
                    counterValue={"5"}
                    counterClass={"heading-two text-white"}
                  ></Interactive>
                  <div className={"heading-two text-white"}>{"K"}</div>
                </div>
                <div className={"vertical-border"}></div>
                <div>
                  <p className={"testimonial-counter-description"}>
                    {"Global job placements"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={"w-layout-hflex home-one-testimonial-main"}>
            <div
              data-motion-id={"f4669fd4-2275-4aae-30ec-aed8b7ff2cbf"}
              className={"testimonial-image-wrap"}
            >
              <img
                src={
                  "/assets/4071b8de-66cd560b74d8d4d4ed334d02_Testimonial-Author-Image.avif"
                }
                loading={"lazy"}
                width={"520"}
                height={"351"}
                alt={"Testimonial Author"}
                srcSet={
                  "/assets/021c07ea-66cd560b74d8d4d4ed334d02_Testimonial-Author-Image-p-500.avif 500w, /assets/4071b8de-66cd560b74d8d4d4ed334d02_Testimonial-Author-Image.avif 1040w"
                }
                sizes={"(max-width: 767px) 100vw, 520px"}
                className={"testimonial-image-one"}
              />
              <img
                src={
                  "/assets/77226b89-66cd64ef67641295ddd2ffc9_Testimonial-Author-Image-2.avif"
                }
                loading={"lazy"}
                width={"520"}
                height={"351"}
                alt={"Testimonial Author"}
                srcSet={
                  "/assets/4cf9dac8-66cd64ef67641295ddd2ffc9_Testimonial-Author-Image-2-p-500.avif 500w, /assets/77226b89-66cd64ef67641295ddd2ffc9_Testimonial-Author-Image-2.avif 1040w"
                }
                sizes={"(max-width: 767px) 100vw, 520px"}
                className={"testimonial-image-two"}
              />
            </div>
            <div
              data-motion-id={"4fe5d67a-47e7-7ee3-1a9e-dcbf8b9f7257"}
              className={"testimoanial-wrap"}
            >
              <Interactive
                data-delay={"4000"}
                data-animation={"cross"}
                className={"slider w-slider"}
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
                  <Interactive
                    data-motion-id={"670c77a2-7177-7895-cfe9-c4c6a60a6a50"}
                    className={"w-slide"}
                    as={"div"}
                    slideIndex={0}
                  >
                    <div className={"w-layout-vflex"}>
                      <p className={"testimonial-text"}>
                        {
                          "“Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus venenatis donec mattis. Morbi placerat eleifend malesuada sed semper quis.”"
                        }
                      </p>
                      <div className={"w-layout-vflex"}>
                        <div className={"testimonial-author-name"}>
                          {"Linda Grady"}
                        </div>
                        <div className={"body-small-text"}>
                          {"Co-assistant manager"}
                        </div>
                      </div>
                    </div>
                  </Interactive>
                  <Interactive
                    data-motion-id={"670c77a2-7177-7895-cfe9-c4c6a60a6a51"}
                    className={"w-slide"}
                    as={"div"}
                    slideIndex={1}
                  >
                    <div className={"w-layout-vflex"}>
                      <p className={"testimonial-text"}>
                        {
                          "“Lorem ipsum dolor sit amet consectetur. Molestie faucibus nibh felis tempor vel aliquet cursus placerat duis. Est felis pulvinar tortor ut nibh montes ante gravida velit. Facilisi posuere in sed mattis blandit duis aliquet.”"
                        }
                      </p>
                      <div className={"w-layout-vflex"}>
                        <div className={"testimonial-author-name"}>
                          {"Jim Adams"}
                        </div>
                        <div className={"body-small-text"}>{"Designer"}</div>
                      </div>
                    </div>
                  </Interactive>
                </div>
                <Interactive
                  className={"slider-arrow w-slider-arrow-left"}
                  as={"div"}
                >
                  <img
                    src={
                      "/assets/c6b0c5a0-66cd5dc1933840ec666b82c7_Slider-Arrow.svg"
                    }
                    loading={"lazy"}
                    width={"18"}
                    height={"14"}
                    alt={"Icon"}
                    className={"icon-rotate"}
                  />
                </Interactive>
                <Interactive
                  className={
                    "slider-arrow right-arrow-button w-slider-arrow-right"
                  }
                  as={"div"}
                >
                  <img
                    src={
                      "/assets/c6b0c5a0-66cd5dc1933840ec666b82c7_Slider-Arrow.svg"
                    }
                    loading={"lazy"}
                    width={"18"}
                    height={"14"}
                    alt={"Icon"}
                  />
                </Interactive>
                <Interactive
                  className={"display-off w-slider-nav w-round w-num"}
                  as={"div"}
                ></Interactive>
              </Interactive>
            </div>
          </div>
        </div>
      </section>
      <div className={"home-one-linear-background"}>
        <section className={"home-one-trending-courses"}>
          <div className={"w-layout-blockcontainer container w-container"}>
            <div className={"w-layout-vflex trending-courses-top"}>
              <div
                data-motion-id={"a5ff96f1-0b24-9a8e-5c74-a45508423d0b"}
                className={"small-heading text-dark"}
              >
                {"Trending courses"}
              </div>
              <div
                data-motion-id={"30bce78c-e06b-b459-aca8-2285300c46eb"}
                className={"heading-three heading-three-gap margin-bottom-off"}
              >
                {"Explore our top programs"}
              </div>
            </div>
            <div className={"tranding-courses-cards"}>
              <div className={"w-dyn-list"}>
                <div role={"list"} className={"card-height-full w-dyn-items"}>
                  <div
                    role={"listitem"}
                    className={"card-height-full w-dyn-item"}
                  >
                    <div
                      data-motion-id={"ed848eee-614a-24ff-2604-a40890d1d797"}
                      className={"course-cards-two"}
                    >
                      <div
                        data-motion-id={"d1f2a64d-c0e2-86d3-3a28-f43787185d4d"}
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
                        <div
                          className={"course-price-wrapper course-two-price"}
                        >
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
                        <div
                          className={"w-layout-hflex course-card-popup-tags"}
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
                            className={"w-layout-hflex course-card-checklist"}
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
                            <div className={"course-card-two-description"}>
                              {"Lorem ipsum dolor sit amet consectetur"}
                            </div>
                          </div>
                          <div
                            className={"w-layout-hflex course-card-checklist"}
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
                            <div className={"course-card-two-description"}>
                              {"Lorem ipsum dolor"}
                            </div>
                          </div>
                          <div
                            className={"w-layout-hflex course-card-checklist"}
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
                            <div className={"course-card-two-description"}>
                              {"Lorem ipsum dolor sit"}
                            </div>
                          </div>
                        </div>
                        <div
                          className={"w-layout-hflex course-cards-two-button"}
                        >
                          <SiteLink
                            data-motion-id={
                              "cc6f3b89-1136-7157-92bf-3c50f2660718"
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
                      data-motion-id={"74d51cfa-3404-096e-313a-5a3bb95c9569"}
                      className={"course-cards-two"}
                    >
                      <div
                        data-motion-id={"74d51cfa-3404-096e-313a-5a3bb95c956a"}
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
                        <div
                          className={"course-price-wrapper course-two-price"}
                        >
                          <div>{"$59 "}</div>
                        </div>
                      </div>
                      <div
                        className={"course-card-pop-up course-card-pop-up-two"}
                      >
                        <div className={"heading-five course-name"}>
                          {"Database integration with MongoDB"}
                        </div>
                        <div
                          className={"w-layout-hflex course-card-popup-tags"}
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
                            className={"w-layout-hflex course-card-checklist"}
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
                            <div className={"course-card-two-description"}>
                              {"Lorem ipsum dolor sit amet consectetur"}
                            </div>
                          </div>
                          <div
                            className={"w-layout-hflex course-card-checklist"}
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
                            <div className={"course-card-two-description"}>
                              {"Lorem ipsum dolor"}
                            </div>
                          </div>
                          <div
                            className={"w-layout-hflex course-card-checklist"}
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
                            <div className={"course-card-two-description"}>
                              {"Lorem ipsum dolor sit"}
                            </div>
                          </div>
                        </div>
                        <div
                          className={"w-layout-hflex course-cards-two-button"}
                        >
                          <SiteLink
                            data-motion-id={
                              "74d51cfa-3404-096e-313a-5a3bb95c9594"
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
                              "74d51cfa-3404-096e-313a-5a3bb95c9597"
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
                      data-motion-id={"44aea1fb-a5f6-f1f9-2516-0043e3a2416a"}
                      className={"course-cards-two"}
                    >
                      <div
                        data-motion-id={"44aea1fb-a5f6-f1f9-2516-0043e3a2416b"}
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
                        <div
                          className={"course-price-wrapper course-two-price"}
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
                          className={"w-layout-hflex course-card-popup-tags"}
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
                            className={"w-layout-hflex course-card-checklist"}
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
                            <div className={"course-card-two-description"}>
                              {"Lorem ipsum dolor sit amet consectetur"}
                            </div>
                          </div>
                          <div
                            className={"w-layout-hflex course-card-checklist"}
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
                            <div className={"course-card-two-description"}>
                              {"Lorem ipsum dolor"}
                            </div>
                          </div>
                          <div
                            className={"w-layout-hflex course-card-checklist"}
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
                            <div className={"course-card-two-description"}>
                              {"Lorem ipsum dolor sit"}
                            </div>
                          </div>
                        </div>
                        <div
                          className={"w-layout-hflex course-cards-two-button"}
                        >
                          <SiteLink
                            data-motion-id={
                              "44aea1fb-a5f6-f1f9-2516-0043e3a24195"
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
                              "44aea1fb-a5f6-f1f9-2516-0043e3a24198"
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
                      data-motion-id={"94fb8b57-8ea7-720a-f985-b23be4501984"}
                      className={"course-cards-two"}
                    >
                      <div
                        data-motion-id={"94fb8b57-8ea7-720a-f985-b23be4501985"}
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
                        <div
                          className={"course-price-wrapper course-two-price"}
                        >
                          <div>{"$72 "}</div>
                        </div>
                      </div>
                      <div className={"course-card-pop-up course-popup-last"}>
                        <div className={"heading-five course-name"}>
                          {"Full-stack development with the MERN stack"}
                        </div>
                        <div
                          className={"w-layout-hflex course-card-popup-tags"}
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
                            className={"w-layout-hflex course-card-checklist"}
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
                            <div className={"course-card-two-description"}>
                              {"Lorem ipsum dolor sit amet consectetur"}
                            </div>
                          </div>
                          <div
                            className={"w-layout-hflex course-card-checklist"}
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
                            <div className={"course-card-two-description"}>
                              {"Lorem ipsum dolor"}
                            </div>
                          </div>
                          <div
                            className={"w-layout-hflex course-card-checklist"}
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
                            <div className={"course-card-two-description"}>
                              {"Lorem ipsum dolor sit"}
                            </div>
                          </div>
                        </div>
                        <div
                          className={"w-layout-hflex course-cards-two-button"}
                        >
                          <SiteLink
                            data-motion-id={
                              "94fb8b57-8ea7-720a-f985-b23be45019af"
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
                              "94fb8b57-8ea7-720a-f985-b23be45019b2"
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
            </div>
          </div>
        </section>
        <section className={"home-one-journey"}>
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
                  <div className={"heading-five"}>
                    {"Unlimited certificate"}
                  </div>
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
      </div>
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
