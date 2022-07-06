import Link from 'next/link';
import { Category } from '@/modules/tasks';
import { Image } from '@/common/components/Image';
import { useContext } from 'react';
import { ProgressContext } from '@/common/hooks';
import { ClickableSpaceshipPart } from '@/common/components/ClickableSpaceshipPart';
import socCenterBase from '@/public/images/ship/soc-center-base.png';

export function Spaceship() {
  const { getCategoryProgressPercentage, getTotalScore, getRandomTaskId } =
    useContext(ProgressContext);

  return (
    <>
      <div className="flex w-full gap-2 justify-center items-end">
        <div className="w-1/2">
          <Link
            href={`/tasks/${getRandomTaskId(Category.CentralFlightSystem)}`}
          >
            <a className="btn btn-block btn-link justify-start h-fit">
              <div className="mb-1">{Category.CentralFlightSystem}</div>
              <progress
                className="block progress progress-accent mb-4"
                value={getCategoryProgressPercentage(
                  Category.CentralFlightSystem,
                )}
                max="100"
              ></progress>
            </a>
          </Link>
        </div>
        <div className="w-1/2">
          <Link
            href={`/tasks/${getRandomTaskId(
              Category.VentilationThermalControl,
            )}`}
          >
            <a className="btn btn-block btn-link justify-end h-fit">
              <div className="mb-1">{Category.VentilationThermalControl}</div>
              <progress
                className="block progress progress-secondary mb-4"
                value={getCategoryProgressPercentage(
                  Category.VentilationThermalControl,
                )}
                max="100"
              ></progress>
            </a>
          </Link>
        </div>
      </div>

      <div className="mx-auto w-full aspect-video flex mb-2">
        <div className="w-full">
          <ClickableSpaceshipPart category={Category.CentralFlightSystem} />
        </div>
        <div className="w-full flex flex-col">
          <div className="h-full">
            <ClickableSpaceshipPart
              category={Category.VentilationThermalControl}
            />
          </div>
          <div className="relative h-full">
            <Image
              src={socCenterBase}
              layout="responsive"
              className="object-contain"
              alt="SOC Asklepios Spaceship"
            />
            <div className="absolute top-0 w-full drop-shadow text-white">
              <div className="text-xs sm:text-base mt-3">Gesamtpunkte</div>
              <div className="font-bold text-4xl sm:text-6xl">
                {getTotalScore()}
              </div>
            </div>
          </div>
          <div className="h-full">
            <ClickableSpaceshipPart category={Category.CrewHealthHypersleep} />
          </div>
        </div>
        <div className="w-full">
          <ClickableSpaceshipPart
            category={Category.SpaceRadiationProtection}
          />
        </div>
      </div>

      <div className="flex w-full gap-2 justify-center items-start">
        <div className="w-1/2">
          <Link
            href={`/tasks/${getRandomTaskId(Category.CrewHealthHypersleep)}`}
          >
            <a className="btn btn-block btn-link justify-start h-fit">
              <progress
                className="block progress progress-success mt-4 mb-1"
                value={getCategoryProgressPercentage(
                  Category.CrewHealthHypersleep,
                )}
                max="100"
              ></progress>
              <div className="">{Category.CrewHealthHypersleep}</div>
            </a>
          </Link>
        </div>
        <div className="w-1/2">
          <Link
            href={`/tasks/${getRandomTaskId(
              Category.SpaceRadiationProtection,
            )}`}
          >
            <a className="btn btn-block btn-link justify-end h-fit">
              <progress
                className="block progress progress-primary mt-4 mb-1"
                value={getCategoryProgressPercentage(
                  Category.SpaceRadiationProtection,
                )}
                max="100"
              ></progress>
              <div className="">{Category.SpaceRadiationProtection}</div>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
