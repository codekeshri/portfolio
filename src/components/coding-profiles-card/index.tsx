import { SanitizedCodingProfile } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces, SiCodechef, SiGeeksforgeeks } from 'react-icons/si';

const getProfileIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case 'github':
      return <FaGithub className="text-lg text-base-content" />;
    case 'leetcode':
      return <SiLeetcode className="text-lg" style={{ color: '#FFA116' }} />;
    case 'codeforces':
      return <SiCodeforces className="text-lg" style={{ color: '#1F8EE7' }} />;
    case 'codechef':
      return <SiCodechef className="text-lg" style={{ color: '#5B4638' }} />;
    case 'geeksforgeeks':
    case 'gfg':
      return <SiGeeksforgeeks className="text-lg" style={{ color: '#2F8D46' }} />;
    default:
      return null;
  }
};

const CodingProfilesCard = ({
  loading,
  codingProfiles,
}: {
  loading: boolean;
  codingProfiles: SanitizedCodingProfile[];
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 4; index++) {
      array.push(
        <div key={index} className="flex items-center justify-between py-2 px-1">
          <div className="flex items-center gap-2 grow">
            {skeleton({ widthCls: 'w-5', heightCls: 'h-5' })}
            {skeleton({ widthCls: 'w-24', heightCls: 'h-4' })}
          </div>
          {skeleton({ widthCls: 'w-16', heightCls: 'h-4' })}
        </div>
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
              <span className="text-base-content opacity-70">Coding Profiles</span>
            )}
          </h5>
        </div>
        <div className="text-base-content mt-2">
          {loading ? (
            renderSkeleton()
          ) : (
            <div className="divide-y divide-base-300 divide-opacity-30">
              {codingProfiles.map((profile, index) => {
                const icon = getProfileIcon(profile.name);
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between py-3 px-3 hover:bg-base-200/50 rounded-lg transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      {icon}
                      <span className="font-medium text-sm">{profile.name}</span>
                    </div>
                    <a
                      href={profile.link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-xs btn-outline btn-neutral"
                    >
                      View Profile
                    </a>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodingProfilesCard;
