import { Box, SearchInput } from "@rocket.chat/fuselage";
import React from "react";

import { ReactComponent as Magnifier } from "../../Assets/Icon/magnifier.svg";

const SearchBar = () => (
  <Box display="flex" width="100%" padding={"20px 20px"}>
    <SearchInput addon={<Magnifier width={20} />} />
  </Box>
);

export default SearchBar;
