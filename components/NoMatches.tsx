import React from "react";

const NoMatches = () => {
  return (
    <div className="flex items-center justify-center h-80">
      <p className="font-semibold capitalize">
        No Fixtures Scheduled for today
      </p>
    </div>
  );
};

export default NoMatches;
