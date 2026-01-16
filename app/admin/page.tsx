"use client";
import { Modal, Button } from "@mantine/core";
import Tiptap from "../components/TipTap";
import { useState } from "react";

export default function Admin() {
  const [opened, setOpen] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpen(false)}
        fullScreen
        transitionProps={{ transition: "fade", duration: 200 }}
      >
        <Tiptap />
      </Modal>

      <Button variant="default" onClick={() => setOpen(true)}>
        Open modal
      </Button>
    </>
  );
}
