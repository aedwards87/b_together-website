// const [isNavVisible, setNavVisible] = useState(false);

//   const handleClick = () => {
//     setNavVisible((prevCheck) => !prevCheck);
//   };
//   const handleMouseLeave = () => {
//     setNavVisible(true);
//   };

//   const [isDropdownVisible, setDropdownVisible] = useState(false);

//   const handleMouseEnterDD = () => {
//     setDropdownVisible(true);
//   };

//   const handleMouseLeaveDD = () => {
//     setDropdownVisible(false);
//   };

//   /**
//    * Hook that alerts clicks outside of the passed ref
//    */
//   function useOutsideAlerter(ref: React.RefObject<any>) {
//     useEffect(() => {
//       /**
//        * Alert if clicked on outside of element
//        */
//       function handleClickOutside(event: MouseEvent) {
//         if (ref.current && !ref.current.contains(event.target as Node)) {
//           setNavVisible(true);
//           console.log('help', 'help');
//         }
//       }
//       // Bind the event listener
//       document.addEventListener('mousedown', handleClickOutside);
//       return () => {
//         // Unbind the event listener on clean up
//         document.removeEventListener('mousedown', handleClickOutside);
//       };
//     }, [ref]);
//   }

//   const wrapperRef = useRef(null);
//   useOutsideAlerter(wrapperRef);
