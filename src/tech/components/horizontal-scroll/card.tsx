import React from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";

export function Card({ title, itemId, selected }: { title: string; itemId: string; selected: any }) {
  const visibility = React.useContext(VisibilityContext);

  const visible = visibility.isItemVisible(itemId);

  return (
    <div
      role="button"
      style={{
        border: "1px solid",
        display: "inline-block",
        margin: "0 10px",
        width: "200px",
        userSelect: "none"
      }}
      tabIndex={0}
      className="card"
      onClick={selected}
    >
      <div>
        <div>{title}</div>
        <div style={{ backgroundColor: visible ? "transparent" : "gray" }}>
          {/* visible: {JSON.stringify(visible)} */}
        </div>
      </div>
      <div
        style={{
          backgroundColor: "bisque",
          height: "70px",
          maxHeight: "70px",
          maxWidth: "200px",
        }}
      />
    </div>
  );
}
