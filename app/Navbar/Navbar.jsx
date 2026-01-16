'use client';
import { useState } from 'react';
import {
  Box,
  Group,
  Text,
  ActionIcon,
  Image,
  Divider,
  TextInput,
} from '@mantine/core';
import { IconSearch, IconX } from '@tabler/icons-react';
const NAVIGATION_LINKS = ['Home', 'India', 'Religion', 'Sports'];
export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <Box h={80} bg="#0008ffff" pos="relative">
      {!isSearchOpen && (
        <Group h="100%" wrap="nowrap" px={20} justify="space-between">
          <Image
            src="/rr.png"
            h="200vh"
            w={120}
            fit="contain"
            
          />

          <Group gap={32}>
            {NAVIGATION_LINKS.map((link) => (
              <Text
                key={link}
                c="white"
                fw={900}
                size="sm"
                style={{ cursor: 'pointer' }}
              >
                {link}
              </Text>
            ))}

            <Divider orientation="vertical" color="gray" />

            <ActionIcon
              variant="subtle"
              color="white"
              onClick={() => setIsSearchOpen(true)}
            >
              <IconSearch size={18} />
            </ActionIcon>
          </Group>
        </Group>
      )}

      {isSearchOpen && (
        <Group
          h="100%"
          justify="center"
          align="center"
          gap="md"
        >
          <TextInput
            placeholder="Search..."
            size="sm"
            autoFocus
            styles={{
              input: {
                width: 300,
                backgroundColor: '#ffffff',
              },
            }}
          />

          <ActionIcon
            variant="subtle"
            color="white"
            onClick={() => setIsSearchOpen(false)}
          >
            <IconX size={180} />
          </ActionIcon>
        </Group>
      )}
    </Box>
  );
}
