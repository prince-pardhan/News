  'use client';
  import React from 'react';
  import {
    Card,
    Image,
    Text,
    Button,
    Group,
  } from '@mantine/core';
  import { useRouter } from 'next/navigation';

  export default function CustomCard() {
    const router = useRouter();

    return (
      <Card
        radius="7px"
        padding="lg"
        style={{
          width: 340,
          margin: 16,
          cursor: 'pointer',
        }}
      >
        <Card.Section>
          <Image
            src="/rr.png"
            h={200}
            alt="Reward image"
          />
        </Card.Section>

        <Text fw={900} size="lg" mt="sm" lineClamp={2}>
          Rahul Swami kon hai ? Puri detail me jaaniye
        </Text>

        <Text mt="xs" c="dimmed" size="sm" lineClamp={3}>
          Har project ek naya experience hota hai jahan creativity,
          timing aur passion ka use hota hai...
        </Text>

        <Group justify="space-between" mt="md">
          <Button
            radius="20px"
            color="blue"
            variant="light"
            onClick={() => router.push('/details')}
          >
            Read more...
          </Button>
        </Group>
      </Card>
    );
  }
