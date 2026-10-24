import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { money, useStore } from "./Store";
function CartItems() {
  const { items, update } = useStore();
  return (
    <div className="divide-y divide-slate-200">
      {items.map((item) => (
        <article key={item.id} className="flex gap-4 py-5">
          <img
            src={item.image}
            alt=""
            className="h-20 w-24 rounded-lg object-cover"
          />
          <div className="min-w-0 flex-1">
            <Link
              to={item.path}
              className="text-base font-semibold leading-snug text-[#102c30]"
            >
              {item.title}
            </Link>
            <p className="my-2 text-sm">{money(item.price)}</p>
            <div className="flex items-center justify-between gap-3">
              <label className="flex items-center gap-2 text-xs">
                Qty{" "}
                <input
                  aria-label={`Quantity for ${item.title}`}
                  type="number"
                  min="1"
                  max="99"
                  value={item.quantity}
                  onChange={(event) =>
                    update(item.id, Number(event.target.value) || 1)
                  }
                  className="w-16 rounded border border-slate-300 p-2"
                />
              </label>
              <button
                type="button"
                onClick={() => update(item.id, 0)}
                className="text-sm underline underline-offset-4"
              >
                Remove
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
export function CartDrawer() {
  const { cartOpen, setCartOpen, items, total } = useStore(),
    ref = useRef(null),
    location = useLocation();
  useEffect(() => setCartOpen(false), [location.pathname]);
  useEffect(() => {
    if (!cartOpen) return;
    const previous = document.activeElement,
      overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    ref.current?.querySelector("button")?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") setCartOpen(false);
      if (e.key === "Tab") {
        const list = [...ref.current.querySelectorAll("button,a,input")].filter(
          (x) => !x.disabled,
        );
        const first = list[0],
          last = list.at(-1);
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKey);
      previous?.focus();
    };
  }, [cartOpen]);
  if (!cartOpen) return null;
  return createPortal(
    <div
      className="fixed inset-0 z-[20000] bg-black/50"
      onClick={() => setCartOpen(false)}
    >
      <aside
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        className="absolute inset-y-0 right-0 flex w-full max-w-lg flex-col bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
          <h2 id="cart-title" className="m-0 text-2xl">
            Your Cart
          </h2>
          <button
            aria-label="Close cart"
            type="button"
            className="rounded-lg px-3 py-1 text-3xl hover:bg-slate-100"
            onClick={() => setCartOpen(false)}
          >
            ×
          </button>
        </header>
        <div className="flex-1 overflow-y-auto px-6">
          {items.length ? (
            <CartItems />
          ) : (
            <div className="py-20 text-center">
              <p>No items found.</p>
              <Link to="/course-one" className="button button-yellow">
                Explore courses
              </Link>
            </div>
          )}
        </div>
        {items.length > 0 && (
          <footer className="border-t border-slate-200 p-6">
            <p className="mb-5 flex justify-between text-lg font-semibold">
              <span>Subtotal</span>
              <span>{money(total)}</span>
            </p>
            <Link
              to="/checkout"
              className="button button-yellow w-full text-center"
            >
              Continue to Checkout
            </Link>
          </footer>
        )}
      </aside>
    </div>,
    document.body,
  );
}
export function Notice() {
  const { notice } = useStore();
  return notice ? (
    <div
      role="status"
      className="fixed right-5 bottom-5 left-5 z-[21000] mx-auto max-w-lg rounded-xl bg-[#102c30] px-5 py-4 text-center text-white shadow-xl"
    >
      {notice}
    </div>
  ) : null;
}
export function Checkout() {
  const { items, total, clear } = useStore(),
    [complete, setComplete] = React.useState(false);
  const [email, setEmail] = React.useState("");
  function submit(event) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    const order = {
      id: crypto.randomUUID(),
      items,
      total,
      email,
      createdAt: new Date().toISOString(),
      demo: true,
    };
    let saved = [];
    try {
      saved = JSON.parse(localStorage.getItem("elearna.demo-orders") || "[]");
    } catch {}
    localStorage.setItem(
      "elearna.demo-orders",
      JSON.stringify([...saved, order]),
    );
    clear();
    setComplete(true);
  }
  return (
    <main className="checkout-form bg-[#edf7fa] px-5 py-24">
      <div className="mx-auto max-w-6xl">
        {complete ? (
          <section className="rounded-2xl bg-white p-10 text-center">
            <h1 className="text-4xl">Demo enrollment complete</h1>
            <p>
              Your preview order is saved on this device. No payment was
              collected and no real enrollment was created.
            </p>
            <Link className="button button-yellow" to="/course-one">
              Explore more courses
            </Link>
          </section>
        ) : (
          <>
            <h1 className="mb-10 text-4xl">Checkout</h1>
            {items.length ? (
              <div className="grid items-start gap-8 lg:grid-cols-[1.4fr_1fr]">
                <form
                  onSubmit={submit}
                  className="rounded-2xl bg-white p-6 sm:p-9"
                >
                  <h2 className="text-2xl">Customer information</h2>
                  <label htmlFor="checkout-name" className="mb-2 block">
                    Full name *
                  </label>
                  <input
                    id="checkout-name"
                    name="name"
                    autoComplete="name"
                    required
                    className="text-field w-input"
                  />
                  <label htmlFor="checkout-email" className="mb-2 block">
                    Email address *
                  </label>
                  <input
                    id="checkout-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="text-field w-input"
                  />
                  <h2 className="mt-8 text-2xl">Order items</h2>
                  <CartItems />
                  <p className="mt-5 rounded-lg bg-amber-50 p-4 text-sm text-amber-900">
                    Preview checkout. This does not collect payment or create a
                    real enrollment.
                  </p>
                  <button
                    type="submit"
                    className="button button-yellow mt-5 w-full"
                  >
                    Complete demo enrollment
                  </button>
                </form>
                <aside className="rounded-2xl bg-white p-8">
                  <h2 className="text-2xl">Order summary</h2>
                  <div className="my-6 flex justify-between">
                    <span>Subtotal</span>
                    <span>{money(total)}</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-200 pt-6 text-xl font-semibold">
                    <span>Total</span>
                    <span>{money(total)}</span>
                  </div>
                </aside>
              </div>
            ) : (
              <div className="rounded-2xl bg-white p-10 text-center">
                <p>Your cart is empty.</p>
                <Link to="/course-one" className="button button-yellow">
                  Browse courses
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
