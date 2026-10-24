import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import courses from "../data/courses.json";
const StoreContext = createContext(null);
const read = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
};
export function StoreProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const stored = read("elearna.cart", []);
    return Array.isArray(stored)
      ? stored
          .filter((x) => courses.some((c) => c.id === x.id))
          .map((x) => ({
            id: x.id,
            quantity: Math.max(1, Math.min(99, Number(x.quantity) || 1)),
          }))
      : [];
  });
  const [user, setUser] = useState(() => read("elearna.demo-session", null));
  const [cartOpen, setCartOpen] = useState(false);
  const [notice, setNotice] = useState("");
  useEffect(() => {
    localStorage.setItem("elearna.cart", JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    if (user)
      localStorage.setItem("elearna.demo-session", JSON.stringify(user));
    else localStorage.removeItem("elearna.demo-session");
  }, [user]);
  useEffect(() => {
    if (!notice) return;
    const t = setTimeout(() => setNotice(""), 4500);
    return () => clearTimeout(t);
  }, [notice]);
  const add = useCallback((id, quantity = 1) => {
    if (!courses.some((c) => c.id === id)) return;
    setCart((old) => {
      const item = old.find((x) => x.id === id);
      return item
        ? old.map((x) =>
            x.id === id
              ? { ...x, quantity: Math.min(99, x.quantity + quantity) }
              : x,
          )
        : [...old, { id, quantity: Math.min(99, quantity) }];
    });
    setCartOpen(true);
  }, []);
  const update = useCallback(
    (id, quantity) =>
      setCart((old) =>
        quantity <= 0
          ? old.filter((x) => x.id !== id)
          : old.map((x) =>
              x.id === id
                ? {
                    ...x,
                    quantity: Math.min(99, Math.max(1, Math.floor(quantity))),
                  }
                : x,
            ),
      ),
    [],
  );
  const items = useMemo(
    () =>
      cart.map((x) => ({
        ...courses.find((c) => c.id === x.id),
        quantity: x.quantity,
      })),
    [cart],
  );
  const total = items.reduce((n, x) => n + x.price * x.quantity, 0),
    count = items.reduce((n, x) => n + x.quantity, 0);
  return (
    <StoreContext.Provider
      value={{
        items,
        total,
        count,
        add,
        update,
        clear: () => setCart([]),
        cartOpen,
        setCartOpen,
        user,
        setUser,
        notice,
        setNotice,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}
export const useStore = () => useContext(StoreContext);
export const money = (n) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(n);
