import { Box, SearchInput, Avatar } from "@rocket.chat/fuselage";
import React from "react";

// import magnifier from "../../assets/assets/magnifier.svg";

const SearchBar = () => (
  <Box display="flex" width="100%" padding={"20px 20px"} margin={"40px 0px"}>
    <SearchInput
      addon={<Avatar size="x20" url={"../../assets/assets/magnifier.svg"} />}
    />
  </Box>
);

export default SearchBar;
