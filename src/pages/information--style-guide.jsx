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
      <section className={"checkout-hero-section"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"get-in-touch-block"}>
            <h1 className={"no-margin-top-bottom text-white"}>
              {"Style guide"}
            </h1>
          </div>
        </div>
      </section>
      <section className={"style-guide-for-color"}>
        <div className={"container w-container"}>
          <div className={"color-text-block"}>
            <div className={"color"}>{"Color"}</div>
          </div>
          <div className={"style-guide-color-block"}>
            <div>
              <div className={"style-guide-color-name-block"}>
                <div className={"style-guide-color-text-block"}>
                  <div className={"heading-five"}>{"#Of252a"}</div>
                </div>
                <div className={"style-guide-color-box color-one"}></div>
              </div>
              <div className={"style-guide-color-name-block"}>
                <div className={"style-guide-color-text-block"}>
                  <div className={"heading-five"}>{"#7b7c7d"}</div>
                </div>
                <div className={"style-guide-color-box color-two"}></div>
              </div>
              <div className={"style-guide-color-name-block"}>
                <div className={"style-guide-color-text-block"}>
                  <div className={"heading-five"}>{"#6f8197"}</div>
                </div>
                <div className={"style-guide-color-box color-three"}></div>
              </div>
            </div>
            <div>
              <div className={"style-guide-color-name-block"}>
                <div className={"style-guide-color-text-block"}>
                  <div className={"heading-five"}>{"#ffb606"}</div>
                </div>
                <div className={"style-guide-color-box color-four"}></div>
              </div>
              <div className={"style-guide-color-name-block"}>
                <div className={"style-guide-color-text-block"}>
                  <div className={"heading-five"}>{"#eff6f8"}</div>
                </div>
                <div className={"style-guide-color-box color-five"}></div>
              </div>
              <div className={"style-guide-color-name-block"}>
                <div className={"style-guide-color-text-block"}>
                  <div className={"heading-five"}>{"#1c375b"}</div>
                </div>
                <div className={"style-guide-color-box color-six"}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"style-guide-for-typography"}>
        <div className={"container w-container"}>
          <div className={"heading-three margin-bottom-thirty"}>
            {"Typography"}
          </div>
          <div className={"heading-block-one"}>
            <h1>{"Heading 1-This is an example"}</h1>
            <p>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
              }
            </p>
            <p>
              <strong>{"PARAGRAPH -"}</strong>
              {
                " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque amet, urna fames tincidunt. Risus scelerisque purus mattis tellus adipiscing eget integer nunc sagittis. "
              }
              <span>
                <strong>{"Maecenas adipiscing libero"}</strong>
              </span>
              {
                ", consequat et amet duis et commodo, scelerisque. Proin id enim et natoque mattis pharetra fringilla pharetra. Ultrices pellentesque ultricies diam vitae gravida quis ultricies. Commodo ut ultrices dignissim sem vel aliquam accumsan molestie dis. Consequat ut risus in id mauris vehicula at."
              }
            </p>
          </div>
          <div className={"heading-block-two"}>
            <h2>{"Heading 2-This is an example"}</h2>
            <p>
              <strong>{"PARAGRAPH -"}</strong>
              {
                " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque amet, urna fames tincidunt. Risus scelerisque purus mattis tellus adipiscing eget integer nunc sagittis. "
              }
              <span>
                <strong>{"Maecenas adipiscing libero"}</strong>
              </span>
              {
                ", consequat et amet duis et commodo, scelerisque. Proin id enim et natoque mattis pharetra fringilla pharetra. Ultrices pellentesque ultricies diam vitae gravida quis ultricies. Commodo ut ultrices dignissim sem vel aliquam accumsan molestie dis. Consequat ut risus in id mauris vehicula at."
              }
            </p>
          </div>
          <div className={"heading-block-three"}>
            <h3>{"Heading 3-This is an example"}</h3>
            <p>
              <strong>{"PARAGRAPH -"}</strong>
              {
                " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque amet, urna fames tincidunt. Risus scelerisque purus mattis tellus adipiscing eget integer nunc sagittis. "
              }
              <span>
                <strong>{"Maecenas adipiscing libero"}</strong>
              </span>
              {
                ", consequat et amet duis et commodo, scelerisque. Proin id enim et natoque mattis pharetra fringilla pharetra. Ultrices pellentesque ultricies diam vitae gravida quis ultricies. Commodo ut ultrices dignissim sem vel aliquam accumsan molestie dis. Consequat ut risus in id mauris vehicula at."
              }
            </p>
          </div>
          <div className={"heading-block-four"}>
            <h4>{"Heading 4-This is an example"}</h4>
            <p>
              <strong>{"PARAGRAPH -"}</strong>
              {
                " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque amet, urna fames tincidunt. Risus scelerisque purus mattis tellus adipiscing eget integer nunc sagittis. "
              }
              <span>
                <strong>{"Maecenas adipiscing libero"}</strong>
              </span>
              {
                ", consequat et amet duis et commodo, scelerisque. Proin id enim et natoque mattis pharetra fringilla pharetra. Ultrices pellentesque ultricies diam vitae gravida quis ultricies. Commodo ut ultrices dignissim sem vel aliquam accumsan molestie dis. Consequat ut risus in id mauris vehicula at."
              }
            </p>
          </div>
          <div className={"heading-block-five"}>
            <h5>{"Heading 5-This is an example"}</h5>
            <p>
              <strong>{"PARAGRAPH -"}</strong>
              {
                " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque amet, urna fames tincidunt. Risus scelerisque purus mattis tellus adipiscing eget integer nunc sagittis. "
              }
              <span>
                <strong>{"Maecenas adipiscing libero"}</strong>
              </span>
              {
                ", consequat et amet duis et commodo, scelerisque. Proin id enim et natoque mattis pharetra fringilla pharetra. Ultrices pellentesque ultricies diam vitae gravida quis ultricies. Commodo ut ultrices dignissim sem vel aliquam accumsan molestie dis. Consequat ut risus in id mauris vehicula at."
              }
            </p>
          </div>
          <div className={"heading-block-six"}>
            <h6>{"Heading 6-This is an example"}</h6>
            <p>
              <strong>{"PARAGRAPH -"}</strong>
              {
                " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque amet, urna fames tincidunt. Risus scelerisque purus mattis tellus adipiscing eget integer nunc sagittis. "
              }
              <span>
                <strong>{"Maecenas adipiscing libero"}</strong>
              </span>
              {
                ", consequat et amet duis et commodo, scelerisque. Proin id enim et natoque mattis pharetra fringilla pharetra. Ultrices pellentesque ultricies diam vitae gravida quis ultricies. Commodo ut ultrices dignissim sem vel aliquam accumsan molestie dis. Consequat ut risus in id mauris vehicula at."
              }
            </p>
            <div className={"heading-six"}>
              {"This is some text inside of a div block."}
            </div>
          </div>
          <div className={"list-block"}>
            <ul role={"list"}>
              <li>
                <div>{"This is some text inside of a div block."}</div>
              </li>
              <li>
                <div>{"This is some text inside of a div block."}</div>
              </li>
              <li>
                <div>{"This is some text inside of a div block."}</div>
              </li>
            </ul>
          </div>
          <div className={"button-block"}>
            <div className={"heading-three margin-bottom-thirty"}>
              {"Buttons"}
            </div>
            <div className={"w-layout-vflex style-guide-buttons"}>
              <SiteLink
                data-motion-id={"554bdb09-166f-7496-ccbc-6402fc45feda"}
                href={"/home-one"}
                className={"button button-border-off w-inline-block"}
              >
                <div>{"Button One"}</div>
              </SiteLink>
              <SiteLink
                data-motion-id={"d2419891-9f36-e25c-7c72-b1716c5d291d"}
                href={"/home-one"}
                className={"button button-yellow w-inline-block"}
              >
                <div>{"Button Two"}</div>
              </SiteLink>
              <SiteLink
                data-motion-id={"39baf460-15b3-a13b-7a0d-2a8c4923e136"}
                href={"/home-one"}
                className={"button black-border-button w-inline-block"}
              >
                <div>{"Button Three"}</div>
              </SiteLink>
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
