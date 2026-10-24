import { SiteLink, Interactive, CartButton, CartCount, AuthButton, SiteForm } from '../components/Interactions';
import { Checkout } from '../components/Commerce';
import { CourseCard } from '../components/CourseCard';
import courseCards from '../data/course-cards.json';

export default function Page() {
  return (<>
    <div className={"w-users-userformpagewrap page-wrapper"}>
      <section data-motion-id={"93edf241-64f2-4a08-b321-5c55c6382ca0"} className={"membership-logo"}>
        <div className={"w-layout-blockcontainer contact-three-container w-container"}>
          <div className={"w-layout-hflex membership-nav"}>
            <SiteLink href={"/home-one"} className={"w-inline-block"}>
              <img src={"/assets/ccc5f759-66c6fb8bf82fe9cef5f78d65_Elearna.svg"} loading={"lazy"} width={"105"} height={"26"} alt={"Elearna"} />
            </SiteLink>
          </div>
        </div>
      </section>
      <div className={"w-users-usersignupformwrapper sign-up-form-block"}>
        <div tabIndex={"-1"} className={"w-users-userformsuccessstate w-form-success"}>
          <div className={"w-users-userformheader"}>
            <img src={"/assets/b01d472d-thumbs-up-72.cbcaec93bc.svg"} loading={"lazy"} alt={""} />
            <h2>
{"Account activated"}
            </h2>
          </div>
          <p>
{"Your account was created successfully. You will be redirected shortly."}
          </p>
          <div>
            <SiteLink href={"/home-one"} className={"w-inline-block"}>
{"If nothing happens, click here."}
            </SiteLink>
          </div>
        </div>
        <SiteForm formKind={"signup"} route={"/sign-up"}>
          <div className={"w-layout-vflex login-form-top"}>
            <h2 className={"no-margin text-white"}>
{"Sign up"}
            </h2>
            <div className={"text-white"}>
{"More then "}
              <span className={"text-medium"}>
{"50k students"}
              </span>
{" join with us!"}
            </div>
          </div>
          <div className={"w-users-userformheader form-header log-in-form"}>
            <label htmlFor={"wf-sign-up-email"} className={"field-label"}>
{"Email address"}
            </label>
            <input placeholder={""} id={"wf-sign-up-email"} maxLength={"256"} name={"Email"} className={"user-email-field input-field-gap w-input"} type={"email"} autoComplete={"username"} required={true} />
            <label htmlFor={"wf-sign-up-name"} className={"field-label"}>
{"Name"}
            </label>
            <input className={"user-email-field input-field-gap w-input"} maxLength={"256"} name={""} data-name={""} placeholder={""} fieldtype={"data-wf-user-field-type"} type={"text"} id={"wf-sign-up-name"} required={true} />
            <label htmlFor={"wf-sign-up-password"} className={"field-label"}>
{"Password"}
            </label>
            <input placeholder={""} id={"wf-sign-up-password"} data-name={""} maxLength={"256"} name={"Password"} className={"user-email-field input-field-gap w-input"} type={"password"} required={true} />
            <label className={"w-checkbox checkbox-field checkbox-align-top"}>
              <div className={"w-checkbox-input w-checkbox-input--inputType-custom checkbox checkbox-two"}></div>
              <input name={""} data-name={""} placeholder={""} type={"checkbox"} id={"wf-sign-up-accept-privacy"} required={true} className={" native-checkbox"} />
              <span className={"checkbox-label box-label w-form-label"}>
{"By creating an account, I agree to this website's "}
                <SiteLink href={"/privacy-policy"} className={"link-hover w-inline-block"}>
{"privacy policy"}
                </SiteLink>
{" and "}
                <SiteLink href={"/terms-of-service"} className={"link-hover w-inline-block"}>
{"terms of service"}
                </SiteLink>
              </span>
            </label>
            <label className={"w-checkbox checkbox-field checkbox-align-top margin-bottom-twenty-five"}>
              <div className={"w-checkbox-input w-checkbox-input--inputType-custom checkbox checkbox-two"}></div>
              <input name={""} data-name={""} placeholder={""} type={"checkbox"} id={"wf-sign-up-accept-communications"} required={true} className={" native-checkbox"} />
              <span className={"checkbox-label box-label w-form-label"}>
{"I consent to receive marketing emails."}
              </span>
            </label>
            <input data-wait={"Please wait..."} type={"submit"} className={"w-users-userformbutton button button-yellow w-button"} value={"Sign Up"} />
            <div className={"w-users-userformfooter form-footer"}>
              <span className={"text-light-white"}>
{"Already have an account?"}
              </span>
              <SiteLink href={"/log-in"} className={"link-hover w-inline-block"}>
{"Log In"}
              </SiteLink>
            </div>
          </div>
        </SiteForm>
      </div>
      <section data-motion-id={"7cd8cbb8-3fc3-c448-b543-f2237bd02d1d"} className={"contact-three-footer footer-four"}>
        <div className={"w-layout-blockcontainer contact-three-container w-container"}>
          <div className={"w-layout-hflex contact-three-footer-main"}>
            <div className={"w-layout-hflex contact-footer-links-wrapper"}>
              <SiteLink href={"/404"} className={"footer-small-link"}>
{"404 Error"}
              </SiteLink>
              <SiteLink href={"/information/license"} className={"footer-small-link"}>
{"License"}
              </SiteLink>
            </div>
            <div className={"w-layout-hflex contact-footer-links-wrapper"}>
              <div className={"small-heading small-heading-mobile"}>
{"Design by "}
                <SiteLink href={"https://www.radianttemplates.com"} target={"_blank"} className={"footer-small-link"}>
{"Radiant Templates"}
                </SiteLink>
              </div>
              <div className={"small-heading small-heading-mobile"}>
{"Powered by "}
                <SiteLink href={"https://webflow.com/?r=0"} target={"_blank"} className={"footer-small-link"}>
{"webflow"}
                </SiteLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </>);
}
