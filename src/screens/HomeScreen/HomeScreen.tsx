import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import Background from "./patterns/Background/Background";
import Feed from "./patterns/Feed/Feed";
import Footer from "./patterns/Footer/Footer";
import Menu from "./patterns/Menu/Menu";
import { useTheme } from "@src/theme/ThemeProvider";
import Link from "@src/components/Link/Link";

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <Box
      tag="main"
      styleSheet={{
        backgroundColor: theme.colors.neutral.x000,
        flex: 1,
        alignItems: "center",
      }}
    >
      <Background />
      <Menu />
      <Feed>
        <Feed.Header />
        {/* <Text tag="h2" variant="heading1">
          Últimas Atualizações
        </Text>
        <Feed.Posts /> */}
      </Feed>
      <Footer />
    </Box>
  );
}
