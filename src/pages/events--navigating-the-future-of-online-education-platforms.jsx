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
      <section
        style={{
          backgroundImage:
            'url("/assets/38aa201d-66e40dfd5bddc381811999d5_Event-Banner-3.webp")',
        }}
        className={"events-details-hero"}
      >
        <div className={"events-background-overlay"}></div>
        <div
          className={
            "w-layout-blockcontainer events-details-hero-container w-container"
          }
        >
          <div className={"w-layout-vflex events-details-hero-main"}>
            <div className={"w-layout-hflex events-cards-tag"}>
              <div className={"small-shot-heading text-white"}>
                {"Detroit ,USA"}
              </div>
              <div className={"small-dot color-white"}></div>
              <div className={"small-shot-heading text-white"}>
                {"10:00 am - 5:00 pm"}
              </div>
            </div>
            <h1
              data-motion-id={"64d35549-0d93-9574-0edb-e295d0ed91a7"}
              className={"heading-one-top-gap text-white margin-bottom-twenty"}
            >
              {"Navigating the future of online education platforms"}
            </h1>
            <div
              data-motion-id={"5b2420da-2dda-3f0c-c3fd-33a31a226d04"}
              className={"text-white"}
            >
              {"October 20, 2024"}
            </div>
          </div>
        </div>
      </section>
      <section className={"events-details"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-hflex event-details-main"}>
            <div
              data-motion-id={"32924d3e-df12-4a30-1b31-d6da164437c6"}
              className={"event-details-content"}
            >
              <div className={"w-richtext"}>
                <h3>{"Event details"}</h3>
                <p>
                  {
                    "Lorem ipsum dolor sit amet consectetur. Et facilisis nunc quam quam etiam donec pellentesque ut. Nisl pellentesque at aliquam scelerisque non consequat amet curabitur. Imperdiet habitant purus pulvinar diam. Molestie pharetra morbi eu odio volutpat. Cursus velit elit senectus auctor vitae tristique velit. Feugiat consequat diam ipsum suspendisse vestibulum ipsum malesuada."
                  }
                </p>
                <p>
                  {
                    "Lorem ipsum dolor sit amet consectetur. Interdum mauris ac ipsum pulvinar tempor tincidunt. Condimentum lacus at augue tortor viverra dui. Turpis sed ut leo dignissim scelerisque.Adipiscing aliquam id aliquam lorem. Tempor ut nullam et amet. Sed nulla blandit tellus tincidunt aliquam odio amet sed interdum. Facilisis eget nullam ultrices elementum in congue id vestibulum. Pellentesque morbi est lobortis eget arcu curabitur. Tortor phasellus non in lacus turpis proin arcu mollis. Amet id nunc at ipsum adipiscing varius lacus tristique ante. Nibh habitant tellus turpis nec risus diam cursus convallis nec. Enim ut massa pellentesque viverra."
                  }
                </p>
                <p>{"‍"}</p>
                <h4>{"Event content"}</h4>
                <ul role={"list"}>
                  <li>
                    {
                      "Lorem ipsum dolor sit amet consectetur. Interdum mauris ac ipsum pulvinar tempor tincidunt. Condimentum lacus at augue tortor viverra dui."
                    }
                  </li>
                  <li>
                    {
                      "Lorem ipsum dolor sit amet consectetur. Interdum mauris ac ipsum."
                    }
                  </li>
                  <li>
                    {
                      "Lorem ipsum dolor sit amet consectetur. Interdum mauris ac ipsum."
                    }
                  </li>
                  <li>
                    {
                      "Lorem ipsum dolor sit amet consectetur. Interdum mauris ac ipsum pulvinar tempor tincidunt. Condimentum lacus at augue tortor viverra dui."
                    }
                  </li>
                  <li>
                    {
                      "Lorem ipsum dolor sit amet consectetur ac ipsum pulvinar tempor tincidunt. Condimentum lacus at augue tortor viverra dui."
                    }
                  </li>
                  <li>
                    {
                      "Lorem ipsum dolor sit amet consectetur. Interdum mauris ac ipsum."
                    }
                  </li>
                </ul>
                <p>{"‍"}</p>
                <figure
                  style={{ maxWidth: "1518pxpx" }}
                  className={
                    "w-richtext-align-fullwidth w-richtext-figure-type-image"
                  }
                >
                  <div>
                    <img
                      loading={"lazy"}
                      alt={""}
                      src={
                        "/assets/b01623f6-66e5082a9ec2cf5375aae0ab_66e5074167d5eeb317e1437a_Events-20Image.webp"
                      }
                    />
                  </div>
                </figure>
                <p>{"‍"}</p>
                <h4>{"Event management"}</h4>
                <p>
                  {
                    "Lorem ipsum dolor sit amet consectetur. Interdum mauris ac ipsum pulvinar tempor tincidunt.Tempor ut nullam et amet. Sed nulla blandit tellus tincidunt aliquam odio amet sed interdum. Facilisis eget nullam ultrices elementum in congue id vestibulum. Pellentesque morbi est lobortis eget arcu curabitur. Tortor phasellus non in lacus turpis proin arcu mollis."
                  }
                </p>
              </div>
            </div>
            <div className={"events-details-right"}>
              <div
                data-motion-id={"08988fff-3c3e-84f3-acf7-896663f30756"}
                className={"events-booking"}
              >
                <div className={"w-layout-vflex booking-form-top"}>
                  <div className={"heading-four"}>{"Buy tickets"}</div>
                </div>
                <div className={"booking-form-body"}>
                  <div className={"w-layout-hflex bookings-details-wrap"}>
                    <div>{"Total slots"}</div>
                    <div>{"500"}</div>
                  </div>
                  <div className={"w-layout-hflex bookings-details-wrap"}>
                    <div>{"Booked Slots"}</div>
                    <div>{"105"}</div>
                  </div>
                  <div
                    className={
                      "w-layout-hflex bookings-details-wrap booking-form-gap-reduce"
                    }
                  >
                    <div>{"Ticket price"}</div>
                    <div className={"text-yellow text-all-capitalize"}>
                      {"$250"}
                    </div>
                  </div>
                  <div className={"no-margin w-form"}>
                    <SiteForm
                      id={"email-form"}
                      name={"email-form"}
                      data-name={"Email Form"}
                      formKind={"contact"}
                      route={
                        "/events/navigating-the-future-of-online-education-platforms"
                      }
                    >
                      <div
                        className={
                          "w-layout-hflex bookings-details-wrap quantity-wrapper margin-bottom-change"
                        }
                      >
                        <label
                          htmlFor={"Ticket-Quantity"}
                          className={"text-weight-normal"}
                        >
                          {"Quantity"}
                        </label>
                        <input
                          className={"booking-quantity-field w-input"}
                          maxLength={"256"}
                          name={"Ticket-Quantity"}
                          data-name={"Ticket Quantity"}
                          placeholder={"1"}
                          type={"number"}
                          id={"Ticket-Quantity"}
                          required={true}
                        />
                      </div>
                      <div
                        className={
                          "w-layout-hflex bookings-details-wrap quantity-wrapper"
                        }
                      >
                        <label
                          htmlFor={"Email"}
                          className={"text-weight-normal"}
                        >
                          {"Email"}
                        </label>
                        <input
                          className={"book-email w-input"}
                          maxLength={"256"}
                          name={"Email"}
                          data-name={"Email"}
                          placeholder={""}
                          type={"email"}
                          id={"Email"}
                          required={true}
                        />
                      </div>
                      <div className={"w-layout-hflex booking-button-wrapper"}>
                        <input
                          type={"submit"}
                          data-wait={"Please wait..."}
                          className={"button button-yellow w-button"}
                          value={"Book Now"}
                        />
                      </div>
                      <div className={"text-align-center"}>
                        {"The ticket will be sent via email"}
                      </div>
                    </SiteForm>
                  </div>
                </div>
              </div>
              <div
                data-motion-id={"1e67f627-3d48-b019-409b-ea314d4f4b51"}
                className={"events-manager-box"}
              >
                <div className={"w-layout-hflex events-manager-top"}>
                  <div>
                    <img
                      src={
                        "/assets/aec37a60-66e51d4dec07c3fa3ff27b50_Event-Author-Image-3.jpg"
                      }
                      loading={"lazy"}
                      width={"126"}
                      height={"126"}
                      alt={""}
                      className={"border-radius-full image-height-auto"}
                    />
                  </div>
                  <div className={"w-layout-vflex manager-wrapper"}>
                    <div className={"small-heading text-dark"}>
                      {"Event manager"}
                    </div>
                    <div className={"heading-four"}>{"Dean McGlynn"}</div>
                  </div>
                </div>
                <p className={"text-align-center no-margin-bottom"}>
                  {
                    "Lorem ipsum dolor sit amet consectetur. Interdum mauris ac ipsum pulvinar tempor tincidunt.Tempor ut nullam et amet. Sed nulla blandit tellus tincidunt aliquam odio amet sed interdum."
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"upcoming-events"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"w-layout-vflex upcoming-events-main"}>
            <h2
              data-motion-id={"6e3fb3f2-d473-2171-6e22-bcd97ba1f68e"}
              className={"no-margin-top margin-bottom-twenty"}
            >
              {"Upcoming events"}
            </h2>
            <p
              data-motion-id={"8496c9fb-eef9-703f-0d2e-c692eb9a9ba6"}
              className={"upcoming-events-description"}
            >
              {
                "Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus venenatis donec mattis."
              }
            </p>
            <div className={"collection-list-wrapper w-dyn-list"}>
              <div role={"list"} className={"events-wrapper w-dyn-items"}>
                <div role={"listitem"} className={"w-dyn-item"}>
                  <SiteLink
                    data-motion-id={"b9f0a342-ae1c-a78e-3300-ffa2d3e1d800"}
                    href={
                      "/events/leadership-strategies-for-higher-education-institutions"
                    }
                    className={"events-card-two w-inline-block"}
                  >
                    <img
                      src={
                        "/assets/a1b6ccf7-66e3fd546621c8e4562b7472_Event-Image.webp"
                      }
                      loading={"lazy"}
                      width={"410"}
                      height={"470"}
                      alt={""}
                      sizes={"(max-width: 479px) 100vw, 410px"}
                      srcSet={
                        "/assets/c96bab98-66e3fd546621c8e4562b7472_Event-Image-p-500.webp 500w, /assets/2c1b43b5-66e3fd546621c8e4562b7472_Event-Image-p-800.webp 800w, /assets/a1b6ccf7-66e3fd546621c8e4562b7472_Event-Image.webp 820w"
                      }
                      className={"event-image"}
                    />
                    <div
                      data-motion-id={"b9f0a342-ae1c-a78e-3300-ffa2d3e1d802"}
                      className={"events-date-wrapper"}
                    >
                      <div className={"heading-three"}>{"4"}</div>
                      <div className={"w-layout-vflex event-date-more"}>
                        <div
                          className={
                            "small-shot-heading small-heading-body-color"
                          }
                        >
                          {"Oct"}
                        </div>
                        <div
                          className={
                            "small-shot-heading small-heading-body-color"
                          }
                        >
                          {"2024"}
                        </div>
                      </div>
                    </div>
                    <div
                      data-motion-id={"b9f0a342-ae1c-a78e-3300-ffa2d3e1d807"}
                      className={"marquee-text-box"}
                    >
                      <div className={"event-marquee events-marquee-two"}>
                        <div
                          style={{
                            transform:
                              "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          }}
                          className={"w-layout-hflex marquee-train"}
                        >
                          <div className={"heading-six"}>
                            {"See event details"}
                          </div>
                          <div className={"small-dot"}></div>
                          <div className={"heading-six"}>
                            {"See event details"}
                          </div>
                          <div className={"small-dot"}></div>
                          <div className={"heading-six"}>
                            {"See event details"}
                          </div>
                          <div className={"small-dot"}></div>
                        </div>
                        <div
                          style={{
                            transform:
                              "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          }}
                          className={"w-layout-hflex marquee-train"}
                        >
                          <div className={"heading-six"}>
                            {"See event details"}
                          </div>
                          <div className={"small-dot"}></div>
                          <div className={"heading-six"}>
                            {"See event details"}
                          </div>
                          <div className={"small-dot"}></div>
                          <div className={"heading-six"}>
                            {"See event details"}
                          </div>
                          <div className={"small-dot"}></div>
                        </div>
                        <div
                          style={{
                            transform:
                              "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          }}
                          className={"w-layout-hflex marquee-train"}
                        >
                          <div className={"heading-six"}>
                            {"See event details"}
                          </div>
                          <div className={"small-dot"}></div>
                          <div className={"heading-six"}>
                            {"See event details"}
                          </div>
                          <div className={"small-dot"}></div>
                          <div className={"heading-six"}>
                            {"See event details"}
                          </div>
                          <div className={"small-dot"}></div>
                        </div>
                        <div
                          style={{
                            transform:
                              "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          }}
                          className={"w-layout-hflex marquee-train"}
                        >
                          <div className={"heading-six"}>
                            {"See event details"}
                          </div>
                          <div className={"small-dot"}></div>
                          <div className={"heading-six"}>
                            {"See event details"}
                          </div>
                          <div className={"small-dot"}></div>
                          <div className={"heading-six"}>
                            {"See event details"}
                          </div>
                          <div className={"small-dot"}></div>
                        </div>
                      </div>
                      <div className={"w-layout-vflex events-text"}>
                        <div className={"w-layout-hflex events-cards-tag"}>
                          <div
                            className={
                              "small-shot-heading small-heading-body-color"
                            }
                          >
                            {"New York,USA"}
                          </div>
                          <div className={"small-dot color-grey"}></div>
                          <div
                            className={
                              "small-shot-heading small-heading-body-color"
                            }
                          >
                            {"9:00 am - 7:00 pm"}
                          </div>
                        </div>
                        <div className={"heading-five"}>
                          {
                            "Leadership strategies for higher education institutions"
                          }
                        </div>
                      </div>
                    </div>
                  </SiteLink>
                </div>
                <div role={"listitem"} className={"w-dyn-item"}>
                  <SiteLink
                    data-motion-id={"b9f0a342-ae1c-a78e-3300-ffa2d3e1d800"}
                    href={
                      "/events/professional-development-for-online-educators-and-trainers"
                    }
                    className={"events-card-two w-inline-block"}
                  >
                    <img
                      src={
                        "/assets/ecdeb02c-66e3fd84d5ee3e9e2dc6737c_Event-Image-3.webp"
                      }
                      loading={"lazy"}
                      width={"410"}
                      height={"470"}
                      alt={""}
                      sizes={"(max-width: 479px) 100vw, 410px"}
                      srcSet={
                        "/assets/14927e26-66e3fd84d5ee3e9e2dc6737c_Event-Image-3-p-500.webp 500w, /assets/9f972d58-66e3fd84d5ee3e9e2dc6737c_Event-Image-3-p-800.webp 800w, /assets/ecdeb02c-66e3fd84d5ee3e9e2dc6737c_Event-Image-3.webp 820w"
                      }
                      className={"event-image"}
                    />
                    <div
                      data-motion-id={"b9f0a342-ae1c-a78e-3300-ffa2d3e1d802"}
                      className={"events-date-wrapper"}
                    >
                      <div className={"heading-three"}>{"18"}</div>
                      <div className={"w-layout-vflex event-date-more"}>
                        <div
                          className={
                            "small-shot-heading small-heading-body-color"
                          }
                        >
                          {"Oct"}
                        </div>
                        <div
                          className={
                            "small-shot-heading small-heading-body-color"
                          }
                        >
                          {"2024"}
                        </div>
                      </div>
                    </div>
                    <div
                      data-motion-id={"b9f0a342-ae1c-a78e-3300-ffa2d3e1d807"}
                      className={"marquee-text-box"}
                    >
                      <div className={"event-marquee events-marquee-two"}>
                        <div
                          style={{
                            transform:
                              "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          }}
                          className={"w-layout-hflex marquee-train"}
                        >
                          <div className={"heading-six"}>
                            {"See event details"}
                          </div>
                          <div className={"small-dot"}></div>
                          <div className={"heading-six"}>
                            {"See event details"}
                          </div>
                          <div className={"small-dot"}></div>
                          <div className={"heading-six"}>
                            {"See event details"}
                          </div>
                          <div className={"small-dot"}></div>
                        </div>
                        <div
                          style={{
                            transform:
                              "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          }}
                          className={"w-layout-hflex marquee-train"}
                        >
                          <div className={"heading-six"}>
                            {"See event details"}
                          </div>
                          <div className={"small-dot"}></div>
                          <div className={"heading-six"}>
                            {"See event details"}
                          </div>
                          <div className={"small-dot"}></div>
                          <div className={"heading-six"}>
                            {"See event details"}
                          </div>
                          <div className={"small-dot"}></div>
                        </div>
                        <div
                          style={{
                            transform:
                              "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          }}
                          className={"w-layout-hflex marquee-train"}
                        >
                          <div className={"heading-six"}>
                            {"See event details"}
                          </div>
                          <div className={"small-dot"}></div>
                          <div className={"heading-six"}>
                            {"See event details"}
                          </div>
                          <div className={"small-dot"}></div>
                          <div className={"heading-six"}>
                            {"See event details"}
                          </div>
                          <div className={"small-dot"}></div>
                        </div>
                        <div
                          style={{
                            transform:
                              "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          }}
                          className={"w-layout-hflex marquee-train"}
                        >
                          <div className={"heading-six"}>
                            {"See event details"}
                          </div>
                          <div className={"small-dot"}></div>
                          <div className={"heading-six"}>
                            {"See event details"}
                          </div>
                          <div className={"small-dot"}></div>
                          <div className={"heading-six"}>
                            {"See event details"}
                          </div>
                          <div className={"small-dot"}></div>
                        </div>
                      </div>
                      <div className={"w-layout-vflex events-text"}>
                        <div className={"w-layout-hflex events-cards-tag"}>
                          <div
                            className={
                              "small-shot-heading small-heading-body-color"
                            }
                          >
                            {"Kansas City,USA"}
                          </div>
                          <div className={"small-dot color-grey"}></div>
                          <div
                            className={
                              "small-shot-heading small-heading-body-color"
                            }
                          >
                            {"10:00 am - 3:00 pm"}
                          </div>
                        </div>
                        <div className={"heading-five"}>
                          {
                            "Professional development for online educators and trainers"
                          }
                        </div>
                      </div>
                    </div>
                  </SiteLink>
                </div>
                <div role={"listitem"} className={"w-dyn-item"}>
                  <SiteLink
                    data-motion-id={"b9f0a342-ae1c-a78e-3300-ffa2d3e1d800"}
                    href={
                      "/events/best-practices-for-virtual-classroom-management"
                    }
                    className={"events-card-two w-inline-block"}
                  >
                    <img
                      src={
                        "/assets/334e1e01-66e3fef7b390a845ab7ed21b_Event-Image-2.webp"
                      }
                      loading={"lazy"}
                      width={"410"}
                      height={"470"}
                      alt={""}
                      sizes={"(max-width: 479px) 100vw, 410px"}
                      srcSet={
                        "/assets/02f31932-66e3fef7b390a845ab7ed21b_Event-Image-2-p-500.webp 500w, /assets/ecbd829e-66e3fef7b390a845ab7ed21b_Event-Image-2-p-800.webp 800w, /assets/334e1e01-66e3fef7b390a845ab7ed21b_Event-Image-2.webp 820w"
                      }
                      className={"event-image"}
                    />
                    <div
                      data-motion-id={"b9f0a342-ae1c-a78e-3300-ffa2d3e1d802"}
                      className={"events-date-wrapper"}
                    >
                      <div className={"heading-three"}>{"25"}</div>
                      <div className={"w-layout-vflex event-date-more"}>
                        <div
                          className={
                            "small-shot-heading small-heading-body-color"
                          }
                        >
                          {"Oct"}
                        </div>
                        <div
                          className={
                            "small-shot-heading small-heading-body-color"
                          }
                        >
                          {"2024"}
                        </div>
                      </div>
                    </div>
                    <div
                      data-motion-id={"b9f0a342-ae1c-a78e-3300-ffa2d3e1d807"}
                      className={"marquee-text-box"}
                    >
                      <div className={"event-marquee events-marquee-two"}>
                        <div
                          style={{
                            transform:
                              "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          }}
                          className={"w-layout-hflex marquee-train"}
                        >
                          <div className={"heading-six"}>
                            {"See event details"}
                          </div>
                          <div className={"small-dot"}></div>
                          <div className={"heading-six"}>
                            {"See event details"}
                          </div>
                          <div className={"small-dot"}></div>
                          <div className={"heading-six"}>
                            {"See event details"}
                          </div>
                          <div className={"small-dot"}></div>
                        </div>
                        <div
                          style={{
                            transform:
                              "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          }}
                          className={"w-layout-hflex marquee-train"}
                        >
                          <div className={"heading-six"}>
                            {"See event details"}
                          </div>
                          <div className={"small-dot"}></div>
                          <div className={"heading-six"}>
                            {"See event details"}
                          </div>
                          <div className={"small-dot"}></div>
                          <div className={"heading-six"}>
                            {"See event details"}
                          </div>
                          <div className={"small-dot"}></div>
                        </div>
                        <div
                          style={{
                            transform:
                              "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          }}
                          className={"w-layout-hflex marquee-train"}
                        >
                          <div className={"heading-six"}>
                            {"See event details"}
                          </div>
                          <div className={"small-dot"}></div>
                          <div className={"heading-six"}>
                            {"See event details"}
                          </div>
                          <div className={"small-dot"}></div>
                          <div className={"heading-six"}>
                            {"See event details"}
                          </div>
                          <div className={"small-dot"}></div>
                        </div>
                        <div
                          style={{
                            transform:
                              "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          }}
                          className={"w-layout-hflex marquee-train"}
                        >
                          <div className={"heading-six"}>
                            {"See event details"}
                          </div>
                          <div className={"small-dot"}></div>
                          <div className={"heading-six"}>
                            {"See event details"}
                          </div>
                          <div className={"small-dot"}></div>
                          <div className={"heading-six"}>
                            {"See event details"}
                          </div>
                          <div className={"small-dot"}></div>
                        </div>
                      </div>
                      <div className={"w-layout-vflex events-text"}>
                        <div className={"w-layout-hflex events-cards-tag"}>
                          <div
                            className={
                              "small-shot-heading small-heading-body-color"
                            }
                          >
                            {"Chicago ,USA"}
                          </div>
                          <div className={"small-dot color-grey"}></div>
                          <div
                            className={
                              "small-shot-heading small-heading-body-color"
                            }
                          >
                            {"9:00 am - 7:00 pm "}
                          </div>
                        </div>
                        <div className={"heading-five"}>
                          {"Best practices for virtual classroom management"}
                        </div>
                      </div>
                    </div>
                  </SiteLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={"background-light-blue"}>
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
