import { Box, SearchInput, Avatar } from "@rocket.chat/fuselage";
import React from "react";

const magnifier =
  "https://raw.githubusercontent.com/RocketChat/fuselage/db54ddd7ac78ec68bcab4f8cf521806f2c5c7984/packages/icons/src/magnifier.svg";

const SearchBar = () => (
  <Box
    display="flex"
    width="100%"
    padding={"20px 20px"}
    margin={"40px 0px 0px 0px"}
  >
    <SearchInput addon={<Avatar size="x20" url={magnifier} />} />
  </Box>
);

export default SearchBar;
