import NextHead from 'next/head';

export function Head({ title }: { title: string }) {
  return (
    <NextHead>
      <title>{title}</title>
      <meta
        name="description"
        content="A serious game to learn software refactorings and save your spaceship."
      />
    </NextHead>
  );
}
