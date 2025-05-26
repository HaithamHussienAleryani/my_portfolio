import React from "react";

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      width="24" // You can pass dynamic sizes via props
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor" // This makes the outline match your text color
      strokeWidth="2" // Adjust the thickness of the outline
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`text-primary ${className}`} // Use the className prop for additional styling
    >
      {/* This path is a simplified example; you'd replace it with your exact SVG path */}
      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
    </svg>
  );
}

export default StarIcon;
