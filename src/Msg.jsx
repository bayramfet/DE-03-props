

// const Msg = (props) => {
//     // console.log(props);
//     const{isim,telefon}=props;
//   return (
//     <div>
//         <h1> Hello i am{isim}</h1>
//         <h4>telefon numaram{telefon}</h4>
//     </div>
//   )
// }

// export default Msg

//! ikinci yol 
const Msg = ({isim,telefon}) => {
 
  return (
    <div>
      <h1> Hello i am {isim}</h1>
      <h4>telefon numaram {telefon}</h4>
    </div>
  )
}

export default Msg;