const LanguageLogo: React.FC<{
  width?: string;
  height?: string;
  color?: string;
}> = ({ width, height, color }) => {
  return (
    <svg
      width={width ?? "800px"}
      height={height ?? "800px"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.68 11.6L10.44 14.36L9.6 15.2L6 11.6L9.6 8L10.44 8.84L7.68 11.6ZM16.32 11.6L13.56 14.36L14.4 15.2L18 11.6L14.4 8L13.56 8.84L16.32 11.6Z"
        fill={color ?? "#000000"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 2H2V22H22V2ZM20 4H4V20H20V4Z"
        fill={color ?? "#000000"}
      />
    </svg>
  );
};

export default LanguageLogo;
