import React from 'react'
import { Box, SearchInput, Avatar } from '@rocket.chat/fuselage';
import magnifier from '../../assets/icon/magnifier.svg'

const SearchBar = () => {
  return (
    <Box
        display='flex'
        width='100%'
        padding={'20px 20px'}
        margin={'40px 0px'}
    >
        <SearchInput addon={<Avatar size="x20" url={magnifier} />} />
    </Box>
  )
}

export default SearchBar