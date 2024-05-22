import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      styleSheet={{
        height: "120px",
        width: "100%",
        backgroundColor: theme.colors.neutral.x900,
        color: theme.colors.neutral.x000,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: "24px",
        paddingVertical: "24px",
        textAlign: "center",
      }}
    >
      <Text variant="body2">
        Feito com ❤️️ por Rodrigo Shinoda (ShinodaLabs)
      </Text>
    </Box>
  );
}
