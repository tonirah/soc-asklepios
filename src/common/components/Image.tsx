import NextImage from 'next/image';
import { ImageProps } from 'next/dist/client/image';

// https://github.com/vercel/next.js/discussions/19065
const customLoader = ({ src }: { src: string }) => {
  return src;
};

export function Image(props: ImageProps) {
  return <NextImage {...props} loader={customLoader} />;
}
