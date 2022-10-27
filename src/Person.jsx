import React from "react";
import Msg from "./Msg";

const Person = (props) => {
  //   console.log(props);

  //!! gönderirken herzaman veriyi yazma msg icine !!//

  const { name, img, tel } = props;
  //! const ile parcalama yapildi

  return (
    <div>
      <h2>{name}</h2>

      <Msg isim={name} telefon={tel} />

      <img src={img} alt="" />

      <h4>{tel}</h4>
    </div>
  );
};

export default Person;
