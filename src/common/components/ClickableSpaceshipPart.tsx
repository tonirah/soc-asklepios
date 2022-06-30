import { useContext, useState } from 'react';
import Link from 'next/link';
import { Image } from '@/common/components/Image';
import { StaticImageData } from 'next/image';
import { ProgressContext } from '@/common/hooks';
import { Category } from '@/modules/tasks';

import vtcBase from '@/public/images/ship/vtc-base.png';
import vtcHighlighted from '@/public/images/ship/vtc-highlighted.png';
import vtcSolved from '@/public/images/ship/vtc-solved.png';
import chhBase from '@/public/images/ship/chh-base.png';
import chhHighlighted from '@/public/images/ship/chh-highlighted.png';
import chhSolved from '@/public/images/ship/chh-solved.png';
import srpBase from '@/public/images/ship/srp-base.png';
import srpHighlighted from '@/public/images/ship/srp-highlighted.png';
import srpSolved from '@/public/images/ship/srp-solved.png';
import cfsBase from '@/public/images/ship/cfs-base.png';
import cfsHighlighted from '@/public/images/ship/cfs-highlighted.png';
import cfsSolved from '@/public/images/ship/cfs-solved.png';

interface SpaceshipPartImages {
  base: StaticImageData;
  highlighted: StaticImageData;
  solved: StaticImageData;
}

const cfsImages: SpaceshipPartImages = {
  base: cfsBase,
  highlighted: cfsHighlighted,
  solved: cfsSolved,
};
const vtcImages: SpaceshipPartImages = {
  base: vtcBase,
  highlighted: vtcHighlighted,
  solved: vtcSolved,
};
const chhImages: SpaceshipPartImages = {
  base: chhBase,
  highlighted: chhHighlighted,
  solved: chhSolved,
};
const srpImages: SpaceshipPartImages = {
  base: srpBase,
  highlighted: srpHighlighted,
  solved: srpSolved,
};

function getImages(category: Category) {
  switch (category) {
    case Category.CentralFlightSystem:
      return cfsImages;
    case Category.VentilationThermalControl:
      return vtcImages;
    case Category.CrewHealthHypersleep:
      return chhImages;
    case Category.SpaceRadiationProtection:
      return srpImages;
  }
}

function getImage(
  images: SpaceshipPartImages,
  isHovered: boolean,
  isSolved: boolean,
) {
  if (isSolved) {
    return images.solved;
  }

  if (isHovered) {
    return images.highlighted;
  }

  return images.base;
}

export function ClickableSpaceshipPart({ category }: { category: Category }) {
  const { getRandomTaskId, getCategoryProgressPercentage } =
    useContext(ProgressContext);

  const isSolved = getCategoryProgressPercentage(category) === 100;
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  const images = getImages(category);

  return (
    <Link href={`/tasks/${getRandomTaskId(category)}`}>
      <a>
        <div
          className="h-full w-full"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Image
            src={getImage(images, isHovered, isSolved)}
            layout="responsive"
            className="object-contain"
            alt="SOC Asklepios Spaceship"
          />
        </div>
      </a>
    </Link>
  );
}
