export const PORTFOLIO_QUERY = `*[
  _type == "portfolio_content"
] {
  ...,
  "social_media": social_media[]->{
    _id,
    name,
    url,
    icon
  }
}`;
export const SOCIAL_MEDIA_QUERY = `*[
  _type == "portfolio_content"
][0]{
  social_media[]->{
    name,
    url,
    icon 
  }
}`;
