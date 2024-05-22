import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";

export default function Background() {
  const imageUrl =
    "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e";

  return (
    <Box
      styleSheet={{
        width: "100%",
        height: "400px",
        backgroundImage: `url("${imageUrl}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    ></Box>
  );
}
