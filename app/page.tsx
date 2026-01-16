import { Divider, Stack } from "@mantine/core";
import Image from "next/image";
import Navbar from "./Navbar/Navbar";
import Card from "./card/Card";
import Footer from "./Footer/Footer";
export default function Home() {
  return (
    <Stack w={"100%"} h={"100%"}  bg={"gray.2"}>
      <Navbar />
      <Card />
      <Footer />
    </Stack>
  );
}
