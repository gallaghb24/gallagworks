const GallagGlyph = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect x="0.5" y="0.5" width="31" height="31" stroke="#2F3133" strokeWidth="1" fill="transparent" />
    <rect x="16" y="16" width="16" height="16" fill="#FF5F1F" />
  </svg>
);

export default GallagGlyph;
