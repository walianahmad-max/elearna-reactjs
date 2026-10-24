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
      <div className={"w-users-userformpagewrap page-wrapper log-in"}>
        <section
          data-motion-id={"93edf241-64f2-4a08-b321-5c55c6382ca0"}
          className={"membership-logo"}
        >
          <div
            className={
              "w-layout-blockcontainer contact-three-container w-container"
            }
          >
            <div className={"w-layout-hflex membership-nav"}>
              <SiteLink href={"/home-one"} className={"w-inline-block"}>
                <img
                  src={"/assets/ccc5f759-66c6fb8bf82fe9cef5f78d65_Elearna.svg"}
                  loading={"lazy"}
                  width={"105"}
                  height={"26"}
                  alt={"Elearna"}
                />
              </SiteLink>
            </div>
          </div>
        </section>
        <div className={"w-users-userloginformwrapper log-in-form-block"}>
          <SiteForm formKind={"login"} route={"/log-in"}>
            <div className={"login-form-top"}>
              <h2 className={"no-margin text-white"}>{"Log in"}</h2>
              <div className={"text-white"}>
                {"More than 50k students have joined Elearna already"}
              </div>
            </div>
            <div className={"w-users-userformheader form-header log-in-form"}>
              <label htmlFor={"wf-log-in-email"} className={"field-label"}>
                {"Email address"}
              </label>
              <input
                maxLength={"256"}
                placeholder={""}
                name={"Email"}
                id={"wf-log-in-email"}
                className={"user-email-field input-field-gap w-input"}
                type={"email"}
                autoComplete={"username"}
                required={true}
              />
              <label htmlFor={"wf-log-in-password"} className={"field-label"}>
                {"Password"}
              </label>
              <input
                maxLength={"256"}
                placeholder={""}
                name={"Password"}
                id={"wf-log-in-password"}
                className={"user-email-field w-input"}
                type={"password"}
                required={true}
              />
              <input
                type={"submit"}
                data-wait={"Please wait..."}
                className={
                  "w-users-userformbutton button button-yellow w-button"
                }
                value={"Log In"}
              />
              <div className={"w-users-userformfooter form-footer"}>
                <span className={"text-light-white"}>
                  {"Don't have an account?"}
                </span>
                <SiteLink
                  href={"/sign-up"}
                  className={"link-hover w-inline-block"}
                >
                  {"Sign Up"}
                </SiteLink>
              </div>
            </div>
          </SiteForm>
          <div className={"w-layout-vflex test-login-user"}>
            <div className={"w-layout-hflex test-log-in-top"}>
              <div className={"log-in-border"}></div>
              <div className={"text-white"}>{"Test login"}</div>
              <div className={"log-in-border"}></div>
            </div>
            <div
              data-motion-id={"9c4629ad-ff2f-78ad-087c-0a0877a516f6"}
              className={"text-light-white"}
            >
              {"Test user: elearnatest@gmail.com"}
            </div>
            <div
              data-motion-id={"f2594b7e-9539-d1aa-fdad-cbbf209dc189"}
              className={"text-light-white"}
            >
              {"Password: Elearna1234"}
            </div>
          </div>
        </div>
        <section
          data-motion-id={"1a9d11b7-7483-9920-b2a5-863bb6991ec8"}
          className={"contact-three-footer"}
        >
          <div
            className={
              "w-layout-blockcontainer contact-three-container top-border w-container"
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
                  {"404"}
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
                    href={"https://webflow.com/?r=0"}
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
      </div>
    </>
  );
}
