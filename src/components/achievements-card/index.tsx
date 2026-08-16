import { Fragment } from 'react';
import LazyImage from '../lazy-image';
import { FaTrophy } from 'react-icons/fa';
import { skeleton } from '../../utils';
import { SanitizedAchievement } from '../../interfaces/sanitized-config';

const AchievementsCard = ({
  achievements,
  loading,
}: {
  achievements: SanitizedAchievement[];
  loading: boolean;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 3; index++) {
      array.push(
        <div className="card shadow-md card-sm bg-base-100" key={index}>
          <div className="p-6 h-full w-full">
            <div className="flex items-center flex-col">
              <div className="w-full">
                <div className="px-4">
                  <div className="avatar w-full h-full flex justify-center mb-4">
                    <div className="w-24 h-24 mask mask-squircle">
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-full',
                        shape: '',
                      })}
                    </div>
                  </div>
                  <h2>
                    {skeleton({
                      widthCls: 'w-32',
                      heightCls: 'h-6',
                      className: 'mb-2 mx-auto',
                    })}
                  </h2>
                  <div className="mt-2">
                    {skeleton({
                      widthCls: 'w-full',
                      heightCls: 'h-4',
                      className: 'mx-auto',
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return array;
  };

  const renderAchievements = () => {
    return achievements.map((item, index) => {
      const cardContent = (
        <div className="p-6 h-full w-full flex flex-col justify-between">
          <div className="flex items-center flex-col text-center">
            {item.imageUrl && (
              <div className="avatar mb-4 opacity-90">
                <div className="w-28 h-20 relative flex items-center justify-center overflow-hidden rounded-lg bg-base-300">
                  <LazyImage
                    src={item.imageUrl}
                    alt={item.title}
                    placeholder={skeleton({
                      widthCls: 'w-full',
                      heightCls: 'h-full',
                      shape: '',
                    })}
                  />
                </div>
              </div>
            )}
            <h3 className="font-semibold text-base-content mb-2 text-sm sm:text-base">
              {item.title}
            </h3>
            {item.description && (
              <p className="text-base-content/70 text-xs text-justify line-clamp-4">
                {item.description}
              </p>
            )}
          </div>
        </div>
      );

      if (item.link) {
        return (
          <a
            className="card shadow-md card-sm bg-base-100 cursor-pointer hover:shadow-lg transition-shadow duration-200"
            key={index}
            href={item.link}
            target="_blank"
            rel="noreferrer"
          >
            {cardContent}
          </a>
        );
      } else {
        return (
          <div className="card shadow-md card-sm bg-base-100" key={index}>
            {cardContent}
          </div>
        );
      }
    });
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="card bg-base-200 shadow-xl border border-base-300">
          <div className="card-body p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div className="flex items-center space-x-3">
                {loading ? (
                  skeleton({
                    widthCls: 'w-12',
                    heightCls: 'h-12',
                    className: 'rounded-xl',
                  })
                ) : (
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
                    <FaTrophy className="text-2xl text-primary" />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-base-content truncate">
                    {loading
                      ? skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
                      : 'Achievements'}
                  </h3>
                  <div className="text-base-content/60 text-xs sm:text-sm mt-1 truncate">
                    {loading
                      ? skeleton({ widthCls: 'w-32', heightCls: 'h-4' })
                      : `Recognitions and competitive success`}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {loading ? renderSkeleton() : renderAchievements()}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AchievementsCard;
