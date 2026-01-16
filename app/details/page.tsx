import React from 'react';
import { Image, Text, Container } from '@mantine/core';

const Page = () => {
  return (
    <Container size="sm" mt="lg">
      <Image
        src="/rr.png"
        h={300}
        radius="md"
        alt="Rahul Swami"
      />

      <Text fw={900} size="xl" mt="md">
        Rahul Swami kon hai?
      </Text>

      <Text mt="sm" size="md">
        Rahul Swami ek creative professional hain jo photography,
        filmmaking aur digital storytelling me kaam karte hain.
        Unka kaam creativity, timing aur passion ka perfect blend
        hota hai.
      </Text>

      <Text mt="sm" size="md">
        Camera ke peeche reh kar woh duniya ko ek alag nazariye
        se dikhate hain. Har project unke liye ek naya experience
        hota hai jisme woh apni skills aur vision ka poora use karte hain.
      </Text>
    </Container>
  );
};

export default Page;
