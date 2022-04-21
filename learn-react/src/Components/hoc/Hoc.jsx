// import { Component } from "react";

// const Hoc = WrappedCompoonent => {
//   class Comp extends Component {
//     render() {
//       return <WrappedCompoonent username="Ubaid" />;
//     }
//   }
//   return Comp;
// };
// export default Hoc;

const Hoc = WrappedComponent => {
  let Comp = () => {
    return <WrappedComponent username="Wahid" />;
  };
  return Comp;
};
export default Hoc;
