"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const SocialMediaLinks = () => {
  return (
    <div className="flex flex-row gap-4">
      <a
        href="https://github.com/harshith754"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      {/* <a
        href="https://www.youtube.com/channel/UCfKRZUU78XIcQvh1_QsdQyA"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a> */}
      <a
        href="https://www.linkedin.com/in/harshith-kunder-7660b822a/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
