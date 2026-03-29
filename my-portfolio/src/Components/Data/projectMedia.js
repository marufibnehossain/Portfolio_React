import { image } from '../../assets/images/image';

/** Maps JSON string keys to bundled assets. Use /uploads/… or https://… for images in public/uploads or external URLs. */
const PROJECT_IMAGE_MAP = {
  saBanner: image.saBanner,
  smileBanner: image.smileBanner,
  smileLogo: image.smileLogo,
  salmanLogo: image.salmanLogo,
  hakkaniBg: image.hakkaniBg,
  hakkaniLogo: image.hakkaniLogo,
  containers: image.containers,
  advancedLogo: image.advancedLogo,
  fajrBanner: image.fajrBanner,
  fajrLogo: image.fajrLogo,
  atomyBanner: image.atomyBanner,
  atomyLogo: image.atomyLogo,
  fajrlBanner: image.fajrlBanner,
  fajrlLogo: image.fajrlLogo,
  simonbanner: image.simonbanner,
  simonLogo: image.simonLogo,
  drumBanner: image.drumBanner,
  drumLogo: image.drumLogo,
  igpBanner: image.igpBanner,
  eelevageBanner: image.eelevageBanner,
  eelevageWLogo: image.eelevageWLogo,
  sheplarBanner: image.sheplarBanner,
  sheplarLogo: image.sheplarLogo,
  perspectiveBanner: image.perspectiveBanner,
  perspectiveLogo: image.perspectiveLogo,
  tomatoBanner: image.tomatoBanner,
  tomatoLogo: image.tomatoLogo,
  fatslimingBanner: image.fatslimingBanner,
  fatslimingLogo: image.fatslimingLogo,
  crownBanner: image.crownBanner,
  crownLogo: image.crownLogo,
  hanzaGroupBanner: image.hanzaGroupBanner,
  hanzaGroupLogo: image.hanzaGroupLogo,
  beautyEssenceBdBanner: image.beautyEssenceBdBanner,
  beautyEssenceLogo: image.beautyEssenceLogo,
  ten2ThousandBanner: image.ten2ThousandBanner,
  ten2ThousandLogo: image.ten2ThousandLogo,
  arabianBorkaFashionBanner: image.arabianBorkaFashionBanner,
  arabianBorkaFashionLogo: image.arabianBorkaFashionLogo,
};

function resolveMedia(value) {
  if (value == null || value === '') return '';
  const s = String(value).trim();
  if (s.startsWith('/') || s.startsWith('http://') || s.startsWith('https://')) return s;
  return PROJECT_IMAGE_MAP[s] ?? '';
}

/**
 * @param {Array<Record<string, unknown>>} rawProjects
 */
export function normalizeProjectsData(rawProjects) {
  return rawProjects.map((item, index) => ({
    ...item,
    id: index + 1,
    image: resolveMedia(item.image),
    logoimg: resolveMedia(item.logoimg),
    featured: Boolean(item.featured),
  }));
}
