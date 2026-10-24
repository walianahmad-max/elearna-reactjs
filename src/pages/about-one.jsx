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
      <section className={"about-one-hero"}>
        <div
          className={
            "w-layout-blockcontainer about-one-hero-container w-container"
          }
        >
          <div className={"w-layout-vflex about-one-hero-main"}>
            <div
              data-motion-id={"96645ce7-a58f-669a-a10d-291fbaae30d0"}
              className={"small-heading"}
            >
              {"About us"}
            </div>
            <h1
              data-motion-id={"1359af71-79f4-c15f-518d-baecffef8c99"}
              className={"about-one-hero-heading"}
            >
              {"You’re sincerely determined to grow"}
            </h1>
          </div>
        </div>
      </section>
      <section className={"about-one-main"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-hflex about-one-wrap"}>
            <div className={"w-layout-vflex about-one-image-wrap"}>
              <img
                data-motion-id={"b1db974c-6901-f2a5-5f6d-f4888817d9a2"}
                className={"about-image"}
                src={
                  "/assets/89ff27a1-66d9685910e51570ad70d12e_Employ-Images.webp"
                }
                width={"630"}
                height={"635"}
                alt={"Office Image"}
                sizes={"(max-width: 767px) 100vw, 630px"}
                loading={"lazy"}
                srcSet={
                  "/assets/58ec4fb2-66d9685910e51570ad70d12e_Employ-Images-p-500.webp 500w, /assets/62b0c895-66d9685910e51570ad70d12e_Employ-Images-p-800.webp 800w, /assets/594baa5e-66d9685910e51570ad70d12e_Employ-Images-p-1080.webp 1080w, /assets/89ff27a1-66d9685910e51570ad70d12e_Employ-Images.webp 1260w"
                }
              />
              <img
                data-motion-id={"fd910bbf-dc8a-de12-e523-b9962c1e5444"}
                src={
                  "/assets/a2808483-66f640175a11d2c4db6078d6_Trusted-By-Image-In-White.avif"
                }
                loading={"lazy"}
                width={"268"}
                height={"179"}
                alt={"Trusted By Image"}
                className={"about-image-two"}
              />
            </div>
            <div className={"w-layout-vflex about-one-text-wrap"}>
              <div
                data-motion-id={"a5ff96f1-0b24-9a8e-5c74-a45508423d0b"}
                className={"small-heading text-dark"}
              >
                {"Our Story"}
              </div>
              <h2
                data-motion-id={"22aae7bd-3054-0b9c-1fbc-8c2689187f6a"}
                className={"heading-two-gap-updown"}
              >
                {"Limitless learning and get more possibilities"}
              </h2>
              <p
                data-motion-id={"91fe9481-8c9c-1683-8754-d421dde73d8d"}
                className={"margin-bottom-thirty"}
              >
                {
                  "Lorem ipsum dolor sit amet consectetur. Sed ac non suspendisse in maecenas scelerisque imperdiet nec. Pellentesque mauris amet ligula eget malesuada ullamcorper nibh. Etiam suspendisse pretium est elementum elementum rhoncus."
                }
              </p>
              <div
                data-motion-id={"0f42c462-97bb-326d-18d1-ef271f0cc0d6"}
                className={
                  "w-layout-hflex home-two-counters-wrap no-margin-bottom"
                }
              >
                <div className={"w-layout-vflex home-two-counters"}>
                  <div
                    data-motion-id={"0f42c462-97bb-326d-18d1-ef271f0cc0d8"}
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
                    data-motion-id={"0f42c462-97bb-326d-18d1-ef271f0cc0ff"}
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
                    data-motion-id={"0f42c462-97bb-326d-18d1-ef271f0cc14a"}
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
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div
            data-motion-id={"6cee345c-516e-ac91-e93b-ae101bb3214d"}
            className={
              "w-layout-hflex home-two-details-main background-color-dark"
            }
          >
            <div className={"w-layout-hflex home-two-details-box"}>
              <img
                src={
                  "/assets/0cc439f9-66d9685900d6e3c06862ddb9_Circle-Icons-White.svg"
                }
                loading={"lazy"}
                width={"45"}
                height={"45"}
                alt={"Icon"}
                className={"details-icon"}
              />
              <div className={"w-layout-vflex details-text"}>
                <div className={"heading-four text-white"}>
                  {"150+ online courses"}
                </div>
                <p className={"no-margin-bottom text-light-white"}>
                  {"Lorem ipsum dolor sit amet"}
                </p>
              </div>
            </div>
            <div className={"w-layout-hflex home-two-details-box"}>
              <img
                src={
                  "/assets/7951c540-66d96859c968783a7b05acb2_Pen-Icons-White.svg"
                }
                loading={"lazy"}
                width={"45"}
                height={"45"}
                alt={"Icon"}
                className={"details-icon"}
              />
              <div className={"w-layout-vflex details-text"}>
                <div className={"heading-four text-white"}>
                  {"Personalized learning"}
                </div>
                <p className={"no-margin-bottom text-light-white"}>
                  {"Lorem ipsum dolor sit amet"}
                </p>
              </div>
            </div>
            <div className={"w-layout-hflex home-two-details-box"}>
              <img
                src={
                  "/assets/11284ab5-66d96859eeb82869ca4d5d1e_Update-White-Icons.svg"
                }
                loading={"lazy"}
                width={"45"}
                height={"45"}
                alt={"Icon"}
                className={"details-icon"}
              />
              <div className={"w-layout-vflex details-text"}>
                <div className={"heading-four text-white"}>
                  {"Lifetime update"}
                </div>
                <p className={"no-margin-bottom text-light-white"}>
                  {"Lorem ipsum dolor sit amet"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"about-one-success-cards"}>
        <div className={"w-layout-blockcontainer w-container"}>
          <div className={"w-layout-vflex about-one-success-main"}>
            <div
              data-motion-id={"a5ff96f1-0b24-9a8e-5c74-a45508423d0b"}
              className={"small-heading text-dark"}
            >
              {"Why we are"}
            </div>
            <div
              data-motion-id={"ce718781-73b5-8f8c-d3ab-d7133fddbc00"}
              className={"heading-three about-one-success-heading"}
            >
              {
                "We believe in our good education and development system and we know how to work together to reach greater success"
              }
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          data-motion-id={"cfa7d4f6-8cc2-116f-57eb-33c2a39b8755"}
          className={
            "home-three-potential-cards-wrap about-one-hover-accordion"
          }
        >
          <div
            data-motion-id={"cfa7d4f6-8cc2-116f-57eb-33c2a39b8756"}
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
              data-motion-id={"cfa7d4f6-8cc2-116f-57eb-33c2a39b875d"}
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
            data-motion-id={"cfa7d4f6-8cc2-116f-57eb-33c2a39b8760"}
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
            data-motion-id={"cfa7d4f6-8cc2-116f-57eb-33c2a39b876a"}
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
              data-motion-id={"cfa7d4f6-8cc2-116f-57eb-33c2a39b8771"}
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
            data-motion-id={"cfa7d4f6-8cc2-116f-57eb-33c2a39b8774"}
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
              data-motion-id={"cfa7d4f6-8cc2-116f-57eb-33c2a39b877b"}
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
      <section className={"about-one-offer"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-hflex about-one-offer-main"}>
            <div className={"home-two-learning-image-wrap"}>
              <div
                data-motion-id={"6fa57dca-018c-704c-f9bc-784a937c4993"}
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
                    id={"6fa57dca-018c-704c-f9bc-784a937c4994-video"}
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
                data-motion-id={"6fa57dca-018c-704c-f9bc-784a937c4995"}
                className={"learning-image-wrap"}
              >
                <img
                  src={
                    "/assets/170414f5-66d96859eb61b636c95fdb98_Girl-Image-Using-Laptop.webp"
                  }
                  loading={"lazy"}
                  width={"366"}
                  height={"471"}
                  alt={"Woman Image"}
                  srcSet={
                    "/assets/7a3c7d04-66d96859eb61b636c95fdb98_Girl-Image-Using-Laptop-p-500.webp 500w, /assets/170414f5-66d96859eb61b636c95fdb98_Girl-Image-Using-Laptop.webp 732w"
                  }
                  sizes={"(max-width: 479px) 100vw, 366px"}
                  className={"border-radius-four tab-image-full-width"}
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
                data-motion-id={"3d0fc8a0-f487-6d87-2a75-6c28854ced54"}
                className={"heading-two-gap-updown"}
              >
                {"Personalized learning for your ambitions"}
              </h2>
              <p
                data-motion-id={"3d0fc8a0-f487-6d87-2a75-6c28854ced56"}
                className={"margin-bottom-twenty"}
              >
                {
                  "Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut."
                }
              </p>
              <ul
                data-motion-id={"3d0fc8a0-f487-6d87-2a75-6c28854ced58"}
                role={"list"}
                className={"home-one-offer-list"}
              >
                <li className={"heading-six"}>{"Skill-based instruction"}</li>
                <li className={"heading-six"}>{"Analytics and insights"}</li>
                <li className={"heading-six"}>{"Global certification"}</li>
                <li className={"heading-six"}>{"Customizable courses"}</li>
              </ul>
              <div
                data-motion-id={"3d0fc8a0-f487-6d87-2a75-6c28854ced61"}
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
      <section className={"about-one-instructor"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-hflex about-one-instructor-main"}>
            <div className={"w-layout-vflex about-one-instructor-text"}>
              <h2
                data-motion-id={"067b512d-ae23-5f98-b991-60bd021882d2"}
                className={"no-margin-top"}
              >
                {"Became an instructor"}
              </h2>
              <p
                data-motion-id={"6496e901-c714-6576-effe-9714aac7e5b0"}
                className={"margin-bottom-thirty"}
              >
                {
                  "Lorem ipsum dolor sit amet consectetur. Sed ultricies fames scelerisque urna quis semper amet. Nisl tincidunt tortor nullam est nec commodo orci dictum in. Lorem consectetur donec purus sagittis."
                }
              </p>
              <div>
                <SiteLink
                  data-motion-id={"554bdb09-166f-7496-ccbc-6402fc45feda"}
                  href={"/career"}
                  className={"button button-border-off w-inline-block"}
                >
                  <div>{"Start teaching today"}</div>
                </SiteLink>
              </div>
            </div>
            <div className={"about-one-instructor-image"}>
              <img
                data-motion-id={"82afe75e-cef4-2e50-50c0-be16e6e75542"}
                className={"tab-image-full-width"}
                src={
                  "/assets/1bdcce72-66d98189c5a2b384d11ea977_Girl-With-Logo.webp"
                }
                width={"471"}
                height={"Auto"}
                alt={"Girl Image"}
                sizes={"(max-width: 479px) 100vw, 471px"}
                loading={"lazy"}
                srcSet={
                  "/assets/e694ad81-66d98189c5a2b384d11ea977_Girl-With-Logo-p-500.webp 500w, /assets/94688aa7-66d98189c5a2b384d11ea977_Girl-With-Logo-p-800.webp 800w, /assets/1bdcce72-66d98189c5a2b384d11ea977_Girl-With-Logo.webp 942w"
                }
              />
              <img
                data-motion-id={"26e3df4c-8214-2d09-daec-df82d7025cf1"}
                src={
                  "/assets/49bf04d4-66d98188f6fc5249944bae7c_Review-Popup.webp"
                }
                loading={"lazy"}
                width={"218"}
                height={"107"}
                alt={"Popup"}
                className={"instructor-popup-image"}
              />
            </div>
          </div>
        </div>
      </section>
      <div className={"background-light-blue"}>
        <section className={"home-two-testimonial"}>
          <div
            className={
              "w-layout-blockcontainer home-two-testimonial-container w-container"
            }
          >
            <div className={"w-layout-vflex home-two-testimonial-main"}>
              <img
                data-motion-id={"94133b6d-1f40-cb6b-ab13-10b498f20ec3"}
                src={
                  "/assets/d297079d-66cff274c1ce9bc0b1d47e56_Quote-Icons.svg"
                }
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
                    <div
                      className={"w-layout-vflex home-two-testimonial-items"}
                    >
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
                    <div
                      className={"w-layout-vflex home-two-testimonial-items"}
                    >
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
      </div>
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
                <div data-motion-id={"a9fd0c29-c441-5739-a8a9-417878ac457b"}>
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
    </>
  );
}
