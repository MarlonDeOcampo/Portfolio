const OrangeBlob: React.FC<{ width: string; height: string }> = ({
  width,
  height,
}) => {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      height={height ?? "20rem"}
      width={width ?? "20rem"}
    >
      <path
        fill="#746457"
        d="M39.2,-55.1C43.4,-43.2,34.3,-23.8,32.2,-9.5C30.1,4.7,35.1,13.9,35.6,27.7C36.2,41.5,32.3,59.8,20.3,70.6C8.3,81.3,-11.8,84.5,-30.8,79.7C-49.8,74.9,-67.7,62.2,-74.4,45.4C-81.1,28.7,-76.6,8,-69.8,-9.2C-63,-26.3,-53.9,-39.8,-41.9,-50.3C-29.9,-60.8,-14.9,-68.2,1.3,-69.7C17.5,-71.3,35,-67,39.2,-55.1Z"
        transform="translate(100 100)"
      />
    </svg>
  );
};

export default OrangeBlob;
