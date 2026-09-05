import { useState } from "react";

/**
 * `overflow: clip` on a card clips a dropdown menu that opens upward.
 *
 * Dropdown libraries flip the menu above the control (`bottom: 100%`) when the
 * *viewport* has no room below it, without looking at clipping ancestors. The
 * menu then leaves the card's box and the card cuts it off — which reads as
 * "something is overlapping my dropdown" when nothing is.
 *
 * Open the dropdown, then toggle the fix.
 */

// The bug. Lives in CSS rather than inline, so the fix rule below can override it.
const BUG_CSS = `.card { overflow: clip; }`;

// In a real app, scope this to while a menu is open — `.card:has(.dropdown.open)`
// — so cards keep clipping everything else.
const FIX_CSS = `.card { overflow: visible; }`;

const COLUMNS = [
  "Order ID",
  "Date",
  "Total",
  "Items",
  "Channel name",
  "Order status",
  "Fulfillment mode",
];

export const CardClip = () => {
  const [fixed, setFixed] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div style={{ font: "14px system-ui", padding: 16 }}>
      <style>{BUG_CSS}</style>
      {/* Same specificity, declared later — so this wins when present. */}
      {fixed && <style>{FIX_CSS}</style>}

      <label style={{ display: "block", marginBottom: 16 }}>
        <input
          type="checkbox"
          checked={fixed}
          onChange={(e) => setFixed(e.target.checked)}
        />{" "}
        apply fix — <code>{FIX_CSS}</code>
      </label>

      {/* Pushes the control near the bottom of the viewport, which is what makes
          a real dropdown choose to open upward. */}
      <div style={{ height: "50vh" }} />

      <div className="card" style={card}>
        <h3 style={{ margin: "0 0 16px" }}>Orders</h3>
        <div style={{ height: 80 }}>table rows…</div>

        <div
          className={`dropdown${open ? " open" : ""}`}
          style={{ position: "relative", display: "inline-block" }}
        >
          <button onClick={() => setOpen(!open)} style={control}>
            All Columns {open ? "▲" : "▼"}
          </button>
          {open && (
            <ul style={menu}>
              {COLUMNS.map((c) => (
                <li key={c} style={{ padding: "10px 16px", listStyle: "none" }}>
                  <input type="checkbox" defaultChecked /> {c}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

const card: React.CSSProperties = {
  background: "#fff",
  border: "1px solid #d6dbe0",
  borderRadius: 8,
  padding: 16,
};

const control: React.CSSProperties = {
  background: "#fff",
  border: "1px solid #111",
  borderRadius: 4,
  padding: "8px 16px",
  cursor: "pointer",
};

// Above the control — what a dropdown library applies when it flips the menu up.
const menu: React.CSSProperties = {
  position: "absolute",
  bottom: "100%",
  left: 0,
  margin: 0,
  padding: 0,
  minWidth: 240,
  background: "#fff",
  border: "1px solid #111",
  zIndex: 1000,
};
