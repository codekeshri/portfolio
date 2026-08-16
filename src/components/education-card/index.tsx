import React from 'react';
import { SanitizedEducation } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';
import LazyImage from '../lazy-image';

const ListItem = ({
  degree,
  institution,
  logo,
}: {
  degree?: React.ReactNode;
  institution?: React.ReactNode;
  logo?: string;
}) => (
  <li className="mb-5 ml-4 flex gap-4 items-start">
    <div
      className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
      style={{ left: '-4.5px' }}
    ></div>
    {logo && (
      <div className="flex-shrink-0 w-12 h-12 relative flex items-center justify-center overflow-hidden rounded bg-base-200 border border-base-300 my-1.5 ml-2.5 mr-1.5">
        <LazyImage
          src={logo}
          alt={typeof institution === 'string' ? institution : 'logo'}
          placeholder={skeleton({
            widthCls: 'w-full',
            heightCls: 'h-full',
            shape: '',
          })}
        />
      </div>
    )}
    <div className="flex-grow">
      <h3 className="font-semibold text-sm">{degree}</h3>
      <div className="mb-4 font-normal text-sm">{institution}</div>
    </div>
  </li>
);

const EducationCard = ({
  loading,
  educations,
}: {
  loading: boolean;
  educations: SanitizedEducation[];
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <ListItem
          key={index}
          degree={skeleton({
            widthCls: 'w-6/12',
            heightCls: 'h-4',
            className: 'my-1.5',
          })}
          institution={skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
        />,
      );
    }

    return array;
  };

  return (
    <div className="card shadow-lg card-sm bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">Education</span>
            )}
          </h5>
        </div>
        <div className="text-base-content">
          <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
            {loading ? (
              renderSkeleton()
            ) : (
              <>
                {educations.map((item, index) => (
                  <ListItem
                    key={index}
                    degree={item.degree}
                    institution={item.institution}
                    logo={item.logo}
                  />
                ))}
              </>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
