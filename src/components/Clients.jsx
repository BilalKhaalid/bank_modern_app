import React from "react";
import styles from "../style";
import { clients } from "../constants";

const Clients = () => (
  <section className={`${styles.flexCenter} my-5`}>
    {/* creating this div to map through our clients  */}
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {/* mapping through clients */}
      {clients.map((client) => (
        // creating a div for containing logos of clients
        <div
          className={`sm:min-w-[192px] min-w-[120px] ${styles.flexCenter} flex-1 `}
          key={client.id}
        >
          {/* image of the client logo */}
          <img
            src={client.logo}
            alt="client"
            className="sm:w-[192px] w-[100px] object-contain "
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
