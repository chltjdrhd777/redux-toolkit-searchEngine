import React from "react";
import { B } from "components/styled";
import Form from "components/Home/Form";
import { Booking } from "components/styled/Booking.styled";

function HomeBooking() {
  return (
    <Booking>
      <B.Container>
        <Form />
      </B.Container>
    </Booking>
  );
}

export default HomeBooking;
