'use client';

import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';

const ShareButtons = ({ shareUrl }: { shareUrl: string }) => (
  <div className="mt-12">
    <p className="mb-4 text-base font-medium uppercase leading-[2px] text-gray-900">
      Share this post
    </p>
    <div className="flex flex-row space-x-2">
      <LinkedinShareButton url={shareUrl}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <TwitterShareButton url={shareUrl}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <FacebookShareButton url={shareUrl}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
    </div>
  </div>
);

export default ShareButtons;
