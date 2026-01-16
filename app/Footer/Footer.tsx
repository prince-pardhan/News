'use client';

import {
  Box,
  Container,
  Group,
  Text,
  Divider,
  ActionIcon,
  Stack,
  Anchor,
} from '@mantine/core';

import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandYoutube,
} from '@tabler/icons-react';

export default function Footer() {
  return (
    <Box bg="#0b1d3a" c="white" mt={80}>
      <Container size="xl" py={50}>
        <Group justify="space-between" align="flex-start" wrap="wrap">

         
          <Stack gap={8} maw={420}>
            <Text fw={900} size="xl" c={"blue"}>
              Rahul Swami
            </Text>
            <Divider w={120} color="blue" />

            <Text size="sm"  fw={500}>
              2+ years experience in Video Editing & Web Development.
              Every project is a new journey where creativity, timing,
              and passion come together to tell powerful stories.
              <br />
              <Text span c="yellow" fw={800}>
                (Editor & Full Stack Developer)
              </Text>
            </Text>
          </Stack>

          
          <Stack gap={6}>
            <Text fw={800} c={"blue"}>Projects</Text>
            <Divider w={90} color="blue" />

            <Anchor
              href="https://www.rahulswami.online/"
              target="_blank"
              c="gray.3"
              fw={600}
            >
              RahulSwami.online
            </Anchor>

            <Anchor
              href="https://prince-pardhan.github.io/farming/"
              target="_blank"
              c="gray.3"
              fw={600}
            >
              Green Farma
            </Anchor>
            <Anchor
              href=" https://prince-pardhan.github.io/rameshkumar/"
              target="_blank"
              c="gray.3"
              fw={600}
            >
              Ranesh swami
            </Anchor>
          </Stack>

          <Stack gap={10}>
            <Text fw={800} c={"blue"}>Follow Us</Text>
            <Divider w={100} color="blue" />

            <Group gap="sm">
              <ActionIcon variant="light" color="blue" radius="xl">
                <IconBrandFacebook size={18} />
              </ActionIcon>
              <ActionIcon variant="light" color="cyan" radius="xl">
                <IconBrandTwitter size={18} />
              </ActionIcon>
              <ActionIcon variant="light" color="pink" radius="xl">
                <IconBrandInstagram size={18} />
              </ActionIcon>
              
              <ActionIcon variant="light" color="red" radius="xl"  >
                <a href="" style={{ color: "red" }} target='_blank'>
                  <IconBrandYoutube size={18} /></a>
              </ActionIcon>
            </Group>
          </Stack>
        </Group>

         
        <Divider my="xl" color="gray.7" />

        <Text ta="center" size="sm" c="gray.5">
          © {new Date().getFullYear()} 𝑅@𝐦е𝑠Һ 𝑠ω@𝐦ĩ
        </Text>
      </Container>
    </Box>
  );
}
