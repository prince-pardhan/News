"use client";

import { useRef } from "react";
import { RichTextEditor, Link } from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import Superscript from "@tiptap/extension-superscript";
import SubScript from "@tiptap/extension-subscript";

import "@mantine/core/styles.css";
import "@mantine/tiptap/styles.css";

import {
  Button,
  Group,
  Paper,
  Divider,
} from "@mantine/core";
import { IconPhoto, IconSend } from "@tabler/icons-react";

function Tiptap() {
  const fileInputRef = useRef<any>(null);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ link: false }),
      Link,
      Image,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: "",
    immediatelyRender: false,
  });

  if(!editor){
    return null
  }

  const openGallery = () => {
    fileInputRef.current.click();
  };

  const handleImageUpload = (e:any) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    // reader.onload = () => {
    //   editor.chain().focus().setImage({ src: reader.result }).run();
    // };
    // reader.readAsDataURL(file);
  };

  return (
    <Paper
      shadow="md"
      radius="lg"
      p="md"
      withBorder
      style={{ maxWidth: 1100, margin: "auto" }}
    >
      {/* Hidden input */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageUpload}
        style={{ display: "none" }}
      />

      <RichTextEditor editor={editor}>
        {/* Toolbar */}
        <RichTextEditor.Toolbar
          sticky
          stickyOffset={60}
          style={{
            background: "#f8f9fa",
            borderRadius: "8px",
          }}
        >
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Underline />
            <RichTextEditor.Strikethrough />
            <RichTextEditor.ClearFormatting />
            <RichTextEditor.Highlight />
            <RichTextEditor.Code />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.H1 />
            <RichTextEditor.H2 />
            <RichTextEditor.H3 />
            <RichTextEditor.H4 />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Blockquote />
            <RichTextEditor.Hr />
            <RichTextEditor.BulletList />
            <RichTextEditor.OrderedList />
            <RichTextEditor.Subscript />
            <RichTextEditor.Superscript />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Link />
            <RichTextEditor.Unlink />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.AlignLeft />
            <RichTextEditor.AlignCenter />
            <RichTextEditor.AlignJustify />
            <RichTextEditor.AlignRight />
          </RichTextEditor.ControlsGroup>

          {/* <RichTextEditor.ControlsGroup>
            <RichTextEditor.Undo />
            <RichTextEditor.Redo />
          </RichTextEditor.ControlsGroup> */}
        </RichTextEditor.Toolbar>

        {/* Editor content */}
        <RichTextEditor.Content
          style={{
            minHeight: 350,
            padding: "16px",
          }}
        />
      </RichTextEditor>

      <Divider my="md" />

      
      <Group justify="space-between">
        <Button
          leftSection={<IconPhoto size={25} />}
          variant="light"
          onClick={openGallery}
        >
           Img
        </Button>

        <Button
          rightSection={<IconSend size={25} />}
          color="dark"
          radius="md"
        >
          Publish Post
        </Button>
      </Group>
    </Paper>
  );
}

export default Tiptap;
