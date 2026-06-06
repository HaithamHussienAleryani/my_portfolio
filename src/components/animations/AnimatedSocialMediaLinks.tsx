import { ArrowUpRight } from "lucide-react";

type SocialLinksProps = {
  name: string;
  url: string;
  index: number;
};

function AnimatedSocialMediaLinks(props: SocialLinksProps) {
  return (
    <li className="mb-2 flex space-x-2">
      <a
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-1.5 uppercase transition-colors duration-200 hover:text-primary"
      >
        <span>{props.name}</span>
        <ArrowUpRight size={18} />
      </a>
    </li>
  );
}

export default AnimatedSocialMediaLinks;
