const bracketStyle = {
  transition: "stroke 300ms ease",
};

const GallagGlyph = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Gallag Works Operational Engineering Glyph - Finding logic in enterprise data glue"
  >
    {/* Top-left bracket */}
    <line x1="0" y1="0.5" x2="10" y2="0.5" stroke="#2F3133" strokeWidth="1" className="group-hover:stroke-[#F5F5F5]" style={bracketStyle} />
    <line x1="0.5" y1="0" x2="0.5" y2="10" stroke="#2F3133" strokeWidth="1" className="group-hover:stroke-[#F5F5F5]" style={bracketStyle} />

    {/* Top-right bracket */}
    <line x1="26" y1="0.5" x2="36" y2="0.5" stroke="#2F3133" strokeWidth="1" className="group-hover:stroke-[#F5F5F5]" style={bracketStyle} />
    <line x1="35.5" y1="0" x2="35.5" y2="10" stroke="#2F3133" strokeWidth="1" className="group-hover:stroke-[#F5F5F5]" style={bracketStyle} />

    {/* Bottom-left bracket */}
    <line x1="0" y1="35.5" x2="10" y2="35.5" stroke="#2F3133" strokeWidth="1" className="group-hover:stroke-[#F5F5F5]" style={bracketStyle} />
    <line x1="0.5" y1="26" x2="0.5" y2="36" stroke="#2F3133" strokeWidth="1" className="group-hover:stroke-[#F5F5F5]" style={bracketStyle} />

    {/* Bottom-right bracket */}
    <line x1="26" y1="35.5" x2="36" y2="35.5" stroke="#2F3133" strokeWidth="1" className="group-hover:stroke-[#F5F5F5]" style={bracketStyle} />
    <line x1="35.5" y1="26" x2="35.5" y2="36" stroke="#2F3133" strokeWidth="1" className="group-hover:stroke-[#F5F5F5]" style={bracketStyle} />

    {/* Center core */}
    <rect x="12" y="12" width="12" height="12" fill="#FF5F1F" />
  </svg>
);

export default GallagGlyph;
