import React from 'react';
import { Box, Text } from '@chakra-ui/layout';

export const Th = (props) => (
  <Text
    as="th"
    textTransform="uppercase"
    fontSize="xs"
    color="gray.500"
    fontWeight="medium"
    px={4}
    {...props}
  />
);

export const Td = (props) => (
  <Text
    as="td"
    fontSize="xs"
    color="gray.900"
    borderBottom="1px solid"
    borderBottomColor="gray.100"
    px={4}
    {...props}
  />
);

export const Tr = (props) => (
  <Box
    as="tr"
    backgroundColor="gray.50"
    borderTopLeftRadius={8}
    borderTopRightRadius={8}
    borderBottom="1px solid"
    borderBottomColor="gray.200"
    height="40px"
    {...props}
  />
);

export const Table = (props) => {
  return (
    <Box
      as="table"
      textAlign="left"
      ml={0}
      mr={0}
      borderRadius={8}
      boxShadow="0px 4px 10px rgba(0, 0, 0.05)"
      {...props}
    />
  );
};
