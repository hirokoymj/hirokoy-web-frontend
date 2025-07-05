import Box from './components/Box';

const BoxOne = () => {
  return <Box>From Three</Box>;
};
const BoxTwo = () => {
  return (
    <Box>
      <Box.GreenOutline>Some content</Box.GreenOutline>
    </Box>
  );
};
const BoxThree = () => {
  return (
    <Box>
      <Box.BrownOutline>
        <input placeholder="Enter Email" />
      </Box.BrownOutline>
    </Box>
  );
};

const BoxDemo = () => {
  return (
    <>
      <h1>Composition Pattern - Box component</h1>
      <BoxOne />
      <BoxTwo />
      <BoxThree />
    </>
  );
};
export default BoxDemo;
