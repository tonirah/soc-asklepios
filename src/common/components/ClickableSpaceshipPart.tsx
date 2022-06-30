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

interface CategoryImages {
  base: StaticImageData;
  highlighted: StaticImageData;
  solved: StaticImageData;
}

const cfsImages: CategoryImages = {
  base: cfsBase,
  highlighted: cfsHighlighted,
  solved: cfsSolved,
};
const vtcImages: CategoryImages = {
  base: vtcBase,
  highlighted: vtcHighlighted,
  solved: vtcSolved,
};
const chhImages: CategoryImages = {
  base: chhBase,
  highlighted: chhHighlighted,
  solved: chhSolved,
};
const srpImages: CategoryImages = {
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

export function ClickableSpaceshipPart({ category }: { category: Category }) {
  const { getRandomTaskId } = useContext(ProgressContext);
  const images = getImages(category);

  const [isHovered, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return (
    <Link href={`/tasks/${getRandomTaskId(category)}`}>
      <a>
        <div
          className="h-full w-full"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {isHovered ? (
            <Image
              src={images.highlighted}
              layout="responsive"
              className="object-contain"
              alt="SOC Asklepios Spaceship"
            />
          ) : (
            <Image
              src={images.base}
              layout="responsive"
              className="object-contain"
              alt="SOC Asklepios Spaceship"
            />
          )}
        </div>
      </a>
    </Link>
  );
}
