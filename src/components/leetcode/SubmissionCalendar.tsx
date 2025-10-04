import React from "react";

interface SubmissionCalendarProps {
  submissionCalendar: { [timestamp: string]: number };
}

export const SubmissionCalendar: React.FC<SubmissionCalendarProps> = ({
  submissionCalendar,
}) => {
  const days = Object.keys(submissionCalendar)
    .map((ts) => ({
      date: new Date(parseInt(ts) * 1000),
      count: submissionCalendar[ts],
    }))
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  const getColor = (count: number) => {
    if (count > 20) return "#216e39";
    if (count > 10) return "#30a14e";
    if (count > 5) return "#40c463";
    if (count > 0) return "#9be9a8";
    return "#ebedf0";
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, 12px)", gap: "2px" }}>
      {days.map((day, idx) => (
        <div
          key={idx}
          title={`${day.date.toDateString()}: ${day.count} submissions`}
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: getColor(day.count),
          }}
        />
      ))}
    </div>
  );
};
