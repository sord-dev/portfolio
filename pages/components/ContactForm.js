import { Box, Button, FormControl, FormHelperText, FormLabel, Input, Textarea, useToast } from "@chakra-ui/react";
import React from "react";
import emailjs from '@emailjs/browser'

function ContactForm() {
    const toast = useToast()


    const handleForm = (e) => {
        e.preventDefault()
        console.log(e.target)
        emailjs.sendForm('service_wubuxv9', 'template_kjsqajk', e.target, 'ng_jlWG_oiOK8v-Bt')
      .then((result) => {
        toast({
            position: 'bottom-left',
            render: () => (
              <Box color='white' p={3} bg='purple.500'>
                {`${result.text}, email sent succesfully`}
              </Box>
            ),
          })
      }, (error) => {
          toast({
            position: 'bottom-left',
            render: () => (
              <Box color='white' p={3} bg='purple.900'>
                {`there was an error: ${error.text}`}
              </Box>
            ),
          })
      });

      e.target.reset()
    }
  return (
    <>
      <FormControl as='form' m={1} onSubmit={(e) => handleForm(e)}>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input id="name" type="name" name='user_name'/>

        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input id="email" type="email"  name='user_email'/>

        <FormLabel htmlFor="email">Message</FormLabel>
        <Textarea id="message" type="message" name='message' mb={5}/>

        <Button as='button' type="submit" >Send</Button>

        <FormHelperText>
          Don&apos;t worry, I won&apos;t ever share your email.
        </FormHelperText>

      </FormControl>
    </>
  );
}

export default ContactForm;
