import { Fragment } from 'react';
import { FaAward } from 'react-icons/fa';
import LazyImage from '../lazy-image';
import { skeleton } from '../../utils';
import { SanitizedPositionOfResponsibility } from '../../interfaces/sanitized-config';

const PositionsOfResponsibilityCard = ({
  positions,
  loading,
}: {
  positions: SanitizedPositionOfResponsibility[];
  loading: boolean;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <div className="card shadow-md card-sm bg-base-100 p-6 flex flex-row gap-4" key={index}>
          <div className="flex-shrink-0">
            {skeleton({
              widthCls: 'w-16',
              heightCls: 'h-16',
              className: 'rounded-lg',
            })}
          </div>
          <div className="flex-grow">
            {skeleton({ widthCls: 'w-48', heightCls: 'h-5', className: 'mb-2' })}
            {skeleton({ widthCls: 'w-24', heightCls: 'h-3', className: 'mb-3' })}
            {skeleton({ widthCls: 'w-full', heightCls: 'h-4', className: 'mb-2' })}
            {skeleton({ widthCls: 'w-3/4', heightCls: 'h-4', className: 'mb-4' })}
            <div className="flex gap-2">
              {skeleton({ widthCls: 'w-16', heightCls: 'h-4' })}
              {skeleton({ widthCls: 'w-20', heightCls: 'h-4' })}
            </div>
          </div>
        </div>
      );
    }
    return array;
  };

  const renderPositions = () => {
    return positions.map((item, index) => (
      <div
        className="card shadow-md card-sm bg-base-100 p-6 flex flex-col sm:flex-row gap-6 items-start"
        key={index}
      >
        {item.logo && (
          <div className="flex-shrink-0 w-16 h-16 relative flex items-center justify-center overflow-hidden rounded-lg bg-base-200 border border-base-300 m-1.5">
            <LazyImage
              src={item.logo}
              alt={item.position}
              placeholder={skeleton({
                widthCls: 'w-full',
                heightCls: 'h-full',
                shape: '',
              })}
            />
          </div>
        )}
        <div className="flex-grow">
          <h3 className="font-semibold text-base-content text-base">
            {item.position}
            {item.company && (
              <span className="text-base-content/70 font-normal"> at {item.company}</span>
            )}
          </h3>
          <div className="text-xs text-base-content/50 mt-1 mb-3">
            {item.from} - {item.to}
          </div>
          {item.description && (
            <p className="text-base-content/80 text-sm mb-4 text-justify">
              {item.description}
            </p>
          )}
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag, tIndex) => (
                <span
                  key={tIndex}
                  className="px-2.5 py-0.5 bg-neutral/10 text-neutral-content text-xs rounded-full border border-base-300 font-medium"
                >
                  #{tag.replace('#', '')}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    ));
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
                    <FaAward className="text-2xl text-primary" />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-base-content truncate">
                    {loading
                      ? skeleton({ widthCls: 'w-48', heightCls: 'h-8' })
                      : 'Positions of Responsibility'}
                  </h3>
                  <div className="text-base-content/60 text-xs sm:text-sm mt-1 truncate">
                    {loading
                      ? skeleton({ widthCls: 'w-32', heightCls: 'h-4' })
                      : 'Leadership roles and volunteer experiences'}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              {loading ? renderSkeleton() : renderPositions()}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PositionsOfResponsibilityCard;
