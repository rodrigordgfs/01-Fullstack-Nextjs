import Box from "../src/components/Box";
import theme from "../src/theme/theme";

export default function HomeScreen() {
  return (
    <Box
      tag="main"
      stylesheet={{
        fontFamily: theme.typography.fontFamily,
      }}
    >
      Oi
    </Box>
  );
}
