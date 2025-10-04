import React from "react";

interface TotalsProps {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
}

export const Solved: React.FC<TotalsProps> = ({
  totalSolved,
  easySolved,
  mediumSolved,
  hardSolved,
}) => {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <div style={{ padding: "1rem", background: "#f0f0f0", borderRadius: "8px" }}>
        <h3>Total Solved</h3>
        <p>{totalSolved}</p>
      </div>
      <div style={{ padding: "1rem", background: "#d4edda", borderRadius: "8px" }}>
        <h3>Easy</h3>
        <p>{easySolved}</p>
      </div>
      <div style={{ padding: "1rem", background: "#ffeeba", borderRadius: "8px" }}>
        <h3>Medium</h3>
        <p>{mediumSolved}</p>
      </div>
      <div style={{ padding: "1rem", background: "#f8d7da", borderRadius: "8px" }}>
        <h3>Hard</h3>
        <p>{hardSolved}</p>
      </div>
    </div>
  );
};
