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
            <a className="btn btn-block btn-link justify-start h-fit text-left">
              <div className="rounded-box p-2 w-full">
                {Category.CentralFlightSystem}
              </div>
              <progress
                className="block progress progress-accent h-4 mb-4"
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
            <a className="btn btn-block btn-link justify-end h-fit text-right">
              <div className="rounded-box p-2 w-full">
                {Category.VentilationThermalControl}
              </div>
              <progress
                className="block progress progress-secondary h-4 mb-4"
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
            <a className="btn btn-block btn-link justify-start h-fit text-left">
              <progress
                className="block progress progress-success h-4 mt-4"
                value={getCategoryProgressPercentage(
                  Category.CrewHealthHypersleep,
                )}
                max="100"
              ></progress>
              <div className="rounded-box p-2 w-full">
                {Category.CrewHealthHypersleep}
              </div>
            </a>
          </Link>
        </div>
        <div className="w-1/2">
          <Link
            href={`/tasks/${getRandomTaskId(
              Category.SpaceRadiationProtection,
            )}`}
          >
            <a className="btn btn-block btn-link justify-end h-fit text-right">
              <progress
                className="block progress progress-primary h-4 mt-4"
                value={getCategoryProgressPercentage(
                  Category.SpaceRadiationProtection,
                )}
                max="100"
              ></progress>
              <div className="rounded-box p-2 w-full">
                {Category.SpaceRadiationProtection}
              </div>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
