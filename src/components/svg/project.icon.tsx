const ProjectLogo: React.FC<{
  width?: string;
  height?: string;
  color?: string;
}> = ({ width, height, color }) => {
  return (
    <>
      <svg
        version="1.1"
        id="_x32_"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={width ?? "800px"}
        height={height ?? "800px"}
        viewBox="0 0 512 512"
        xmlSpace="preserve"
      >
        <g>
          <path
            fill={color}
            className="st0"
            d="M104.426,139.813l83.563,83.781c14.344-13.766,26.781-25.703,36.109-34.672l-84.297-84.5l-10.313-45.719
		L54.27,12.985L33.629,33.642L12.988,54.282l45.719,75.219L104.426,139.813z"
          />
          <path
            fill={color}
            className="st0"
            d="M358.363,276.298L481.926,399.47c22.781,22.766,22.781,59.688,0,82.469c-22.781,22.766-59.688,22.766-82.469,0
		L275.895,358.767L358.363,276.298z"
          />
          <path
            fill={color}
            className="st0"
            d="M459.957,203.407c42.547-38.609,49.656-82.484,40.141-119.484c-0.281-2.938-0.984-5.406-3.547-7.25
		l-8.563-7.016c-1.484-1.391-3.484-2.063-5.484-1.875c-2.016,0.203-3.844,1.234-5.031,2.875l-49.25,64.031
		c-1.375,1.891-3.594,2.969-5.922,2.891l-17.875,1.313c-1.531-0.047-3.016-0.594-4.219-1.563l-34.531-29.266
		c-1.406-1.141-2.328-2.766-2.563-4.563l-2.141-16.188c-0.25-1.781,0.203-3.594,1.266-5.063l46.109-62.641
		c2.094-2.875,1.688-6.859-0.906-9.281l-11.188-8.75c-2.188-2.031-4.672-1.75-8.063-1.094
		c-31.844,6.281-86.219,37.125-100.016,79.75c-12.156,37.516-7.922,63.969-7.922,63.969c0,21.141-6.953,41.516-15.5,50.063
		L24.504,424.923c-0.469,0.422-0.922,0.859-1.375,1.313c-19.844,19.844-19.813,52.047-0.641,71.219s51.859,19.672,71.703-0.172
		c0.922-0.922,1.813-1.875,2.641-2.859l231.672-250.438C357.004,218.61,413.426,245.642,459.957,203.407z"
          />
        </g>
      </svg>
    </>
  );
};

export default ProjectLogo;
