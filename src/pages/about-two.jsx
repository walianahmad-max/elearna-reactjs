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
      <section className={"about-two-hero"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-vflex about-two-hero-main"}>
            <div
              data-motion-id={"96645ce7-a58f-669a-a10d-291fbaae30d0"}
              className={"small-heading"}
            >
              {"About us"}
            </div>
            <h1
              data-motion-id={"24c6b578-8d64-2253-f84b-a75954c85557"}
              className={"no-margin-bottom heading-one-top-gap text-white"}
            >
              {"You’re sincerely determined to grow"}
            </h1>
          </div>
        </div>
      </section>
      <section className={"about-two-section"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-hflex about-two-main"}>
            <div className={"about-two-image-wrapper"}>
              <div className={"w-layout-hflex about-two-image-top-box"}>
                <div>
                  <img
                    src={
                      "/assets/89524226-66daee82ea8dfe862f20b4e4_Office-Image-2.webp"
                    }
                    loading={"lazy"}
                    width={"490.5"}
                    height={"298"}
                    alt={"Office Image"}
                    srcSet={
                      "/assets/7ee07462-66daee82ea8dfe862f20b4e4_Office-Image-2-p-500.webp 500w, /assets/14dcd303-66daee82ea8dfe862f20b4e4_Office-Image-2-p-800.webp 800w, /assets/89524226-66daee82ea8dfe862f20b4e4_Office-Image-2.webp 981w"
                    }
                    sizes={"(max-width: 767px) 100vw, 490.5px"}
                    className={
                      "border-radius-four about-two-image-shadow tab-image-full-width"
                    }
                  />
                </div>
                <div
                  data-motion-id={"7cf2254f-ed69-73c2-d7b1-ef2b331f0396"}
                  className={"w-layout-hflex about-two-text"}
                >
                  <div className={"small-text text-vertical"}>
                    {"Year of experiance"}
                  </div>
                  <div className={"text-vertical heading-big-text"}>{"25"}</div>
                </div>
              </div>
              <div
                data-motion-id={"53d33cee-d3ae-570c-4dc7-afde5b4d73d9"}
                className={"about-two-women-image"}
              >
                <img
                  src={
                    "/assets/a1fff0ff-66daee819397693612f2103a_Girl-Image-2.webp"
                  }
                  loading={"lazy"}
                  width={"444.5"}
                  height={"480"}
                  alt={"Employee Image"}
                  srcSet={
                    "/assets/68eff594-66daee819397693612f2103a_Girl-Image-2-p-500.webp 500w, /assets/49fe6086-66daee819397693612f2103a_Girl-Image-2-p-800.webp 800w, /assets/a1fff0ff-66daee819397693612f2103a_Girl-Image-2.webp 889w"
                  }
                  sizes={"(max-width: 479px) 100vw, 444.5px"}
                  className={
                    "border-radius-four about-two-image-shadow tab-image-full-width"
                  }
                />
              </div>
            </div>
            <div className={"w-layout-vflex about-two-main-text"}>
              <div
                data-motion-id={"a5ff96f1-0b24-9a8e-5c74-a45508423d0b"}
                className={"small-heading text-dark"}
              >
                {"Our Story"}
              </div>
              <h2
                data-motion-id={"2fe4fcbc-10d2-9ec9-9101-a889881fb4a6"}
                className={"heading-two-gap-updown"}
              >
                {"Limitless learning and get more possibilities"}
              </h2>
              <p
                data-motion-id={"79cc9ff1-bff9-de55-03df-68e4d4f39ac4"}
                className={"margin-bottom-twenty"}
              >
                {
                  "Lorem ipsum dolor sit amet consectetur. Sed ac non suspendisse in maecenas scelerisque imperdiet nec. Pellentesque mauris amet ligula eget malesuada ullamcorper nibh. Etiam suspendisse pretium est elementum elementum rhoncus."
                }
              </p>
              <p
                data-motion-id={"fe86ade9-2acb-dc81-50e6-874fa20f8e43"}
                className={"no-margin-bottom"}
              >
                {
                  "Lorem ipsum dolor sit amet consectetur. Sed ac non suspendisse in maecenas scelerisque imperdiet nec. Pellentesque mauris amet ligula eget malesuada ullamcorper nibh."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-vflex flex-block-2"}>
            <div
              data-motion-id={"a5ff96f1-0b24-9a8e-5c74-a45508423d0b"}
              className={"small-heading text-dark"}
            >
              {"OUR PHILOSOPHY"}
            </div>
            <div
              data-motion-id={"646660cd-f3c4-a3f8-6cdb-d399428bd532"}
              className={"heading-three heading-three-gap-top"}
            >
              {"Get instant access courses"}
            </div>
            <div
              data-motion-id={"a9958c08-7c6a-5358-7774-099ede7fefc9"}
              className={"about-two-course-categories"}
            >
              <div
                data-motion-id={"25689f50-4168-b928-ea00-abc6b6e17c42"}
                className={"category-four-cards"}
              >
                <div className={"category-four-cards-background"}>
                  <div className={"heading-five writing-mode"}>
                    {"Web design"}
                  </div>
                </div>
                <div className={"category-cards-image-wrap"}>
                  <img
                    src={
                      "/assets/8cad4d2a-66da9a05aa9e740b88ae7a79_Category-Cards-Four-Image.webp"
                    }
                    loading={"lazy"}
                    width={"300"}
                    alt={"Course Image"}
                    sizes={
                      "(max-width: 479px) 19vw, (max-width: 767px) 21vw, (max-width: 991px) 22vw, (max-width: 1439px) 23vw, 300px"
                    }
                    srcSet={
                      "/assets/a4cdec0d-66da9a05aa9e740b88ae7a79_Category-Cards-Four-Image-p-500.webp 500w, /assets/8cad4d2a-66da9a05aa9e740b88ae7a79_Category-Cards-Four-Image.webp 600w"
                    }
                    className={"category-four-image"}
                  />
                </div>
                <SiteLink
                  href={"/category/design"}
                  className={"arrow w-inline-block"}
                >
                  <img
                    src={
                      "/assets/a28d5e5b-66cff27450908035329d09f0_Slider-Arrow-Black.svg"
                    }
                    loading={"lazy"}
                    width={"18"}
                    height={"14"}
                    alt={"Slider Arrow"}
                  />
                </SiteLink>
              </div>
              <div
                data-motion-id={"25689f50-4168-b928-ea00-abc6b6e17c42"}
                className={"category-four-cards"}
              >
                <div className={"category-four-cards-background"}>
                  <div className={"heading-five writing-mode"}>
                    {"Web development"}
                  </div>
                </div>
                <div className={"category-cards-image-wrap"}>
                  <img
                    src={
                      "/assets/57d494a7-66da9a063bb8f3786af79ac7_Category-Cards-Four-Image-2.webp"
                    }
                    loading={"lazy"}
                    width={"300"}
                    alt={"Course Image"}
                    sizes={"(max-width: 479px) 100vw, 300px"}
                    srcSet={
                      "/assets/9deb7325-66da9a063bb8f3786af79ac7_Category-Cards-Four-Image-2-p-500.webp 500w, /assets/57d494a7-66da9a063bb8f3786af79ac7_Category-Cards-Four-Image-2.webp 600w"
                    }
                    className={"category-four-image"}
                  />
                </div>
                <SiteLink
                  href={"/category/development"}
                  className={"arrow w-inline-block"}
                >
                  <img
                    src={
                      "/assets/a28d5e5b-66cff27450908035329d09f0_Slider-Arrow-Black.svg"
                    }
                    loading={"lazy"}
                    width={"18"}
                    height={"14"}
                    alt={"Slider Arrow"}
                  />
                </SiteLink>
              </div>
              <div
                data-motion-id={"25689f50-4168-b928-ea00-abc6b6e17c42"}
                className={"category-four-cards"}
              >
                <div className={"category-four-cards-background"}>
                  <div className={"heading-five writing-mode"}>
                    {"Management"}
                  </div>
                </div>
                <div className={"category-cards-image-wrap"}>
                  <img
                    src={
                      "/assets/74a4d3a7-66da9a0513cc43ec3ac57975_Category-Cards-Four-Image-3.webp"
                    }
                    loading={"lazy"}
                    width={"300"}
                    alt={"Course Image"}
                    sizes={"(max-width: 479px) 100vw, 300px"}
                    srcSet={
                      "/assets/96e92bb2-66da9a0513cc43ec3ac57975_Category-Cards-Four-Image-3-p-500.webp 500w, /assets/74a4d3a7-66da9a0513cc43ec3ac57975_Category-Cards-Four-Image-3.webp 600w"
                    }
                    className={"category-four-image"}
                  />
                </div>
                <SiteLink
                  href={"/category/management"}
                  className={"arrow w-inline-block"}
                >
                  <img
                    src={
                      "/assets/a28d5e5b-66cff27450908035329d09f0_Slider-Arrow-Black.svg"
                    }
                    loading={"lazy"}
                    width={"18"}
                    height={"14"}
                    alt={"Slider Arrow"}
                  />
                </SiteLink>
              </div>
              <div
                data-motion-id={"25689f50-4168-b928-ea00-abc6b6e17c42"}
                className={"category-four-cards"}
              >
                <div className={"category-four-cards-background"}>
                  <div className={"heading-five writing-mode"}>{"Finance"}</div>
                </div>
                <div className={"category-cards-image-wrap"}>
                  <img
                    src={
                      "/assets/fee9e293-66da9a0676bc7a4c6602a446_Category-Cards-Four-Image-5.webp"
                    }
                    loading={"lazy"}
                    width={"300"}
                    alt={"Course Image"}
                    sizes={"(max-width: 479px) 100vw, 300px"}
                    srcSet={
                      "/assets/f66d5f1d-66da9a0676bc7a4c6602a446_Category-Cards-Four-Image-5-p-500.webp 500w, /assets/fee9e293-66da9a0676bc7a4c6602a446_Category-Cards-Four-Image-5.webp 600w"
                    }
                    className={"category-four-image"}
                  />
                </div>
                <SiteLink
                  href={"/category/finance"}
                  className={"arrow w-inline-block"}
                >
                  <img
                    src={
                      "/assets/a28d5e5b-66cff27450908035329d09f0_Slider-Arrow-Black.svg"
                    }
                    loading={"lazy"}
                    width={"18"}
                    height={"14"}
                    alt={"Slider Arrow"}
                  />
                </SiteLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"about-two-quote-text"}>
        <div
          className={"w-layout-blockcontainer quote-text-container w-container"}
        >
          <div className={"w-layout-vflex quote-text-main"}>
            <div
              data-motion-id={"a5ff96f1-0b24-9a8e-5c74-a45508423d0b"}
              className={"small-heading text-dark"}
            >
              {"Why we are"}
            </div>
            <div
              data-motion-id={"c862a517-d141-74ed-db98-65c71f0d8bc2"}
              className={"heading-four"}
            >
              {
                "We believe in our good education and development system and we know how to work together to reach greater success"
              }
            </div>
          </div>
        </div>
      </section>
      <section className={"tab-gutter"}>
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
      <section className={"about-two-vision"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-hflex about-two-vision-main"}>
            <div className={"w-layout-hflex about-two-vision-left"}>
              <div
                className={"w-layout-vflex vision-images-wrapper align-right"}
              >
                <img
                  data-motion-id={"1b5bdbab-b731-b869-8dd2-704b41ae0116"}
                  className={"border-radius-four tab-image-full-width"}
                  src={
                    "/assets/0d0b9d16-66da9a051cb82fa9e66bb1cf_About-Two-Employe-Image.webp"
                  }
                  width={"314.5"}
                  height={"337"}
                  alt={"Employee Image"}
                  sizes={"(max-width: 479px) 100vw, 314.5px"}
                  loading={"lazy"}
                  srcSet={
                    "/assets/a8fa8689-66da9a051cb82fa9e66bb1cf_About-Two-Employe-Image-p-500.webp 500w, /assets/0d0b9d16-66da9a051cb82fa9e66bb1cf_About-Two-Employe-Image.webp 629w"
                  }
                />
                <div
                  data-motion-id={"bff4d4ee-ffd9-ae64-9603-aa20e0fb1f94"}
                  className={"w-layout-vflex vision-counter-boxes"}
                >
                  <div
                    data-motion-id={"bd1085d3-86b4-3e9f-9992-eed0c1b4e268"}
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
              <div className={"w-layout-vflex vision-images-wrapper"}>
                <div
                  data-motion-id={"82b76c4f-9cf2-ad7d-269f-e44d3c22d20c"}
                  className={
                    "w-layout-vflex vision-counter-boxes vision-box-dark"
                  }
                >
                  <div
                    data-motion-id={"2a26eb8a-0f5f-06ea-a9c4-99003f481ca7"}
                    className={"w-layout-hflex counter-box"}
                  >
                    <Interactive
                      className={"w-layout-vflex counter-train-wrapper"}
                      as={"div"}
                      counterValue={"1"}
                      counterClass={"heading-two text-yellow"}
                    ></Interactive>
                    <div className={"heading-two text-yellow"}>{"."}</div>
                    <Interactive
                      className={"w-layout-vflex counter-train-wrapper"}
                      as={"div"}
                      counterValue={"5"}
                      counterClass={"heading-two text-yellow"}
                    ></Interactive>
                    <div className={"heading-two text-yellow"}>{"K"}</div>
                  </div>
                  <div className={"small-heading text-yellow"}>
                    {"Finish seasons"}
                  </div>
                </div>
                <img
                  data-motion-id={"a469f7b5-6af5-fe8d-4f88-28910c34377f"}
                  className={"border-radius-four tab-image-full-width"}
                  src={
                    "/assets/4dda20ee-66da9a0522aa9880e21a6574_About-Two-Employee-Image.webp"
                  }
                  width={"315"}
                  height={"337"}
                  alt={"Employee Image"}
                  sizes={"(max-width: 479px) 100vw, 315px"}
                  loading={"lazy"}
                  srcSet={
                    "/assets/9f664ae2-66da9a0522aa9880e21a6574_About-Two-Employee-Image-p-500.webp 500w, /assets/4dda20ee-66da9a0522aa9880e21a6574_About-Two-Employee-Image.webp 630w"
                  }
                />
              </div>
            </div>
            <div className={"w-layout-vflex about-two-vision-right"}>
              <div
                data-motion-id={"a5ff96f1-0b24-9a8e-5c74-a45508423d0b"}
                className={"small-heading text-dark"}
              >
                {"Our vision"}
              </div>
              <h2
                data-motion-id={"7ec61bbe-3a86-101c-c60c-b254afbe3b48"}
                className={"vision-heading"}
              >
                {"75K+ student joined with us to achieve their goals"}
              </h2>
              <p
                data-motion-id={"6db6a215-1254-eae3-aebb-725b2eaf0905"}
                className={"vision-description"}
              >
                {
                  "Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut."
                }
              </p>
              <ul
                data-motion-id={"ec7e67e9-1e40-2edd-3733-46071a273482"}
                role={"list"}
              >
                <li className={"margin-bottom-ten"}>
                  {"Lorem ipsum dolor sit amet consectetur id quam mauris mus."}
                </li>
                <li className={"margin-bottom-ten"}>
                  {"Lorem ipsum dolor sit amet consectetur id quam mauris mus."}
                </li>
                <li>
                  {"Lorem ipsum dolor sit amet consectetur id quam mauris mus."}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className={"about-two-instructor-section"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div
            data-motion-id={"1d703601-7643-e5a5-b454-d9ef5940dc56"}
            className={"w-layout-hflex about-two-instructor"}
          >
            <div className={"w-layout-hflex about-two-instrutor-main"}>
              <div className={"w-layout-vflex about-two-instructor-text"}>
                <div
                  className={"heading-three text-white margin-bottom-twenty"}
                >
                  {"Became an instructor"}
                </div>
                <p className={"margin-bottom-thirty text-light-white"}>
                  {
                    "Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut."
                  }
                </p>
                <SiteLink
                  data-motion-id={"d2419891-9f36-e25c-7c72-b1716c5d291d"}
                  href={"/career"}
                  className={"button button-yellow w-inline-block"}
                >
                  <div>{"Start teaching today"}</div>
                </SiteLink>
              </div>
              <div className={"about-two-instrutor-image"}>
                <img
                  src={
                    "/assets/fd9391d8-66d9a76a5c3df7839d6b0e28_Girl-Image-With-Logo-Two.webp"
                  }
                  loading={"lazy"}
                  width={"428"}
                  height={"448"}
                  alt={"Instructor Image"}
                  srcSet={
                    "/assets/1bcb30b4-66d9a76a5c3df7839d6b0e28_Girl-Image-With-Logo-Two-p-500.webp 500w, /assets/bf332055-66d9a76a5c3df7839d6b0e28_Girl-Image-With-Logo-Two-p-800.webp 800w, /assets/fd9391d8-66d9a76a5c3df7839d6b0e28_Girl-Image-With-Logo-Two.webp 856w"
                  }
                  sizes={"(max-width: 479px) 100vw, 428px"}
                  className={
                    "tab-image-full-width instructor-image-responsive-hide"
                  }
                />
                <img
                  src={
                    "/assets/d0bd3636-66da8cb1daaf8e000950b81e_Instructor-Image-With-Logo.webp"
                  }
                  loading={"lazy"}
                  width={"428"}
                  height={"448"}
                  alt={"Instructor Image"}
                  srcSet={
                    "/assets/94122326-66da8cb1daaf8e000950b81e_Instructor-Image-With-Logo-p-500.webp 500w, /assets/6c358a66-66da8cb1daaf8e000950b81e_Instructor-Image-With-Logo-p-800.webp 800w, /assets/d0bd3636-66da8cb1daaf8e000950b81e_Instructor-Image-With-Logo.webp 844w"
                  }
                  sizes={"(max-width: 479px) 100vw, 428px"}
                  className={"tab-image-full-width instructor-desktop-hide"}
                />
                <img
                  src={
                    "/assets/49bf04d4-66d98188f6fc5249944bae7c_Review-Popup.webp"
                  }
                  loading={"lazy"}
                  width={"218"}
                  alt={"Popup"}
                  className={"instructor-review"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"about-two-blogs"}>
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
                  <div data-motion-id={"158ab8fc-ad70-9da7-491a-bf0e58f9d2d6"}>
                    {"Call us"}
                  </div>
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
