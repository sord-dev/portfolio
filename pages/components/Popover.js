import { Button, PopoverTrigger, Popover, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody } from "@chakra-ui/react";
import React from "react";

function CustomPopover({children, heading, desc}) {
  return (
    <Popover >
      <PopoverTrigger>
        <Button padding='4em'>{children}</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>{heading}</PopoverHeader>
        <PopoverBody>{desc}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default CustomPopover;
