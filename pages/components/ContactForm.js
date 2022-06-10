import { FormControl, FormHelperText, FormLabel, Input, Textarea } from "@chakra-ui/react";
import React from "react";

function ContactForm() {
  return (
    <>
      <FormControl m={1}>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input id="name" type="name" />

        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input id="email" type="email" />

        <FormLabel htmlFor="email">Message</FormLabel>
        <Textarea id="message" type="message" />

        <FormHelperText>
          Don&apos;t worry, I won&apos;t never share your email.
        </FormHelperText>
      </FormControl>
    </>
  );
}

export default ContactForm;
