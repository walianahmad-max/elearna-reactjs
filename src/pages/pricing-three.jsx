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
                      className={"menu-sublist sub-menu-bottom w-dropdown-list"}
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
                <SiteLink href={"/sign-up"} className={"menu-font text-white"}>
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
      <section className={"pricing-three-hero"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-vflex pricing-three-top"}>
            <div
              data-motion-id={"96645ce7-a58f-669a-a10d-291fbaae30d0"}
              className={"small-heading"}
            >
              {"Pricing"}
            </div>
            <h1
              data-motion-id={"7c636057-24a3-cda9-5725-a9d47a8fa918"}
              className={
                "heading-one-top-gap text-white pricing-three-hero-heading"
              }
            >
              {"Flexible pricing plan for everyone"}
            </h1>
          </div>
          <div
            data-motion-id={"e3bf9a02-1972-52fd-f999-e85ffe997de8"}
            className={
              "w-layout-hflex pricing-one-toggle-box pricing-three-toggle"
            }
          >
            <div className={"small-heading"}>{"Monthly"}</div>
            <div
              data-motion-id={"e3bf9a02-1972-52fd-f999-e85ffe997deb"}
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
            <div className={"small-heading"}>{"Yearly"}</div>
          </div>
          <div className={"pricing-one-cards-wrapper"}>
            <div
              data-motion-id={"845ad823-93cd-69c4-53dc-3b4c24f78de3"}
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
              data-motion-id={"e3bf9a02-1972-52fd-f999-e85ffe997e14"}
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
              data-motion-id={"e3bf9a02-1972-52fd-f999-e85ffe997e38"}
              className={
                "w-layout-vflex pricing-one-card pricing-dark-card yellow-border"
              }
            >
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
                  <div data-motion-id={"4d5e66a2-6b2d-ddc8-d0ad-ca52bfa0df68"}>
                    {"Need support?"}
                  </div>
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
