import { Fragment } from 'react';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillMediumSquare,
} from 'react-icons/ai';
import { CgDribbble } from 'react-icons/cg';
import {
  FaBehanceSquare,
  FaBuilding,
  FaDev,
  FaFacebook,
  FaGlobe,
  FaLinkedin,
  FaMastodon,
  FaReddit,
  FaStackOverflow,
  FaTelegram,
  FaYoutube,
} from 'react-icons/fa';
import { FaSquareThreads } from 'react-icons/fa6';
import { MdLocationOn } from 'react-icons/md';
import { RiDiscordFill, RiMailFill, RiPhoneFill } from 'react-icons/ri';
import { SiResearchgate, SiX, SiUdemy } from 'react-icons/si';
import { Profile } from '../../interfaces/profile';
import {
  SanitizedGithub,
  SanitizedSocial,
} from '../../interfaces/sanitized-config';

type Props = {
  profile: Profile | null;
  loading: boolean;
  social: SanitizedSocial;
  github: SanitizedGithub;
};

const getFormattedMastodonValue = (
  mastodonValue: string,
  isLink: boolean,
): string => {
  const [username, server] = mastodonValue.split('@');
  if (isLink) {
    return `https://${server}/@${username}`;
  } else {
    return `${username}@${server}`;
  }
};

const IconButton = ({
  icon,
  link,
  title,
}: {
  icon: React.ReactNode;
  link: string;
  title: string;
}) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer"
    className="btn btn-circle btn-sm btn-ghost text-lg hover:scale-110 transition-transform duration-200"
    title={title}
  >
    {icon}
  </a>
);

const DetailsCard = ({ profile, loading, social, github }: Props) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 6; index++) {
      array.push(
        <div key={index} className="w-8 h-8 rounded-full bg-base-300 animate-pulse m-1" />
      );
    }
    return array;
  };

  return (
    <div className="card shadow-lg card-sm bg-base-100">
      <div className="card-body p-4">
        <div className="flex flex-wrap justify-center items-center gap-2">
          {loading || !profile ? (
            renderSkeleton()
          ) : (
            <Fragment>
              {profile.location && (
                <IconButton
                  icon={<MdLocationOn />}
                  link={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profile.location)}`}
                  title={`Based in: ${profile.location}`}
                />
              )}
              {profile.company && (
                <IconButton
                  icon={<FaBuilding />}
                  link={`https://github.com/${profile.company.trim().replace('@', '')}`}
                  title={`Organization: ${profile.company}`}
                />
              )}
              <IconButton
                icon={<AiFillGithub />}
                link={`https://github.com/${github.username}`}
                title="GitHub"
              />
              {social?.linkedin && (
                <IconButton
                  icon={<FaLinkedin />}
                  link={`https://www.linkedin.com/in/${social.linkedin}`}
                  title="LinkedIn"
                />
              )}
              {social?.x && (
                <IconButton
                  icon={<SiX />}
                  link={`https://x.com/${social.x}`}
                  title="X"
                />
              )}
              {social?.website && (
                <IconButton
                  icon={<FaGlobe />}
                  link={social.website.startsWith('http') ? social.website : `http://${social.website}`}
                  title="Website"
                />
              )}
              {social?.email && (
                <IconButton
                  icon={<RiMailFill />}
                  link={`mailto:${social.email}`}
                  title="Email"
                />
              )}
              {social?.researchGate && (
                <IconButton
                  icon={<SiResearchgate />}
                  link={`https://www.researchgate.net/profile/${social.researchGate}`}
                  title="ResearchGate"
                />
              )}
              {social?.mastodon && (
                <IconButton
                  icon={<FaMastodon />}
                  link={getFormattedMastodonValue(social.mastodon, true)}
                  title="Mastodon"
                />
              )}
              {social?.dribbble && (
                <IconButton
                  icon={<CgDribbble />}
                  link={`https://dribbble.com/${social.dribbble}`}
                  title="Dribbble"
                />
              )}
              {social?.behance && (
                <IconButton
                  icon={<FaBehanceSquare />}
                  link={`https://www.behance.net/${social.behance}`}
                  title="Behance"
                />
              )}
              {social?.facebook && (
                <IconButton
                  icon={<FaFacebook />}
                  link={`https://www.facebook.com/${social.facebook}`}
                  title="Facebook"
                />
              )}
              {social?.instagram && (
                <IconButton
                  icon={<AiFillInstagram />}
                  link={`https://www.instagram.com/${social.instagram}`}
                  title="Instagram"
                />
              )}
              {social?.reddit && (
                <IconButton
                  icon={<FaReddit />}
                  link={`https://www.reddit.com/user/${social.reddit}`}
                  title="Reddit"
                />
              )}
              {social?.threads && (
                <IconButton
                  icon={<FaSquareThreads />}
                  link={`https://www.threads.net/@${social.threads.replace('@', '')}`}
                  title="Threads"
                />
              )}
              {social?.youtube && (
                <IconButton
                  icon={<FaYoutube />}
                  link={`https://www.youtube.com/@${social.youtube}`}
                  title="YouTube"
                />
              )}
              {social?.udemy && (
                <IconButton
                  icon={<SiUdemy />}
                  link={`https://www.udemy.com/user/${social.udemy}`}
                  title="Udemy"
                />
              )}
              {social?.medium && (
                <IconButton
                  icon={<AiFillMediumSquare />}
                  link={`https://medium.com/@${social.medium}`}
                  title="Medium"
                />
              )}
              {social?.dev && (
                <IconButton
                  icon={<FaDev />}
                  link={`https://dev.to/${social.dev}`}
                  title="Dev"
                />
              )}
              {social?.stackoverflow && (
                <IconButton
                  icon={<FaStackOverflow />}
                  link={`https://stackoverflow.com/users/${social.stackoverflow}`}
                  title="StackOverflow"
                />
              )}
              {social?.telegram && (
                <IconButton
                  icon={<FaTelegram />}
                  link={`https://t.me/${social.telegram}`}
                  title="Telegram"
                />
              )}
              {social?.phone && (
                <IconButton
                  icon={<RiPhoneFill />}
                  link={`tel:${social.phone}`}
                  title="Phone"
                />
              )}
              {social?.discord && (
                <IconButton
                  icon={<RiDiscordFill />}
                  link="https://discord.com/app"
                  title="Discord"
                />
              )}
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
