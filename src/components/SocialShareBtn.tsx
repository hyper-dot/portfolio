"use client";
import React, { FC } from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  RedditShareButton,
} from "react-share";

import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaReddit,
  FaWhatsapp,
  FaShareAlt,
} from "react-icons/fa";

type TSocialShareBtn = {
  url: string;
};
const SocialShareBtn: FC<TSocialShareBtn> = ({ url }) => {
  return (
    <div className="flex items-center gap-2 py-2">
      <FaShareAlt size={16} />
      <FacebookShareButton url={url}>
        <FaFacebook size={22} title="Share it on Facebook" />
      </FacebookShareButton>
      <LinkedinShareButton url={url}>
        <FaLinkedin size={22} title="Share it on Linkedin" />
      </LinkedinShareButton>
      <WhatsappShareButton url={url}>
        <FaWhatsapp size={22} title="Share it on Whatsapp" />
      </WhatsappShareButton>
      <TwitterShareButton url={url}>
        <FaTwitter size={22} title="Share it on Twitter" />
      </TwitterShareButton>
      <RedditShareButton url={url}>
        <FaReddit size={22} title="Share it on Reddit" />
      </RedditShareButton>
    </div>
  );
};

export default SocialShareBtn;
